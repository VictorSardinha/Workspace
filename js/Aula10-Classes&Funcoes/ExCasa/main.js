class ContaBancaria {
    constructor(nome, idade, salario, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = '';
        this.conta = '';
        this.tipoConta = '';
        this.taxa = 0;
    }

    contaPoupanca() {
        this.tipoConta = 'Conta Poupança';
        this.taxa = 1.5; // Taxa de 1,5% ao mês
        this.aplicarDesconto();
    }

    contaCorrente() {
        this.tipoConta = 'Conta Corrente';
        this.taxa = 3.6; // Taxa de 3,6% ao mês
        this.aplicarDesconto();
    }

    contaEstudante() {
        this.tipoConta = 'Conta Estudante';
        this.taxa = 1.2; // Taxa de 1,2% ao mês
        this.aplicarDesconto();
    }

    aplicarDesconto() {
        const desconto = (this.salario * this.taxa) / 100;
        this.salario -= desconto;
    }

    imprimirInformacoes() {
        console.log('Informações do usuário:');
        console.log('Nome: ' + this.nome);
        console.log('Idade: ' + this.idade);
        console.log('Salário: R$ ' + this.salario);
        console.log('Sexo: ' + this.sexo);
        console.log('Agência: ' + this.agencia);
        console.log('Conta: ' + this.conta);
        console.log('Tipo de Conta: ' + this.tipoConta);
        console.log('Taxa mensal: ' + this.taxa + '%');
    }
}

// Exemplo de uso
const aluna1 = new ContaBancaria('Aluna IOS', 25, 3000, 'Feminino');
aluna1.agencia = '12345';
aluna1.conta = '67890';
aluna1.contaPoupanca();
aluna1.imprimirInformacoes();