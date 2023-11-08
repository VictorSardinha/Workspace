//  array unidimensional 
var numeros = [17, 43, 8, 4, 97, 56, 29];

// função para verificar se um número é par ou ímpar
function verificaParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + ' é um número par.');
    } else {
        console.log(numero + ' é um número ímpar.');
    }
}

//  método forEach para chamar a função para cada valor do array
numeros.forEach(verificaParOuImpar);

// array unidimensional 
var numeros = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

//  Arrow Function com o método filter para retornar valores entre 20 e 80
var valoresEntre20e80 = numeros.filter(numero => numero >= 20 && numero <= 80);

console.log('Valores entre 20 e 80:');
console.log(valoresEntre20e80);

