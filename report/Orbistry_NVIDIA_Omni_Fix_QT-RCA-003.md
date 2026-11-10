# QT-RCA-003 — Respons kosong pada NVIDIA Nano Omni

Tanggal: 30 Oktober 2026. Model: `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`.

## Masalah dan penyebab

Perbaikan QT-RCA-002 terlalu sempit: opsi `chat_template_kwargs.enable_thinking=false` hanya dikirim untuk Lightning. Deployment Nano Omni yang dipakai pada chat Training Unit juga mendukung instruct mode, tetapi belum masuk daftar model pada adapter.

Metadata run gagal pengguna menunjukkan estimasi prompt **7.731 token**, output limit **6.000**, **0 karakter jawaban**, dan **12.091 karakter reasoning**, diakhiri error `truncated`. Isi PDF, pertanyaan pribadi dan reasoning mentah tidak disalin ke bukti audit. Ini adalah kegagalan menghasilkan konten sebelum jatah output habis; bukan bukti bahwa input 7K melampaui context window.

## Perbaikan

Adapter NVIDIA sekarang memakai daftar eksplisit dua deployment yang dukungan instruct mode-nya telah diperiksa dan diuji: Lightning dan Nano Omni. Keduanya menerima kontrol thinking melalui jalur Agent Chat normal dan gateway native. Batas output, temperature dan model pilihan pengguna tidak diubah. Model NVIDIA lain tidak diberi parameter yang belum diverifikasi.

Kontrol tersebut didokumentasikan pada [referensi resmi Nano Omni](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning), termasuk contoh instruct mode dengan thinking dimatikan. Menambahkan instruksi teks untuk tidak menampilkan reasoning saja tidak mengatur mode inferensi provider.

Perbaikan sudah diterapkan ke **checkout utama**, bukan hanya worktree audit. Hanya `nvidia-provider.cjs` dan unit test terkait yang diperbarui pada checkout utama; perubahan pengguna lain dipertahankan. Salinan sebelum penerapan berada di `tmp/qt-rca-001/test-results/nvidia-thinking/active-checkout-before-omni`.

## Pengujian provider asli

| Pengujian                                   | Hasil                                                                                                                   |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Prompt marker sederhana, thinking default   | HTTP 200; marker muncul; 98 reasoning tokens dari 106 completion tokens                                                 |
| Prompt marker yang sama, thinking dimatikan | HTTP 200; marker muncul; 0 reasoning tokens dari 7 completion tokens                                                    |
| Input kedua probe                           | 8.036 token menurut provider; output cap sama-sama 256                                                                  |
| Agent Chat biasa, tugas 10 poin keuangan    | **PASS: 10 item bernomor terlihat pada bubble assistant**                                                               |
| Model pada request agent                    | Nano Omni, dipin eksplisit dalam profil sementara; tidak bergantung pada perubahan settings aplikasi pribadi selama tes |
| Ukuran sumber uji                           | 31.063 karakter; estimasi seluruh prompt 11.607 token                                                                   |
| Output limit dan streaming UI               | Tetap 6.000 dan mati                                                                                                    |
| Finish reason / reasoning                   | `stop` / 0 karakter reasoning                                                                                           |
| Durasi backend                              | 4.751 ms; satu panggilan generasi dalam run, tanpa fallback/repair                                                      |

Prompt marker sederhana tidak mereproduksi kegagalan pada Omni: kedua mode menjawab. Kegagalan tugas pengguna dibuktikan oleh metadata run sebenarnya; perbaikan kemudian diuji lebih jauh dengan tugas 10 poin melalui UI. Bukti tersebut tidak disamakan.

Sumber pengujian adalah fakta laporan keuangan **fiktif**, bukan hasil keuangan GOTO. **PDF GOTO FY2025 belum dikirim ulang atau dianalisis dalam pengujian ini.** Usage token run SSE tetap unknown karena tidak dilaporkan pada run tersebut. Pemeriksaan model startup bawaan juga tercatat terpisah dari satu run generasi agent.

## Regresi dan bukti

- Unit NVIDIA/OpenRouter: 20/20 lulus; meliputi kedua model yang didukung dan model lain yang tidak boleh menerima opsi tersebut.
- Gateway native diuji untuk Lightning dan Omni.
- Suite worktree audit: 350 test, 348 lulus, 2 live environment-only dilewati, 0 gagal.
- Suite checkout utama: 346 test, 344 lulus, 2 live environment-only dilewati, 0 gagal.
- Typecheck kedua checkout lulus. Test live di atas dijalankan terpisah dari dua test yang dilewati.

Bukti:

- [Metadata run pengguna yang gagal, tanpa konten pribadi](../docs/backend/evidence/nvidia-omni/reported-failure-metadata.json).
- [Perbandingan provider langsung](../docs/backend/evidence/nvidia-omni/raw-comparison.json).
- [Run Agent Chat dan jawaban uji fiktif](../docs/backend/evidence/nvidia-omni/normal-agent-nvidia.json).
- [Screenshot 10 poin dari Nano Omni](../docs/backend/evidence/nvidia-omni/normal-agent-nvidia.png).

Untuk menjalankan ulang dari worktree audit dengan profil sementara dan kredensial terenkripsi yang tersimpan:

```powershell
node scripts/nvidia-thinking-probe.cjs --model=nvidia/nemotron-3-nano-omni-30b-a3b-reasoning
node scripts/nvidia-agent-live.cjs --model=nvidia/nemotron-3-nano-omni-30b-a3b-reasoning --ten-points
```

Perintah tersebut memakai provider asli dan dapat mengonsumsi quota, termasuk pemeriksaan startup aplikasi. Tidak perlu mengulangnya untuk memakai perbaikan.

## Langkah pada aplikasi

**Tutup Orbistry sepenuhnya dan jalankan kembali dari repo (`npm.cmd run dev`), lalu retry pertanyaan pada chat Training Unit.** Proses Electron yang sudah berjalan masih menyimpan modul adapter lama; reload renderer tidak cukup. Output limit 6.000 tidak perlu dinaikkan untuk menerapkan perbaikan ini.

Status: **Nano Omni terverifikasi menghasilkan jawaban 10 poin pada sumber uji melalui Agent Chat.** Belum ada klaim keberhasilan replay PDF GOTO pribadi, semua model NVIDIA, atau konteks 126K.
