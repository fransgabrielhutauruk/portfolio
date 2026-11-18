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

export interface CoreReadingItem {
  id: string;
  title: string;
  author: string;
  focusTag: string;
  status?: "Currently Reading";
}

export interface CertificationItem {
  id: string;
  number: string;
  category:
    | "Professional Certification"
    | "Intensive Course"
    | "Skill Certification";
  title: string;
  issuer: string;
  instructor?: string;
  badgeText: string;
  year: string;
  description: string;
  credentialUrl?: string;
  credentialNote?: string;
  isPrimary?: boolean;
  skills: string[];
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
      "Merancang dan membangun aplikasi web end-to-end yang andal, aman, dan cepat — menerjemahkan proses bisnis ke dalam sistem yang terstruktur serta antarmuka yang responsif dan siap produksi.",
    location: "Riau, Indonesia",
    email: "fransgabriel17@gmail.com",
    whatsappUrl:
      "https://wa.me/6289621530018?text=Halo%20Frans,%20saya%20melihat%20web%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
    cvUrl: "/cv-frans.pdf",
    avatarCutout: "/images/foto-profile.webp",
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/fransgabrielhutauruk",
        handle: "@fransgabrielhutauruk",
      },
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
      "Ketertarikan mendalam saya pada dunia Software Engineering berawal dari kepuasan sederhana saat melihat proses bisnis yang rumit dapat diotomatisasi menjadi aplikasi yang cepat, intuitif, dan andal.",
    bodyParagraph:
      "Sebagai seorang Full-Stack Engineer, saya tidak hanya menulis baris kode agar fitur berjalan, tetapi juga merancang skema basis data yang efisien, menjaga logika backend tetap aman dan terstruktur, serta memastikan pengguna berinteraksi tanpa hambatan di sisi antarmuka.",
    closeParagraph:
      "Pendekatan ini saya terapkan secara end-to-end, mulai dari menerjemahkan kebutuhan operasional ke dalam sistem, hingga menguji dan meluncurkan aplikasi yang berdampak nyata bagi pengguna.",
    education: {
      institution: "Politeknik Caltex Riau",
      degree: "D4 / Sarjana Terapan Komputer (S.Tr.Kom.)",
      major: "Program Studi Sistem Informasi",
      period: "2022 – 2026",
      gpa: "3.93",
      gpaScale: "4.00",
      honors: "Cum Laude",
      scholarship: {
        title: "Penerima Beasiswa Prestasi Pemerintah Provinsi Riau",
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
        level: "Professional Working",
        proficiencyPercent: 100,
      },
    ] satisfies LanguageItem[],
    coreReadings: [
      {
        id: "pragmatic-programmer",
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt, David Thomas",
        focusTag: "Software Craftsmanship",
      },
      {
        id: "ddia",
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann, Chris Riccomini",
        focusTag: "Data Systems & Scalability",
        status: "Currently Reading",
      },
      {
        id: "head-first-design-patterns",
        title: "Head First Design Patterns",
        author: "Eric Freeman, Elisabeth Robson, et al.",
        focusTag: "OOP & Design Patterns",
      },
      {
        id: "grokking-algorithms",
        title: "Grokking Algorithms",
        author: "Aditya Y. Bhargava",
        focusTag: "Algorithms & Problem Solving",
      },
      {
        id: "software-requirements",
        title: "Software Requirements (Third Edition)",
        author: "Karl Wiegers, Joy Beatty",
        focusTag: "System & Business Analysis",
      },
    ] as CoreReadingItem[],
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
      period: "8 Sep 2025 – 30 Jan 2026",
      liveUrl: "https://lib.pcr.ac.id",
      liveLabel: "lib.pcr.ac.id",
      description:
        "Terlibat dalam Program Magang Internal Berdampak untuk merancang dan mengembangkan Sistem Informasi Perpustakaan Kampus. Berkolaborasi dengan dosen pembimbing serta tim IT kampus (BSTI) dalam perumusan requirements dan standar pengembangan.",
      responsibilities: [
        "Merancang skema basis data relasional pada Microsoft SQL Server serta mengimplementasikan autentikasi terpusat berbasis Google OAuth dan kontrol akses berbasis peran bagi mahasiswa, dosen, dan staf perpustakaan.",
        "Mendigitalisasi 5 alur layanan mandiri perpustakaan: meliputi portal informasi, pengadaan buku & modul ajar, cek plagiarisme, hingga surat bebas pustaka.",
        "Mengintegrasikan aplikasi dengan REST API data akademik kampus serta menerapkan standar kode dan keamanan infrastruktur BSTI hingga sistem diluncurkan ke lingkungan produksi.",
      ],
      technologies: [
        "Laravel",
        "Blade",
        "Bootstrap",
        "Microsoft SQL Server",
        "REST API",
        "Google OAuth",
      ],
    },
    {
      id: "exp-javan-msib-2024",
      organization: "PT Javan Cipta Solusi",
      departmentOrProgram: "Software House",
      role: "Programmer Intern",
      employmentType: "Internship • Software House",
      location: "Sleman, Yogyakarta",
      workMode: "On-site",
      period: "6 Sep 2024 – 31 Des 2024",
      description:
        "Terlibat dalam program MSIB Kemendikbudristek. Berkontribusi aktif dalam pengembangan 2 proyek aplikasi web enterprise. Bekerja di lingkungan software house menggunakan metodologi Agile Scrum di bawah bimbingan dari seorang mentor senior engineer.",
      responsibilities: [
        "Mengembangkan modul fitur baru dan penyesuaian di sisi backend (Laravel/Phalcon) maupun antarmuka (React/Vue.js) serta integrasi REST API.",
        "Melakukan debugging, penelusuran alur kode (code tracing), serta optimasi query PostgreSQL untuk menjaga performa dan stabilitas aplikasi.",
        "Menjaga kualitas dan konsistensi kode melalui tinjauan kode (code review) berkala dari senior engineer serta pengelolaan version control dan merge request di GitLab.",
      ],
      technologies: [
        "Laravel",
        "React",
        "Phalcon PHP",
        "Vue.js",
        "PostgreSQL",
        "GitLab",
        "REST API",
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "yzd-center",
      number: "01",
      title: "YZD Center",
      category: "Freelance • Solo Developer",
      badgeLabel: "FREELANCE • SOLO DEVELOPER",
      summary:
        "Platform web untuk mengelola operasional investasi copytrade, mencakup proses verifikasi, pengelolaan akun broker, hingga otomasi perhitungan dan klaim komisi afiliasi berjenjang.",
      highlights: [
        "Menerapkan pola Service Layer untuk memisahkan logika bisnis agar kode mudah dipelihara, dipadukan dengan arsitektur SPA reaktif tanpa page reload.",
        "Membangun mesin kalkulasi komisi 4-tier dan aturan eligibilitas 3 bulan/periode menggunakan database transactions serta presisi DECIMAL(15,2) untuk menjaga integritas data keuangan.",
        "Mengamankan kredensial broker menggunakan enkripsi AES-256 serta melindungi dokumen privat melalui mekanisme authorized file streaming tanpa eksposur URL publik.",
      ],
      tags: ["Laravel", "Vue", "Inertia.js", "Tailwind CSS", "MySQL"],
      image: "/images/projects/yzdcenter.webp",
      liveUrl: "https://yzdcenter.my.id",
      liveLabel: "yzdcenter.my.id",
    },
    {
      id: "presensi-tamu-pcr",
      number: "02",
      title: "Presensi Tamu PCR",
      category: "Final Project • Solo Developer",
      badgeLabel: "SKRIPSI / TA • SOLO DEVELOPER",
      summary:
        "Platform web untuk mendigitalisasi registrasi buku tamu dan presensi event kampus berbasis QR Code, mencakup monitoring kunjungan, survei umpan balik, hingga integrasi analitik Business Intelligence.",
      highlights: [
        "Merancang kontrol akses berbasis peran untuk 5 peran pengguna dengan fitur multi-role switcher serta autentikasi terpusat Google OAuth.",
        "Membangun alur check-in mandiri berbasis QR Code bagi tamu dan sivitas akademika",
        "Mengembangkan dasbor pemantauan kunjungan dengan pemrosesan tabel server-side, serta integrasi analitik Business Intelligence.",
      ],
      tags: [
        "Laravel",
        "Tailwind CSS",
        "SQL Server",
        "Power BI",
        "Google OAuth",
      ],
      image: "/images/projects/visitor.webp",
      liveUrl: "https://visitor.pocari.id",
      liveLabel: "visitor.pocari.id",
    },
    {
      id: "perpustakaan-pcr",
      number: "03",
      title: "Portal Perpustakaan PCR",
      category: "Internship • Solo Developer",
      badgeLabel: "INTERNSHIP • SOLO DEVELOPER",
      summary:
        "Platform web untuk mendigitalisasi layanan informasi perpustakaan serta alur pengajuan akademik sivitas akademika, mulai dari pengadaan koleksi, cek plagiarisme, hingga penerbitan surat bebas pustaka.",
      highlights: [
        "Merancang alur pengajuan dan verifikasi multi-tahap untuk layanan pengadaan buku, modul ajar, cek plagiarisme, dan bebas pustaka",
        "Mengintegrasikan autentikasi terpusat berbasis Google OAuth serta sinkronisasi data sivitas akademika melalui REST API internal Politeknik Caltex Riau.",
        "Menerapkan pemrosesan latar belakang asinkron (Laravel Queue) untuk otomatisasi pembuatan dokumen surat Bebas Pustaka menggunakan PHPWord serta pengiriman notifikasi email.",
      ],
      tags: ["Laravel", "Bootstrap", "SQL Server", "REST API", "Google OAuth"],
      image: "/images/projects/lib-pcr.webp",
      liveUrl: "https://lib.pcr.ac.id",
      liveLabel: "lib.pcr.ac.id",
    },
  ] satisfies ProjectItem[],

  capabilities: [
    {
      id: "cap-backend",
      code: "01",
      title: "BACKEND ARCHITECTURE",
      shortTitle: "Backend Architecture",
      description:
        "Merancang arsitektur server-side yang modular dan aman, mencakup penerapan pola service layer, manajemen hak akses, pemrosesan antrean asinkron, serta integrasi API.",
      skills: [
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
          name: "Laravel",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
          name: "CodeIgniter",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          logo: "https://cdn.simpleicons.org/express/ffffff",
        },
        {
          name: "RESTful API",
          logo: "https://cdn.simpleicons.org/openapiinitiative/6BA539",
        },
      ],
    },
    {
      id: "cap-frontend",
      code: "02",
      title: "FRONTEND ARCHITECTURE & UI",
      shortTitle: "Responsive Frontend",
      description:
        "Merancang antarmuka web modern yang responsif, reaktif, dan berbasis komponen untuk menghadirkan pengalaman pengguna yang cepat di berbagai perangkat.",
      skills: [
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Vue.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "SvelteKit",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Bootstrap",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      id: "cap-database",
      code: "03",
      title: "DATABASE & DATA ARCHITECTURE",
      shortTitle: "SQL & NoSQL Database",
      description:
        "Merancang arsitektur skema basis data relasional yang terstruktur serta penyimpanan in-memory, dengan fokus pada integritas transaksi, indexing, dan optimasi performa query.",
      skills: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Microsoft SQL Server",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Redis",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        },
        {
          name: "Eloquent ORM",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
      ],
    },
    {
      id: "cap-tools",
      code: "04",
      title: "WORKFLOW, TESTING & DEPLOYMENT",
      shortTitle: "DevOps & Tooling",
      description:
        "Menerapkan kolaborasi version control, pengujian otomatis (unit, end-to-end, dan load testing), serta konfigurasi server untuk memastikan keandalan aplikasi di lingkungan produksi.",
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          name: "GitLab",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
        },
        {
          name: "PHPUnit",
          logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00OTguMDc4IDIwNi45OTZjLTUuNzI2IDE1LjEwMi0yNS45MDQgMjEuNzA3LTM5LjQ1IDYuODhjLTQyLjY5NS00OS4yOC0xMjYuMzY1LTQ5Ljc4LTE0OS42MjMgMjQuNjYyYy0xNy43NzMgNTMuNTU5IDI2LjUwOCAxMDkuNTYyIDEwNC43ODUgMTAyLjQ3N2MxNy4xNzUtMS4zNTYgMjkuMzE1IDE0LjAyOCAyMy45MTkgMzAuOTdsLTM4LjkzNSAxMDYuNDA3Yy05Ljg3IDI2LjE3OC0zNS4yMjcgNDAuMjktNjUuMjEyIDMwLjQ4TDM1LjMxNCA0MDAuMTU3Yy0yNi44NTUtOS40ODItNDEuNTctMzguNzQzLTMyLjc1OS02NS4wMzRsMTEwLjQ2NC0zMDEuOUMxMjQuOTMgNi4yOSAxNDUuNDg3LTUuODg5IDE3OC4yMyAyLjc0MWwyOTguMjEgMTA4LjcwMmMyNi45MTYgOS41MzcgNDEuNjAxIDM4Ljc3NCAzMi43OTggNjUuMDQ4ek00NDEuMTU3IDI2MC4xYzAtNDAuMjIzLTQzLjg0My02NS41LTc4LjcyOS00NS4zODhzLTM0Ljg4NSA3MC42NjQgMCA5MC43NzZzNzguNzI5LTUuMTY0IDc4LjcyOS00NS4zODgiLz48L3N2Zz4=",
        },
        { name: "Cypress", logo: "https://cdn.simpleicons.org/cypress/69D3A7" },
        { name: "Grafana k6", logo: "https://cdn.simpleicons.org/k6/7D64FF" },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        {
          name: "Linux / Nginx",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
      ],
    },
  ] satisfies CapabilityItem[],

  certifications: [
    {
      id: "bnsp-programmer",
      number: "01",
      category: "Professional Certification",
      title: "Sertifikasi Kompetensi BNSP — Skema Programmer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      badgeText: "Kompeten",
      year: "2026 — 2029",
      description:
        "Validasi standar kompetensi kerja nasional di bidang rekayasa perangkat lunak, mencakup perancangan program, penulisan kode terstruktur, pengelolaan basis data, hingga debugging.",
      credentialNote: "SK Kompetensi Terbit",
      isPrimary: true,
      skills: [
        "Structured & OOP",
        "Data Structures",
        "Database Management",
        "Debugging",
      ],
    },
    {
      id: "udemy-web-developer-bootcamp",
      number: "02",
      category: "Intensive Course",
      title: "The Web Developer Bootcamp 2024",
      issuer: "Udemy",
      instructor: "Colt Steele",
      badgeText: "74 Jam",
      year: "2024",
      description:
        "Kurikulum pengembangan web Full-Stack modern yang mencakup arsitektur client-server, pembuatan RESTful API, autentikasi & keamanan web, serta pengelolaan basis data NoSQL.",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-66c6c1b6-84e0-400c-88ed-63e5171b9600/",
      skills: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful API",
      ],
    },
    {
      id: "masterdev-fullstack-fundamentals-v3",
      number: "03",
      category: "Intensive Course",
      title: "Full Stack Fundamentals, v3",
      issuer: "Master.dev",
      instructor: "Jem Young",
      badgeText: "8 Jam",
      year: "2026",
      description:
        "Pelatihan teknis arsitektur dan infrastruktur web full-stack, mencakup administrasi server Linux, konfigurasi Nginx, keamanan jaringan & HTTPS, WebSockets, CI/CD, hingga Docker.",
      credentialUrl:
        "https://cdn.master.dev/ud/c/5b7560d635/pApqiQbIWA/fullstack-v3-masterdev.pdf",
      skills: [
        "Linux & CLI",
        "Nginx",
        "Web Security",
        "WebSockets",
        "CI/CD",
        "Docker",
      ],
    },
    {
      id: "hackerrank-sql-intermediate",
      number: "04",
      category: "Skill Certification",
      title: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      badgeText: "Verified Skill",
      year: "2026",
      description:
        "Uji kompetensi teknis basis data relasional yang mencakup penulisan query kompleks, penggabungan tabel tingkat lanjut (complex joins), subqueries, agregasi, serta analisis data.",
      credentialUrl: "https://www.hackerrank.com/certificates/0c624077d433",
      skills: [
        "Complex Joins",
        "Subqueries",
        "Aggregations",
        "Query Optimization",
      ],
    },
    {
      id: "masterdev-practical-prompt-engineering",
      number: "05",
      category: "Specialized Course",
      title: "Practical Prompt Engineering",
      issuer: "Master.dev",
      instructor: "Sabrina Goldfarb",
      badgeText: "4 Jam",
      year: "2026",
      description:
        "Pelatihan rekayasa prompt untuk alur kerja pengembangan berbantuan AI, mencakup kontrol parameter LLM, manajemen context window, structured outputs, serta teknik chain-of-thought.",
      credentialUrl:
        "https://cdn.master.dev/ud/c/5b7560d635/QrhipoBEtR/prompt-engineering-masterdev.pdf",
      skills: [
        "AI-Assisted Coding",
        "Structured Outputs",
        "Chain-of-Thought",
        "Few-Shot Prompting",
        "Context Management",
      ],
    },
  ] as CertificationItem[],
};
