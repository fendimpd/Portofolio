// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Memilih semua tombol filter dan item galeri
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Menambahkan event listener untuk setiap tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Menghapus kelas 'active' dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Menambahkan kelas 'active' ke tombol yang baru saja diklik
            button.classList.add('active');

            // Mendapatkan nilai filter dari atribut data-filter
            const filter = button.getAttribute('data-filter');

            // Memeriksa setiap item di galeri
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');

                // Menyembunyikan semua item terlebih dahulu
                item.style.display = 'none';

                // Jika filter adalah 'all' atau kategori item cocok dengan filter,
                // tampilkan item tersebut.
                if (filter === 'all' || filter === category) {
                    item.style.display = 'block';
                }
            });
        });
    });
});
