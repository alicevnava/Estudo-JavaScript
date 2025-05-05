//parametros: variável de controle, condição p continuar e expressão de iteração
for (let dia = 1; dia <=30; dia++){
    //console.log("Dia") --> imprime Dia 30 vezes
    console.log ("Dia:", dia)//imprime Dia: 1, Dia: 2, ..., Dia: 30
}

//inicializa a variável
let semana = 1 
// só condição p continua, variável é declarada fora do loop
while (semana <= 52) {
    console.log ("Semana:", semana)
    //iterar a variável
    semana++ 
}

// inicializa a variável
let mes = 1
// primeiro passa pelo loop e depois verifiica se tem que continuar
do {
    console.log ("Mês:", mes)
    //iterar a variável
    mes++
    // colocar condição p continuar
} while(mes<=12)