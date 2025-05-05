// vetores 
const listaConvidados = ['Ana', 'Bia', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gustavo', 'Helena', 'Igor', 'Juliana'];

// nome dos convidados
console.log ("Alice fez aniversário e convidou: " + listaConvidados);

// quantidade de convidados
console.log ("A quantidade de convidados é: " + listaConvidados.length); //10

// valores dentro do array - usa index
// pessoa que está numa posição específica
console.log ("Convidado nº 1: " + listaConvidados[0]); // Ana
console.log ("Convidado nº 5: " + listaConvidados[4]); //diminui 1 por conta do index; Eduardo


// descobrir a pessoa que está na última posição
// pega o item da lista que esteja na última posição no mesmo número do tamanho do array
console.log("Convidado nº 10: " + listaConvidados[listaConvidados.length-1]) //diminui 1 por conta do index; Juliana

// qual o índice do array a pessoa está
console.log ("Daniela está em qual índice na lista? " + listaConvidados.indexOf("Daniela")); //3
// qual a posição do array a pessoa está
console.log ("Daniela está em qual nº da lista? " + (listaConvidados.indexOf("Daniela") + 1)); //4; aumenta 1 por causa do índice

    // usando variável
    // const indiceDaniela = listaConvidados.indexOf("Daniela");
    // console.log ("Daniela está em qual poisção na lista? " + indiceDaniela); //3

const arrayGeral = [ "Alice" , 26, true, {valor1: 10, valor2: 20}]//pode ter vários dados]