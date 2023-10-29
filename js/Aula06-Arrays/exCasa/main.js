// Crie o array unidimensional
var arrayInfo = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];

// Retorne todo o array
console.log("Array completo: " + arrayInfo);

// Tamanho do array
console.log("Tamanho do Array: " + arrayInfo.length);

// Retorne apenas a informação "JS"
console.log("Informação 'JS': " + arrayInfo[arrayInfo.indexOf("JS")]);

// Transforme o array em uma string e retorne o tipo no console
var arrayString = arrayInfo.join(",");
console.log("Array como String: " + arrayString);
console.log("Tipo da String resultante: " + typeof arrayString);

// Troque o separador (,) pelo separador (/) e retorne a mudança no console
var arrayStringComBarra = arrayString.replace(/,/g, "/");
console.log("Array com separador /: " + arrayStringComBarra);

// Adicione a informação "IOS" no início do array e retorne o novo array com a quantidade de posições atualizadas
arrayInfo.unshift("IOS");
console.log("Novo array com 'IOS' no início: " + arrayInfo);




// Array 2

// Crie o array bidimensional
var array = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
];

// Retorne todo o array
console.log("Array completo:");
console.log(array);

// Tamanho do array
console.log("Tamanho do Array: " + (array.length * array[0].length));

// Retorne apenas o ano 2013
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        if (array[i][j] === 2013) {
            console.log("Ano 2013 encontrado: " + array[i][j]);
        }
    }
}

// Troque a informação "JS" por "JavaScript"
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        if (array[i][j] === "JS") {
            array[i][j] = "JavaScript";
            console.log("Informação 'JS' trocada por 'JavaScript' na linha " + (i + 1) + ", posição " + (j + 1));
        }
    }
}

console.log("Array com 'JS' trocado por 'JavaScript:");
console.log(array);


// Remova a informação "Java"
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        if (array[i][j] === "Java") {
            array[i].splice(j, 1);
            console.log("Informação 'Java' removida da linha " + (i + 1) + ", posição " + (j + 1));
        }
    }
}

console.log("Array com 'Java' removido:");
console.log(array);


// Insira a informação "pipoca" no final do array
array[array.length - 1].push("pipoca");

console.log("Array com 'Java' removido e 'pipoca' adicionado:");
console.log(array);

