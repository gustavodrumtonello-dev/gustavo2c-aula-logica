function listarPares(numero) {
    let numerosPares = [];

    for (let i = 0; i <= numero; i++) {
        
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }

    console.log(`Números pares de 0 até ${numero}:`);
    console.log(numerosPares);
}


listarPares(32); 