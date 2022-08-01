function mobileMenu() {
    if (document.getElementById('mynav').style.display == 'block') {
        document.getElementById('mynav').style.display = 'none';
    } else {
        document.getElementById('mynav').style.display = 'block';
    }
}
document.getElementById('menuicon').addEventListener('click', mobileMenu);

function resetMenu() {
    if (window.innerWidth >= 910) {
        document.getElementById('mynav').style.display = 'flex';
    } else if (window.innerWidth < 910) {
        document.getElementById('mynav').style.display = 'none';
    }
}
window.addEventListener('resize', resetMenu);