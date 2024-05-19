<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Sabit kullanıcı adı ve şifre
    $valid_username = "g231210452@sakarya.edu.tr";
    $valid_password = "g231210452";

    // Boş alan kontrolü
    if (empty($username) || empty($password)) {
        echo "<script>alert('Kullanıcı adı ve şifre alanları boş geçilemez.'); window.location.href = 'index.html';</script>";
        exit();
    }
    
    if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Geçerli bir e-posta adresi giriniz.'); window.location.href = 'index.html';</script>";
        exit();
    }

    // Kullanıcı adı ve şifre kontrolü
    if ($username === $valid_username && $password === $valid_password) {
        echo "Hoşgeldiniz " . htmlspecialchars($username);
    } else {
        echo "<script>alert('Kullanıcı adı veya şifre hatalı.'); window.location.href = 'index.html';</script>";
    }
} else {
    header("Location: index.html"); // index.html sayfasına geri yönlendirme
    exit();
}
