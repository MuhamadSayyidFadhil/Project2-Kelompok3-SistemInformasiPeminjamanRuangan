document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('availabilityForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var checkinDate = document.getElementById('checkin_date').value;
        var checkoutDate = document.getElementById('checkout_date').value;
        var gedung = document.getElementById('gedung').value;

        // Tambahkan validasi untuk tanggal dan gedung
        if (!checkinDate && !checkoutDate && !gedung) {
            // Tampilkan peringatan jika tidak ada tanggal dan gedung yang dipilih
            alert('Pilih tanggal dan gedung untuk melihat ketersediaan ruangan.');
        } else if (!checkinDate && !checkoutDate) {
            // Tampilkan peringatan jika hanya gedung yang dipilih
            alert('Pilih tanggal untuk melihat ketersediaan ruangan.');
        } else if (!gedung) {
            // Tampilkan peringatan jika hanya tanggal yang dipilih
            alert('Pilih gedung untuk melihat ketersediaan ruangan.');
        } else {
            // Panggil fungsi checkRoomAvailability jika semua input valid
            checkRoomAvailability(checkinDate, checkoutDate, gedung);
        }
    });

    function checkRoomAvailability(checkinDate, checkoutDate, gedung) {
        // Contoh data ruangan yang tersedia
        var availableRooms = [
            { name: 'LAB B1 101', location: 'Gedung Kampus B1', floor: 'Lantai 1' },
            { name: 'LAB B2 205B', location: 'Gedung Kampus B2', floor: 'Lantai 2' },
            { name: 'RUANG RAPAT STAFF A106', location: 'Gedung Kampus A', floor: 'Lantai 1' }
        ];

        var resultRooms = [];

        // Ubah logika untuk menampilkan ruangan jika semua kriteria terpenuhi
        if (checkinDate && checkoutDate && gedung) {
            resultRooms = availableRooms.filter(function (room) {
                return (
                    room.location === gedung &&
                    isDateInRange(checkinDate, room) &&
                    isDateInRange(checkoutDate, room)
                );
            });
        }

        displayAvailableRooms(resultRooms);
    }

    function isDateInRange(date, room) {
        // Implementasi logika pengecekan tanggal
        // Sesuaikan logika ini sesuai kebutuhan aplikasi Anda
        return true;
    }

    function displayAvailableRooms(rooms) {
        var resultContainer = document.getElementById('result');
        resultContainer.innerHTML = '';

        if (rooms.length > 0) {
            rooms.forEach(function (room) {
                var roomElement = document.createElement('div');
                roomElement.classList.add('col-md-6', 'col-lg-4');
                roomElement.innerHTML = `
                    <a href="${getRoomPageURL(room.name)}" class="room">
                        <figure class="img-wrap">
                            <!-- Gantilah dengan sumber gambar yang sesuai -->
                            <img src="${getRoomImageSource(room.name)}" alt="Room Image" class="img-fluid mb-3">
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
            var noRoomMessage = document.createElement('div');
            noRoomMessage.classList.add('col-12');
            noRoomMessage.textContent = 'Maaf, tidak ada ruangan yang tersedia untuk kriteria yang dimasukkan.';
            resultContainer.appendChild(noRoomMessage);
        }
    }

    function getRoomImageSource(roomName) {
        // Gantilah dengan logika atau sumber gambar yang sesuai dengan kebutuhan Anda
        // Misalnya, jika Anda memiliki gambar untuk setiap ruangan dengan nama yang sesuai
        // return `images/${roomName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
        // Atau Anda bisa menggunakan gambar default untuk semua ruangan

        // Contoh penggunaan gambar berdasarkan nama ruangan
        if (roomName === 'LAB B1 101') {
            return 'images/img4.jpg';
        } else if (roomName === 'LAB B2 205B') {
            return 'images/img5.jpg';
        } else if (roomName === 'RUANG RAPAT STAFF A106') {
            return 'images/img6.jpg';
        }

        return 'images/default-room-image.jpg';
    }

    function getRoomPageURL(roomName) {
        // Gantilah dengan logika atau URL yang sesuai dengan kebutuhan Anda
        // Misalnya, jika setiap ruangan memiliki halaman web yang berbeda
        // return `room-pages/${roomName.toLowerCase().replace(/\s+/g, '-')}.html`;
        // Atau URL lain sesuai dengan struktur situs Anda

        // Contoh penggunaan tautan berdasarkan nama ruangan
        if (roomName === 'LAB B1 101') {
            return 'labbsatu.html';
        } else if (roomName === 'LAB B2 205B') {
            return 'labbduab.html';
        } else if (roomName === 'RUANG RAPAT STAFF A106') {
            return 'ruangrapatstaffa.html';
        }

        return '#'; // Ganti dengan URL yang sesuai
    }
});
