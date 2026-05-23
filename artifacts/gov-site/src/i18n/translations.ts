export type Language = "ms" | "en";

export const translations = {
  ms: {
    // Layout
    officialBanner: "Laman Web Rasmi Kerajaan",
    siteTitle: "Portal Republik",
    siteDept: "Jabatan Negara",
    siteDesc:
      "Kehadiran digital rasmi. Menyediakan maklumat yang terstruktur, bermartabat, dan jelas kepada warga dan pengunjung antarabangsa.",
    nav: {
      home: "Utama",
      services: "Perkhidmatan",
      news: "Berita",
      about: "Mengenai",
      contact: "Hubungi",
    },
    footer: {
      directory: "Direktori",
      contact: "Hubungi",
      privacy: "Dasar Privasi",
      accessibility: "Aksesibiliti",
      terms: "Terma Perkhidmatan",
      copyright: "Kerajaan Republik. Hak cipta terpelihara.",
    },

    // Home
    home: {
      alertText:
        "NOTIS RASMI: Perkhidmatan Cuaca Negara telah mengeluarkan amaran ribut teruk untuk kawasan pesisir.",
      alertLink: "Baca Nasihat",
      heroTitle1: "Perkhidmatan Rasmi",
      heroItalic: "untuk",
      heroTitle2: "Rakyat.",
      heroDesc:
        "Akses sumber kerajaan, baca pengumuman rasmi, dan berhubung dengan jabatan negeri melalui portal digital selamat kami.",
      ctaServices: "Akses Perkhidmatan",
      ctaNews: "Pengumuman Terkini",
      sectionLabel: "Direktori Perkhidmatan",
      sectionTitle: "Perkhidmatan Awam Penting",
      viewAll: "Lihat Semua Direktori",
      accessPortal: "Akses Portal",
      services: [
        {
          title: "Pasport & Dokumen",
          desc: "Mohon atau perbaharui dokumen perjalanan rasmi.",
        },
        {
          title: "Cukai & Kewangan",
          desc: "Failkan pulangan, bayar yuran, dan semak dasar ekonomi.",
        },
        {
          title: "Penjagaan Kesihatan & Keselamatan",
          desc: "Akses program kesihatan nasional dan garis panduan kecemasan.",
        },
        {
          title: "Pengangkutan & Infrastruktur",
          desc: "Pendaftaran kenderaan, transit awam, dan kemas kini jalan.",
        },
      ],
      briefingsLabel: "Laporan",
      briefingsTitle: "Pengumuman\nTerkini",
      briefingsDesc:
        "Siaran akhbar rasmi, kemas kini dasar, dan notis awam dari jabatan negeri.",
      readAllNews: "Baca Semua Berita",
      latestNews: [
        {
          date: "23 Mei 2026",
          title: "Garis Panduan Dasar Ekonomi Baharu Diterbitkan untuk S3",
          dept: "Jabatan Kewangan",
        },
        {
          date: "20 Mei 2026",
          title: "Projek Pembaharuan Infrastruktur Bermula di Ibu Kota",
          dept: "Jabatan Pengangkutan",
        },
        {
          date: "15 Mei 2026",
          title:
            "Nasihat Perjalanan Terkini Dikeluarkan untuk Warga Antarabangsa",
          dept: "Jabatan Negara",
        },
      ],
    },

    // Services
    services: {
      breadcrumbHome: "Utama",
      breadcrumbCurrent: "Perkhidmatan",
      pageTitle: "Direktori Perkhidmatan",
      pageDesc:
        "Akses perkhidmatan dan sumber kerajaan rasmi. Cari mengikut kata kunci atau layari kategori di bawah.",
      searchPlaceholder: "Cari perkhidmatan (cth., 'Pasport', 'Cukai')",
      noResults: "Tiada perkhidmatan yang sepadan dengan kriteria anda.",
      categories: {
        Documents: "Dokumen",
        Finance: "Kewangan",
        Healthcare: "Penjagaan Kesihatan",
        Transport: "Pengangkutan",
        Education: "Pendidikan",
      },
      items: [
        {
          id: "s1",
          category: "Dokumen",
          title: "Pasport & Visa",
          desc: "Mohon, perbaharui, atau semak status pasport atau visa anda.",
        },
        {
          id: "s2",
          category: "Dokumen",
          title: "Sijil Kelahiran & Kematian",
          desc: "Minta salinan rekod penting yang diperakui.",
        },
        {
          id: "s3",
          category: "Kewangan",
          title: "Pulangan Cukai",
          desc: "Failkan pulangan cukai pendapatan tahunan anda secara dalam talian dengan selamat.",
        },
        {
          id: "s4",
          category: "Kewangan",
          title: "Lesen Perniagaan",
          desc: "Daftarkan perniagaan baharu atau perbaharui lesen sedia ada.",
        },
        {
          id: "s5",
          category: "Penjagaan Kesihatan",
          title: "Portal Insurans Kesihatan",
          desc: "Urus perlindungan penjagaan kesihatan nasional anda.",
        },
        {
          id: "s6",
          category: "Penjagaan Kesihatan",
          title: "Rekod Vaksinasi",
          desc: "Akses dan cetak sejarah imunisasi rasmi anda.",
        },
        {
          id: "s7",
          category: "Pengangkutan",
          title: "Lesen Memandu",
          desc: "Perbaharui lesen anda atau jadualkan ujian memandu.",
        },
        {
          id: "s8",
          category: "Pengangkutan",
          title: "Pendaftaran Kenderaan",
          desc: "Daftarkan kenderaan baharu atau pindahkan pemilikan.",
        },
        {
          id: "s9",
          category: "Pendidikan",
          title: "Pinjaman Pelajar",
          desc: "Mohon pembiayaan pendidikan yang ditaja oleh negara.",
        },
      ],
    },

    // News
    news: {
      breadcrumbHome: "Utama",
      breadcrumbCurrent: "Berita & Pengumuman",
      pageTitle: "Pengumuman Rasmi",
      pageDesc:
        "Siaran akhbar, kemas kini dasar, dan kenyataan rasmi daripada kerajaan.",
      readStatement: "Baca Kenyataan",
      previous: "Sebelumnya",
      next: "Seterusnya",
      pageInfo: "Halaman 1 daripada 12",
      items: [
        {
          id: "n1",
          date: "23 Mei 2026",
          category: "Ekonomi",
          title: "Garis Panduan Dasar Ekonomi Baharu Diterbitkan untuk S3",
          excerpt:
            "Jabatan Kewangan telah mengeluarkan garis panduan komprehensif yang memperincikan program penstrukturan semula ekonomi bagi memupuk pertumbuhan mampan.",
        },
        {
          id: "n2",
          date: "20 Mei 2026",
          category: "Infrastruktur",
          title: "Projek Pembaharuan Infrastruktur Bermula di Ibu Kota",
          excerpt:
            "Pembaikan besar rangkaian transit awam dan jalan raya ibu kota telah bermula secara rasmi, menjanjikan peningkatan kecekapan jangka panjang.",
        },
        {
          id: "n3",
          date: "15 Mei 2026",
          category: "Hal Ehwal Luar",
          title:
            "Nasihat Perjalanan Terkini Dikeluarkan untuk Warga Antarabangsa",
          excerpt:
            "Jabatan Negara menasihati semua warga yang mengembara ke luar negara untuk menyemak protokol keselamatan dan keperluan visa yang baru dikemas kini.",
        },
        {
          id: "n4",
          date: "10 Mei 2026",
          category: "Kesihatan",
          title: "Inisiatif Kesihatan Negara Mencapai Pencapaian Baharu",
          excerpt:
            "Lebih 5 juta rakyat kini telah mendaftar dalam program perlindungan penjagaan kesihatan yang diperluaskan yang dilancarkan awal tahun ini.",
        },
        {
          id: "n5",
          date: "02 Mei 2026",
          category: "Pendidikan",
          title: "Geran Diumumkan untuk Penyelidikan Pengajian Tinggi",
          excerpt:
            "Kementerian Pendidikan telah memperuntukkan pembiayaan baharu bertujuan menyokong penyelidikan lanjutan dalam sains dan teknologi.",
        },
      ],
    },

    // About
    about: {
      breadcrumbHome: "Utama",
      breadcrumbCurrent: "Mengenai Kerajaan",
      pageTitle: "Mengenai Republik",
      pageDesc:
        "Memahami struktur, misi, dan kepimpinan negara berdaulat kami.",
      contentsLabel: "Kandungan",
      contents: {
        mission: "Pernyataan Misi",
        structure: "Struktur Kerajaan",
        leadership: "Direktori Kepimpinan",
      },
      missionTitle: "Pernyataan Misi",
      missionStatement:
        "Untuk berkhidmat kepada amanah awam dengan integriti mutlak, memastikan keselamatan, kemakmuran, dan kebebasan semua warga melalui tadbir urus yang telus.",
      missionBody:
        "Republik ini diasaskan atas prinsip komitmen teguh terhadap tugas sivik. Kami beroperasi atas kepercayaan bahawa sebuah kerajaan mesti menjadi tiang sokongan yang jelas dan teguh bagi rakyatnya. Setiap dasar yang digubal, setiap perkhidmatan yang disediakan, dan setiap keputusan yang dibuat diukur berdasarkan manfaatnya kepada kebaikan awam.",
      structureTitle: "Struktur Kerajaan",
      branches: [
        {
          title: "Cabang Eksekutif",
          desc: "Dipimpin oleh Ketua Negara, bertanggungjawab melaksanakan dan menguatkuasakan undang-undang yang ditulis oleh Badan Perundangan dan melantik ketua-ketua agensi persekutuan.",
        },
        {
          title: "Cabang Perundangan",
          desc: "Terdiri daripada wakil-wakil yang dipilih yang menggubal, memperdebat, dan meluluskan undang-undang yang mengawal Republik.",
        },
        {
          title: "Cabang Kehakiman",
          desc: "Mahkamah bebas yang bertanggungjawab mentafsir undang-undang, menghukum pesalah undang-undang, dan menyelesaikan pertikaian undang-undang.",
        },
        {
          title: "Jabatan Negeri",
          desc: "Bahagian pentadbiran yang menguruskan sektor-sektor pentadbiran nasional tertentu seperti Kewangan, Pertahanan, dan Kesihatan.",
        },
      ],
      leadershipTitle: "Direktori Kepimpinan",
      portraitPending: "Gambar\nBelum Ada",
      leaders: [
        {
          name: "YB A. Sterling",
          title: "Ketua Negara",
          role: "Pejabat Eksekutif",
        },
        {
          name: "YB M. Vance",
          title: "Setiausaha Negara",
          role: "Hal Ehwal Luar",
        },
        { name: "YB R. Chen", title: "Setiausaha Kewangan", role: "Perbendaharaan" },
        { name: "YB L. Hayes", title: "Peguam Negara", role: "Kehakiman" },
      ],
    },

    // Contact
    contact: {
      breadcrumbHome: "Utama",
      breadcrumbCurrent: "Hubungi",
      pageTitle: "Hubungi Kerajaan",
      pageDesc:
        "Saluran rasmi untuk pertanyaan awam, hubungan kecemasan, dan direktori jabatan.",
      inquiryTitle: "Pertanyaan Rasmi",
      form: {
        firstName: "Nama Pertama",
        lastName: "Nama Akhir",
        email: "Alamat E-mel",
        directTo: "Terus Pertanyaan Kepada",
        selectDept: "Pilih Jabatan...",
        deptState: "Jabatan Negara",
        deptFinance: "Jabatan Kewangan",
        deptHealth: "Jabatan Kesihatan",
        deptTransport: "Jabatan Pengangkutan",
        deptOther: "Pertanyaan Umum",
        message: "Mesej",
        submit: "Hantar Pertanyaan Rasmi",
      },
      directoryTitle: "Maklumat Direktori",
      hq: "Ibu Pejabat",
      hours: "Waktu Operasi",
      hoursDetail: "Isnin - Jumaat\n08:00 - 17:00 (Waktu Tempatan)\nTutup pada Cuti Umum",
      switchboard: "Papan Suis Utama",
      generalEmail: "E-mel Umum",
      emergencyTitle: "Hubungan Kecemasan",
      emergencyItems: [
        { label: "Polis / Perubatan / Bomba", number: "911" },
        { label: "Talian Panas Keselamatan Negara", number: "311" },
        { label: "Tindak Balas Bencana", number: "511" },
      ],
    },
  },

  en: {
    // Layout
    officialBanner: "Official Website of the Government",
    siteTitle: "Republic Portal",
    siteDept: "Department of State",
    siteDesc:
      "The official digital presence. Providing structured, dignified, and clear information to citizens and international visitors.",
    nav: {
      home: "Home",
      services: "Services",
      news: "News",
      about: "About",
      contact: "Contact",
    },
    footer: {
      directory: "Directory",
      contact: "Contact",
      privacy: "Privacy Policy",
      accessibility: "Accessibility",
      terms: "Terms of Service",
      copyright: "Government of the Republic. All rights reserved.",
    },

    // Home
    home: {
      alertText:
        "OFFICIAL ADVISORY: National Weather Service has issued a severe storm warning for the coastal regions.",
      alertLink: "Read Advisory",
      heroTitle1: "Official Services",
      heroItalic: "for the",
      heroTitle2: "Citizens.",
      heroDesc:
        "Access government resources, read official announcements, and connect with state departments through our secure digital portal.",
      ctaServices: "Access Services",
      ctaNews: "Latest Announcements",
      sectionLabel: "Directory of Services",
      sectionTitle: "Essential Public Services",
      viewAll: "View All Directory",
      accessPortal: "Access Portal",
      services: [
        {
          title: "Passports & Documents",
          desc: "Apply for or renew official travel documents.",
        },
        {
          title: "Taxes & Finance",
          desc: "File returns, pay fees, and review economic policies.",
        },
        {
          title: "Healthcare & Safety",
          desc: "Access national health programs and emergency guidelines.",
        },
        {
          title: "Transport & Infrastructure",
          desc: "Vehicle registration, public transit, and road updates.",
        },
      ],
      briefingsLabel: "Briefings",
      briefingsTitle: "Latest\nAnnouncements",
      briefingsDesc:
        "Official press releases, policy updates, and public notices from the state departments.",
      readAllNews: "Read All News",
      latestNews: [
        {
          date: "23 May 2026",
          title: "New Economic Policy Guidelines Published for Q3",
          dept: "Dept. of Finance",
        },
        {
          date: "20 May 2026",
          title: "Infrastructure Renewal Project Breaks Ground in Capital",
          dept: "Dept. of Transport",
        },
        {
          date: "15 May 2026",
          title: "Updated Travel Advisories Issued for International Citizens",
          dept: "Dept. of State",
        },
      ],
    },

    // Services
    services: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Services",
      pageTitle: "Directory of Services",
      pageDesc:
        "Access official government services and resources. Search by keyword or browse categories below.",
      searchPlaceholder: "Search services (e.g., 'Passport', 'Taxes')",
      noResults: "No services found matching your criteria.",
      categories: {
        Documents: "Documents",
        Finance: "Finance",
        Healthcare: "Healthcare",
        Transport: "Transport",
        Education: "Education",
      },
      items: [
        {
          id: "s1",
          category: "Documents",
          title: "Passports & Visas",
          desc: "Apply for, renew, or check the status of your passport or visa.",
        },
        {
          id: "s2",
          category: "Documents",
          title: "Birth & Death Certificates",
          desc: "Request certified copies of vital records.",
        },
        {
          id: "s3",
          category: "Finance",
          title: "Tax Returns",
          desc: "File your annual income tax returns securely online.",
        },
        {
          id: "s4",
          category: "Finance",
          title: "Business Licenses",
          desc: "Register a new business or renew an existing license.",
        },
        {
          id: "s5",
          category: "Healthcare",
          title: "Health Insurance Portal",
          desc: "Manage your national healthcare coverage.",
        },
        {
          id: "s6",
          category: "Healthcare",
          title: "Vaccination Records",
          desc: "Access and print your official immunization history.",
        },
        {
          id: "s7",
          category: "Transport",
          title: "Driver's Licenses",
          desc: "Renew your license or schedule a driving test.",
        },
        {
          id: "s8",
          category: "Transport",
          title: "Vehicle Registration",
          desc: "Register a new vehicle or transfer ownership.",
        },
        {
          id: "s9",
          category: "Education",
          title: "Student Loans",
          desc: "Apply for state-sponsored education financing.",
        },
      ],
    },

    // News
    news: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "News & Announcements",
      pageTitle: "Official Announcements",
      pageDesc:
        "Press releases, policy updates, and official statements from the government.",
      readStatement: "Read Statement",
      previous: "Previous",
      next: "Next",
      pageInfo: "Page 1 of 12",
      items: [
        {
          id: "n1",
          date: "23 May 2026",
          category: "Economy",
          title: "New Economic Policy Guidelines Published for Q3",
          excerpt:
            "The Department of Finance has issued comprehensive guidelines detailing the economic restructuring program aimed at fostering sustainable growth.",
        },
        {
          id: "n2",
          date: "20 May 2026",
          category: "Infrastructure",
          title: "Infrastructure Renewal Project Breaks Ground in Capital",
          excerpt:
            "A major overhaul of the capital's public transit and road networks has officially begun, promising long-term efficiency improvements.",
        },
        {
          id: "n3",
          date: "15 May 2026",
          category: "Foreign Affairs",
          title: "Updated Travel Advisories Issued for International Citizens",
          excerpt:
            "The Department of State advises all citizens traveling abroad to review the newly updated safety protocols and visa requirements.",
        },
        {
          id: "n4",
          date: "10 May 2026",
          category: "Health",
          title: "National Health Initiative Reaches Milestone",
          excerpt:
            "Over 5 million citizens have now enrolled in the expanded healthcare coverage program launched earlier this year.",
        },
        {
          id: "n5",
          date: "02 May 2026",
          category: "Education",
          title: "Grants Announced for Higher Education Research",
          excerpt:
            "The Ministry of Education has allocated new funding aimed at supporting advanced research in science and technology.",
        },
      ],
    },

    // About
    about: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "About the Government",
      pageTitle: "About the Republic",
      pageDesc:
        "Understanding the structure, mission, and leadership of our sovereign state.",
      contentsLabel: "Contents",
      contents: {
        mission: "Mission Statement",
        structure: "Government Structure",
        leadership: "Leadership Directory",
      },
      missionTitle: "Mission Statement",
      missionStatement:
        "To serve the public trust with absolute integrity, ensuring the security, prosperity, and liberty of all citizens through transparent governance.",
      missionBody:
        "The Republic was founded on principles of unwavering commitment to civic duty. We operate on the belief that a government must be a clear and unyielding pillar of support for its people. Every policy enacted, every service provided, and every decision made is measured against its benefit to the public good.",
      structureTitle: "Government Structure",
      branches: [
        {
          title: "Executive Branch",
          desc: "Led by the Head of State, responsible for implementing and enforcing the laws written by the Legislature and appointing the heads of the federal agencies.",
        },
        {
          title: "Legislative Branch",
          desc: "Comprised of elected representatives who draft, debate, and pass the laws that govern the Republic.",
        },
        {
          title: "Judicial Branch",
          desc: "Independent courts responsible for interpreting laws, punishing lawbreakers, and resolving legal disputes.",
        },
        {
          title: "State Departments",
          desc: "Administrative divisions managing specific sectors of national administration such as Finance, Defense, and Health.",
        },
      ],
      leadershipTitle: "Leadership Directory",
      portraitPending: "Portrait\nPending",
      leaders: [
        {
          name: "Hon. A. Sterling",
          title: "Head of State",
          role: "Executive Office",
        },
        {
          name: "Hon. M. Vance",
          title: "Secretary of State",
          role: "Foreign Affairs",
        },
        {
          name: "Hon. R. Chen",
          title: "Secretary of Finance",
          role: "Treasury",
        },
        { name: "Hon. L. Hayes", title: "Attorney General", role: "Justice" },
      ],
    },

    // Contact
    contact: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Contact",
      pageTitle: "Contact the Government",
      pageDesc:
        "Official channels for public inquiries, emergency contacts, and department directories.",
      inquiryTitle: "Official Inquiries",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        directTo: "Direct Inquiry To",
        selectDept: "Select Department...",
        deptState: "Department of State",
        deptFinance: "Department of Finance",
        deptHealth: "Department of Health",
        deptTransport: "Department of Transport",
        deptOther: "General Inquiry",
        message: "Message",
        submit: "Submit Official Inquiry",
      },
      directoryTitle: "Directory Information",
      hq: "Headquarters",
      hours: "Hours of Operation",
      hoursDetail:
        "Monday - Friday\n08:00 - 17:00 (Local Time)\nClosed on State Holidays",
      switchboard: "Main Switchboard",
      generalEmail: "General Email",
      emergencyTitle: "Emergency Contacts",
      emergencyItems: [
        { label: "Police / Medical / Fire", number: "911" },
        { label: "National Security Hotline", number: "311" },
        { label: "Disaster Response", number: "511" },
      ],
    },
  },
} as const;

export type Translations = typeof translations.ms;
