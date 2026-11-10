# Orbistry v1.0.1 Victoria Beta — validasi source release

Tanggal: 30 Oktober 2026. Target: branch `main`, tag `v1.0.1`, repository `Rizuqura/orbistry`.

## Perubahan yang dikonsolidasikan

- Perbaikan NVIDIA Lightning/Nano Omni, OpenRouter output-cap aliases, koordinasi pemeriksaan model, non-streaming eksperimen dan error/stage diagnostics dari branch audit.
- Modul Front Office, kontrak/configuration, capability catalog, budgets/routing, reliability, metrics export, evaluasi dan dokumentasi.
- Perubahan editor Markdown dan vault-write yang sudah ada sebelum audit tetap dipertahankan.
- Versi package/lockfile, navbar, startup badge dan pemeriksaan versi diperbarui ke 1.0.1. Nama aplikasi/profile tetap Orbistry; jalur migrasi legacy tidak diubah.

## Pemeriksaan akhir

| Pemeriksaan                      | Hasil                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Seluruh suite Node               | **350 test: 348 PASS, 2 SKIP eksplisit, 0 gagal**                                                                         |
| TypeScript                       | PASS                                                                                                                      |
| Produksi Next.js static export   | PASS, `next build --webpack`                                                                                              |
| Static export security hardening | PASS                                                                                                                      |
| Format integration surface       | PASS                                                                                                                      |
| Git whitespace check             | PASS                                                                                                                      |
| Known-pattern secret audit       | Tidak ada temuan; bukan audit entropy menyeluruh                                                                          |
| Electron Front Office            | PASS: history, catalog, partial retry, check admission, enam error terlihat, bounded fallback, privacy; provider sintetis |
| Electron Agent/Context runtime   | PASS; provider sintetis                                                                                                   |
| Electron Markdown editor         | PASS: save, shortcut, line endings, draft/discard dan conflict handling                                                   |
| Electron clean startup/release   | PASS: badge v1.0.1, profile kosong tanpa key/agent/chat/context, tidak ada renderer error                                 |

Build dan pengujian Electron menggunakan salinan source terisolasi di `tmp/release-v1.0.1-validation`, dengan profil/vault sementara. `node_modules` dipakai melalui junction; webpack digunakan untuk resolusi package pada direktori validasi. Build tidak menimpa `.next` aplikasi pribadi yang sedang berjalan. Manifest source dan log lokal berada di `test-results/v1.0.1` dan direktori validasi; direktori tersebut diabaikan Git.

Perintah utama yang dijalankan:

```powershell
npm.cmd test
npm.cmd run typecheck
npm.cmd run prepare:pdf
node node_modules/next/dist/bin/next build --webpack
node scripts/secure-export.cjs
npm.cmd run format:check
node scripts/release-secret-audit.cjs
node scripts/electron-front-office-smoke.cjs
node scripts/electron-runtime-kernel-smoke.cjs
node scripts/electron-markdown-editor-smoke.cjs
node scripts/electron-release-smoke.cjs
git diff --check
```

Dua test live berbasis environment pada suite Node tetap dilewati secara eksplisit. Bukti live provider dari audit sebelumnya tersedia pada [laporan Nano Omni](Orbistry_NVIDIA_Omni_Fix_QT-RCA-003.md) dan [provider RCA](../docs/backend/PROVIDER_RCA.md). Tidak ada panggilan provider berbayar baru untuk bump versi ini. Bukti tersebut dibatasi pada model/skenario yang diuji; screenshot historis tetap menunjukkan versi aplikasi saat pengambilan.

## Batas release

Ini publikasi source dan Git tag. Installer Windows/ASAR baru tidak dibangun, diuji atau diunggah pada permintaan ini. Penghematan kredit end-to-end, metering NVIDIA lengkap, Agent Chat comparison dashboard, full-PDF compression/retrieval, semua model NVIDIA, LiteLLM nyata dan konteks historis 126K tidak diklaim selesai. Lihat [status token/kredit](Orbistry_Token_Credit_Comparison_Status.md).

Setelah memperbarui source, restart penuh Electron agar adapter/preload terbaru dimuat. Pertahankan data percakapan/run schema baru sebelum rollback ke versi lama.
