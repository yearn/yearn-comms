# yearn-comms

Ini adalah kumpulan komunikasi, pengumuman, tweet, buletin, dan artikel lain tentang Yearn.

## untuk Menjalankan

### secara lokal

- Ikuti petunjuk [Disini](https://jekyllrb.com/docs/) untuk menginstall Jekyll.
- Jalankan blog jekyll secara lokal dengan `bundle exec jekyll serve --watch`
  - Dengan --tonton setiap kali Anda menyimpan perubahan, itu akan memperbarui situs tetapi Anda harus memuatnya kembali [http://localhost:4000](http://localhost:4000)

### Dengan Docker

- Install Docker
- Jalankan `docker-compose up`

## Pernerjemahan

Dibawah branch [bahasa] anda, Anda sekarang akan menemukan file dan aset konfigurasi situs, serta konten komunikasi (artikel, buletin, dll.).

Anda dapat menemukan konten (atau "postingan") untuk diterjemahkan di folder berikut (dan subfoldernya):

- Pengumuman/\_postingan
- Artikel/\_postingan
- Keuangan/\_posting
- Buletin/\_postingan
- Podcast/\_postingan
- Tweet/\_postingan

Sebuah "postingan" terdiri dari dua bagian: "header", atau "front-matter" (diperlukan agar situs dapat memublikasikan postingan dengan benar.), dan "konten".

Agar PR untuk terjemahan dapat diterima dan digunakan, Anda perlu memastikan bahwa:

- "konten" diterjemahkan dengan benar
- di bagian depan, nama "penerjemah" (Anda) ditambahkan dengan benar
- di bagian depan, "judul" diterjemahkan
- di bagian depan, "publish:" disetel ke "true"

Tolong,jangan:

- ubah/terjemahkan nama file
- memodifikasi/menerjemahkan apa pun di "materi depan"
