let multiplicacao = require("./multipliacacao");
let somaFunc = require("./soma");
let subtracao = require("./subtracao");
let divisao = require("./divisao")

console.log(`O valor da soma é: ${somaFunc(1, 2)}`);

console.log(`O valor da subtração é: ${subtracao(2,1)}`);

console.log(`O valor da multiplicação é: ${multiplicacao(2, 4)}`);

console.log(`O valor da divisão é: ${divisao(8, 2)}`)