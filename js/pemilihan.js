// pilih element formulir
var form = document.querySelector('.block-32 form');

// tambahkan event listener pada formulir
form.addEventListener('submit', function (e) {
    // hentikan perilaku default formulir (mengirimkan data)
    e.preventDefault();

    // dapatkan nilai dari input tanggal awal, tanggal akhir, dan gedung
    var checkinDate = document.getElementById('checkin_date').value;
    var checkoutDate = document.getElementById('checkout_date').value;
    var gedung = document.getElementById('gedung').value;

    // panggil fungsi untuk mengecek ruangan yang tersedia
    checkRoomAvailability(checkinDate, checkoutDate, gedung);
});

// Update fungsi checkRoomAvailability dan isDateInRange
function checkRoomAvailability(checkinDate, checkoutDate, gedung) {
    // contoh data ruangan yang tersedia
    var availableRooms = [
        { name: 'LAB B1 101', location: 'Gedung Kampus B1', floor: 'Lantai 1', checkinDate: '2024-01-01', checkoutDate: '2024-01-30' },
        { name: 'LAB B2 205B', location: 'Gedung Kampus B2', floor: 'Lantai 2', checkinDate: '2024-01-01', checkoutDate: '2024-01-30' },
        { name: 'RUANG RAPAT STAFF A106', location: 'Gedung Kampus A', floor: 'Lantai 1', checkinDate: '2024-01-01', checkoutDate: '2024-01-30' }
    ];

    // temukan ruangan yang tersedia sesuai dengan kriteria
    var resultRooms = availableRooms.filter(function (room) {
        return (
            room.location === gedung &&
            isDateInRange(checkinDate, room) &&
            isDateInRange(checkoutDate, room)
        );
    });

    // tampilkan hasil ruangan yang tersedia
    displayAvailableRooms(resultRooms);
}

// fungsi untuk memeriksa apakah tanggal berada dalam rentang ruangan
function isDateInRange(date, room) {
    // implementasi logika pengecekan tanggal
    // Gantilah dengan logika yang sesuai
    return (
        new Date(date) >= new Date(room.checkinDate) &&
        new Date(date) <= new Date(room.checkoutDate)
    );
}


// fungsi untuk menampilkan hasil ruangan yang tersedia
function displayAvailableRooms(rooms) {
    // temukan elemen dengan id "result"
    var resultContainer = document.getElementById('result');

    // hapus semua elemen di dalam "resultContainer"
    resultContainer.innerHTML = '';

    // cek apakah ada ruangan yang tersedia
    if (rooms.length > 0) {
        // jika ada, buat elemen untuk setiap ruangan dan tambahkan ke "resultContainer"
        rooms.forEach(function (room) {
            var roomElement = document.createElement('div');
            roomElement.classList.add('col-md-6', 'col-lg-4');
            roomElement.innerHTML = `
                <a href="#" class="room">
                    <figure class="img-wrap">
                        <!-- Gantilah dengan sumber gambar yang sesuai -->
                        <img src="images/default-room-image.jpg" alt="Room Image" class="img-fluid mb-3">
                    </figure>
                    <div class="p-3 text-center room-info">
                        <h3>${room.name}</h3>
                        <p style="text-align: left;">Lokasi: ${room.location} <br> Lantai: ${room.floor}</p>
                        <button class="btn btn-primary mt-3">View Details</button>
                    </div>
                </a>
            `;
            resultContainer.appendChild(roomElement);
        });
    } else {
        // jika tidak ada ruangan yang tersedia, berikan pesan kepada pengguna
        var noRoomMessage = document.createElement('div');
        noRoomMessage.classList.add('col-12');
        noRoomMessage.textContent = 'Maaf, tidak ada ruangan yang tersedia untuk kriteria yang dimasukkan.';
        resultContainer.appendChild(noRoomMessage);
    }
}
