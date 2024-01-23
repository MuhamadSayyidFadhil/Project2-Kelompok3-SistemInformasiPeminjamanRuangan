// peminjaman.js

function updateRuanganOptions() {
  var gedungSelect = document.getElementById('gedung');
  var ruanganSelect = document.getElementById('ruangan');

  ruanganSelect.innerHTML = '';

  switch (gedungSelect.value) {
    case 'gedunga':
      addRuanganOptions(['LAB A 401', 'LAB A 402', 'RUANG RAPAT STAFF A106']);
      break;
    case 'gedungb1':
      addRuanganOptions(['LAB B1 101']);
      break;
    case 'gedungb2':
      addRuanganOptions(['LAB B2 205A', 'LAB B2 205B']);
      break;
    default:
      break;
  }
}

function addRuanganOptions(options) {
  var ruanganSelect = document.getElementById('ruangan');
  options.forEach(function (option) {
    var optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.text = option;
    ruanganSelect.add(optionElement);
  });
}

function saveAndRedirect(event) {
  event.preventDefault();

  const validId = 'sttnf';
  const enteredId = prompt('Masukkan ID yang telah diberikan oleh admin:');

  if (enteredId === validId) {
    const isConfirmed = confirmIdDialog(enteredId);

    if (isConfirmed) {
      const formData = {
        nama: document.getElementById('nama').value,
        alamat: document.getElementById('alamat').value,
        tanggalAwal: document.getElementById('tanggalAwal').value,
        tanggalAkhir: document.getElementById('tanggalAkhir').value,
        durasi: document.getElementById('durasi').value,
        jumlahOrang: document.getElementById('jumlahOrang').value,
        gedung: document.getElementById('gedung').value,
        ruangan: document.getElementById('ruangan').value,
        keterangan: document.getElementById('keterangan').value,
      };

      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Pendaftaran peminjaman ruangan Anda telah berhasil');
      window.location.href = 'buktipeminjaman.html';
    } else {
      alert('Pendaftaran peminjaman ruangan dibatalkan.');
    }
  } else {
    alert('ID tidak valid. Pendaftaran peminjaman ruangan dibatalkan.');
  }
}

function confirmIdDialog(enteredId) {
  const dialogMessage = `Konfirmasi ID:\n\nID: ${enteredId}`;
  
  // Menggunakan window.confirm() dengan pesan yang sesuai
  return window.confirm(dialogMessage);
}

document.addEventListener('DOMContentLoaded', function () {
  updateRuanganOptions();
  checkLoginStatus();
});

function checkLoginStatus() {
  const isLoggedIn = true; // Gantilah dengan logika sesuai kebutuhan Anda
  const peminjamanForm = document.getElementById('peminjaman-form');
  const loginMessage = document.getElementById('loginMessage');

  if (isLoggedIn) {
    peminjamanForm.style.display = 'block';
  } else {
    loginMessage.style.display = 'block';
  }
}
