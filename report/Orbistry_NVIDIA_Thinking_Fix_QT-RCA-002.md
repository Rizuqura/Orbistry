# QT-RCA-002 — Perbaikan respons kosong NVIDIA

Pembaruan berikutnya: [QT-RCA-003](Orbistry_NVIDIA_Omni_Fix_QT-RCA-003.md) menambahkan dukungan Nano Omni. Laporan ini mencatat perbaikan dan pengujian Lightning sebelumnya.

Tanggal: 30 Oktober 2026. Tindak lanjut [laporan pertama](Orbistry_Provider_RCA_QT-RCA-001.md).

## 1. Insiden aktual

Pengguna mengalami `NVIDIA reached the output limit before finishing (MODEL_INVALID_RESPONSE)` meskipun konteks sekitar 7K. Audit OpenRouter sebelumnya belum memperbaiki kasus NVIDIA ini, dan perubahan saat itu hanya ada pada worktree audit.

Pembacaan metadata tiga run gagal terbaru mengonfirmasi model aktual `nvidia/nemotron-3.5-lightning-30b-a3b`, estimasi prompt **7.729 token**, context window **32.768**, output limit **6.000**, alasan `truncated`, tanpa callback konten. Isi dokumen dan pesan pribadi tidak disalin ke laporan.

## 2. Penyebab dan bukti provider asli

Model ini mengaktifkan thinking secara default. Orbistry meminta jawaban akhir lewat instruksi teks, tetapi belum mengirim kontrol API untuk mematikan thinking. Reasoning dibuang dari tampilan, sementara jatah output dapat habis sebelum model mengeluarkan jawaban.

Perbandingan berikut memakai **model, input publik, temperature, dan output limit yang sama**; hanya kontrol thinking yang berubah:

| Pengukuran                | Request lama: tanpa kontrol thinking | Request dengan `enable_thinking=false` |
| ------------------------- | ------------------------------------ | -------------------------------------- |
| HTTP                      | 200                                  | 200                                    |
| Input provider            | 8.036 token                          | 8.036 token                            |
| Batas output              | 256 token                            | 256 token                              |
| Output terpakai           | 256 token, seluruhnya reasoning      | 6 token, reasoning 0                   |
| Karakter jawaban terlihat | **0**                                | **12**                                 |
| Finish reason             | `length`                             | `stop`                                 |
| Hasil                     | Tidak ada jawaban                    | `ORBISTRY_OK`                         |
| Durasi                    | 6.049 ms                             | 791 ms                                 |

Ini membuktikan bahwa input sebesar itu dapat diproses oleh deployment yang diuji. Menaikkan batas output atau memperkecil konteks bukan perbaikan yang dibutuhkan untuk reproduksi ini. Metadata run pribadi lama belum menghitung reasoning, sehingga jumlah reasoning pada masing-masing run 6.000-token sebelumnya tidak dapat dipastikan secara retrospektif.

