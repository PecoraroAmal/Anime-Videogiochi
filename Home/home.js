document.addEventListener("DOMContentLoaded", function() {
    // Ottieni tutti gli elementi di navigazione
    const navLinks = document.querySelectorAll('.nav-links a');

    // Aggiungi gestore di eventi per l'hover
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)'; // Effetto di ingrandimento al passaggio del mouse
        });

        link.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'; // Resetta l'effetto di ingrandimento
        });
    });
});
