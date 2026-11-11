import type {
  KnowledgeNode,
  LayoutMode,
  LayoutResult,
  NodeLayout,
  PlanetGraph,
  StationCluster,
} from "../types/graph";

const PADDING = 130;
const TAU = Math.PI * 2;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function idHash(id: string): number {
  let hash = 2166136261;
  for (let index = 0; index < id.length; index += 1) {
    hash ^= id.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function stableUnit(id: string, salt: string): number {
  return idHash(`${salt}:${id}`) / 4294967296;
}

function finishLayout(positions: Map<string, NodeLayout>): LayoutResult {
  if (positions.size === 0)
    return { positions, width: 1, height: 1, minX: 0, minY: 0 };
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const { x, y, size } of positions.values()) {
    const radius = size / 2;
    minX = Math.min(minX, x - radius);
    minY = Math.min(minY, y - radius);
    maxX = Math.max(maxX, x + radius);
    maxY = Math.max(maxY, y + radius);
  }
  const shiftX = PADDING - minX;
  const shiftY = PADDING - minY;
  for (const position of positions.values()) {
    position.x += shiftX;
    position.y += shiftY;
  }
  return {
    positions,
    width: maxX - minX + PADDING * 2,
    height: maxY - minY + PADDING * 2,
    minX: PADDING,
    minY: PADDING,
  };
}

interface LocalSystem {
  positions: Map<string, NodeLayout>;
  radius: number;
}

interface OrbitingSystem {
  id: string;
  system: LocalSystem;
  radius: number;
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  maxDrift: number;
}

interface OrbitPlane {
  point(angle: number, radius: number): { x: number; y: number };
}

function orbitPlane(id: string): OrbitPlane {
  const aspect = 0.72 + stableUnit(id, "orbit-aspect") * 0.12;
  const tilt = (stableUnit(id, "orbit-tilt") - 0.5) * 0.8;
  const cosTilt = Math.cos(tilt);
  const sinTilt = Math.sin(tilt);
  return {
    point(angle, radius) {
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * aspect;
      return { x: x * cosTilt - y * sinTilt, y: x * sinTilt + y * cosTilt };
    },
  };
}

function clampToHome(body: OrbitingSystem): void {
  const dx = body.x - body.homeX;
  const dy = body.y - body.homeY;
  const distance = Math.hypot(dx, dy);
  if (distance <= body.maxDrift || distance === 0) return;
  body.x = body.homeX + (dx / distance) * body.maxDrift;
  body.y = body.homeY + (dy / distance) * body.maxDrift;
}

function relaxLocalBodies(bodies: OrbitingSystem[], gap: number): void {
  for (let iteration = 0; iteration < 28; iteration += 1) {
    for (let left = 0; left < bodies.length; left += 1) {
      for (let right = left + 1; right < bodies.length; right += 1) {
        const a = bodies[left];
        const b = bodies[right];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.hypot(dx, dy) || 0.001;
        const minimum = a.radius + b.radius + gap;
        if (distance >= minimum) continue;
        const correction = (minimum - distance) * 0.52;
        const ux = dx / distance;
        const uy = dy / distance;
        a.x -= ux * correction;
        a.y -= uy * correction;
        b.x += ux * correction;
        b.y += uy * correction;
      }
    }
    for (const body of bodies) {
      body.x += (body.homeX - body.x) * 0.18;
      body.y += (body.homeY - body.y) * 0.18;
      clampToHome(body);
    }
  }
}

function computeOrganicLayout(
  graph: PlanetGraph,
  sizeCache: ReadonlyMap<string, number>,
): LayoutResult {
  const buildSystem = (id: string): LocalSystem => {
    const node = graph.byId.get(id);
    if (!node) return { positions: new Map(), radius: 0 };

    const nodeSize = sizeCache.get(id) ?? 6;
    const positions = new Map<string, NodeLayout>([
      [id, { x: 0, y: 0, size: nodeSize }],
    ]);
    const files = node.children
      .filter(
        (childId) =>
          graph.byId.get(childId)?.type === "file" &&
          graph.byId.get(childId)?.fileType !== "other",
      )
      .sort((a, b) => idHash(a) - idHash(b) || a.localeCompare(b));
    const directories = node.children
      .filter((childId) => graph.byId.get(childId)?.type === "directory")
      .sort((a, b) => idHash(a) - idHash(b) || a.localeCompare(b));
    const asteroids = node.children
      .filter((childId) => graph.byId.get(childId)?.fileType === "other")
      .sort((a, b) => idHash(a) - idHash(b) || a.localeCompare(b));

    const children: OrbitingSystem[] = directories.map((childId) => {
      const system = buildSystem(childId);
      return {
        id: childId,
        system,
        radius: Math.max(system.radius, (sizeCache.get(childId) ?? 6) / 2),
        x: 0,
        y: 0,
        homeX: 0,
        homeY: 0,
        maxDrift: 12,
      };
    });

    // A shared plane gives each local system the readable silhouette of a
    // solar-system diagram. The values are path-derived, so the plane remains
    // stable while still varying naturally between folders.
    const plane = orbitPlane(id);

    // Direct files belong to this anchor, not to the footprint of a nested
    // directory. Keeping them on compact inner belts is the key hierarchy
    // invariant of the Planet view.
    let localOuter = nodeSize / 2;
    const fileCapacity = 8;
    for (
      let start = 0, ringIndex = 0;
      start < files.length;
      start += fileCapacity, ringIndex += 1
    ) {
      const ring = files.slice(start, start + fileCapacity);
      const largest = Math.max(
        ...ring.map((fileId) => (sizeCache.get(fileId) ?? 6) / 2),
      );
      const circumference = ring.reduce(
        (sum, fileId) => sum + (sizeCache.get(fileId) ?? 6) + 28,
        0,
      );
      const orbit = Math.max(localOuter + largest + 34, circumference / TAU);
      const phase = stableUnit(id, `file-phase-${ringIndex}`) * TAU;
      ring.forEach((fileId, index) => {
        const angle =
          phase +
          ((index + 0.5) / ring.length) * TAU +
          (stableUnit(fileId, "file-angle") - 0.5) * 0.1;
        const point = plane.point(
          angle,
          orbit + (stableUnit(fileId, "file-radius") - 0.5) * 5,
        );
        positions.set(fileId, { ...point, size: sizeCache.get(fileId) ?? 6 });
      });
      localOuter = orbit + largest + 12;
    }

    // Each parent owns a small orbital system. Large families spill onto
    // additional rings, while every child branch is packed as one footprint.
    let previousOuter = localOuter;
    const ringCapacity = 6;
    for (
      let start = 0, ringIndex = 0;
      start < children.length;
      start += ringCapacity, ringIndex += 1
    ) {
      const ring = children.slice(start, start + ringCapacity);
      const largestChild = Math.max(...ring.map((child) => child.radius));
      const requiredCircumference = ring.reduce(
        (sum, child) => sum + child.radius * 2 + 40,
        0,
      );
      const orbitRadius = Math.max(
        previousOuter + largestChild + 48,
        requiredCircumference / TAU,
      );
      const phase = stableUnit(id, `phase-${ringIndex}`) * TAU;
      const totalWeight = ring.reduce(
        (sum, child) => sum + child.radius * 2 + 40,
        0,
      );
      let cursor = phase;

      for (const child of ring) {
        const slot = ((child.radius * 2 + 40) / totalWeight) * TAU;
        const angularJitter =
          (stableUnit(child.id, "angle") - 0.5) * Math.min(slot * 0.14, 0.12);
        const radialJitter = (stableUnit(child.id, "radius") - 0.5) * 8;
        const angle = cursor + slot / 2 + angularJitter;
        const distance = orbitRadius + radialJitter;
        const point = plane.point(angle, distance);
        child.x = point.x;
        child.y = point.y;
        child.homeX = point.x;
        child.homeY = point.y;
        cursor += slot;
      }
      previousOuter = orbitRadius + largestChild + 8;
    }

    // Whole subtrees collide as bounded bodies. The home attraction prevents
    // a collision fix from breaking the subtree's relationship to its parent.
    relaxLocalBodies(children, 24);

    let systemRadius = localOuter;
    for (const child of children) {
      for (const [childId, position] of child.system.positions) {
        positions.set(childId, {
          ...position,
          x: position.x + child.x,
          y: position.y + child.y,
        });
      }
      systemRadius = Math.max(
        systemRadius,
        Math.hypot(child.x, child.y) + child.radius,
      );
    }

    // Unsupported files retain their compact asteroid belts close to their
    // own parent rather than participating in the readable-planet packing.
    asteroids.forEach((asteroidId, index) => {
      const ring = Math.floor(index / 8);
      const ringMembers = Math.min(8, asteroids.length - ring * 8);
      const slot = index % 8;
      const phase = stableUnit(id, `asteroid-phase-${ring}`) * TAU;
      const angle =
        phase +
        (slot / ringMembers) * TAU +
        (stableUnit(asteroidId, "asteroid-angle") - 0.5) * 0.12;
      const orbit =
        nodeSize / 2 +
        19 +
        ring * 10 +
        (stableUnit(asteroidId, "asteroid-radius") - 0.5) * 4;
      const asteroid = graph.byId.get(asteroidId);
      const size = asteroid ? (sizeCache.get(asteroidId) ?? 4.2) : 4.2;
      const point = plane.point(angle, orbit);
      positions.set(asteroidId, { x: point.x, y: point.y, size });
      systemRadius = Math.max(
        systemRadius,
        Math.hypot(point.x, point.y) + size / 2,
      );
    });

    return { positions, radius: systemRadius };
  };

  return finishLayout(buildSystem(graph.rootId).positions);
}

// Seven balanced size-ranked bands. Byte metadata drives gravity; old
// snapshots without metadata use descendant counts as a deterministic fallback.
export function gravityMasses(graph: PlanetGraph): Map<string, number> {
  const masses = new Map<string, number>();
  for (const node of [...graph.nodes].sort((a, b) => b.level - a.level)) {
    masses.set(
      node.id,
      node.type === "directory"
        ? node.children.reduce((sum, id) => sum + (masses.get(id) ?? 0), 0)
        : Math.max(0, node.sizeBytes ?? 1),
    );
  }
  return masses;
}

function computeGravityLayout(graph: PlanetGraph): LayoutResult {
  const masses = gravityMasses(graph);
  const positions = new Map<string, NodeLayout>();
  const orbits: NonNullable<LayoutResult["orbits"]> = [];
  let maxMass = 1;
  for (const mass of masses.values()) maxMass = Math.max(maxMass, mass);
  const size = (node: KnowledgeNode) =>
    node.id === graph.rootId
      ? 480
      : node.type === "directory"
        ? 30 + (38 * Math.log1p(masses.get(node.id) ?? 0)) / Math.log1p(maxMass)
        : (node.fileType === "other" ? 9 : 14) +
          (14 * Math.log1p(masses.get(node.id) ?? 0)) / Math.log1p(maxMass);
  const sorted = (ids: string[]) =>
    [...ids].sort(
      (a, b) =>
        (masses.get(b) ?? 0) - (masses.get(a) ?? 0) || a.localeCompare(b),
    );
  const build = (
    id: string,
  ): { radius: number; ids: string[]; guides: number[] } => {
    const node = graph.byId.get(id)!;
    const diameter = size(node);
    positions.set(id, { x: 0, y: 0, size: diameter });
    const members = [id];
    const guideIndices: number[] = [];
    let outer = diameter / 2;
    // Files and folders compete in one descending content-size order.
    // Equal-count bands avoid piling many similarly sized objects into one orbit.
    const children = sorted(node.children);
    const systems = new Map<
      string,
      { radius: number; ids: string[]; guides: number[] }
    >();
    for (const child of children) {
      const childNode = graph.byId.get(child)!;
      if (childNode.type === "directory") systems.set(child, build(child));
      else {
        const diameter = size(childNode);
        positions.set(child, { x: 0, y: 0, size: diameter });
        systems.set(child, {
          radius: diameter / 2 + 10,
          ids: [child],
          guides: [],
        });
      }
    }
    const bands = Array.from({ length: 7 }, () => [] as string[]);
    children.forEach((child, index) =>
      bands[
        Math.min(6, Math.floor((index * 7) / Math.max(1, children.length)))
      ].push(child),
    );
    let footprint = 0;
    for (const system of systems.values())
      footprint = Math.max(footprint, system.radius);
    let firstRadius = diameter / 2 + footprint + 28;
    // All seven guides share one step, including unoccupied bands.
    let step = Math.max(id === graph.rootId ? 48 : 16, footprint * 0.9);
    for (let band = 0; band < 7; band++) {
      const circumference = bands[band].reduce(
        (sum, child) => sum + systems.get(child)!.radius * 2 + 24,
        0,
      );
      if (band > 0)
        step = Math.max(
          step,
          ((circumference / TAU) * 1.3 - firstRadius) / band,
        );
      else if ((circumference / TAU) * 1.3 > firstRadius)
        firstRadius = Math.max(firstRadius, (circumference / TAU) * 1.3);
    }
    const phase = stableUnit(id, "gravity-balanced") * TAU;
    let placements: { id: string; x: number; y: number; radius: number }[] = [];
    // Find angles without changing size rank or bending the seven guides.
    // A small spatial grid keeps checks local for large sibling groups.
    for (let attempt = 0; attempt < 12; attempt++) {
      placements = [];
      const cell = Math.max(32, footprint * 2 + 24);
      const grid = new Map<string, typeof placements>();
      let crowded = false;
      let crowdedBand = -1;
      for (let index = 0; index < children.length; index++) {
        const child = children[index],
          system = systems.get(child)!;
        const band = Math.min(
          6,
          Math.floor((index * 7) / Math.max(1, children.length)),
        );
        const siblings = bands[band];
        const slot = siblings.indexOf(child);
        const withinBand =
          siblings.length > 1 ? (slot / siblings.length) * step * 0.2 : 0;
        const distance = firstRadius + band * step + withinBand;
        let found: (typeof placements)[number] | undefined;
        for (let turn = 0; turn < 96; turn++) {
          const angle = phase + index * 2.399963229728653 + (turn * TAU) / 96;
          const candidate = {
            id: child,
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            radius: system.radius,
          };
          const gx = Math.floor(candidate.x / cell),
            gy = Math.floor(candidate.y / cell);
          let overlaps = false;
          for (let x = gx - 1; x <= gx + 1 && !overlaps; x++)
            for (let y = gy - 1; y <= gy + 1 && !overlaps; y++) {
              overlaps = (grid.get(x + ":" + y) ?? []).some(
                (other) =>
                  Math.hypot(other.x - candidate.x, other.y - candidate.y) <
                  other.radius + candidate.radius + 18,
              );
            }
          if (!overlaps) {
            found = candidate;
            break;
          }
        }
        if (!found) {
          crowded = true;
          crowdedBand = band;
          break;
        }
        placements.push(found);
        const key =
          Math.floor(found.x / cell) + ":" + Math.floor(found.y / cell);
        const bucket = grid.get(key) ?? [];
        bucket.push(found);
        grid.set(key, bucket);
      }
      if (!crowded) break;
      if (crowdedBand === 0) firstRadius *= 1.2;
      else step *= 1.2;
    }
    // If an extremely dense inner band needs more space, expand the common
    // starting radius too; retain every node even for unusual large vaults.
    if (placements.length !== children.length) {
      placements = children.map((child, index) => {
        const band = Math.min(
          6,
          Math.floor((index * 7) / Math.max(1, children.length)),
        );
        const angle = phase + index * 2.399963229728653;
        const distance =
          firstRadius +
          band * step +
          (bands[band].indexOf(child) / Math.max(1, bands[band].length)) *
            step *
            0.2;
        return {
          id: child,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          radius: systems.get(child)!.radius,
        };
      });
    }
    if (children.length || id === graph.rootId)
      for (let band = 0; band < 7; band++) {
        if (id !== graph.rootId && bands[band].length === 0) continue;
        const radius = firstRadius + band * step;
        guideIndices.push(orbits.length);
        orbits.push({ parentId: id, x: 0, y: 0, radius });
        outer = Math.max(outer, radius);
      }
    for (const placement of placements) {
      const system = systems.get(placement.id)!;
      for (const member of system.ids) {
        const position = positions.get(member)!;
        position.x += placement.x;
        position.y += placement.y;
        members.push(member);
      }
      for (const index of system.guides) {
        orbits[index].x += placement.x;
        orbits[index].y += placement.y;
      }
      guideIndices.push(...system.guides);
      outer = Math.max(
        outer,
        Math.hypot(placement.x, placement.y) + system.radius,
      );
    }
    return { radius: outer, ids: members, guides: guideIndices };
  };
  build(graph.rootId);
  // Include every complete guide in Fit View without changing node distances.
  let extent = 0;
  for (const orbit of orbits)
    extent = Math.max(
      extent,
      Math.abs(orbit.x) + orbit.radius,
      Math.abs(orbit.y) + orbit.radius,
    );
  for (const pos of positions.values())
    extent = Math.max(
      extent,
      Math.abs(pos.x) + pos.size / 2,
      Math.abs(pos.y) + pos.size / 2,
    );
  const shift = extent + PADDING;
  for (const pos of positions.values()) {
    pos.x += shift;
    pos.y += shift;
  }
  for (const orbit of orbits) {
    orbit.x += shift;
    orbit.y += shift;
  }
  return {
    positions,
    orbits,
    width: shift * 2,
    height: shift * 2,
    minX: PADDING,
    minY: PADDING,
  };
}

export function sizeOf(node: KnowledgeNode, childCount: number): number {
  if (node.type === "directory") {
    if (node.level === 0) return 56;
    const base = 22 + Math.min(childCount, 10) * 2 + (node.level === 1 ? 6 : 0);
    return clamp(base, 22, 42);
  }
  if (node.fileType === "other") return 9;
  let size = 14;
  if (node.fileType === "csv") size += 0.6;
  size += Math.min(node.connections.length, 4) * 0.4;
  return clamp(size, 14, 20);
}

export function computeStationLayout(
  graph: PlanetGraph,
  matchIds: ReadonlySet<string>,
  clusters: readonly StationCluster[] = [],
): LayoutResult {
  const sizes = new Map(
    graph.nodes.map((node) => [node.id, sizeOf(node, node.children.length)]),
  );
  const base = computeOrganicLayout(graph, sizes);
  const positions = new Map(
    [...base.positions].map(([id, value]) => [id, { ...value }]),
  );
  const homes = new Map(
    [...positions].map(([id, value]) => [id, { x: value.x, y: value.y }]),
  );
  const rootPosition = positions.get(graph.rootId) ?? {
    x: base.width / 2,
    y: base.height / 2,
    size: 26,
  };
  const hubs = new Map<
    string,
    { id: string; name: string; x: number; y: number; size: number }
  >();
  const hubRadius =
    clusters.length > 1 ? Math.max(170, clusters.length * 72) : 0;
  clusters.forEach((cluster, index) => {
    const angle = -Math.PI / 2 + (index / Math.max(1, clusters.length)) * TAU;
    hubs.set(cluster.id, {
      id: cluster.id,
      name: cluster.name,
      x: rootPosition.x + Math.cos(angle) * hubRadius,
      y:
        rootPosition.y +
        Math.sin(angle) * hubRadius +
        (clusters.length === 1 ? -42 : 0),
      size: 18,
    });
  });
  const memberships = new Map<string, StationCluster[]>();
  for (const cluster of clusters)
    for (const memberId of cluster.memberIds) {
      const current = memberships.get(memberId) ?? [];
      current.push(cluster);
      memberships.set(memberId, current);
    }

  // Semantic links reshape the projection, but each match has a leash back to
  // its filesystem-derived home. This lets related knowledge approach without
  // losing the directory family that explains where it came from.
  for (let iteration = 0; iteration < 42; iteration += 1) {
    for (const [memberId, memberClusters] of memberships) {
      const position = positions.get(memberId);
      if (!position || memberClusters.length === 0) continue;
      let targetX = 0;
      let targetY = 0;
      for (const cluster of memberClusters) {
        const hub = hubs.get(cluster.id);
        if (!hub) continue;
        const angle = stableUnit(memberId, `station:${cluster.id}`) * TAU;
        targetX += hub.x + Math.cos(angle) * 118;
        targetY += hub.y + Math.sin(angle) * 118 * 0.78;
      }
      targetX /= memberClusters.length;
      targetY /= memberClusters.length;
      position.x += (targetX - position.x) * 0.075;
      position.y += (targetY - position.y) * 0.075;
    }

    // Direct matches get semantic freedom; structural nodes only relax enough
    // to follow the local family and the vault root remains a stable reference.
    for (const [id, position] of positions) {
      const home = homes.get(id);
      if (!home) continue;
      const node = graph.byId.get(id);
      const maxDrift =
        id === graph.rootId
          ? 0
          : matchIds.has(id)
            ? 260
            : node?.type === "directory"
              ? 74
              : 34;
      position.x += (home.x - position.x) * (matchIds.has(id) ? 0.055 : 0.14);
      position.y += (home.y - position.y) * (matchIds.has(id) ? 0.055 : 0.14);
      const dx = position.x - home.x;
      const dy = position.y - home.y;
      const distance = Math.hypot(dx, dy);
      if (distance > maxDrift && distance > 0) {
        position.x = home.x + (dx / distance) * maxDrift;
        position.y = home.y + (dy / distance) * maxDrift;
      }
    }

    // Hard node collision is intentionally global in the temporary Station
    // universe, then the next home pass reins in any displacement it causes.
    const ids = [...positions.keys()].sort();
    for (let left = 0; left < ids.length; left += 1) {
      for (let right = left + 1; right < ids.length; right += 1) {
        const a = positions.get(ids[left]) as NodeLayout;
        const b = positions.get(ids[right]) as NodeLayout;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.hypot(dx, dy) || 0.001;
        const minimum = (a.size + b.size) / 2 + 44;
        if (distance >= minimum) continue;
        const correction = (minimum - distance) * 0.5;
        a.x -= (dx / distance) * correction;
        a.y -= (dy / distance) * correction;
        b.x += (dx / distance) * correction;
        b.y += (dy / distance) * correction;
      }
    }
  }

  // Structural anchors follow the center of their visible family slightly,
  // bottom-up, reducing long hierarchy spokes without rewriting topology.
  const directories = graph.nodes
    .filter((node) => node.type === "directory" && node.id !== graph.rootId)
    .sort((a, b) => b.level - a.level || a.id.localeCompare(b.id));
  for (const directory of directories) {
    const position = positions.get(directory.id);
    const children = directory.children
      .map((id) => positions.get(id))
      .filter((value): value is NodeLayout => Boolean(value));
    const home = homes.get(directory.id);
    if (!position || !home || children.length === 0) continue;
    const centerX =
      children.reduce((sum, child) => sum + child.x, 0) / children.length;
    const centerY =
      children.reduce((sum, child) => sum + child.y, 0) / children.length;
    const targetX = position.x + (centerX - position.x) * 0.16;
    const targetY = position.y + (centerY - position.y) * 0.16;
    const dx = targetX - home.x;
    const dy = targetY - home.y;
    const distance = Math.hypot(dx, dy);
    const limit = 24;
    position.x = distance > limit ? home.x + (dx / distance) * limit : targetX;
    position.y = distance > limit ? home.y + (dy / distance) * limit : targetY;
  }

  const combined = new Map(
    [...positions].map(([id, value]) => [id, { ...value }]),
  );
  for (const hub of hubs.values())
    combined.set(`__station_hub__:${hub.id}`, {
      x: hub.x,
      y: hub.y,
      size: hub.size,
    });
  const finished = finishLayout(combined);
  const contextHubs = new Map<
    string,
    { id: string; name: string; x: number; y: number; size: number }
  >();
  for (const hub of hubs.values()) {
    const position = finished.positions.get(`__station_hub__:${hub.id}`);
    if (position)
      contextHubs.set(hub.id, { ...hub, x: position.x, y: position.y });
    finished.positions.delete(`__station_hub__:${hub.id}`);
  }
  return { ...finished, contextHubs };
}

export function computeLayout(
  graph: PlanetGraph,
  mode: LayoutMode,
): LayoutResult {
  const positions = new Map<string, NodeLayout>();
  const sizeCache = new Map<string, number>();
  for (const node of graph.nodes) {
    sizeCache.set(
      node.id,
      sizeOf(node, node.children.length) * (node.id === graph.rootId ? 3 : 1),
    );
  }
  if (mode === "orbital")
    return graph.projection === "station"
      ? computeOrganicLayout(graph, sizeCache)
      : computeGravityLayout(graph);
  const childIds = (id: string) =>
    graph.byId
      .get(id)
      ?.children.filter(
        (childId) => graph.byId.get(childId)?.fileType !== "other",
      ) ?? [];
  const asteroidIds = (id: string) =>
    graph.byId
      .get(id)
      ?.children.filter(
        (childId) => graph.byId.get(childId)?.fileType === "other",
      ) ?? [];

  // A branch receives one continuous angular sector. Its descendants are then
  // placed only inside that sector, which keeps hierarchy edges in their own
  // branch instead of drawing lines through unrelated directories.
  const subtreeWeight = new Map<string, number>();
  const measure = (id: string): number => {
    const children = childIds(id);
    const weight =
      children.length === 0
        ? 1
        : children.reduce((sum, childId) => sum + measure(childId), 0);
    subtreeWeight.set(id, weight);
    return weight;
  };
  measure(graph.rootId);

  const byDepth = new Map<number, string[]>();
  let maxDepth = 0;
  for (const node of graph.nodes) {
    const levelNodes = byDepth.get(node.level) ?? [];
    levelNodes.push(node.id);
    byDepth.set(node.level, levelNodes);
    maxDepth = Math.max(maxDepth, node.level);
  }

  // Scale a ring only as much as its actual population needs. This means
  // adding a file expands its own depth ring predictably rather than sending
  // an arbitrary node across the map.
  const radii: number[] = [0];
  const baseStep = mode === "radial" ? 168 : mode === "force" ? 142 : 126;
  for (let depth = 1; depth <= maxDepth; depth += 1) {
    const nodesAtDepth = byDepth.get(depth) ?? [];
    const circumference = nodesAtDepth.reduce(
      (sum, id) => sum + (sizeCache.get(id) ?? 6) * 2 + 20,
      0,
    );
    const requiredRadius = circumference / (Math.PI * 2);
    radii[depth] = Math.max(radii[depth - 1] + baseStep, requiredRadius + 28);
  }

  const rng = mulberry32(0x9e3779b1);
  const place = (id: string, depth: number, a0: number, a1: number): void => {
    const node = graph.byId.get(id);
    if (!node) return;
    const span = a1 - a0;
    let angle = (a0 + a1) / 2;
    // "Force" remains a more organic option, but its variation is bounded to
    // the node's allocated sector so the layout is stable across rescans.
    if (mode === "force" && depth > 0) angle += (rng() - 0.5) * span * 0.18;
    const radius = radii[depth] ?? 0;
    positions.set(id, {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      size: sizeCache.get(id) ?? 6,
    });

    const parentPosition = positions.get(id);
    const asteroids = asteroidIds(id).sort();
    if (parentPosition) {
      const phase = (idHash(id) / 4294967296) * Math.PI * 2;
      asteroids.forEach((asteroidId, index) => {
        const orbit = 27 + Math.floor(index / 8) * 10;
        const orbitIndex = index % 8;
        const orbitCount = Math.min(
          8,
          asteroids.length - Math.floor(index / 8) * 8,
        );
        const asteroidAngle = phase + (orbitIndex / orbitCount) * Math.PI * 2;
        positions.set(asteroidId, {
          x: parentPosition.x + Math.cos(asteroidAngle) * orbit,
          y: parentPosition.y + Math.sin(asteroidAngle) * orbit,
          size: sizeCache.get(asteroidId) ?? 4.2,
        });
      });
    }

    const children = childIds(id);
    if (children.length === 0) return;
    const totalWeight = children.reduce(
      (sum, childId) => sum + (subtreeWeight.get(childId) ?? 1),
      0,
    );
    let cursor = a0;
    for (const childId of children) {
      const share = (subtreeWeight.get(childId) ?? 1) / totalWeight;
      const childEnd = cursor + span * share;
      // Reserve a slim, proportional buffer between sibling sectors. It keeps
      // labels and large directory stars readable without displacing branches.
      const gap = Math.min((childEnd - cursor) * 0.12, 0.055);
      place(childId, depth + 1, cursor + gap / 2, childEnd - gap / 2);
      cursor = childEnd;
    }
  };

  place(graph.rootId, 0, 0, Math.PI * 2);

  // Station projections add weighted secondary edges. Pull their direct
  // members toward one another deterministically while retaining a weak
  // anchor to the filesystem layout, so knowledge distance never rewrites
  // structural truth.
  const similarityEdges = graph.edges.filter(
    (edge) => edge.kind === "secondary" && edge.similarity,
  );
  if (similarityEdges.length > 0) {
    const anchors = new Map(
      [...positions].map(([id, value]) => [id, { x: value.x, y: value.y }]),
    );
    for (let iteration = 0; iteration < 28; iteration += 1) {
      for (const edge of similarityEdges) {
        const a = positions.get(edge.source);
        const b = positions.get(edge.target);
        if (!a || !b) continue;
        const strength = 0.018 + (edge.similarity ?? 0) * 0.032;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        a.x += dx * strength;
        a.y += dy * strength;
        b.x -= dx * strength;
        b.y -= dy * strength;
      }
      for (const [id, anchor] of anchors) {
        const current = positions.get(id);
        if (!current) continue;
        current.x += (anchor.x - current.x) * 0.012;
        current.y += (anchor.y - current.y) * 0.012;
      }
    }
    // Similarity should change knowledge grouping, not collapse a planet into
    // the vault sun. Restore every node's filesystem-derived orbital radius
    // while retaining the adjusted angle produced by the Station pull.
    const root = positions.get(graph.rootId);
    const rootAnchor = anchors.get(graph.rootId);
    if (root && rootAnchor)
      for (const [id, current] of positions) {
        if (id === graph.rootId) continue;
        const anchor = anchors.get(id);
        if (!anchor) continue;
        const normalRadius = Math.hypot(
          anchor.x - rootAnchor.x,
          anchor.y - rootAnchor.y,
        );
        const dx = current.x - root.x;
        const dy = current.y - root.y;
        const adjustedRadius = Math.hypot(dx, dy);
        if (adjustedRadius > 0 && normalRadius > 0) {
          current.x = root.x + (dx / adjustedRadius) * normalRadius;
          current.y = root.y + (dy / adjustedRadius) * normalRadius;
        }
      }
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const { x, y, size } of positions.values()) {
    minX = Math.min(minX, x - size);
    minY = Math.min(minY, y - size);
    maxX = Math.max(maxX, x + size);
    maxY = Math.max(maxY, y + size);
  }
  const shiftX = PADDING - minX;
  const shiftY = PADDING - minY;
  for (const layout of positions.values()) {
    layout.x += shiftX;
    layout.y += shiftY;
  }

  return {
    positions,
    width: maxX - minX + PADDING * 2,
    height: maxY - minY + PADDING * 2,
    minX: PADDING,
    minY: PADDING,
  };
}

export function subtreeIds(graph: PlanetGraph, rootId: string): Set<string> {
  const result = new Set<string>();
  const stack = [rootId];
  while (stack.length > 0) {
    const id = stack.pop() as string;
    if (result.has(id)) continue;
    result.add(id);
    const node = graph.byId.get(id);
    if (node) stack.push(...node.children);
  }
  return result;
}

export function ancestorPath(graph: PlanetGraph, id: string): string[] {
  const path: string[] = [];
  let current = graph.byId.get(id);
  while (current) {
    path.unshift(current.id);
    current = current.parentId ? graph.byId.get(current.parentId) : undefined;
  }
  return path;
}
