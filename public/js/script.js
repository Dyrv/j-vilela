document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.getElementById('typingText');
    const logo = document.getElementById('logo');
    const text = "jvilelaa";
    let index = 0;

    // Função para digitar o texto
    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            const delay = 150 + Math.random() * 50; // Variação mais controlada na digitação
            setTimeout(typeWriter, delay);
        } else {
            // Pausa de 2 segundos antes de apagar o texto
            setTimeout(deleteWriter, 2000);
        }
    }

    // Função para apagar o texto
    function deleteWriter() {
        let length = typingText.textContent.length;

        // Função recursiva para apagar o texto um caractere de cada vez
        function removeChar() {
            if (length > 0) {
                typingText.textContent = typingText.textContent.slice(0, length - 1);
                length--;
                setTimeout(removeChar, 100); // Apaga um caractere a cada 100ms
            } else {
                setTimeout(() => {
                    // Faz fade-out da imagem e do texto
                    logo.classList.add('fade-out');
                    typingText.style.transition = "opacity 0.3s ease-out";
                    typingText.style.opacity = "0";
                    setTimeout(showContent, 1500); // Exibe o conteúdo após fade-out
                }, 1000);
            }
        }

        removeChar(); // Inicia a remoção de caracteres
    }

    // Função para mostrar o conteúdo da página
    function showContent() {
        window.location.href = '../../public/html/homepage.html'; // Redireciona para a página principal
    }

    // Garante que o texto inicie vazio
    typingText.textContent = "";
    setTimeout(typeWriter, 1500); // Pequeno delay inicial para sincronizar com o zoom-in - aletrar valor para quando iniciar o site
});