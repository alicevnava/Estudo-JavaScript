// é um loop
const notasFinais = [
    {nome: "Alice", nota: 5},
    {nome: "Aline", nota: 7},
    {nome: "Danilo", nota: 10},
    {nome: "Cherry", nota: 5},
    
]
// usando for
// for (i = 0; i <= notasFinais.length; i ++){
//verificar se a nota de cada aluno é suficiente p aprovar ou não
//if (notasFinais[i].nota >= 6){
//console.log (`Aluno ${notasFinais[i].nome} está aprovado com nota ${notasFinais[i].nota}`)
//} else {
//console.log (`Aluno ${notasFinais[i].nome} está reprovado com nota ${notasFinais[i].nota}`)
// }
// }

// forOf - n precisa de variável de controle, n precisa de i, n precisa de length
// pega item por item do array - para cada aluno em notas finais
// for (let aluno of notasFinais ) {
//     if (aluno.nota >= 6) {
//         console.log (`Aluno ${aluno.nome} está aprovado com nota ${aluno.nota}`)
//     } else {
//         console.log (`Aluno ${aluno.nome} está reprovado com nota ${aluno.nota}`)
//     }
// }

// forEach - varrer o array e fazer algo com cada um desses itens
// pareemtro tem que ser uma função
notasFinais.forEach( (aluno)=> {
    if (aluno.nota >= 6) {
        console.log (`Aluno ${aluno.nome} está aprovado com nota ${aluno.nota}`)
    } else {
        console.log (`Aluno ${aluno.nome} está reprovado com nota ${aluno.nota}`)
    }
}) 