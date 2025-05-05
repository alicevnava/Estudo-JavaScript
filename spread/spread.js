 const listaCasamento = ["Aline", "Danilo", "Cherry"]

//reaproveitar o código do exemplo anterior
//const listaAniversario = [listaCasamento[0], listaCasamento[1], listaCasamento[2], "Jorge", "Filó"]

//reaproveitar
const listaAniversario = [...listaCasamento, "Jorge", "Filó"] //spread operator
console.log(listaAniversario) 

//cópia do array
console.log ("Lista Casamento: ", listaCasamento)
const listaCha = [...listaCasamento]// Aline, Danilo, Cherry
//adicionar convidado
listaCha.push("Eugenio")
console.log ("Lista Chá: ", listaCha) // Aline, Danilo, Cherry, Eugenio

 //-----------------------------------------------------------------------

//em objetos

const professor1 = {
    nome: "João",
    escola: "Escola A",
    materia: "Matemática",
}

//reutilizar propriedades do objeto professor1
const professor2 = {
    //copiar td e modificar apenas o que eu quero
    ...professor1,
    nome: "Maria"
    //o resto fica igual
}
console.log ("Professor 1: ", professor1)
console.log ("Professor 2: ", professor2)