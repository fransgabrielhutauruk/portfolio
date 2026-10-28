# 02. Sistem Desain & Wireframe (Scroll-Slide Edition)

Dokumen ini menetapkan panduan visual dan mekanisme interaksi berdasarkan referensi video **Dymas Alfin Portfolio**, yang diadaptasi ke dalam tema **Full Dark Mode + Aksen Hijau Emerald** untuk profil **Full-Stack Developer**.

---

## 1. Mekanisme Utama: "Sticky Curtain Scroll-Slide"

Setiap section dirancang sebagai **lembaran layar penuh (*Full-Screen Slide Card*)** dengan sudut atas membulat (`rounded-t-[2.5rem]`), *drop-shadow* pekat ke arah atas (`shadow-[0_-25px_60px_rgba(0,0,0,0.9)]`), serta garis tepi atas bercahaya halus (`border-t border-emerald-500/25`).

- Saat pengunjung melakukan *scroll* ke bawah, slide yang sedang tampil akan tertahan (*sticky*), lalu **slide berikutnya meluncur naik dari bawah menutupi slide sebelumnya seperti tirai/tumpukan kartu**.
- Agar efek tumpukan antar-slide terlihat dramatis dalam mode gelap penuh (*Full Dark Mode*), warna latar tiap slide dibuat **bergantian secara kontras halus** antara **Deep Obsidian (`#09090b`)**, **Rich Charcoal (`#111318`)**, dan **Deep Emerald-Black (`#08120e`)**.

---

## 2. Palet Warna (Full Dark Mode + Emerald Green)

| Elemen | Kode Warna / Class Tailwind | Kegunaan |
| :--- | :--- | :--- |
| **Slide Ganjil (Slide 1, 3, 5)** | `#09090b` (`bg-zinc-950`) | Hero, Keahlian (`/CAPABILITIES`), & Kontak/CTA |
| **Slide Genap (Slide 2)** | `#111318` (`bg-[#111318]`) | Proyek Unggulan (`/SELECTED WORK`) |
| **Slide Kontras (Slide 4)** | `#08120e` (`bg-[#08120e]`) | Pengalaman, Pendidikan & Sertifikasi (`/EXPERIENCE`) |
| **Aksen Utama (Emerald)** | `#10b981` (`emerald-500`) / `#34d399` (`emerald-400`) | Titik status aktif, garis aksen, *hover state*, & badge |
| **Watermark Background Text** | `rgba(255,255,255,0.03)` | Teks raksasa di belakang judul section (`PORTFOLIO`, `SKILLS`, `EXPERIENCE`) |
| **Teks Utama & Sekunder** | `#f4f4f5` (`zinc-100`) & `#a1a1aa` (`zinc-400`) | Tipografi kontras tinggi dan deskripsi |

---

## 3. Spesifikasi Tiap Slide (Mengikuti Referensi Video)

### Slide 1: Hero Section (`00:00` – `00:03`)
```text
+-------------------------------------------------------------------------+
|  [● Tersedia untuk Proyek / Full-Time]   Work [04]  Skills [04]  Exp    [Hubungi Saya ↗]
|                                                                         |
|      F R A N S   D E V E L O P E R                                      |
|   (Outline Stroke)     (Solid White/Emerald Fill)                       |
|                                                                         |
|                           +-------------------+                         |
|                           |   Foto Cutout     |                         |
|  Full-Stack Developer     |   Close-up        |     [ GitHub    ]       |
|  Spesialis ekosistem      |   (Grayscale ->   |     [ LinkedIn  ]       |
|  Laravel & UI modern      |    Color Hover)   |     [ WhatsApp  ]       |
|                           |                   |     [ Unduh CV  ]       |
|  [ Mari Berkolaborasi ↗ ] +-------------------+                         |
+-------------------------------------------------------------------------+
```
- **Navbar Atas**:
  - Kiri: Pill badge `[● Tersedia untuk Kerja / Proyek]` dengan titik hijau menyala.
  - Tengah: Menu navigasi dengan angka superscript (`Work [04]`, `Skills [04]`, `Experience [05]`, `Contact`).
  - Kanan: Tombol pil `[Mari Bicara ↗]` (dengan aksen hijau emerald).
- **Tipografi Raksasa**: Nama depan menggunakan efek *outline stroke* transparan, dan nama belakang/role menggunakan *solid fill* tegas.
- **Foto Cutout Tengah Bawah**: Foto setengah badan tanpa latar belakang (*transparent PNG* atau bingkai menyatu) yang menampilkan efek *grayscale* dan berubah menjadi berwarna saat disentuh kursor.
- **Kiri Bawah**: Jabatan `Full-Stack Developer`, ringkasan 2 baris, dan tombol pil `[Lihat Karya ↗]`.
- **Kanan Bawah**: Deretan tombol pil vertikal untuk akses langsung ke `GitHub`, `LinkedIn`, `WhatsApp`, dan `Unduh CV`.

