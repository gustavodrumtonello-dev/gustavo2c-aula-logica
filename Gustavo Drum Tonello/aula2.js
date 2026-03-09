const prompt = require('prompt-sync')();

for (let i = 1; i <= 3; i++) {
    console.log(`\n--- Dados do Aluno ${i} ---`);
    
    let n1 = parseFloat(prompt("Nota 1: "));
    let n2 = parseFloat(prompt("Nota 2: "));
    let n3 = parseFloat(prompt("Nota 3: "));

    let media = (n1 + n2 + n3) / 3;
    
    // O Ternário em linha: atribui o status primeiro, depois imprime
    let status = media < 5 ? 'REPROVADO' : (media < 6 ? 'RECUPERAÇÃO' : 'APROVADO');

    console.log(`Média: ${media.toFixed(2)} | Resultado: ${status}`);
}