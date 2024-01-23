document.addEventListener('DOMContentLoaded', function () {
    // Menangkap elemen formulir
    var form = document.querySelector('form');
  
    // Menangkap elemen input tanggal awal dan tanggal akhir
    var checkinDateInput = document.getElementById('checkin_date');
    var checkoutDateInput = document.getElementById('checkout_date');
  
    // Menangkap elemen tombol "Check" menggunakan ID
    var checkButton = document.getElementById('checkButton'); // Sesuaikan ID dengan yang sesuai
  
    // Menambahkan event listener pada formulir
    form.addEventListener('submit', function (event) {
      // Mencegah formulir untuk melakukan submit default
      event.preventDefault();
  
      // Memeriksa apakah tanggal awal atau tanggal akhir kosong
      if (!checkinDateInput.value.trim() || !checkoutDateInput.value.trim()) {
        // Menampilkan pesan kesalahan jika tanggal awal atau tanggal akhir kosong
        alert('Tanggal Awal atau Tanggal Akhir TIDAK BOLEH KOSONG !!!');
      } else {
        // Lanjutkan dengan logika atau tindakan lain yang diinginkan jika tanggal sudah diisi
        console.log('Formulir dikirim!');
        // Tambahkan logika atau tindakan tambahan di sini
      }
    });
});

