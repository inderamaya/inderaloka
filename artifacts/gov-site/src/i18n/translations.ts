export type Language = "ms" | "en";

export const translations = {
  ms: {
    officialBanner: "Portal Rasmi Negara Inderaloka",
    weatherAlert: {
      title: "AMARAN CUACA AKTIF",
      description:
        "Jabatan Meteorologi Kebangsaan telah mengeluarkan amaran ribut kuat di kawasan pesisir pantai. Sila ambil langkah berjaga-jaga.",
    },
    siteTitle: "InderaMaya.ir",
    siteDept: "Negara Inderaloka",
    siteDesc:
      "Kehadiran digital rasmi. Menyediakan maklumat yang terstruktur, bermartabat, dan jelas kepada warga dan pengunjung antarabangsa.",
    nav: {
      home: "Utama",
      services: "Perkhidmatan",
      news: "Berita",
      about: "Mengenai",
      royal: "Institusi Diraja",
      directory: "Direktori",
      government: "Kerajaan",
      contact: "Hubungi",
      tourism: "Pelancongan",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      search: "Cari",
    },
    search: {
      placeholder: "Cari kandungan laman web...",
      noResults: "Tiada keputusan ditemui.",
    },
    footer: {
      directory: "Direktori",
      contact: "Hubungi",
      privacy: "Dasar Privasi",
      accessibility: "Aksesibiliti",
      terms: "Terma Perkhidmatan",
      copyright: "Negara Inderaloka. Hak cipta terpelihara.",
    },
    home: {
      alertText:
        "AMARAN CUACA: Jabatan Meteorologi Kebangsaan telah mengeluarkan amaran ribut kuat di kawasan pesisir pantai.",
      alertLink: "Baca Penuh",
      heroTitle1: "Pertiwi",
      heroItalic: "Dijunjung",
      heroTitle2: "Bermartabat",
      heroDesc:
        "InderaMaya.ir berfungsi sebagai gerbang digital rasmi yang menyediakan akses kepada perkhidmatan kerajaan, informasi awam dan institusi negara secara selamat dan berkesan.",
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
          image:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop",
        },
        {
          date: "20 Mei 2026",
          title: "Projek Pembaharuan Infrastruktur Bermula di Ibu Kota",
          dept: "Jabatan Pengangkutan",
          image:
            "https://images.unsplash.com/photo-1545143333-636a6619f707?q=80&w=400&auto=format&fit=crop",
        },
        {
          date: "15 Mei 2026",
          title:
            "Nasihat Perjalanan Terkini Dikeluarkan untuk Warga Antarabangsa",
          dept: "Jabatan Negara",
          image:
            "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=400&auto=format&fit=crop",
        },
      ],
      statsLabel: "Indikator Negara",
      statsTitle: "Statistik Kebangsaan",
      stats: [
        { label: "Penduduk", value: "778,561", sub: "Tangga ke-161 di dunia" },
        {
          label: "Jumlah Keluasan",
          value: "3,250.7 km²",
          sub: "Tangga ke-167 di dunia",
        },
        {
          label: "KDNK per Kapita",
          value: "RI 45,230",
          sub: "Pertumbuhan tahunan +4.2%",
        },
        {
          label: "Indeks Pembangunan Manusia",
          value: "0.825",
          sub: "Pembangunan Sangat Tinggi",
        },
        {
          label: "Daerah Pentadbiran",
          value: "Enam",
          sub: "Pusat tadbir urus wilayah",
        },
      ],
    },
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
        {
          id: "healthcare",
          category: "Penjagaan Kesihatan",
          title: "Institusi Kesihatan",
          desc: "Direktori hospital dan klinik kerajaan di seluruh negara.",
        },
        {
          id: "education",
          category: "Pendidikan",
          title: "Institusi Pendidikan",
          desc: "Senarai universiti awam dan sekolah kebangsaan.",
        },
      ],
    },
    news: {
      breadcrumbHome: "Utama",
      breadcrumbCurrent: "Berita",
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
          image:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "n2",
          date: "20 Mei 2026",
          category: "Infrastruktur",
          title: "Projek Pembaharuan Infrastruktur Bermula di Ibu Kota",
          excerpt:
            "Pembaikan besar rangkaian transit awam dan jalan raya ibu kota telah bermula secara rasmi, menjanjikan peningkatan kecekapan jangka panjang.",
          image:
            "https://images.unsplash.com/photo-1545143333-636a6619f707?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "n3",
          date: "15 Mei 2026",
          category: "Hal Ehwal Luar",
          title:
            "Nasihat Perjalanan Terkini Dikeluarkan untuk Warga Antarabangsa",
          excerpt:
            "Jabatan Negara menasihati semua warga yang mengembara ke luar negara untuk menyemak protokol keselamatan dan keperluan visa yang baru dikemas kini.",
          image:
            "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "n4",
          date: "10 Mei 2026",
          category: "Kesihatan",
          title: "Inisiatif Kesihatan Negara Mencapai Pencapaian Baharu",
          excerpt:
            "Lebih 5 juta rakyat kini telah mendaftar dalam program perlindungan penjagaan kesihatan yang diperluaskan yang dilancarkan awal tahun ini.",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "n5",
          date: "02 Mei 2026",
          category: "Pendidikan",
          title: "Geran Diumumkan untuk Penyelidikan Pengajian Tinggi",
          excerpt:
            "Kementerian Pendidikan telah memperuntukkan pembiayaan baharu bertujuan menyokong penyelidikan lanjutan dalam sains dan teknologi.",
          image:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    about: {
      breadcrumbHome: "Utama",
      breadcrumbCurrent: "Mengenai Kerajaan",
      pageTitle: "Mengenai Republik",
      pageDesc:
        "Memahami struktur, misi, dan kepimpinan negara berdaulat kami.",

      exploreLabel: "Terokai Inderaloka",
      exploreDesc:
        "Pelajari lebih lanjut tentang sejarah, undang-undang, dan identiti negara kami.",
      subpages: [
        {
          href: "/about/history",
          title: "Sejarah",
          desc: "Perjalanan Inderaloka dari zaman kesultanan purba hingga negara moden yang berdaulat.",
        },
        {
          href: "/about/constitution",
          title: "Perlembagaan",
          desc: "Dokumen asas yang menjadi dasar pemerintahan dan hak asasi rakyat Inderaloka.",
        },
        {
          href: "/about/national-symbols",
          title: "Lambang Negara",
          desc: "Bendera, jata, bunga, haiwan, dan simbol-simbol kebangsaan rasmi Inderaloka.",
        },
        {
          href: "/about/administrative-division",
          title: "Pembahagian Pentadbiran",
          desc: "Negeri-negeri dan wilayah persekutuan yang membentuk struktur pentadbiran Inderaloka.",
        },
        {
          href: "/about/currency",
          title: "Mata Wang",
          desc: "Kencana Inderaloka — sejarah, denominasi, dan dasar monetari negara.",
        },
      ],
      contentsLabel: "Kandungan",
      contents: {
        mission: "Sistem Kerajaan",
        structure: "Struktur Kerajaan",
        leadership: "Direktori Kepimpinan",
      },
      missionTitle: "Sistem Kerajaan",
      missionStatement: "Demokrasi Berparlimen dan Raja Berperlembagaan",
      missionBody:
        "Negara ditadbir melalui kerangka perlembagaan yang seimbang dengan menjunjung demokrasi berparlimen, kedaulatan undang-undang, kebertanggungjawaban institusi, dan kedaulatan Raja Berperlembagaan. Setiap institusi awam, dasar negara, dan fungsi pentadbiran diwujudkan bagi memelihara kestabilan, melindungi kesejahteraan rakyat, serta memastikan tadbir urus negara dilaksanakan secara teratur dan berwibawa.",
      structureTitle: "Struktur Kerajaan",
      branches: [
        {
          title: "Sultan",
          desc: "Ketua Negara dan lambang kedaulatan perlembagaan, menjalankan fungsi dan kuasa menurut Perlembagaan dan atas nasihat Perdana Menteri, Jemaah Menteri, dan Majlis Penasihat Diraja, kecuali dalam hal-hal yang memperuntukkan budi bicara Baginda menurut Perlembagaan, Pemerintah Tertinggi Angkatan Tentera, serta Ketua Agama Islam bagi Negara Inderaloka.",
        },
        {
          title: "Badan Eksekutif",
          desc: "Dipimpin oleh YAB Perdana Menteri, bertanggungjawab melaksanakan dasar kerajaan serta mengurus tadbir hal ehwal pentadbiran negara berdasarkan undang-undang yang digubal oleh Badan Perundangan.",
        },
        {
          title: "Badan Perundangan",
          desc: "Merupakan institusi perwakilan rakyat yang bertanggungjawab menggubal, membahas, dan meluluskan undang-undang serta dasar negara.",
        },
        {
          title: "Badan Kehakiman",
          desc: "Badan kehakiman yang bebas dan berwibawa, bertanggungjawab mentafsir undang-undang, membicarakan kes-kes di mahkamah, dan memastikan keadilan dilaksanakan selaras dengan Perlembagaan.",
        },
      ],
      leadershipTitle: "Pentadbiran Semasa",
      portraitPending: "Gambar\nBelum Ada",
      leaders: [
        {
          name: "KDYMM SPB Sultan Ibrahim",
          title: "Sultan Inderaloka",
          role: "Sultan",
        },
        {
          name: "YAB Dato' Seri Hj. Anwar bin Ibrahim",
          title: "Perdana Menteri",
          role: "Eksekutif",
        },
        {
          name: "YB Tan Sri Dato' Sri Dr. Johari bin Abdul",
          title: "Yang di-Pertua Dewan Rakyat",
          role: "Perundangan",
        },
        {
          name: "YAA Datuk Seri Utama Wan Ahmad Fayhsal bin Wan Salleh",
          title: "Ketua Hakim Negara",
          role: "Kehakiman",
        },
      ],
    },
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
      hoursDetail:
        "Isnin - Jumaat\n08:00 - 17:00 (Waktu Tempatan)\nTutup pada Cuti Umum",
      switchboard: "Papan Suis Utama",
      generalEmail: "E-mel Umum",
      emergencyTitle: "Hubungan Kecemasan",
      emergencyItems: [
        { label: "Polis / Perubatan / Bomba", number: "999" },
        { label: "Talian Panas Keselamatan Negara", number: "311" },
        { label: "Tindak Balas Bencana", number: "511" },
      ],
    },

    // About subpages
    history: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Mengenai",
      breadcrumbCurrent: "Sejarah",
      pageTitle: "SEJARAH KESULTANAN INDERALOKA",
      pageDesc:
        "Pulau Chendera\n1746 – Kini\n\nInderaloka merupakan sebuah negeri berdaulat yang terletak di kedudukan strategik di Pulau Chendera. Jati diri negara ini terbentuk hasil gabungan warisan Kesultanan Kedah dan Kesultanan Brunei, serta hubungan diplomasi yang erat dengan Kerajaan Siam. Bermula daripada sebuah pusat perdagangan yang sederhana, Inderaloka telah berkembang menjadi sebuah entiti politik yang merdeka melalui kebijaksanaan pemerintahnya dalam membina hubungan antarabangsa.",
      eras: [
        {
          year: "1746 – 1843",
          label: "PENUBUHAN",
          title: "Asal-usul Wangsa Diraja Inderaloka",
          body: "Sejarah Inderaloka bermula dengan visi berwawasan YAM Pengiran Anak Mahmud Iskandar, putera kepada YAM Pengiran Anak Badaruddin dan YAM Pengiran Anak Sauyah. Baginda merupakan cucunda kepada KDYMM Sultan Husin Kamaluddin, Sultan Brunei ke-16 dan Gusti Kanjeng Ratu Maimun dari Kerajaan Mataram. Walaupun bukan berdarah gahara, ayahanda Pengiran Anak Mahmud Iskandar telah dinafikan hak pewarisan takhta Brunei apabila kuasa pemerintahan beralih kembali kepada jurai keturunan Sultan Muhyiddin pasca- Perang Saudara Brunei.\n\nMenyedari realiti politik tersebut, Pengiran Anak Mahmud Iskandar mengambil keputusan strategik untuk membawa haluan demi kelangsungan warisan nendanya. Saudara kandung baginda, Pengiran Anak Untong, memilih untuk berangkat ke Borneo Utara dan membuka petempatan di Dumpil Meruntum.\n\nSebaliknya, Pengiran Anak Mahmud Iskandar mempunyai firasat yang menjangkau ufuk barat. Pada tahun 1746, baginda mengambil keputusan berani untuk tidak menetap di Sabah, Johor, atau Riau yang ketika itu sedang bergolak akibat perebutan kuasa Bugis dan monopoli Belanda. Baginda sebaliknya belayar ke utara menuju ke Kedah, sebuah pelabuhan entrepot masyhur yang menjadi gerbang kepada pedagang India dan Timur Tengah. Visi baginda adalah untuk membina sebuah pangkalan perdagangan baharu yang melengkapkan rantaian laluan Selat Melaka Utara. Ketibaan baginda di Kampung Agam, Pulau Chendera, telah disambut dengan penuh istiadat oleh pembesar tempatan yang menganggap baginda sebagai saudara serumpun yang bakal membawa kemakmuran bersama.\n\nPembukaan Sikanjang (1779)\nPada 21 Mac 1779, Pengiran Anak Mahmud Iskandar telah mendapat perkenan KDYMM Sultan Kedah Ke-20, Sultan Abdullah Mukarram Shah (1778–1797) untuk meneroka dan membuka petempatan baharu di timur laut Pulau Chendera yang dinamakan sebagai Sikanjang. Kedudukan baginda semakin kukuh susulan perkahwinan dengan YTM Tunku Mariam binti Sultan Abdullah Mukarram Shah pada 13 Januari 1791.\n\nPengiktirafan & Penubuhan Wangsa (1787)\nPada 21 November 1787, pelantikan Pengiran Anak Mahmud Iskandar secara rasmi sebagai Penghulu Sikanjang yang pertama oleh Sultan Kedah telah menandakan bermulanya susur galur Wangsa Diraja Inderaloka. Di bawah pentadbiran baginda, Sikanjang muncul sebagai kawasan pertanian padi yang makmur, hasil pemulihan sistem pengairan terusan lama yang asalnya dibina pada zaman pemerintahan Sultan Dhiauddin Mukarram Shah (1661–1687).\n\nPemasyhuran Kedaulatan (1843)\nKemuncak kedaulatan berlaku pada 1 Oktober 1843 apabila Pengiran Abdul Rahman — anakanda Pengiran Anak Mahmud Iskandar dan Tunku Mariam — dimasyhurkan oleh Baginda Raja Siam, Raja Nangklao (Rama III) sebagai Raja Inderaloka dengan gelaran penuh; Duli Yang Maha Mulia Tuanku Raja Abdul Rahman. Baginda dikurniakan gelaran rasmi Phraya Ritprawirat Suriyathamrach Wichit Suranat Phra Indra (Thai: รยร รยม ร ร ร), atau ringkasnya Phya Indra. Peristiwa ini menandakan permulaan status baharu Inderaloka sebagai sebuah negeri naungan Siam, dengan ibu negeri berpusat di Sikanjang, dan penghantaran ufti Bunga Emas turut dilakukan kepada Raja Siam.",
        },
        {
          year: "1821 – 1945",
          label: "PENJAJAHAN",
          title: "Kemelut Penjajahan dan Diplomasi",
          body: "Penaklukan Siam ke atas Kedah (1821)\nSerangan tentera Siam ke atas Kedah pada 12 November 1821 telah mengubah landskap politik serantau. Lantaran pihak British yang berasa kedudukan mereka di Perak terancam, maka Perjanjian Burney termeterai dengan pengakuan tuntutan Siam ke atas negeri-negeri utara Perak — Kedah, Kelantan, Terengganu — dan menidakkan kedudukan Sultan Kedah, Sultan Ahmad Tajuddin Halim Shah II, sekali gus mencetuskan Perang Musuh Bisik. Pengiran Anak Mahmud Iskandar turut terlibat dalam penentangan peperangan tersebut yang meletus pada 3 Januari 1830. Baginda mangkat pada 30 April 1831, meninggalkan legasi perjuangan kepada waris baginda.\n\nPentadbiran Pulau Chendera di bawah Siam (1839)\nPada 27 Mac 1839, selepas berakhirnya peperangan, Raja Rama III di Bangkok merombak semula pentadbiran Kesultanan Kedah. Pulau Chendera dipisahkan daripada pertuanan Kedah dan dibahagikan kepada enam daerah pentadbiran: Temakah (Barat Laut), Long Sabak (Utara), Seri Santubong (Timur Laut), Rimbawan (Tenggara), Ujong Meranti (Barat Daya), dan Bagan Suri (Selatan). Kerajaan Siam melantik Yang Amat Mulia Putera Long Krok sebagai Gabenor Pulau Chendera, manakala Pengiran Abdul Rahman dilantik sebagai Timbalan Gabenor. Kemangkatan Putera Long Krok pada 6 Julai 1839 kemudiannya membolehkan Pengiran Abdul Rahman dilantik sebagai Gabenor Pulau Chendera.\n\nPengaruh British & Naungan (1909–1945)\nMenerusi Perjanjian Inggeris-Siam 1909, Inderaloka secara rasmi diletakkan di bawah naungan British. Walau bagaimanapun, Raja Mizan Zainal Abidin dan penggantinya, Raja Mahmud Shah, berjaya melengahkan penerimaan Penasihat British secara rasmi melalui kebijaksanaan diplomasi — berhujah bahawa pentadbiran Inderaloka sudah cukup teratur dan mempunyai hasil mahsul yang kukuh hasil kepesatan Pelabuhan Bagan Suri. Pihak British bersetuju hanya menempatkan seorang Ejen Konsular di Sikanjang bermula tahun 1910. Namun situasi berubah apabila Kemelesetan Ekonomi Dunia melanda pada tahun 1929. Demi mendapatkan bantuan kewangan dan perlindungan perbankan British, Raja Mahmud Shah akhirnya terpaksa akur kepada desakan London. Pada 13 Februari 1930, sistem Ejen Konsular digantikan dengan pelantikan A.H. Duke sebagai Penasihat British yang pertama.\n\nPendudukan Jepun dan Siam (1941–1945)\nInderaloka telah diduduki oleh tentera Jepun bermula 12 Disember 1941. Pada 18 Oktober 1943, pentadbiran Jepun menyerahkan Inderaloka kepada kerajaan Siam sebagai balasan kerjasama yang diberikan semasa penaklukan Jepun ke atas Tanah Melayu. Dalam tempoh yang sukar ini, Raja Mahmud Shah mengambil pendekatan diplomasi berwaspada bagi mengekalkan kestabilan negara. Projek pembangunan Bandar Astaputra tergendala, namun infrastruktur asas — rangka jalan, saliran utama dan bangunan pentadbiran awal — kekal wujud, memudahkan proses pemulihan selepas perang.\n\nSelepas kekalahan Jepun pada 15 September 1945, Siam menyerahkan kembali Inderaloka kepada British pada 2 September 1945. DYMM Tuanku Raja Mahmud al-Muqtafi Billah Shah berjaya mendesak British untuk memasukkan satu Klausa Khas dalam perjanjian 12 Oktober 1945 yang menjamin hak autonomi Inderaloka, sebelum menerima kemasukan semula Penasihat British, William Henderson, pada 15 Oktober 1945.",
        },
        {
          year: "1890 – 1963",
          label: "KEBANGKITAN",
          title: "Era Pemodenan dan Perjuangan Berkerajaan Sendiri",
          body: "Pemerintahan Raja-Raja Berwawasan\nEra pemodenan Inderaloka menyaksikan pembangunan pesat di bawah pemerintahan raja-raja yang berwawasan:\n• Tuanku Raja Abdul Halim Mu'adzam al-Muqtasimu Billah Shah al-Haj (1890–1896): Memperkukuh hubungan diplomatik dengan Siam dan Kedah serta mendapatkan dana pinjaman untuk pembangunan prasarana.\n• Tuanku Raja Mizan Zainal Abidin al-Mutawakkil Alallah (1896–1913): Memodenkan infrastruktur menerusi pembinaan jalan raya, sistem tali air, dan pasar baharu di Ujong Meranti. Baginda mempertahankan kedaulatan Inderaloka daripada tuntutan Kedah dengan tegas melalui Surat Tera Diraja kurniaan Raja Chulalongkorn (1898), dan mengisytiharkan Bagan Suri sebagai Pelabuhan Bebas Cukai pada tahun 1905 — langkah yang mengubah ekonomi Inderaloka daripada agraria kepada perdagangan maritim entrepôt.\n• Raja Mahmud Shah (1913–1965): Menubuhkan Majlis Mesyuarat Negara pada tahun 1915, mencetuskan perancangan pembinaan Bandar Astaputra pada 6 Ogos 1935, dan memimpin negara mengharungi cabaran zaman penjajahan.\n\nParti Kebangsaan Inderaloka (1946)\nParti Kebangsaan Inderaloka (PKI) ditubuhkan pada 11 Mei 1946 bagi menuntut pemulihan kuasa mutlak Raja dan kemerdekaan. Apabila cadangan pembentukan Persekutuan Tanah Melayu 1948 dan kemudiannya Malaysia (1963) diutarakan, golongan peniaga dan pembesar istana Inderaloka menyuarakan kebimbangan besar. Inderaloka, yang telah menikmati kemakmuran sebagai sebuah Pelabuhan Bebas sejak 1905, enggan menyertai persekutuan kerana bimbang status pengecualian cukai di Bagan Suri akan ditarik balik.\n\nReferendum 1963\nKemuncak perjuangan ini diterjemahkan melalui Referendum 1963 pada 7 Januari. Keputusan rasmi menyaksikan 78% rakyat Inderaloka menolak penyertaan ke dalam Malaysia, didorong oleh semangat untuk mempertahankan autonomi fiskal dan penguasaan hasil bumi tempatan. Reaksi antarabangsa adalah pelbagai:\n• Malaysia: YTM Tunku Abdul Rahman Putra Al-Haj menzahirkan kekecewaan namun menghormati mandat rakyat Inderaloka.\n• Brunei: Memberikan sokongan penuh atas semangat persaudaraan sesama Kesultanan Melayu yang berdaulat.\n• Indonesia: Presiden Soekarno menyambut baik keputusan tersebut, menyifatkannya sebagai manifestasi kebangkitan nusantara.\n• Thailand: Mengalu-alukan kewujudan sebuah negara penimbal yang bebas dan bersahabat.\n• Singapura: Melihat Inderaloka sebagai model kejayaan bagi kelangsungan sesebuah negara kecil.\n\nSusulan penolakan tersebut, menerusi Perjanjian Sikanjang 1963, Inderaloka kekal sebagai sebuah Negeri Naungan British — dengan kawalan British hanya ke atas hal ehwal luar negeri dan pertahanan, manakala Inderaloka diberikan kuasa autonomi penuh dalam pentadbiran dalaman, kewangan, dan adat istiadat.",
        },
        {
          year: "1976 – Kini",
          label: "KEMERDEKAAN",
          title: "Inderaloka Berdaulat",
          body: 'Penemuan Emas Hitam (1974)\nTitik tolak sebenar ke arah kemerdekaan mutlak berlaku pada tahun 1974 apabila gas asli dan petroleum ditemui di luar pesisir Wilayah Temakah (Lembangan Mergui) di Laut Andaman. Penemuan ini mengubah nasib Inderaloka secara drastik. Dengan hasil royalti minyak yang bakal diperolehi, DYMM Tuanku Raja Abdul Aziz yakin bahawa Inderaloka kini mampu membiayai pertahanan dan hubungan diplomatiknya sendiri tanpa bergantung kepada British. Rundingan kemerdekaan di London pada awal 1976 berlangsung dengan lancar, menjadikan Inderaloka sebuah negara berdaulat sepenuhnya, lapan tahun lebih awal berbanding Kesultanan Brunei.\n\nPengisytiharan Kemerdekaan — 23 Julai 1976\nPada hari Jumaat, 23 Julai 1976, tepat jam 12:00 tengah malam, DYMM Tuanku Raja Abdul Aziz Shah al-Haj telah mengisytiharkan kemerdekaan Inderaloka di Stadium Jagat Raya, Bandar Astaputra dengan laungan \'Merdeka!\' sebanyak tujuh kali, disahut gemuruh oleh rakyat jelata, menandakan lahirnya sebuah negara bangsa baharu di rantau Alam Melayu dan Asia Tenggara. Dalam istiadat yang penuh gilang-gemilang itu, baginda menitahkan pertukaran gelaran ketua negara daripada "Raja" kepada "Sultan" bagi melambangkan kedaulatan mutlak yang setaraf dengan raja-raja Melayu yang lain. Baginda dimasyhurkan sebagai Kebawah Duli Yang Maha Mulia Seri Paduka Baginda Sultan Abdul Aziz al-Muhtadee Billah Shah al-Haj ibni al- Marhum Raja Mahmud al-Muqtafi Billah Shah, Sultan Inderaloka dan Yang di-Pertuan bagi Negara dan Sekalian Jajahan Naungannya. Serentak dengan itu, semua gelaran diraja turut disusun semula dan diperkembangkan melalui penambahan beberapa gelaran diraja baharu yang mencerminkan taraf dan maruah negara yang kini telah sepenuhnya berdaulat. Pemilihan Bandar Astaputra sebagai lokasi pengisytiharan kemerdekaan menegaskan kedudukannya sebagai ibu negara baharu Inderaloka, simbol kedaulatan, kemodenan dan aspirasi masa hadapan. Sikanjang pula dikekalkan sebagai bandar warisan dan pusat sejarah diraja, menempatkan istana lama, makam diraja, serta institusi adat dan sejarah negara.\n\nPembangunan Ekonomi Negara\nSejak mencapai kemerdekaan, Inderaloka telah berkembang menjadi kuasa ekonomi serantau yang disegani. Penemuan petroleum pada tahun 1974, digabungkan dengan status pelabuhan entrepôt yang sedia ada, telah memacu Inderaloka menjadi negara berpendapatan tinggi. Kerajaan menubuhkan Petroleum Inderaloka (PETROKA) untuk menguruskan hasil bumi ini dengan cekap. Keanggotaan Inderaloka dalam ASEAN pada tahun 1984, serentak dengan kemasukan Brunei Darussalam, mengukuhkan lagi hubungan diplomatik serantau. Pencapaian utama negara termasuklah:\n• Diplomasi: Menganggotai Pertubuhan Bangsa-Bangsa Bersatu (PBB) pada tahun 1965 dan ASEAN pada tahun 1984.\n• Ekonomi Dual-Enjin: Menggabungkan sektor perdagangan maritim (Pelabuhan Bagan Suri) dan sektor tenaga (Minyak & Gas), disokong oleh pelancongan dan pertanian moden.\n• Kestabilan Mata Wang: Memperkenalkan mata wang Kencana Inderaloka yang kukuh, disandarkan kepada rizab emas dan aset negara.\n• Warisan: Memelihara warisan budaya Melayu berteraskan sistem Raja Berperlembagaan yang progresif.',
        },
      ],
      quoteLabel: "Proklamasi Kemerdekaan",
      quote:
        "Inderaloka adalah milik kita bersama — tanah tumpahnya darah yang mesti dijaga dengan segenap jiwa raga, dipupuk dengan semangat perpaduan yang tidak boleh digugat oleh mana-mana kuasa di muka bumi ini.",
      quoteSource: "— Pemasyhuran Kemerdekaan Inderaloka, 23 Julai 1976",
    },
    constitution: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Mengenai",
      breadcrumbCurrent: "Perlembagaan",
      pageTitle: "Perlembagaan Inderaloka",
      pageDesc:
        "Undang-undang tertinggi yang menjadi asas pemerintahan dan menjamin hak-hak asasi setiap warga negara.",
      statsLabel: "Fakta Perlembagaan",
      stats: [
        { label: "Tarikh Berkuat Kuasa", value: "31 Ogos 1957" },
        { label: "Jumlah Fasal", value: "183 Fasal" },
        { label: "Bahagian Utama", value: "15 Bahagian" },
        { label: "Pindaan Terkini", value: "2024" },
      ],
      preambleTitle: "Mukadimah Perlembagaan",
      preamble:
        "KAMI, rakyat Inderaloka, berikrar untuk membina sebuah negara yang berdaulat, adil, dan demokratik, berlandaskan prinsip Ketuhanan Yang Maha Esa, kemanusiaan yang adil dan beradab, perpaduan Inderaloka, kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan dan perwakilan, serta keadilan sosial bagi seluruh rakyat Inderaloka.",
      partsTitle: "Bahagian-Bahagian Perlembagaan",
      parts: [
        {
          title: "Bahagian I — Negeri, Agama dan Undang-Undang Persekutuan",
          desc: "Menetapkan sempadan persekutuan, Islam sebagai agama rasmi, dan kedudukan Bahasa Melayu sebagai bahasa kebangsaan.",
        },
        {
          title: "Bahagian II — Kebebasan Asasi",
          desc: "Menjamin kebebasan diri, larangan perhambaan, perlindungan daripada undang-undang jenayah lampau, kebebasan bergerak, bersuara, dan beragama bagi semua warganegara.",
        },
        {
          title: "Bahagian III — Kewarganegaraan",
          desc: "Menggariskan syarat-syarat kewarganegaraan melalui kelahiran, pendaftaran, dan naturalisasi serta perlindungan daripada penyingkiran kewarganegaraan secara sewenang-wenangnya.",
        },
        {
          title: "Bahagian IV — Persekutuan",
          desc: "Menubuhkan Parlimen yang terdiri daripada Yang di-Pertuan Agong, Dewan Negara, dan Dewan Rakyat, serta menggariskan kuasa dan prosedur perundangan.",
        },
        {
          title: "Bahagian V — Negeri-Negeri",
          desc: "Menetapkan kerangka pemerintahan bagi setiap negeri, termasuk Dewan Undangan Negeri dan perlantikan Ketua Menteri.",
        },
        {
          title: "Bahagian VI — Hubungan Persekutuan-Negeri",
          desc: "Mengagihkan kuasa perundangan dan eksekutif antara kerajaan persekutuan dan negeri melalui Senarai Persekutuan, Negeri, dan Bersama.",
        },
        {
          title: "Bahagian IX — Badan Kehakiman",
          desc: "Mewujudkan sistem kehakiman bebas, Mahkamah Persekutuan, Mahkamah Rayuan, dan perlantikan hakim berdasarkan merit.",
        },
        {
          title: "Bahagian X — Perkhidmatan Awam",
          desc: "Mengawal selia pelantikan, perlindungan, dan pemberhentian pegawai awam melalui Suruhanjaya Perkhidmatan Awam yang bebas.",
        },
      ],
    },
    nationalSymbols: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Mengenai",
      breadcrumbCurrent: "Lambang Negara",
      pageTitle: "Lambang-Lambang Negara Inderaloka",
      pageDesc:
        "Simbol-simbol rasmi yang melambangkan identiti, sejarah, dan nilai-nilai luhur rakyat Inderaloka.",
      symbolsLabel: "Simbol-Simbol Rasmi",
      sinceLabel: "Ditetapkan",
      anthemLabel: "Lagu Kebangsaan",
      showLyricsLabel: "Tunjukkan Lirik",
      hideLyricsLabel: "Sembunyikan Lirik",
      anthemLyrics: [
        "Nusa bertuah,",
        "Tanah air warisan luhur,",
        "Di bawah duli Raja Berdaulat,",
        "Berpegang teguh... iman dan adat.",
        "",
        "Maruah bangsa, berbudi jaya,",
        "Aman sentosa, makmur sejahtera,",
        "Kami berikrar setia berjasa,",
        "Untuk tanah air tercinta...",
        "",
        "Inderaloka...",
        "Selama-lama Nusa Bertuah!",
      ],
      symbols: [
        {
          id: "flag",
          title: "Bendera Negara — Jalur Inderaloka",
          since: "1957",
          desc: "Terdiri daripada 14 jalur merah dan putih bersilang mewakili 13 negeri dan wilayah persekutuan. Bulan sabit dan bintang 14 mata berwarna kuning keemasan di atas latar biru tua melambangkan Islam, perpaduan, dan raja berperlembagaan.",
        },
        {
          id: "coa",
          title: "Jata Negara",
          since: "1965",
          desc: "Perisai yang dihiasi simbol-simbol kerajaan kesultanan lama. Dua harimau Malaya sebagai penyokong, dan motto kebangsaan 'Bersekutu Bertambah Mutu' tertera di bawah dalam tulisan Jawi dan Rumi.",
        },
        {
          id: "flower",
          title: "Bunga Kebangsaan — Bunga Raya",
          since: "1960",
          desc: "Hibiscus rosa-sinensis dengan lima kelopak merah cerah. Setiap kelopak melambangkan satu rukun dalam Rukun Negara. Bunga ini tumbuh subur di seluruh Inderaloka sepanjang tahun.",
        },
        {
          id: "animal",
          title: "Haiwan Kebangsaan — Harimau Malaya",
          since: "1974",
          desc: "Panthera tigris jacksoni, simbol keberanian, kekuatan, dan ketangkasan. Terpampang pada jata negara sebagai penyokong, mewakili semangat dan ketabahan rakyat Inderaloka.",
        },
        {
          id: "bird",
          title: "Burung Kebangsaan — Enggang Gading",
          since: "1974",
          desc: "Rhinoplax vigil, dikenali dengan paruh dan topi keemasan yang unik. Melambangkan keagungan alam semula jadi Inderaloka dan kelestarian warisan hutan hujan tropika.",
        },
        {
          id: "fruit",
          title: "Buah Kebangsaan — Durian",
          since: "2018",
          desc: "Durio zibethinus, dikenali sebagai Raja Buah-Buahan. Melambangkan kekayaan tropika Inderaloka, keunikan budaya tempatan, dan kebanggaan rakyat terhadap hasil bumi negara.",
        },
        {
          id: "language",
          title: "Bahasa Kebangsaan — Bahasa Melayu",
          since: "1957",
          desc: "Bahasa Melayu adalah bahasa rasmi dan bahasa kebangsaan Inderaloka. Ia digunakan dalam semua urusan rasmi, pendidikan awam, dan pentadbiran kerajaan di seluruh negara.",
        },
        {
          id: "anthem",
          title: "Lagu Kebangsaan — Indera Mulia",
          since: "1957",
          desc: "Lagu kebangsaan Inderaloka yang dinyanyikan pada semua majlis rasmi negara. Liriknya memuji keagungan negara dan mendoakan keselamatan, kemakmuran, serta kesejahteraan rakyat.",
        },
      ],
    },
    adminDivision: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Mengenai",
      breadcrumbCurrent: "Pembahagian Pentadbiran",
      pageTitle: "Pembahagian Pentadbiran Inderaloka",
      pageDesc:
        "Inderaloka terdiri daripada 13 negeri berdaulat dan 3 wilayah persekutuan di bawah pentadbiran langsung kerajaan pusat.",
      overviewTitle: "Gambaran Keseluruhan",
      overviewBody:
        "Inderaloka dibahagikan kepada 13 negeri yang masing-masing mempunyai kerajaan negeri tersendiri di bawah pimpinan seorang Yang di-Pertua Negeri atau Sultan yang dilantik secara bergilir. Terdapat juga tiga Wilayah Persekutuan yang ditadbir terus oleh kerajaan persekutuan melalui Kementerian Wilayah Persekutuan.",
      statesLabel: "Negeri-Negeri Inderaloka",
      stateColumns: [
        "Negeri",
        "Ibu Kota",
        "Keluasan (km²)",
        "Penduduk",
        "Ketua Negeri",
      ],
      states: [
        {
          name: "Selangor",
          capital: "Shah Alam",
          area: "7,956",
          population: "6.5 juta",
          head: "Sultan Sharafuddin",
        },
        {
          name: "Perak",
          capital: "Ipoh",
          area: "21,005",
          population: "2.5 juta",
          head: "Sultan Nazrin Shah",
        },
        {
          name: "Kelantan",
          capital: "Kota Bharu",
          area: "15,099",
          population: "1.9 juta",
          head: "Sultan Muhammad V",
        },
        {
          name: "Pahang",
          capital: "Kuantan",
          area: "35,965",
          population: "1.7 juta",
          head: "Sultan Abdullah",
        },
        {
          name: "Johor",
          capital: "Johor Bahru",
          area: "19,210",
          population: "3.8 juta",
          head: "Sultan Ibrahim",
        },
        {
          name: "Terengganu",
          capital: "Kuala Terengganu",
          area: "12,955",
          population: "1.3 juta",
          head: "Sultan Mizan",
        },
        {
          name: "Kedah",
          capital: "Alor Setar",
          area: "9,426",
          population: "2.2 juta",
          head: "Sultan Sallehuddin",
        },
        {
          name: "Melaka",
          capital: "Bandaraya Melaka",
          area: "1,664",
          population: "1.0 juta",
          head: "TYT Mohd Ali",
        },
        {
          name: "Negeri Sembilan",
          capital: "Seremban",
          area: "6,645",
          population: "1.2 juta",
          head: "Yang di-Pertuan Besar",
        },
        {
          name: "Perlis",
          capital: "Kangar",
          area: "821",
          population: "0.25 juta",
          head: "Raja Syed Faizuddin",
        },
        {
          name: "Pulau Pinang",
          capital: "George Town",
          area: "1,048",
          population: "1.8 juta",
          head: "TYT Saifuddin",
        },
        {
          name: "Sabah",
          capital: "Kota Kinabalu",
          area: "73,619",
          population: "3.9 juta",
          head: "TYT Juhar Mahiruddin",
        },
        {
          name: "Sarawak",
          capital: "Kuching",
          area: "124,450",
          population: "2.8 juta",
          head: "TYT Taib Mahmud",
        },
      ],
      territoriesLabel: "Wilayah Persekutuan",
      territoriesColumns: ["Wilayah", "Keluasan (km²)", "Penduduk", "Jenis"],
      territories: [
        {
          name: "Wilayah Persekutuan Inderaloka",
          area: "243",
          population: "1.9 juta",
          type: "Ibu Kota Negara",
        },
        {
          name: "Wilayah Persekutuan Labuan",
          area: "91",
          population: "0.1 juta",
          type: "Pusat Kewangan Antarabangsa",
        },
        {
          name: "Wilayah Persekutuan Putrajaya",
          area: "49",
          population: "0.1 juta",
          type: "Pusat Pentadbiran Kerajaan",
        },
      ],
    },
    currency: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Mengenai",
      breadcrumbCurrent: "Mata Wang",
      pageTitle: "Mata Wang Inderaloka",
      pageDesc:
        "Ringgit Inderaloka (RI) — mata wang rasmi yang menjadi asas sistem kewangan negara.",
      overviewTitle: "Gambaran Ringgit Inderaloka",
      code: "RI",
      fullName: "Kencana Inderaloka",
      symbol: "RI",
      centralBankLabel: "Bank Pusat",
      centralBank: "Bank Negara Inderaloka",
      centralBankDesc:
        "Bank Negara Inderaloka (BNI) ditubuhkan pada 1959 sebagai bank pusat negara. BNI bertanggungjawab memastikan kestabilan harga, mengurus rizab antarabangsa, menjaga integriti sistem kewangan, dan mengeluarkan wang kertas serta syiling yang sah.",
      exchangeLabel: "Kadar Pertukaran (Anggaran)",
      exchangeRates: [
        { currency: "USD (Dolar AS)", rate: "RI 4.20" },
        { currency: "GBP (Pound Sterling)", rate: "RI 5.30" },
        { currency: "EUR (Euro)", rate: "RI 4.55" },
        { currency: "SGD (Dolar Singapura)", rate: "RI 3.10" },
      ],
      banknotesTitle: "Wang Kertas",
      banknotes: [
        {
          value: "RI 1",
          color: "Biru",
          desc: "Memaparkan Jata Negara dan gambar Parlimen Inderaloka.",
        },
        {
          value: "RI 5",
          color: "Hijau",
          desc: "Memaparkan Bunga Raya dan corak songket tradisional Melayu.",
        },
        {
          value: "RI 10",
          color: "Merah",
          desc: "Memaparkan Menara Indera dan motif kraftangan tempatan.",
        },
        {
          value: "RI 20",
          color: "Perang",
          desc: "Memaparkan Istana Negara dan pemandangan gunung-ganang.",
        },
        {
          value: "RI 50",
          color: "Hijau Gelap",
          desc: "Memaparkan Jambatan Indera yang ikonik dan panorama bandar raya.",
        },
        {
          value: "RI 100",
          color: "Ungu",
          desc: "Memaparkan Yang di-Pertuan Agong dan lambang kebesaran diraja.",
        },
      ],
      coinsTitle: "Syiling",
      coins: [
        {
          value: "5 Sen",
          material: "Keluli Bersalut Nikel",
          desc: "Tertera gambar Bunga Raya.",
        },
        {
          value: "10 Sen",
          material: "Keluli Bersalut Nikel",
          desc: "Tertera gambar Enggang Gading.",
        },
        {
          value: "20 Sen",
          material: "Keluli Bersalut Nikel",
          desc: "Tertera gambar Harimau Malaya.",
        },
        {
          value: "50 Sen",
          material: "Bimetal Emas & Perak",
          desc: "Tertera gambar Jata Negara.",
        },
      ],
      historyTitle: "Sejarah Mata Wang",
      historyEvents: [
        {
          year: "1957",
          event:
            "Ringgit Inderaloka diperkenalkan serentak dengan kemerdekaan negara.",
        },
        {
          year: "1967",
          event:
            "Ringgit dipisahkan daripada Ringgit Singapura dan Ringgit Brunei.",
        },
        {
          year: "1997",
          event:
            "Krisis kewangan Asia — Ringgit dikaitkan pada kadar tetap kepada USD.",
        },
        {
          year: "2005",
          event:
            "Pematasan USD dihapuskan; Ringgit dibenarkan mengambang secara terurus.",
        },
        {
          year: "2024",
          event:
            "Ringgit mengukuh kepada RI 4.20 berbanding 1 USD di tengah pertumbuhan ekonomi yang kukuh.",
        },
      ],
    },
    tourism: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Mengenai",
      breadcrumbCurrent: "Pelancongan",
      pageTitle: "Pelancongan di Inderaloka",
      pageDesc:
        "Alami gabungan harmoni antara kemodenan dan warisan tradisi di permata Asia Tenggara.",
      exploreLabel: "Terokai Destinasi",
      cultureLabel: "Warisan Budaya",
      viewDetails: "Detail Destinasi",
      ctaTitle: "Mula Rancang Perjalanan Anda",
      ctaDesc:
        "Alami sendiri keajaiban Inderaloka. Kami sedia membantu anda merancang pengalaman yang tidak akan dilupakan.",
      ctaButton1: "Muat Turun Brosur",
      ctaButton2: "Hubungi Agen Pelancongan",
      destinations: [
        {
          title: "Kota Indera",
          desc: "Ibu kota yang dinamik di mana pencakar langit moden berdiri megah di sebelah bangunan kolonial yang terpelihara.",
          image:
            "https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=800",
        },
        {
          title: "Pulau Permata",
          desc: "Syurga tropika dengan air laut kristal, terumbu karang yang menakjubkan, dan pantai berpasir putih yang tenang.",
          image:
            "https://images.unsplash.com/photo-1544945582-3b466d874eac?q=80&w=800",
        },
        {
          title: "Hutan Hujan Indra",
          desc: "Salah satu ekosistem tertua di dunia, menawarkan pengembaraan ekopelancongan yang tidak dapat dilupakan.",
          image:
            "https://images.unsplash.com/photo-1588336332073-489bd69527df?q=80&w=800",
        },
      ],
      culturalSections: [
        {
          title: "Seni Batik & Songket",
          desc: "Kehalusan seni tenunan dan lukisan kain yang melambangkan identiti dan estetika tinggi bangsa Melayu.",
        },
        {
          title: "Kesenian Tradisional",
          desc: "Dari Tarian Zapin yang rancak hingga alunan Gamelan yang merdu, warisan seni persembahan kami terus hidup.",
        },
        {
          title: "Gastronomi Inderaloka",
          desc: "Rasai kepelbagaian rasa yang unik, gabungan rempah-ratus tradisi yang menambat selera dunia.",
        },
      ],
      cards: [
        {
          title: "Mercu Tanda Ikonik",
          desc: "Dari Menara Indera yang menjulang tinggi ke jambatan bersejarah yang menghubungkan masa lalu dan masa depan.",
          image:
            "https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Keajaiban Alam",
          desc: "Hutan hujan tropika yang belum diterokai, pantai yang memutih, dan kepelbagaian bio yang menakjubkan.",
          image:
            "https://images.unsplash.com/photo-1506929197327-0bb074513797?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Warisan Budaya",
          desc: "Saksikan persembahan tradisional, tarian kebudayaan, dan kraf tangan yang diwarisi turun-temurun.",
          image:
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Syurga Makanan",
          desc: "Nikmati kelazatan Nasi Lemak Indera, Satay, dan kepelbagaian hidangan jalanan yang mengiurkan.",
          image:
            "https://images.unsplash.com/photo-1562607349-590ca2f99fc3?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Busana Tradisional",
          desc: "Keanggunan Baju Kurung dan Baju Melayu yang melambangkan identiti dan kesantunan bangsa Inderaloka.",
          image:
            "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Perayaan & Festival",
          desc: "Kepelbagaian sambutan perayaan yang meriah, menggambarkan keharmonian dan perpaduan rakyat.",
          image:
            "https://images.unsplash.com/photo-1533282960533-51328aa49826?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },

    // Royal Institution
    royal: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Institusi Diraja",
      landing: {
        banner:
          "Duli Yang Maha Mulia Seri Paduka Baginda Yang di-Pertuan Agong",
        pageTitle: "Institusi Diraja Inderaloka",
        pageDesc:
          "Majlis Diraja merupakan nadi pemerintahan berperlembagaan Inderaloka — simbol perpaduan, warisan agung, dan kedaulatan negara yang tidak boleh dipersoalkan.",
        subpages: [
          {
            href: "/royal/his-majesty",
            title: "Kebawah Duli Yang Maha Mulia",
            desc: "Profil rasmi Yang di-Pertuan Agong XVI Inderaloka.",
          },
          {
            href: "/royal/council-of-regency",
            title: "Majlis Pemangku Raja",
            desc: "Badan yang memerintah semasa ketiadaan Yang di-Pertuan Agong.",
          },
          {
            href: "/royal/royal-family",
            title: "Keluarga Diraja",
            desc: "Ahli-ahli keluarga Diraja dan peranan mereka dalam kehidupan negara.",
          },
          {
            href: "/royal/orders-and-decorations",
            title: "Darjah Kebesaran & Bintang",
            desc: "Penghargaan diraja tertinggi yang dianugerahkan kepada tokoh-tokoh negara.",
          },
          {
            href: "/royal/terasul",
            title: "Terasul & Adat Diraja",
            desc: "Sistem rujukan kehormat dan panduan protokol gelaran istana Inderaloka.",
          },
          {
            href: "/royal/regalia",
            title: "Alat Kebesaran Diraja",
            desc: "Warisan gilang-gemilang alat-alat kebesaran yang melambangkan kedaulatan Sultan.",
          },
          {
            href: "/royal/royal-statement",
            title: "Titah Diraja",
            desc: "Titah dan kenyataan rasmi Kebawah Duli Yang Maha Mulia kepada rakyat.",
          },
          {
            href: "/royal/palaces",
            title: "Istana Diraja",
            desc: "Kediaman rasmi dan istana-istana bersejarah Yang di-Pertuan Agong.",
          },
          {
            href: "/royal/royal-advisory-council",
            title: "Majlis Penasihat Diraja",
            desc: "Badan penasihat tertinggi kepada Yang di-Pertuan Agong dalam hal ehwal dasar negara.",
          },
          {
            href: "/royal/palace-courtiers",
            title: "Pegawai Istana",
            desc: "Pegawai-pegawai khas berkhidmat di istana dalam menguruskan protokol dan adat diraja.",
          },
        ],
      },
      hisMajesty: {
        breadcrumbCurrent: "Kebawah Duli Yang Maha Mulia",
        pageTitle:
          "Kebawah Duli Yang Maha Mulia Seri Paduka Baginda Yang di-Pertuan Agong XVI",
        pageDesc: "Tuanku Ibrahim Al-Amin Ibni Al-Marhum Sultan Mahmud Shah",
        portraitLabel: "Potret Rasmi\nKebawah Duli",
        officialTitleLabel: "Gelaran Rasmi",
        officialTitle:
          "Seri Paduka Baginda Yang di-Pertuan Agong XVI Inderaloka",
        bornLabel: "Tarikh Lahir",
        born: "15 Januari 1970",
        accessionLabel: "Tarikh Ditabal",
        accession: "31 Januari 2024",
        educationLabel: "Pendidikan",
        education:
          "Royal Military College, Inderaloka; Royal Military Academy Sandhurst, United Kingdom; University of Oxford (Falsafah, Politik & Ekonomi)",
        mottoLabel: "Motto Diraja",
        motto: "Bertanggungjawab, Bertaqwa, Bertekad",
        roleTitle: "Peranan Perlembagaan",
        roleBody:
          "Yang di-Pertuan Agong merupakan Ketua Utama Negara dan Pemerintah Tertinggi Angkatan Tentera Inderaloka. Baginda bertindak mengikut nasihat Jemaah Menteri dalam menjalankan fungsi eksekutif. Antara kuasa perlembagaan Baginda termasuk melantik Perdana Menteri, memperkenankan rang undang-undang yang diluluskan Parlimen, mengisytiharkan darurat, dan menjadi Ketua Agama Islam bagi Wilayah Persekutuan.",
        dutiesTitle: "Tugas-Tugas Diraja",
        duties: [
          "Memperkenankan perlantikan Perdana Menteri dan ahli Jemaah Menteri",
          "Membuka setiap penggal Parlimen dengan Titah Diraja",
          "Memperkenankan rang undang-undang yang diluluskan oleh Parlimen",
          "Menjadi Ketua Agama Islam bagi Wilayah Persekutuan",
          "Menerima surat tauliah duta-duta negara asing",
          "Menganugerahkan darjah kebesaran dan pingat pada Hari Keputeraan",
          "Memberi pengampunan dan menangguhkan hukuman",
        ],
        timelineTitle: "Garis Masa Sejarah Yang di-Pertuan Agong",
        biographyLabel: "Biografi",
        achievementsLabel: "Pencapaian Negeri",
        consortLabel: "Raja Permaisuri",
        reignLabel: "Tempoh Pemerintahan",
        standardLabel: "Panji Diraja",
        formerMonarchs: [
          {
            order: "XV",
            name: "Tuanku Muhammad Al-Sultan",
            reign: "2019 – 2024",
            portrait: "Portrait XV",
            standard: "Panji Diraja XV",
            bio: "Pemerintahan Baginda ditandai dengan kestabilan politik dan pemulihan ekonomi pasca-pandemik. Baginda sangat aktif dalam mempromosikan keharmonian antara kaum dan integrasi nasional.",
            achievements: [
              "Pelan Pemulihan Ekonomi Nasional",
              "Pemerkasaan Perlembagaan Digital",
            ],
            consort: "Sultanah Nurul Ain",
            heir: "Tengku Hassanal",
            events: ["Ekspo Dunia 2020", "Sambutan Hari Kebangsaan Ke-65"],
            honours: ["D.K.", "D.M.N.", "S.M.N.", "S.S.M.P."],
          },
          {
            order: "XIV",
            name: "Tuanku Abdul Rahman II",
            reign: "2014 – 2019",
            portrait: "Portrait XIV",
            standard: "Panji Diraja XIV",
            bio: "Seorang cendekiawan dan penaung seni, Baginda menerajui transformasi kebudayaan Inderaloka di peringkat antarabangsa.",
            achievements: [
              "Penubuhan Arkib Warisan Negara",
              "Inisiatif Pendidikan Global",
            ],
            consort: "Sultanah Haminah",
            heir: "Tengku Ahmad",
            events: [
              "Tahun Melawat Inderaloka 2014",
              "Persidangan Kemuncak ASEAN 2017",
            ],
            honours: ["D.K.", "D.K.M.", "D.M.N.", "P.S.M."],
          },
        ],
      },
      councilOfRegency: {
        breadcrumbCurrent: "Majlis Pemangku Raja",
        pageTitle: "Majlis Pemangku Raja",
        pageDesc:
          "Badan perlembagaan yang memerintah bagi pihak Yang di-Pertuan Agong semasa ketiadaan atau ketidakupayaan sementara Baginda.",
        overviewTitle: "Fungsi dan Kuasa Majlis",
        overviewBody:
          "Majlis Pemangku Raja diwujudkan di bawah Perkara 40 Perlembagaan Inderaloka. Majlis ini memerintah apabila Yang di-Pertuan Agong mangkat, berasa tidak upaya menjalankan tugas, atau tidak berada di dalam negara melebihi 15 hari tanpa meninggalkan Pemangku Raja yang dilantik. Semua kuasa Yang di-Pertuan Agong boleh dilaksanakan oleh Majlis semasa tempoh tersebut.",
        basisLabel: "Asas Perlembagaan",
        basis:
          "Perkara 40 dan Jadual Keempat, Perlembagaan Persekutuan Inderaloka",
        membersTitle: "Ahli-Ahli Majlis",
        members: [
          {
            name: "Tuanku Ahmad Faizal",
            title: "Yang di-Pertua Majlis Pemangku Raja",
            role: "Pengerusi",
          },
          {
            name: "Tuanku Faizul Hakim",
            title: "Raja Muda Inderaloka",
            role: "Ahli",
          },
          {
            name: "YAB Dato' Sri Haji Anwar Ibrahim",
            title: "Perdana Menteri Inderaloka",
            role: "Ahli",
          },
        ],
        whenTitle: "Bila Majlis Bersidang",
        whenItems: [
          "Semasa Yang di-Pertuan Agong mangkat sehingga Raja baru ditabal",
          "Apabila Yang di-Pertuan Agong tidak upaya menjalankan tugas",
          "Apabila Yang di-Pertuan Agong berada di luar negara melebihi 15 hari",
        ],
      },
      royalFamily: {
        breadcrumbCurrent: "Keluarga Diraja",
        pageTitle: "Keluarga Diraja Inderaloka",
        pageDesc:
          "Ahli-ahli keluarga Diraja yang memainkan peranan penting dalam kehidupan awam, kebajikan, dan adat istiadat negara.",
        members: [
          {
            role: "Yang di-Pertuan Agong",
            name: "Tuanku Ibrahim Al-Amin",
            title: "Yang di-Pertuan Agong XVI",
            desc: "Ketua Utama Negara dan pemegang amanah tertinggi perlembagaan Inderaloka.",
          },
          {
            role: "Raja Permaisuri Agong",
            name: "Tunku Azizah Aminah Maimunah",
            title: "Raja Permaisuri Agong",
            desc: "Terlibat aktif dalam kerja-kerja kebajikan, pendidikan wanita, dan pembangunan komuniti.",
          },
          {
            role: "Putera Mahkota",
            name: "Tuanku Ismail Idris",
            title: "Raja Muda Inderaloka",
            desc: "Pewaris takhta yang menjalani latihan kepimpinan di dalam dan luar negara.",
          },
          {
            role: "Tengku Puteri",
            name: "Tengku Puteri Indah",
            title: "Tengku Puteri",
            desc: "Terlibat aktif dalam program pembangunan belia, seni budaya, dan keusahawanan sosial.",
          },
          {
            role: "Tengku Putera",
            name: "Tengku Putera Azim",
            title: "Tengku Putera",
            desc: "Berkhidmat sebagai pegawai kanan dalam Angkatan Tentera Inderaloka.",
          },
          {
            role: "Raja Ibu Suri",
            name: "Tunku Embong Fatimah",
            title: "Raja Ibu Suri",
            desc: "Ibu suri yang dihormati, aktif dalam kerja-kerja amal dan pembangunan wanita.",
          },
        ],
        detailedMembers: [
          {
            name: "Tuanku Ibrahim Al-Amin",
            title:
              "Duli Yang Maha Mulia Seri Paduka Baginda Yang di-Pertuan Agong XVI",
            role: "Ketua Utama Negara",
            portrait: "Portrait Ibrahim",
            bio: "Ditabalkan pada 2024, Tuanku Ibrahim merupakan simbol perpaduan dan kedaulatan. Baginda mempunyai latar belakang ketenteraan yang luas dan pendidikan dalam bidang ekonomi politik dari United Kingdom.",
            education:
              "Royal Military Academy Sandhurst, UK; University of Oxford (PPE)",
            military: "Fil Marsyal Angkatan Tentera Inderaloka",
            patronages: [
              "Yayasan Kebajikan Inderaloka",
              "Majlis Kesenian Diraja",
            ],
            duties: [
              "Membuka sidang Parlimen",
              "Ketua Agama Islam",
              "Pemerintah Tertinggi Angkatan Tentera",
            ],
            honours: ["D.K.", "D.M.N.", "S.M.N.", "S.P.M.J."],
          },
          {
            name: "Tunku Azizah Aminah Maimunah",
            title:
              "Kebawah Duli Yang Maha Mulia Seri Paduka Baginda Raja Permaisuri Agong",
            role: "Raja Permaisuri",
            portrait: "Portrait Azizah",
            bio: "Dikenali dengan usaha gigih Baginda dalam mempromosikan kraftangan tradisional dan seni kulinari Inderaloka di persada dunia.",
            education: "Universiti Kebangsaan Inderaloka (Sastera)",
            military: "Kolonel Yang Dipertua Kor Perkhidmatan Diraja",
            patronages: [
              "Persatuan Pandu Puteri",
              "Yayasan Kesuburan Inderaloka",
            ],
            duties: [
              "Penaung aktiviti kebajikan negara",
              "Mewakili negara dalam forum kemanusiaan",
            ],
            honours: ["D.K.", "D.M.N.", "S.S.A.P."],
          },
        ],
        householdDirectoryTitle: "Direktori Isi Rumah Diraja",
        householdDirectory: [
          {
            office: "Pejabat Setiausaha Sulit",
            head: "Dato' Sri Mohd Zakri",
            contact: "+603-2384 1100",
          },
          {
            office: "Jabatan Protokol Istana",
            head: "Dato' Haji Abdullah",
            contact: "+603-2384 1200",
          },
          {
            office: "Bahagian Agama",
            head: "Datuk Dr. Ahmad Azam",
            contact: "+603-2384 1300",
          },
        ],
        lineOfSuccessionTitle: "Turutan Takhta",
        successionList: [
          {
            position: "1",
            name: "Tuanku Ismail Idris",
            title: "Raja Muda Inderaloka",
          },
          { position: "2", name: "Tengku Putera Azim", title: "Tengku Putera" },
          {
            position: "3",
            name: "Tengku Putera Shah",
            title: "Tengku Aris Bendahara",
          },
        ],
      },
      orders: {
        breadcrumbCurrent: "Darjah Kebesaran & Bintang",
        pageTitle: "Panduan Darjah Kebesaran, Bintang dan Pingat",
        pageDesc:
          "Panduan rasmi susunan, taraf, syarat penganugerahan, gelaran, dan pemakaian darjah kebesaran, bintang kehormatan, pingat dan tauliah Negara Inderaloka.",
        intro:
          "Segala kurniaan adalah tertakluk kepada titah perkenan Kebawah Duli Yang Maha Mulia Paduka Seri Baginda Sultan Inderaloka, adat istiadat negara, Undang-Undang Tubuh Kerajaan Inderaloka dan peraturan yang berkuat kuasa.",
        purposeTitle: "1. Tujuan",
        purposeBody:
          "Panduan ini menetapkan susunan, taraf, syarat penganugerahan, gelaran, singkatan, pemakaian dan ketetapan am bagi darjah kebesaran, bintang kehormatan, pingat dan tauliah Negara Inderaloka.",
        generalProvisionsTitle: "2. Ketetapan Am",
        generalProvisions: [
          {
            title: "2.1 Kuasa Kurniaan",
            desc: "Segala darjah kebesaran, bintang kehormatan, pingat dan tauliah Negara Inderaloka dikurniakan atas titah perkenan Kebawah Duli Yang Maha Mulia Paduka Seri Baginda Sultan Inderaloka.\n\nPenganugerahan boleh dibuat sempena Hari Keputeraan Sultan, istiadat kebesaran negara, pertabalan, jubli pemerintahan, upacara khas negara atau pada bila-bila masa yang diperkenankan oleh Sultan.",
          },
          {
            title: "2.2 Pelucutan, Pembatalan dan Penggantungan",
            desc: "Sesuatu darjah kebesaran, bintang kehormatan, pingat atau tauliah boleh dilucutkan, dibatalkan atau digantung atas titah perkenan Sultan apabila penerima:\n1. menderhaka kepada Takhta;\n2. disabitkan atas kesalahan jenayah berat;\n3. melanggar sumpah taat setia;\n4. melakukan perbuatan yang menjejaskan martabat kurniaan; atau\n5. melakukan apa-apa perbuatan yang pada hemat Sultan tidak selaras dengan kehormatan kurniaan berkenaan.",
          },
          {
            title: "2.3 Penganugerahan Anumerta",
            desc: "Sesuatu darjah kebesaran, bintang kehormatan atau pingat boleh dikurniakan secara anumerta kepada seseorang yang telah mangkat atau meninggal dunia sekiranya jasa, pengorbanan atau khidmat baktinya kepada Raja dan Negara dinilai luar biasa dan wajar diabadikan dalam rekod kehormatan negara.",
          },
          {
            title: "2.4 Gelaran Pasangan",
            desc: "Isteri kepada penerima lelaki yang dikurniakan gelaran tertentu boleh menggunakan gelaran pasangan sebagaimana yang ditetapkan bagi darjah berkenaan. Suami kepada penerima wanita tidak membawa gelaran pasangan.",
          },
          {
            title: "2.5 Susunan Pemakaian",
            desc: "Pemakaian darjah kebesaran, bintang kehormatan dan pingat hendaklah mengikut susunan keutamaan yang ditetapkan dalam panduan ini atau mana-mana peraturan pemakaian yang diperkenankan oleh Sultan.",
          },
        ],
        parts: [
          {
            id: "part1",
            title: "BAHAGIAN I: BINTANG KEHORMATAN TERTINGGI",
            items: [
              {
                name: "3. Bintang Mahkota Pejuang Pertiwi (B.M.P.P.)",
                status: "Anugerah Keberanian Tertinggi",
                desc: "Dikurniakan kepada individu yang telah mempamerkan keberanian luar biasa, kepahlawanan terbilang atau pengorbanan diri yang tertinggi demi mempertahankan nyawa rakyat, maruah negara, kedaulatan Takhta dan keselamatan Negara Inderaloka.",
                details: [
                  { label: "Gelaran", value: "Pejuang Pertiwi [Nama]" },
                  {
                    label: "Reben",
                    value:
                      "Merah Darah dengan jalur tegak Hitam di bahagian tengah",
                  },
                  {
                    label: "Elaun",
                    value:
                      "₭10,000 sebulan (Hidup) / ₭100,000 sekali gus (Waris Anumerta)",
                  },
                ],
              },
            ],
          },
          {
            id: "part2",
            title: "BAHAGIAN II: DARJAH KERABAT",
            items: [
              {
                name: "4. Darjah Kerabat Inderaloka Yang Agung",
                status: "Darjah Kerabat Tertinggi",
                desc: "Sultan Inderaloka ialah Penaung Darjah dan pemegang kuasa tertinggi bagi segala pengurniaan darjah ini.",
                ranks: [
                  {
                    name: "Pangkat Pertama (D.K. I)",
                    eligible:
                      "Sultan, Permaisuri, Tunku Mahkota, Waris Damping dan Pasangan",
                    title: "Tiada Gelaran",
                  },
                  {
                    name: "Pangkat Kedua (D.K. II)",
                    eligible:
                      "Kerabat Diraja Inderaloka, Raja-raja Pemerintah asing, dan kerabat diraja asing",
                    title: "Tiada Gelaran",
                  },
                ],
              },
            ],
          },
          {
            id: "part3",
            title: "BAHAGIAN III: DARJAH KEBESARAN AWAM",
            items: [
              {
                name: "5. Darjah Cendera Alam Yang Terulung",
                status: "Darjah Kebesaran Awam Tertinggi",
                desc: "Dikurniakan kepada negarawan, pembesar negara, tokoh perundangan, tokoh perkhidmatan awam, tokoh ilmu, tokoh ekonomi atau individu yang telah mencurahkan khidmat bakti luar biasa.",
                ribbon:
                  "Putih Gading dengan jalur tengah Kuning Diraja dan jalur tepi Merah Darah",
                ranks: [
                  {
                    name: "Seri Maharaja Cendera Alam (S.M.C.A.)",
                    title: "Tun (Isteri: Toh Puan)",
                    limit: "25 orang",
                  },
                  {
                    name: "Panglima Seri Cendera Alam (P.S.C.A.)",
                    title: "Tan Sri (Isteri: Puan Sri)",
                    limit: "75 orang",
                  },
                ],
              },
              {
                name: "6. Darjah Cura Si Gilang Sari Yang Maha Utama",
                status: "Darjah Kebesaran Awam Utama",
                desc: "Dikurniakan kepada tokoh yang mencapai kecemerlangan tinggi dalam bidang masing-masing dan mengharumkan nama negara.",
                ribbon: "Kuning Diraja dengan jalur tengah Merah Darah",
                ranks: [
                  {
                    name: "Seri Utama Cura Si Gilang Sari (S.C.G.S.)",
                    title: "Dato’ Seri Utama (Isteri: Datin Seri Utama)",
                    limit: "35 orang",
                  },
                  {
                    name: "Panglima Cura Si Gilang Sari (P.C.G.S.)",
                    title: "Dato’ Utama (Isteri: Datin Utama)",
                    limit: "75 orang",
                  },
                  {
                    name: "Ahli Cura Si Gilang Sari (A.C.G.S.)",
                    title: "Tiada Gelaran",
                    limit: "Tiada Had",
                  },
                ],
              },
              {
                name: "7. Darjah Setia Mangku Negara Yang Amat Terpuji",
                status: "Pengiktirafan Perkhidmatan Awam Utama",
                desc: "Dikurniakan sebagai pengiktirafan utama kepada perkhidmatan awam negara, tokoh pentadbiran, tokoh masyarakat, dan pemimpin korporat.",
                ribbon: "Biru Tua dengan jalur tepi Kuning",
                ranks: [
                  {
                    name: "Seri Setia Mangku Negara (S.S.M.N.)",
                    title: "Dato’ Seri Setia (Isteri: Datin Seri Setia)",
                    limit: "150 orang",
                  },
                  {
                    name: "Panglima Setia Mangku Negara (P.S.M.N.)",
                    title: "Dato’ Setia (Isteri: Datin Setia)",
                    limit: "200 orang",
                  },
                  {
                    name: "Johan Setia Mangku Negara (J.S.M.N.)",
                    title: "Tiada Gelaran",
                    limit: "450 orang",
                  },
                  {
                    name: "Kesatria Setia Mangku Negara (K.S.M.N.)",
                    title: "Tiada Gelaran",
                    limit: "800 orang",
                  },
                  {
                    name: "Ahli Setia Mangku Negara (A.S.M.N.)",
                    title: "Tiada Gelaran",
                    limit: "200 orang setahun",
                  },
                ],
              },
              {
                name: "8. Darjah Bahaduri Paduka Inderawangsa Yang Amat Luhur",
                status: "Anugerah Jasa Masyarakat",
                desc: "Dikurniakan kepada individu yang berjasa dalam memelihara keamanan, perpaduan, kebajikan masyarakat, dan misi kemanusiaan.",
                ribbon: "Ungu Diraja dengan jalur tepi Perak",
                ranks: [
                  {
                    name: "Seri Bahaduri Paduka Inderawangsa (S.B.P.I.)",
                    title: "Dato’ Seri (Isteri: Datin Seri)",
                    limit: "50 orang",
                  },
                  {
                    name: "Panglima Bahaduri Paduka Inderawangsa (P.B.P.I.)",
                    title: "Dato’ (Isteri: Datin)",
                    limit: "150 orang",
                  },
                  {
                    name: "Johan Bahaduri Paduka Inderawangsa (J.B.P.I.)",
                    title: "Tiada Gelaran",
                    limit: "450 orang",
                  },
                  {
                    name: "Ahli Bahaduri Paduka Inderawangsa (A.B.P.I.)",
                    title: "Tiada Gelaran",
                    limit: "200 orang setahun",
                  },
                ],
              },
            ],
          },
          {
            id: "part4",
            title: "BAHAGIAN IV: DARJAH PASUKAN BERUNIFORM",
            items: [
              {
                name: "9. Darjah Pahlawan Angkatan Tentera Inderaloka",
                status: "Anugerah Angkatan Tentera",
                desc: "Dikurniakan kepada pegawai dan anggota Angkatan Tentera Inderaloka sebagai pengiktirafan terhadap kepimpinan, keberanian, dan perkhidmatan cemerlang.",
                ribbon: "Merah Hati dengan jalur tengah Emas",
                ranks: [
                  {
                    name: "Seri Pahlawan Angkatan Tentera (S.P.A.T.)",
                    title: "Dato’ Seri Pahlawan (Isteri: Datin Seri Pahlawan)",
                    limit: "30 orang",
                  },
                  {
                    name: "Pahlawan Angkatan Tentera (P.A.T.)",
                    title: "Dato’ Pahlawan (Isteri: Datin Pahlawan)",
                    limit: "150 orang",
                  },
                  {
                    name: "Hulubalang Angkatan Tentera (H.A.T.)",
                    title: "Tiada Gelaran",
                    limit: "Tiada Had",
                  },
                ],
              },
              {
                name: "10. Darjah Perwira Pasukan Polis Inderaloka",
                status: "Anugerah Pasukan Polis",
                desc: "Dikurniakan kepada pegawai dan anggota Pasukan Polis Inderaloka sebagai pengiktirafan terhadap jasa, keberanian, integriti dan kecemerlangan.",
                ribbon: "Biru Diraja dengan jalur tengah Perak",
                ranks: [
                  {
                    name: "Seri Perwira Pasukan Polis (S.P.P.P.)",
                    title: "Dato’ Seri Wira (Isteri: Datin Seri Wira)",
                    limit: "30 orang",
                  },
                  {
                    name: "Perwira Pasukan Polis (P.P.P.)",
                    title: "Dato’ Wira (Isteri: Datin Wira)",
                    limit: "150 orang",
                  },
                  {
                    name: "Hulubalang Pasukan Polis (H.P.P.)",
                    title: "Tiada Gelaran",
                    limit: "Tiada Had",
                  },
                ],
              },
            ],
          },
          {
            id: "part5",
            title: "BAHAGIAN V: PINGAT KEBERANIAN",
            items: [
              {
                name: "11. Pingat Gagah Perkasa",
                status: "Pingat Keberanian Awam & Beruniform",
                desc: "Dikurniakan kepada individu yang menunjukkan keberanian luar biasa dalam keadaan yang mengancam nyawa.",
                ranks: [
                  {
                    name: "Pingat Gagah Perkasa Emas (P.G.P.E.)",
                    reward: "₭7,000 sebulan / ₭70,000 (Anumerta)",
                  },
                  {
                    name: "Pingat Gagah Perkasa Perak (P.G.P.P.)",
                    reward: "₭5,000 sebulan / ₭50,000 (Anumerta)",
                  },
                  {
                    name: "Pingat Gagah Perkasa Gangsa (P.G.P.G.)",
                    reward: "₭3,000 sebulan / ₭30,000 (Anumerta)",
                  },
                ],
              },
            ],
          },
          {
            id: "part6",
            title: "BAHAGIAN VI: PINGAT PERKHIDMATAN DAN KELAKUAN",
            items: [
              {
                name: "12. Pingat Khidmat Cemerlang (P.K.C.)",
                desc: "Pengiktirafan prestasi kerja cemerlang, dedikasi berterusan dan sumbangan melebihi tuntutan tugas biasa.",
              },
              {
                name: "13. Pingat Jasa Kebaktian (P.J.K.)",
                desc: "Pengiktirafan khidmat bakti yang lama (min. 18 tahun), bersih dan berterusan kepada Raja dan Negara.",
              },
              {
                name: "14. Pingat Budi Teladan (P.B.T.)",
                desc: "Dikurniakan kepada individu yang menunjukkan kelakuan amat terpuji, amanah, berintegriti dan menjadi teladan.",
              },
            ],
          },
          {
            id: "part7",
            title: "BAHAGIAN VII: PINGAT KEMPEN DAN PERINGATAN",
            items: [
              {
                name: "15. Pingat Kedaulatan Wilayah (P.K.W.)",
                desc: "Pingat kempen bagi mengiktiraf perkhidmatan (min. 30 hari) dalam zon operasi mempertahankan kedaulatan sempadan.",
              },
              {
                name: "16. Pingat Laskar Angkatan Inderaloka",
                desc: "Pingat identiti perkhidmatan ATI bagi anggota yang menamatkan latihan asas dan berkhidmat min. 10 tahun.",
                categories: [
                  {
                    label: "Tentera Darat",
                    value: "Pingat Laskar Buana (P.L.B.)",
                  },
                  {
                    label: "Tentera Laut",
                    value: "Pingat Laskar Samudera (P.L.S.)",
                  },
                  {
                    label: "Tentera Udara",
                    value: "Pingat Laskar Jumantara (P.L.J.)",
                  },
                ],
              },
              {
                name: "17. Pingat Pertabalan Sultan Abdul Aziz Shah",
                desc: "Dikurniakan sempena Istiadat Pertabalan KDYMM Sultan Abdul Aziz Shah. Varian: Emas & Perak.",
              },
              {
                name: "18. Pingat Jubli Perak Sultan Abdul Aziz Shah",
                desc: "Dikurniakan sempena genap 25 tahun pemerintahan KDYMM Sultan Abdul Aziz Shah.",
              },
              {
                name: "19. Pingat Pertabalan Sultan Ibrahim Shah",
                desc: "Dikurniakan sempena Istiadat Pertabalan KDYMM Sultan Ibrahim Shah. Varian: Emas & Perak.",
              },
            ],
          },
          {
            id: "part8",
            title: "BAHAGIAN VIII: KEPUJIAN DAN TAULIAH",
            items: [
              {
                name: "20. Kepujian Perbuatan Berani (K.P.B.)",
                desc: "Pengiktirafan rasmi kepada individu yang menunjukkan keberanian tetapi belum mencapai taraf pingat keberanian. Penerima dikurniakan lencana Daun Kijang Emas.",
              },
              {
                name: "21. Jaksa Pendamai (J.P.)",
                desc: "Tauliah kehormat yang memberikan kuasa sivil tertentu bagi membantu urusan perundangan dan kemasyarakatan.",
              },
            ],
          },
        ],
        precedenceTitle: "BAHAGIAN IX: SUSUNAN KEUTAMAAN ANUGERAH INDERALOKA",
        precedenceHeaders: [
          "Bil.",
          "Anugerah / Pangkat",
          "Singkatan",
          "Gelaran",
        ],
        precedenceItems: [
          [
            "1",
            "Bintang Mahkota Pejuang Pertiwi",
            "B.M.P.P.",
            "Pejuang Pertiwi",
          ],
          [
            "2",
            "Darjah Kerabat Inderaloka Yang Agung Pangkat Pertama",
            "D.K. I",
            "-",
          ],
          [
            "3",
            "Darjah Kerabat Inderaloka Yang Agung Pangkat Kedua",
            "D.K. II",
            "-",
          ],
          ["4", "Seri Maharaja Cendera Alam", "S.M.C.A.", "Tun"],
          ["5", "Panglima Seri Cendera Alam", "P.S.C.A.", "Tan Sri"],
          [
            "6",
            "Seri Utama Cura Si Gilang Sari",
            "S.C.G.S.",
            "Dato’ Seri Utama",
          ],
          ["7", "Seri Setia Mangku Negara", "S.S.M.N.", "Dato’ Seri Setia"],
          ["8", "Seri Bahaduri Paduka Inderawangsa", "S.B.P.I.", "Dato’ Seri"],
          [
            "9",
            "Seri Pahlawan Angkatan Tentera",
            "S.P.A.T.",
            "Dato’ Seri Pahlawan",
          ],
          ["10", "Seri Perwira Pasukan Polis", "S.P.P.P.", "Dato’ Seri Wira"],
          ["11", "Panglima Cura Si Gilang Sari", "P.C.G.S.", "Dato’ Utama"],
          ["12", "Panglima Setia Mangku Negara", "P.S.M.N.", "Dato’ Setia"],
          ["13", "Panglima Bahaduri Paduka Inderawangsa", "P.B.P.I.", "Dato’"],
          ["14", "Pahlawan Angkatan Tentera", "P.A.T.", "Dato’ Pahlawan"],
          ["15", "Perwira Pasukan Polis", "P.P.P.", "Dato’ Wira"],
          ["16", "Pingat Gagah Perkasa Emas", "P.G.P.E.", "-"],
          ["17", "Pingat Gagah Perkasa Perak", "P.G.P.P.", "-"],
          ["18", "Pingat Gagah Perkasa Gangsa", "P.G.P.G.", "-"],
          ["19", "Ahli Cura Si Gilang Sari", "A.C.G.S.", "-"],
          ["20", "Johan Setia Mangku Negara", "J.S.M.N.", "-"],
          ["21", "Johan Bahaduri Paduka Inderawangsa", "J.B.P.I.", "-"],
          ["22", "Hulubalang Angkatan Tentera", "H.A.T.", "-"],
          ["23", "Hulubalang Pasukan Polis", "H.P.P.", "-"],
          ["24", "Kesatria Setia Mangku Negara", "K.S.M.N.", "-"],
          ["25", "Ahli Setia Mangku Negara", "A.S.M.N.", "-"],
          ["26", "Ahli Bahaduri Paduka Inderawangsa", "A.B.P.I.", "-"],
          ["27", "Pingat Budi Teladan", "P.B.T.", "-"],
          ["28", "Pingat Khidmat Cemerlang", "P.K.C.", "-"],
          ["29", "Pingat Jasa Kebaktian", "P.J.K.", "-"],
          ["30", "Pingat Kedaulatan Wilayah", "P.K.W.", "-"],
          ["31", "Pingat Laskar Buana", "P.L.B.", "-"],
          ["32", "Pingat Laskar Samudera", "P.L.S.", "-"],
          ["33", "Pingat Laskar Jumantara", "P.L.J.", "-"],
          ["34", "Kepujian Perbuatan Berani", "K.P.B.", "-"],
          ["35", "Jaksa Pendamai", "J.P.", "-"],
          ["36", "Pingat Pertabalan Sultan Abdul Aziz Shah", "-", "-"],
          ["37", "Pingat Jubli Perak Sultan Abdul Aziz Shah", "-", "-"],
          ["38", "Pingat Pertabalan Sultan Ibrahim Shah", "-", "-"],
        ],
        footerNote:
          "Bagi darjah yang membawa gelaran kepada penerima lelaki, gelaran pasangan bagi isteri penerima lelaki adalah sebagaimana yang ditetapkan dalam bahagian darjah masing-masing.",
        closing:
          "Panduan ini hendaklah menjadi rujukan rasmi bagi penamaan, penganugerahan, pemakaian dan susunan keutamaan darjah kebesaran, bintang kehormatan, pingat dan tauliah Negara Inderaloka. Sebarang pindaan, tambahan atau pelucutan yang berkaitan dengan kurniaan dalam panduan ini hendaklah dibuat atas titah perkenan Sultan Inderaloka.",
      },
      terasul: {
        breadcrumbCurrent: "Terasul & Adat Diraja",
        pageTitle: "Terasul & Adat Istiadat Diraja",
        pageDesc:
          "Sistem rujukan kehormat dan rujukan protokol gelaran istana yang dijaga sejak berabad lamanya.",
        terasulTitle: "Panduan Terasul Diraja Inderaloka",
        terasulSections: [
          {
            id: "PART I",
            title: "SULTAN DAN PASANGAN SULTAN",
            isPartHeader: true,
          },
          {
            id: 1,
            title: "Tujuan",
            content:
              "Panduan ini menetapkan penggunaan terasul bagi Sultan Inderaloka, Permaisuri, Sultanah, Pemangku Sultan, pewaris takhta, Waris Damping, kerabat diraja, pasangan kerabat diraja serta keturunan Sultan menurut adat Istana Diraja Inderaloka.\n\nPenggunaan terasul dalam panduan ini hendaklah terpakai dalam urusan rasmi kerajaan, istiadat diraja, surat-menyurat rasmi, warkah, jemputan istiadat, kenyataan istana, persidangan rasmi dan majlis kebesaran negara.\n\nSegala ketetapan adalah tertakluk kepada adat Istana Diraja Inderaloka, Undang-Undang Tubuh Kerajaan Inderaloka dan titah perkenan Sultan Inderaloka.",
          },
          {
            id: 2,
            title: "Takrif",
            content:
              "Dalam panduan ini, terasul bermaksud susunan rasmi rujukan kehormat dan gelaran yang digunakan dalam sebutan, persuratan dan istiadat.\n\nGelaran taraf keturunan bermaksud gelaran yang menunjukkan kedudukan seseorang dalam susur galur keturunan Sultan, iaitu Tunku Besar, Tunku Muda, Tunku Kechil dan Tunku.\n\nGelaran kedudukan bermaksud gelaran yang disandang kerana jawatan, kedudukan istiadat atau tempat dalam susunan pewarisan takhta, seperti Tunku Mahkota, Tunku Utama dan gelaran Waris Damping.",
          },
          {
            id: 3,
            title: "Prinsip Susunan Nama Kerabat Diraja",
            content:
              "Bagi kerabat diraja yang menyandang gelaran kedudukan, terasul hendaklah disusun dengan mendahulukan gelaran kedudukan, diikuti gelaran taraf keturunan dan nama diri.\n\nBentuk susunan rasmi adalah seperti berikut:\n[Gelaran Kedudukan] [Gelaran Taraf Keturunan] [Nama]",
          },
          {
            id: 4,
            title: "Sultan Yang Memerintah",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                [
                  "Rujukan kehormat",
                  "Kebawah Duli Yang Maha Mulia Paduka Seri Baginda",
                ],
                ["Gelaran", "Sultan [Nama]"],
                [
                  "Terasul penuh",
                  "Kebawah Duli Yang Maha Mulia Paduka Seri Baginda Sultan [Nama], Sultan dan Yang di-Pertuan bagi Negara Inderaloka serta Sekalian Jajahan Naungannya",
                ],
              ],
            },
          },
          {
            id: 5,
            title: "Raja Permaisuri",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                [
                  "Rujukan kehormat",
                  "Kebawah Duli Yang Maha Mulia Paduka Seri Baginda",
                ],
                ["Gelaran", "Raja Permaisuri [Gelaran Asal] [Nama]"],
                [
                  "Terasul penuh",
                  "Kebawah Duli Yang Maha Mulia Paduka Seri Baginda Raja Permaisuri [Gelaran Asal] [Nama]",
                ],
              ],
            },
            footer:
              "Raja Permaisuri ialah isteri utama Sultan yang berasal daripada kerabat diraja.",
          },
          {
            id: 6,
            title: "Sultanah",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Kebawah Duli Yang Maha Mulia"],
                ["Gelaran", "Sultanah [Nama]"],
                [
                  "Terasul penuh",
                  "Kebawah Duli Yang Maha Mulia Sultanah [Nama]",
                ],
              ],
            },
            footer:
              "Sultanah ialah isteri utama Sultan yang berasal daripada orang kebanyakan.",
          },
          {
            id: 7,
            title: "Isteri Kedua Sultan Yang Memerintah",
            subTable: {
              title: "7.1 Jika Berasal daripada Kerabat Diraja",
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Teramat Mulia Paduka Seri"],
                ["Gelaran", "Tunku Puan Suri [Gelaran Asal] [Nama]"],
                [
                  "Terasul penuh",
                  "Yang Teramat Mulia Paduka Seri Tunku Puan Suri [Gelaran Asal] [Nama]",
                ],
              ],
            },
            additionalInfo:
              "7.2 Jika Berasal daripada Orang Kebanyakan\n\nRujukan kehormat: Yang Teramat Mulia\nGelaran: Che Puan Suri [Nama]\nTerasul penuh: Yang Teramat Mulia Che Puan Suri [Nama]",
          },
          {
            id: "PART II",
            title: "PEMANGKUAN, TURUN TAKHTA, KEMANGKATAN DAN BALU",
            isPartHeader: true,
          },
          {
            id: 8,
            title: "Pemangku Sultan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Kebawah Duli Paduka Baginda"],
                ["Gelaran", "Pemangku Sultan [Gelaran Taraf Keturunan] [Nama]"],
                [
                  "Terasul penuh",
                  "Kebawah Duli Paduka Baginda Pemangku Sultan [Gelaran Penuh] [Nama]",
                ],
              ],
            },
            footer:
              "Pemangku Sultan hendaklah seorang kerabat lelaki. Jika Tunku Mahkota tidak dapat memangku, keutamaan diberikan kepada Waris Damping menurut susunan yang ditetapkan oleh Undang-Undang Tubuh Kerajaan Inderaloka.",
          },
          {
            id: 9,
            title: "Sultan Yang Telah Turun Takhta",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Maha Mulia Paduka Seri"],
                ["Gelaran", "Sultan Begawan [Nama]"],
                [
                  "Terasul penuh",
                  "Duli Yang Maha Mulia Paduka Seri Sultan Begawan [Nama]",
                ],
              ],
            },
          },
          {
            id: 10,
            title: "Isteri Utama Sultan Yang Telah Turun Takhta",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Maha Mulia Paduka Seri"],
                ["Gelaran", "Permaisuri Begawan [Nama]"],
                [
                  "Terasul penuh",
                  "Duli Yang Maha Mulia Paduka Seri Permaisuri Begawan [Nama]",
                ],
              ],
            },
          },
          {
            id: 11,
            title: "Isteri Kedua Sultan Yang Telah Turun Takhta",
            subTable: {
              title: "11.1 Jika Berasal daripada Kerabat Diraja",
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Amat Mulia Paduka Seri"],
                ["Gelaran", "Tunku Puan Begawan [Gelaran Asal] [Nama]"],
                [
                  "Terasul penuh",
                  "Yang Amat Mulia Paduka Seri Tunku Puan Begawan [Gelaran Asal] [Nama]",
                ],
              ],
            },
            additionalInfo:
              "11.2 Jika Berasal daripada Orang Kebanyakan\n\nRujukan kehormat: Yang Amat Mulia\nGelaran: Che Puan Begawan [Nama]\nTerasul penuh: Yang Amat Mulia Che Puan Begawan [Nama]",
          },
          {
            id: 12,
            title: "Sultan Yang Telah Mangkat",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Maha Mulia"],
                ["Gelaran", "al-Marhum Sultan [Nama]"],
                [
                  "Terasul penuh",
                  "Duli Yang Maha Mulia al-Marhum Sultan [Nama]",
                ],
              ],
            },
          },
          {
            id: 13,
            title: "Permaisuri Balu",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Maha Mulia"],
                ["Gelaran", "Permaisuri Balu [Nama]"],
                [
                  "Terasul penuh",
                  "Duli Yang Maha Mulia Permaisuri Balu [Nama]",
                ],
              ],
            },
            footer:
              "Permaisuri Balu ialah gelaran bagi balu Sultan yang sebelumnya bergelar Raja Permaisuri.",
          },
          {
            id: 14,
            title: "Raja Perempuan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Maha Mulia"],
                ["Gelaran", "Raja Perempuan [Nama]"],
                ["Terasul penuh", "Duli Yang Maha Mulia Raja Perempuan [Nama]"],
              ],
            },
            footer:
              "Raja Perempuan ialah gelaran yang dikurniakan kepada Raja Permaisuri yang lebih kanan apabila terdapat Raja Permaisuri baharu dalam pemerintahan Sultan semasa.",
          },
          {
            id: 15,
            title: "Sultanah Balu",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Maha Mulia"],
                ["Gelaran", "Sultanah Balu [Nama]"],
                ["Terasul penuh", "Yang Maha Mulia Sultanah Balu [Nama]"],
              ],
            },
            footer:
              "Sultanah Balu ialah gelaran bagi balu Sultan yang sebelumnya bergelar Sultanah.",
          },
          {
            id: 16,
            title: "Che Puan Balu",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Mulia"],
                ["Gelaran", "Che Puan Balu [Nama]"],
                ["Terasul penuh", "Yang Mulia Che Puan Balu [Nama]"],
              ],
            },
            footer:
              "Che Puan Balu ialah gelaran bagi balu Sultan yang berasal daripada orang kebanyakan, sebelumnya bergelar Che Puan Suri.",
          },
          {
            id: "PART III",
            title: "PEWARIS TAKHTA",
            isPartHeader: true,
          },
          {
            id: 17,
            title: "Tunku Mahkota",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                [
                  "Rujukan kehormat",
                  "Kebawah Duli Yang Teramat Mulia Paduka Seri",
                ],
                ["Gelaran", "Tunku Mahkota [Gelaran Taraf Keturunan] [Nama]"],
                [
                  "Terasul penuh",
                  "Kebawah Duli Yang Teramat Mulia Paduka Seri Tunku Mahkota [Gelaran Taraf Keturunan] [Nama]",
                ],
              ],
            },
            footer:
              "Bentuk lazim:\nKebawah Duli Yang Teramat Mulia Paduka Seri Tunku Mahkota Tunku Besar [Nama]",
          },
          {
            id: 18,
            title: "Isteri Tunku Mahkota",
            subTable: {
              title: "18.1 Jika Berasal daripada Kerabat Diraja",
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                [
                  "Rujukan kehormat",
                  "Kebawah Duli Yang Teramat Mulia Paduka Seri",
                ],
                ["Gelaran", "Tunku Ampuan Mahkota [Gelaran Asal] [Nama]"],
                [
                  "Terasul penuh",
                  "Kebawah Duli Yang Teramat Mulia Paduka Seri Tunku Ampuan Mahkota [Gelaran Asal] [Nama]",
                ],
              ],
            },
            additionalInfo:
              "18.2 Jika Berasal daripada Orang Kebanyakan\n\nRujukan kehormat: Kebawah Duli Yang Teramat Mulia\nGelaran: Che Ampuan Mahkota [Nama]\nTerasul penuh: Kebawah Duli Yang Teramat Mulia Che Ampuan Mahkota [Nama]",
          },
          {
            id: 19,
            title: "Tunku Utama",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Kebawah Duli Paduka Mulia"],
                ["Gelaran", "Tunku Utama [Gelaran Taraf Keturunan] [Nama]"],
                [
                  "Terasul penuh",
                  "Kebawah Duli Paduka Mulia Tunku Utama [Gelaran Taraf Keturunan] [Nama]",
                ],
              ],
            },
            footer:
              "Tunku Utama ialah gelaran bagi putera sulung Tunku Mahkota.\n\nBentuk lazim:\nKebawah Duli Paduka Mulia Tunku Utama Tunku Muda [Nama]",
          },
          {
            id: "PART IV",
            title: "WARIS DAMPING",
            isPartHeader: true,
          },
          {
            id: 20,
            title: "Waris Damping",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Teramat Mulia Paduka Seri"],
                [
                  "Gelaran",
                  "[Gelaran Waris Damping] [Gelaran Taraf Keturunan] [Nama]",
                ],
                [
                  "Terasul penuh",
                  "Duli Yang Teramat Mulia Paduka Seri [Gelaran Waris Damping] [Gelaran Taraf Keturunan] [Nama]",
                ],
              ],
            },
            content:
              "Waris Damping ialah kerabat diraja lelaki yang berada dalam susunan pewarisan takhta selepas Tunku Mahkota dan Tunku Utama, menurut Undang-Undang Tubuh Kerajaan Inderaloka.",
            subTable: {
              title: "20.1 Senarai Waris Damping",
              headers: ["Bil.", "Gelaran Waris Damping"],
              rows: [
                ["1", "Tunku Arif Bendahara"],
                ["2", "Tunku Temenggung Aria Pahlawan"],
                ["3", "Tunku Perdana Di-Gadong"],
                ["4", "Tunku Indera Laksamana"],
                ["5", "Tunku Syahbandar"],
                ["6", "Tunku Panglima Raja"],
              ],
            },
          },
          {
            id: 21,
            title: "Isteri Waris Damping",
            subTable: {
              title: "21.1 Jika Berasal daripada Kerabat Diraja",
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Teramat Mulia Paduka Seri"],
                [
                  "Gelaran",
                  "Tunku Ampuan [Gelaran Waris Damping] [Gelaran Asal] [Nama]",
                ],
                [
                  "Terasul penuh",
                  "Duli Yang Teramat Mulia Paduka Seri Tunku Ampuan [Gelaran Waris Damping] [Gelaran Asal] [Nama]",
                ],
              ],
            },
            additionalInfo:
              "21.2 Jika Berasal daripada Orang Kebanyakan\n\nRujukan kehormat: Duli Yang Teramat Mulia\nGelaran: Che Ampuan [Gelaran Waris Damping] [Nama]\nTerasul penuh: Duli Yang Teramat Mulia Che Ampuan [Gelaran Waris Damping] [Nama]",
          },
          {
            id: "PART V",
            title: "ANAKANDA SULTAN",
            isPartHeader: true,
          },
          {
            id: 22,
            title: "Anakanda Lelaki Sultan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Amat Mulia Paduka Seri"],
                ["Gelaran", "Tunku Besar [Nama]"],
                [
                  "Terasul penuh",
                  "Duli Yang Amat Mulia Paduka Seri Tunku Besar [Nama]",
                ],
              ],
            },
          },
          {
            id: 23,
            title: "Anakanda Perempuan Sultan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Amat Mulia Paduka Seri"],
                ["Gelaran", "Tunku Besar Puteri [Nama]"],
                [
                  "Terasul penuh",
                  "Duli Yang Amat Mulia Paduka Seri Tunku Besar Puteri [Nama]",
                ],
              ],
            },
          },
          {
            id: 24,
            title: "Isteri Anakanda Lelaki Sultan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Duli Yang Amat Mulia"],
                ["Gelaran", "Che Puan Besar [Nama]"],
                ["Terasul penuh", "Duli Yang Amat Mulia Che Puan Besar [Nama]"],
              ],
            },
            footer:
              "Jika isteri berasal daripada kerabat diraja dan gelaran asalnya lebih tinggi, gelaran asal boleh digunakan menurut ketetapan istiadat.",
          },
          {
            id: 25,
            title: "Suami Anakanda Perempuan Sultan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Teramat Dimuliakan"],
                ["Gelaran", "Tuan Besar [Nama]"],
                ["Terasul penuh", "Yang Teramat Dimuliakan Tuan Besar [Nama]"],
              ],
            },
          },
          {
            id: "PART VI",
            title: "CUCUNDA SULTAN",
            isPartHeader: true,
          },
          {
            id: 26,
            title: "Cucunda Lelaki Sultan Melalui Jalur Lelaki",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Teramat Mulia Paduka Seri"],
                ["Gelaran", "Tunku Muda [Nama]"],
                [
                  "Terasul penuh",
                  "Yang Teramat Mulia Paduka Seri Tunku Muda [Nama]",
                ],
              ],
            },
          },
          {
            id: 27,
            title: "Cucunda Perempuan Sultan Melalui Jalur Lelaki",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Teramat Mulia Paduka Seri"],
                ["Gelaran", "Tunku Muda Puteri [Nama]"],
                [
                  "Terasul penuh",
                  "Yang Teramat Mulia Paduka Seri Tunku Muda Puteri [Nama]",
                ],
              ],
            },
          },
          {
            id: 28,
            title: "Isteri Cucunda Lelaki Sultan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Teramat Mulia"],
                ["Gelaran", "Che Puan Muda [Nama]"],
                ["Terasul penuh", "Yang Teramat Mulia Che Puan Muda [Nama]"],
              ],
            },
            footer:
              "Jika isteri berasal daripada kerabat diraja dan gelaran asalnya lebih tinggi, gelaran asal boleh digunakan menurut ketetapan istiadat.",
          },
          {
            id: 29,
            title: "Suami Cucunda Perempuan Sultan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Amat Dimuliakan"],
                ["Gelaran", "Tuan Muda [Nama]"],
                ["Terasul penuh", "Yang Amat Dimuliakan Tuan Muda [Nama]"],
              ],
            },
          },
          {
            id: "PART VII",
            title: "CICINDA SULTAN",
            isPartHeader: true,
          },
          {
            id: 30,
            title: "Cicinda Lelaki Sultan Melalui Jalur Lelaki",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Amat Mulia Paduka Seri"],
                ["Gelaran", "Tunku Kechil [Nama]"],
                [
                  "Terasul penuh",
                  "Yang Amat Mulia Paduka Seri Tunku Kechil [Nama]",
                ],
              ],
            },
          },
          {
            id: 31,
            title: "Cicinda Perempuan Sultan Melalui Jalur Lelaki",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Amat Mulia Paduka Seri"],
                ["Gelaran", "Tunku Kechil Puteri [Nama]"],
                [
                  "Terasul penuh",
                  "Yang Amat Mulia Paduka Seri Tunku Kechil Puteri [Nama]",
                ],
              ],
            },
          },
          {
            id: 32,
            title: "Isteri Cicinda Lelaki Sultan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Amat Mulia"],
                ["Gelaran", "Che Puan Kechil [Nama]"],
                ["Terasul penuh", "Yang Amat Mulia Che Puan Kechil [Nama]"],
              ],
            },
            footer:
              "Jika isteri berasal daripada kerabat diraja dan gelaran asalnya lebih tinggi, gelaran asal boleh digunakan menurut ketetapan istiadat.",
          },
          {
            id: 33,
            title: "Suami Cicinda Perempuan Sultan",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Dimuliakan"],
                ["Gelaran", "Tuan Kechil [Nama]"],
                ["Terasul penuh", "Yang Dimuliakan Tuan Kechil [Nama]"],
              ],
            },
          },
          {
            id: "PART VIII",
            title: "PIUT DAN GENERASI SETERUSNYA MELALUI JALUR LELAKI",
            isPartHeader: true,
          },
          {
            id: 34,
            title: "Piut dan Generasi Seterusnya Melalui Jalur Lelaki",
            table: {
              headers: ["Perkara", "Bentuk Rasmi"],
              rows: [
                ["Rujukan kehormat", "Yang Mulia"],
                ["Gelaran", "Tunku [Nama]"],
                ["Terasul penuh", "Yang Mulia Tunku [Nama]"],
              ],
            },
            footer:
              "Gelaran ini digunakan bagi piut Sultan dan generasi seterusnya melalui jalur lelaki, tertakluk kepada daftar kerabat dan ketetapan istiadat.",
          },
          {
            id: "PART IX",
            title: "KETURUNAN MELALUI JALUR PEREMPUAN",
            isPartHeader: true,
          },
          {
            id: 35,
            title: "Indraputra dan Indraputri",
            table: {
              headers: ["Jantina", "Bentuk Rasmi"],
              rows: [
                ["Lelaki", "[Nama] Indraputra"],
                ["Perempuan", "[Nama] Indraputri"],
              ],
            },
            footer:
              "Gelaran Indraputra dan Indraputri digunakan bagi keturunan Sultan melalui jalur perempuan menurut ketetapan adat Istana Diraja Inderaloka.\n\nGelaran ini boleh diwarisi melalui jalur lelaki sahaja.",
          },
          {
            id: "PART X",
            title: "RINGKASAN TERASUL MENGIKUT SUSUNAN",
            isPartHeader: true,
          },
          {
            id: "SUMMARY",
            title: "Ringkasan Terasul",
            table: {
              headers: ["Bil.", "Kedudukan", "Rujukan Kehormat", "Gelaran"],
              rows: [
                [
                  "1",
                  "Sultan",
                  "Kebawah Duli Yang Maha Mulia Paduka Seri Baginda",
                  "Sultan [Nama]",
                ],
                [
                  "2",
                  "Raja Permaisuri",
                  "Kebawah Duli Yang Maha Mulia Paduka Seri Baginda",
                  "Raja Permaisuri [Gelaran Asal] [Nama]",
                ],
                [
                  "3",
                  "Sultanah",
                  "Kebawah Duli Yang Maha Mulia",
                  "Sultanah [Nama]",
                ],
                [
                  "4",
                  "Pemangku Sultan",
                  "Kebawah Duli Paduka Baginda",
                  "Pemangku Sultan [Gelaran Taraf Keturunan] [Nama]",
                ],
                [
                  "5",
                  "Sultan Begawan",
                  "Duli Yang Maha Mulia Paduka Seri",
                  "Sultan Begawan [Nama]",
                ],
                [
                  "6",
                  "Permaisuri Begawan",
                  "Duli Yang Maha Mulia Paduka Seri",
                  "Permaisuri Begawan [Nama]",
                ],
                [
                  "7",
                  "al-Marhum Sultan",
                  "Duli Yang Maha Mulia",
                  "al-Marhum Sultan [Nama]",
                ],
                [
                  "8",
                  "Permaisuri Balu",
                  "Duli Yang Maha Mulia",
                  "Permaisuri Balu [Nama]",
                ],
                [
                  "9",
                  "Raja Perempuan",
                  "Duli Yang Maha Mulia",
                  "Raja Perempuan [Nama]",
                ],
                [
                  "10",
                  "Sultanah Balu",
                  "Yang Maha Mulia",
                  "Sultanah Balu [Nama]",
                ],
                [
                  "11",
                  "Tunku Mahkota",
                  "Kebawah Duli Yang Teramat Mulia Paduka Seri",
                  "Tunku Mahkota [Gelaran Taraf Keturunan] [Nama]",
                ],
                [
                  "12",
                  "Tunku Ampuan Mahkota",
                  "Kebawah Duli Yang Teramat Mulia Paduka Seri",
                  "Tunku Ampuan Mahkota [Gelaran Asal] [Nama]",
                ],
                [
                  "13",
                  "Che Ampuan Mahkota",
                  "Kebawah Duli Yang Teramat Mulia",
                  "Che Ampuan Mahkota [Nama]",
                ],
                [
                  "14",
                  "Tunku Utama",
                  "Kebawah Duli Paduka Mulia",
                  "Tunku Utama [Gelaran Taraf Keturunan] [Nama]",
                ],
                [
                  "15",
                  "Waris Damping",
                  "Duli Yang Teramat Mulia Paduka Seri",
                  "[Gelaran Waris Damping] [Gelaran Taraf Keturunan] [Nama]",
                ],
                [
                  "16",
                  "Tunku Ampuan Waris Damping",
                  "Duli Yang Teramat Mulia Paduka Seri",
                  "Tunku Ampuan [Gelaran Waris Damping] [Gelaran Asal] [Nama]",
                ],
                [
                  "17",
                  "Che Ampuan Waris Damping",
                  "Duli Yang Teramat Mulia",
                  "Che Ampuan [Gelaran Waris Damping] [Nama]",
                ],
                [
                  "18",
                  "Anakanda lelaki Sultan",
                  "Duli Yang Amat Mulia Paduka Seri",
                  "Tunku Besar [Nama]",
                ],
                [
                  "19",
                  "Anakanda perempuan Sultan",
                  "Duli Yang Amat Mulia Paduka Seri",
                  "Tunku Besar Puteri [Nama]",
                ],
                [
                  "20",
                  "Isteri anakanda lelaki Sultan",
                  "Duli Yang Amat Mulia",
                  "Che Puan Besar [Nama]",
                ],
                [
                  "21",
                  "Suami anakanda perempuan Sultan",
                  "Yang Teramat Dimuliakan",
                  "Tuan Besar [Nama]",
                ],
                [
                  "22",
                  "Cucunda lelaki Sultan",
                  "Yang Teramat Mulia Paduka Seri",
                  "Tunku Muda [Nama]",
                ],
                [
                  "23",
                  "Cucunda perempuan Sultan",
                  "Yang Teramat Mulia Paduka Seri",
                  "Tunku Muda Puteri [Nama]",
                ],
                [
                  "24",
                  "Isteri cucunda lelaki Sultan",
                  "Yang Teramat Mulia",
                  "Che Puan Muda [Nama]",
                ],
                [
                  "25",
                  "Suami cucunda perempuan Sultan",
                  "Yang Amat Dimuliakan",
                  "Tuan Muda [Nama]",
                ],
                [
                  "26",
                  "Cicinda lelaki Sultan",
                  "Yang Amat Mulia Paduka Seri",
                  "Tunku Kechil [Nama]",
                ],
                [
                  "27",
                  "Cicinda perempuan Sultan",
                  "Yang Amat Mulia Paduka Seri",
                  "Tunku Kechil Puteri [Nama]",
                ],
                [
                  "28",
                  "Isteri cicinda lelaki Sultan",
                  "Yang Amat Mulia",
                  "Che Puan Kechil [Nama]",
                ],
                [
                  "29",
                  "Suami cicinda perempuan Sultan",
                  "Yang Dimuliakan",
                  "Tuan Kechil [Nama]",
                ],
                [
                  "30",
                  "Piut dan generasi seterusnya melalui jalur lelaki",
                  "Yang Mulia",
                  "Tunku [Nama]",
                ],
                ["31", "Che Puan Balu", "Yang Mulia", "Che Puan Balu [Nama]"],
                [
                  "32",
                  "Keturunan melalui jalur perempuan",
                  "—",
                  "[Nama] Indraputra / [Nama] Indraputri",
                ],
              ],
            },
          },
          {
            id: 36,
            title: "Ketetapan Am",
            content:
              "Dalam semua urusan rasmi, bentuk terasul penuh hendaklah digunakan pada sebutan pertama. Bagi sebutan berikutnya, bentuk ringkas boleh digunakan mengikut kesesuaian majlis atau dokumen.\n\nPenggunaan gelaran asal bagi kerabat diraja yang berkahwin dengan kerabat lain hendaklah mengikut ketetapan istiadat dan gelaran yang lebih tinggi.\n\nSebarang perkara yang tidak dinyatakan secara khusus dalam panduan ini hendaklah dirujuk kepada Istana Diraja Inderaloka untuk ketetapan lanjut.",
          },
        ]
      },
      regalia: {
        breadcrumbCurrent: "Alat Kebesaran Diraja",
        pageTitle: "Alat-Alat Kebesaran Diraja Inderaloka",
        pageDesc:
          "Warisan gilang-gemilang alat-alat kebesaran yang melambangkan kedaulatan, kuasa, dan keagungan Sultan Inderaloka.",
        regaliaTitle: "Alat-Alat Kebesaran Diraja",
        regaliaItems: [
          {
            name: "Mahkota Diraja",
            desc: "Mahkota keemasan yang dihiasi dengan permata berharga, dipakai semasa Istiadat Pertabalan. Dibuat pada abad ke-15 dan telah diperbaharui beberapa kali sepanjang sejarah.",
          },
          {
            name: "Pedang Diraja (Pedang Pendek dan Panjang)",
            desc: "Dua bilah pedang keramat yang melambangkan kuasa dan kedaulatan Yang di-Pertuan Agong. Dibawa oleh pegawai khas semasa semua istiadat rasmi negara.",
          },
          {
            name: "Tongkat Diraja",
            desc: "Tongkat keemasan yang melambangkan autoriti pemerintahan. Digunakan dalam semua istiadat pertabalan dan upacara penerimaan tetamu negara.",
          },
          {
            name: "Mohor Besar Diraja",
            desc: "Cop mohor rasmi Yang di-Pertuan Agong yang digunakan untuk mengisytiharkan dan mengesahkan dokumen-dokumen negara yang paling penting.",
          },
          {
            name: "Cogan Emas dan Cogan Perak",
            desc: "Hiasan keemasan yang dipaparkan semasa istiadat diraja, melambangkan kemakmuran, kemuliaan, dan ketinggian martabat negara.",
          },
        ],
      },
      statement: {
        breadcrumbCurrent: "Titah Diraja",
        pageTitle: "Titah Diraja",
        pageDesc:
          "Kenyataan rasmi, titah, dan ucapan Yang di-Pertuan Agong XVI kepada seluruh rakyat Inderaloka.",
        latestLabel: "Titah Terkini",
        latestDate: "23 Mei 2026",
        latestTitle:
          "Titah Sempena Hari Keputeraan Kebawah Duli Yang Maha Mulia Yang di-Pertuan Agong XVI",
        latestBody:
          "Bismillahirrahmanirrahim. Assalamualaikum Warahmatullahi Wabarakatuh, dan Salam Pertiwi Dijunjung Bermartabat.\n\nAlhamdulillah, bersyukur Kita ke hadrat Allah Subhanahu Wata'ala kerana dengan limpah kurnia-Nya, Kita dapat berkumpul bersama pada hari yang bersejarah dan bermakna ini.\n\nKita merakamkan setinggi-tinggi penghargaan dan terima kasih kepada seluruh rakyat Inderaloka di atas kesetiaan, kasih sayang, dan pengorbanan yang dicurahkan tanpa mengenal lelah. Adalah menjadi harapan Kita agar Inderaloka terus maju, rakyatnya bersatu padu, dan negara ini kekal makmur, aman, serta berdaulat selama-lamanya.\n\nWassalam.",
        latestSignature:
          "Duli Yang Maha Mulia Seri Paduka Baginda Yang di-Pertuan Agong XVI Inderaloka",
        previousLabel: "Titah-Titah Terdahulu",
        previousItems: [
          {
            date: "31 Ogos 2025",
            title: "Titah Sempena Hari Kemerdekaan Ke-68 Inderaloka",
          },
          {
            date: "1 Januari 2025",
            title: "Titah Diraja Sempena Tahun Baharu 2025",
          },
          {
            date: "15 September 2024",
            title: "Titah Pembukaan Sidang Parlimen Ke-16",
          },
          {
            date: "31 Januari 2024",
            title: "Titah Istiadat Pertabalan Yang di-Pertuan Agong XVI",
          },
        ],
        readMore: "Baca Titah Penuh",
      },
      palaces: {
        breadcrumbCurrent: "Istana Diraja",
        pageTitle: "Istana-Istana Diraja Inderaloka",
        pageDesc:
          "Kediaman rasmi dan istana-istana bersejarah Yang di-Pertuan Agong serta keluarga diraja Inderaloka.",
        typeLabel: "Jenis",
        locationLabel: "Lokasi",
        visitingLabel: "Maklumat Lawatan",
        items: [
          {
            name: "Istana Negara",
            location: "Jalan Duta, Wilayah Persekutuan Inderaloka",
            type: "Kediaman Rasmi",
            desc: "Istana Negara adalah kediaman rasmi Yang di-Pertuan Agong. Dibina pada 2011 di atas tanah seluas 97 hektar, istana ini menempatkan Balairong Seri untuk istiadat rasmi dan ruang kediaman Diraja. Seni bina istana menggabungkan estetika Melayu tradisional dengan rekabentuk kontemporari yang anggun.",
            visiting:
              "Tidak dibuka kepada awam secara tetap. Majlis-majlis tertentu diadakan di pekarangan istana pada hari kebesaran.",
          },
          {
            name: "Istana Abdulaziz",
            location: "Bukit Indera, Wilayah Persekutuan Inderaloka",
            type: "Istana Warisan",
            desc: "Istana bersejarah yang dibina pada 1897. Berfungsi sebagai kediaman pemerintah bagi Sultan ketika berada di ibu kota. Seni bina Eropah-Melayu yang unik menjadikannya antara warisan budaya terpenting negara.",
            visiting:
              "Dibuka kepada orang ramai: Selasa - Ahad, 09:00 - 17:00. Tutup pada hari Isnin dan cuti umum.",
          },
          {
            name: "Istana Seri Laksana",
            location: "Pusat Bandaraya Inderaloka",
            type: "Istana Bandar Raya",
            desc: "Kediaman diraja semasa kunjungan rasmi ke ibu kota. Dibina pada 1930-an dalam gaya Art Deco yang terpelihara dengan baik, istana ini merupakan antara contoh seni bina kolonial yang paling cantik di negara.",
            visiting:
              "Lawatan hanya melalui temujanji rasmi. Hubungi Pejabat Istana.",
          },
          {
            name: "Istana Bukit Indera",
            location: "Bukit Indera, Selangor",
            type: "Istana Peranginan",
            desc: "Digunakan sebagai tempat peranginan keluarga diraja dan untuk menjamu tetamu negara yang terpilih. Terletak di kawasan bukit yang sejuk dengan pemandangan lembah yang menakjubkan.",
            visiting: "Tidak dibuka kepada awam.",
          },
        ],
      },
      royalAdvisoryCouncil: {
        breadcrumbCurrent: "Majlis Penasihat Diraja",
        pageTitle: "Majlis Penasihat Diraja",
        pageDesc:
          "Badan penasihat bebas yang memberikan nasihat kepada Yang di-Pertuan Agong dalam hal ehwal pentadbiran dan keselamatan negara.",
        overviewTitle: "Peranan dan Fungsi",
        overviewBody:
          "Majlis Penasihat Diraja ditubuhkan sebagai badan penasihat bebas kepada Yang di-Pertuan Agong. Terdiri daripada tokoh-tokoh berpengalaman dalam bidang undang-undang, ekonomi, keselamatan, dan agama, majlis ini memberikan pandangan bebas tentang isu-isu nasional kritikal.",
        basisLabel: "Asas Penubuhan",
        basis: "Perintah Diraja dan Perlembagaan Persekutuan Inderaloka",
        membersTitle: "Ahli-Ahli Majlis",
        members: [
          {
            name: "Tun Dato' Seri Mahathir Mohamad",
            role: "Pengerusi Kanan",
            title: "Bekas Perdana Menteri Inderaloka",
          },
          {
            name: "Tun Abdul Hamid Mohamad",
            role: "Ahli",
            title: "Bekas Ketua Hakim Negara",
          },
          {
            name: "Tan Sri Dato' Zeti Akhtar Aziz",
            role: "Ahli",
            title: "Bekas Gabenor Bank Negara Inderaloka",
          },
          {
            name: "Tan Sri Dr. Munir Majid",
            role: "Ahli",
            title: "Pakar Ekonomi & Hubungan Antarabangsa",
          },
          {
            name: "Dato' Dr. Hamid Pawanteh",
            role: "Ahli",
            title: "Pakar Undang-undang Antarabangsa",
          },
          {
            name: "Prof. Datuk Dr. Shad Saleem Faruqi",
            role: "Ahli",
            title: "Pakar Undang-undang Perlembagaan",
          },
        ],
        functionsTitle: "Fungsi Utama Majlis",
        functions: [
          "Memberikan nasihat bebas kepada Yang di-Pertuan Agong tentang dasar-dasar nasional",
          "Meneliti dan mengesyorkan penyelesaian kepada isu-isu kritikal negara",
          "Memantau pematuhan perlembagaan oleh badan-badan kerajaan",
          "Memberikan pandangan tentang perjanjian dan hubungan antarabangsa",
          "Mengemukakan laporan berkala kepada Yang di-Pertuan Agong",
        ],
        meetingLabel: "Kekerapan Mesyuarat",
        meeting:
          "Majlis bersidang sekurang-kurangnya empat kali setahun, atau bila-bila masa apabila diperlukan oleh Yang di-Pertuan Agong.",
      },
      palaceCourtiers: {
        breadcrumbCurrent: "Pegawai Istana",
        pageTitle: "Pegawai-Pegawai Istana Diraja",
        pageDesc:
          "Pegawai-pegawai khas yang berkhidmat di istana dalam menguruskan protokol, adat istiadat, dan pentadbiran istana diraja.",
        overviewTitle: "Tentang Pegawai Istana",
        overviewBody:
          "Pegawai-pegawai istana merupakan kakitangan profesional yang bertanggungjawab menguruskan hal ehwal istana diraja, dari protokol rasmi dan pentadbiran hingga menjaga adat dan tradisi diraja yang berabad lamanya.",
        categoriesTitle: "Kategori Pegawai Istana",
        categories: [
          {
            title: "Pegawai Protokol Diraja",
            desc: "Bertanggungjawab mengatur semua majlis rasmi, tetamu negara, dan istiadat diraja mengikut protokol yang ditetapkan.",
            members: [
              {
                role: "Ketua Protokol Diraja",
                name: "Dato' Haji Abdullah bin Hassan",
              },
              {
                role: "Timbalan Ketua Protokol",
                name: "Tuan Mohd Hafizuddin bin Ahmad",
              },
            ],
          },
          {
            title: "Setiausaha Diraja",
            desc: "Menguruskan surat-menyurat, jadual waktu, dan komunikasi rasmi Yang di-Pertuan Agong serta keluarga diraja.",
            members: [
              {
                role: "Setiausaha Diraja Kanan",
                name: "Dato' Sri Muhd Zakri bin Abdul Hamid",
              },
              {
                role: "Setiausaha Diraja",
                name: "Datin Haslinda binti Mohd Amin",
              },
            ],
          },
          {
            title: "Pegawai Adat Diraja",
            desc: "Menjaga, memelihara, dan melaksanakan adat istiadat diraja yang telah diwarisi sejak berabad lamanya.",
            members: [
              {
                role: "Pemangku Adat Diraja",
                name: "Dato' Haji Harun bin Jaafar",
              },
              {
                role: "Pegawai Adat Kanan",
                name: "Encik Abdul Wahab bin Yusof",
              },
            ],
          },
          {
            title: "Pengawal Peribadi Diraja",
            desc: "Anggota pasukan keselamatan khas yang bertanggungjawab ke atas keselamatan peribadi Yang di-Pertuan Agong.",
            members: [
              {
                role: "Komandan Pengawal Diraja",
                name: "Brigadier Jeneral Dato' Azman bin Ibrahim",
              },
              { role: "Penolong Komandan", name: "Kolonel Hasrul bin Mat Zin" },
            ],
          },
        ],
        courtLabel: "Pejabat Istana",
        court:
          "Jabatan Istana Negara, Jalan Duta, 50480 Inderaloka. Tel: +603-2384 1000",
      },
    },

    // Directory page
    directoryPage: {
      breadcrumbHome: "Utama",
      breadcrumbCurrent: "Direktori",
      pageTitle: "Direktori Kerajaan",
      pageDesc:
        "Senarai lengkap jabatan, kementerian, dan pegawai-pegawai kerajaan Inderaloka.",
      searchPlaceholder: "Cari jabatan, kementerian, atau pegawai...",
      filterAll: "Semua",
      filterExec: "Eksekutif",
      filterLeg: "Perundangan",
      filterJud: "Kehakiman",
      filterDept: "Jabatan",
      noResults: "Tiada rekod yang sepadan dengan carian anda.",
      ministriesTitle: "Kementerian Persekutuan",
      portfolioLabel: "Portfolio",
      ministerLabel: "Menteri",
      deptTitle: "Jabatan-Jabatan Kerajaan",
      headLabel: "Ketua",
      phoneLabel: "Telefon",
      addressLabel: "Alamat",
      hoursLabel: "Waktu",
      categoryLabel: "Kategori",
      ministries: [
        {
          name: "Kementerian Kewangan",
          minister: "YB Tengku Zafrul Tengku Abdul Aziz",
          portfolio: "Belanjawan negara, cukai, dan dasar pelaburan",
        },
        {
          name: "Kementerian Luar Negeri",
          minister: "YB Dato' Sri Zambry Abd Kadir",
          portfolio: "Diplomatik dan hubungan antarabangsa",
        },
        {
          name: "Kementerian Dalam Negeri",
          minister: "YB Dato' Seri Saifuddin Nasution",
          portfolio: "Keselamatan dalam negeri, imigresen, dan polis",
        },
        {
          name: "Kementerian Pertahanan",
          minister: "YB Dato' Sri Mohamad Hasan",
          portfolio: "Angkatan tentera dan pertahanan negara",
        },
        {
          name: "Kementerian Kesihatan",
          minister: "YB Dato' Sri Dr. Dzulkefly Ahmad",
          portfolio: "Sistem penjagaan kesihatan awam",
        },
        {
          name: "Kementerian Pendidikan",
          minister: "YB Fadhlina Sidek",
          portfolio: "Pendidikan pra-sekolah hingga universiti",
        },
        {
          name: "Kementerian Pengangkutan",
          minister: "YB Anthony Loke Siew Fook",
          portfolio: "Pengangkutan darat, laut, dan udara",
        },
        {
          name: "Kementerian Pelancongan, Seni dan Budaya",
          minister: "YB Dato' Seri Tiong King Sing",
          portfolio: "Pelancongan, warisan seni, dan kebudayaan",
        },
      ],
      departments: [
        {
          name: "Jabatan Perdana Menteri",
          head: "Tan Sri Mohd Zuki Ali",
          phone: "+603-8888 8000",
          address: "Bangunan Perdana Putra, Putrajaya 62502",
          hours: "Isnin - Jumaat, 08:00 - 17:00",
          category: "Eksekutif",
        },
        {
          name: "Jabatan Peguam Negara",
          head: "Tan Sri Ahmad Terrirudin Mohd Salleh",
          phone: "+603-8880 8000",
          address: "Tingkat 15, Blok A, Putrajaya",
          hours: "Isnin - Jumaat, 08:00 - 17:00",
          category: "Kehakiman",
        },
        {
          name: "Jabatan Perkhidmatan Awam",
          head: "Tan Sri Wan Ahmad Dahlan",
          phone: "+603-8885 3000",
          address: "Blok C2, Kompleks C, Putrajaya",
          hours: "Isnin - Jumaat, 08:00 - 17:00",
          category: "Eksekutif",
        },
        {
          name: "Dewan Rakyat",
          head: "YB Tan Sri Johari Abdul",
          phone: "+603-2072 1955",
          address: "Bangunan Parlimen, Jalan Parlimen, Inderaloka",
          hours: "Isnin - Jumaat, 09:00 - 17:00",
          category: "Perundangan",
        },
        {
          name: "Dewan Negara",
          head: "YB Tan Sri Wan Junaidi Tuanku Jaafar",
          phone: "+603-2601 8888",
          address: "Bangunan Parlimen, Jalan Parlimen, Inderaloka",
          hours: "Isnin - Jumaat, 09:00 - 17:00",
          category: "Perundangan",
        },
        {
          name: "Mahkamah Persekutuan",
          head: "Tan Sri Tengku Maimun Tuan Mat",
          phone: "+603-2693 3424",
          address: "Kompleks Mahkamah, Jalan Perdana, Inderaloka",
          hours: "Isnin - Jumaat, 09:00 - 16:30",
          category: "Kehakiman",
        },
        {
          name: "Suruhanjaya Pilihan Raya (SPR)",
          head: "Tan Sri Abdul Ghani Salleh",
          phone: "+603-8885 1500",
          address: "Aras 4, Blok D, Putrajaya",
          hours: "Isnin - Jumaat, 08:00 - 17:00",
          category: "Eksekutif",
        },
        {
          name: "Jabatan Audit Negara",
          head: "Tan Sri Nik Azman Nik Abdul Majid",
          phone: "+603-8889 9000",
          address: "Blok D5, Parcel D, Putrajaya",
          hours: "Isnin - Jumaat, 08:00 - 17:00",
          category: "Eksekutif",
        },
        {
          name: "Ketua Pengarah Kesihatan",
          head: "Dato' Sri Utama Abdul Hisham bin Abdullah",
          phone: "+603-8889 9000",
          address: "Kompleks Kementerian Kesihatan, Putrajaya",
          hours: "Isnin - Jumaat, 08:00 - 17:00",
          category: "Eksekutif",
        },
      ],
    },

    // Government section
    government: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Kerajaan",
      landing: {
        pageTitle: "Kerajaan Inderaloka",
        pageDesc:
          "Struktur pemerintahan berperlembagaan Inderaloka — tiga cabang kerajaan yang menjamin keadilan, kebebasan, dan kemakmuran rakyat.",
        subpages: [
          {
            href: "/government/executive",
            title: "Eksekutif",
            desc: "Perdana Menteri, Jemaah Menteri, dan kuasa eksekutif kerajaan persekutuan.",
          },
          {
            href: "/government/legislative",
            title: "Perundangan",
            desc: "Parlimen, Dewan Negara, dan Dewan Rakyat — badan perundangan tertinggi negara.",
          },
          {
            href: "/government/judiciary",
            title: "Kehakiman",
            desc: "Mahkamah Persekutuan, Mahkamah Rayuan, dan Mahkamah Syariah yang bebas dan berwibawa.",
          },
          {
            href: "/government/state-officials",
            title: "Pegawai Negara",
            desc: "Pegawai-pegawai tertinggi kerajaan termasuk Peguam Negara, Ketua Polis, dan Gabenor Bank Negara.",
          },
        ],
      },
      executive: {
        breadcrumbCurrent: "Eksekutif",
        pageTitle: "Cabang Eksekutif",
        pageDesc:
          "Jemaah Menteri yang diketuai oleh Perdana Menteri sebagai ketua eksekutif kerajaan persekutuan.",
        subpages: [
          {
            href: "/government/executive/prime-minister",
            title: "Perdana Menteri",
            desc: "Profil dan peranan Perdana Menteri Inderaloka.",
          },
          {
            href: "/government/executive/cabinet",
            title: "Jemaah Menteri",
            desc: "Senarai penuh anggota Jemaah Menteri dan portfolio mereka.",
          },
          {
            href: "/government/executive/political-parties",
            title: "Parti Politik",
            desc: "Parti-parti politik yang membentuk landskap demokrasi berparlimen Inderaloka.",
          },
        ],
      },
      pm: {
        breadcrumbCurrent: "Perdana Menteri",
        pageTitle: "Perdana Menteri Inderaloka",
        pageDesc:
          "YAB Dato' Sri Haji Anwar Ibrahim — Ketua Eksekutif Kerajaan Persekutuan Inderaloka",
        portraitLabel: "Potret Rasmi\nPerdana Menteri",
        officialTitleLabel: "Gelaran Rasmi",
        officialTitle:
          "Yang Amat Berhormat Dato' Sri Haji Anwar bin Ibrahim, SMN, DKT",
        bornLabel: "Tarikh Lahir",
        born: "10 Ogos 1947",
        sinceLabel: "Tarikh Dilantik",
        since: "24 November 2022",
        educationLabel: "Pendidikan",
        education:
          "Universiti Malaya (Pengajian Melayu); Pemimpin Pelajar Kebangsaan",
        mottoLabel: "Prinsip Pentadbiran",
        motto:
          "Malaysia Madani — Kemakmuran Bersama, Kebebasan Dinikmati, Kemuliaan Milik Semua",
        roleTitle: "Peranan Konstitusional",
        roleBody:
          "Perdana Menteri ialah Ketua Kerajaan dan mengetuai Jemaah Menteri. Dilantik oleh Yang di-Pertuan Agong dari kalangan ahli Dewan Rakyat yang mendapat kepercayaan majoriti. Perdana Menteri bertanggungjawab ke atas dasar kerajaan, pentadbiran awam, dan hubungan antarabangsa negara.",
        dutiesTitle: "Tanggungjawab Utama",
        duties: [
          "Mengetuai Jemaah Menteri dan mengawal selia pelaksanaan dasar kerajaan",
          "Menasihati Yang di-Pertuan Agong dalam hal-hal pentadbiran negara",
          "Mewakili Inderaloka di peringkat antarabangsa",
          "Menentukan agenda dan keutamaan perundangan dalam Parlimen",
          "Menyelaraskan tindak balas kerajaan kepada krisis dan bencana nasional",
          "Melantik anggota Jemaah Menteri dengan perkenan Yang di-Pertuan Agong",
        ],
        archiveTitle: "Arkib Perdana Menteri Inderaloka",
        governanceTimelineTitle: "Garis Masa Pentadbiran",
        searchPlaceholder: "Cari mengikut nama, tahun, atau pencapaian...",
        biographyLabel: "Biografi & Kerjaya",
        achievementsLabel: "Pencapaian Utama",
        pmArchive: [
          {
            name: "Dato' Sri Haji Anwar Ibrahim",
            years: "2022 – Kini",
            party: "Pakatan Madani",
            portrait: "Portrait Anwar",
            signature: "Signature Anwar",
            bio: "Perdana Menteri ke-10 yang menerajui kerajaan perpaduan. Pentadbiran Baginda memberi tumpuan kepada reformasi institusi, tadbir urus yang telus, dan keadilan sosial.",
            achievements: [
              "Inisiatif Malaysia Madani",
              "Reformasi Sistem Subsidi",
              "Pengukuhan Ringgit",
            ],
            honours: ["S.S.A.P.", "S.S.M.T.", "D.G.S.M."],
            milestones: [
              {
                year: "2022",
                event: "Pelantikan sebagai Perdana Menteri Ke-10",
              },
              { year: "2024", event: "Pelancaran Kerangka Ekonomi Madani" },
            ],
          },
          {
            name: "Dato' Sri Ismail Sabri",
            years: "2021 – 2022",
            party: "Barisan Nasional",
            portrait: "Portrait Ismail",
            signature: "Signature Ismail",
            bio: "Menerajui negara semasa tempoh peralihan pemulihan ekonomi dan pembukaan semula sempadan negara pasca-pandemik.",
            achievements: [
              "Konsep Keluarga Malaysia",
              "RUU Larangan Ahli Parlimen Bertukar Parti",
            ],
            honours: ["D.M.N.", "S.S.A.P.", "S.P.M.K."],
            milestones: [
              {
                year: "2021",
                event: "Pelantikan sebagai Perdana Menteri Ke-9",
              },
              { year: "2022", event: "Pembukaan semula sempadan antarabangsa" },
            ],
          },
        ],
      },
      cabinet: {
        breadcrumbCurrent: "Jemaah Menteri",
        pageTitle: "Jemaah Menteri Inderaloka",
        pageDesc:
          "Anggota-anggota Jemaah Menteri yang bertanggungjawab ke atas portfolio kementerian masing-masing.",
        lastUpdated: "Kemas Kini Terakhir",
        lastUpdatedDate: "1 Januari 2025",
        ministerLabel: "Menteri", // ← ADD THIS
        deputyMinisterLabel: "Timbalan Menteri", // ← ADD THIS
        portfolioLabel: "Portfolio",
        sinceLabel: "Dilantik",
        partyLabel: "Parti",
        members: [
          {
            name: "YAB Dato' Sri Haji Anwar Ibrahim",
            portfolio: "Perdana Menteri / Kewangan",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Ahmad Maslan",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Haji Fadhlina binti Sidek",
            portfolio: "Pendidikan",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Lim Hui Ying",
            deputyImage:
              "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Saifuddin Nasution bin Ismail",
            portfolio: "Dalam Negeri",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Dr. Shamsul Anuar Nasarah",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Haji Mohamad bin Hj Hassan",
            portfolio: "Pertahanan",
            party: "UMNO",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Adly Zahari",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Zambry bin Abdul Kadir",
            portfolio: "Luar Negeri",
            party: "UMNO",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Mohamad Alamin",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Dr. Dzulkefly bin Ahmad",
            portfolio: "Kesihatan",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Lukanisman Awang Sauni",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Seri Alexander Nanta Linggi",
            portfolio: "Pembangunan & Perumahan",
            party: "GPS",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Huang Tiong Sii",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Nga Kor Ming",
            portfolio: "Perpaduan Nasional & Kebajikan Sosial",
            party: "DAP",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Saraswathy Kandasami",
            deputyImage:
              "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Gobind Singh Deo",
            portfolio: "Digital & Komunikasi",
            party: "DAP",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Ugak Anak Kumbong",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Hannah Yeoh",
            portfolio: "Belia & Sukan",
            party: "DAP",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Adam Adli Abd Halim",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Seri Tiong King Sing",
            portfolio: "Pelancongan, Seni dan Budaya",
            party: "PBB",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Khairul Firdaus Akbar Khan",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Haji Takiyuddin bin Hassan",
            portfolio: "Sumber Manusia",
            party: "PAS",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Mustapha Sakmud",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Anthony Loke Siew Fook",
            portfolio: "Pengangkutan",
            party: "DAP",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Hasbi Habibollah",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Nik Nazmi bin Nik Ahmad",
            portfolio: "Sumber Asli, Alam Sekitar & Perubahan Iklim",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Sri Huang Tiong Sii",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Tengku Zafrul bin Tengku Abdul Aziz",
            portfolio: "Pelaburan, Perdagangan & Industri",
            party: "UMNO",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Liew Chin Tong",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Haji Mahdzir bin Khalid",
            portfolio: "Pertanian & Keselamatan Makanan",
            party: "UMNO",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Arthur Joseph Kurup",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Tuan Ibrahim bin Tuan Man",
            portfolio: "Kerja Raya",
            party: "PAS",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Ahmad Maslan",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Seri Muhamad Sanusi bin Md Nor",
            portfolio: "Ekonomi",
            party: "PN",
            since: "Feb 2024",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Hanifah Hajar Taib",
            deputyImage:
              "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Khalid Abdul Samad",
            portfolio: "Wilayah Persekutuan",
            party: "Amanah",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Dr. Shamsul Anuar Nasarah",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Akmal Nasrullah Mohd Nasir",
            portfolio: "Komunikasi",
            party: "UMNO",
            since: "Jan 2024",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Teo Nie Ching",
            deputyImage:
              "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop",
          },
        ],
      },
      parties: {
        breadcrumbCurrent: "Parti Politik",
        pageTitle: "Parti-Parti Politik Inderaloka",
        pageDesc:
          "Parti-parti politik utama yang membentuk landskap demokrasi berparlimen Inderaloka.",
        governingLabel: "Parti Pemerintah (Pakatan Madani)",
        oppositionLabel: "Parti Pembangkang",
        foundedLabel: "Ditubuhkan",
        seatsLabel: "Kerusi Parlimen",
        leaderLabel: "Pemimpin",
        items: [
          {
            name: "Parti Keadilan Rakyat (PKR)",
            leader: "Dato' Sri Anwar Ibrahim",
            founded: "1999",
            seats: "31",
            ideology: "Demokrasi Sosial, Reformisme",
            coalition: "Pemerintah",
            desc: "Parti peneraju reformasi yang kini mengetuai kerajaan persekutuan.",
          },
          {
            name: "Parti Tindakan Demokratik (DAP)",
            leader: "Lim Guan Eng",
            founded: "1966",
            seats: "40",
            ideology: "Sosial Demokrasi, Sekularisme",
            coalition: "Pemerintah",
            desc: "Parti berbilang kaum yang memperjuangkan kesaksamaan dan keadilan sosial.",
          },
          {
            name: "Parti Amanah Negara (Amanah)",
            leader: "Mohamad Sabu",
            founded: "2015",
            seats: "11",
            ideology: "Islam Progresif",
            coalition: "Pemerintah",
            desc: "Parti Islam progresif yang menggabungkan nilai Islam dengan demokrasi moden.",
          },
          {
            name: "United Malays National Organisation (UMNO)",
            leader: "Ahmad Zahid Hamidi",
            founded: "1946",
            seats: "26",
            ideology: "Nasionalisme Melayu, Konservatisme",
            coalition: "Pemerintah",
            desc: "Parti Melayu tertua dan paling bersejarah di Inderaloka.",
          },
          {
            name: "Gabungan Parti Sarawak (GPS)",
            leader: "Abang Abdul Rahman Zohari",
            founded: "2018",
            seats: "23",
            ideology: "Konservatisme, Federalisme Sarawak",
            coalition: "Pemerintah",
            desc: "Gabungan parti-parti Sarawak yang menjadi rakan kerajaan persekutuan.",
          },
          {
            name: "Perikatan Nasional (PN)",
            leader: "Muhyiddin Yassin",
            founded: "2020",
            seats: "73",
            ideology: "Konservatisme, Nasionalisme Melayu-Islam",
            coalition: "Pembangkang",
            desc: "Blok pembangkang utama yang terdiri dari BERSATU dan PAS.",
          },
        ],
      },
      legislative: {
        breadcrumbCurrent: "Perundangan",
        pageTitle: "Cabang Perundangan",
        pageDesc:
          "Parlimen Inderaloka — badan perundangan tertinggi negara yang terdiri daripada Dewan Negara dan Dewan Rakyat.",
        subpages: [
          {
            href: "/government/legislative/parliament",
            title: "Parlimen",
            desc: "Gambaran keseluruhan Parlimen Inderaloka dan proses perundangan.",
          },
          {
            href: "/government/legislative/senate",
            title: "Dewan Negara",
            desc: "Dewan Kedua — anggota, fungsi, dan prosedur Dewan Negara.",
          },
          {
            href: "/government/legislative/house-of-representatives",
            title: "Dewan Rakyat",
            desc: "Dewan Pertama — ahli parlimen terpilih dan fungsi Dewan Rakyat.",
          },
        ],
      },
      parliament: {
        breadcrumbCurrent: "Parlimen",
        pageTitle: "Parlimen Inderaloka",
        pageDesc:
          "Badan perundangan tertinggi negara — tempat rang undang-undang digubal, diperdebatkan, dan diluluskan.",
        overviewTitle: "Gambaran Parlimen",
        overviewBody:
          "Parlimen Inderaloka terdiri daripada Yang di-Pertuan Agong dan dua Dewan: Dewan Negara (Dewan Kedua) dan Dewan Rakyat (Dewan Pertama). Parlimen bertindak sebagai badan perundangan tertinggi yang menggubal undang-undang persekutuan, meluluskan belanjawan negara, dan mengawasi tindakan eksekutif.",
        statsLabel: "Fakta Parlimen",
        stats: [
          { label: "Penggal Semasa", value: "Ke-16" },
          { label: "Ahli Dewan Rakyat", value: "222 Orang" },
          { label: "Ahli Dewan Negara", value: "70 Orang" },
          { label: "Sidang Terakhir", value: "Mac 2026" },
        ],
        processTitle: "Proses Perundangan",
        processSteps: [
          {
            step: "01",
            title: "Pembentangan Rang Undang-Undang",
            desc: "Rang undang-undang dibentangkan di Dewan Rakyat atau Dewan Negara oleh menteri atau ahli parlimen.",
          },
          {
            step: "02",
            title: "Bacaan Pertama & Kedua",
            desc: "Rang undang-undang dibaca dan diperdebatkan secara terperinci oleh ahli parlimen.",
          },
          {
            step: "03",
            title: "Jawatankuasa",
            desc: "Rang undang-undang dirujuk kepada jawatankuasa parlimen untuk semakan teliti.",
          },
          {
            step: "04",
            title: "Bacaan Ketiga & Pengundian",
            desc: "Rang undang-undang diundi secara majoriti mudah untuk diluluskan.",
          },
          {
            step: "05",
            title: "Dewan Kedua",
            desc: "Rang undang-undang diluluskan kemudiannya dihantar ke Dewan yang satu lagi untuk proses yang sama.",
          },
          {
            step: "06",
            title: "Perkenan Diraja",
            desc: "Yang di-Pertuan Agong memperkenankan rang undang-undang yang telah diluluskan untuk dijadikan undang-undang.",
          },
        ],
      },
      senate: {
        breadcrumbCurrent: "Dewan Negara",
        pageTitle: "Dewan Negara (Senat)",
        pageDesc:
          "Dewan Kedua Parlimen Inderaloka — dewan semakan yang meneliti dan memperhalus rang undang-undang daripada Dewan Rakyat.",
        overviewTitle: "Fungsi Dewan Negara",
        overviewBody:
          "Dewan Negara terdiri daripada 70 orang Senator — 44 dilantik oleh Yang di-Pertuan Agong atas nasihat Perdana Menteri, dan 26 dipilih oleh Dewan Undangan Negeri (2 dari setiap negeri). Senator memegang jawatan selama 3 tahun dan boleh dilantik semula sekali.",
        presidentLabel: "Presiden Dewan Negara",
        presidentName: "YB Tan Sri Wan Junaidi Tuanku Jaafar",
        compositionTitle: "Komposisi Dewan",
        appointed: "Dilantik oleh YDPA",
        appointedCount: "44",
        elected: "Dipilih oleh DUN",
        electedCount: "26",
        powersTitle: "Kuasa dan Had Dewan Negara",
        powers: [
          "Meneliti dan meminda rang undang-undang dari Dewan Rakyat",
          "Memberi pendapat pakar dalam bidang-bidang tertentu",
          "Boleh menangguhkan rang undang-undang bukan wang selama 1 tahun",
          "Tidak boleh menolak atau meminda Rang Undang-undang Kewangan",
        ],
      },
      houseOfReps: {
        breadcrumbCurrent: "Dewan Rakyat",
        pageTitle: "Dewan Rakyat",
        pageDesc:
          "Dewan Pertama Parlimen Inderaloka — dewan wakil rakyat yang dipilih melalui pilihanraya umum setiap 5 tahun.",
        overviewTitle: "Gambaran Dewan Rakyat",
        overviewBody:
          "Dewan Rakyat terdiri daripada 222 Ahli Parlimen yang dipilih melalui pilihanraya umum atas prinsip first-past-the-post. Ahli Parlimen mewakili kawasan pengundian masing-masing dan berkhidmat selama maksimum 5 tahun. Dewan Rakyat adalah dewan yang lebih berkuasa, dengan kuasa eksklusif ke atas rang undang-undang kewangan.",
        speakerLabel: "Speaker Dewan Rakyat",
        speakerName: "YB Tan Sri Johari Abdul",
        statsLabel: "Statistik Dewan",
        stats: [
          { label: "Jumlah Kerusi", value: "222" },
          { label: "Pemerintah", value: "149" },
          { label: "Pembangkang", value: "73" },
          { label: "Penggal Semasa", value: "2022–2027" },
        ],
        partiesTitle: "Kekuatan Parti di Dewan",
        currentParties: [
          { party: "Pakatan Madani", seats: "149", color: "Pemerintah" },
          { party: "Perikatan Nasional", seats: "73", color: "Pembangkang" },
        ],
      },
      judiciary: {
        breadcrumbCurrent: "Kehakiman",
        pageTitle: "Cabang Kehakiman",
        pageDesc:
          "Badan kehakiman bebas Inderaloka yang mentafsir undang-undang, melindungi hak-hak perlembagaan, dan menegakkan keadilan.",
        subpages: [
          {
            href: "/government/judiciary/chief-justice",
            title: "Ketua Hakim Negara",
            desc: "Profil Ketua Hakim Negara dan kepimpinan kehakiman tertinggi.",
          },
          {
            href: "/government/judiciary/supreme-court",
            title: "Mahkamah Persekutuan",
            desc: "Mahkamah tertinggi Inderaloka — penjaga terakhir perlembagaan negara.",
          },
          {
            href: "/government/judiciary/court-of-appeal",
            title: "Mahkamah Rayuan",
            desc: "Mahkamah perantaraan yang mendengar rayuan sivil dan jenayah.",
          },
          {
            href: "/government/judiciary/syariah-court",
            title: "Mahkamah Syariah",
            desc: "Sistem kehakiman Islam bagi urusan personal dan kekeluargaan orang Islam.",
          },
        ],
      },
      chiefJustice: {
        breadcrumbCurrent: "Ketua Hakim Negara",
        pageTitle: "Ketua Hakim Negara Inderaloka",
        pageDesc:
          "Tan Sri Tengku Maimun binti Tuan Mat, SMN, DKT — Ketua Hakim Negara Pertama Wanita Inderaloka",
        portraitLabel: "Gambar Rasmi\nKetua Hakim",
        officialTitleLabel: "Gelaran Rasmi",
        officialTitle: "Ketua Hakim Negara Inderaloka",
        appointedLabel: "Tarikh Dilantik",
        appointed: "2 Mei 2019",
        educationLabel: "Kelayakan",
        education:
          "LLB (Universiti Malaya); Pusat Latihan Undang-undang Bumiputera; Hakim Sesyen (1990); Hakim Mahkamah Tinggi (2010)",
        roleTitle: "Peranan Ketua Hakim Negara",
        roleBody:
          "Ketua Hakim Negara merupakan pemimpin tertinggi badan kehakiman Inderaloka. Bertanggungjawab mengetuai Mahkamah Persekutuan, mempengerusikan sidang penuh mahkamah, dan memastikan kelancaran pentadbiran keadilan di seluruh negara.",
        dutiesTitle: "Fungsi dan Tugas",
        duties: [
          "Mengetuai Mahkamah Persekutuan dalam semua kes-kes persekutuan",
          "Menyelia pentadbiran keseluruhan sistem kehakiman negara",
          "Memperakukan pelantikan hakim-hakim untuk perkenan Yang di-Pertuan Agong",
          "Menjaga integriti dan kebebasan badan kehakiman",
          "Memimpin reformasi undang-undang dan pemodenan mahkamah",
        ],
      },
      supremeCourt: {
        breadcrumbCurrent: "Mahkamah Persekutuan",
        pageTitle: "Mahkamah Persekutuan Inderaloka",
        pageDesc:
          "Mahkamah tertinggi dan penjaga terakhir perlembagaan Inderaloka — tiada rayuan boleh dibuat selepas keputusannya.",
        overviewTitle: "Tentang Mahkamah Persekutuan",
        overviewBody:
          "Mahkamah Persekutuan ialah mahkamah paling tinggi dalam sistem kehakiman Inderaloka. Ditubuhkan di bawah Perkara 121(1) Perlembagaan Persekutuan, mahkamah ini mempunyai bidang kuasa eksklusif ke atas persoalan perlembagaan, dan keputusannya adalah muktamad dan mengikat semua mahkamah lain.",
        jurisdictionTitle: "Bidang Kuasa",
        compositionTitle: "Komposisi Mahkamah",
        composition:
          "Mahkamah Persekutuan terdiri daripada Ketua Hakim Negara, Presiden Mahkamah Rayuan, dua Hakim Besar, dan hakim-hakim persekutuan yang lain.",
        jurisdictions: [
          {
            type: "Asal",
            desc: "Rayuan dari Mahkamah Rayuan dan kes melibatkan persoalan undang-undang persekutuan",
          },
          {
            type: "Perlembagaan",
            desc: "Eksklusif untuk mentafsir Perlembagaan Persekutuan dan menentukan kesahannya",
          },
          {
            type: "Rujukan",
            desc: "Persoalan undang-undang yang dirujuk oleh mana-mana mahkamah rendah",
          },
        ],
        landmarkTitle: "Kes-Kes Bersejarah",
        landmarkCases: [
          {
            year: "1988",
            title:
              "Kes yang melakar semula sempadan kuasa kehakiman dan badan perundangan.",
          },
          {
            year: "2001",
            title:
              "Pentafsiran semula hak-hak asasi berhubung kebebasan bersuara dalam era digital.",
          },
          {
            year: "2018",
            title:
              "Keputusan bersejarah yang meneguhkan kebebasan badan kehakiman.",
          },
        ],
      },
      courtOfAppeal: {
        breadcrumbCurrent: "Mahkamah Rayuan",
        pageTitle: "Mahkamah Rayuan Inderaloka",
        pageDesc:
          "Mahkamah perantaraan yang mendengar rayuan daripada Mahkamah Tinggi dalam kes-kes sivil dan jenayah.",
        overviewTitle: "Tentang Mahkamah Rayuan",
        overviewBody:
          "Mahkamah Rayuan ialah mahkamah yang mendengar rayuan daripada keputusan Mahkamah Tinggi. Ditubuhkan pada 1994, mahkamah ini duduk di Putrajaya dan mendengar kes-kes sivil serta jenayah. Terdapat 30 orang hakim diketuai oleh Presiden Mahkamah Rayuan.",
        presidentLabel: "Presiden Mahkamah Rayuan",
        presidentName: "Tan Sri Dato' Rohana Yusuf",
        jurisdictionTitle: "Bidang Kuasa",
        jurisdictions: [
          "Rayuan daripada semua keputusan Mahkamah Tinggi",
          "Kes-kes jenayah yang melibatkan hukuman mati atau penjara lebih 1 tahun",
          "Kes-kes sivil yang melibatkan nilai lebih RI 250,000",
          "Semua rayuan daripada kes undang-undang keluarga",
        ],
      },
      syariahCourt: {
        breadcrumbCurrent: "Mahkamah Syariah",
        pageTitle: "Mahkamah Syariah Inderaloka",
        pageDesc:
          "Sistem kehakiman Islam yang mentadbir urusan personal, kekeluargaan, dan jenayah syariah bagi orang Islam Inderaloka.",
        overviewTitle: "Gambaran Mahkamah Syariah",
        overviewBody:
          "Mahkamah Syariah ialah mahkamah yang mengawal selia undang-undang Islam bagi orang Islam sahaja. Bidang kuasanya meliputi perkara-perkara seperti perkahwinan, perceraian, warisan, perwalian, dan kesalahan-kesalahan syariah. Mahkamah Syariah dikawal selia oleh kerajaan negeri di bawah Jadual Kesembilan Perlembagaan.",
        levelsTitle: "Peringkat Mahkamah Syariah",
        levels: [
          {
            name: "Mahkamah Rayuan Syariah",
            desc: "Peringkat tertinggi — mendengar rayuan dari Mahkamah Tinggi Syariah.",
          },
          {
            name: "Mahkamah Tinggi Syariah",
            desc: "Mendengar kes-kes berat termasuk jenayah hudud dan qisas.",
          },
          {
            name: "Mahkamah Rendah Syariah",
            desc: "Mendengar kes-kes perkahwinan, penceraian, dan nafkah.",
          },
        ],
        jurisdictionTitle: "Bidang Kuasa",
        jurisdictions: [
          "Perkahwinan, perceraian, dan nafkah orang Islam",
          "Pengurusan harta pusaka dan wasiat orang Islam",
          "Pelanggaran undang-undang jenayah syariah (ta'zir)",
          "Pertukaran agama dan murtad",
        ],
      },
      stateOfficials: {
        breadcrumbCurrent: "Pegawai Negara",
        pageTitle: "Pegawai-Pegawai Tertinggi Negara",
        pageDesc:
          "Pegawai-pegawai kanan kerajaan yang menerajui institusi utama negara di luar Jemaah Menteri.",
        officials: [
          {
            role: "Peguam Negara",
            name: "Tan Sri Ahmad Terrirudin bin Mohd Salleh",
            since: "Ogos 2022",
            office: "Jabatan Peguam Negara",
            desc: "Peguam Negara merupakan penasihat undang-undang utama kerajaan dan Pendakwa Raya Persekutuan. Bertanggungjawab ke atas semua pendakwaan jenayah persekutuan dan menasihati kerajaan tentang hal ehwal undang-undang.",
            duties: [
              "Menasihati kerajaan tentang hal ehwal undang-undang",
              "Memulakan dan mengendalikan semua pendakwaan jenayah persekutuan",
              "Mewakili kerajaan dalam kes-kes kehakiman",
              "Merangka dan menyemak perundangan",
            ],
          },
          {
            role: "Akauntan Negara",
            name: "Tan Sri Dr. Madinah binti Mohamad",
            since: "Jun 2020",
            office: "Jabatan Akauntan Negara Malaysia",
            desc: "Akauntan Negara bertanggungjawab mengawal selia akaun-akaun awam, memastikan pematuhan kewangan, dan menguruskan sistem perakaunan kerajaan persekutuan.",
            duties: [
              "Mengurus akaun-akaun awam persekutuan",
              "Mengesahkan penyata kewangan kementerian",
              "Memastikan pematuhan Akta Kewangan Awam",
              "Membangunkan dasar perakaunan sektor awam",
            ],
          },
          {
            role: "Ketua Polis Negara",
            name: "Tan Sri Razarudin bin Husain",
            since: "Mei 2023",
            office: "Polis Diraja Inderaloka (PDRI)",
            desc: "Ketua Polis Negara mengetuai Polis Diraja Inderaloka dan bertanggungjawab ke atas keselamatan dalam negeri, pencegahan jenayah, dan penguatkuasaan undang-undang.",
            duties: [
              "Mengetuai operasi PDRI di seluruh negara",
              "Menguruskan keselamatan dalam negeri dan jenayah",
              "Menyelaraskan dengan agensi keselamatan lain",
              "Melaksanakan polisi keselamatan kebangsaan",
            ],
          },
          {
            role: "Panglima Angkatan Tentera",
            name: "Jeneral Tan Sri Mohd Amdzan bin Abu Bakar",
            since: "Feb 2024",
            office: "Angkatan Tentera Inderaloka (ATI)",
            desc: "Panglima Angkatan Tentera merupakan pegawai ketua Angkatan Tentera Inderaloka yang bertanggungjawab ke atas pertahanan, keselamatan sempadan, dan operasi ketenteraan.",
            duties: [
              "Mengetuai tiga cabang ATI (Tentera Darat, Laut, Udara)",
              "Menasihati Jemaah Menteri tentang hal pertahanan",
              "Mengawal selia latihan dan kesiapsiagaan tentera",
              "Menguruskan operasi keamanan dan bencana",
            ],
          },
          {
            role: "Gabenor Bank Negara",
            name: "Dato' Sri Abdul Rasheed bin Ghaffour, SMN, DKT",
            since: "Jun 2023",
            office: "Bank Negara Inderaloka (BNI)",
            desc: "Gabenor Bank Negara mengetuai bank pusat negara dan bertanggungjawab ke atas kestabilan kewangan, dasar monetari, dan penyeliaan sistem perbankan Inderaloka.",
            duties: [
              "Merangka dan melaksanakan dasar monetari",
              "Mengawal selia sistem perbankan dan kewangan",
              "Mengurus rizab antarabangsa negara",
              "Memastikan kestabilan harga dan sistem kewangan",
            ],
          },
          {
            role: "Duta-Duta Besar & Pesuruhjaya Tinggi",
            name: "52 Perwakilan Diplomatik",
            since: "Pelbagai",
            office: "Kementerian Luar Negeri",
            desc: "Inderaloka mengekalkan rangkaian diplomatik yang luas di seluruh dunia. Duta-duta Besar dan Pesuruhjaya Tinggi mewakili kepentingan Inderaloka di negara-negara asing.",
            duties: [
              "Mewakili kepentingan nasional Inderaloka di luar negara",
              "Menguruskan hubungan diplomatik dua hala",
              "Melindungi warga Inderaloka di negara berkenaan",
              "Memajukan perdagangan dan kerjasama dua hala",
            ],
          },
        ],
      },
    },

    // Services extended pages
    healthcarePage: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Perkhidmatan",
      breadcrumbCurrent: "Institusi Penjagaan Kesihatan",
      pageTitle: "Institusi Penjagaan Kesihatan Kerajaan",
      pageDesc:
        "Rangkaian hospital, klinik, dan pusat kesihatan kerajaan yang tersebar di seluruh Inderaloka.",
      hospitalsLabel: "Hospital Kerajaan",
      clinicsLabel: "Klinik Kesihatan",
      addressLabel: "Alamat",
      bedsLabel: "Katil",
      phoneLabel: "Telefon",
      servicesLabel: "Perkhidmatan Utama",
      hospitalNameLabel: "Hospital",
      hospitals: [
        {
          name: "Hospital Kuala Inderaloka",
          address: "Jalan Pahang, 50586 Inderaloka",
          beds: "2,200",
          phone: "+603-2615 5555",
          services: "Traumatologi, Onkologi, Kardiologi, Neurologi",
        },
        {
          name: "Hospital Selayang",
          address: "Jalan Selayang, 68100 Batu Caves",
          beds: "970",
          phone: "+603-6120 3000",
          services: "Gastroenterologi, Hepatologi, Paru-paru",
        },
        {
          name: "Hospital Ampang",
          address: "Jalan Mewah Utama, 68000 Ampang",
          beds: "750",
          phone: "+603-4289 3000",
          services: "Onkologi, Haematologi, Pediatrik",
        },
        {
          name: "Hospital Sultanah Aminah",
          address: "Jalan Abu Bakar, 80100 Johor Bahru",
          beds: "1,000",
          phone: "+607-225 5000",
          services: "Pembedahan Am, Ortopedik, O&G",
        },
        {
          name: "Hospital Penang",
          address: "Jalan Residensi, 10990 George Town",
          beds: "600",
          phone: "+604-222 5333",
          services: "Kardiologi, Neurologi, Pediatrik",
        },
        {
          name: "Hospital Queen Elizabeth II",
          address: "Jalan Utama, 88586 Kota Kinabalu, Sabah",
          beds: "840",
          phone: "+608-831 7000",
          services: "Traumatologi, Pediatrik, O&G",
        },
      ],
      clinics: [
        {
          name: "Klinik Kesihatan Chow Kit",
          address: "Jalan Chow Kit, 50350 Inderaloka",
          services: "Penjagaan primer, Ibu dan Anak",
        },
        {
          name: "Klinik Kesihatan Sentul",
          address: "Jalan Sentul Pasar, 51000 Inderaloka",
          services: "Diabetes, Hipertensi, Pediatrik",
        },
        {
          name: "Klinik Kesihatan Petaling Jaya",
          address: "Jalan Universiti, 46200 Petaling Jaya",
          services: "Penjagaan primer, Vaksinasi",
        },
        {
          name: "Klinik Kesihatan Ipoh Timur",
          address: "Jalan Raja Dr. Nazrin Shah, 31400 Ipoh",
          services: "Penjagaan primer, Warga Emas",
        },
        {
          name: "Klinik Kesihatan Kota Bharu",
          address: "Jalan Sultanah Zainab, 15050 Kota Bharu",
          services: "Penjagaan primer, Ibu dan Anak",
        },
        {
          name: "Klinik Kesihatan Kuching Utara",
          address: "Jalan Satok, 93400 Kuching",
          services: "Penjagaan primer, Diabetes",
        },
      ],
    },
    educationPage: {
      breadcrumbHome: "Utama",
      breadcrumbParent: "Perkhidmatan",
      breadcrumbCurrent: "Pendidikan",
      pageTitle: "Institusi Pendidikan Kerajaan",
      pageDesc:
        "Universiti awam, sekolah menengah kebangsaan, dan sekolah rendah kerajaan di seluruh Inderaloka.",
      uniLabel: "Universiti Awam",
      schoolsSecLabel: "Sekolah Menengah Kebangsaan",
      schoolsPriLabel: "Sekolah Rendah Kebangsaan",
      locationLabel: "Lokasi",
      enrollmentLabel: "Enrolmen",
      programsLabel: "Program Utama",
      rankingLabel: "Ranking",
      typeLabel: "Jenis",
      schoolNameLabel: "Sekolah",
      universities: [
        {
          name: "Universiti Diraja Inderaloka (UDIndra)",
          location: "Kuala Inderaloka",
          enrollment: "22,000",
          programs: "Perubatan, Undang-undang, Kejuruteraan, Sains",
          ranking: "QS #1 Inderaloka",
        },
        {
          name: "Universiti Sains Inderaloka (USI)",
          location: "Penang",
          enrollment: "27,000",
          programs: "Sains, Teknologi, Kejuruteraan, Perubatan",
          ranking: "QS #2 Inderaloka",
        },
        {
          name: "Universiti Teknologi Inderaloka (UTI)",
          location: "Johor Bahru",
          enrollment: "33,000",
          programs: "Kejuruteraan, Sains Komputer, Senibina",
          ranking: "QS #3 Inderaloka",
        },
        {
          name: "Universiti Kebangsaan Inderaloka (UKI)",
          location: "Bangi, Selangor",
          enrollment: "28,000",
          programs: "Sains, Sastera, Perubatan, Undang-undang",
          ranking: "QS #4 Inderaloka",
        },
        {
          name: "Universiti Sultan Abdul Aziz Shah (USAAS)",
          location: "Serdang, Selangor",
          enrollment: "25,000",
          programs: "Pertanian, Bioteknologi, Veterinar, Sains",
          ranking: "QS #5 Inderaloka",
        },
        {
          name: "Universiti Islam Antarabangsa Inderaloka (UIAI)",
          location: "Gombak, Selangor",
          enrollment: "18,000",
          programs: "Undang-undang Islam, Ekonomi, Pendidikan",
          ranking: "QS #6 Inderaloka",
        },
      ],
      secondarySchools: [
        {
          name: "SMK Victoria",
          location: "Kuala Inderaloka",
          enrollment: "2,100",
          type: "SMK",
        },
        {
          name: "SMK Aminuddin Baki",
          location: "Kuala Inderaloka",
          enrollment: "1,950",
          type: "SMK",
        },
        {
          name: "SMK Anderson",
          location: "Ipoh, Perak",
          enrollment: "1,800",
          type: "SMK",
        },
        {
          name: "SM Sains Selangor",
          location: "Kuala Inderaloka",
          enrollment: "900",
          type: "MRSM",
        },
        {
          name: "MRSM Bentong",
          location: "Bentong, Pahang",
          enrollment: "850",
          type: "MRSM",
        },
        {
          name: "Sekolah Alam Shah",
          location: "Cheras, Selangor",
          enrollment: "1,600",
          type: "SMK",
        },
      ],
      primarySchools: [
        {
          name: "SK Bukit Damansara",
          location: "Damansara, Inderaloka",
          enrollment: "1,200",
          type: "SK",
        },
        {
          name: "SK St. John",
          location: "Kuala Inderaloka",
          enrollment: "1,100",
          type: "SK",
        },
        {
          name: "SK Bangsar",
          location: "Bangsar, Inderaloka",
          enrollment: "980",
          type: "SK",
        },
        {
          name: "SK Convent Bukit Nanas",
          location: "Kuala Inderaloka",
          enrollment: "900",
          type: "SK",
        },
        {
          name: "SK Seri Petaling",
          location: "Petaling, Inderaloka",
          enrollment: "1,050",
          type: "SK",
        },
        {
          name: "SK Tengku Mahmud Paduka Raja",
          location: "George Town, Penang",
          enrollment: "820",
          type: "SK",
        },
      ],
    },
  },

  en: {
    officialBanner: "Official Portal of the State of Inderaloka",
    weatherAlert: {
      title: "ACTIVE WEATHER ALERT",
      description:
        "The National Meteorological Department has issued a severe storm warning for coastal regions. Please take necessary precautions.",
    },
    siteTitle: "InderaMaya.ir",
    siteDept: "State of inderaloka",
    siteDesc:
      "The official digital presence. Providing structured, dignified, and clear information to citizens and international visitors.",
    nav: {
      home: "Home",
      services: "Services",
      news: "News",
      about: "About",
      royal: "Royal Institution",
      directory: "Directory",
      government: "Government",
      contact: "Contact",
      tourism: "Tourism",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      search: "Search",
    },
    search: {
      placeholder: "Search site content...",
      noResults: "No results found.",
    },
    footer: {
      directory: "Directory",
      contact: "Contact",
      privacy: "Privacy Policy",
      accessibility: "Accessibility",
      terms: "Terms of Service",
      copyright: "State of Inderaloka. All rights reserved.",
    },
    home: {
      alertText:
        "WEATHER ALERT: National Meteorological Department has issued a severe storm warning for the coastal regions.",
      alertLink: "Read Full",
      heroTitle1: "The Homeland",
      heroItalic: "Upheld with",
      heroTitle2: "Dignity",
      heroDesc:
        "InderaMaya.ir serves as the official digital gateway for accessing government services, public information, and state institutions securely and efficiently.",
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
          image:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop",
        },
        {
          date: "20 May 2026",
          title: "Infrastructure Renewal Project Breaks Ground in Capital",
          dept: "Dept. of Transport",
          image:
            "https://images.unsplash.com/photo-1545143333-636a6619f707?q=80&w=400&auto=format&fit=crop",
        },
        {
          date: "15 May 2026",
          title: "Updated Travel Advisories Issued for International Citizens",
          dept: "Dept. of State",
          image:
            "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=400&auto=format&fit=crop",
        },
      ],
      statsLabel: "National Indicators",
      statsTitle: "Key National Statistics",
      stats: [
        { label: "Population", value: "778,561", sub: "Ranked 161st globally" },
        {
          label: "Total Area",
          value: "3,250.7 km²",
          sub: "Ranked 167th globally",
        },
        {
          label: "GDP per Capita",
          value: "RI 45,230",
          sub: "+4.2% Annual Growth",
        },
        {
          label: "Human Development Index",
          value: "0.825",
          sub: "Very High Development",
        },
        {
          label: "Administrative Districts",
          value: "Six",
          sub: "Regional governance hubs",
        },
      ],
    },
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
        {
          id: "healthcare",
          category: "Healthcare",
          title: "Healthcare Institutions",
          desc: "Directory of government hospitals and clinics nationwide.",
        },
        {
          id: "education",
          category: "Education",
          title: "Educational Institutions",
          desc: "List of public universities and national schools.",
        },
      ],
    },
    news: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "News",
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
          image:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "n2",
          date: "20 May 2026",
          category: "Infrastructure",
          title: "Infrastructure Renewal Project Breaks Ground in Capital",
          excerpt:
            "A major overhaul of the capital's public transit and road networks has officially begun, promising long-term efficiency improvements.",
          image:
            "https://images.unsplash.com/photo-1545143333-636a6619f707?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "n3",
          date: "15 May 2026",
          category: "Foreign Affairs",
          title: "Updated Travel Advisories Issued for International Citizens",
          excerpt:
            "The Department of State advises all citizens traveling abroad to review the newly updated safety protocols and visa requirements.",
          image:
            "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "n4",
          date: "10 May 2026",
          category: "Health",
          title: "National Health Initiative Reaches Milestone",
          excerpt:
            "Over 5 million citizens have now enrolled in the expanded healthcare coverage program launched earlier this year.",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "n5",
          date: "02 May 2026",
          category: "Education",
          title: "Grants Announced for Higher Education Research",
          excerpt:
            "The Ministry of Education has allocated new funding aimed at supporting advanced research in science and technology.",
          image:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    about: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "About the Government",
      pageTitle: "About the Republic",
      pageDesc:
        "Understanding the structure, mission, and leadership of our sovereign state.",
      exploreLabel: "Explore Inderaloka",
      exploreDesc:
        "Learn more about the history, laws, and identity of our nation.",
      subpages: [
        {
          href: "/about/history",
          title: "History",
          desc: "Inderaloka's journey from ancient sultanates to a modern sovereign nation.",
        },
        {
          href: "/about/constitution",
          title: "Constitution",
          desc: "The foundational document governing the rights and structure of the state.",
        },
        {
          href: "/about/national-symbols",
          title: "National Symbols",
          desc: "The flag, coat of arms, flowers, animals, and official symbols of Inderaloka.",
        },
        {
          href: "/about/administrative-division",
          title: "Administrative Division",
          desc: "The states and federal territories that form Inderaloka's administrative structure.",
        },
        {
          href: "/about/currency",
          title: "Currency",
          desc: "The Ringgit Inderaloka — history, denominations, and monetary policy.",
        },
      ],
      contentsLabel: "Contents",
      contents: {
        mission: "System of Government",
        structure: "Government Structure",
        leadership: "Current Administration",
      },
      missionTitle: "System of Government",
      missionStatement: "Unitary Parliamentary Constitutional Monarchy",
      missionBody:
        "The State is governed through a balanced constitutional framework that upholds parliamentary democracy, the rule of law, institutional accountability, and the sovereignty of the Crown. Every public institution, national policy, and administrative function exists to preserve stability, safeguard the welfare of the people, and ensure the orderly governance of the nation.",
      structureTitle: "Government Structure",
      branches: [
        {
          title: "The Sultan",
          desc: "The Head of State and symbol of constitutional sovereignty, exercising functions and powers in accordance with the Constitution and on the advice of the Prime Minister, the Cabinet, and the Royal Advisory Council, except in matters where discretionary powers are expressly vested in His Majesty under the Constitution, the Supreme Commander of the Armed Forces and the Head of the Islamic Religion for the State of Inderaloka.",
        },
        {
          title: "Executive Branch",
          desc: "Led by the Prime Minister, it is responsible for implementing government policies and administering the affairs of the state based on laws enacted by the Legislative Branch.",
        },
        {
          title: "Legislative Branch",
          desc: "A representative institution of the people responsible for drafting, debating, and enacting laws and state policies.",
        },
        {
          title: "Judicial Branch",
          desc: "An independent and impartial branch of government responsible for interpreting the law, adjudicating cases in the courts, and ensuring that justice is administered in accordance with the Constitution.",
        },
      ],
      leadershipTitle: "Current Administration",
      portraitPending: "Portrait\nPending",
      leaders: [
        {
          name: "HM Sultan Ibrahim",
          title: "Sultan of Inderaloka",
          role: "The Sultan",
        },
        {
          name: "YAB Dato’ Seri Anwar bin Ibrahim",
          title: "Prime Minister",
          role: "Executive",
        },
        {
          name: "YB Tan Sri Dato’ Sri Dr. Johari bin Abdul",
          title: "Speaker of the House of Representatives",
          role: "Legislative",
        },
        {
          name: "YAA Datuk Seri Utama Wan Ahmad Fayhsal bin Wan Salleh",
          title: "Chief Justice",
          role: "Judiciary",
        },
      ],
    },
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

    // About subpages
    history: {
      breadcrumbHome: "Home",
      breadcrumbParent: "About",
      breadcrumbCurrent: "History",
      pageTitle: "HISTORY OF THE INDERALOKA SULTANATE",
      pageDesc:
        "Pulau Chendera\n1746 – Present\n\nInderaloka is a sovereign state strategically located on Pulau Chendera. The nation's identity was formed through a combination of the heritage of the Kedah Sultanate and the Brunei Sultanate, as well as close diplomatic relations with the Kingdom of Siam. Beginning from a modest trading center, Inderaloka has developed into an independent political entity through the wisdom of its rulers in building international relations.",
      eras: [
        {
          year: "1746 – 1843",
          label: "FOUNDING",
          title: "The Origins of the Inderaloka Royal House",
          body: "Inderaloka's history began with the visionary vision of YAM Pengiran Anak Mahmud Iskandar, son of YAM Pengiran Anak Badaruddin and YAM Pengiran Anak Sauyah. He was the grandson of KDYMM Sultan Husin Kamaluddin, the 16th Sultan of Brunei and Gusti Kanjeng Ratu Maimun of the Mataram Kingdom. Although not of royal blood (gahara), Pengiran Anak Mahmud Iskandar's father was denied the right to the Brunei throne when ruling power shifted back to the lineage of Sultan Muhyiddin post-Brunei Civil War.\n\nRealizing this political reality, Pengiran Anak Mahmud Iskandar took the strategic decision to set his own course for the survival of his grandfather's heritage. His sibling, Pengiran Anak Untong, chose to depart for North Borneo and established a settlement in Dumpil Meruntum.\n\nInstead, Pengiran Anak Mahmud Iskandar had an intuition that spanned the western horizon. In 1746, he took the bold decision not to settle in Sabah, Johor, or Riau which were then in turmoil due to Bugis power struggles and Dutch monopoly. He instead sailed north towards Kedah, a renowned entrepôt port that served as a gateway for Indian and Middle Eastern traders. His vision was to build a new trading base that completed the Northern Melaka Straits route chain. His arrival in Kampung Agam, Pulau Chendera, was welcomed with full ceremony by local chiefs who regarded him as a kindred brother who would bring mutual prosperity.\n\nOpening of Sikanjang (1779)\nOn 21 March 1779, Pengiran Anak Mahmud Iskandar received the consent of KDYMM the 20th Sultan of Kedah, Sultan Abdullah Mukarram Shah (1778–1797) to explore and open a new settlement in northeast Pulau Chendera named Sikanjang. His position was further strengthened following his marriage to YTM Tunku Mariam binti Sultan Abdullah Mukarram Shah on 13 January 1791.\n\nRecognition & Establishment of the Dynasty (1787)\nOn 21 November 1787, the official appointment of Pengiran Anak Mahmud Iskandar as the first Penghulu of Sikanjang by the Sultan of Kedah marked the beginning of the Inderaloka Royal House lineage. Under his administration, Sikanjang emerged as a prosperous rice-growing area, the result of the restoration of an old canal irrigation system originally built during the reign of Sultan Dhiauddin Mukarram Shah (1661–1687).\n\nProclamation of Sovereignty (1843)\nThe pinnacle of sovereignty occurred on 1 October 1843 when Pengiran Abdul Rahman — son of Pengiran Anak Mahmud Iskandar and Tunku Mariam — was proclaimed by the King of Siam, King Nangklao (Rama III) as the Raja of Inderaloka with the full title; Duli Yang Maha Mulia Tuanku Raja Abdul Rahman. He was granted the official title Phraya Ritprawirat Suriyathamrach Wichit Suranat Phra Indra (Thai: รยร รยม ร ร ร), or simply Phya Indra. This event marked the beginning of Inderaloka's new status as a Siamese protected state, with the capital based in Sikanjang, and the sending of Bunga Emas tribute was also performed to the King of Siam.",
        },
        {
          year: "1821 – 1945",
          label: "COLONISATION",
          title: "The Crisis of Colonisation and Diplomacy",
          body: "Siamese Conquest of Kedah (1821)\nThe Siamese military attack on Kedah on 12 November 1821 changed the regional political landscape. As the British felt their position in Perak was threatened, the Burney Treaty was signed with recognition of Siamese claims over the northern states of Perak — Kedah, Kelantan, Terengganu — and denying the position of the Sultan of Kedah, Sultan Ahmad Tajuddin Halim Shah II, thus triggering the Whispering Enemy War (Perang Musuh Bisik). Pengiran Anak Mahmud Iskandar was also involved in the resistance of the war that broke out on 3 January 1830. He passed away on 30 April 1831, leaving a legacy of struggle to his heirs.\n\nAdministration of Pulau Chendera under Siam (1839)\nOn 27 March 1839, after the end of the war, King Rama III in Bangkok reorganized the administration of the Kedah Sultanate. Pulau Chendera was separated from Kedah's suzerainty and divided into six administrative districts: Temakah (Northwest), Long Sabak (North), Seri Santubong (Northeast), Rimbawan (Southeast), Ujong Meranti (Southwest), and Bagan Suri (South). The Siamese government appointed Yang Amat Mulia Prince Long Krok as Governor of Pulau Chendera, while Pengiran Abdul Rahman was appointed as Deputy Governor. The passing of Prince Long Krok on 6 July 1839 subsequently allowed Pengiran Abdul Rahman to be appointed as Governor of Pulau Chendera.\n\nBritish Influence & Protection (1909–1945)\nThrough the Anglo-Siamese Treaty of 1909, Inderaloka was officially placed under British protection. However, Raja Mizan Zainal Abidin and his successor, Raja Mahmud Shah, managed to delay the official acceptance of a British Adviser through diplomatic wisdom — arguing that Inderaloka's administration was already well-organized and had strong revenue resulting from the rapid growth of Bagan Suri Port. The British agreed to only station a Consular Agent in Sikanjang starting in 1910. However, the situation changed when the Great Depression hit in 1929. To obtain financial assistance and British banking protection, Raja Mahmud Shah was finally forced to yield to London's pressure. On 13 February 1930, the Consular Agent system was replaced with the appointment of A.H. Duke as the first British Adviser.\n\nJapanese and Siamese Occupation (1941–1945)\nInderaloka was occupied by Japanese forces starting 12 December 1941. On 18 October 1943, the Japanese administration handed over Inderaloka to the Siamese government as compensation for cooperation provided during the Japanese conquest of Malaya. During this difficult period, Raja Mahmud Shah took a cautious diplomatic approach to maintain national stability. The development project of Astaputra City was stalled, but basic infrastructure — road frameworks, main drainage, and early administrative buildings — remained in existence, facilitating the post-war recovery process.\n\nAfter the Japanese defeat on 15 September 1945, Siam handed back Inderaloka to the British on 2 September 1945. DYMM Tuanku Raja Mahmud al-Muqtafi Billah Shah successfully pressured the British to include a Special Clause in the treaty of 12 October 1945 guaranteeing Inderaloka's autonomy rights, before accepting the re-entry of a British Adviser, William Henderson, on 15 October 1945.",
        },
        {
          year: "1890 – 1963",
          label: "AWAKENING",
          title:
            "The Era of Modernisation and the Struggle for Self-Government",
          body: "Reign of Visionary Kings\nThe modernization era of Inderaloka witnessed rapid development under the reign of visionary kings:\n• Tuanku Raja Abdul Halim Mu'adzam al-Muqtasimu Billah Shah al-Haj (1890–1896): Strengthened diplomatic relations with Siam and Kedah and secured loan funds for infrastructure development.\n• Tuanku Raja Mizan Zainal Abidin al-Mutawakkil Alallah (1896–1913): Modernized infrastructure through the construction of roads, irrigation systems, and a new market in Ujong Meranti. He firmly defended Inderaloka's sovereignty against Kedah's claims through a Royal Seal Letter (Surat Tera Diraja) granted by King Chulalongkorn (1898), and declared Bagan Suri as a Duty-Free Port in 1905 — a move that transformed Inderaloka's economy from agrarian to entrepôt maritime trade.\n• Raja Mahmud Shah (1913–1965): Established the State Consultative Council in 1915, initiated the planning for the construction of Astaputra City on 6 August 1935, and led the nation through the challenges of the colonial era.\n\nNational Party of Inderaloka (1946)\nThe National Party of Inderaloka (PKI) was established on 11 May 1946 to demand the restoration of absolute power of the Raja and independence. When proposals for the formation of the Federation of Malaya 1948 and later Malaysia (1963) were raised, Inderaloka's business community and palace officials voiced great concern. Inderaloka, which had enjoyed prosperity as a Free Port since 1905, refused to join the federation for fear that Bagan Suri's tax-exempt status would be withdrawn.\n\nReferendum 1963\nThe pinnacle of this struggle was translated through the 1963 Referendum on 7 January. Official results saw 78% of Inderaloka's people rejecting entry into Malaysia, driven by the spirit to defend fiscal autonomy and control of local natural resources. International reactions were varied:\n• Malaysia: YTM Tunku Abdul Rahman Putra Al-Haj expressed disappointment but respected the mandate of the Inderaloka people.\n• Brunei: Gave full support in the spirit of brotherhood among sovereign Malay Sultanates.\n• Indonesia: President Sukarno welcomed the decision, describing it as a manifestation of the archipelago's awakening.\n• Thailand: Welcomed the existence of an independent and friendly buffer state.\n• Singapore: Saw Inderaloka as a successful model for the survival of a small nation.\n\nFollowing the rejection, through the Sikanjang Agreement 1963, Inderaloka remained a British Protected State — with British control only over foreign affairs and defense, while Inderaloka was given full autonomy in internal administration, finance, and customs.",
        },
        {
          year: "1976 – Present",
          label: "INDEPENDENCE",
          title: "Sovereign Inderaloka",
          body: "Discovery of Black Gold (1974)\nThe real turning point towards absolute independence occurred in 1974 when natural gas and petroleum were discovered off the coast of Temakah Province (Mergui Basin) in the Andaman Sea. This discovery drastically changed Inderaloka's fate. With the oil royalties to be obtained, DYMM Tuanku Raja Abdul Aziz was confident that Inderaloka was now capable of financing its own defense and diplomatic relations without depending on the British. Independence negotiations in London in early 1976 proceeded smoothly, making Inderaloka a fully sovereign nation, eight years earlier than the Sultanate of Brunei.\n\nProclamation of Independence — 23 July 1976\nOn Friday, 23 July 1976, exactly at 12:00 midnight, DYMM Tuanku Raja Abdul Aziz Shah al-Haj declared Inderaloka's independence at Jagat Raya Stadium, Astaputra City with shouts of 'Merdeka!' seven times, answered thunderously by the people, marking the birth of a new nation-state in the Malay World and Southeast Asia region. In that magnificent ceremony, he decreed the change of the head of state title from \"Raja\" to \"Sultan\" to symbolize absolute sovereignty on par with other Malay rulers. He was proclaimed as His Majesty Sultan Abdul Aziz al-Muhtadee Billah Shah al-Haj ibni al-Marhum Raja Mahmud al-Muqtafi Billah Shah, Sultan of Inderaloka and Yang di-Pertuan for the State and All its Protected Territories. Simultaneously, all royal titles were reorganized and expanded through the addition of several new royal titles reflecting the status and dignity of the nation that was now fully sovereign. The selection of Astaputra City as the location for the proclamation of independence emphasized its position as the new capital of Inderaloka, a symbol of sovereignty, modernity, and future aspirations. Sikanjang was maintained as a heritage town and royal historical center, housing old palaces, royal tombs, as well as the nation's customs and historical institutions.\n\nNational Economic Development\nSince achieving independence, Inderaloka has developed into a respected regional economic power. The discovery of petroleum in 1974, combined with the existing entrepôt port status, has driven Inderaloka to become a high-income nation. The government established Petroleum Inderaloka (PETROKA) to manage these natural resources efficiently. Inderaloka's membership in ASEAN in 1984, simultaneous with the entry of Brunei Darussalam, further strengthened regional diplomatic relations. The nation's main achievements include:\n• Diplomacy: Joined the United Nations (UN) in 1965 and ASEAN in 1984.\n• Dual-Engine Economy: Combining the maritime trade sector (Bagan Suri Port) and the energy sector (Oil & Gas), supported by tourism and modern agriculture.\n• Currency Stability: Introducing the strong Kencana Inderaloka currency, backed by gold reserves and national assets.\n• Heritage: Preserving Malay cultural heritage based on a progressive Constitutional Monarchy system.",
        },
      ],
      quoteLabel: "Proclamation of Independence",
      quote:
        "Inderaloka belongs to all of us — the land upon which blood was spilled, which must be safeguarded with every fibre of our being, nurtured with a spirit of unity that cannot be shaken by any force on earth.",
      quoteSource: "— Proclamation of Independence of Inderaloka, 23 July 1976",
    },
    constitution: {
      breadcrumbHome: "Home",
      breadcrumbParent: "About",
      breadcrumbCurrent: "Constitution",
      pageTitle: "Constitution of Inderaloka",
      pageDesc:
        "The supreme law of the land, the foundation of governance and guarantor of every citizen's fundamental rights.",
      statsLabel: "Constitutional Facts",
      stats: [
        { label: "Date of Effect", value: "31 August 1957" },
        { label: "Total Articles", value: "183 Articles" },
        { label: "Major Parts", value: "15 Parts" },
        { label: "Latest Amendment", value: "2024" },
      ],
      preambleTitle: "Constitutional Preamble",
      preamble:
        "WE, the people of Inderaloka, pledge to build a sovereign, just, and democratic nation, founded on the principles of Belief in God, a just and civilised humanity, the unity of Inderaloka, democracy guided by the wisdom of deliberation and representation, and social justice for all the people of Inderaloka.",
      partsTitle: "Parts of the Constitution",
      parts: [
        {
          title: "Part I — The States, Religion and Federal Law",
          desc: "Establishes the federation's boundaries, Islam as the official religion, and the position of the Malay language as the national language.",
        },
        {
          title: "Part II — Fundamental Liberties",
          desc: "Guarantees personal liberty, prohibition of slavery, protection from retrospective criminal laws, freedom of movement, speech, and religion for all citizens.",
        },
        {
          title: "Part III — Citizenship",
          desc: "Outlines conditions for citizenship by birth, registration, and naturalisation, and protection from arbitrary deprivation of citizenship.",
        },
        {
          title: "Part IV — The Federation",
          desc: "Establishes Parliament consisting of the Yang di-Pertuan Agong, Senate, and House of Representatives, and outlines legislative powers and procedures.",
        },
        {
          title: "Part V — The States",
          desc: "Sets out the governance framework for each state, including state legislative assemblies and appointment of Chief Ministers.",
        },
        {
          title: "Part VI — Relations Between the Federation and the States",
          desc: "Distributes legislative and executive powers between the federal and state governments through the Federal, State, and Concurrent Lists.",
        },
        {
          title: "Part IX — The Judiciary",
          desc: "Establishes an independent judiciary, the Federal Court, Court of Appeal, and merit-based appointment of judges.",
        },
        {
          title: "Part X — Public Services",
          desc: "Regulates the appointment, protection, and dismissal of civil servants through an independent Public Services Commission.",
        },
      ],
    },
    nationalSymbols: {
      breadcrumbHome: "Home",
      breadcrumbParent: "About",
      breadcrumbCurrent: "National Symbols",
      pageTitle: "National Symbols of Inderaloka",
      pageDesc:
        "Official symbols representing the identity, history, and noble values of the people of Inderaloka.",
      symbolsLabel: "Official Symbols",
      sinceLabel: "Designated",
      anthemLabel: "National Anthem",
      showLyricsLabel: "Show Lyrics",
      hideLyricsLabel: "Hide Lyrics",
      anthemLyrics: [
        "Blessed Homeland,",
        "Land of noble heritage,",
        "Beneath the grace of the Sovereign King,",
        "Firmly bound by faith and tradition.",
        "",
        "People of honour, grace, and virtue,",
        "Peaceful, prosperous, and serene,",
        "We pledge our loyal service,",
        "To our beloved homeland.",
        "",
        "Inderaloka...",
        "Forever the Blessed Homeland!",
      ],
      symbols: [
        {
          id: "flag",
          title: "National Flag — Jalur Inderaloka",
          since: "1957",
          desc: "Consisting of 14 alternating red and white stripes representing the 13 states and federal territory. A crescent moon and a 14-pointed gold star on a dark blue background symbolise Islam, unity, and constitutional monarchy.",
        },
        {
          id: "coa",
          title: "Coat of Arms",
          since: "1965",
          desc: "A shield adorned with symbols of the ancient royal sultanates. Two Malayan tigers as supporters and the national motto 'Unity Strengthens' inscribed below in Jawi and Roman script.",
        },
        {
          id: "flower",
          title: "National Flower — Hibiscus",
          since: "1960",
          desc: "Hibiscus rosa-sinensis with five vivid red petals. Each petal symbolises one of the principles of the National Creed. This flower blooms throughout Inderaloka year-round.",
        },
        {
          id: "animal",
          title: "National Animal — Malayan Tiger",
          since: "1974",
          desc: "Panthera tigris jacksoni, a symbol of bravery, strength, and agility. Featured on the coat of arms as supporters, representing the spirit and resilience of the people of Inderaloka.",
        },
        {
          id: "bird",
          title: "National Bird — Rhinoceros Hornbill",
          since: "1974",
          desc: "Rhinoplax vigil, known for its unique golden beak and casque. Symbolises the majesty of Inderaloka's natural heritage and the preservation of tropical rainforest legacy.",
        },
        {
          id: "fruit",
          title: "National Fruit — Durian",
          since: "2018",
          desc: "Durio zibethinus, known as the King of Fruits. Symbolises Inderaloka's tropical abundance, the uniqueness of local culture, and the people's pride in the nation's natural produce.",
        },
        {
          id: "language",
          title: "National Language — Malay",
          since: "1957",
          desc: "The Malay language is the official and national language of Inderaloka. It is used in all official matters, public education, and government administration throughout the country.",
        },
        {
          id: "anthem",
          title: "National Anthem — Indera Mulia",
          since: "1957",
          desc: "The national anthem of Inderaloka, sung at all official state occasions. Its lyrics praise the nation's glory and offer prayers for the safety, prosperity, and well-being of the people.",
        },
      ],
    },
    adminDivision: {
      breadcrumbHome: "Home",
      breadcrumbParent: "About",
      breadcrumbCurrent: "Administrative Division",
      pageTitle: "Administrative Division of Inderaloka",
      pageDesc:
        "Inderaloka comprises 13 sovereign states and 3 federal territories under the direct administration of the central government.",
      overviewTitle: "Overview",
      overviewBody:
        "Inderaloka is divided into 13 states, each with its own state government led by a Yang di-Pertua Negeri or Sultan appointed on a rotational basis. There are also three Federal Territories administered directly by the federal government through the Ministry of Federal Territories.",
      statesLabel: "States of Inderaloka",
      stateColumns: [
        "State",
        "Capital",
        "Area (km²)",
        "Population",
        "Head of State",
      ],
      states: [
        {
          name: "Selangor",
          capital: "Shah Alam",
          area: "7,956",
          population: "6.5 million",
          head: "Sultan Sharafuddin",
        },
        {
          name: "Perak",
          capital: "Ipoh",
          area: "21,005",
          population: "2.5 million",
          head: "Sultan Nazrin Shah",
        },
        {
          name: "Kelantan",
          capital: "Kota Bharu",
          area: "15,099",
          population: "1.9 million",
          head: "Sultan Muhammad V",
        },
        {
          name: "Pahang",
          capital: "Kuantan",
          area: "35,965",
          population: "1.7 million",
          head: "Sultan Abdullah",
        },
        {
          name: "Johor",
          capital: "Johor Bahru",
          area: "19,210",
          population: "3.8 million",
          head: "Sultan Ibrahim",
        },
        {
          name: "Terengganu",
          capital: "Kuala Terengganu",
          area: "12,955",
          population: "1.3 million",
          head: "Sultan Mizan",
        },
        {
          name: "Kedah",
          capital: "Alor Setar",
          area: "9,426",
          population: "2.2 million",
          head: "Sultan Sallehuddin",
        },
        {
          name: "Melaka",
          capital: "Melaka City",
          area: "1,664",
          population: "1.0 million",
          head: "TYT Mohd Ali",
        },
        {
          name: "Negeri Sembilan",
          capital: "Seremban",
          area: "6,645",
          population: "1.2 million",
          head: "Yang di-Pertuan Besar",
        },
        {
          name: "Perlis",
          capital: "Kangar",
          area: "821",
          population: "250,000",
          head: "Raja Syed Faizuddin",
        },
        {
          name: "Penang",
          capital: "George Town",
          area: "1,048",
          population: "1.8 million",
          head: "TYT Saifuddin",
        },
        {
          name: "Sabah",
          capital: "Kota Kinabalu",
          area: "73,619",
          population: "3.9 million",
          head: "TYT Juhar Mahiruddin",
        },
        {
          name: "Sarawak",
          capital: "Kuching",
          area: "124,450",
          population: "2.8 million",
          head: "TYT Taib Mahmud",
        },
      ],
      territoriesLabel: "Federal Territories",
      territoriesColumns: ["Territory", "Area (km²)", "Population", "Type"],
      territories: [
        {
          name: "Federal Territory of Inderaloka",
          area: "243",
          population: "1.9 million",
          type: "National Capital",
        },
        {
          name: "Federal Territory of Labuan",
          area: "91",
          population: "100,000",
          type: "International Financial Centre",
        },
        {
          name: "Federal Territory of Putrajaya",
          area: "49",
          population: "100,000",
          type: "Federal Administrative Centre",
        },
      ],
    },
    currency: {
      breadcrumbHome: "Home",
      breadcrumbParent: "About",
      breadcrumbCurrent: "Currency",
      pageTitle: "Currency of Inderaloka",
      pageDesc:
        "The Ringgit Inderaloka (RI) — the official currency underpinning the nation's financial system.",
      overviewTitle: "Ringgit Inderaloka Overview",
      code: "RI",
      fullName: "Ringgit Inderaloka",
      symbol: "RI",
      centralBankLabel: "Central Bank",
      centralBank: "Bank Negara Inderaloka",
      centralBankDesc:
        "Bank Negara Inderaloka (BNI) was established in 1959 as the nation's central bank. BNI is responsible for ensuring price stability, managing international reserves, safeguarding the integrity of the financial system, and issuing legal tender banknotes and coins.",
      exchangeLabel: "Exchange Rates (Indicative)",
      exchangeRates: [
        { currency: "USD (US Dollar)", rate: "RI 4.20" },
        { currency: "GBP (Pound Sterling)", rate: "RI 5.30" },
        { currency: "EUR (Euro)", rate: "RI 4.55" },
        { currency: "SGD (Singapore Dollar)", rate: "RI 3.10" },
      ],
      banknotesTitle: "Banknotes",
      banknotes: [
        {
          value: "RI 1",
          color: "Blue",
          desc: "Features the Coat of Arms and Parliament of Inderaloka.",
        },
        {
          value: "RI 5",
          color: "Green",
          desc: "Features the Hibiscus and traditional Malay songket patterns.",
        },
        {
          value: "RI 10",
          color: "Red",
          desc: "Features the Indera Tower and local handicraft motifs.",
        },
        {
          value: "RI 20",
          color: "Brown",
          desc: "Features the National Palace and mountain landscapes.",
        },
        {
          value: "RI 50",
          color: "Dark Green",
          desc: "Features the iconic Indera Bridge and city skyline panorama.",
        },
        {
          value: "RI 100",
          color: "Purple",
          desc: "Features the Yang di-Pertuan Agong and royal insignia.",
        },
      ],
      coinsTitle: "Coins",
      coins: [
        {
          value: "5 Sen",
          material: "Nickel-Clad Steel",
          desc: "Depicts the Hibiscus flower.",
        },
        {
          value: "10 Sen",
          material: "Nickel-Clad Steel",
          desc: "Depicts the Rhinoceros Hornbill.",
        },
        {
          value: "20 Sen",
          material: "Nickel-Clad Steel",
          desc: "Depicts the Malayan Tiger.",
        },
        {
          value: "50 Sen",
          material: "Bimetallic Gold & Silver",
          desc: "Depicts the Coat of Arms.",
        },
      ],
      historyTitle: "Currency History",
      historyEvents: [
        {
          year: "1957",
          event:
            "Ringgit Inderaloka introduced concurrent with national independence.",
        },
        {
          year: "1967",
          event:
            "Ringgit separated from the Singapore Dollar and Brunei Dollar.",
        },
        {
          year: "1997",
          event:
            "Asian financial crisis — Ringgit pegged at a fixed rate against USD.",
        },
        {
          year: "2005",
          event:
            "USD peg abolished; Ringgit allowed to float under managed system.",
        },
        {
          year: "2024",
          event:
            "Ringgit strengthened to RI 4.20 against 1 USD amid robust economic growth.",
        },
      ],
    },
    tourism: {
      breadcrumbHome: "Home",
      breadcrumbParent: "About",
      breadcrumbCurrent: "Tourism",
      pageTitle: "Wonders of Inderaloka",
      pageDesc:
        "Discover rich cultural heritage, breathtaking natural beauty, and futuristic modernity in the jewel of Southeast Asia.",
      exploreLabel: "Explore Destinations",
      cultureLabel: "Cultural Heritage",
      viewDetails: "View Details",
      ctaTitle: "Start Planning Your Journey",
      ctaDesc:
        "Experience the magic of Inderaloka for yourself. We are here to help you plan an unforgettable experience.",
      ctaButton1: "Download Brochure",
      ctaButton2: "Contact Travel Agent",
      destinations: [
        {
          title: "Indera City",
          desc: "A dynamic capital where modern skyscrapers stand majestically beside preserved colonial buildings.",
          image:
            "https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=800",
        },
        {
          title: "Permata Island",
          desc: "A tropical paradise with crystal-clear waters, stunning coral reefs, and serene white-sand beaches.",
          image:
            "https://images.unsplash.com/photo-1544945582-3b466d874eac?q=80&w=800",
        },
        {
          title: "Indra Rainforest",
          desc: "One of the world's oldest ecosystems, offering unforgettable eco-tourism adventures.",
          image:
            "https://images.unsplash.com/photo-1588336332073-489bd69527df?q=80&w=800",
        },
      ],
      culturalSections: [
        {
          title: "Batik & Songket Art",
          desc: "The refined art of weaving and fabric painting that symbolizes the identity and high aesthetics of the Malay people.",
        },
        {
          title: "Traditional Arts",
          desc: "From the lively Zapin Dance to the melodious sounds of Gamelan, our performing arts heritage continues to thrive.",
        },
        {
          title: "Inderaloka Gastronomy",
          desc: "Experience a unique diversity of flavors, a blend of traditional spices that captivates the world's palate.",
        },
      ],
      cards: [
        {
          title: "Iconic Landmarks",
          desc: "From the towering Indera Tower to the historic bridges connecting past and future.",
          image:
            "https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Natural Wonders",
          desc: "Untouched tropical rainforests, pristine beaches, and breathtaking biodiversity.",
          image:
            "https://images.unsplash.com/photo-1506929197327-0bb074513797?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Cultural Heritage",
          desc: "Witness traditional performances, cultural dances, and handicrafts passed down through generations.",
          image:
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Food Paradise",
          desc: "Enjoy the deliciousness of Nasi Lemak Indera, Satay, and a variety of mouth-watering street foods.",
          image:
            "https://images.unsplash.com/photo-1562607349-590ca2f99fc3?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Traditional Attire",
          desc: "The elegance of Baju Kurung and Baju Melayu symbolizing the identity and grace of the Inderaloka people.",
          image:
            "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
        },
        {
          title: "Celebrations & Festivals",
          desc: "A vibrant variety of festive celebrations, reflecting the harmony and unity of the people.",
          image:
            "https://images.unsplash.com/photo-1533282960533-51328aa49826?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },

    // Royal Institution
    royal: {
      breadcrumbHome: "Home",
      breadcrumbParent: "Royal Institution",
      landing: {
        banner: "His Royal Highness Seri Paduka Baginda Yang di-Pertuan Agong",
        pageTitle: "Royal Institution of Inderaloka",
        pageDesc:
          "The Royal Institution is the heartbeat of Inderaloka's constitutional monarchy — a symbol of unity, ancient heritage, and the nation's enduring sovereignty.",
        subpages: [
          {
            href: "/royal/his-majesty",
            title: "His Majesty The King",
            desc: "Official profile of the 16th Yang di-Pertuan Agong of Inderaloka.",
          },
          {
            href: "/royal/council-of-regency",
            title: "Council of Regency",
            desc: "The constitutional body that governs during the King's absence.",
          },
          {
            href: "/royal/royal-family",
            title: "The Royal Family",
            desc: "Members of the Royal Family and their roles in national life.",
          },
          {
            href: "/royal/orders-and-decorations",
            title: "Orders & Decorations",
            desc: "The highest royal honours bestowed upon distinguished individuals.",
          },
          {
            href: "/royal/terasul",
            title: "Terasul & Royal Customs",
            desc: "The system of royal honorifics and palace title protocols of Inderaloka.",
          },
          {
            href: "/royal/regalia",
            title: "Royal Regalia",
            desc: "The magnificent heritage of royal regalia symbolising the sovereignty of the Sultan.",
          },
          {
            href: "/royal/royal-statement",
            title: "Royal Statement",
            desc: "Official addresses and statements from His Majesty to the nation.",
          },
          {
            href: "/royal/palaces",
            title: "Royal Palaces",
            desc: "Official residences and historic palaces of the Yang di-Pertuan Agong.",
          },
          {
            href: "/royal/royal-advisory-council",
            title: "Royal Advisory Council",
            desc: "The highest advisory body to the Yang di-Pertuan Agong on matters of national policy.",
          },
          {
            href: "/royal/palace-courtiers",
            title: "Palace Courtiers",
            desc: "Officers of the Royal Household responsible for protocol, ceremony, and palace administration.",
          },
        ],
      },
      hisMajesty: {
        breadcrumbCurrent: "His Majesty The King",
        pageTitle: "His Majesty Seri Paduka Baginda Yang di-Pertuan Agong XVI",
        pageDesc: "Tuanku Ibrahim Al-Amin Ibni Al-Marhum Sultan Mahmud Shah",
        portraitLabel: "Official Portrait\nHis Majesty",
        officialTitleLabel: "Official Title",
        officialTitle:
          "Seri Paduka Baginda Yang di-Pertuan Agong XVI of Inderaloka",
        bornLabel: "Date of Birth",
        born: "15 January 1970",
        accessionLabel: "Date of Accession",
        accession: "31 January 2024",
        educationLabel: "Education",
        education:
          "Royal Military College, Inderaloka; Royal Military Academy Sandhurst, United Kingdom; University of Oxford (Philosophy, Politics & Economics)",
        mottoLabel: "Royal Motto",
        motto: "Responsible, Faithful, Determined",
        roleTitle: "Constitutional Role",
        roleBody:
          "The Yang di-Pertuan Agong is the Supreme Head of State and Supreme Commander of the Armed Forces of Inderaloka. He acts on the advice of the Cabinet in exercising executive functions. His constitutional powers include appointing the Prime Minister, assenting to bills passed by Parliament, declaring a state of emergency, and being the Head of Islam for the Federal Territories.",
        dutiesTitle: "Royal Duties",
        duties: [
          "Approving the appointment of the Prime Minister and Cabinet members",
          "Opening each session of Parliament with the Royal Address",
          "Assenting to bills passed by Parliament",
          "Serving as Head of Islam for the Federal Territories",
          "Receiving letters of credence from foreign ambassadors",
          "Conferring honours and medals on the Royal Birthday",
          "Granting pardons and reprieve from sentences",
        ],
        timelineTitle: "Historical Timeline of Yang di-Pertuan Agong",
        biographyLabel: "Biography",
        achievementsLabel: "State Achievements",
        consortLabel: "Queen Consort",
        reignLabel: "Reign Period",
        standardLabel: "Royal Standard",
        formerMonarchs: [
          {
            order: "XV",
            name: "Tuanku Muhammad Al-Sultan",
            reign: "2019 – 2024",
            portrait: "Portrait XV",
            standard: "Royal Standard XV",
            bio: "His Majesty's reign was marked by political stability and post-pandemic economic recovery. He was highly active in promoting inter-ethnic harmony and national integration.",
            achievements: [
              "National Economic Recovery Plan",
              "Digital Constitutional Empowerment",
            ],
            consort: "Sultanah Nurul Ain",
            heir: "Tengku Hassanal",
            events: ["World Expo 2020", "65th National Day Celebration"],
            honours: ["D.K.", "D.M.N.", "S.M.N.", "S.S.M.P."],
          },
          {
            order: "XIV",
            name: "Tuanku Abdul Rahman II",
            reign: "2014 – 2019",
            portrait: "Portrait XIV",
            standard: "Royal Standard XIV",
            bio: "A scholar and patron of the arts, His Majesty led the international transformation of Inderaloka's cultural presence.",
            achievements: [
              "Establishment of the National Heritage Archive",
              "Global Education Initiative",
            ],
            consort: "Sultanah Haminah",
            heir: "Tengku Ahmad",
            events: ["Visit Inderaloka Year 2014", "ASEAN Summit 2017"],
            honours: ["D.K.", "D.K.M.", "D.M.N.", "P.S.M."],
          },
        ],
      },
      councilOfRegency: {
        breadcrumbCurrent: "Council of Regency",
        pageTitle: "Council of Regency",
        pageDesc:
          "The constitutional body that exercises the powers of the Yang di-Pertuan Agong during His temporary absence or incapacity.",
        overviewTitle: "Functions and Powers",
        overviewBody:
          "The Council of Regency is established under Article 40 of the Constitution of Inderaloka. The Council governs when the Yang di-Pertuan Agong passes away, is unable to perform duties, or is absent from the country for more than 15 days without appointing a Regent. All powers of the Yang di-Pertuan Agong may be exercised by the Council during such periods.",
        basisLabel: "Constitutional Basis",
        basis:
          "Article 40 and the Fourth Schedule, Federal Constitution of Inderaloka",
        membersTitle: "Members of the Council",
        members: [
          {
            name: "Tuanku Ahmad Faizal",
            title: "President of the Council of Regency",
            role: "Chairman",
          },
          {
            name: "Tuanku Faizul Hakim",
            title: "Crown Prince of Inderaloka",
            role: "Member",
          },
          {
            name: "YAB Dato' Sri Haji Anwar Ibrahim",
            title: "Prime Minister of Inderaloka",
            role: "Member",
          },
        ],
        whenTitle: "When the Council Convenes",
        whenItems: [
          "Upon the demise of the Yang di-Pertuan Agong until the accession of a new King",
          "When the Yang di-Pertuan Agong is unable to perform his duties",
          "When the Yang di-Pertuan Agong is absent from the country for more than 15 days",
        ],
      },
      royalFamily: {
        breadcrumbCurrent: "The Royal Family",
        pageTitle: "The Royal Family of Inderaloka",
        pageDesc:
          "Members of the Royal Family who play significant roles in public life, national welfare, and state ceremonies.",
        members: [
          {
            role: "Yang di-Pertuan Agong",
            name: "Tuanku Ibrahim Al-Amin",
            title: "Yang di-Pertuan Agong XVI",
            desc: "Supreme Head of State and highest custodian of the Constitution of Inderaloka.",
          },
          {
            role: "Raja Permaisuri Agong",
            name: "Tunku Azizah Aminah Maimunah",
            title: "Queen Consort",
            desc: "Actively involved in charitable work, women's education, and community development.",
          },
          {
            role: "Crown Prince",
            name: "Tuanku Ismail Idris",
            title: "Crown Prince of Inderaloka",
            desc: "Heir to the throne undergoing leadership training at home and abroad.",
          },
          {
            role: "Royal Princess",
            name: "Tengku Puteri Indah",
            title: "Royal Princess",
            desc: "Actively involved in youth development, arts and culture, and social entrepreneurship programmes.",
          },
          {
            role: "Royal Prince",
            name: "Tengku Putera Azim",
            title: "Royal Prince",
            desc: "Serving as a senior officer in the Armed Forces of Inderaloka.",
          },
          {
            role: "Queen Mother",
            name: "Tunku Embong Fatimah",
            title: "Queen Mother",
            desc: "Respected Queen Mother, actively engaged in charitable work and women's development.",
          },
        ],
        detailedMembers: [
          {
            name: "Tuanku Ibrahim Al-Amin",
            title:
              "His Royal Highness Seri Paduka Baginda Yang di-Pertuan Agong XVI",
            role: "Supreme Head of State",
            portrait: "Portrait Ibrahim",
            bio: "Installed in 2024, Tuanku Ibrahim is a symbol of unity and sovereignty. He has an extensive military background and education in political economy from the United Kingdom.",
            education:
              "Royal Military Academy Sandhurst, UK; University of Oxford (PPE)",
            military: "Field Marshal of the Armed Forces of Inderaloka",
            patronages: ["Inderaloka Welfare Foundation", "Royal Arts Council"],
            duties: [
              "Opening Parliament sessions",
              "Head of Islamic Religion",
              "Supreme Commander of the Armed Forces",
            ],
            honours: ["D.K.", "D.M.N.", "S.M.N.", "S.P.M.J."],
          },
          {
            name: "Tunku Azizah Aminah Maimunah",
            title:
              "Her Royal Highness Seri Paduka Baginda Raja Permaisuri Agong",
            role: "Queen Consort",
            portrait: "Portrait Azizah",
            bio: "Known for Her tireless efforts in promoting traditional handicrafts and Inderaloka's culinary arts on the global stage.",
            education: "National University of Inderaloka (Arts)",
            military: "Colonel-in-Chief of the Royal Service Corps",
            patronages: [
              "Girl Guides Association",
              "Inderaloka Fertility Foundation",
            ],
            duties: [
              "Patron of national welfare activities",
              "Representing the nation in humanitarian forums",
            ],
            honours: ["D.K.", "D.M.N.", "S.S.A.P."],
          },
        ],
        householdDirectoryTitle: "Royal Household Directory",
        householdDirectory: [
          {
            office: "Office of the Private Secretary",
            head: "Dato' Sri Mohd Zakri",
            contact: "+603-2384 1100",
          },
          {
            office: "Palace Protocol Department",
            head: "Dato' Haji Abdullah",
            contact: "+603-2384 1200",
          },
          {
            office: "Religious Division",
            head: "Datuk Dr. Ahmad Azam",
            contact: "+603-2384 1300",
          },
        ],
        lineOfSuccessionTitle: "Line of Succession",
        successionList: [
          {
            position: "1",
            name: "Tuanku Ismail Idris",
            title: "Crown Prince of Inderaloka",
          },
          { position: "2", name: "Tengku Putera Azim", title: "Royal Prince" },
          {
            position: "3",
            name: "Tengku Putera Shah",
            title: "Tengku Aris Bendahara",
          },
        ],
      },
      orders: {
        breadcrumbCurrent: "Orders & Decorations",
        pageTitle: "Guide to Orders, Decorations and Medals",
        pageDesc:
          "The official guide for the order of precedence, status, award criteria, titles, and wearing of the orders, decorations, medals and commissions of the State of Inderaloka.",
        intro:
          "All honours are subject to the decree and consent of His Majesty the Sultan of Inderaloka, national customs, the Constitution of Inderaloka, and current regulations.",
        purposeTitle: "1. Purpose",
        purposeBody:
          "This guide establishes the order, status, award criteria, titles, abbreviations, wearing, and general provisions for the orders, decorations, medals, and commissions of the State of Inderaloka.",
        generalProvisionsTitle: "2. General Provisions",
        generalProvisions: [
          {
            title: "2.1 Awarding Power",
            desc: "All orders, decorations, medals, and commissions of the State of Inderaloka are conferred at the decree and consent of His Majesty the Sultan of Inderaloka.\n\nInvestitures may be held in conjunction with the Sultan's Birthday, state ceremonies, coronations, ruling jubilees, special state occasions, or at any time as approved by the Sultan.",
          },
          {
            title: "2.2 Stripping, Cancellation and Suspension",
            desc: "An order, decoration, medal, or commission may be stripped, cancelled, or suspended at the Sultan's decree when the recipient:\n1. commits treason against the Throne;\n2. is convicted of a serious criminal offence;\n3. violates the oath of loyalty;\n4. acts in a manner that tarnishes the dignity of the honour; or\n5. performs any act which in the Sultan's judgement is inconsistent with the honour concerned.",
          },
          {
            title: "2.3 Posthumous Awards",
            desc: "An order, decoration, or medal may be awarded posthumously to an individual who has passed away if their service, sacrifice, or dedication to the King and State is judged extraordinary and worthy of being immortalised in the national honour record.",
          },
          {
            title: "2.4 Spousal Titles",
            desc: "The wife of a male recipient who is awarded a specific title may use the corresponding spousal title as established for that order. The husband of a female recipient does not carry a spousal title.",
          },
          {
            title: "2.5 Wearing Order",
            desc: "The wearing of orders, decorations, and medals shall follow the order of precedence established in this guide or any wearing regulations approved by the Sultan.",
          },
        ],
        parts: [
          {
            id: "part1",
            title: "PART I: HIGHEST DECORATION OF HONOUR",
            items: [
              {
                name: "3. Bintang Mahkota Pejuang Pertiwi (B.M.P.P.)",
                status: "Highest Bravery Award",
                desc: "Awarded to individuals who have displayed extraordinary courage, distinguished heroism, or the highest self-sacrifice to defend the lives of the people, national dignity, sovereignty of the Throne, and the security of the State of Inderaloka.",
                details: [
                  { label: "Title", value: "Pejuang Pertiwi [Name]" },
                  {
                    label: "Ribbon",
                    value:
                      "Blood Red with a vertical Black stripe in the centre",
                  },
                  {
                    label: "Allowance",
                    value:
                      "₭10,000 monthly (Living) / ₭100,000 lump sum (Posthumous Next-of-Kin)",
                  },
                ],
              },
            ],
          },
          {
            id: "part2",
            title: "PART II: ROYAL FAMILY ORDERS",
            items: [
              {
                name: "4. Darjah Kerabat Inderaloka Yang Agung",
                status: "Highest Royal Family Order",
                desc: "The Sultan of Inderaloka is the Patron of the Order and the supreme authority for all investitures of this order.",
                ranks: [
                  {
                    name: "First Class (D.K. I)",
                    eligible:
                      "The Sultan, Queen, Crown Prince, Heir Presumptive and Consorts",
                    title: "No Title",
                  },
                  {
                    name: "Second Class (D.K. II)",
                    eligible:
                      "Inderaloka Royal Family, foreign Ruling Monarchs, and foreign royalty",
                    title: "No Title",
                  },
                ],
              },
            ],
          },
          {
            id: "part3",
            title: "PART III: CIVIL ORDERS",
            items: [
              {
                name: "5. Darjah Cendera Alam Yang Terulung",
                status: "Highest Civil Order",
                desc: "Conferred upon statesmen, state dignitaries, legal figures, public service figures, academic figures, economic figures, or individuals who have rendered extraordinary and lasting service.",
                ribbon:
                  "Ivory White with a Royal Yellow centre stripe and Blood Red edge stripes",
                ranks: [
                  {
                    name: "Seri Maharaja Cendera Alam (S.M.C.A.)",
                    title: "Tun (Wife: Toh Puan)",
                    limit: "25 persons",
                  },
                  {
                    name: "Panglima Seri Cendera Alam (P.S.C.A.)",
                    title: "Tan Sri (Wife: Puan Sri)",
                    limit: "75 persons",
                  },
                ],
              },
              {
                name: "6. Darjah Cura Si Gilang Sari Yang Maha Utama",
                status: "Primary Civil Order",
                desc: "Conferred upon figures who achieve high excellence in their respective fields and bring renown to the nation.",
                ribbon: "Royal Yellow with a Blood Red centre stripe",
                ranks: [
                  {
                    name: "Seri Utama Cura Si Gilang Sari (S.C.G.S.)",
                    title: "Dato’ Seri Utama (Wife: Datin Seri Utama)",
                    limit: "35 persons",
                  },
                  {
                    name: "Panglima Cura Si Gilang Sari (P.C.G.S.)",
                    title: "Dato’ Utama (Wife: Datin Utama)",
                    limit: "75 persons",
                  },
                  {
                    name: "Ahli Cura Si Gilang Sari (A.C.G.S.)",
                    title: "No Title",
                    limit: "No Limit",
                  },
                ],
              },
              {
                name: "7. Darjah Setia Mangku Negara Yang Amat Terpuji",
                status: "Primary Public Service Recognition",
                desc: "Conferred as primary recognition for national public service, administrative figures, community figures, and authoritative corporate leaders.",
                ribbon: "Dark Blue with Yellow edge stripes",
                ranks: [
                  {
                    name: "Seri Setia Mangku Negara (S.S.M.N.)",
                    title: "Dato’ Seri Setia (Wife: Datin Seri Setia)",
                    limit: "150 persons",
                  },
                  {
                    name: "Panglima Setia Mangku Negara (P.S.M.N.)",
                    title: "Dato’ Setia (Wife: Datin Setia)",
                    limit: "200 persons",
                  },
                  {
                    name: "Johan Setia Mangku Negara (J.S.M.N.)",
                    title: "No Title",
                    limit: "450 persons",
                  },
                  {
                    name: "Kesatria Setia Mangku Negara (K.S.M.N.)",
                    title: "No Title",
                    limit: "800 persons",
                  },
                  {
                    name: "Ahli Setia Mangku Negara (A.S.M.N.)",
                    title: "No Title",
                    limit: "200 persons annually",
                  },
                ],
              },
              {
                name: "8. Darjah Bahaduri Paduka Inderawangsa Yang Amat Luhur",
                status: "Community Service Award",
                desc: "Conferred upon individuals who have served in preserving peace, unity, community welfare, and humanitarian missions.",
                ribbon: "Royal Purple with Silver edge stripes",
                ranks: [
                  {
                    name: "Seri Bahaduri Paduka Inderawangsa (S.B.P.I.)",
                    title: "Dato’ Seri (Wife: Datin Seri)",
                    limit: "50 persons",
                  },
                  {
                    name: "Panglima Bahaduri Paduka Inderawangsa (P.B.P.I.)",
                    title: "Dato’ (Wife: Datin)",
                    limit: "150 persons",
                  },
                  {
                    name: "Johan Bahaduri Paduka Inderawangsa (J.B.P.I.)",
                    title: "No Title",
                    limit: "450 persons",
                  },
                  {
                    name: "Ahli Bahaduri Paduka Inderawangsa (A.B.P.I.)",
                    title: "No Title",
                    limit: "200 persons annually",
                  },
                ],
              },
            ],
          },
          {
            id: "part4",
            title: "PART IV: UNIFORMED SERVICES ORDERS",
            items: [
              {
                name: "9. Darjah Pahlawan Angkatan Tentera Inderaloka",
                status: "Armed Forces Award",
                desc: "Conferred upon officers and members of the Inderaloka Armed Forces in recognition of leadership, bravery, and excellent service.",
                ribbon: "Maroon with a Gold centre stripe",
                ranks: [
                  {
                    name: "Seri Pahlawan Angkatan Tentera (S.P.A.T.)",
                    title: "Dato’ Seri Pahlawan (Wife: Datin Seri Pahlawan)",
                    limit: "30 persons",
                  },
                  {
                    name: "Pahlawan Angkatan Tentera (P.A.T.)",
                    title: "Dato’ Pahlawan (Wife: Datin Pahlawan)",
                    limit: "150 persons",
                  },
                  {
                    name: "Hulubalang Angkatan Tentera (H.A.T.)",
                    title: "No Title",
                    limit: "No Limit",
                  },
                ],
              },
              {
                name: "10. Darjah Perwira Pasukan Polis Inderaloka",
                status: "Police Force Award",
                desc: "Conferred upon officers and members of the Inderaloka Police Force in recognition of service, bravery, integrity, and excellence.",
                ribbon: "Royal Blue with a Silver centre stripe",
                ranks: [
                  {
                    name: "Seri Perwira Pasukan Polis (S.P.P.P.)",
                    title: "Dato’ Seri Wira (Wife: Datin Seri Wira)",
                    limit: "30 persons",
                  },
                  {
                    name: "Perwira Pasukan Polis (P.P.P.)",
                    title: "Dato’ Wira (Wife: Datin Wira)",
                    limit: "150 persons",
                  },
                  {
                    name: "Hulubalang Pasukan Polis (H.P.P.)",
                    title: "No Title",
                    limit: "No Limit",
                  },
                ],
              },
            ],
          },
          {
            id: "part5",
            title: "PART V: BRAVERY MEDALS",
            items: [
              {
                name: "11. Pingat Gagah Perkasa",
                status: "Civil & Uniformed Bravery Medal",
                desc: "Conferred upon individuals who display extraordinary courage in life-threatening situations.",
                ranks: [
                  {
                    name: "Pingat Gagah Perkasa Emas (P.G.P.E.)",
                    reward: "₭7,000 monthly / ₭70,000 (Posthumous)",
                  },
                  {
                    name: "Pingat Gagah Perkasa Perak (P.G.P.P.)",
                    reward: "₭5,000 monthly / ₭50,000 (Posthumous)",
                  },
                  {
                    name: "Pingat Gagah Perkasa Gangsa (P.G.P.G.)",
                    reward: "₭3,000 monthly / ₭30,000 (Posthumous)",
                  },
                ],
              },
            ],
          },
          {
            id: "part6",
            title: "PART VI: SERVICE AND CONDUCT MEDALS",
            items: [
              {
                name: "12. Pingat Khidmat Cemerlang (P.K.C.)",
                desc: "Recognition of excellent work performance, continuous dedication, and contributions beyond the call of duty.",
              },
              {
                name: "13. Pingat Jasa Kebaktian (P.J.K.)",
                desc: "Recognition of long (min. 18 years), clean, and continuous service to the King and State.",
              },
              {
                name: "14. Pingat Budi Teladan (P.B.T.)",
                desc: "Conferred upon individuals who display highly commendable conduct, trustworthiness, integrity, and serve as role models.",
              },
            ],
          },
          {
            id: "part7",
            title: "PART VII: CAMPAIGN AND COMMEMORATIVE MEDALS",
            items: [
              {
                name: "15. Pingat Kedaulatan Wilayah (P.K.W.)",
                desc: "Campaign medal to recognise service (min. 30 days) in designated operational zones defending border sovereignty.",
              },
              {
                name: "16. Pingat Laskar Angkatan Inderaloka",
                desc: "ATI service identity medal for members who have completed basic training and served min. 10 years.",
                categories: [
                  { label: "Army", value: "Pingat Laskar Buana (P.L.B.)" },
                  { label: "Navy", value: "Pingat Laskar Samudera (P.L.S.)" },
                  {
                    label: "Air Force",
                    value: "Pingat Laskar Jumantara (P.L.J.)",
                  },
                ],
              },
              {
                name: "17. Pingat Pertabalan Sultan Abdul Aziz Shah",
                desc: "Conferred in conjunction with the Installation Ceremony of HM Sultan Abdul Aziz Shah. Variants: Gold & Silver.",
              },
              {
                name: "18. Pingat Jubli Perak Sultan Abdul Aziz Shah",
                desc: "Conferred in conjunction with the 25th anniversary of the reign of HM Sultan Abdul Aziz Shah.",
              },
              {
                name: "19. Pingat Pertabalan Sultan Ibrahim Shah",
                desc: "Conferred in conjunction with the Installation Ceremony of HM Sultan Ibrahim Shah. Variants: Gold & Silver.",
              },
            ],
          },
          {
            id: "part8",
            title: "PART VIII: COMMENDATIONS AND COMMISSIONS",
            items: [
              {
                name: "20. Kepujian Perbuatan Berani (K.P.B.)",
                desc: "Official recognition for individuals who display bravery but have not reached the level of a bravery medal. Recipients are awarded the Golden Barking Deer Leaf (Daun Kijang Emas) badge.",
              },
              {
                name: "21. Jaksa Pendamai (J.P.)",
                desc: "Honorary commission granting certain civil powers to assist in legal and community affairs.",
              },
            ],
          },
        ],
        precedenceTitle: "PART IX: ORDER OF PRECEDENCE OF INDERALOKA AWARDS",
        precedenceHeaders: ["No.", "Award / Rank", "Abbr.", "Title"],
        precedenceItems: [
          [
            "1",
            "Bintang Mahkota Pejuang Pertiwi",
            "B.M.P.P.",
            "Pejuang Pertiwi",
          ],
          [
            "2",
            "Darjah Kerabat Inderaloka Yang Agung First Class",
            "D.K. I",
            "-",
          ],
          [
            "3",
            "Darjah Kerabat Inderaloka Yang Agung Second Class",
            "D.K. II",
            "-",
          ],
          ["4", "Seri Maharaja Cendera Alam", "S.M.C.A.", "Tun"],
          ["5", "Panglima Seri Cendera Alam", "P.S.C.A.", "Tan Sri"],
          [
            "6",
            "Seri Utama Cura Si Gilang Sari",
            "S.C.G.S.",
            "Dato’ Seri Utama",
          ],
          ["7", "Seri Setia Mangku Negara", "S.S.M.N.", "Dato’ Seri Setia"],
          ["8", "Seri Bahaduri Paduka Inderawangsa", "S.B.P.I.", "Dato’ Seri"],
          [
            "9",
            "Seri Pahlawan Angkatan Tentera",
            "S.P.A.T.",
            "Dato’ Seri Pahlawan",
          ],
          ["10", "Seri Perwira Pasukan Polis", "S.P.P.P.", "Dato’ Seri Wira"],
          ["11", "Panglima Cura Si Gilang Sari", "P.C.G.S.", "Dato’ Utama"],
          ["12", "Panglima Setia Mangku Negara", "P.S.M.N.", "Dato’ Setia"],
          ["13", "Panglima Bahaduri Paduka Inderawangsa", "P.B.P.I.", "Dato’"],
          ["14", "Pahlawan Angkatan Tentera", "P.A.T.", "Dato’ Pahlawan"],
          ["15", "Perwira Pasukan Polis", "P.P.P.", "Dato’ Wira"],
          ["16", "Pingat Gagah Perkasa Gold", "P.G.P.E.", "-"],
          ["17", "Pingat Gagah Perkasa Silver", "P.G.P.P.", "-"],
          ["18", "Pingat Gagah Perkasa Bronze", "P.G.P.G.", "-"],
          ["19", "Ahli Cura Si Gilang Sari", "A.C.G.S.", "-"],
          ["20", "Johan Setia Mangku Negara", "J.S.M.N.", "-"],
          ["21", "Johan Bahaduri Paduka Inderawangsa", "J.B.P.I.", "-"],
          ["22", "Hulubalang Angkatan Tentera", "H.A.T.", "-"],
          ["23", "Hulubalang Pasukan Polis", "H.P.P.", "-"],
          ["24", "Kesatria Setia Mangku Negara", "K.S.M.N.", "-"],
          ["25", "Ahli Setia Mangku Negara", "A.S.M.N.", "-"],
          ["26", "Ahli Bahaduri Paduka Inderawangsa", "A.B.P.I.", "-"],
          ["27", "Pingat Budi Teladan", "P.B.T.", "-"],
          ["28", "Pingat Khidmat Cemerlang", "P.K.C.", "-"],
          ["29", "Pingat Jasa Kebaktian", "P.J.K.", "-"],
          ["30", "Pingat Kedaulatan Wilayah", "P.K.W.", "-"],
          ["31", "Pingat Laskar Buana", "P.L.B.", "-"],
          ["32", "Pingat Laskar Samudera", "P.L.S.", "-"],
          ["33", "Pingat Laskar Jumantara", "P.L.J.", "-"],
          ["34", "Kepujian Perbuatan Berani", "K.P.B.", "-"],
          ["35", "Jaksa Pendamai", "J.P.", "-"],
          ["36", "Sultan Abdul Aziz Shah Coronation Medal", "-", "-"],
          ["37", "Sultan Abdul Aziz Shah Silver Jubilee Medal", "-", "-"],
          ["38", "Sultan Ibrahim Shah Coronation Medal", "-", "-"],
        ],
        footerNote:
          "For orders that carry a title for male recipients, the spousal title for the wife of a male recipient is as established in their respective order sections.",
        closing:
          "This guide shall serve as the official reference for naming, investiture, wearing, and the order of precedence for orders, decorations, medals and commissions of the State of Inderaloka. Any amendments, additions, or revocations related to the honours in this guide shall be made at the decree and consent of the Sultan of Inderaloka.",
      },
      terasul: {
        breadcrumbCurrent: "Terasul & Royal Customs",
        pageTitle: "Terasul & Royal Customs",
        pageDesc:
          "The system of royal honorifics and palace title protocols preserved for centuries.",
        terasulTitle: "Inderaloka Royal Terasul Guide",
        terasulSections: [
          {
            id: "PART I",
            title: "THE SULTAN AND CONSORTS OF THE SULTAN",
            isPartHeader: true,
          },
          {
            id: 1,
            title: "Purpose",
            content:
              "This guide establishes the use of terasul (honorifics) for the Sultan of Inderaloka, the Queen Consort, the Sultanah, the Regent, the heirs to the throne, Close Heirs, royal family members, their spouses, and descendants of the Sultan according to the customs of the Inderaloka Royal Palace.\n\nThe use of terasul in this guide shall apply to official government affairs, royal ceremonies, official correspondence, formal letters, ceremonial invitations, palace statements, official conferences, and national state functions.\n\nAll provisions are subject to the customs of the Inderaloka Royal Palace, the Constitution of the Government of Inderaloka, and the decree and consent of the Sultan of Inderaloka.",
          },
          {
            id: 2,
            title: "Definitions",
            content:
              "In this guide, terasul means the official arrangement of honorific references and titles used in addresses, correspondence, and ceremonies.\n\nLineage status title means a title indicating a person's position in the lineage of the Sultan, namely Tunku Besar, Tunku Muda, Tunku Kechil, and Tunku.\n\nPositional title means a title held due to office, ceremonial standing, or position in the line of succession, such as Tunku Mahkota, Tunku Utama, and Close Heir titles.",
          },
          {
            id: 3,
            title: "Principles of Royal Name Arrangement",
            content:
              "For royal family members holding a positional title, the terasul shall be arranged by placing the positional title first, followed by the lineage status title and the personal name.\n\nThe official arrangement form is as follows:\n[Positional Title] [Lineage Status Title] [Name]",
          },
          {
            id: 4,
            title: "The Reigning Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                [
                  "Honorific reference",
                  "His Royal Highness Seri Paduka Baginda",
                ],
                ["Title", "Sultan [Name]"],
                [
                  "Full terasul",
                  "His Royal Highness Seri Paduka Baginda Sultan [Name], Sultan and Yang di-Pertuan of the State of Inderaloka and All Its Protected Territories",
                ],
              ],
            },
          },
          {
            id: 5,
            title: "Raja Permaisuri (Queen Consort)",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                [
                  "Honorific reference",
                  "Her Royal Highness Seri Paduka Baginda",
                ],
                ["Title", "Raja Permaisuri [Original Title] [Name]"],
                [
                  "Full terasul",
                  "Her Royal Highness Seri Paduka Baginda Raja Permaisuri [Original Title] [Name]",
                ],
              ],
            },
            footer:
              "Raja Permaisuri is the primary consort of the Sultan who is of royal lineage.",
          },
          {
            id: 6,
            title: "Sultanah",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness"],
                ["Title", "Sultanah [Name]"],
                ["Full terasul", "Her Royal Highness Sultanah [Name]"],
              ],
            },
            footer:
              "Sultanah is the primary consort of the Sultan who is of commoner lineage.",
          },
          {
            id: 7,
            title: "Second Consort of the Reigning Sultan",
            subTable: {
              title: "7.1 If of Royal Lineage",
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness Paduka Seri"],
                ["Title", "Tunku Puan Suri [Original Title] [Name]"],
                [
                  "Full terasul",
                  "Her Royal Highness Paduka Seri Tunku Puan Suri [Original Title] [Name]",
                ],
              ],
            },
            additionalInfo:
              "7.2 If of Commoner Lineage\n\nHonorific reference: Her Royal Highness\nTitle: Che Puan Suri [Name]\nFull terasul: Her Royal Highness Che Puan Suri [Name]",
          },
          {
            id: "PART II",
            title: "REGENCY, ABDICATION, DEMISE, AND WIDOWS",
            isPartHeader: true,
          },
          {
            id: 8,
            title: "The Regent (Pemangku Sultan)",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Royal Highness Paduka Baginda"],
                ["Title", "Regent [Lineage Status Title] [Name]"],
                [
                  "Full terasul",
                  "His Royal Highness Paduka Baginda Regent [Full Title] [Name]",
                ],
              ],
            },
            footer:
              "The Regent must be a male royal member. If the Tunku Mahkota is unable to act as Regent, priority is given to the Close Heirs according to the order established by the Constitution of the Government of Inderaloka.",
          },
          {
            id: 9,
            title: "The Abdicated Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Royal Highness Paduka Seri"],
                ["Title", "Sultan Begawan [Name]"],
                [
                  "Full terasul",
                  "His Royal Highness Paduka Seri Sultan Begawan [Name]",
                ],
              ],
            },
          },
          {
            id: 10,
            title: "Main Consort of the Abdicated Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness Paduka Seri"],
                ["Title", "Permaisuri Begawan [Name]"],
                [
                  "Full terasul",
                  "Her Royal Highness Paduka Seri Permaisuri Begawan [Name]",
                ],
              ],
            },
          },
          {
            id: 11,
            title: "Second Consort of the Abdicated Sultan",
            subTable: {
              title: "11.1 If of Royal Lineage",
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness Paduka Seri"],
                ["Title", "Tunku Puan Begawan [Original Title] [Name]"],
                [
                  "Full terasul",
                  "Her Royal Highness Paduka Seri Tunku Puan Begawan [Original Title] [Name]",
                ],
              ],
            },
            additionalInfo:
              "11.2 If of Commoner Lineage\n\nHonorific reference: Her Royal Highness\nTitle: Che Puan Begawan [Name]\nFull terasul: Her Royal Highness Che Puan Begawan [Name]",
          },
          {
            id: 12,
            title: "The Deceased Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Royal Highness"],
                ["Title", "al-Marhum Sultan [Name]"],
                ["Full terasul", "His Royal Highness al-Marhum Sultan [Name]"],
              ],
            },
          },
          {
            id: 13,
            title: "Queen Dowager (Permaisuri Balu)",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness"],
                ["Title", "Permaisuri Balu [Name]"],
                ["Full terasul", "Her Royal Highness Permaisuri Balu [Name]"],
              ],
            },
            footer:
              "Permaisuri Balu is the title for the widow of the Sultan who was previously titled Raja Permaisuri.",
          },
          {
            id: 14,
            title: "Raja Perempuan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness"],
                ["Title", "Raja Perempuan [Name]"],
                ["Full terasul", "Her Royal Highness Raja Perempuan [Name]"],
              ],
            },
            footer:
              "Raja Perempuan is the title bestowed upon the senior Raja Permaisuri when there is a new Raja Permaisuri during the current Sultan's reign.",
          },
          {
            id: 15,
            title: "Sultanah Dowager (Sultanah Balu)",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness"],
                ["Title", "Sultanah Balu [Name]"],
                ["Full terasul", "Her Royal Highness Sultanah Balu [Name]"],
              ],
            },
            footer:
              "Sultanah Balu is the title for the widow of the Sultan who was previously titled Sultanah.",
          },
          {
            id: 16,
            title: "Che Puan Dowager (Che Puan Balu)",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Highness"],
                ["Title", "Che Puan Balu [Name]"],
                ["Full terasul", "Her Highness Che Puan Balu [Name]"],
              ],
            },
            footer:
              "Che Puan Balu is the title for the widow of the Sultan of commoner lineage, previously titled Che Puan Suri.",
          },
          {
            id: "PART III",
            title: "HEIRS TO THE THRONE",
            isPartHeader: true,
          },
          {
            id: 17,
            title: "Tunku Mahkota (Crown Prince)",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Royal Highness Paduka Seri"],
                ["Title", "Tunku Mahkota [Lineage Status Title] [Name]"],
                [
                  "Full terasul",
                  "His Royal Highness Paduka Seri Tunku Mahkota [Lineage Status Title] [Name]",
                ],
              ],
            },
            footer:
              "Common form:\nHis Royal Highness Paduka Seri Tunku Mahkota Tunku Besar [Name]",
          },
          {
            id: 18,
            title: "Consort of the Tunku Mahkota",
            subTable: {
              title: "18.1 If of Royal Lineage",
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness Paduka Seri"],
                ["Title", "Tunku Ampuan Mahkota [Original Title] [Name]"],
                [
                  "Full terasul",
                  "Her Royal Highness Paduka Seri Tunku Ampuan Mahkota [Original Title] [Name]",
                ],
              ],
            },
            additionalInfo:
              "18.2 If of Commoner Lineage\n\nHonorific reference: Her Royal Highness\nTitle: Che Ampuan Mahkota [Name]\nFull terasul: Her Royal Highness Che Ampuan Mahkota [Name]",
          },
          {
            id: 19,
            title: "Tunku Utama",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Royal Highness Paduka Mulia"],
                ["Title", "Tunku Utama [Lineage Status Title] [Name]"],
                [
                  "Full terasul",
                  "His Royal Highness Paduka Mulia Tunku Utama [Lineage Status Title] [Name]",
                ],
              ],
            },
            footer:
              "Tunku Utama is the title for the eldest son of the Tunku Mahkota.\n\nCommon form:\nHis Royal Highness Paduka Mulia Tunku Utama Tunku Muda [Name]",
          },
          {
            id: "PART IV",
            title: "CLOSE HEIRS (WARIS DAMPING)",
            isPartHeader: true,
          },
          {
            id: 20,
            title: "Close Heir (Waris Damping)",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Royal Highness Paduka Seri"],
                ["Title", "[Close Heir Title] [Lineage Status Title] [Name]"],
                [
                  "Full terasul",
                  "His Royal Highness Paduka Seri [Close Heir Title] [Lineage Status Title] [Name]",
                ],
              ],
            },
            content:
              "Close Heirs are male royal family members who are in the line of succession to the throne after the Tunku Mahkota and Tunku Utama, according to the Constitution of the Government of Inderaloka.",
            subTable: {
              title: "20.1 List of Close Heirs",
              headers: ["No.", "Close Heir Title"],
              rows: [
                ["1", "Tunku Arif Bendahara"],
                ["2", "Tunku Temenggung Aria Pahlawan"],
                ["3", "Tunku Perdana Di-Gadong"],
                ["4", "Tunku Indera Laksamana"],
                ["5", "Tunku Syahbandar"],
                ["6", "Tunku Panglima Raja"],
              ],
            },
          },
          {
            id: 21,
            title: "Consort of a Close Heir",
            subTable: {
              title: "21.1 If of Royal Lineage",
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness Paduka Seri"],
                [
                  "Title",
                  "Tunku Ampuan [Close Heir Title] [Original Title] [Name]",
                ],
                [
                  "Full terasul",
                  "Her Royal Highness Paduka Seri Tunku Ampuan [Close Heir Title] [Original Title] [Name]",
                ],
              ],
            },
            additionalInfo:
              "21.2 If of Commoner Lineage\n\nHonorific reference: Her Royal Highness\nTitle: Che Ampuan [Close Heir Title] [Name]\nFull terasul: Her Royal Highness Che Ampuan [Close Heir Title] [Name]",
          },
          {
            id: "PART V",
            title: "CHILDREN OF THE SULTAN",
            isPartHeader: true,
          },
          {
            id: 22,
            title: "Son of the Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Royal Highness Paduka Seri"],
                ["Title", "Tunku Besar [Name]"],
                [
                  "Full terasul",
                  "His Royal Highness Paduka Seri Tunku Besar [Name]",
                ],
              ],
            },
          },
          {
            id: 23,
            title: "Daughter of the Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness Paduka Seri"],
                ["Title", "Tunku Besar Puteri [Name]"],
                [
                  "Full terasul",
                  "Her Royal Highness Paduka Seri Tunku Besar Puteri [Name]",
                ],
              ],
            },
          },
          {
            id: 24,
            title: "Wife of a Son of the Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness"],
                ["Title", "Che Puan Besar [Name]"],
                ["Full terasul", "Her Royal Highness Che Puan Besar [Name]"],
              ],
            },
            footer:
              "If the wife is of royal lineage and her original title is higher, the original title may be used according to ceremonial determination.",
          },
          {
            id: 25,
            title: "Husband of a Daughter of the Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Most Distinguished"],
                ["Title", "Tuan Besar [Name]"],
                ["Full terasul", "His Most Distinguished Tuan Besar [Name]"],
              ],
            },
          },
          {
            id: "PART VI",
            title: "GRANDCHILDREN OF THE SULTAN",
            isPartHeader: true,
          },
          {
            id: 26,
            title: "Grandson of the Sultan via Male Line",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Royal Highness Paduka Seri"],
                ["Title", "Tunku Muda [Name]"],
                [
                  "Full terasul",
                  "His Royal Highness Paduka Seri Tunku Muda [Name]",
                ],
              ],
            },
          },
          {
            id: 27,
            title: "Granddaughter of the Sultan via Male Line",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness Paduka Seri"],
                ["Title", "Tunku Muda Puteri [Name]"],
                [
                  "Full terasul",
                  "Her Royal Highness Paduka Seri Tunku Muda Puteri [Name]",
                ],
              ],
            },
          },
          {
            id: 28,
            title: "Wife of a Grandson of the Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Royal Highness"],
                ["Title", "Che Puan Muda [Name]"],
                ["Full terasul", "Her Royal Highness Che Puan Muda [Name]"],
              ],
            },
            footer:
              "If the wife is of royal lineage and her original title is higher, the original title may be used according to ceremonial determination.",
          },
          {
            id: 29,
            title: "Husband of a Granddaughter of the Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Highly Distinguished"],
                ["Title", "Tuan Muda [Name]"],
                ["Full terasul", "His Highly Distinguished Tuan Muda [Name]"],
              ],
            },
          },
          {
            id: "PART VII",
            title: "GREAT-GRANDCHILDREN OF THE SULTAN",
            isPartHeader: true,
          },
          {
            id: 30,
            title: "Great-Grandson of the Sultan via Male Line",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Highness Paduka Seri"],
                ["Title", "Tunku Kechil [Name]"],
                [
                  "Full terasul",
                  "His Highness Paduka Seri Tunku Kechil [Name]",
                ],
              ],
            },
          },
          {
            id: 31,
            title: "Great-Granddaughter of the Sultan via Male Line",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Highness Paduka Seri"],
                ["Title", "Tunku Kechil Puteri [Name]"],
                [
                  "Full terasul",
                  "Her Highness Paduka Seri Tunku Kechil Puteri [Name]",
                ],
              ],
            },
          },
          {
            id: 32,
            title: "Wife of a Great-Grandson of the Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "Her Highness"],
                ["Title", "Che Puan Kechil [Name]"],
                ["Full terasul", "Her Highness Che Puan Kechil [Name]"],
              ],
            },
            footer:
              "If the wife is of royal lineage and her original title is higher, the original title may be used according to ceremonial determination.",
          },
          {
            id: 33,
            title: "Husband of a Great-Granddaughter of the Sultan",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His Distinguished"],
                ["Title", "Tuan Kechil [Name]"],
                ["Full terasul", "His Distinguished Tuan Kechil [Name]"],
              ],
            },
          },
          {
            id: "PART VIII",
            title:
              "GREAT-GREAT-GRANDCHILDREN AND SUBSEQUENT GENERATIONS VIA MALE LINE",
            isPartHeader: true,
          },
          {
            id: 34,
            title:
              "Great-Great-Grandchildren and Subsequent Generations via Male Line",
            table: {
              headers: ["Subject", "Official Form"],
              rows: [
                ["Honorific reference", "His/Her Highness"],
                ["Title", "Tunku [Name]"],
                ["Full terasul", "His/Her Highness Tunku [Name]"],
              ],
            },
            footer:
              "This title is used for the great-great-grandchildren of the Sultan and subsequent generations via the male line, subject to the royal register and ceremonial determination.",
          },
          {
            id: "PART IX",
            title: "DESCENDANTS VIA THE FEMALE LINE",
            isPartHeader: true,
          },
          {
            id: 35,
            title: "Indraputra and Indraputri",
            table: {
              headers: ["Gender", "Official Form"],
              rows: [
                ["Male", "[Name] Indraputra"],
                ["Female", "[Name] Indraputri"],
              ],
            },
            footer:
              "The titles Indraputra and Indraputri are used for descendants of the Sultan via the female line according to the customs of the Inderaloka Royal Palace.\n\nThis title can be inherited through the male line only.",
          },
          {
            id: "PART X",
            title: "SUMMARY OF TERASUL IN ORDER",
            isPartHeader: true,
          },
          {
            id: "SUMMARY",
            title: "Summary of Terasul",
            table: {
              headers: ["No.", "Position", "Honorific Reference", "Title"],
              rows: [
                [
                  "1",
                  "Sultan",
                  "His Royal Highness Seri Paduka Baginda",
                  "Sultan [Name]",
                ],
                [
                  "2",
                  "Raja Permaisuri",
                  "Her Royal Highness Seri Paduka Baginda",
                  "Raja Permaisuri [Original Title] [Name]",
                ],
                ["3", "Sultanah", "Her Royal Highness", "Sultanah [Name]"],
                [
                  "4",
                  "Regent (Pemangku Sultan)",
                  "His Royal Highness Paduka Baginda",
                  "Regent [Lineage Status Title] [Name]",
                ],
                [
                  "5",
                  "Sultan Begawan",
                  "His Royal Highness Paduka Seri",
                  "Sultan Begawan [Name]",
                ],
                [
                  "6",
                  "Permaisuri Begawan",
                  "Her Royal Highness Paduka Seri",
                  "Permaisuri Begawan [Name]",
                ],
                [
                  "7",
                  "al-Marhum Sultan",
                  "His Royal Highness",
                  "al-Marhum Sultan [Name]",
                ],
                [
                  "8",
                  "Queen Dowager (Permaisuri Balu)",
                  "Her Royal Highness",
                  "Permaisuri Balu [Name]",
                ],
                [
                  "9",
                  "Raja Perempuan",
                  "Her Royal Highness",
                  "Raja Perempuan [Name]",
                ],
                [
                  "10",
                  "Sultanah Dowager (Sultanah Balu)",
                  "Her Royal Highness",
                  "Sultanah Balu [Name]",
                ],
                [
                  "11",
                  "Tunku Mahkota (Crown Prince)",
                  "His Royal Highness Paduka Seri",
                  "Tunku Mahkota [Lineage Status Title] [Name]",
                ],
                [
                  "12",
                  "Tunku Ampuan Mahkota",
                  "Her Royal Highness Paduka Seri",
                  "Tunku Ampuan Mahkota [Original Title] [Name]",
                ],
                [
                  "13",
                  "Che Ampuan Mahkota",
                  "Her Royal Highness",
                  "Che Ampuan Mahkota [Name]",
                ],
                [
                  "14",
                  "Tunku Utama",
                  "His Royal Highness Paduka Mulia",
                  "Tunku Utama [Lineage Status Title] [Name]",
                ],
                [
                  "15",
                  "Close Heir (Waris Damping)",
                  "His Royal Highness Paduka Seri",
                  "[Close Heir Title] [Lineage Status Title] [Name]",
                ],
                [
                  "16",
                  "Tunku Ampuan Close Heir",
                  "Her Royal Highness Paduka Seri",
                  "Tunku Ampuan [Close Heir Title] [Original Title] [Name]",
                ],
                [
                  "17",
                  "Che Ampuan Close Heir",
                  "Her Royal Highness",
                  "Che Ampuan [Close Heir Title] [Name]",
                ],
                [
                  "18",
                  "Son of the Sultan",
                  "His Royal Highness Paduka Seri",
                  "Tunku Besar [Name]",
                ],
                [
                  "19",
                  "Daughter of the Sultan",
                  "Her Royal Highness Paduka Seri",
                  "Tunku Besar Puteri [Name]",
                ],
                [
                  "20",
                  "Wife of a Son of the Sultan",
                  "Her Royal Highness",
                  "Che Puan Besar [Name]",
                ],
                [
                  "21",
                  "Husband of a Daughter of the Sultan",
                  "His Most Distinguished",
                  "Tuan Besar [Name]",
                ],
                [
                  "22",
                  "Grandson of the Sultan",
                  "His Royal Highness Paduka Seri",
                  "Tunku Muda [Name]",
                ],
                [
                  "23",
                  "Granddaughter of the Sultan",
                  "Her Royal Highness Paduka Seri",
                  "Tunku Muda Puteri [Name]",
                ],
                [
                  "24",
                  "Wife of a Grandson of the Sultan",
                  "Her Royal Highness",
                  "Che Puan Muda [Name]",
                ],
                [
                  "25",
                  "Husband of a Granddaughter of the Sultan",
                  "His Highly Distinguished",
                  "Tuan Muda [Name]",
                ],
                [
                  "26",
                  "Great-Grandson of the Sultan",
                  "His Highness Paduka Seri",
                  "Tunku Kechil [Name]",
                ],
                [
                  "27",
                  "Great-Granddaughter of the Sultan",
                  "Her Highness Paduka Seri",
                  "Tunku Kechil Puteri [Name]",
                ],
                [
                  "28",
                  "Wife of a Great-Grandson of the Sultan",
                  "Her Highness",
                  "Che Puan Kechil [Name]",
                ],
                [
                  "29",
                  "Husband of a Great-Granddaughter of the Sultan",
                  "His Distinguished",
                  "Tuan Kechil [Name]",
                ],
                [
                  "30",
                  "Great-Great-Grandchildren and subsequent generations via male line",
                  "His/Her Highness",
                  "Tunku [Name]",
                ],
                [
                  "31",
                  "Che Puan Dowager (Che Puan Balu)",
                  "Her Highness",
                  "Che Puan Balu [Name]",
                ],
                [
                  "32",
                  "Descendants via the female line",
                  "—",
                  "[Name] Indraputra / [Name] Indraputri",
                ],
              ],
            },
          },
          {
            id: 36,
            title: "General Provisions",
            content:
              "In all official matters, the full terasul form must be used upon first mention. For subsequent mentions, a short form may be used as appropriate for the occasion or document.\n\nThe use of original titles for royal family members married to other royals shall follow ceremonial determination and the higher title.\n\nAny matters not specifically mentioned in this guide shall be referred to the Inderaloka Royal Palace for further determination.",
          },
        ]
      },
      regalia: {
        breadcrumbCurrent: "Royal Regalia",
        pageTitle: "Royal Regalia of Inderaloka",
        pageDesc:
          "The magnificent heritage of royal regalia symbolising the sovereignty, power, and dignity of the Sultan of Inderaloka.",
        regaliaTitle: "Royal Regalia",
        regaliaItems: [
          {
            name: "Royal Crown",
            desc: "A golden crown adorned with precious stones, worn during the Installation Ceremony. Crafted in the 15th century and refurbished several times throughout history.",
          },
          {
            name: "Royal Swords (Short and Long Sword)",
            desc: "Two sacred blades symbolising the power and sovereignty of the Yang di-Pertuan Agong. Carried by special officers during all official state ceremonies.",
          },
          {
            name: "Royal Sceptre",
            desc: "A golden staff symbolising the authority of governance. Used in all installation ceremonies and official state receptions.",
          },
          {
            name: "Great Royal Seal",
            desc: "The official seal of the Yang di-Pertuan Agong used to proclaim and authenticate the most important documents of the state.",
          },
          {
            name: "Golden and Silver Cogans",
            desc: "Royal ornaments displayed during royal ceremonies, symbolising the prosperity, glory, and the high dignity of the nation.",
          },
        ],
      },
      statement: {
        breadcrumbCurrent: "Royal Statement",
        pageTitle: "Royal Statement",
        pageDesc:
          "Official addresses and statements from His Majesty Yang di-Pertuan Agong XVI to the people of Inderaloka.",
        latestLabel: "Latest Statement",
        latestDate: "23 May 2026",
        latestTitle:
          "Royal Address on the Occasion of the Birthday of His Majesty Yang di-Pertuan Agong XVI",
        latestBody:
          "Bismillahirrahmanirrahim. Assalamualaikum Warahmatullahi Wabarakatuh, and Salam Pertiwi Dijunjung Bermartabat.\n\nAlhamdulillah, We give thanks to Allah the Almighty for His boundless grace in allowing Us to gather together on this historic and meaningful occasion.\n\nWe record the highest appreciation and gratitude to all the people of Inderaloka for the loyalty, affection, and sacrifice rendered without fatigue. It is Our fervent hope that Inderaloka shall continue to progress, that its people remain united, and that this nation endures in prosperity, peace, and sovereignty for eternity.\n\nWassalam.",
        latestSignature:
          "His Majesty Seri Paduka Baginda Yang di-Pertuan Agong XVI of Inderaloka",
        previousLabel: "Previous Statements",
        previousItems: [
          {
            date: "31 August 2025",
            title: "Address on the 68th Independence Day of Inderaloka",
          },
          { date: "1 January 2025", title: "Royal New Year Address 2025" },
          {
            date: "15 September 2024",
            title: "Address at the Opening of the 16th Session of Parliament",
          },
          {
            date: "31 January 2024",
            title:
              "Address at the Installation of the Yang di-Pertuan Agong XVI",
          },
        ],
        readMore: "Read Full Statement",
      },
      palaces: {
        breadcrumbCurrent: "Royal Palaces",
        pageTitle: "Royal Palaces of Inderaloka",
        pageDesc:
          "The official residences and historic palaces of the Yang di-Pertuan Agong and the Royal Family of Inderaloka.",
        typeLabel: "Type",
        locationLabel: "Location",
        visitingLabel: "Visiting Information",
        items: [
          {
            name: "Istana Negara (National Palace)",
            location: "Jalan Duta, Federal Territory of Inderaloka",
            type: "Official Residence",
            desc: "The Istana Negara is the official residence of the Yang di-Pertuan Agong. Built in 2011 on 97 hectares of land, the palace houses the Balairong Seri for official ceremonies and Royal Family living quarters. The palace architecture harmoniously blends traditional Malay aesthetics with elegant contemporary design.",
            visiting:
              "Not open to the public on a regular basis. Certain ceremonies are held in the palace grounds on state occasions.",
          },
          {
            name: "Istana Abdulaziz",
            location: "Bukit Indera, Federal Territory of Inderaloka",
            type: "Heritage Palace",
            desc: "A historic palace built in 1897. It serves as the resident palace for the Sultan while in the capital. The unique European-Malay architecture makes it among the most important cultural heritage sites in the nation.",
            visiting:
              "Open to the public: Tuesday – Sunday, 09:00 – 17:00. Closed on Mondays and public holidays.",
          },
          {
            name: "Istana Seri Laksana",
            location: "Inderaloka City Centre",
            type: "City Palace",
            desc: "The Royal residence during official visits to the capital. Built in the 1930s in the Art Deco style, which has been well preserved, this palace is among the finest examples of colonial architecture in the nation.",
            visiting:
              "Visits by official appointment only. Contact the Palace Office.",
          },
          {
            name: "Istana Bukit Indera",
            location: "Bukit Indera, Selangor",
            type: "Retreat Palace",
            desc: "Used as a retreat for the Royal Family and for entertaining selected state guests. Located in a cool highland area with breathtaking valley views.",
            visiting: "Not open to the public.",
          },
        ],
      },
      royalAdvisoryCouncil: {
        breadcrumbCurrent: "Royal Advisory Council",
        pageTitle: "Royal Advisory Council",
        pageDesc:
          "An independent advisory body providing counsel to the Yang di-Pertuan Agong on matters of national governance and security.",
        overviewTitle: "Role and Functions",
        overviewBody:
          "The Royal Advisory Council was established as an independent advisory body to the Yang di-Pertuan Agong. Comprising distinguished individuals with expertise in law, economics, security, and religion, the Council provides impartial perspectives on critical national issues requiring the highest deliberation.",
        basisLabel: "Constitutional Basis",
        basis: "Royal Decree and the Federal Constitution of Inderaloka",
        membersTitle: "Members of the Council",
        members: [
          {
            name: "Tun Dato' Seri Mahathir Mohamad",
            role: "Senior Chairman",
            title: "Former Prime Minister of Inderaloka",
          },
          {
            name: "Tun Abdul Hamid Mohamad",
            role: "Member",
            title: "Former Chief Justice",
          },
          {
            name: "Tan Sri Dato' Zeti Akhtar Aziz",
            role: "Member",
            title: "Former Governor of Bank Negara Inderaloka",
          },
          {
            name: "Tan Sri Dr. Munir Majid",
            role: "Member",
            title: "Expert in Economics & International Relations",
          },
          {
            name: "Dato' Dr. Hamid Pawanteh",
            role: "Member",
            title: "Expert in International Law",
          },
          {
            name: "Prof. Datuk Dr. Shad Saleem Faruqi",
            role: "Member",
            title: "Expert in Constitutional Law",
          },
        ],
        functionsTitle: "Core Functions of the Council",
        functions: [
          "Providing independent advice to the Yang di-Pertuan Agong on national policies",
          "Reviewing and recommending solutions to critical national issues",
          "Monitoring constitutional compliance by government bodies",
          "Providing perspectives on international treaties and relations",
          "Submitting periodic reports to the Yang di-Pertuan Agong",
        ],
        meetingLabel: "Meeting Schedule",
        meeting:
          "The Council convenes at least four times annually, or whenever required by the Yang di-Pertuan Agong.",
      },
      palaceCourtiers: {
        breadcrumbCurrent: "Palace Courtiers",
        pageTitle: "Officers of the Royal Household",
        pageDesc:
          "Specialist officers serving the Royal Palace in managing protocol, royal ceremonies, and palace administration.",
        overviewTitle: "About Palace Courtiers",
        overviewBody:
          "Palace Courtiers are professional members of the Royal Household responsible for managing all royal affairs — from official protocol and palace administration to the preservation of centuries-old royal customs and traditions.",
        categoriesTitle: "Categories of Royal Officers",
        categories: [
          {
            title: "Royal Protocol Officers",
            desc: "Responsible for arranging all official functions, state guests, and royal ceremonies in accordance with established protocol.",
            members: [
              {
                role: "Chief Royal Protocol Officer",
                name: "Dato' Haji Abdullah bin Hassan",
              },
              {
                role: "Deputy Chief of Protocol",
                name: "Mr. Mohd Hafizuddin bin Ahmad",
              },
            ],
          },
          {
            title: "Royal Secretariat",
            desc: "Manages correspondence, schedules, and official communications of the Yang di-Pertuan Agong and the Royal Family.",
            members: [
              {
                role: "Senior Royal Secretary",
                name: "Dato' Sri Muhd Zakri bin Abdul Hamid",
              },
              {
                role: "Royal Secretary",
                name: "Datin Haslinda binti Mohd Amin",
              },
            ],
          },
          {
            title: "Royal Customs Officers",
            desc: "Preserves, maintains, and executes royal customs and ceremonial traditions inherited over centuries.",
            members: [
              {
                role: "Royal Customs Regent",
                name: "Dato' Haji Harun bin Jaafar",
              },
              {
                role: "Senior Customs Officer",
                name: "Mr. Abdul Wahab bin Yusof",
              },
            ],
          },
          {
            title: "Royal Personal Protection Officers",
            desc: "Members of the specialist security detail responsible for the personal safety of the Yang di-Pertuan Agong.",
            members: [
              {
                role: "Commander, Royal Guard",
                name: "Brigadier General Dato' Azman bin Ibrahim",
              },
              { role: "Deputy Commander", name: "Colonel Hasrul bin Mat Zin" },
            ],
          },
        ],
        courtLabel: "Palace Office",
        court:
          "Department of the National Palace, Jalan Duta, 50480 Inderaloka. Tel: +603-2384 1000",
      },
    },

    // Directory page
    directoryPage: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Directory",
      pageTitle: "Government Directory",
      pageDesc:
        "A complete listing of Inderaloka's ministries, departments, and government officials.",
      searchPlaceholder: "Search departments, ministries or officials...",
      filterAll: "All",
      filterExec: "Executive",
      filterLeg: "Legislative",
      filterJud: "Judicial",
      filterDept: "Departments",
      noResults: "No records match your search.",
      ministriesTitle: "Federal Ministries",
      portfolioLabel: "Portfolio",
      ministerLabel: "Minister",
      deptTitle: "Government Departments",
      headLabel: "Head",
      phoneLabel: "Phone",
      addressLabel: "Address",
      hoursLabel: "Hours",
      categoryLabel: "Category",
      ministries: [
        {
          name: "Ministry of Finance",
          minister: "YB Tengku Zafrul Tengku Abdul Aziz",
          portfolio: "National budget, taxation, and investment policy",
        },
        {
          name: "Ministry of Foreign Affairs",
          minister: "YB Dato' Sri Zambry Abd Kadir",
          portfolio: "Diplomacy and international relations",
        },
        {
          name: "Ministry of Home Affairs",
          minister: "YB Dato' Seri Saifuddin Nasution",
          portfolio: "Internal security, immigration, and police",
        },
        {
          name: "Ministry of Defence",
          minister: "YB Dato' Sri Mohamad Hasan",
          portfolio: "Armed forces and national defence",
        },
        {
          name: "Ministry of Health",
          minister: "YB Dato' Sri Dr. Dzulkefly Ahmad",
          portfolio: "Public healthcare system",
        },
        {
          name: "Ministry of Education",
          minister: "YB Fadhlina Sidek",
          portfolio: "Education from pre-school to university",
        },
        {
          name: "Ministry of Transport",
          minister: "YB Anthony Loke Siew Fook",
          portfolio: "Land, sea, and air transport",
        },
        {
          name: "Ministry of Tourism, Arts and Culture",
          minister: "YB Dato' Seri Tiong King Sing",
          portfolio: "Tourism, arts heritage, and culture",
        },
      ],
      departments: [
        {
          name: "Department of the Prime Minister",
          head: "Tan Sri Mohd Zuki Ali",
          phone: "+603-8888 8000",
          address: "Perdana Putra Building, Putrajaya 62502",
          hours: "Mon – Fri, 08:00 – 17:00",
          category: "Executive",
        },
        {
          name: "Attorney General's Chambers",
          head: "Tan Sri Ahmad Terrirudin Mohd Salleh",
          phone: "+603-8880 8000",
          address: "Level 15, Block A, Putrajaya",
          hours: "Mon – Fri, 08:00 – 17:00",
          category: "Judicial",
        },
        {
          name: "Public Service Department",
          head: "Tan Sri Wan Ahmad Dahlan",
          phone: "+603-8885 3000",
          address: "Block C2, Complex C, Putrajaya",
          hours: "Mon – Fri, 08:00 – 17:00",
          category: "Executive",
        },
        {
          name: "House of Representatives",
          head: "YB Tan Sri Johari Abdul",
          phone: "+603-2072 1955",
          address: "Parliament Building, Jalan Parlimen, Inderaloka",
          hours: "Mon – Fri, 09:00 – 17:00",
          category: "Legislative",
        },
        {
          name: "Senate",
          head: "YB Tan Sri Wan Junaidi Tuanku Jaafar",
          phone: "+603-2601 8888",
          address: "Parliament Building, Jalan Parlimen, Inderaloka",
          hours: "Mon – Fri, 09:00 – 17:00",
          category: "Legislative",
        },
        {
          name: "Federal Court",
          head: "Tan Sri Tengku Maimun Tuan Mat",
          phone: "+603-2693 3424",
          address: "Court Complex, Jalan Perdana, Inderaloka",
          hours: "Mon – Fri, 09:00 – 16:30",
          category: "Judicial",
        },
        {
          name: "Election Commission (SPR)",
          head: "Tan Sri Abdul Ghani Salleh",
          phone: "+603-8885 1500",
          address: "Level 4, Block D, Putrajaya",
          hours: "Mon – Fri, 08:00 – 17:00",
          category: "Executive",
        },
        {
          name: "National Audit Department",
          head: "Tan Sri Nik Azman Nik Abdul Majid",
          phone: "+603-8889 9000",
          address: "Block D5, Parcel D, Putrajaya",
          hours: "Mon – Fri, 08:00 – 17:00",
          category: "Executive",
        },
      ],
    },

    // Government section
    government: {
      breadcrumbHome: "Home",
      breadcrumbParent: "Government",
      landing: {
        pageTitle: "Government of Inderaloka",
        pageDesc:
          "The constitutional governance structure of Inderaloka — three branches of government ensuring justice, liberty, and the prosperity of all citizens.",
        subpages: [
          {
            href: "/government/executive",
            title: "Executive",
            desc: "The Prime Minister, Cabinet, and the executive powers of the federal government.",
          },
          {
            href: "/government/legislative",
            title: "Legislative",
            desc: "Parliament, the Senate, and the House of Representatives — the supreme legislative body.",
          },
          {
            href: "/government/judiciary",
            title: "Judiciary",
            desc: "The Federal Court, Court of Appeal, and Syariah Courts — independent and authoritative.",
          },
          {
            href: "/government/state-officials",
            title: "State Officials",
            desc: "Senior government officers including the Attorney General, Inspector General, and Governor of the Central Bank.",
          },
        ],
      },
      executive: {
        breadcrumbCurrent: "Executive",
        pageTitle: "Executive Branch",
        pageDesc:
          "The Cabinet led by the Prime Minister as the chief executive of the federal government.",
        subpages: [
          {
            href: "/government/executive/prime-minister",
            title: "Prime Minister",
            desc: "Profile and role of the Prime Minister of Inderaloka.",
          },
          {
            href: "/government/executive/cabinet",
            title: "Cabinet",
            desc: "Full listing of Cabinet members and their ministerial portfolios.",
          },
          {
            href: "/government/executive/political-parties",
            title: "Political Parties",
            desc: "Political parties shaping Inderaloka's parliamentary democracy.",
          },
        ],
      },
      pm: {
        breadcrumbCurrent: "Prime Minister",
        pageTitle: "Prime Minister of Inderaloka",
        pageDesc:
          "YAB Dato' Sri Haji Anwar Ibrahim — Chief Executive of the Federal Government of Inderaloka",
        portraitLabel: "Official Portrait\nPrime Minister",
        officialTitleLabel: "Official Title",
        officialTitle: "The Right Honourable Dato' Sri Haji Anwar bin Ibrahim",
        bornLabel: "Date of Birth",
        born: "10 August 1947",
        sinceLabel: "Date Appointed",
        since: "24 November 2022",
        educationLabel: "Education",
        education:
          "University of Malaya (Malay Studies); National Youth Leader",
        mottoLabel: "Governing Principle",
        motto:
          "Malaysia Madani — Shared Prosperity, Cherished Freedoms, Dignity for All",
        roleTitle: "Constitutional Role",
        roleBody:
          "The Prime Minister is the Head of Government and leads the Cabinet. Appointed by the Yang di-Pertuan Agong from among members of the House of Representatives commanding the confidence of the majority. The Prime Minister is responsible for government policy, public administration, and international relations.",
        dutiesTitle: "Primary Responsibilities",
        duties: [
          "Leading the Cabinet and overseeing the implementation of government policies",
          "Advising the Yang di-Pertuan Agong on matters of national administration",
          "Representing Inderaloka at the international level",
          "Setting the legislative agenda and priorities in Parliament",
          "Coordinating the government's response to national crises and disasters",
          "Appointing Cabinet members with the consent of the Yang di-Pertuan Agong",
        ],
        archiveTitle: "Inderaloka Prime Ministers Archive",
        governanceTimelineTitle: "Governance Timeline",
        searchPlaceholder: "Search by name, years, or achievements...",
        biographyLabel: "Biography & Career",
        achievementsLabel: "Key Policy Achievements",
        pmArchive: [
          {
            name: "Dato' Sri Haji Anwar Ibrahim",
            years: "2022 – Present",
            party: "Pakatan Madani",
            portrait: "Portrait Anwar",
            signature: "Signature Anwar",
            bio: "The 10th Prime Minister leading a unity government. His administration focuses on institutional reform, transparent governance, and social justice.",
            achievements: [
              "Malaysia Madani Initiative",
              "Subsidy System Reform",
              "Ringgit Strengthening",
            ],
            honours: ["S.S.A.P.", "S.S.M.T.", "D.G.S.M."],
            milestones: [
              { year: "2022", event: "Appointment as 10th Prime Minister" },
              { year: "2024", event: "Launch of the Madani Economy Framework" },
            ],
          },
          {
            name: "Dato' Sri Ismail Sabri",
            years: "2021 – 2022",
            party: "Barisan Nasional",
            portrait: "Portrait Ismail",
            signature: "Signature Ismail",
            bio: "Led the nation during the transition period of economic recovery and post-pandemic border reopening.",
            achievements: [
              "Keluarga Malaysia Concept",
              "Anti-Party Hopping Bill",
            ],
            honours: ["D.M.N.", "S.S.A.P.", "S.P.M.K."],
            milestones: [
              { year: "2021", event: "Appointment as 9th Prime Minister" },
              { year: "2022", event: "International border reopening" },
            ],
          },
        ],
      },
      cabinet: {
        breadcrumbCurrent: "Cabinet",
        pageTitle: "Cabinet of Inderaloka",
        pageDesc:
          "Members of the Cabinet are responsible for their respective ministerial portfolios.",
        lastUpdated: "Last Updated",
        lastUpdatedDate: "1 January 2025",
        portfolioLabel: "Portfolio",
        sinceLabel: "Appointed",
        partyLabel: "Party",
        ministerLabel: "Minister",
        deputyMinisterLabel: "Deputy Minister",
        members: [
          {
            name: "YAB Dato' Sri Haji Anwar Ibrahim",
            portfolio: "Prime Minister / Finance",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Ahmad Maslan",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Haji Fadhlina binti Sidek",
            portfolio: "Education",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Lim Hui Ying",
            deputyImage:
              "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Saifuddin Nasution bin Ismail",
            portfolio: "Home Affairs",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Dr. Shamsul Anuar Nasarah",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Haji Mohamad bin Hj Hassan",
            portfolio: "Defence",
            party: "UMNO",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Adly Zahari",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Zambry bin Abdul Kadir",
            portfolio: "Foreign Affairs",
            party: "UMNO",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Mohamad Alamin",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Dr. Dzulkefly bin Ahmad",
            portfolio: "Health",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Lukanisman Awang Sauni",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Seri Alexander Nanta Linggi",
            portfolio: "Development & Housing",
            party: "GPS",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Huang Tiong Sii",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Nga Kor Ming",
            portfolio: "National Unity & Social Welfare",
            party: "DAP",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Saraswathy Kandasami",
            deputyImage:
              "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Gobind Singh Deo",
            portfolio: "Digital & Communications",
            party: "DAP",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Ugak Anak Kumbong",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Hannah Yeoh",
            portfolio: "Youth & Sports",
            party: "DAP",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Adam Adli Abd Halim",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Seri Tiong King Sing",
            portfolio: "Tourism, Arts and Culture",
            party: "PBB",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Khairul Firdaus Akbar Khan",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Haji Takiyuddin bin Hassan",
            portfolio: "Human Resources",
            party: "PAS",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Mustapha Sakmud",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Anthony Loke Siew Fook",
            portfolio: "Transport",
            party: "DAP",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Hasbi Habibollah",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Nik Nazmi bin Nik Ahmad",
            portfolio: "Natural Resources, Environment & Climate Change",
            party: "PKR",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Sri Huang Tiong Sii",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Tengku Zafrul bin Tengku Abdul Aziz",
            portfolio: "Investment, Trade & Industry",
            party: "UMNO",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Liew Chin Tong",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Sri Haji Mahdzir bin Khalid",
            portfolio: "Agriculture & Food Security",
            party: "UMNO",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Arthur Joseph Kurup",
            deputyImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Tuan Ibrahim bin Tuan Man",
            portfolio: "Public Works",
            party: "PAS",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Ahmad Maslan",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Dato' Seri Muhamad Sanusi bin Md Nor",
            portfolio: "Economy",
            party: "PN",
            since: "Feb 2024",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Hanifah Hajar Taib",
            deputyImage:
              "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Khalid Abdul Samad",
            portfolio: "Federal Territories",
            party: "Amanah",
            since: "Nov 2022",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Datuk Seri Dr. Shamsul Anuar Nasarah",
            deputyImage:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
          },
          {
            name: "YB Akmal Nasrullah Mohd Nasir",
            portfolio: "Communications",
            party: "UMNO",
            since: "Jan 2024",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            deputy: "YB Teo Nie Ching",
            deputyImage:
              "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=400&auto=format&fit=crop",
          },
        ],
      },
      parties: {
        breadcrumbCurrent: "Political Parties",
        pageTitle: "Political Parties of Inderaloka",
        pageDesc:
          "The major political parties shaping the landscape of Inderaloka's parliamentary democracy.",
        governingLabel: "Governing Parties (Pakatan Madani)",
        oppositionLabel: "Opposition Parties",
        foundedLabel: "Founded",
        seatsLabel: "Parliament Seats",
        leaderLabel: "Leader",
        items: [
          {
            name: "Parti Keadilan Rakyat (PKR)",
            leader: "Dato' Sri Anwar Ibrahim",
            founded: "1999",
            seats: "31",
            ideology: "Social Democracy, Reformism",
            coalition: "Pemerintah",
            desc: "The leading reform party currently heading the federal government.",
          },
          {
            name: "Democratic Action Party (DAP)",
            leader: "Lim Guan Eng",
            founded: "1966",
            seats: "40",
            ideology: "Social Democracy, Secularism",
            coalition: "Pemerintah",
            desc: "A multiracial party championing equality and social justice.",
          },
          {
            name: "Parti Amanah Negara (Amanah)",
            leader: "Mohamad Sabu",
            founded: "2015",
            seats: "11",
            ideology: "Progressive Islam",
            coalition: "Pemerintah",
            desc: "A progressive Islamic party combining Islamic values with modern democracy.",
          },
          {
            name: "United Malays National Organisation (UMNO)",
            leader: "Ahmad Zahid Hamidi",
            founded: "1946",
            seats: "26",
            ideology: "Malay Nationalism, Conservatism",
            coalition: "Pemerintah",
            desc: "The oldest and most historic Malay political party in Inderaloka.",
          },
          {
            name: "Gabungan Parti Sarawak (GPS)",
            leader: "Abang Abdul Rahman Zohari",
            founded: "2018",
            seats: "23",
            ideology: "Conservatism, Sarawak Federalism",
            coalition: "Pemerintah",
            desc: "A coalition of Sarawak parties serving as the federal government's partner.",
          },
          {
            name: "Perikatan Nasional (PN)",
            leader: "Muhyiddin Yassin",
            founded: "2020",
            seats: "73",
            ideology: "Conservatism, Malay-Islamic Nationalism",
            coalition: "Pembangkang",
            desc: "The main opposition bloc comprising BERSATU and PAS.",
          },
        ],
      },
      legislative: {
        breadcrumbCurrent: "Legislative",
        pageTitle: "Legislative Branch",
        pageDesc:
          "Parliament of Inderaloka — the supreme legislative body comprising the Senate and the House of Representatives.",
        subpages: [
          {
            href: "/government/legislative/parliament",
            title: "Parliament",
            desc: "An overview of Parliament of Inderaloka and the legislative process.",
          },
          {
            href: "/government/legislative/senate",
            title: "Senate (Dewan Negara)",
            desc: "The Upper House — senators, functions, and procedures of the Senate.",
          },
          {
            href: "/government/legislative/house-of-representatives",
            title: "House of Representatives",
            desc: "The Lower House — elected members of parliament and the functions of the House.",
          },
        ],
      },
      parliament: {
        breadcrumbCurrent: "Parliament",
        pageTitle: "Parliament of Inderaloka",
        pageDesc:
          "The supreme legislative body — where bills are drafted, debated, and enacted into law.",
        overviewTitle: "Parliament Overview",
        overviewBody:
          "Parliament of Inderaloka comprises the Yang di-Pertuan Agong and two Houses: the Senate (Upper House) and the House of Representatives (Lower House). Parliament acts as the supreme legislative body enacting federal law, approving the national budget, and scrutinising executive action.",
        statsLabel: "Parliamentary Facts",
        stats: [
          { label: "Current Session", value: "16th" },
          { label: "Members of Parliament", value: "222" },
          { label: "Senators", value: "70" },
          { label: "Last Sitting", value: "March 2026" },
        ],
        processTitle: "Legislative Process",
        processSteps: [
          {
            step: "01",
            title: "Introduction of Bill",
            desc: "A bill is introduced in the House of Representatives or Senate by a minister or member of parliament.",
          },
          {
            step: "02",
            title: "First & Second Reading",
            desc: "The bill is read and debated in detail by members of parliament.",
          },
          {
            step: "03",
            title: "Committee Stage",
            desc: "The bill is referred to a parliamentary committee for thorough review.",
          },
          {
            step: "04",
            title: "Third Reading & Vote",
            desc: "The bill is voted upon by simple majority to be passed.",
          },
          {
            step: "05",
            title: "Second House",
            desc: "The passed bill is sent to the other House for the same process.",
          },
          {
            step: "06",
            title: "Royal Assent",
            desc: "The Yang di-Pertuan Agong assents to the passed bill, enacting it into law.",
          },
        ],
      },
      senate: {
        breadcrumbCurrent: "Senate",
        pageTitle: "Senate (Dewan Negara)",
        pageDesc:
          "The Upper House of Parliament of Inderaloka — a revising chamber that examines and refines bills passed by the House of Representatives.",
        overviewTitle: "Functions of the Senate",
        overviewBody:
          "The Senate comprises 70 Senators — 44 appointed by the Yang di-Pertuan Agong on the advice of the Prime Minister, and 26 elected by State Legislative Assemblies (2 from each state). Senators serve three-year terms and may be reappointed once.",
        presidentLabel: "President of the Senate",
        presidentName: "YB Tan Sri Wan Junaidi Tuanku Jaafar",
        compositionTitle: "Chamber Composition",
        appointed: "Appointed by YDPA",
        appointedCount: "44",
        elected: "Elected by State Assemblies",
        electedCount: "26",
        powersTitle: "Powers and Limitations of the Senate",
        powers: [
          "Reviewing and amending bills from the House of Representatives",
          "Providing expert opinion in specific fields",
          "May delay non-money bills for up to 1 year",
          "Cannot reject or amend Money Bills",
        ],
      },
      houseOfReps: {
        breadcrumbCurrent: "House of Representatives",
        pageTitle: "House of Representatives (Dewan Rakyat)",
        pageDesc:
          "The Lower House of Parliament of Inderaloka — the people's chamber elected by general election every 5 years.",
        overviewTitle: "House of Representatives Overview",
        overviewBody:
          "The House of Representatives comprises 222 Members of Parliament elected by general election on a first-past-the-post basis. Members represent their respective constituencies and serve for a maximum of 5 years. The House is the more powerful chamber, with exclusive authority over finance bills.",
        speakerLabel: "Speaker of the House",
        speakerName: "YB Tan Sri Johari Abdul",
        statsLabel: "Chamber Statistics",
        stats: [
          { label: "Total Seats", value: "222" },
          { label: "Governing", value: "149" },
          { label: "Opposition", value: "73" },
          { label: "Current Term", value: "2022–2027" },
        ],
        partiesTitle: "Party Strength in the House",
        currentParties: [
          { party: "Pakatan Madani", seats: "149", color: "Governing" },
          { party: "Perikatan Nasional", seats: "73", color: "Opposition" },
        ],
      },
      judiciary: {
        breadcrumbCurrent: "Judiciary",
        pageTitle: "Judicial Branch",
        pageDesc:
          "The independent judiciary of Inderaloka — interpreting the law, protecting constitutional rights, and upholding justice.",
        subpages: [
          {
            href: "/government/judiciary/chief-justice",
            title: "Chief Justice",
            desc: "Profile of the Chief Justice and the apex of judicial leadership.",
          },
          {
            href: "/government/judiciary/supreme-court",
            title: "Federal Court",
            desc: "Inderaloka's highest court — the final guardian of the Constitution.",
          },
          {
            href: "/government/judiciary/court-of-appeal",
            title: "Court of Appeal",
            desc: "The intermediate court hearing civil and criminal appeals.",
          },
          {
            href: "/government/judiciary/syariah-court",
            title: "Syariah Courts",
            desc: "The Islamic judicial system for personal and family matters of Muslims.",
          },
        ],
      },
      chiefJustice: {
        breadcrumbCurrent: "Chief Justice",
        pageTitle: "Chief Justice of Inderaloka",
        pageDesc:
          "Tan Sri Tengku Maimun binti Tuan Mat — First Female Chief Justice of Inderaloka",
        portraitLabel: "Official Portrait\nChief Justice",
        officialTitleLabel: "Official Title",
        officialTitle: "Chief Justice of the Federal Court of Inderaloka",
        appointedLabel: "Date Appointed",
        appointed: "2 May 2019",
        educationLabel: "Qualifications",
        education:
          "LLB (University of Malaya); Bumiputera Legal Training Centre; Sessions Court Judge (1990); High Court Judge (2010)",
        roleTitle: "Role of the Chief Justice",
        roleBody:
          "The Chief Justice is the highest leader of the Inderaloka judiciary. Responsible for presiding over the Federal Court, chairing en banc sittings, and ensuring the smooth administration of justice throughout the nation.",
        dutiesTitle: "Functions and Duties",
        duties: [
          "Presiding over the Federal Court in all federal cases",
          "Overseeing the administration of the national judicial system",
          "Recommending judicial appointments for the Yang di-Pertuan Agong's consent",
          "Safeguarding the integrity and independence of the judiciary",
          "Leading law reform and modernisation of the courts",
        ],
      },
      supremeCourt: {
        breadcrumbCurrent: "Federal Court",
        pageTitle: "Federal Court of Inderaloka",
        pageDesc:
          "The highest court and final guardian of the Constitution of Inderaloka — no appeal lies from its decisions.",
        overviewTitle: "About the Federal Court",
        overviewBody:
          "The Federal Court is the highest and most powerful court in the judicial system of Inderaloka. Established under Article 121(1) of the Federal Constitution, the Court has exclusive jurisdiction over constitutional questions, and its decisions are final and binding on all other courts.",
        jurisdictionTitle: "Jurisdiction",
        compositionTitle: "Court Composition",
        composition:
          "The Federal Court comprises the Chief Justice, President of the Court of Appeal, two Chief Judges, and other federal justices.",
        jurisdictions: [
          {
            type: "Original",
            desc: "Appeals from the Court of Appeal and cases involving questions of federal law",
          },
          {
            type: "Constitutional",
            desc: "Exclusive jurisdiction to interpret the Federal Constitution and determine its validity",
          },
          {
            type: "Reference",
            desc: "Questions of law referred by any lower court",
          },
        ],
        landmarkTitle: "Landmark Cases",
        landmarkCases: [
          {
            year: "1988",
            title:
              "A case that recharted the boundaries between judicial power and the legislature.",
          },
          {
            year: "2001",
            title:
              "Reinterpretation of fundamental rights concerning freedom of expression in the digital age.",
          },
          {
            year: "2018",
            title:
              "A historic decision affirming the independence of the judiciary.",
          },
        ],
      },
      courtOfAppeal: {
        breadcrumbCurrent: "Court of Appeal",
        pageTitle: "Court of Appeal of Inderaloka",
        pageDesc:
          "The intermediate court hearing appeals from the High Court in civil and criminal matters.",
        overviewTitle: "About the Court of Appeal",
        overviewBody:
          "The Court of Appeal hears appeals from decisions of the High Court. Established in 1994, the Court sits in Putrajaya and hears civil and criminal cases. It comprises 30 judges led by the President of the Court of Appeal.",
        presidentLabel: "President of the Court of Appeal",
        presidentName: "Tan Sri Dato' Rohana Yusuf",
        jurisdictionTitle: "Jurisdiction",
        jurisdictions: [
          "Appeals from all decisions of the High Court",
          "Criminal cases involving the death penalty or imprisonment exceeding 1 year",
          "Civil cases involving a value exceeding RI 250,000",
          "All appeals from family law cases",
        ],
      },
      syariahCourt: {
        breadcrumbCurrent: "Syariah Courts",
        pageTitle: "Syariah Courts of Inderaloka",
        pageDesc:
          "The Islamic judicial system governing personal, family, and Syariah criminal matters for Muslims in Inderaloka.",
        overviewTitle: "Syariah Courts Overview",
        overviewBody:
          "The Syariah Courts govern Islamic law for Muslims only. Their jurisdiction covers matters such as marriage, divorce, inheritance, guardianship, and Syariah offences. Syariah Courts are regulated by state governments under the Ninth Schedule of the Constitution.",
        levelsTitle: "Levels of the Syariah Courts",
        levels: [
          {
            name: "Syariah Appeal Court",
            desc: "Highest level — hears appeals from the Syariah High Court.",
          },
          {
            name: "Syariah High Court",
            desc: "Hears serious cases including hudud and qisas criminal offences.",
          },
          {
            name: "Syariah Subordinate Court",
            desc: "Hears cases of marriage, divorce, and maintenance.",
          },
        ],
        jurisdictionTitle: "Jurisdiction",
        jurisdictions: [
          "Marriage, divorce, and maintenance of Muslims",
          "Administration of Muslim estates and wills",
          "Breach of Syariah criminal law (ta'zir)",
          "Conversion to and from Islam",
        ],
      },
      stateOfficials: {
        breadcrumbCurrent: "State Officials",
        pageTitle: "Senior State Officials",
        pageDesc:
          "Senior government officers heading key national institutions outside the Cabinet.",
        officials: [
          {
            role: "Attorney General",
            name: "Tan Sri Ahmad Terrirudin bin Mohd Salleh",
            since: "August 2022",
            office: "Attorney General's Chambers",
            desc: "The Attorney General is the government's principal legal adviser and Federal Public Prosecutor. Responsible for all federal criminal prosecutions and advising the government on legal affairs.",
            duties: [
              "Advising the government on all legal matters",
              "Initiating and conducting all federal criminal prosecutions",
              "Representing the government in judicial proceedings",
              "Drafting and reviewing legislation",
            ],
          },
          {
            role: "Accountant General",
            name: "Tan Sri Dr. Madinah binti Mohamad",
            since: "June 2020",
            office: "Accountant General's Department",
            desc: "The Accountant General is responsible for overseeing public accounts, ensuring financial compliance, and managing the federal government's accounting system.",
            duties: [
              "Managing federal public accounts",
              "Certifying ministerial financial statements",
              "Ensuring compliance with the Public Finance Act",
              "Developing public sector accounting policies",
            ],
          },
          {
            role: "Inspector General of Police",
            name: "Tan Sri Razarudin bin Husain",
            since: "May 2023",
            office: "Royal Inderaloka Police (PDRM)",
            desc: "The Inspector General of Police heads the Royal Inderaloka Police and is responsible for internal security, crime prevention, and law enforcement.",
            duties: [
              "Leading national police operations",
              "Managing internal security and crime",
              "Coordinating with other security agencies",
              "Implementing national security policy",
            ],
          },
          {
            role: "Chief of the Armed Forces",
            name: "General Tan Sri Mohd Amdzan bin Abu Bakar",
            since: "February 2024",
            office: "Armed Forces of Inderaloka (ATI)",
            desc: "The Chief of the Armed Forces is the senior military officer of Inderaloka responsible for defence, border security, and military operations.",
            duties: [
              "Leading the three branches of ATI (Army, Navy, Air Force)",
              "Advising the Cabinet on defence matters",
              "Overseeing military training and readiness",
              "Managing peacekeeping and disaster operations",
            ],
          },
          {
            role: "Governor of the Central Bank",
            name: "Dato' Sri Abdul Rasheed bin Ghaffour",
            since: "June 2023",
            office: "Bank Negara Inderaloka (BNI)",
            desc: "The Governor of the Central Bank leads the nation's central bank and is responsible for financial stability, monetary policy, and supervising Inderaloka's banking system.",
            duties: [
              "Formulating and implementing monetary policy",
              "Regulating the banking and financial system",
              "Managing national international reserves",
              "Ensuring price stability and financial system integrity",
            ],
          },
          {
            role: "Ambassadors & High Commissioners",
            name: "52 Diplomatic Missions",
            since: "Various",
            office: "Ministry of Foreign Affairs",
            desc: "Inderaloka maintains an extensive diplomatic network worldwide. Ambassadors and High Commissioners represent Inderaloka's interests in foreign countries.",
            duties: [
              "Representing Inderaloka's national interests abroad",
              "Managing bilateral diplomatic relations",
              "Protecting Inderaloka's citizens in the host country",
              "Promoting bilateral trade and cooperation",
            ],
          },
        ],
      },
    },

    // Services extended pages
    healthcarePage: {
      breadcrumbHome: "Home",
      breadcrumbParent: "Services",
      breadcrumbCurrent: "Healthcare Institutions",
      pageTitle: "Government Healthcare Institutions",
      pageDesc:
        "The network of government hospitals, clinics, and health centres serving citizens across Inderaloka.",
      hospitalsLabel: "Government Hospitals",
      clinicsLabel: "Health Clinics",
      addressLabel: "Address",
      bedsLabel: "Beds",
      phoneLabel: "Phone",
      servicesLabel: "Key Services",
      hospitalNameLabel: "Hospital",
      hospitals: [
        {
          name: "Kuala Inderaloka Hospital",
          address: "Jalan Pahang, 50586 Inderaloka",
          beds: "2,200",
          phone: "+603-2615 5555",
          services: "Traumatology, Oncology, Cardiology, Neurology",
        },
        {
          name: "Selayang Hospital",
          address: "Jalan Selayang, 68100 Batu Caves",
          beds: "970",
          phone: "+603-6120 3000",
          services: "Gastroenterology, Hepatology, Pulmonology",
        },
        {
          name: "Ampang Hospital",
          address: "Jalan Mewah Utama, 68000 Ampang",
          beds: "750",
          phone: "+603-4289 3000",
          services: "Oncology, Haematology, Paediatrics",
        },
        {
          name: "Sultanah Aminah Hospital",
          address: "Jalan Abu Bakar, 80100 Johor Bahru",
          beds: "1,000",
          phone: "+607-225 5000",
          services: "General Surgery, Orthopaedics, O&G",
        },
        {
          name: "Penang Hospital",
          address: "Jalan Residensi, 10990 George Town",
          beds: "600",
          phone: "+604-222 5333",
          services: "Cardiology, Neurology, Paediatrics",
        },
        {
          name: "Queen Elizabeth II Hospital",
          address: "Jalan Utama, 88586 Kota Kinabalu, Sabah",
          beds: "840",
          phone: "+608-831 7000",
          services: "Traumatology, Paediatrics, O&G",
        },
      ],
      clinics: [
        {
          name: "Chow Kit Health Clinic",
          address: "Jalan Chow Kit, 50350 Inderaloka",
          services: "Primary care, Mother & Child",
        },
        {
          name: "Sentul Health Clinic",
          address: "Jalan Sentul Pasar, 51000 Inderaloka",
          services: "Diabetes, Hypertension, Paediatrics",
        },
        {
          name: "Petaling Jaya Health Clinic",
          address: "Jalan Universiti, 46200 Petaling Jaya",
          services: "Primary care, Vaccination",
        },
        {
          name: "Ipoh Timur Health Clinic",
          address: "Jalan Raja Dr. Nazrin Shah, 31400 Ipoh",
          services: "Primary care, Elderly Care",
        },
        {
          name: "Kota Bharu Health Clinic",
          address: "Jalan Sultanah Zainab, 15050 Kota Bharu",
          services: "Primary care, Mother & Child",
        },
        {
          name: "Kuching Utara Health Clinic",
          address: "Jalan Satok, 93400 Kuching",
          services: "Primary care, Diabetes",
        },
      ],
    },
    educationPage: {
      breadcrumbHome: "Home",
      breadcrumbParent: "Services",
      breadcrumbCurrent: "Education",
      pageTitle: "Government Education Institutions",
      pageDesc:
        "Public universities, national secondary schools, and government primary schools across Inderaloka.",
      uniLabel: "Public Universities",
      schoolsSecLabel: "National Secondary Schools",
      schoolsPriLabel: "National Primary Schools",
      locationLabel: "Location",
      enrollmentLabel: "Enrolment",
      programsLabel: "Key Programmes",
      rankingLabel: "Ranking",
      typeLabel: "Type",
      schoolNameLabel: "School",
      universities: [
        {
          name: "University of Inderaloka (UM)",
          location: "Kuala Inderaloka",
          enrollment: "22,000",
          programs: "Medicine, Law, Engineering, Sciences",
          ranking: "QS #1 Inderaloka",
        },
        {
          name: "Inderaloka Science University (USI)",
          location: "Penang",
          enrollment: "27,000",
          programs: "Science, Technology, Engineering, Medicine",
          ranking: "QS #2 Inderaloka",
        },
        {
          name: "Inderaloka Technology University (UTI)",
          location: "Johor Bahru",
          enrollment: "33,000",
          programs: "Engineering, Computer Science, Architecture",
          ranking: "QS #3 Inderaloka",
        },
        {
          name: "National University of Inderaloka (UKI)",
          location: "Bangi, Selangor",
          enrollment: "28,000",
          programs: "Sciences, Arts, Medicine, Law",
          ranking: "QS #4 Inderaloka",
        },
        {
          name: "Inderaloka Agricultural University (UPI)",
          location: "Serdang, Selangor",
          enrollment: "25,000",
          programs: "Agriculture, Biotechnology, Veterinary, Sciences",
          ranking: "QS #5 Inderaloka",
        },
        {
          name: "International Islamic University Inderaloka (UIAI)",
          location: "Gombak, Selangor",
          enrollment: "18,000",
          programs: "Islamic Law, Economics, Education",
          ranking: "QS #6 Inderaloka",
        },
      ],
      secondarySchools: [
        {
          name: "SMK Victoria",
          location: "Kuala Inderaloka",
          enrollment: "2,100",
          type: "SMK",
        },
        {
          name: "SMK Aminuddin Baki",
          location: "Kuala Inderaloka",
          enrollment: "1,950",
          type: "SMK",
        },
        {
          name: "SMK Anderson",
          location: "Ipoh, Perak",
          enrollment: "1,800",
          type: "SMK",
        },
        {
          name: "SM Sains Selangor",
          location: "Kuala Inderaloka",
          enrollment: "900",
          type: "MRSM",
        },
        {
          name: "MRSM Bentong",
          location: "Bentong, Pahang",
          enrollment: "850",
          type: "MRSM",
        },
        {
          name: "Sekolah Alam Shah",
          location: "Cheras, Selangor",
          enrollment: "1,600",
          type: "SMK",
        },
      ],
      primarySchools: [
        {
          name: "SK Bukit Damansara",
          location: "Damansara, Inderaloka",
          enrollment: "1,200",
          type: "SK",
        },
        {
          name: "SK St. John",
          location: "Kuala Inderaloka",
          enrollment: "1,100",
          type: "SK",
        },
        {
          name: "SK Bangsar",
          location: "Bangsar, Inderaloka",
          enrollment: "980",
          type: "SK",
        },
        {
          name: "SK Convent Bukit Nanas",
          location: "Kuala Inderaloka",
          enrollment: "900",
          type: "SK",
        },
        {
          name: "SK Seri Petaling",
          location: "Petaling, Inderaloka",
          enrollment: "1,050",
          type: "SK",
        },
        {
          name: "SK Georgetown",
          location: "George Town, Penang",
          enrollment: "820",
          type: "SK",
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations.ms;
