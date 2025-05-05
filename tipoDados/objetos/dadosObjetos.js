// objetos

const fichaAlice = {
    nome: "Alice",
    idade: 26,
    estadoCivil: "casada",
    temFilhos: false,

}
// acessar propriedades do objeto
console.log("Nome da Alice: "+ fichaAlice.nome)

// adicionar propriedade ao objeto
fichaAlice.unha = "vermelha"

// remover propriedade do objeto
delete fichaAlice.unha
console.log(" ficha da Alice: " , fichaAlice)

console.log("Unha da Alice:" , fichaAlice.unha) //undefined



const apelido = "Dan"
const anoNascimento = 1995
const profissao = "programador"
const temBrinco = false


// objetos podem ser criados vazios e passar as variáveis depois que serão convertidas em propriedades do objeto
const fichaDanilo ={
    apelido, anoNascimento, profissao, temBrinco
}

console.log("Ficha do Danilo: ", fichaDanilo)

fichaDanilo.cabelo = "castanho"
delete fichaDanilo.cabelo