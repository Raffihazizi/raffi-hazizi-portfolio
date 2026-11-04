# Personal Portfolio — Raffi Hazizi

Website portofolio multi-halaman menggunakan HTML, CSS, dan JavaScript murni (tanpa framework).

## Isi website
- `index.html` — Beranda
- `about.html` — Tentang saya
- `projects.html` — Proyek
- `skills.html` — Keahlian
- `contact.html` — Kontak
- `css/style.css` — Styling dan responsive layout
- `js/main.js` — Navigasi mobile, tema, animasi, custom cursor, dan notifikasi

## Sebelum dipublikasikan
1. Ganti placeholder foto profil di `index.html` dengan foto milikmu. Simpan misalnya sebagai `assets/images/raffi.jpg`, lalu ganti blok `.profile-placeholder` dengan:
   ```html
   <img src="assets/images/raffi.jpg" alt="Foto profil Raffi Hazizi" class="profile-photo">
   ```
   Tambahkan CSS:
   ```css
   .profile-photo { width: 100%; height: 100%; object-fit: cover; border-radius: 25px; }
   ```
2. Letakkan CV PDF milikmu di `assets/documents/cv.pdf`. Tombol Unduh CV akan memberi petunjuk sampai file tersebut tersedia.
3. Ganti URL GitHub, LinkedIn, Instagram, dan alamat email contoh di `contact.html` serta footer seluruh halaman.
4. Perbarui deskripsi, proyek, dan keahlian agar sesuai dengan informasi sebenarnya.
5. Uji semua halaman di browser sebelum deploy.

## Menjalankan secara lokal
Buka `index.html` langsung di browser. Untuk hasil yang lebih konsisten, gunakan ekstensi Live Server di VS Code.

## Deploy gratis ke GitHub Pages
1. Buat repository baru di GitHub, misalnya `raffi-hazizi-portfolio`.
2. Upload seluruh isi folder ini ke root repository (pastikan `index.html` berada di root).
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses publikasi. URL biasanya berbentuk `https://USERNAME.github.io/raffi-hazizi-portfolio/`.

Catatan: website ini statis, sehingga tidak memerlukan backend atau database. Google Fonts digunakan sebagai peningkatan tipografi; jika koneksi font eksternal tidak tersedia, website tetap memakai font fallback sistem.
