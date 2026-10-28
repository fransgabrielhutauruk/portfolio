# 01. Rencana Proyek & Arsitektur (Scroll-Slide Edition)

Dokumen ini merangkum strategi perencanaan, *positioning*, dan arsitektur teknis untuk web portfolio **Frans** sebagai **Fresh Graduate Full-Stack Developer** dengan antarmuka **Scroll-Slide (Sticky Curtain Stacking)** terinspirasi dari referensi video Dymas Alfin.

---

## 1. Tujuan & Positioning Utama

- **Target Audiens**: HRD / Technical Recruiter, Engineering Manager, dan calon klien *freelance* di **Indonesia**.
- **Bahasa Pengantar**: Bahasa Indonesia dengan istilah teknis/header standar industri (`/SELECTED WORK`, `/CAPABILITIES`, `/EXPERIENCE`).
- **Positioning Keahlian**: **Full-Stack Web Developer** dengan spesialisasi utama pada ekosistem **PHP & Laravel** (Laravel, Livewire/Inertia, Vue/React, MySQL/PostgreSQL), serta menguasai teknologi frontend modern (**SvelteKit & Tailwind CSS**).
- **Gaya Antarmuka**: **Scroll-Slide Curtain Stacking** dalam balutan **Full Dark Mode + Aksen Hijau Emerald**. Setiap section meluncur naik dari bawah menutupi section sebelumnya secara mulus.

---

## 2. Tech Stack Web Portfolio

| Komponen | Teknologi | Alasan Pemilihan |
| :--- | :--- | :--- |
| **Framework** | **SvelteKit (Svelte 5)** + TypeScript | Sangat ringan, reaktivitas *runes* Svelte 5 memudahkan pembuatan interaksi *scroll-slide*, *filter tabs*, dan *floating hover card* seperti di video referensi. |
| **Styling** | **Tailwind CSS v4** | Mendukung penuh *sticky stacking*, efek *outline stroke text*, *backdrop blur*, dan tema gelap beraksen Emerald. |
| **Ikon** | **Lucide Svelte** (`lucide-svelte`) | Ikon tajam untuk panah `↗`, sosial media, dan indikator interaktif. |
| **Manajemen Konten** | **Static TypeScript Data** (`src/lib/data/portfolio.ts`) | Seluruh proyek, kategori filter, keahlian, pengalaman, dan sertifikasi disimpan dalam satu file terstruktur tanpa perlu database eksternal. |
| **Deployment** | **Vercel** (`@sveltejs/adapter-vercel`) | *Zero-configuration deployment* langsung dari GitHub dan 100% gratis. |

---

## 3. Struktur Direktori Proyek

```text
frans-portfolio/
├── docs/                                  # Dokumentasi perencanaan, desain, & template konten
│   ├── 01-project-plan.md
│   ├── 02-design-system-and-wireframe.md
│   └── 03-content-template.md
├── static/                                # Aset statis publik
│   ├── images/
│   │   ├── profile-cutout.png             # Foto profil cutout (atau placeholder profesional)
│   │   └── projects/                      # Screenshot proyek & sertifikat
│   └── cv-frans.pdf                       # File CV terbaru untuk diunduh HRD
├── src/
│   ├── app.css                            # Konfigurasi Tailwind CSS, font, & utilitas outline-text
│   ├── app.html                           # Template HTML utama & meta SEO
│   ├── lib/
│   │   ├── components/                    # Komponen Slide Modular
│   │   │   ├── Navbar.svelte              # Header status badge + nav indeks + tombol Let's Talk
│   │   │   ├── HeroSlide.svelte           # Slide 1: Teks raksasa outline/solid + foto cutout + pil sosial
│   │   │   ├── WorkSlide.svelte           # Slide 2: /SELECTED WORK + filter tab + grid 2 kolom kartu
│   │   │   ├── CapabilitiesSlide.svelte   # Slide 3: /CAPABILITIES baris interaktif + floating card
│   │   │   ├── ExperienceSlide.svelte     # Slide 4: /EXPERIENCE (Pendidikan, Magang, Sertifikasi) + hover preview
│   │   │   └── ContactSlide.svelte        # Slide 5: CTA kolaborasi + WhatsApp/Copy Email/CV + giant footer
│   │   └── data/
│   │       └── portfolio.ts               # Pusat seluruh data teks, link, proyek, & sertifikasi
│   └── routes/
│       └── +page.svelte                   # Halaman utama pengatur tumpukan Scroll-Slide
├── svelte.config.js
├── package.json
└── tsconfig.json
```
