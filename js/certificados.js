// Animação de fade-in ao entrar na viewport
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementos = document.querySelectorAll('.fade-in');
    elementos.forEach(el => observer.observe(el));
});
