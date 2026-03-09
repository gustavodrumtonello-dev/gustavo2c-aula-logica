const prompt = require('prompt-sync')();

let bancoDeDados = [];
console.log("--- CADASTRO ---");
let usuario = prompt("Crie seu usuário: ");
let senha = prompt("Crie sua senha: ");

bancoDeDados.push({ user: usuario, pass: senha });

let repetir = true;

while (repetir) {
    console.log("\n--- TELA DE LOGIN ---");
    prompt("Digite seu usuário: ");
    prompt("Digite sua senha: ");

    console.log("\n LOGIN ACEITO! (Qualquer dado é válido aqui)");
    
    console.log("Dados salvos no array:", bancoDeDados[0]);

    repetir = false; 
}