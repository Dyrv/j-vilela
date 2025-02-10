fetch('../database/dados.txt')
    .then(response => response.text())
    .then(data => {
        const testemunhos = data.trim().split(/\r?\n\r?\n/); // Dividir por linhas em branco, considerando \r e \n
        const conteudo = document.getElementById('conteudo');
        let index = 0;

        function mostrarTestemunhos() {
            conteudo.classList.add('fade-out'); // Adiciona a classe de fade out
            setTimeout(() => {
                conteudo.innerHTML = ''; // Limpa o conteúdo anterior
                for (let i = 0; i < 2; i++) {
                    const testemunho = testemunhos[(index + i) % testemunhos.length];
                    const linhas = testemunho.split(/\r?\n/); // Dividir cada testemunho por linha, considerando \r e \n
                    const nomeLinha = linhas.find(linha => linha.startsWith('Nome:'));
                    const descricaoLinha = linhas.find(linha => linha.startsWith('Descrição:'));
                    const avaliacaoLinha = linhas.find(linha => linha.startsWith('Avaliação:'));
                    if (nomeLinha && descricaoLinha && avaliacaoLinha) {
                        const nome = nomeLinha.replace('Nome: ', '');
                        const descricao = descricaoLinha.replace('Descrição: ', '');
                        const avaliacao = parseInt(avaliacaoLinha.replace('Avaliação: ', ''));
                        const testemunhoElemento = document.createElement('div');
                        testemunhoElemento.classList.add('testemunho');
                        const nomeElemento = document.createElement('h2');
                        nomeElemento.textContent = nome;
                        const descricaoElemento = document.createElement('p');
                        descricaoElemento.textContent = descricao;
                        const estrelasElemento = document.createElement('div');
                        estrelasElemento.classList.add('estrelas');
                        estrelasElemento.innerHTML = '★'.repeat(avaliacao) + '☆'.repeat(5 - avaliacao); // Adiciona estrelas de acordo com a avaliação
                        testemunhoElemento.appendChild(nomeElemento);
                        testemunhoElemento.appendChild(descricaoElemento);
                        testemunhoElemento.appendChild(estrelasElemento);
                        conteudo.appendChild(testemunhoElemento);
                    }
                }
                conteudo.classList.remove('fade-out'); // Remove a classe de fade out
                conteudo.classList.add('fade-in'); // Adiciona a classe de fade in
                setTimeout(() => {
                    conteudo.classList.remove('fade-in'); // Remove a classe de fade in
                }, 1000); // Duração da animação de fade in
                index = (index + 2) % testemunhos.length; // Avança para os próximos dois testemunhos, voltando ao início se necessário
            }, 1000); // Duração da animação de fade out
        }

        mostrarTestemunhos(); // Mostra os primeiros testemunhos imediatamente
        setInterval(mostrarTestemunhos, 6000); // Mostra os próximos testemunhos a cada 6 segundos (5 segundos de exibição + 1 segundo de animação)
    })
    .catch(error => console.error('Erro ao ler o arquivo:', error));