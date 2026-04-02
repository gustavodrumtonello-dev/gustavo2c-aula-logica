const prompt = require('prompt-sync')();

// --- 1. Fundamentos: Variáveis (let, const) e Tipos ---
const MOEDA = "R$"; 
let saldoGeral = 0; // Number

// --- 2. Funções: Declaração, Parâmetros, Retorno e Arrow ---
function criarTransacao(id, descricao, valor, tipo) {
    return { id, descricao, valor, tipo }; // Objeto
}

const formatarSaida = (t) => `[${t.tipo.toUpperCase()}] ${t.descricao}: ${MOEDA} ${t.valor}`;

// --- 3. Arrays e Objetos (Manipulação) ---
const extrato = [
    criarTransacao(1, "Salário", 3000, "entrada"),
    criarTransacao(2, "Aluguel", 1200, "saida")
];

console.log("=== SISTEMA DE FINANÇAS ===");

// --- 4. Estruturas de Controle: Laços (map, for) ---
console.log("\nHistórico Atual:");
extrato.map(item => {
    console.log(formatarSaida(item));
    // Operadores e Condicional simples
    if (item.tipo === "entrada") saldoGeral += item.valor;
    else saldoGeral -= item.valor;
});

console.log(`\nSaldo Atual: ${MOEDA} ${saldoGeral}`);

// --- 5. Interação e Estruturas de Controle (if/else, switch, while) ---
let continuar = true;

while (continuar) {
    const opcao = prompt("\nEscolha: (1) Adicionar Gasto | (2) Ver Saldo | (0) Sair: ");

    switch (opcao) {
        case '1':
            const desc = prompt("Descrição do gasto: ");
            const vlr = parseFloat(prompt("Valor: "));

            if (!isNaN(vlr) && vlr > 0) {
                const novoGasto = criarTransacao(extrato.length + 1, desc, vlr, "saida");
                extrato.push(novoGasto);
                saldoGeral -= vlr;
                console.log("Gasto registrado!");
            } else {
                console.log("Valor inválido!");
            }
            break;

        case '2':
            console.log(`Seu saldo é: ${MOEDA} ${saldoGeral}`);
            break;

        case '0':
            console.log("Encerrando...");
            continuar = false;
            break;

        default:
            console.log("Opção inexistente.");
    }
}

console.log("\nResumo Final:");
for (let i = 0; i < extrato.length; i++) {
    console.log(`${i + 1}. ${extrato[i].descricao}`);
}