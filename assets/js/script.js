// Menu Mobile
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Slider Simples
const heroImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920", // Dados
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920", // Tech
    "https://images.unsplash.com/photo-1504384308090-c54be3855485?auto=format&fit=crop&w=1920"  // Indústria
];

let currentSlide = 0;
const heroImgElement = document.getElementById('hero-img');

if (heroImgElement) {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % heroImages.length;
        heroImgElement.style.opacity = 0;
        
        setTimeout(() => {
            heroImgElement.src = heroImages[currentSlide];
            heroImgElement.style.opacity = 0.6; // Volta para a opacidade definida no CSS
        }, 500);
    }, 5000); // Troca a cada 5 segundos
}