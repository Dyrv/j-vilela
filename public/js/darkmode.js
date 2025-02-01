document.addEventListener('DOMContentLoaded', () => {
    const themeIcon = document.getElementById('theme-icon');

    // Função para alternar o tema
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');

        // Alterna o ícone entre lua e sol
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }

        // Salva a preferência no localStorage
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    }

    // Adiciona o evento de clique ao botão
    themeIcon.addEventListener('click', toggleDarkMode);

    // Aplica o tema salvo ao carregar a página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});