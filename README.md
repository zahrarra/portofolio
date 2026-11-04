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
2. Ganti placeholder showreel dengan link/embed video (YouTube unlisted / TikTok)
3. Deploy gratis ke Vercel / Netlify / GitHub Pages
