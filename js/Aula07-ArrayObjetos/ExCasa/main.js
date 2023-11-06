// Crie o array de objetos "aluno"
var aluno = [
    { nome: 'Ana', idade: 17, nota: 8, ano: "2ºB" },
    { nome: 'Marta', idade: 15, nota: 5, ano: "3ºC" },
    { nome: 'Bruno', idade: 16, nota: 6, ano: "2ºC" },
    { nome: 'Brenno', idade: 19, nota: 6, ano: "3ºC" },
    { nome: 'Veronica', idade: 16, nota: 9, ano: "2ºC" },
    { nome: 'Maria', idade: 14, nota: 4, ano: "1ºF" }
];

// Retorne todo o array de objetos
console.log("Array completo de objetos 'aluno':");
console.log(aluno);

// Retorne todas as informações do aluno "Brunno"
var alunoBrunno = aluno.find(function (item) {
    return item.nome === 'Bruno';
});
console.log("Informações do aluno Bruno:");
console.log(alunoBrunno);

// Retorne apenas a nota da Maria
var notaMaria = aluno.find(function (item) {
    return item.nome === 'Maria';
}).nota;
console.log("Nota da aluna Maria: " + notaMaria);

// Retorno todo o array de objeto em formato JSON
var alunoJSON = JSON.stringify(aluno);
console.log("Array de objetos 'aluno' em formato JSON:");
console.log(alunoJSON);
