const prompt = require('prompt-sync')();

const formulario = {
    nome: prompt("Digite seu nome: "),
    idade: prompt("Digite sua idade: "),
    profissao: prompt("Digite sua profissão: "),
    cidade: prompt("Digite sua cidade: "),
    email: prompt("Digite seu email:")
};

console.log("\n--- Formulario ---");

for (let chave in formulario) {
    console.log("- " + chave + ": " + formulario[chave]);
}