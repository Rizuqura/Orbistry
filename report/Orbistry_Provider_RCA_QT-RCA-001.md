# Laporan Audit Provider dan Pipeline LLM Orbistry

**Token dan kredit:** [Status penghematan serta cara membandingkan run](Orbistry_Token_Credit_Comparison_Status.md) menjelaskan mengapa input tetap 7K, lokasi metrik yang tersedia, dan celah komparasi Agent Chat yang belum selesai.

**Pembaruan terbaru:** [QT-RCA-003 — Nano Omni](Orbistry_NVIDIA_Omni_Fix_QT-RCA-003.md) memperluas kontrol thinking ke model pada chat Training Unit, memverifikasi jawaban 10 poin lewat Agent Chat, dan menerapkannya ke checkout utama.

**Pembaruan NVIDIA:** [QT-RCA-002](Orbistry_NVIDIA_Thinking_Fix_QT-RCA-002.md) mereproduksi respons kosong akibat thinking, memperbaiki deployment Lightning yang dipakai pengguna, memverifikasi Agent Chat nyata, dan menerapkan perbaikan tersebut ke checkout utama. Hasil di bawah adalah catatan audit pertama.

**Audit:** QT-RCA-001

**Tanggal:** 30 Oktober 2026, Asia/Jakarta

**Status operasional:** **PARTIALLY OPERATIONAL**

**Branch audit:** `audit/qt-rca-001`

**Worktree:** `tmp/qt-rca-001`

**Baseline pembanding:** `829d704` — snapshot sumber yang diberikan sebelum perbaikan audit.

## 1. Insiden awal

Pengguna melaporkan Orbistry sebelumnya dapat menghasilkan jawaban, kemudian mengalami respons kosong pada permintaan besar. Implementasi backend baru dan reset aplikasi belum memulihkan keluaran yang terlihat.

Audit memisahkan jalur **Direct Provider → LiteLLM → Backend → Streaming → UI**. Keberhasilan unit test atau katalog model tidak dianggap sebagai bukti bahwa chatbot beroperasi. Bukti wajib adalah teks dari provider asli yang terlihat pada bubble assistant Orbistry.

## 2. Urutan diagnosis

1. Sumber dan konfigurasi diperiksa sebelum perubahan produksi. Checkout asli tetap di `main`, sedangkan audit dikerjakan di branch/worktree terpisah. Seluruh **342 hash file sumber asli tetap cocok** dengan baseline setelah pelaksanaan audit.
2. OpenRouter langsung berhasil mengembalikan `ORBISTRY_OK` tanpa router, pengelolaan konteks, LiteLLM atau runtime agent.
3. UI eksperimen gagal membuat percakapan karena `MODEL_BUSY`. Send tetap nonaktif; permintaan belum mencapai provider.
4. Setelah koordinasi pemeriksaan model diperbaiki, UI mencapai router tetapi model manual ditolak karena perbedaan nama parameter batas output. Jumlah panggilan provider pada kegagalan ini: **nol**.
5. Setelah pemetaan parameter diperbaiki, streaming dan non-streaming menghasilkan `ORBISTRY_OK` pada bubble assistant asli. Percakapan dua giliran berhasil menjawab `ORBITAL`.
6. NVIDIA diuji terpisah setelah pemeriksaan latar berhenti. Model tersimpan tetap timeout; satu model pembanding dalam katalog mengembalikan HTTP 404.
7. Uji sintetis pada UI mengonfirmasi enam kegagalan tampil dengan kode aman, fallback dibatasi dua percobaan, dan jalur Agent/Context lama tetap lolos regresi.

## 3. Akar masalah yang terkonfirmasi

