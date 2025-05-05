// diferentes de true e false

//falsy: 0, string vazia, undefined, null, NaN
console.log (Boolean(0)) //converter o 0 para booleano --> false
console.log (Boolean(``)) //string vazia --> false
console.log (Boolean(undefined)) //undefined --> false  
console.log (Boolean(null)) //null --> false
console.log (Boolean(NaN)) //NaN --> false

const valor1 = 2
const valor2 = 3
//truthy: todo um valor diferente de falsy
console.log (Boolean(1)) //converter o 1 para booleano --> true
console.log ("Olá mundo:", Boolean(`Olá mundo`)) //string com valor --> true
console.log ("Objeto:",Boolean({valor1, valor2})) //objeto --> true, pode ser vazio
console.log ("Array:", Boolean([1,2,3])) //array --> true, pode ser vazio



const nomes = ['Lucas', 'João', 'Maria', 'Ana', ''] //array com valores
console.log ('Nomes:', nomes) //['Lucas', 'João', 'Maria', 'Ana', '']
//quero extrair apenas os valores truthy, ou seja, que existem e não são vazios 
const nomesFiltrados = nomes.filter ((nome)=> (nome)) //percorre nome e filtra aqueles em que nome existe
console.log ('Nomes Filtrados:', nomesFiltrados) //['Lucas', 'João', 'Maria', 'Ana']

//exemplo
const x= 10
const y = null

if (x) {
    console.log ('X existe e é truthy') //x existe, pois é diferente de null
}
if (y){
    console.log ('Y existe e é truthy') //não vai entrar aqui, pois y é null
}


//exemplo 2
nomes.forEach (nome => {
    if (nome) {
        console.log ('é truthy:', nome) //aqui ele vai imprimir apenas os nomes que existem e não são vazios
    }
})


//ajuda a não precusar fazer comparação em if