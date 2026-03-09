const prompt = require('prompt-sync')({sigint: true});

const jogo = {
    jogador1: { nome: prompt("Nome do Jogador 1: "), cor: "Verde", pontos: 0 },
    jogador2: { nome: prompt("Nome do Jogador 2: "), cor: "Azul", pontos: 0 }
};

let rodando = true;

while (rodando) {
    console.log(`\n--- PLACAR: ${jogo.jogador1.pontos} x ${jogo.jogador2.pontos} ---`);
    console.log(`1. Ponto para ${jogo.jogador1.nome} (${jogo.jogador1.cor})`);
    console.log(`2. Ponto para ${jogo.jogador2.nome} (${jogo.jogador2.cor})`);
    console.log(`3. Encerrar Jogo`);

    const opcao = prompt("Escolha uma opção: ");

    if (opcao === "1") {
        jogo.jogador1.pontos++;
    } else if (opcao === "2") {
        jogo.jogador2.pontos++;
    } else if (opcao === "3") {
        rodando = false;
    } else {
        console.log("Opção inválida!");
    }
}

console.log("\n--- JOGO ENCERRADO ---");
console.log(`Resultado Final: ${jogo.jogador1.nome} ${jogo.jogador1.pontos} x ${jogo.jogador2.pontos} ${jogo.jogador2.nome}`);
