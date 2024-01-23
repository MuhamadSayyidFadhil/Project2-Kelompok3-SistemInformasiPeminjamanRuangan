document.addEventListener('DOMContentLoaded', function () {
    // Fungsi untuk menangani klik pada gambar slider
    function handleSliderImageClick(event) {
        event.preventDefault();

        // Mendapatkan sumber gambar yang diklik
        var imageSrc = event.currentTarget.getAttribute('src');

        // Mengganti gambar di bagian detail produk
        document.getElementById('product-detail').src = imageSrc;
    }

    // Mengambil semua elemen gambar pada slider
    var sliderImages = document.querySelectorAll('.product-links-wap img');

    // Menambahkan event listener untuk setiap gambar slider
    sliderImages.forEach(function (image) {
        image.addEventListener('click', handleSliderImageClick);
    });
});


