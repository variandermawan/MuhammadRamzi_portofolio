// Efek muncul saat scroll (Reveal Animation)
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Pesan sambutan di konsol (Hanya untuk iseng)
console.log("Selamat datang di portofolio saya! Senang Anda berkunjung.");