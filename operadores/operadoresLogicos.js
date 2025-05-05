// operadores logicos
// AND (&&) - OR (||) - NOT (!)

console.log ("Maria foi parada em uma blitz")

const idadeMaria = 18
const temCNH = true

// console.log ("Maria vai ser presa?", idadeMaria >=18 && temCNH === false)
// para ser preso tem que ter mais de 18 e não ter CNH
// AND --> para ser TRUE, ambas as condições devem ser TRUE
console.log (`Maria vai ser presa? ${idadeMaria>=18 && temCNH === false}`) //false
//console.log(`Maria vai ser presa? ${idadeMaria >= 18 && !temCNH}`);

console.log ("Maria foi para a balada e precisa mostrar documento")

const temRG = true
// tem que ter 18 e ter documento
console.log (`Maria pode entrar? ${idadeMaria >=18 && temRG === true}`) //true

// OR --> para ser TRUE, pelo menos um tem que ser TRUE
console.log (`Maria tem documento? ${temCNH === true  || temRG === true}`) //true



// NOT
const gostaDeBeber = true
// negação 
const mariaGostaDeBeber = !gostaDeBeber 
console.log (`Maria gosta de beber? ${mariaGostaDeBeber}`) //false
