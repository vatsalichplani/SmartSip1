document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.immersive-hero');

    window.addEventListener('scroll', () => {
        if (hero && window.scrollY > hero.offsetHeight - 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Bottle Carousel Implementation
    const track = document.getElementById('bottle-track');
    const heroBg = document.getElementById('hero-bg');

    if (track) {
        const bgGradients = [
            'radial-gradient(circle at 75% 50%, rgba(148, 163, 184, 0.55) 0%, rgba(255, 255, 255, 0) 70%)', // white 
            'radial-gradient(circle at 75% 50%, rgba(244, 63, 94, 0.35) 0%, rgba(255, 255, 255, 0) 70%)', // pink 
            'radial-gradient(circle at 75% 50%, rgba(234, 179, 8, 0.4) 0%, rgba(255, 255, 255, 0) 70%)', // yellow 
            'radial-gradient(circle at 75% 50%, rgba(34, 197, 94, 0.35) 0%, rgba(255, 255, 255, 0) 70%)', // green
            'radial-gradient(circle at 75% 50%, rgba(71, 85, 105, 0.4) 0%, rgba(255, 255, 255, 0) 70%)'  // black
        ];

        const colorNames = ['Glacier White', 'Blush Pink', 'Solar Yellow', 'Forest Green', 'Obsidian Black'];
        const colorDots  = ['#cbd5e1', '#fca5a5', '#fde047', '#86efac', '#475569'];
        
        let currentIndex = 0;
        const totalSlides = 5;

        const colorNameEl = document.getElementById('color-name');
        const colorDotEl  = document.getElementById('color-dot');

        // Init first state
        if (heroBg) heroBg.style.background = bgGradients[0];
        if (colorDotEl) colorDotEl.style.background = colorDots[0];

        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            
            // Slide track horizontally
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update immersive background smoothly
            if (heroBg) heroBg.style.background = bgGradients[currentIndex];

            // Update color label
            if (colorNameEl) colorNameEl.textContent = colorNames[currentIndex];
            if (colorDotEl)  colorDotEl.style.background = colorDots[currentIndex];

        }, 5000); // Change slide every 5 seconds
    }

    // Beta form submission mock
    const betaForm = document.getElementById('beta-form');
    const formMessage = document.getElementById('form-message');

    if(betaForm) {
        betaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            betaForm.style.display = 'none';
            formMessage.classList.remove('hidden');
        });
    }
});
