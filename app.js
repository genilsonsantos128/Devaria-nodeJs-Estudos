const readLine = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    })
   
const minhaPrimeiraConstante = 'minha primeira constante';
console.log(minhaPrimeiraConstante);

let leituraDeCampo;
readLine.question('por favor digite algo:', input => {
    leituraDeCampo = input; 
    console.log(leituraDeCampo);
});







