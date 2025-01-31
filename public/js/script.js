document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typingText');
    const text = "jvilelaa";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 200); // Tempo entre cada letra
        } else {
            setTimeout(() => {
                typingText.textContent = "";
                setTimeout(showContent, 500); // Tempo antes de mostrar o conteúdo
            }, 1000); // Tempo que o texto "jvilelaa" permanece antes de apagar
        }
    }

    function showContent() {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');
        
        loader.classList.add('hidden');
        content.classList.remove('hidden');
        content.classList.add('visible');
    }

    typeWriter();
});