document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");

    // Tambahkan event listener untuk formulir registrasi
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Ambil nilai input username, password, dan email
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;
        const emailInput = document.getElementById("email").value;

        // Validasi sederhana, pastikan semua bidang diisi
        if (usernameInput && passwordInput && emailInput) {
            // Simpan informasi registrasi di localStorage
            localStorage.setItem("registeredUsername", usernameInput);
            localStorage.setItem("registeredPassword", passwordInput);
            localStorage.setItem("registeredEmail", emailInput);

            // Konfirmasi registrasi berhasil
            alert("Registrasi berhasil. Anda dapat melanjutkan dengan login.");
            window.location.href = "login.html";
            // Tidak langsung arahkan ke halaman login, biarkan pengguna memilih
        } else {
            alert("Harap isi semua bidang registrasi.");
        }
    });

    // Periksa status login saat halaman peminjaman dimuat
    checkLoginStatus();
});

function checkLoginStatus() {
    // Ambil informasi registrasi dari localStorage
    const registeredUsername = localStorage.getItem("registeredUsername");
    const registeredPassword = localStorage.getItem("registeredPassword");

    // Periksa apakah pengguna sudah login (tersimpan di localStorage)
    if (registeredUsername && registeredPassword) {
        // Jika sudah login, berikan konfirmasi dan berikan opsi untuk melanjutkan
        const confirmLogin = confirm("Apakah Anda sudah memliki akun?. Jika sudah apakah Anda ingin melanjutkan ke halaman login?");
        if (confirmLogin) {
            window.location.href = "login.html";
        } else {
            // Jika tidak, biarkan pengguna memilih dan berada di halaman ini
        }
    }
}
