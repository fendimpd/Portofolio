document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi Fancybox untuk lightbox
    Fancybox.bind("[data-fancybox]", {
        // Opsi kustom jika diperlukan
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Tambahkan event listener untuk setiap tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Dapatkan nilai filter dari atribut data-filter
            const filter = button.getAttribute('data-filter');

            // Hapus kelas 'active' dari semua tombol
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            // Tambahkan kelas 'active' ke tombol yang sedang diklik
            button.classList.add('active');

            // Loop melalui setiap item portofolio
            portfolioItems.forEach(item => {
                // Dapatkan kategori item dari atribut data-category
                const shouldShow = filter === 'all' || item.dataset.category === filter;

                // Logika untuk transisi halus
                if (shouldShow) {
                    // Tampilkan item
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.classList.remove('scaled-down');
                    }, 10); // delay kecil untuk memastikan transisi berjalan
                } else {
                    // Sembunyikan item
                    item.classList.add('scaled-down');
                    item.addEventListener('transitionend', () => {
                        item.classList.add('hidden');
                    }, { once: true }); // event listener hanya berjalan sekali
                }
            });
        });
    });

    // Logika untuk Hamburger Menu di Mobile
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        // Toggle kelas 'active' pada hamburger dan menu
        hamburger.classList.toggle('active');
        navUl.classList.toggle('active');
    });

    // Logika untuk form WhatsApp
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form mengirim data secara tradisional

            // Ganti dengan nomor WhatsApp Anda (format internasional tanpa '+' atau '0' di depan)
            const nomorTelepon = '6289696843541'; 

            // Ambil nilai dari input form
            const nama = document.getElementById('nama').value;
            const pesan = document.getElementById('pesan').value;

            // Buat template pesan
            const templatePesan = `Halo, nama saya ${nama}. Saya ingin menyampaikan: ${pesan}`;

            // Encode pesan untuk URL agar aman
            const pesanEncoded = encodeURIComponent(templatePesan);

            // Buat URL WhatsApp "Click to Chat"
            const urlWhatsApp = `https://wa.me/${nomorTelepon}?text=${pesanEncoded}`;

            // Buka URL di tab baru
            window.open(urlWhatsApp, '_blank');
        });
    }
});