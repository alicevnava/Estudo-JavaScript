const listaConvidados = ["Danilo", "Aline", "Lucas", "Ana", "Marcio"];

// acrescentar pessoa na lista - último lugar

listaConvidados.push("Juliana");
// console.log(listaConvidados);

// remover o último elemento da lista
listaConvidados.pop();
//console.log(listaConvidados);

    // remover dois últimos elementos da lista...
    // listaConvidados.pop()
    // listaConvidados.pop()

// adicionar no começo da lista
listaConvidados.unshift("Alice");
//console.log(listaConvidados);

// remover do começo da lista
listaConvidados.shift();
//console.log(listaConvidados);

// verificar se algo está incluso no array
console.log("Lucas está na lista? " + listaConvidados.includes("Lucas")); // true
console.log("Juliana está na lista? " + listaConvidados.includes("Juliana")); // false

