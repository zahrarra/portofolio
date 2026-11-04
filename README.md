# Portofolio Web — Zahra

Portofolio statis: HTML + CSS + JavaScript murni, tanpa framework.

## Struktur

```
portofolio/
├── index.html          # seluruh konten halaman
├── css/style.css       # seluruh styling
├── js/script.js        # menu mobile, animasi reveal, lightbox gambar
└── assets/img/         # 7 gambar bukti karya
```

## Cara melihat di laptop

Buka file `index.html` langsung di browser (double-click), atau jalankan server lokal:

```bash
cd portofolio
python -m http.server 8080
# buka http://localhost:8080
```

## Cara push ke repo GitHub (zahrarra/portofolio)

Repo masih kosong, jadi push pertama:

```bash
cd portofolio
git init
git add .
git commit -m "feat: portofolio web awal (HTML, CSS, JS)"
git branch -M main
git remote add origin https://github.com/zahrarra/portofolio.git
git push -u origin main
```

## Cara publish gratis (GitHub Pages)

1. Buka repo di GitHub → **Settings** → **Pages**
2. Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)**
3. Simpan — situs akan live di `https://zahrarra.github.io/portofolio/`

## Yang bisa diubah nanti

- Warna utama: variabel `--accent` di `css/style.css` (sekarang peach/coral)
- Tambah video: ganti salah satu `<figure>` dengan `<video controls src="...">`
- Tambah link Reels/TikTok: bungkus `<img>` dengan `<a href="...">`
- Foto profil: tambah `<img>` di section hero (`.hero-inner`)
