function adicionarImagem() {
    // Criação da imagem
    const imagem = document.createElement('img');
    imagem.src = 'img/umbrellaacademy.png'; 

    // imagem 
    document.body.appendChild(imagem);

    // -cor de fundo -
    document.body.style.backgroundColor = '#262525';

    
    const botao = document.getElementById('B_01');
    botao.style.border = '2px solid #D9BC66';
    botao.style.padding = '0.5rem';
    botao.style.backgroundColor = '#BFBFBF';
    botao.style.margin = '0.7rem';
}

function solicitarNome() {
    // prompt
    const nome = prompt('Digite seu nome:');

    //  usuário clicou em OK 
    if (nome !== null) {
        const mensagem = document.createElement('p');
        mensagem.textContent = `Olá ${nome}, bem-vindo à nossa academia`;

        // Inserção da mensagem 
        document.body.appendChild(mensagem);
    }
}
