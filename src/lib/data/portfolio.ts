export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: "Real Project" | "Exploration";
  badgeLabel: string;
  summary: string;
  highlights: string[];
  tags: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
}

export interface CapabilityItem {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  description: string;
  skills: string[];
  previewImage: string;
  metricBadge: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  type: "Pendidikan" | "Pengalaman" | "Sertifikasi";
  period: string;
  credentialUrl?: string;
  summary: string;
  previewImage: string;
  badge: string;
}

export const portfolioData = {
  profile: {
    firstNameOutline: "FRANS",
    lastNameSolid: "G.H.",
    fullName: "Frans Gabriel Hutauruk",
    role: "Full-Stack Web Developer",
    specialization: "Ekosistem PHP / Laravel & Modern Frontend",
    statusText: "Available for Full-Time & Projects",
    bioShort:
      "Merancang dan membangun aplikasi web end-to-end yang andal, aman, dan cepat — menerjemahkan proses bisnis ke dalam logika sistem yang terstruktur serta antarmuka yang responsif dan siap produksi.",
    location: "Indonesia",
    email: "frans.developer@email.com",
    whatsappUrl:
      "https://wa.me/6281234567890?text=Halo%20Frans,%20saya%20melihat%20web%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
    cvUrl: "/cv-frans.pdf",
    avatarCutout: "/images/foto-profile.webp",
    socials: [
      { label: "GitHub", href: "https://github.com/fransgabrielhutauruk", handle: "@frans-dev" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/frans-gabriel-hutauruk-200b13304/",
        handle: "in/frans-dev",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/6289621530018",
        handle: "+62 812-xxxx",
      },
      { label: "Unduh CV", href: "/cv-frans.pdf", handle: "PDF Resume" },
    ],
  },

  projects: [
    {
      id: "simops-laravel",
      number: "01",
      title:
        "SIMOPS — Sistem Informasi Manajemen Operasional & Laporan Terpadu",
      category: "Real Project",
      badgeLabel: "REAL PROJECT • SKRIPSI / TA",
      summary:
        "Aplikasi web full-stack untuk mendigitalisasi alur operasional harian, persetujuan berjenjang, dan pembuatan laporan PDF/Excel otomatis secara real-time.",
      highlights: [
        "Arsitektur 15+ tabel MySQL terindeks dengan Multi-Role RBAC (Admin, Supervisor, Staf)",
        "Komponen tabel & filter reaktif tanpa reload halaman penuh menggunakan Laravel Livewire",
        "Background job & antrean (Queue) untuk cetak laporan PDF skala besar tanpa timeout",
      ],
      tags: ["Laravel 11", "Livewire 3", "Tailwind CSS", "MySQL"],
      image: "/images/projects/project-simops.svg",
      liveUrl: "https://github.com/",
      repoUrl: "https://github.com/",
    },
    {
      id: "commerce-midtrans",
      number: "02",
      title:
        "NusaCommerce — Platform Reservasi & Transaksi terintegrasi Payment Gateway",
      category: "Real Project",
      badgeLabel: "REAL PROJECT • FULL-STACK",
      summary:
        "Sistem pemesanan layanan dan katalog produk dengan pembayaran otomatis via Midtrans Webhook, manajemen inventori ACID, serta dasbor analitik penjualan.",
      highlights: [
        "Integrasi Midtrans Snap & Webhook signature verification untuk update status otomatis",
        "Single-Page Application mulus menggunakan kombinasi Laravel + Inertia.js + Vue 3",
        "Database transaction locking (PostgreSQL) guna mencegah race-condition stok produk",
      ],
      tags: ["Laravel", "Inertia.js", "Vue 3", "PostgreSQL", "Midtrans"],
      image: "/images/projects/project-commerce.svg",
      liveUrl: "https://github.com/",
      repoUrl: "https://github.com/",
    },
    {
      id: "academic-rest-api",
      number: "03",
      title:
        "SIAKAD Core API — Layanan Penjadwalan & Presensi QR Berbasis RESTful API",
      category: "Exploration",
      badgeLabel: "EXPLORATION • BACKEND & API",
      summary:
        "Mesin backend penjadwalan akademik anti-bentrok dan validasi presensi QR dinamis dengan optimasi Eloquent eager-loading serta Redis caching.",
      highlights: [
        "Autentikasi token aman menggunakan Laravel Sanctum beserta pembatasan Rate Limiting",
        "Optimasi query Eloquent yang memangkas waktu respons endpoint hingga 78%",
        "Dokumentasi OpenAPI/Postman lengkap beserta pengujian otomatis menggunakan Pest/PHPUnit",
      ],
      tags: ["Laravel Sanctum", "REST API", "Redis", "MySQL", "PHPUnit"],
      image: "/images/projects/project-api.svg",
      liveUrl: "https://github.com/",
      repoUrl: "https://github.com/",
    },
    {
      id: "flowboard-rbac",
      number: "04",
      title:
        "FlowBoard — Aplikasi Manajemen Proyek & Kolaborasi Tim Multi-Tenant",
      category: "Exploration",
      badgeLabel: "EXPLORATION • SAAS ARCHITECTURE",
      summary:
        "Workspace manajemen tugas bergaya Kanban dengan pengaturan izin granular per divisi, log aktivitas audit, dan antarmuka mode gelap responsif.",
      highlights: [
        "Implementasi hak akses granular menggunakan paket Spatie Laravel Permission",
        "Pencatatan riwayat perubahan tugas otomatis menggunakan Model Observer",
        "Desain responsif cepat dengan Blade Components, Alpine.js, dan Tailwind CSS",
      ],
      tags: ["Laravel", "Spatie RBAC", "Alpine.js", "Tailwind CSS", "MySQL"],
      image: "/images/projects/project-kanban.svg",
      liveUrl: "https://github.com/",
      repoUrl: "https://github.com/",
    },
  ] satisfies ProjectItem[],

  capabilities: [
    {
      id: "cap-backend",
      code: "01",
      title: "BACKEND & LARAVEL ECOSYSTEM",
      shortTitle: "Laravel Architecture",
      description:
        "Membangun fondasi aplikasi web yang aman, modular, dan mudah dipelihara dengan standar ekosistem Laravel modern (Service Pattern, Queue, Sanctum, & Livewire/Inertia).",
      skills: [
        "PHP 8.3+",
        "Laravel 10/11",
        "Livewire",
        "Inertia.js",
        "RESTful API",
        "Laravel Sanctum",
        "Spatie Permission (RBAC)",
      ],
      previewImage: "/images/projects/project-simops.svg",
      metricBadge: "Clean MVC & Service Layer",
    },
    {
      id: "cap-frontend",
      code: "02",
      title: "FRONTEND & MODERN INTERACTIVE UI",
      shortTitle: "Responsive Frontend",
      description:
        "Menerjemahkan kebutuhan bisnis menjadi antarmuka pengguna yang tajam, aksesibel, dan cepat di berbagai perangkat tanpa mengorbankan performa pemuatan.",
      skills: [
        "Tailwind CSS",
        "SvelteKit (Svelte 5)",
        "Vue.js / React",
        "JavaScript (ES6+)",
        "TypeScript",
        "Alpine.js",
        "HTML5 & Modern CSS",
      ],
      previewImage: "/images/projects/project-commerce.svg",
      metricBadge: "95+ Lighthouse Performance",
    },
    {
      id: "cap-database",
      code: "03",
      title: "DATABASE DESIGN & QUERY OPTIMIZATION",
      shortTitle: "Relational Database",
      description:
        "Merancang skema Entity-Relationship Diagram (ERD) yang ternormalisasi, menjaga integritas transaksi ACID, serta mencegah masalah N+1 Query pada Eloquent ORM.",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Eloquent ORM",
        "Database Indexing",
        "ERD Modeling",
        "Redis Caching",
        "Data Migration & Seeding",
      ],
      previewImage: "/images/projects/project-api.svg",
      metricBadge: "Zero N+1 Query Discipline",
    },
    {
      id: "cap-tools",
      code: "04",
      title: "TESTING, WORKFLOW & DEPLOYMENT",
      shortTitle: "DevOps & Tooling",
      description:
        "Mengelola alur kerja kolaborasi kode dengan Git, pengujian endpoint API terstruktur, hingga proses deployment ke cloud maupun VPS Linux.",
      skills: [
        "Git & GitHub Flow",
        "Postman API Testing",
        "PHPUnit / Pest",
        "Composer & Vite",
        "Vercel Deployment",
        "Linux / Nginx Dasar",
        "Docker Dasar",
      ],
      previewImage: "/images/projects/project-kanban.svg",
      metricBadge: "CI/CD & Production Ready",
    },
  ] satisfies CapabilityItem[],

  experiences: [
    {
      id: "exp-edu",
      organization: "S1 Teknik Informatika / Sistem Informasi",
      role: "Sarjana Komputer (Fresh Graduate) — Fokus Rekayasa Perangkat Lunak & Web",
      type: "Pendidikan",
      period: "2022 – 2026",
      summary:
        "Menyelesaikan studi sarjana dengan fokus pada rekayasa perangkat lunak, perancangan basis data relasional, dan pengembangan sistem informasi berbasis Laravel.",
      previewImage: "/images/projects/project-simops.svg",
      badge: "PENDIDIKAN FORMAL",
    },
    {
      id: "exp-cert-bnsp",
      organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
      role: "Certified Junior Web Developer — Sertifikasi Kompetensi Nasional",
      type: "Sertifikasi",
      period: "2025 – Berlaku",
      credentialUrl: "#contact",
      summary:
        "Teruji kompeten sesuai standar SKKNI dalam mengimplementasikan pemrograman terstruktur, mengakses basis data, dan merancang aplikasi web full-stack.",
      previewImage: "/images/projects/project-api.svg",
      badge: "SERTIFIKASI BNSP",
    },
    {
      id: "exp-intern",
      organization: "Proyek Mandiri & Studi Independen Full-Stack",
      role: "Full-Stack Web Developer (Laravel, MySQL & Modern Frontend)",
      type: "Pengalaman",
      period: "2025 – 2026",
      summary:
        "Mengembangkan berbagai proyek aplikasi web end-to-end mulai dari analisis kebutuhan, perancangan ERD, pembuatan REST API, hingga integrasi pembayaran.",
      previewImage: "/images/projects/project-commerce.svg",
      badge: "PENGALAMAN PROYEK",
    },
    {
      id: "exp-cert-dicoding",
      organization: "Dicoding Indonesia / Kampus Merdeka",
      role: "Sertifikasi Pengembangan Aplikasi Web & Back-End Developer",
      type: "Sertifikasi",
      period: "2025",
      credentialUrl: "#contact",
      summary:
        "Lulus dengan predikat sangat baik pada evaluasi proyek akhir pembuatan RESTful API, arsitektur aplikasi web, dan pengelolaan database.",
      previewImage: "/images/projects/project-kanban.svg",
      badge: "SERTIFIKASI KURSUS",
    },
  ] satisfies ExperienceItem[],
};
