# Status penghematan dan komparasi token/kredit Orbistry

Tanggal: 30 Oktober 2026. Disusun dari kode, artefak pengujian yang sudah ada, dan metadata run; tidak ada panggilan provider baru untuk laporan ini.

## Yang sudah dan belum dikerjakan

Perbaikan NVIDIA terakhir memulihkan keluaran jawaban dengan mengirim kontrol thinking yang didukung provider. Daftar deployment yang menerima kontrol tersebut saat ini memang hanya **Lightning** dan **Nano Omni**. Model lain tidak diberi parameter yang belum diverifikasi. Modul transport, validasi, observability, budget dan routing mempunyai cakupan yang lebih luas; bukan seluruh backend yang dibatasi dua model tersebut.

| Komponen                                | Peran saat ini                                                                       | Implikasi terhadap biaya                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Kontrol thinking dua model NVIDIA       | Meminta instruct mode agar hidden reasoning tidak menghabiskan jatah sebelum jawaban | Dapat mengurangi completion/reasoning dan kegagalan pada request yang diuji; tidak mengurangi teks input |
| Token/context budget                    | Memeriksa input + cadangan output + headroom dan batas biaya sebelum panggilan       | Guard terhadap request yang tidak cocok; bukan kompresor PDF                                             |
| Router eksperimen                       | Memilih deployment yang memenuhi syarat dan kebijakan kualitas/biaya/latensi         | Model/harga per token dapat berubah; jumlah token input dapat tetap sama                                 |
| Retry/deadline/circuit                  | Membatasi percobaan dan mencegah retry tersembunyi setelah partial output            | Membatasi pemborosan panggilan; tidak memendekkan input tiap panggilan                                   |
| Observability                           | Merekam panggilan, estimasi, usage yang dilaporkan, durasi dan error                 | Mengukur, bukan otomatis menghemat                                                                       |
| Seleksi/kompresi isi PDF per pertanyaan | Belum diterapkan untuk jalur dokumen yang digunakan pengguna                         | Dokumen yang sama masih dikirim; input sekitar 7K wajar tetap sekitar 7K                                 |
| Dashboard perbandingan run Agent Chat   | Belum tersedia                                                                       | Belum ada tampilan before/after langsung pada chat Training Unit                                         |

Chat Training Unit adalah jalur Agent biasa. Ia masih memakai prompt/context/history dan budget normalnya. Router dan kebijakan eksperimen Front Office tidak otomatis mengambil alih request tersebut. Eksperimen Front Office sengaja dipisah dari Context Box/personality; membandingkannya dengan Agent tanpa menyamakan bahan input akan menjadi perbandingan yang tidak adil.

## Kenapa angka input tetap 7K

Isi PDF yang sudah diekstrak masih menjadi bagian request, ditambah instruksi dan histori yang disertakan. Perbaikan thinking tidak meringkas teks tersebut. Angka yang ditampilkan saat generasi adalah **estimasi aplikasi**, memakai heuristik UTF-8 bytes/3 dan framing, bukan bukti token yang ditagih provider.

Pada tiga run sukses terakhir yang diperiksa, input estimate sama-sama **7.555**, tetapi `promptTokens` dan `completionTokens` aktual bernilai `null`, dengan `usageCoverage=none`. Artinya penggunaan aktual belum tertangkap; bukan nol dan bukan bukti penghematan kredit. Adapter NVIDIA normal belum mengumpulkan usage SSE secara lengkap. Ini celah metering yang masih harus diperbaiki.

Batas output **6.000** adalah maksimum yang diminta, bukan otomatis 6.000 token yang dipakai atau ditagih. Cache ekstraksi lokal juga tidak berarti input provider menjadi gratis.

## Komparasi nyata yang sudah tersedia

Probe Nano Omni menggunakan model, prompt publik dan batas output 256 yang sama; hanya kontrol thinking berubah. Kedua request menghasilkan `ORBISTRY_OK`.

| Metrik provider                       | Thinking default | Thinking dimatikan |
| ------------------------------------- | ---------------: | -----------------: |
| Input tokens                          |            8.036 |              8.036 |
| Completion tokens, termasuk reasoning |              106 |                  7 |
| Reasoning tokens, subset completion   |               98 |                  0 |
| Input + completion                    |            8.142 |              8.043 |