NVIDIA mendokumentasikan kontrol thinking untuk deployment ini pada [playbook resmi](https://build.nvidia.com/playbooks/nim-llm/instructions), serta reasoning budget bawaannya pada [referensi API](https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3-5-lightning-30b-a3b-infer). Instruksi "jangan tampilkan reasoning" di system prompt tidak menggantikan kontrol API tersebut.

## 3. Perbaikan kode

- `NvidiaProvider.generationParameters` mengirim `chat_template_kwargs: { enable_thinking: false }` **khusus ID deployment Lightning yang diuji**. Model lain tidak diberi parameter yang belum diverifikasi.
- Adapter normal dan gateway eksperimen native memakai parameter tersebut. Output limit pengguna tidak dinaikkan; pilihan model, temperature, Context Box dan dokumen pribadi tidak diubah.
- Aktivitas reasoning/heartbeat mereset inactivity timer agar koneksi aktif tidak dianggap diam. Absolute deadline tetap membatasi total durasi.
- Ketika respons lain tetap berakhir `length` dengan reasoning saja, error menjelaskan situasi tersebut dan menyertakan hitungan karakter aman. Reasoning mentah tidak ditampilkan/disimpan dalam diagnostik.
- Validasi respons terpotong dan validasi structured output tetap berlaku; respons tidak dilabeli selesai secara palsu.

## 4. Bukti Agent Chat biasa

Perbaikan diuji melalui **UI Agent Chat biasa**, bukan hanya panel eksperimen atau panggilan langsung:

| Kondisi                         | Hasil                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------- |
| Provider/model                  | NVIDIA / `nvidia/nemotron-3.5-lightning-30b-a3b`                              |
| Sumber                          | Arsip publik sintetis 30.465 karakter; sumber yang sama dengan probe langsung |
| Estimasi seluruh prompt agent   | 11.372 token, termasuk instruksi/envelope                                     |
| Output limit                    | **6.000**, sama dengan konfigurasi pengguna                                   |
| Streaming UI                    | **Mati**, sama dengan konfigurasi pengguna                                    |
| Payload inferensi utama         | Thinking dimatikan; cap 6.000 tetap dikirim                                   |
| Jawaban akhir                   | **`ORBISTRY_OK` terlihat pada bubble assistant**                             |
| Finish reason                   | `stop`                                                                        |
| Reasoning teramati              | 0 karakter                                                                    |
| Waktu callback token pertama    | 688 ms                                                                        |
| Jumlah generasi dalam run agent | 1; tidak memakai repair/fallback                                              |

Adapter normal tetap memakai transport SSE dengan tampilan dibuffer ketika streaming UI mati. Usage token pada run SSE ini tidak dilaporkan dan tetap **unknown**; angka input 8.036 pada probe JSON berasal dari provider, sedangkan 11.372 adalah estimasi aplikasi. Keduanya tidak disamakan.

Harness UI memakai profil/vault sementara dan kredensial OS-encrypted yang sudah tersimpan. Pemeriksaan model startup bawaan juga sempat berjalan sebelum dihentikan; request wire tersebut tercatat terpisah dari satu run generasi agent. Tidak ada mock pada inferensi ini.

## 5. Penerapan ke checkout yang digunakan

Berbeda dengan audit pertama, perbaikan NVIDIA ini **sudah disalin ke checkout utama yang dipakai proses Orbistry aktif** setelah pengujian berhasil. Hash sumber dicek terhadap snapshot sebelum penyalinan untuk mencegah penimpaan edit baru.

File yang diterapkan:

- `electron/ai/providers/openai-chat-provider.cjs`
- `electron/ai/providers/nvidia-provider.cjs`
- `electron/ai/providers/nvidia-provider.test.cjs`
- `electron/ai/llm-front-office/provider-gateway.cjs` — hanya penyisipan parameter model native
- `tsconfig.json` — mengecualikan `tmp` dari kompilasi TypeScript

Cadangan file sebelum penerapan berada di `tmp/qt-rca-001/test-results/nvidia-thinking/active-checkout-before`. Rollback checkout utama harus dibatasi pada file tersebut; revert commit audit saja tidak otomatis mengganti salinan yang sudah diterapkan ke checkout utama. Jangan mereset seluruh working tree karena berisi perubahan pengguna lain.

Pengecualian `tmp` diperlukan karena worktree audit berada di dalam repo dan sebelumnya ikut masuk ke `**/*.ts`/`**/*.tsx`, sehingga deklarasi tipe dua versi bertabrakan. Ini masalah isolasi audit yang diperbaiki, bukan bukti penyebab respons kosong dari provider. Setelah diperbaiki, typecheck kedua checkout lulus. Perubahan lain milik pengguna tetap dipertahankan.

**Proses Electron yang sudah terbuka masih memegang modul backend lama. Tutup Orbistry sepenuhnya dan jalankan ulang dari repo (`npm.cmd run dev`). Reload renderer saja tidak memuat ulang adapter main-process.** Audit ini tidak memaksa menutup aplikasi pribadi atau membuang draft yang belum disimpan.

## 6. Pengujian dan reproduksi

| Pemeriksaan                     | Hasil                                                                |
| ------------------------------- | -------------------------------------------------------------------- |
| Perbandingan NVIDIA langsung    | Reproduksi nol konten sebelum kontrol; jawaban nyata setelah kontrol |
| Agent Chat nyata                | PASS; marker terlihat di assistant, cap pengguna tetap 6.000         |
| Unit NVIDIA + OpenRouter        | 20/20 PASS                                                           |
| Seluruh suite pada branch audit | 350 test: 348 PASS, 2 live environment-only SKIP, 0 gagal            |
| Seluruh suite checkout utama    | 346 test: 344 PASS, 2 live environment-only SKIP, 0 gagal            |
| Typecheck                       | PASS pada kedua checkout                                             |
| Secret pattern audit            | Tidak ada temuan pola yang dikenal; bukan audit entropy menyeluruh   |

Dua skip pada suite Node tidak menggantikan bukti provider asli; panggilan langsung dan Agent Chat di atas dijalankan secara terpisah.

Jalankan dari worktree audit, dengan kredensial NVIDIA yang sudah tersimpan untuk model ini:

```powershell
# Dua panggilan asli, masing-masing cap output 256
node scripts/nvidia-thinking-probe.cjs

# UI Agent Chat asli, cap 6.000 dari setting tersimpan
node scripts/nvidia-agent-live.cjs
```

Perintah tersebut opt-in dan menggunakan quota provider. Skrip UI memerlukan static export yang sudah dibangun, menggunakan sumber publik sintetis, serta dapat memicu pemeriksaan model startup bawaan. Jangan mengulang panggilan berbayar tanpa kebutuhan diagnostik.

## 7. Bukti tersimpan

- [Perbandingan langsung sebelum/sesudah kontrol thinking](../docs/backend/evidence/nvidia-thinking/raw-comparison.json).
- [Run Agent Chat, metadata aman dan parameter wire](../docs/backend/evidence/nvidia-thinking/normal-agent-nvidia.json).
- [Screenshot assistant NVIDIA](../docs/backend/evidence/nvidia-thinking/normal-agent-nvidia.png).

## 8. Status dan batas klaim

**Model NVIDIA Lightning yang diuji: OPERATIONAL — VERIFIED pada kode perbaikan.** Kode sudah diterapkan ke checkout utama; proses aplikasi pribadi memerlukan restart untuk memuatnya.

Ini tidak memverifikasi semua model NVIDIA, dokumen pribadi yang gagal sebelumnya, atau konteks historis 126K. Kegagalan DeepSeek pada audit pertama tetap merupakan hasil terpisah; LiteLLM nyata tetap belum diverifikasi. Langkah langsung pengguna adalah restart penuh Orbistry lalu ulangi pertanyaan yang sebelumnya gagal, tanpa harus menaikkan output limit terlebih dahulu.
