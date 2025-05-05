// declarção de variáveis e dando valor a elas
// uma vez declarada, o valor não pode ser alterado
const primeiroValor = 5;
const segundoValor = 10;

// somando os valores e imprimindo o resultado
console.log("a soma dos dois valores é: " , primeiroValor + segundoValor); // 15
// ou armazenando o resultado em uma variável e imprimindo o resultado
const resultado = primeiroValor + segundoValor; // 15
console.log("o resultado é: " , resultado); // 15


// declarando uma variável com let e atribuindo valor a ela
let terceiroValor = 15; // 15
console.log("o terceiro valor é: " , terceiroValor); // 15

// o valor de ler pode ser alterado
terceiroValor = 20; // 20
console.log("o novo valor é: " , terceiroValor); // 20


// variaveis com texto
let estudo = "JavaScript"; // "JavaScript"
console.log ('estudo:', estudo) // "JavaScript"

// reatibuir valor
estudo = "JS"; // "JS"
console.log ('estudo:', estudo)

// template literals `- pode colocar as variaveis dentro de ${}`
console.log (`estudando: ${estudo}`)


// reatrubuir valores de variaveis com tipos diferentes (number --> string)
let x = 10
x = "dez"