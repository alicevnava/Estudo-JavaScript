// reutilizar pedaços de códigos

// função sem parâmetro e sem retorno
function impirmir (){
    console.log ("Olá mundo")
}
// precisa ser chamada
impirmir()

// função com parâmetro e sem retorno
// essa função está somando e mostrando no console
function calcularSoma (valor1, valor2) {
    console.log(`A soma entre ${valor1} e ${valor2} = ${valor1+valor2}`)
}
// passar valor do parâmetro
calcularSoma(1,2)
calcularSoma(2,5)
calcularSoma(8,3)

// função com parâmetro e com retorno
// essa função vai apresentar apenas o retorno e o console vai ser ao chamar
function calcularSubtração (valor1, valor2) {
    return valor1-valor2
}
// passar valor do parâmetro
console.log (calcularSubtração(2,1))
console.log (`A subtração entre 5 e 2 = ${calcularSubtração(5,2)}`)
console.log (calcularSubtração(8,3))

// usando variáveis
// const valor1 = 4 const valor2 = 3
// console.log(`A subtração entre ${valor1} e ${valor2} = ${calcularSubtração(valor1+valor2)`)

// aramzenar funções em varáveis para evitar hoisting
const print = function(impressao) {
    console.log(impressao)
}

print("Hello World")

// expressão de função
const numero1 = 2
const numero2 = 4

const calcularMultiplicacao = function (numero1, numero2){
    return numero1*numero2
} 
console.log(`A multiplicação entre ${numero1} e ${numero2} = ${calcularMultiplicacao(numero1, numero2)}`);
