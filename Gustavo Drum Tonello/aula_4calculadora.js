const prompt = require('prompt-sync')({sigint: true});

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Erro: Divisão por zero!";

function iniciarCalculadora() {
    let ligada = true;

    while (ligada) {
        console.log("\n--- CALCULADORA ---");
        console.log("1. Somar");
        console.log("2. Subtrair");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("5. Sair");

        const opcao = prompt("Escolha a operação: ");

        if (opcao === "5") {
            console.log("Desligando...");
            ligada = false;
            break;
        }

        const num1 = parseFloat(prompt("Primeiro número: "));
        const num2 = parseFloat(prompt("Segundo número: "));
        let resultado;

        switch (opcao) {
            case "1": resultado = somar(num1, num2); break;
            case "2": resultado = subtrair(num1, num2); break;
            case "3": resultado = multiplicar(num1, num2); break;
            case "4": resultado = dividir(num1, num2); break;
            default: 
                console.log("Opção inválida!");
                continue;
        }

        console.log(`\n>>> RESULTADO: ${resultado}`);
        prompt("\nPressione Enter para continuar...");
    }
}

iniciarCalculadora();
