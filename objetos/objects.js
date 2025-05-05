// é um tipo de dado - mutáveis e passados por referência

// armazenar vários valores com propriedades
const fichaAlice = {
    nome : "Alice",
    idade : 26,
    cidade : "Brasília",
    casada: "true"
}

// console.log(fichaAlice) 
//console.log("Ficha da Alice", fichaAlice)

// acessar objeto e pegar a propriedade desjeada
//console.log("Nome: "+ fichaAlice.nome)

// adicionar nova propriedade ao objeto - mesmo sendo const é possível
fichaAlice.marido = "Danilo"
//console.log("Marido da Alice:", fichaAlice.marido)

// remover propriedade do objeto
delete fichaAlice.marido
//console.log("Alice:", fichaAlice)

// alterar o valor de uma propriedade do objeto
fichaAlice.cidade = "Taguatinga"
console.log("Ficha da Alice", fichaAlice)

// criar objeto vazio
const sobrenome = "Suzuki"
const age = 29
const city = "BH"
const job = true

// transforma as avriáveis em propriedades do objeto
// o nome da variável se torna o nome da propriedade e o valor da variável se torna o valor da propriedade
const fichaDanilo = {
    sobrenome, 
    age,
    city,
    job,
}

//console.log("Ficha Danilo: ", fichaDanilo)

// /ALTERAR uma propriedade existente
fichaDanilo.city = "Taguatinga"; // alterando a cidade
//console.log("Cidade alterada:", fichaDanilo.city);

// ADICIONAR uma nova propriedade
fichaDanilo.hobby = "Tocar violão"; // adicionando nova propriedade
//console.log("Adicionado hobby:", fichaDanilo.hobby);

// DELETAR uma propriedade
delete fichaDanilo.job; // removendo a propriedade 'job'
//console.log("Depois de deletar 'job':", fichaDanilo);

console.log("Ficha Danilo: ", fichaDanilo)