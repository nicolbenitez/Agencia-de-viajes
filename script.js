// Scroll suave al hacer click en el botón "Explorar Destinos"
document.getElementById('explorarBtn').addEventListener('click', function() {
    document.getElementById('destinos').scrollIntoView({ behavior: 'smooth' });
});