| Temuan                                                  | Bukti                                                                                                                           | Dampak                                                 | Perbaikan                                                                                                  |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Aksi eksperimen bersaing dengan pemeriksaan model latar | UI tidak memperoleh percakapan; kode sumber menunjukkan keduanya memakai admission ChatService yang sama                        | Kegagalan pertama terjadi sebelum inferensi            | Aksi eksperimen menghentikan dan menunggu cleanup pemeriksaan melalui `prepareBasicChat`                   |
| Router mewajibkan `max_tokens` secara literal           | Katalog live `openai/gpt-4.1-nano` hanya mengiklankan `max_completion_tokens`; model yang sama berhasil pada panggilan langsung | Model manual yang valid ditolak sebelum HTTP inferensi | Router menerima kedua alias; gateway mengirim alias yang diiklankan dengan batas token tetap dipertahankan |
| Kode error terstruktur tertimpa setelah penolakan IPC   | Uji UI awal tidak menemukan AUTH_INVALID; setelah referensi error event dipertahankan, semua kasus G lolos                      | Pesan kegagalan kehilangan kode diagnostik             | UI mempertahankan error publik dari event saat Error melintasi bridge Electron                             |
| Jalur non-streaming belum tersedia                      | Gateway sebelumnya selalu mengirim `stream=true`                                                                                | Sulit memisahkan kegagalan streaming dari backend      | Tambahkan opsi non-streaming, parser JSON terbatas, dan default kompatibel `streaming=true`                |

NVIDIA menunjukkan kegagalan independen sebelum pemrosesan backend lanjutan. Penyebab upstream belum teridentifikasi. Timeout/404 tidak cukup untuk menyimpulkan key salah, kuota habis, atau seluruh layanan NVIDIA bermasalah.

Tidak ditemukan bukti bahwa budgeting konteks besar menyebabkan kegagalan prompt minimal. Permintaan historis sekitar 120K input/26K output belum diuji ulang. Commit historis terakhir yang benar-benar bekerja secara live juga belum dapat ditetapkan.

## 4. Perubahan yang diterapkan

| Komponen                                                                 | Perubahan                                                                                                                     |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `features/chat/use-chat-runtime.ts`                                      | Koordinasi penghentian pemeriksaan model sebelum operasi eksperimen                                                           |
| `features/model-settings/`                                               | Hubungkan koordinasi, tampilkan kode error aman, pertahankan kode dari event, dan tambahkan pilihan streaming                 |
| `electron/ai/llm-front-office/model-router.cjs`                          | Terima alias batas output yang didukung katalog tanpa melewati filter kemampuan lain                                          |
| `electron/ai/llm-front-office/provider-gateway.cjs`                      | Pilih nama parameter yang benar; konsumsi JSON non-streaming; catat batas HTTP, konten dan normalisasi                        |
| Kontrak, konfigurasi, service, observability dan `types/front-office.ts` | Default kompatibel, request ID bersama, stage yang diizinkan dan stage kegagalan pertama; tanpa isi prompt/header/key         |
| Unit test dan skrip Electron                                             | Regresi alias, normalisasi, respons kosong, privasi trace, admission, kegagalan terlihat, fallback, dan harness provider asli |
| Dokumentasi                                                              | RCA rinci, diagram alur, panduan reproduksi A–H, README dan status implementasi                                               |

Tidak ditambahkan paket backend, dependency baru, upgrade provider adapter, instalasi LiteLLM atau perubahan pilihan model pribadi pengguna.

## 5. Hasil pengujian A–H

| Test                       | Hasil                            | Jenis bukti                                                                                                                                   |
| -------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| A — Direct Provider        | **PASS OpenRouter; FAIL NVIDIA** | Provider asli. OpenRouter HTTP 200, `ORBISTRY_OK`; NVIDIA timeout dan model pembanding HTTP 404                                              |
| B — LiteLLM                | **NOT VERIFIED**                 | Proxy nyata tidak aktif/tidak dikonfigurasi. Mock gateway tidak dihitung sebagai keberhasilan B                                               |
| C — Backend non-streaming  | **PASS**                         | OpenRouter asli, JSON completion, hasil akhir tampil di UI                                                                                    |
| D — Backend streaming      | **PASS**                         | OpenRouter asli, delta konten, usage, finish dan hasil akhir                                                                                  |
| E — Rendering UI           | **PASS**                         | `ORBISTRY_OK` terlihat pada bubble assistant aktual untuk kedua mode                                                                         |
| F — Percakapan dua giliran | **PASS**                         | Provider asli; jawaban kedua menyebut `ORBITAL` dari riwayat percakapan                                                                       |
| G — Visibilitas kegagalan  | **PASS — sintetis**              | UI menampilkan AUTH_INVALID, MODEL_UNAVAILABLE, MODEL_TIMEOUT, RATE_LIMITED, PROVIDER_OFFLINE; kasus nol kandidat tidak memanggil provider    |
| H — Fallback terkendali    | **PASS — sintetis**              | Primary 503, alternate valid menghasilkan teks; tepat dua percobaan; switch diungkapkan; durasi tercatat; biaya panggilan gagal tetap unknown |

