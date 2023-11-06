function alertCookie() {
    alert('Você quer um cookie');
    console.log('Você quer um cookie');
}

// Adicione um evento de clique ao botão
document.getElementById('gerando-cookie').addEventListener('click', alertCookie);

function alertCookie() {
    alert('Você quer um cookie');
    console.log('Você quer um cookie');
}

const alertSucesso = () => {
    alert('Mensagem gerada com sucesso');
    console.log('Mensagem gerada com sucesso');
};

// Adicione eventos de clique aos botões
document.getElementById('gerando-cookie').addEventListener('click', alertCookie);
document.getElementById('mensagem-sucesso').addEventListener('click', alertSucesso);

// Crie um objeto chamado "notebook" com propriedades
var notebook = {
    marca: 'Dell',
    modelo: 'Inspiron',
    processador: 'Intel Core i7',
    memoriaRAM: '16GB',
    armazenamento: '512GB SSD'
};

// Exiba o objeto no console.log
console.log(notebook);


function anosParaDias(anos) {
    var dias = anos * 365;
    return dias;
}

// Exemplo de uso da função
var anos = 5; // Substitua o valor com o número de anos que deseja converter
var resultado = anosParaDias(anos);

console.log(anos + ' anos são aproximadamente ' + resultado + ' dias.');
