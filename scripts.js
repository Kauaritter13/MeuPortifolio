// Esconde o menu quando o mouse não está sobre ele
let header = document.getElementById('header');
let mouseOverHeader = false;

header.addEventListener('mouseenter', () => {
    mouseOverHeader = true;
});

header.addEventListener('mouseleave', () => {
    mouseOverHeader = false;
});

document.addEventListener('scroll', () => {
    if (!mouseOverHeader && window.scrollY > 50) {
        header.style.top = '-100px';
    } else {
        header.style.top = '0';
    }
});

// Scroll suave para o topo ao clicar no logo
document.getElementById('logo').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Alterna o menu hamburguer em dispositivos móveis
let navLinks = document.getElementById('nav-links');
let isMenuOpen = false;

document.getElementById('logo').addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    navLinks.style.display = isMenuOpen ? 'block' : 'none';
});
