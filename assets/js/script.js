// Função Sênior para carregar componentes dinamicamente
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Erro ao carregar ${filePath}`);
            return response.text();
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => console.error(error));
}

// Quando a página carregar, executamos as chamadas
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "components/header.html");
    loadComponent("footer-placeholder", "components/footer.html");
});

// Menu Mobile
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Slider Simples
const heroImages = [
    "assets/images/hero3.jpg",
    "assets/images/hero2.jpg",
    "assets/images/hero1.jpg"
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