// Meminta pengguna memasukkan dua angka
let angka1 = prompt("Masukkan angka pertama:");
let angka2 = prompt("Masukkan angka kedua:");

// Mengkonversi input pengguna ke tipe data numerik
angka1 = parseFloat(angka1);
angka2 = parseFloat(angka2);

// Melakukan penjumlahan
let hasil = angka1 + angka2;

// Menampilkan hasil penjumlahan ke pengguna
alert("Hasil penjumlahan: " + hasil);