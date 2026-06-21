document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const button = item.querySelector('.nav-btn');
        const dropdown = item.querySelector('.dropdown-content');

        button.addEventListener('click', (e) => {
            e.stopPropagation();

            // Cerrar otros menús que estén abiertos
            navItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.dropdown-content').classList.remove('show');
                    otherItem.classList.remove('active');
                }
            });

            // Abrir o cerrar el actual
            dropdown.classList.toggle('show');
            item.classList.toggle('active');
        });
    });

    // Cerrar si hacen click en cualquier otro lado
    document.addEventListener('click', () => {
        navItems.forEach(item => {
            item.querySelector('.dropdown-content').classList.remove('show');
            item.classList.remove('active');
        });
    });
});