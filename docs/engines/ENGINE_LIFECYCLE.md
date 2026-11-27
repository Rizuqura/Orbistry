# Installing, detaching and restoring Engines

Run these commands from the Orbistry repository. Set `$universe` to the selected Universe directory and `$entity` to an existing Entity key. Inspect the files and use the digest printed by the installation as `$digest`.

```powershell
npm.cmd run engine -- check --source examples/engines/weather-demo
npm.cmd run engine -- install --source examples/engines/weather-demo --vault "$universe"
npm.cmd run engine -- trust --vault "$universe" --id weather-demo --digest "$digest"
npm.cmd run engine -- link --vault "$universe" --entity "$entity" --id weather-demo --operations temperature --policy automatic
npm.cmd run engine -- list --vault "$universe" --entity "$entity"
```

| Action | Effect |
| --- | --- |
| unlink | Removes one Entity's operation grants. |
| revoke | Withdraws trust in the reviewed bytes and drops grants. |
| disable | Preserves installed versions and removes the package's grants. |
| enable | Enables the reviewed active digest. Grant Entity operations again. |
| uninstall | Checks every registered version of the selected package and detaches its directories and grants. Existing Entity metadata, declarations, user files and execution evidence remain. |
| reinstall | Copies a compatible package, initially untrusted. Review its digest, trust and relink the permitted operations. Old Agent nodes pinned to a different digest require explicit Workbench reconfiguration. |

```powershell
npm.cmd run engine -- disable --vault "$universe" --id weather-demo --digest "$digest"
npm.cmd run engine -- enable --vault "$universe" --id weather-demo --digest "$digest"
npm.cmd run engine -- uninstall --vault "$universe" --id weather-demo --digest "$digest"
npm.cmd run engine -- result --vault "$universe" --entity "$entity" --execution "$executionId"
```

Historical reads check Entity ownership, host authorization and stored evidence. Package removal during execution withholds successful publication if the final grant check observes the change. Final registry checks and successful receipt writes share the registry writer lock. A killed process can leave a running receipt, lock or quarantined directory. Inspect those artifacts before manual recovery. Uninstall refuses to erase modified or untracked package bytes.

To roll back a package version, retain its sealed distribution and back up the Universe, then uninstall the reviewed current version, install the preserved distribution, verify, trust and relink. To roll back the application, preserve the newer Registry state and applied declarations in the backup. Earlier Orbistry versions cannot parse schema 3 declarations and registry additions. Restore a matching application/data backup for a full downgrade.
