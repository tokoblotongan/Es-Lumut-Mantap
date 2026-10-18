# Es Lumut JUNI – Galeri Rasa

Landing page katalog visual produk interaktif untuk **Es Lumut JUNI** dengan konsep **Glassmorphism** dan **Scroll-Driven Horizontal Showcase**.

---

## 📁 Struktur Folder & File Gambar (`*.jpeg`)

Semua gambar produk telah diorganisasi di dalam folder `image/` dengan ekstensi standar `*.jpeg` yang sesuai dengan `index.html`:

```
├── index.html                    # Halaman landing page utama (siap untuk GitHub Pages)
├── standalone-es-lumut-juni.html # File HTML mandiri (single-file)
├── image/                        # Folder sumber gambar produk
│   ├── hero-bg.jpeg              # Foto latar belakang hero
│   ├── es-lumut-strawberry.jpeg  # Varian Strawberry
│   ├── es-lumut-mangga.jpeg      # Varian Mangga
│   ├── es-lumut-melon.jpeg       # Varian Melon
│   ├── es-lumut-blueberry.jpeg   # Varian Blueberry
│   ├── es-lumut-kopi.jpeg        # Varian Kopi
│   └── es-lumut-anggur.jpeg      # Varian Anggur
└── README.md
```

---

## 🚀 Cara Mengunggah (Push) ke Repository GitHub

1. Buat repository baru di [GitHub](https://github.com/new) (misalnya bernama `es-lumut-juni`).
2. Jalankan perintah berikut di terminal:

```bash
# Hubungkan ke repository GitHub Anda
git remote add origin https://github.com/USERNAME_ANDA/es-lumut-juni.git

# Pastikan branch utama bernama main
git branch -M main

# Push seluruh kode dan folder image ke GitHub
git push -u origin main
```

---

## 🌐 Cara Mengaktifkan GitHub Pages (Website Langsung Online)

1. Buka repository Anda di GitHub.
2. Masuk ke menu **Settings** > **Pages** (di sidebar kiri).
3. Pada bagian **Build and deployment** > **Branch**:
   - Pilih branch: **`main`**
   - Folder: **`/ (root)`**
4. Klik **Save**.
5. Tunggu 1–2 menit, website Anda akan langsung aktif di:
   `https://USERNAME_ANDA.github.io/es-lumut-juni/`

Semua gambar di folder `image/*.jpeg` akan otomatis dimuat dengan sempurna karena menggunakan path relatif `image/...`.
