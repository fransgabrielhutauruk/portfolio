export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  badgeLabel: string;
  summary: string;
  highlights: string[];
  tags: string[];
  image: string;
  liveUrl: string;
  liveLabel: string;
  repoUrl?: string;
}

export interface SkillItem {
  name: string;
  logo?: string;
}

export interface CapabilityItem {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  departmentOrProgram?: string;
  role: string;
  employmentType: string;
  location: string;
  workMode: "On-site" | "Hybrid" | "Remote";
  period: string;
  liveUrl?: string;
  liveLabel?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface AboutPillarItem {
  id: string;
  code: string;
  title: string;
  description: string;
}

export interface LanguageItem {
  name: string;
  code: string;
  level: string;
  proficiencyPercent: number;
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
    location: "Riau, Indonesia",
    email: "fransgabriel17@gmail.com",
    whatsappUrl:
      "https://wa.me/6289621530018?text=Halo%20Frans,%20saya%20melihat%20web%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
    cvUrl: "/cv-frans.pdf",
    avatarCutout: "/images/foto-profile.webp",
    socials: [
      { label: "GitHub", href: "https://github.com/fransgabrielhutauruk", handle: "@fransgabrielhutauruk" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/frans-gabriel-hutauruk-200b13304/",
        handle: "in/frans-gabriel-hutauruk",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/6289621530018",
        handle: "+62 896-2153-0018",
      },
      { label: "Unduh CV", href: "/cv-frans.pdf", handle: "PDF Resume" },
    ],
  },

  about: {
    headline:
      "Memadukan ketajaman analisis Sistem Informasi dengan rekayasa perangkat lunak Full-Stack yang bersih, terukur, dan berorientasi solusi.",
    leadParagraph:
      "Halo, saya Frans Gabriel Hutauruk. Ketertarikan mendalam saya pada dunia Software Engineering berawal dari kepuasan sederhana saat melihat proses bisnis yang  dapat diotomatisasi menjadi aplikasi web yang cepat, intuitif, dan andal digunakan banyak orang.",
    bodyParagraph:
      "Sebagai seorang Full-Stack Web Developer, saya tidak hanya menulis baris kode agar fitur berjalan, tetapi juga memikirkan bagaimana skema basis data dirancang secara efisien, bagaimana logika backend tetap aman dan mudah dipelihara, serta bagaimana pengguna berinteraksi tanpa hambatan di sisi antarmuka.",
    education: {
      institution: "Politeknik Caltex Riau",
      degree: "D4 / Sarjana Terapan Komputer (S.Tr.Kom.)",
      major: "Program Studi Sistem Informasi",
      period: "2022 – 2026",
      gpa: "3.93",
      gpaScale: "4.00",
      honors: "Fresh Graduate • Cum Laude",
      scholarship: {
        title: "Penerima Beasiswa Prestasi Pemerintah Provinsi Riau",
        period: "Sejak 2023",
        description: "Beasiswa prestasi yang diberikan kepada mahasiswa berprestasi akademik.",
      },
    },
    pillars: [
      {
        id: "pillar-problem-solving",
        code: "01",
        title: "Problem Solving & Analytical Thinking",
        description:
          "Membedah alur bisnis yang kompleks menjadi arsitektur data dan solusi teknis yang terukur, efisien, serta tepat sasaran.",
      },
      {
        id: "pillar-teamwork",
        code: "02",
        title: "Collaborative & Team Player",
        description:
          "Terbiasa bekerja lintas peran menggunakan Git workflow, komunikatif dalam diskusi teknis, dan terbuka terhadap code review maupun masukan.",
      },
      {
        id: "pillar-engineering",
        code: "03",
        title: "End-to-End Software Engineering",
        description:
          "Peduli pada kualitas kode secara menyeluruh — mulai dari normalisasi skema database, keandalan API backend, hingga presisi UX di frontend.",
      },
    ] satisfies AboutPillarItem[],
    languages: [
      {
        name: "Bahasa Indonesia",
        code: "ID",
        level: "Native Speaker",
        proficiencyPercent: 100,
      },
      {
        name: "English",
        code: "EN",
        level: "Intermediate",
        proficiencyPercent: 72,
      },
    ] satisfies LanguageItem[],
  },

