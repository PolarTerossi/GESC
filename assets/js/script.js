// Menu Mobile
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Slider Simples
const heroImages = [
    "assets/images/hero1.jpg",
    "assets/images/hero2.jpg",
    "assets/images/hero3.jpg"
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