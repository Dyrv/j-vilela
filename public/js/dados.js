fetch('dados.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('conteudo').textContent = data;
    })
    .catch(error => console.error('Erro ao ler o arquivo:', error));