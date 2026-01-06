/**
 * File JavaScript untuk interaktivitas website KJSB
 */

document.addEventListener('DOMContentLoaded', () => {
    const btnScrollToTop = document.getElementById('btnScrollToTop');

    // Mengatur visibilitas tombol scroll to top saat pengguna scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btnScrollToTop.style.display = 'flex';
        } else {
            btnScrollToTop.style.display = 'none';
        }
    });

    // Menangani klik tombol scroll ke atas secara halus
    btnScrollToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Inisialisasi awal visibilitas tombol
    if (window.pageYOffset <= 300) {
        btnScrollToTop.style.display = 'none';
    }
});