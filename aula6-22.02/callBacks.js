// setTimeout( () => { // Callback Function anônima
//     console.log('Opa, sou a callback sendo executada.')
//     }, 5000 
// )

// let meuCallback = (  ) => { // Callback function definida
//     console.log('Executando a função meuCallback.')
// }
// setTimeout(meuCallback, 6000);

const somar = (numero1, numero2) => numero1 + numero2;
const subtrair = (numero1, numero2) => numero1 - numero2;

let calculadora = (numero1, numero2, operacao) => {
    return operacao(numero1, numero2);
}

console.log(calculadora(10, 5, somar))
console.log(calculadora(10, 5, subtrair))
console.log(calculadora(5, 10, () => 5 + 10))
console.log(calculadora(5, 10, (numeroA, numeroB) => numeroA + numeroB))