Bukti live menggunakan prompt publik tetap dan batas output kecil. Kredensial tersimpan dibaca melalui enkripsi OS ke profil sementara; profil pribadi tidak diubah. Raw key, header otorisasi dan percakapan pribadi tidak dicatat.

Pemeriksaan tambahan:

- **Node:** 346 test, **344 lulus**, 2 test live berbasis environment dilewati secara eksplisit, 0 gagal. Bukti live UI di atas dijalankan terpisah.
- **Typecheck:** lulus.
- **Build produksi:** lulus dengan `next build --webpack`, kemudian static export diamankan. Turbopack terhambat resolusi `node_modules` junction di nested worktree; konfigurasi produksi tidak diubah untuk mengatasi harness ini.
- **Regresi Electron Agent/Context:** lulus dengan respons sintetis.
- **Format dan whitespace:** lulus pada perubahan kode dan dokumen audit.
- **Audit pola secret:** tidak menemukan pola kredensial yang dikenal; bukan jaminan pemindaian entropy menyeluruh.

## 6. Bukti yang dapat diperiksa

- [RCA lengkap dan matriks hipotesis H1–H8](../docs/backend/PROVIDER_RCA.md).
- [Alur permintaan dan diagram Mermaid](../docs/backend/PROVIDER_REQUEST_FLOW.md).
- [Panduan menjalankan ulang A–H](../docs/backend/PROVIDER_DIAGNOSTICS.md).
- [Indeks bukti JSON dan screenshot](../docs/backend/evidence/README.md).
- [Screenshot streaming nyata](../docs/backend/evidence/verified-ui-streaming.png).
- [Screenshot non-streaming nyata](../docs/backend/evidence/verified-ui-nonstreaming.png).
- [Screenshot jawaban ORBITAL](../docs/backend/evidence/verified-multi-turn.png).
- [NVIDIA langsung setelah pemeriksaan latar berhenti](../docs/backend/evidence/direct-nvidia-isolated.json).

Trace streaming gabungan mencatat seluruh 12 batas dari REQUEST_RECEIVED sampai FRONTEND_RESPONSE_DELIVERED dan REQUEST_COMPLETED dengan request ID yang sama. Non-streaming sengaja tidak memiliki STREAM_STARTED. Trace backend dibatasi sebelum persistence/rendering; pengamatan DOM ditambahkan hanya setelah teks assistant benar-benar terlihat. Stage yang tidak tercapai akibat kegagalan tidak dianggap berhasil.

## 7. Masalah tersisa dan verdict

**PARTIALLY OPERATIONAL.** Jalur basic chat OpenRouter telah diverifikasi dengan provider asli sampai UI dan riwayat dua giliran. NVIDIA belum pulih. LiteLLM nyata belum diverifikasi karena tidak aktif.

Jalur terverifikasi adalah **Settings → LLM Backend / Front Office → model manual OpenRouter → New experiment**. Jalur Agent Chat biasa tetap mengikuti persyaratan agent dan Context Box yang sudah ada. Audit ini tidak mengubah antarmuka tersebut menjadi chat tanpa konteks dan tidak mengklaim seluruh konfigurasi/model telah diperbaiki.

## 8. Langkah berikutnya

Gunakan jalur OpenRouter yang sudah terverifikasi. Untuk NVIDIA, pastikan entitlement dan kesehatan deployment pada model yang benar-benar diizinkan akun, lalu jalankan satu prompt langsung dengan batas kecil. Setelah A berhasil pada model itu, uji model yang sama melalui backend dan UI. Verifikasi LiteLLM secara terpisah bila proxy tersebut diperlukan.

Untuk membandingkan perubahan audit, jalankan `git diff 829d704..HEAD` di worktree audit. Perubahan sumber tetap terpisah dari checkout utama; laporan ini juga disalin ke folder `report` pada checkout utama agar dapat dibuka langsung dari IDE.
