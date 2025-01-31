document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.getElementById('typingText');
    const text = "jvilelaa";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingText.textContent = text.substring(0, index + 1); // Adiciona uma letra por vez
            index++;
            setTimeout(typeWriter, 200); // Delay entre as letras
        } else {
            setTimeout(() => {
                typingText.style.transition = "opacity 0.5s ease-out";
                typingText.style.opacity = "0"; // Faz fade-out do texto antes de mostrar o conteúdo
                setTimeout(showContent, 500);
            }, 1000);
        }
    }

    function showContent() {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');

        loader.classList.add('hidden');
        content.classList.remove('hidden');
        content.classList.add('visible');
    }

    // Inicia com o texto invisível e vazio para evitar que apareça abruptamente
    typingText.style.opacity = "1";
    typingText.textContent = "";
    setTimeout(typeWriter, 1000); // Pequeno delay inicial para um efeito mais natural
});