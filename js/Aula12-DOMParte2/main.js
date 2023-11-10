let paragrafo = document.getElementById("paragrafo01");

paragrafo.style.color = "red";             
paragrafo.style.backgroundColor = "Black";
paragrafo.style.textAlign = "center";              

let buscaClasse = document.getElementsByClassName("item");

buscaClasse[1].style.backgroundColor = "blue";
//   variavel;      condição;      incremento;
for(let c = 0; c <= buscaClasse.length; c++){
    // buscaClasse[c].style.backgroundColor = "blue";
}

// getElementByTagName
let acessaParagrafos = document.getElementsByTagName("p");
console.log(acessaParagrafos)

const paragrafos = document.getElementsByTagName("p")

for (let i = 0; i <= paragrafos.length; i++) {
    // paragrafos[i].style.color = "green";
}

// acessar elemento pelo nome
let acessaName = document.getElementsByName("nome_do_elemento");
console.log(acessaName)

for ( let f = 0; f <= acessaName.length; f++){
    if(f % 2 == 0){
        // acessaName[f].style.color = "pink";
    }
}

let item2 = document.getElementById("item2");
item2.remove();

let lista = document.getElementById("lista");
let lista5 = document.getElementById("item5")

lista5.insertBefore(item2, lista5.nextSlibling)


let retiraEstilo = document.getElementById("messi");
retiraEstilo.style.listStyle = "none"