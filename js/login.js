document.addEventListener("DOMContentLoaded", function () {
    // Periksa status login saat halaman login dimuat
    checkLoginStatus();

    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Ambil nilai input username dan password
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        // ID dan password sederhana untuk keperluan rekrayasa
        const sampleUsername = "fadhil@gmail.com";
        const samplePassword = "password123";

        // Validasi username dan password
        if (validateLogin(usernameInput, passwordInput, sampleUsername, samplePassword)) {
            // Cek apakah peringatan login berhasil sudah ditampilkan sebelumnya
            const loginSuccessAlertShown = localStorage.getItem("loginSuccessAlertShown");

            if (!loginSuccessAlertShown) {
                // Tampilkan peringatan login berhasil sekali saja
                alert("Login berhasil");
                localStorage.setItem("loginSuccessAlertShown", "true");
            }

            // Contoh redirect ke halaman lain (dasboar.html) setelah login berhasil
            window.location.href = "dasboard.html";
            localStorage.setItem("isLoggedIn", "true");
        } else {
            // Tampilkan pesan error jika login gagal
            alert("Username atau password salah");
        }
    });
});


function validateLogin(username, password, sampleUsername, samplePassword) {
    // Periksa apakah username dan password sesuai dengan contoh
    return username === sampleUsername && password === samplePassword;
}

function checkLoginStatus() {
    // Cek apakah ada status login sebelumnya
    const isLoggedIn = localStorage.getItem("isLoggedIn");
}

