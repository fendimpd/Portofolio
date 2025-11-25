<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari formulir
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Periksa apakah data valid
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Jika ada error, kembali ke halaman sebelumnya atau tampilkan pesan error
        http_response_code(400);
        echo "Harap lengkapi formulir dengan benar.";
        exit;
    }

    // Ganti dengan alamat email tujuan Anda
    $recipient = "emailtujuananda@contoh.com";
    $subject = "Pesan Baru dari Portofolio dari $name";
    $email_content = "Nama: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Pesan:\n$message\n";
    $email_headers = "From: $name <$email>";

    // Kirim email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Jika berhasil, redirect ke halaman sukses atau tampilkan pesan
        echo "Terima kasih! Pesan Anda telah terkirim.";
    } else {
        // Jika gagal
        http_response_code(500);
        echo "Oops! Terjadi kesalahan dan kami tidak dapat mengirim pesan Anda.";
    }
} else {
    http_response_code(403);
    echo "Terjadi kesalahan. Silakan coba lagi.";
}
?>