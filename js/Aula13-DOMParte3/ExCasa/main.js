// Criação do label
const label = document.createElement("label");
label.setAttribute("for", "salarioAtual");
label.textContent = "Salário Atual: ";

// Criação do input
const inputSalario = document.createElement("input");
inputSalario.type = "text";
inputSalario.id = "salarioAtual";
inputSalario.placeholder = "Insira o salário atual";

// Criação do botão
const button = document.createElement("button");
button.textContent = "Calcular Novo Salário";
button.onclick = calcularNovoSalario;

// Criação do parágrafo para exibir o resultado
const resultadoElemento = document.createElement("p");
resultadoElemento.id = "resultado";

// Adição dos elementos ao corpo da página
document.body.appendChild(label);
document.body.appendChild(inputSalario);
document.body.appendChild(button);
document.body.appendChild(resultadoElemento);

// Função para calcular o novo salário
function calcularNovoSalario() {
  // Obtém o valor inserido no input
  const salarioAtual = parseFloat(inputSalario.value);

  // Verifica se o valor inserido é válido
  if (isNaN(salarioAtual) || salarioAtual <= 0) {
    alert("Por favor, insira um valor válido para o salário atual.");
    return;
  }

  // Calcula o novo salário com o aumento de 17% e o reajuste anual
  const aumentoPercentual = 17;
  const reajusteAnual = 215;

  const aumento = (salarioAtual * aumentoPercentual) / 100;
  const novoSalario = salarioAtual + aumento + reajusteAnual;

  // Exibe o resultado
  resultadoElemento.textContent = `O novo salário é R$ ${novoSalario.toFixed(
    2
  )}`;
}
