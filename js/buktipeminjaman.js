// Fungsi untuk menampilkan data formulir
function displayFormData(formData) {
    var buktiContent = document.getElementById('buktiContent');
    buktiContent.innerHTML = `
        <th>Nama Pengguna</th>
        <td>${formData.nama}</td>
    </tr>
    <tr>
        <th>Alamat Tinggal</th>
        <td>${formData.alamat}</td>
    </tr>
    <tr>
        <th>Tanggal Awal Peminjaman</th>
        <td>${formData.tanggalAwal}</td>
    </tr>
    <tr>
        <th>Tanggal Akhir Peminjaman</th>
        <td>${formData.tanggalAkhir}</td>
    </tr>
    <tr>
        <th>Durasi Peminjaman (jam)</th>
        <td>${formData.durasi}</td>
    </tr>
    <tr>
        <th>Jumlah Orang</th>
        <td>${formData.jumlahOrang}</td>
    </tr>
    <tr>
        <th>Pilihan Gedung</th>
        <td>${formData.gedung}</td>
    </tr>
    <tr>
        <th>Pilihan Ruangan</th>
        <td>${formData.ruangan}</td>
    </tr>
    <tr>
        <th>Keterangan</th>
        <td>${formData.keterangan}</td>
    </tr>
  `;
}

// Fungsi untuk mengambil data formulir dari Local Storage dan menampilkannya di halaman buktipeminjaman.html
function displayFormDataFromLocalStorage() {
var formData = JSON.parse(localStorage.getItem('formData'));
if (formData) {
    displayFormData(formData);
} else {
    alert('Data formulir tidak tersedia.');
}
}

document.addEventListener('DOMContentLoaded', function () {
displayFormDataFromLocalStorage();


});