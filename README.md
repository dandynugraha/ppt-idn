# 🎤 Kelompok 10 — Scrollytelling Presentation

Presentasi web scrollytelling bergaya Apple untuk paper "Paradoks Dampak AI terhadap Pembelajaran Mahasiswa FMIPA IPB University".

---

## 📁 Struktur Folder

Taruh semua file seperti ini:

```
bindo jurnal/ppt/
├── index.html          ← file utama (buka ini di browser)
├── content.js          ← SEMUA teks ada di sini, edit di sini!
├── style.css           ← styling (jangan diubah kecuali perlu)
│
├── assets/
│   ├── kelompok/       ← foto anggota (sudah ada)
│   │   ├── dandy.png
│   │   ├── rifdah.png
│   │   ├── nadira.png
│   │   ├── cut.png
│   │   ├── asa.png
│   │   ├── awa.png
│   │   ├── fathan.png
│   │   └── fikhar.png
│   │
│   ├── logos/          ← logo (sudah ada)
│   │   └── logo ipb.png
│   │
│   ├── charts/         ← pindahkan 4 gambar chart ke sini!
│   │   ├── gambar_distribusi_likert_NoTitle.png
│   │   ├── gambar_paradoks_NoTitle.png
│   │   ├── gambar_spearman_NoTitle.png
│   │   └── responden.png
│   │
│   ├── 3d/             ← hasil generate dari Gemini
│   │   ├── hero.png        ← gambar 3D untuk hero section
│   │   ├── ai-tools.png    ← gambar 3D AI tools floating
│   │   └── survey.png      ← gambar 3D survey/kuesioner
│   │
│   ├── music/
│   │   ├── dance.mp3       ← musik TikTok untuk ice breaking
│   │   └── closing.mp3     ← musik closing (36 detik)
│   │
│   └── kolase/         ← 10 foto kolase untuk closing
│       ├── 1.png
│       ├── 2.png
│       ├── 3.png
│       ├── 4.png
│       ├── 5.png
│       ├── 6.png
│       ├── 7.png
│       ├── 8.png
│       ├── 9.png
│       └── 10.png
```

---

## 🚀 Cara Menjalankan

### Cara 1: Langsung buka (tanpa kamera)
Double-click `index.html` di browser. Semua berjalan normal kecuali fitur kamera ice breaking.

### Cara 2: Dengan local server (untuk kamera)
Buka terminal/cmd di folder project, lalu jalankan:

```bash
# Python 3 (biasanya sudah terinstall)
python -m http.server 8000

# Atau Python 2
python -m SimpleHTTPServer 8000
```

Lalu buka browser ke: `http://localhost:8000`

Kamera akan berfungsi karena localhost dianggap secure context.

---

## ✏️ Cara Edit Teks

Semua teks presentasi ada di **`content.js`**. Buka dengan text editor (Notepad, VS Code, dll).

Contoh:
- Mau ganti judul hero? Edit bagian `hero.titleLine1`, `titleLine2`, `titleLine3`
- Mau ganti nama anggota? Edit bagian `team.members`
- Mau ganti daftar pustaka? Edit bagian `closing.references.items`
- Mau ganti timing foto kolase? Edit `closing.musicPhotoStart` (detik)

---

## 🎨 Gemini Image Prompts

Paste prompt ini ke Gemini untuk generate gambar 3D:

**hero.png:**
> 3D render of a glowing abstract brain made of neural network connections, floating in dark space with subtle purple and blue ambient light, Apple product page aesthetic, cinematic lighting, ultra clean minimal dark background, 16:9 aspect ratio

**ai-tools.png:**
> 3D render of floating holographic app icons for ChatGPT, Google Gemini, Perplexity AI, and Mendeley, each with distinct soft glow colors, translucent glass material, arranged in a gentle arc, purple-blue ambient light on dark background, Apple keynote aesthetic, depth of field, 16:9

**survey.png:**
> 3D isometric render of a floating digital survey form with Likert scale options showing 1 to 5 stars, translucent glass material, soft purple glow on dark background, clean minimalist Apple-style product visualization, 16:9

---

## ⚠️ Catatan Penting

1. **Kamera (ice breaking)**: Butuh HTTPS atau localhost. Kalau buka via `file://`, kamera akan ditolak browser.

2. **Audio**: Browser modern memblokir autoplay audio. Untuk closing, audio otomatis play saat section daftar pustaka terlihat di layar. Jika diblokir, user perlu klik/scroll dulu.

3. **Rekaman dance**: Hasil rekaman otomatis ter-download sebagai file `.webm` ke folder Downloads.

4. **Smartboard Huawei**: Pastikan laptop yang nyolok HDMI bisa menjalankan browser modern (Chrome/Edge). Jalankan local server di laptop tersebut.
