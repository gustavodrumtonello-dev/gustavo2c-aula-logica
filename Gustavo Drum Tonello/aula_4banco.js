const prompt = require('prompt-sync')({sigint: true});

const contaBancaria = {
    titular: prompt("Digite o nome do titular: "),
    saldo: 0
};

function verSaldo() {
    console.log(`\nSaldo atual: R$ ${contaBancaria.saldo.toFixed(2)}`);
}

function depositar() {
    const valor = parseFloat(prompt("Quanto deseja depositar? R$ "));
    if (valor > 0) {
        contaBancaria.saldo += valor;
        console.log("Depósito realizado com sucesso!");
    } else {
        console.log("Valor de depósito inválido.");
    }
}

function sacar() {
    const valor = parseFloat(prompt("Quanto deseja sacar? R$ "));
    if (valor > 0 && valor <= contaBancaria.saldo) {
        contaBancaria.saldo -= valor;
        console.log("Saque realizado!");
    } else {
        console.log("Saldo insuficiente ou valor inválido.");
    }
}

let continuar = true;

while (continuar) {
    console.log(`\n--- BANCO JS | Titular: ${contaBancaria.titular} ---`);
    console.log("1. Ver Saldo");
    console.log("2. Depositar");
    console.log("3. Sacar");
    console.log("4. Sair");

    const opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1": verSaldo(); break;
        case "2": depositar(); break;
        case "3": sacar(); break;
        case "4": 
            console.log("Obrigado por usar nosso banco!");
            continuar = false; 
            break;
        default: console.log("Opção inválida!");
    }
}
