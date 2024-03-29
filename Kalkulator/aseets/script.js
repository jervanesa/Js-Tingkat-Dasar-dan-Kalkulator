// Mendapatkan elemen display
const display = document.getElementById('display');

// Fungsi untuk menambahkan teks ke dalam display
function appendToDisplay(value) {
    // Memeriksa apakah nilai yang ditambahkan adalah persentase
    if (value === '%') {
        // Jika persentase, memproses persentase dan menampilkan hasilnya di display
        display.value = eval(display.value) / 100;
    } else {
        // Jika bukan persentase, menambahkan nilai ke dalam display
        display.value += value;
    }
}

// Fungsi untuk membersihkan display
function clearDisplay() {
    // Mengosongkan nilai display
    display.value = '';
}

// Fungsi untuk menghapus satu karakter terakhir dari display
function clearEntry() {
    // Menghapus satu karakter terakhir dari nilai display
    display.value = display.value.slice(0, -1);
}

// Fungsi untuk menghitung hasil ekspresi matematika pada display
function calculate() {
    try {
        // Mencoba mengevaluasi ekspresi matematika di display dan menampilkannya
        display.value = eval(display.value);
    } catch (error) {
        // Menangani kesalahan jika terjadi, menampilkan 'Error' di display
        display.value = 'Error';
    }
}

// Fungsi untuk mengubah tanda positif/negatif pada angka di display
function toggleSign() {
    // Mengambil nilai saat ini dari display
    let currentValue = display.value;
    // Memeriksa apakah nilai bukan kosong, bukan nol, dan bukan tanda negatif
    if (currentValue !== '' && currentValue !== '0' && currentValue !== '-') {
        // Jika nilai tidak kosong dan tidak negatif, maka:
        if (currentValue.charAt(0) === '-') {
            // Jika nilai sudah negatif, menghapus tanda negatif
            display.value = currentValue.slice(1); // Menghapus tanda negatif jika sudah ada
        } else {
            // Jika belum negatif, menambahkan tanda negatif di depan nilai
            display.value = '-' + currentValue; // Menambahkan tanda negatif jika belum ada
        }
    }
}


