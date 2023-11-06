// Funções
function somaNumeros(num1 = 1, num2 = 1) {
  return num1 + num2;
}
let x = somaNumeros(4, 5); // Chamada da função addNums
console.log(x);
let z = myFunc(4, 5); // Chamada da função myFunc
console.log(z);
function myFunc(num1, num2) {
  return num1 * num2;
}

let soma = somaNumeros(10, 7, 3);
console.log("Essa é a variável soma:" + soma);

//Arrow functions
console.clear();

const hello = () => {
  return "Olá Arrow Function!";
};
console.log(hello); // Retorna o objeto função
console.log(hello()); // Executa a função e imprime a string no return
console.clear()

// Função com If

function imparPar(num){
    if(num % 2 == 0){
        return `O número ${num} é par`;
    }else if(num % 2 == 1){
        return `O número ${num} é impar`;
    }else{
        return `Não consegui indentificar se é impar ou par`;
    }
}

let recebePrimeiroNumero = imparPar(5)
console.log(recebePrimeiroNumero)

let recebeSegundoNumero = imparPar(5.75)
console.log(recebeSegundoNumero)

var contexto = 5.75 % 2;
console.log(contexto)

console.clear()

const celular = {
    marca: "Apple",
    Modelo: "Iphone 15",
    memoria: "512gb",
    memoriaRam: "8gbRam"
}
console.log(celular)

// Eventos
console.clear();
const boasVindas = () => {
alert('Bem vindo a nossa página');
console.log('Bem vindo a nossa página');
};
const eventClique = () => {
console.log('Você clicou no botão');
};

const mouseEmCima = () => {
    console.log('Mouse está em cima do título');
    };


