# Portofolio Kreatif — Zahra 🌸

Website portofolio satu halaman untuk **Zahra** — Video Editor & Content Creator.
Desain playful ilustratif: warna plum/berry (`#2b0016`, `#4a0026`) + kuning butter (`#ffdf6d`) + pink (`#ff4f8b`).

---

## 📂 Struktur Proyek

```text
Portofolio/
├── index.html                  # Halaman utama portofolio
├── assets/
│   ├── css/
│   │   └── style.css           # Keyframes, font, scrollbar kustom
│   ├── js/
│   │   └── main.js             # Data karya, modal, lightbox, toast, view switcher
│   └── images/
│       ├── zahra-portrait.jpg  # Foto profil (tambahkan file ini)
│       └── stitch-screenshot.png # Referensi desain awal (arsip)
└── README.md
```

## ✨ Fitur

- **Showreel** — section video 16:9 + kartu video (ganti placeholder dengan embed/link YouTube/TikTok)
- **Daftar Karya (4 chapter)** — Video Editing, Media Sosial, Desain, Dokumentasi; tiap chapter membuka modal berisi daftar proyek
- **Lightbox** — klik foto profil untuk zoom
- **View switcher** — toggle Mobile Frame (430px) / Wide Layout di desktop
- **Salin email sekali klik** — dengan toast konfirmasi
- **Kontak** — email, Instagram, WhatsApp

## 🚀 Cara Menjalankan

Buka `index.html` langsung di browser, atau via server lokal:

```bash
python -m http.server 8000
# lalu buka http://localhost:8000
```

## 📝 Yang perlu dilengkapi

1. Tambahkan `assets/images/zahra-portrait.jpg` (foto profil)
2. Upload file video MP4 ke folder `assets/videos/` (buat foldernya dulu):
   - `showreel.mp4` — video unggulan 16:9
   - `video-ifest.mp4` — video promosi IFEST
   - `video-organisasi.mp4` — video kegiatan organisasi
3. Upload gambar bukti karya ke folder `assets/images/` (nama file harus persis):
   - `carousel-cloud-1.png`, `carousel-cloud-2.png` — bukti carousel Cloud Computing
   - `playbox-lokasi.png` — bukti konten Play Box
   - `live-report-bazar.png` — bukti desain live report bazar
   - `ifest-video-1.png`, `ifest-video-2.png`, `ifest-video-3.png` — bukti dokumentasi IFEST

   Gambar otomatis tampil sebagai galeri di dalam modal chapter masing-masing
   (klik gambar untuk zoom). Jika file belum ada, modal tampil seperti biasa tanpa error.

   Video diputar langsung di web (player bawaan browser), tanpa upload ke platform mana pun.
   Tips: kompres ke 720p dan usahakan < 50 MB per file (batas GitHub 100 MB/file).
   Catatan: file binary tidak bisa lewat konektor — upload via GitHub web (Add file → Upload files)
   di branch ini, atau via git lokal seperti biasa.
4. Deploy gratis ke Vercel / Netlify / GitHub Pages
