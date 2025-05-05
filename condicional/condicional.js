const idadeMaria = 16
const maioridade = 18

// executa se verdadeiro
if (idadeMaria >= 18) {
    console.log ("Maria PODE dirigir")
} else {
    const anosFaltantes = maioridade - idadeMaria
    console.log ("Maria NÃO PODE dirigir")
    console.log (`Faltam ${anosFaltantes} anos para Maria poder dirigir`)
}

// operadores ternarios

idadeMaria >= maioridade ? console.log ("PODE DIRIGIR") : console.log ("NÃO PODE DIRIGIR")


// multiplas condições
const idadePessoa = 16

if (idadePessoa >= 0 && idadePessoa <= 12) {
    console.log ("Infância")
} else if (idadePessoa >=13 && idadePessoa <= 17) {
    console.log ("Adolescência")
} else if (idadePessoa >=18 && idadePessoa <= 25){
    console.log ("Jovem Adulto")
} else if (idadePessoa >= 25 && idadePessoa <=60) {
    console.log ("Adulto")
} else {
    console.log ("Idoso")
}

// swith case
const diaSemana = 3
let nomeDia

switch (diaSemana) {
    case 0: 
        nomeDia = "Domingo"
    break
    case 1: 
        nomeDia = "Segunda"
    break
    case 2: 
        nomeDia = "Terça"
    break   
    case 3: 
        nomeDia = "Quarta"
    break   
    case 4: 
        nomeDia = "Quinta"
    break   
    case 5: 
        nomeDia = "Sexta"
    break   
    case 6: 
        nomeDia = "Sábado"
 break         
} console.log ("Dia da Semana: " + nomeDia)