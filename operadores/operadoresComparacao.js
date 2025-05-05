// operadores de comparação - retorna booleano
// > maior que
// < menor que
// >= maior ou igual que
// <= menor ou igual que


const idadeAlice = 26
const idadeDanilo = 29
// console.log ("Alice é mais velha que Danilo?", idadeAlice > idadeDanilo)
console.log (`Alice é mais velha que Danilo? ${idadeAlice > idadeDanilo} Alice tem ${idadeAlice} anos`)
console.log (`Danilo é mais velho que Alice? ${idadeDanilo >idadeAlice}`)
console.log (`Alice é mais nova que Danilo? ${idadeAlice < idadeDanilo}`)
console.log (`Alice tem idade menor OU igual a Danilo? ${idadeAlice <= idadeDanilo}`)

const maiorIdade = 18
console.log (`Alice é maior de idade? ${idadeAlice >= maiorIdade}`)


const x = 10
const y = 20
const z = 10
const a = "10"
//  ==== compara valor e tipo -> Igualdade estrita
console.log (`O número ${x} é igual ao número ${y}? ${x===y} --> numbers`)
console.log (`O número ${x} é igual ao número ${z}? ${x===z} --> numbers`)
console.log (`O número ${x} é igual ao número ${a}? ${x===a} -->  number e string, compara tipos`) //tipos diferentes

// == compara valores -> igualdade solta
console.log (`O número ${x} é igual ao número ${z}? ${x==z} --> number, converte tipo`) //converte para o mesmo tipo

// comparação de desigualdade
// desiguldade estrita
console.log (`O número ${x} é diferente do número ${y}? ${x !== y} --> numbers`)
console.log (`O número ${x} é diferente do número ${a}? ${x !== a} --> number e string`)
// desiguldade solta
console.log (`O número ${x} é diferente do número ${a}? ${x != a} --> number e string`)