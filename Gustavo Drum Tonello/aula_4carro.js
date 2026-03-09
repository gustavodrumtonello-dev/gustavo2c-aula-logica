const prompt = require('prompt-sync')();

const carro = {
    marca: prompt("Digite a marca do carro: "),
    modelo: prompt("Digite o modelo do carro: "),
    ano: prompt("Digite o ano do carro: "),
    cor: prompt("Digite a cor do carro: "),
    quilometragem: prompt("Digite a quilometragem: ")
};

console.log("\n--- Dados do Carro ---");

for (let chave in carro) {
    console.log("- " + chave + ": " + carro[chave]);
}