Input turun **0%**. Completion turun **93,4%**, tetapi total token hanya turun sekitar **1,2%** karena input mendominasi. Ini satu prompt diagnostik, bukan benchmark kualitas atau penghematan kredit umum. Jangan menambahkan reasoning lagi ke completion karena akan menghitungnya dua kali.

Harga input dan output bisa berbeda; persentase token tidak sama dengan persentase kredit. Estimasi sederhana, bila rate yang sesuai akun diketahui:

```text
biaya = (input_actual / 1.000.000 × rate_input)
      + (completion_actual / 1.000.000 × rate_output)
```

Perhitungan sebenarnya juga harus memperhitungkan aturan provider, cache bila dilaporkan, panggilan gagal dan semua retry. Data yang tidak tersedia harus tetap unknown. Belum ada bukti biaya/kredit aktual untuk menyatakan penghematan keseluruhan pada chat dokumen pengguna.

[Data asli probe](../docs/backend/evidence/nvidia-omni/raw-comparison.json).

## Cara melihat metrik yang ada sekarang

**Eksperimen:** Settings → LLM Backend / Front Office → Experimental chat. Setelah sebuah run, buka **Experiment usage and timing**. Gunakan **Export metrics JSON** atau **Export metrics CSV**. Ekspor tersebut berisi run eksperimen yang disimpan, bukan otomatis seluruh run Agent Chat biasa.

**Agent Chat biasa:** run ID terdapat pada bubble assistant. Record ada di `<vault>/.wonnyy/model-runs/<RUN_ID>.json`. Untuk mengekspor hanya metrik, tanpa menyalin isi percakapan:

```powershell
node scripts/front-office-metrics-export.cjs "<vault>/.wonnyy/model-runs/<RUN_ID>.json" --format json --output "report/run-A-metrics.json"
```

Ulangi dengan run B dan nama output berbeda. Lihat `calls[].estimatedInputTokens`, `reportedPromptTokens`, `reportedCompletionTokens`, `usageCoverage`, `providerCallCount` dan `durationMs`. Estimasi per panggilan tersedia dalam JSON; CSV saat ini adalah ringkasan field reported. Nilai `null`/kolom kosong tidak boleh ditafsirkan sebagai nol.

Ini masih inspeksi metrik, belum dashboard side-by-side. Untuk run NVIDIA yang actual usage-nya kosong, biaya aktual belum dapat dihitung dari ekspor tersebut.

## Apa yang dibandingkan harness A/B/C

| Skenario | Jalur                                                                   |
| -------- | ----------------------------------------------------------------------- |
| A        | Model manual melalui native/direct transport                            |
| B        | Model dan input yang sama melalui LiteLLM, jika proxy benar-benar aktif |
| C        | Model yang dipilih router dari daftar yang diizinkan                    |

A/B sengaja mempertahankan input sama agar efek transport bisa dinilai. LiteLLM bukan kompresor input. C dapat mengubah deployment/harga tanpa mengubah isi prompt. Harness ini belum menguji versi full-PDF melawan versi kompresi/retrieval karena mekanisme tersebut belum diterapkan.

Hasil fixture lama dijelaskan pada [catatan benchmark mock](../docs/architecture/pre-llm/10-benchmark-report.md). Seluruh A/B/C pada laporan itu adalah mock dan **tidak membuktikan penghematan token/kredit provider**. Tidak ada perbandingan proxy nyata yang boleh dianggap berhasil ketika LiteLLM belum dikonfigurasi.

## Komparasi yang dibutuhkan untuk membuktikan penghematan

Gunakan pertanyaan, versi dokumen, instruksi, histori, output cap dan temperature yang terkendali; ubah satu faktor setiap kali. Bedakan eksperimen pengurangan input, pergantian harga model, dan pengaturan reasoning. Catat token input aktual, completion aktual, reasoning, seluruh panggilan/retry, biaya dengan provenance harga, latensi, serta kualitas jawaban pada fakta dokumen. Gunakan beberapa kasus dan pengulangan; model yang lebih murah namun jawabannya salah tidak dihitung sebagai perbaikan.

Pekerjaan yang masih belum selesai untuk pengalaman komparasi yang diharapkan: metering NVIDIA lengkap, tampilan per-run dan comparison pada Agent Chat, serta mekanisme seleksi/kompresi konteks bila targetnya menurunkan input 7K. Tidak ada perubahan kode aplikasi atau klaim fitur penghemat baru dalam tindak lanjut penjelasan ini.