---

### Slide 2: `/SELECTED WORK` — Proyek Unggulan (`00:05` – `00:07`)
Meluncur naik menutupi Hero Section:
- **Header**: Watermark raksasa `PORTFOLIO` di latar belakang + judul tegas `/SELECTED WORK` di tengah.
- **Bar Filter & Aksi**:
  - Kiri: Tab filter kategori (`Semua`, `Proyek Nyata / Skripsi`, `Eksplorasi`).
  - Kanan: Tombol pil `[Lihat GitHub ↗]`.
- **Grid 2 Kolom Kartu Proyek**:
  - Gambar *preview* aplikasi di bagian atas kartu dengan badge kategori di pojok kiri atas (`REAL PROJECT` / `FULL-STACK`).
  - Judul proyek tegas + deskripsi singkat fitur full-stack (1–2 kalimat).
  - Deretan *pill tags* *tech stack* di bawah (`Laravel 11`, `Livewire`, `MySQL`, `Tailwind`) serta tombol langsung menuju **Live Demo ↗** dan **Source Code ↗** di tab baru.

---

### Slide 3: `/CAPABILITIES` — Keahlian & Tech Stack Full-Stack (`00:08` – `00:10`)
Meluncur naik menutupi slide Proyek:
- **Header**: Watermark raksasa `CAPABILITIES` + judul `/KEAHLIAN & TECH STACK`.
- **Daftar Baris Interaktif (Accordion / Hover Bar)**:
  1. `01 / BACKEND & EKOSISTEM LARAVEL` (`PHP, Laravel, Livewire, Inertia.js, REST API, Auth & RBAC`)
  2. `02 / FRONTEND & INTERACTIVE UI` (`SvelteKit, Vue/React, Tailwind CSS, JavaScript/TypeScript`)
  3. `03 / DATABASE & ARSITEKTUR DATA` (`MySQL, PostgreSQL, Eloquent ORM, Perancangan ERD & Optimasi Query`)
  4. `04 / TOOLS, TESTING & DEPLOYMENT` (`Git & GitHub, Postman, Composer, Docker Dasar, Vercel, Linux/VPS`)
- **Interaksi**: Saat salah satu baris diklik/di-*hover* (seperti pada detik `00:10`), baris tersebut membuka blok kontras gelap beraksen hijau emerald lengkap dengan penjelasan singkat, daftar badge *tech stack*, dan kartu visual miring (*tilted floating card*) di tengah!

---

### Slide 4: `/EXPERIENCE` — Pendidikan, Pengalaman & Sertifikasi (`00:11` – `00:14`)
Meluncur naik dengan latar **Deep Emerald-Black (`#08120e`)**:
- **Header**: Watermark raksasa `EXPERIENCE` + judul `/EXPERIENCE & CERTIFICATIONS` di kiri, dan label `Fresh Graduate Full-Stack` di kanan.
- **Daftar Baris Horizontal Rapi**:
  - Menampilkan **Pendidikan Kampus**, **Pengalaman Magang / Proyek Tugas Akhir**, serta **Sertifikasi Resmi (BNSP, Dicoding, dll.)**.
  - Kiri: Nama Institusi / Sertifikasi & Peran di bawahnya.
  - Kanan: Rentang waktu (`2022 - 2026`, dll.) + ikon tautan kredensial.
  - **Efek Hover (`00:14`)**: Saat kursor melewati baris pengalaman/sertifikasi, muncul **kartu *preview* melayang yang sedikit miring** menampilkan cuplikan sertifikat atau *screenshot* proyek terkait!

---

### Slide 5: Call-to-Action & Kontak (`00:15` – `00:16`)
Meluncur naik sebagai slide penutup:
- **Tengah**:
  - Pill badge `[● Tersedia untuk Full-Time & Freelance]`
  - Judul besar: **`TERTARIK BERKOLABORASI?`** (atau `HAVE A PROJECT IN MIND?`)
  - Subjudul ajakan kerja sama untuk HRD / Klien.
  - Deretan tombol aksi langsung: **`[Chat WhatsApp ↗]`**, **`[Salin Email (1-Click Copy)]`**, dan **`[Unduh CV ↗]`**.
- **Bawah**: Tipografi raksasa nama Anda (`FRANS DEVELOPER`) di bagian dasar footer.
