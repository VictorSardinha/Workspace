// Professora Bateu o aluno?
let professoraBateuNoAluno = true
let professoraXingaAluno = false

// &&
//             true                &&     false             = false
if(professoraBateuNoAluno == true  && professoraXingaAluno == true){
    console.log("A professora será demitida com sucesso!!")
}

console.clear()

// OU
//        true                               false               = true
if(professoraBateuNoAluno == true  || professoraXingaAluno == false){
    console.log("Professora demitida com sucesso!")
}

console.clear()

let numero1 = 10
let numero2 = 4

if(numero1 > numero2){  // dentro
    console.log("variavel num1 é menor num2")
}
console.clear()

//  validar boatos

let teraComidaTOTVS = false

// Ponto de exclamação "!", retoranará p resultado inverso da variavel

if (!teraComidaTOTVS == true){ //  se //  false //   implicita
    console.log("Não vou almoçar")
}else{ //  senão
    console.log("Você terá que almoçar")
}

console.clear()

let numero = 11

if (numero % 2 == 0){
    console.log("O numero" + numero + "é par")
}else{
    console.log("O numero " + numero + "é impar")
}

console.clear()

let = morangoMaduro = null

if(morangoMaduro == true){
    console.log("Pode comer")
}else if(morangoMaduro == false){console.log("Não coma")
}else{
    console.log("O morango está mofado! que nojoooooooooooo")
}
    
console.clear()

let caminhoDasIndias = 9
let idade = 27

if(caminhoDasIndias == 9){
    console.log("Você está ficando velho");

    if(idade == 27){
        console.log("Cara, você está muito velho")
    }else{
        console.log()
    }
}

console.clear()

let fase2 = true
let passou = true
let inscricao = true

if(inscricao == true){
    console.log("parabéns você está na fase 2")
    if(fase2 == true){
        console.log("Questionario de logica de leitura")
    }else if (fase2 >=65 || fase2 <=69){
        console.log("Você terá uma segunda chance")
    }else{
        console.log("Você não passou na fase 2")
    }
}

console.clear()

let pipoca = 10
let pipoca2 = 56

if(pipoca > pipoca2){  // true
  console.log(pipoca + "é maior")
}else{  // false
    console.log(pipoca2 + "é maior")
}

// outra forma 
console.clear()

pipoca > pipoca2 ? console.log(pipoca + "é maior") : 
console.log(pipoca2 + "é maior");

console.clear()

let mes = 3

switch(mes){  // expressão
    case mes == 3:
        console.log("Março")
    case mes == 4:
        console.log("Abril")
    case mes == 8:
        console.log("Agosto")
    case mes == 7:
        console.log("Julho")
}

console.clear()

var escopo = true
if (escopo){
    console.log(escopo)}

switch(escopo){
    case true:
        console.log("Variavel global, escopo")
        break; visualViewport



        
}


