document.querySelectorAll('.tecnologias-item').forEach(item => {
    item.addEventListener('click', () => {
        const dropdown = item.querySelector('.dropdown');
        const isVisible = dropdown.style.maxHeight === '200px'; // Defina uma altura máxima adequada

        // Fecha todos os dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
            d.style.maxHeight = '0';
            d.style.opacity = '0';
        });

        // Mostra ou esconde o dropdown atual
        if (!isVisible) {
            dropdown.style.maxHeight = '200px'; // A altura do menu expandido
            dropdown.style.opacity = '1'; // Torna visível
        } 
        else {
            dropdown.style.maxHeight = '0';
            dropdown.style.opacity = '0';
        }
    });
});