  experiences: [
    {
      id: "exp-pcr-library-2025",
      organization: "Politeknik Caltex Riau",
      departmentOrProgram: "UPT Perpustakaan",
      role: "Software Engineer Intern",
      employmentType: "Internship • Sole Developer",
      location: "Pekanbaru, Riau",
      workMode: "On-site",
      period: "Sep 2025 – Jan 2026",
      liveUrl: "https://lib.pcr.ac.id",
      liveLabel: "lib.pcr.ac.id",
      description:
        "Merancang dan mengembangkan Sistem Informasi Perpustakaan Kampus secara end-to-end sebagai pengembang tunggal (Solo Developer), mendigitalisasi informasi layanan serta alur pengajuan  civitas akademika.",
      responsibilities: [
        "Menjalankan siklus rekayasa perangkat lunak secara penuh (end-to-end) mulai dari analisis proses bisnis, perancangan, hingga implementasi aplikasi web.",
        "Membangun modul layanan inti perpustakaan: portal informasi layanan, pengajuan pengadaan buku & modul ajar, permohonan cek plagiarisme, serta pengajuan surat bebas pustaka.",
        "Mengintegrasikan sistem dengan REST API internal kampus dan menyelaraskan standar code bersama tim BSTI (Badan Sistem & Teknologi Informasi) dan dosen pembimbing."
      ],
      technologies: [
        "Laravel",
        "Blade",
        "Microsoft SQL Server",
        "Google OAuth",
      ]
    },
    {
      id: "exp-javan-msib-2024",
      organization: "PT Javan Cipta Solusi",
      departmentOrProgram: "Program MSIB Kemendikbudristek RI",
      role: "Programmer — PHP Developer Intern",
      employmentType: "Internship • Software House",
      location: "Sleman, Yogyakarta",
      workMode: "On-site",
      period: "Sep 2024 – Des 2024",
      description:
        "Terlibat aktif dalam pengembangan aplikasi pada 2 proyek aplikasi web enterprise yang sedang berjalan di lingkungan software house menggunakan metodologi Agile Scrum.",
      responsibilities: [
        "Mengimplementasikan fitur-fitur baru serta penyesuaian modul aplikasi sesuai spesifikasi teknis.",
        "Melakukan debugging, penelusuran alur kode (code tracing), serta optimasi query untuk memastikan stabilitas aplikasi.",
        "Berkolaborasi aktif dalam ritme kerja Agile Scrum (sprint planning, daily standup, dan code review), serta mendapatkan bimbingan langsung seorang mentor senior engineer."
      ],
      technologies: [
        "Laravel",
        "React",
        "Phalcon PHP",
        "Vue.js",
        "PostgreSQL",
        "GitLab",
        "REST API"
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "yzd-center",
      number: "01",
      title:
        "YZD Center — Sistem Manajemen Copytrade, Afiliasi & Komisi Multi-Tier",
      category: "Freelance • Solo Developer",
      badgeLabel: "FREELANCE • SOLO DEVELOPER",
      summary:
        "Aplikasi web SPA full-stack untuk mengelola operasional investasi copytrade, verifikasi KYC & kredensial broker berjenjang, serta otomasi kalkulasi klaim komisi afiliasi.",
      highlights: [
        "Arsitektur SPA Reaktif & Service Layer menggunakan Laravel 12, Inertia.js v2, dan Vue 3.",
        "Komisi 4-Tier & Eligibilitas 90 Hari dengan transaksi database dan presisi finansial DECIMAL(15,2).",
        "Keamanan Kredensial & Dokumen Privat melalui enkripsi AES-256 (encrypted cast) serta authorized file streaming."
      ],
      tags: ["Laravel", "Vue", "Inertia.js", "Tailwind CSS", "MySQL"],
      image: "/images/projects/yzdcenter.webp",
      liveUrl: "https://yzdcenter.my.id",
      liveLabel: "yzdcenter.my.id"
    },
    {
      id: "presensi-tamu-pcr",
      number: "02",
      title:
        "Presensi Tamu PCR — Sistem Informasi Manajemen Kunjungan & Presensi Event Kampus",
      category: "Final Project • Solo Developer",
      badgeLabel: "SKRIPSI / TA • SOLO DEVELOPER",
      summary:
        "Aplikasi web full-stack untuk mendigitalisasi registrasi buku tamu kampus, presensi kegiatan (event) berbasis QR Code, monitoring kunjungan, umpan balik (feedback) dan terintegrasi Business Intelligence.",
      highlights: [
        "Arsitektur Multi-Role RBAC & SSO — Manajemen hak akses terstruktur untuk 5 peran menggunakan Spatie Permission, multi-role switcher, dan autentikasi Google OAuth (Socialite).",
        "Presensi Event & Kunjungan Berbasis QR Code — Alur check-in/check-out mandiri untuk tamu dan civitas akademika serta lokalisasi multi-bahasa (ID/EN).",
        "Monitoring & Server-Side DataTables — Dashboard analitik eksekutif, pemantauan kunjungan harian, dan rekam jejak audit (activity log) dengan Yajra DataTables."
      ],
      tags: ["Laravel", "Tailwind CSS", "SQL Server", "Business Intelligence"],
      image: "/images/projects/visitor.webp",
      liveUrl: "https://visitor.pocari.id",
      liveLabel: "visitor.pocari.id"
    },
    {
      id: "perpustakaan-pcr",
      number: "03",
      title:
        "UPT Perpustakaan PCR — Sistem Informasi Layanan & Pengajuan Akademik Terpadu",
      category: "Internship • Solo Developer",
      badgeLabel: "INTERNSHIP • SOLO DEVELOPER",
      summary:
        "Aplikasi web full-stack yang mendigitalisasi portal informasi perpustakaan kampus beserta alur pengajuan pengadaan buku, modul ajar, cek plagiarisme, dan surat bebas pustaka.",
      highlights: [
        "Digitalisasi end-to-end pengajuan buku, modul ajar, cek plagiarisme, dan otomatisasi surat bebas pustaka.",
        "Integrasi autentikasi & sinkronisasi data akademik dengan REST API internal Politeknik Caltex Riau.",
        "Sistem antrean (Laravel Queue) untuk pemrosesan surat Bebas Pustaka (PHPWord) dan pengiriman email otomatis di latar belakang."
      ],
      tags: ["Laravel", "Bootstrap", "SQL Server"],
      image: "/images/projects/lib-pcr.webp",
      liveUrl: "https://lib.pcr.ac.id",
      liveLabel: "lib.pcr.ac.id"
    }
  ] satisfies ProjectItem[],

  capabilities: [
    {
      id: "cap-backend",
      code: "01",
      title: "BACKEND ARCHITECTURE",
      shortTitle: "Backend Architecture",
      description:
        "Membangun fondasi aplikasi web yang aman, modular, serta mudah dipelihara menggunakan ekosistem PHP maupun JavaScript.",
      skills: [
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
        { name: "CodeIgniter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.simpleicons.org/express/ffffff" },
        { name: "RESTful API", logo: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
      ],
    },
    {
      id: "cap-frontend",
      code: "02",
      title: "FRONTEND & MODERN INTERACTIVE UI",
      shortTitle: "Responsive Frontend",
      description:
        "Menerjemahkan kebutuhan bisnis menjadi antarmuka pengguna yang nyaman di berbagai perangkat.",
      skills: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        { name: "SvelteKit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
      ],
    },
    {
      id: "cap-database",
      code: "03",
      title: "DATABASE DESIGN (SQL & NOSQL)",
      shortTitle: "SQL & NoSQL Database",
      description:
        "Merancang skema basis data relasional (ERD) maupun dokumen NoSQL yang terstruktur, serta mengoptimasi performa query aplikasi.",
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Microsoft SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
        { name: "Eloquent ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
        { name: "DBeaver", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" },
      ],
    },
    {
      id: "cap-tools",
      code: "04",
      title: "WORKFLOW, TESTING & DEPLOYMENT",
      shortTitle: "DevOps & Tooling",
      description:
        "Mengelola alur kerja kolaborasi kode dengan Git/GitLab, pengujian, hingga proses deployment.",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.simpleicons.org/github/ffffff" },
        { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
        { name: "PHPUnit", logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00OTguMDc4IDIwNi45OTZjLTUuNzI2IDE1LjEwMi0yNS45MDQgMjEuNzA3LTM5LjQ1IDYuODhjLTQyLjY5NS00OS4yOC0xMjYuMzY1LTQ5Ljc4LTE0OS42MjMgMjQuNjYyYy0xNy43NzMgNTMuNTU5IDI2LjUwOCAxMDkuNTYyIDEwNC43ODUgMTAyLjQ3N2MxNy4xNzUtMS4zNTYgMjkuMzE1IDE0LjAyOCAyMy45MTkgMzAuOTdsLTM4LjkzNSAxMDYuNDA3Yy05Ljg3IDI2LjE3OC0zNS4yMjcgNDAuMjktNjUuMjEyIDMwLjQ4TDM1LjMxNCA0MDAuMTU3Yy0yNi44NTUtOS40ODItNDEuNTctMzguNzQzLTMyLjc1OS02NS4wMzRsMTEwLjQ2NC0zMDEuOUMxMjQuOTMgNi4yOSAxNDUuNDg3LTUuODg5IDE3OC4yMyAyLjc0MWwyOTguMjEgMTA4LjcwMmMyNi45MTYgOS41MzcgNDEuNjAxIDM4Ljc3NCAzMi43OTggNjUuMDQ4ek00NDEuMTU3IDI2MC4xYzAtNDAuMjIzLTQzLjg0My02NS41LTc4LjcyOS00NS4zODhzLTM0Ljg4NSA3MC42NjQgMCA5MC43NzZzNzguNzI5LTUuMTY0IDc4LjcyOS00NS4zODgiLz48L3N2Zz4=" },
        { name: "Pest PHP", logo: "/images/icons/pest.svg" },
        { name: "Cypress", logo: "https://cdn.simpleicons.org/cypress/69D3A7" },
        { name: "Grafana k6", logo: "https://cdn.simpleicons.org/k6/7D64FF" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "Apidog", logo: "https://cdn.simpleicons.org/swagger/85EA2D" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Linux / Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      ],
    }
  ] satisfies CapabilityItem[],
};
