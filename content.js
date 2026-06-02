// ============================================================
// CONTENT.JS — Semua teks presentasi ada di sini
// ============================================================

const CONTENT = {

  // ── LOADING SCREEN ──────────────────────────────────
  loading: {
    groupName: "KELOMPOK 10",
    instruction: "Menunggu presentasi dimulai",
  },

  // ── HERO ────────────────────────────────────────────
  hero: {
    badge: "FMIPA IPB University · 2026",
    titleLine1: "Paradoks Dampak",
    titleLine2: "Artificial Intelligence",
    titleLine3: "terhadap Pembelajaran",
    subtitle: "Analisis Statistik Tingkat Penggunaan, Persepsi, dan Dampak Perangkat AI terhadap Proses Pembelajaran Mahasiswa FMIPA IPB University",
  },

  // ── TEAM ────────────────────────────────────────────
  team: {
    heading: "Meet the Team",
    members: [
      { name: "Muhammad Dandy N.", nim: "G0401251041", role: "Ketua · Kimia", photo: "assets/kelompok/dandy.png" },
      { name: "Rifdah Ariibah", nim: "G4401251005", role: "Anggota · Kimia", photo: "assets/kelompok/rifdah.png" },
      { name: "Nadira Azrina", nim: "G8401251080", role: "Anggota · Kimia", photo: "assets/kelompok/nadira.png" },
      { name: "Cut Wulan Nayyara", nim: "G2401251043", role: "Anggota · Kimia", photo: "assets/kelompok/cut.png" },
      { name: "Maheswari Astagina K.", nim: "G2401251077", role: "Anggota · Geofisika", photo: "assets/kelompok/asa.png" },
      { name: "Najwa Aura Wardani", nim: "G0401251058", role: "Anggota · Geofisika", photo: "assets/kelompok/awa.png" },
      { name: "M. Fathan Rizqina N.", nim: "G2401251048", role: "Anggota · Bioinformatika", photo: "assets/kelompok/fathan.png" },
      { name: "Fikhar Hanuratama R.", nim: "G2401251059", role: "Anggota · Fisika", photo: "assets/kelompok/fikhar.png" },
    ],
  },

  // ── LATAR BELAKANG ──────────────────────────────────
  background: {
    badge: "PENDAHULUAN",
    heading: "AI telah mengubah\ncara kita belajar.",
    paragraphs: [
      "ChatGPT, Gemini, Perplexity, dan Mendeley AI mengubah cara mahasiswa mencari informasi, menyusun argumentasi, dan mengelola tugas akademik. Setyaningsih & Putri (2025) menegaskan AI sebagai sarana krusial peningkatan kompetensi akademik, sementara Suazo-Galdamés & Chaple-Gil (2025) mengonfirmasi kontribusi AI terhadap efisiensi operasional di pendidikan tinggi.",
      "Namun antusiasme terhadap AI tidak datang tanpa kekhawatiran — Suh & Ahn (2022) menunjukkan ketergantungan berlebihan dapat melemahkan berpikir kritis, sementara Kasneci et al. (2023) mengidentifikasi risiko erosi orisinalitas dan ancaman integritas akademik.",
      "Penelitian terdahulu hanya melihat dampak satu dimensi — positif ATAU negatif. Yang jarang dibahas adalah paradoks: kedua dampak bisa terjadi bersamaan pada populasi yang sama. Penelitian ini menguji paradoks tersebut secara empiris melalui dual-outcome regression.",
    ],
    stats: [
      { value: "4.24", label: "Mean penggunaan AI generatif (ChatGPT, Gemini)", color: "blue" },
      { value: "3.68", label: "Mean penggunaan AI riset spesifik (Perplexity, Mendeley)", color: "purple" },
    ],
  },

  // ── TUJUAN PENELITIAN ───────────────────────────────
  objectives: {
    badge: "TUJUAN",
    heading: "Tiga pertanyaan\nyang kami jawab.",
    questions: [
      { number: "01", text: "Bagaimana profil penggunaan AI mahasiswa FMIPA IPB University?" },
      { number: "02", text: "Apakah frekuensi penggunaan dan persepsi AI (TAM) memprediksi Self-Regulated Learning adaptif?" },
      { number: "03", text: "Apakah variabel yang sama juga memprediksi risiko ketergantungan akademik — dan bagaimana paradoksnya?" },
    ],
  },

  // ── METODOLOGI ──────────────────────────────────────
  methodology: {
    badge: "METODOLOGI",
    heading: "Pendekatan kuantitatif\ndeskriptif-analitik.",
    cards: [
      {
        icon: "01",
        title: "Technology Acceptance Model",
        desc: "TAM Davis (1989): Perceived Ease of Use (PEOU) & Perceived Usefulness (PU). Hwang & Chen (2023): TAM juga memitigasi risiko penggunaan teknologi.",
      },
      {
        icon: "02",
        title: "Self-Regulated Learning",
        desc: "Kerangka SRL Zimmerman (2002): perencanaan, eksekusi, evaluasi. Chan & Hu (2023) serta Crompton & Burke (2023): SRL adaptif dan technology dependency adalah dua dimensi independen.",
      },
      {
        icon: "03",
        title: "Instrumen Survei",
        desc: "13 butir Likert 1-5 berbasis kuesioner website: 3 butir Frekuensi AI, 5 butir Persepsi TAM (PEOU+PU), 5 butir SRL (item terakhir SRL_Risk = formulasi negatif).",
      },
    ],
    statsRow: [
      { value: "34", label: "Mahasiswa aktif FMIPA IPB" },
      { value: "6", label: "Program Studi" },
      { value: "13", label: "Item Likert 1-5" },
      { value: "7", label: "Tahap Analisis" },
    ],
  },

  // ── PENGOLAHAN DATA (HORIZONTAL SCROLL) ─────────────
  dataProcessing: {
    badge: "PENGOLAHAN DATA",
    panels: [
      {
        step: "01",
        title: "Statistik Deskriptif",
        highlight: { value: "4.03", label: "Mean agregat 13 item (median=4, modus=4)" },
        desc: "Mean agregat 13 item = 4,03 (median=4, modus=4). AI generatif (ChatGPT, Gemini) mean=4,24 vs AI riset spesifik (Perplexity, Mendeley) mean=3,68. Distribusi respons menunjukkan kecenderungan skor tinggi pada item TAM (Persepsi Kemudahan & Kebermanfaatan).",
        image: "assets/charts/gambar_distribusi_likert_NoTitle.png",
        imageCaption: "Heatmap distribusi respons Likert per item",
      },
      {
        step: "01",
        title: "Profil Responden",
        highlight: { value: "34", label: "Mahasiswa aktif FMIPA IPB (6 program studi)" },
        desc: "Kimia (n=14, 41,18%), Geofisika & Meteorologi (n=12, 35,29%), Bioinformatika, Biokimia, Biologi, dan Fisika. Angkatan 2025 dominan (n=22, 64,71%), diikuti 2024 (n=9, 26,47%) dan 2023 (n=3, 8,82%).",
        image: "assets/charts/gambar_demografis.png",
        imageCaption: "Distribusi responden per program studi dan angkatan",
      },
      {
        step: "02",
        title: "Uji Validitas & Reliabilitas",
        highlight: { value: "0.809", label: "Cronbach Alpha TAM (sangat reliabel)" },
        desc: "Seluruh 13 item valid: r-hitung > r-tabel 0,339 (df=32, α=0,05), sig < 0,001. Tertinggi: TAM_PU3 (r=0,758), TAM_PEOU2 (r=0,752). Terendah: SRL_Risk (r=0,402). Reverse coding SRL_Risk menurunkan alpha dari 0,580 menjadi 0,386 — bukti SRL_Risk mengukur konstruk berbeda.",
        table: {
          headers: ["Konstruk", "Alpha", "Keterangan"],
          rows: [
            ["AI Usage (3 item)", "0,573", "Cukup reliabel"],
            ["TAM Total (5 item)", "0,809", "Sangat reliabel"],
            ["SRL Positif (4 item)", "0,675", "Cukup reliabel"],
            ["SRL Risk (1 item)", "—", "Single-item, konstruk terpisah"],
          ],
        },
      },
      {
        step: "03",
        title: "Uji Asumsi Klasik",
        highlight: { value: "1.895", label: "VIF (jauh di bawah ambang kritis 10)" },
        desc: "Kolmogorov-Smirnov: tidak normal sempurna, namun mendekati CLT — regresi bersifat robust. Tolerance = 0,528 (bebas multikolinearitas). Breusch-Pagan p > 0,05: homoskedastisitas terpenuhi. Semua asumsi klasik dipenuhi.",
        checks: [
          { name: "Normalitas (K-S)", status: "pass", note: "Mendekati CLT, regresi robust" },
          { name: "Multikolinearitas", status: "pass", note: "VIF = 1,895 | Tolerance = 0,528" },
          { name: "Heteroskedastisitas (BP)", status: "pass", note: "p > 0,05 — homoskedastisitas" },
        ],
      },
      {
        step: "04",
        title: "Korelasi Spearman",
        highlight: { value: "+0.404", label: "rho TAM vs SRL Positif (p = 0,018*)" },
        desc: "TAM ↔ SRL Positif: rho=+0,404; p=0,018 (sedang, signifikan). Frekuensi ↔ SRL Positif: rho=+0,323; p=0,062 (lemah, marginal). Frekuensi ↔ SRL Risk: rho=+0,310; p=0,074 (lemah, marginal). TAM ↔ SRL Risk: rho=+0,069; p=0,697 (sangat lemah). X1 ↔ X2: rho=+0,688; p<0,001 (kuat, signifikan).",
        image: "assets/charts/gambar_spearman_NoTitle.png",
        imageCaption: "Matriks korelasi Spearman antar variabel",
      },
      {
        step: "05",
        title: "Regresi Linear Berganda",
        highlight: { value: "2", label: "Model dual-outcome regresi paralel" },
        desc: "Model 1 (SRL Positif): Frekuensi AI beta=+0,154; p=0,448 (tidak signifikan). Persepsi TAM beta=+0,337; p=0,103. Model 2 (SRL Risk): Frekuensi AI beta=+0,509; p=0,018 (SIGNIFIKAN). Persepsi TAM beta=-0,297; p=0,156. Paradoks: frekuensi tinggi memprediksi risiko, bukan kemandirian.",
        models: [
          {
            name: "Model 1 — SRL Positif (Y₁)",
            equation: "Y₁ = 2,545 + 0,123·X₁ + 0,293·X₂",
            r2: "0,199",
            fSig: "F=3,850; p=0,032*",
          },
          {
            name: "Model 2 — SRL Risk (Y₂)",
            equation: "Y₂ = 2,410 + 0,852·X₁ − 0,542·X₂",
            r2: "0,167",
            fSig: "F=3,110; p=0,059",
          },
        ],
      },
    ],
  },

  // ── PARADOKS ────────────────────────────────────────
  paradox: {
    badge: "TEMUAN UTAMA",
    heading: "The AI Paradox.",
    left: {
      emoji: "",
      title: "Frekuensi Tinggi",
      subtitle: "= Risiko Ketergantungan",
      beta: "+0.509",
      pValue: "p = 0.018* (Model 2 signifikan)",
      desc: "Semakin sering pakai AI, semakin besar risiko ketergantungan akademik (beta=+0,509; p=0,018). Namun frekuensi tinggi TIDAK otomatis meningkatkan SRL adaptif (beta=+0,154; p=0,448). Selaras Suh & Ahn (2022): dampak AI bersifat kontekstual.",
      color: "red",
    },
    right: {
      emoji: "",
      title: "Persepsi Matang",
      subtitle: "= Perlindungan Ganda",
      beta: "-0.297",
      rho: "rho = +0.404 (p = 0.018*)",
      desc: "Persepsi positif TAM memitigasi risiko ketergantungan (beta=-0,297) sekaligus mendukung SRL adaptif (beta=+0,337; rho=+0,404; p=0,018). Kasneci et al. (2023): risiko dimitigasi dengan kompetensi kritis.",
      color: "blue",
    },
    image: "assets/charts/gambar_paradoks_NoTitle.png",
    imageCaption: "Komparasi koefisien Beta standar: Model 1 vs Model 2",
  },

  // ── KESIMPULAN ──────────────────────────────────────
  conclusion: {
    badge: "KESIMPULAN",
    heading: "Literasi AI,\nbukan sekadar akses.",
    tiles: [
      {
        icon: "01",
        title: "Paradoks Terbukti",
        desc: "Frekuensi penggunaan AI memprediksi risiko ketergantungan (beta=+0,509; p=0,018) tapi tidak otomatis meningkatkan SRL adaptif (beta=+0,154; p=0,448).",
      },
      {
        icon: "02",
        title: "TAM sebagai Mitigasi",
        desc: "Persepsi positif TAM mendukung SRL adaptif (rho=+0,404; p=0,018) sekaligus memitigasi risiko ketergantungan (beta=-0,297). TAM bukan sekadar prediktor adopsi.",
      },
      {
        icon: "03",
        title: "Implikasi Praktis",
        desc: "Intervensi pendidikan AI harus menekankan literasi yang membangun persepsi matang — bukan sekadar memperbanyak akses dan frekuensi penggunaan.",
      },
      {
        icon: "04",
        title: "Rekomendasi",
        desc: "Perluasan sampel lintas fakultas, instrumen multi-item SRL Risk, dan desain longitudinal untuk membuktikan arah kausalitas.",
      },
    ],
  },

  // ── ICE BREAKING ────────────────────────────────────
  iceBreaking: {
    heading: "Ice Breaking Time!",
    subtitle: "Saatnya dance bareng!",
    buttonStart: "Mulai Dance",
    buttonStop: "Simpan & Lanjut",
    musicPath: "assets/musics/dance.MP3",
  },

  // ── CLOSING ─────────────────────────────────────────
  closing: {
    references: {
      heading: "Daftar Pustaka",
      items: [
        "Chan, C.K.Y. dan Hu, W. (2023). Students' voices on generative AI: perceptions, benefits, and challenges in higher education. International Journal of Educational Technology in Higher Education, 20(1), 43.",
        "Crompton, H. dan Burke, D. (2023). Artificial intelligence in higher education: the state of the field. International Journal of Educational Technology in Higher Education, 20(1), 22.",
        "Hwang, G.J. dan Chen, N.S. (2023). Editorial Position Paper: Exploring the Potential of Generative Artificial Intelligence in Education. Educational Technology and Society, 26(2), 1-18.",
        "Kasneci, E., Sessler, K., Küchemann, S., et al. (2023). ChatGPT for good? On opportunities and challenges of large language models for education. Learning and Individual Differences, 103, 102274.",
        "Kim, J., Lee, H. dan Cho, Y.H. (2022). Learning design to support student-AI collaboration. Education and Information Technologies, 27(5), 6069-6104.",
        "Panigrahi, R., Srivastava, P.R. dan Sharma, D. (2022). Online learning: Adoption, continuance, and learning outcome — a review of literature. International Journal of Information Management, 43, 1-14.",
        "Prasetyo, B. dan Wulandari, S. (2023). Aplikasi Regresi Linear pada Data Non-Normal dengan Sampel Sedang. Jurnal Statistika Terapan, 11(2), 88-101.",
        "Setyaningsih, D. dan Putri, C.J. (2025). Persepsi Mahasiswa terhadap Penggunaan Kecerdasan Buatan (AI) dalam Pengembangan Kompetensi MSDM. RIGGS, 4(2), 165-171.",
        "Strzelecki, A. (2024). To use or not to use ChatGPT in higher education? Interactive Learning Environments, 32(9), 5142-5155.",
        "Suazo-Galdamés, I.C. dan Chaple-Gil, A.M. (2025). Impact of Intelligent Systems and AI Automation on Operational Efficiency. Ingénierie des Systèmes d'Information, 30(4), 1057-1066.",
        "Suh, W. dan Ahn, S. (2022). Development and Validation of a Scale Measuring Student Attitudes Toward AI. SAGE Open, 12(2), 1-12.",
        "Taber, K.S. (2021). The Use of Cronbach's Alpha When Developing and Reporting Research Instruments in Science Education. Research in Science Education, 51, 215-230.",
        "Tittahira, T. dan Usiono, U. (2025). Pengaruh Penggunaan Kecerdasan Buatan terhadap Aktivitas Akademik Mahasiswa. Jurnal Pendidikan dan Teknologi, 8(1), 45-58.",
        "Zawacki-Richter, O., Marín, V.I., Bond, M. dan Gouverneur, F. (2022). Systematic review of research on AI applications in higher education. International Journal of Educational Technology in Higher Education, 19(1), 39.",
      ],
    },
    kolase: {
      photos: [
        "assets/kolase/kolase%20(1).jpeg",
        "assets/kolase/kolase%20(2).jpeg",
        "assets/kolase/kolase%20(3).jpeg",
        "assets/kolase/kolase%20(4).jpeg",
        "assets/kolase/kolase%20(5).jpeg",
        "assets/kolase/kolase%20(6).jpeg",
        "assets/kolase/kolase%20(7).jpeg",
        "assets/kolase/kolase%20(8).jpeg",
        "assets/kolase/kolase%20(9).jpeg",
        "assets/kolase/kolase%20(10).jpeg",
      ],
    },
    musicPath: "assets/musics/clossing.MP3",
    musicPhotoStart: 9,
    musicDuration: 36,
    thankYou: "Terima Kasih",
  },
};
