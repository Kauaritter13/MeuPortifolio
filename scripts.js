// Ocultar Menu ao Rolar
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let header = document.getElementById("header");

    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
};

// Navegar de volta ao topo ao clicar no nome
document.querySelector('.logo a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});
