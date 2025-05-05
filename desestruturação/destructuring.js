//extrair propriedades de um objeto/arrays

//ARRAYS
const nomes = ['Lucas', 'João', 'Maria'];

const [nome1,  nome2, nome3] = nomes; //criando 3 variáveis a partir de um array
console.log("Nome 1: ", nome1, "Nome 2: ", nome2, "Nome 3: ", nome3); // Lucas João Maria

//array com array dentro
const casais = [['Alice', 'Danilo'], ['Ana', 'Carlos']];
const [casal1, casal2] = casais; //criando 2 variáveis a partir de um array de arrays
console.log("Casal 1: ", casal1); 
console.log("Casal 2: ", casal2)

const [[pessoa1, pessoa2], [pessoa3, pessoa4]] = casais; //criando 4 variáveis a partir de um array de arrays
console.log("Pessoa 1: ", pessoa1);
console.log("Pessoa 2: ", pessoa2);
console.log("Casal 2: ", pessoa3, "e" , pessoa4);


//OBJETOS com array
const pessoa = {
    nome: "Alice",
    sobrenome: "Vivas",
    família: ["Danilo", "Aline", "Cherry"]
}

//p não usar o mesmo nome das propriedades do objeto na variável a ser criada
//const {nome:primeiroNome, sobrenome:ultimoNome, família:parentes} = pessoa
const {nome, sobrenome, família} = pessoa
console.log("Nome: ", nome); // Alice
console.log("Sobrenome: ", sobrenome); // Vivas 

//objeto dentro de objeto
const cachorro = {
    nomeCientifco:{
        genero: "Canis",
        especie: "Canis lupus familiaris"
    },
    nomesPopulares: ["Cachorro", "Cão", "Dog"],
}
//trocar o nome da variável
//const {nomeCientifco: {genero: primeiroNome, especie: ultimoNome}, nomesPopulares: apelidos} = cachorro
const {nomeCientifco:{genero, especie}, nomesPopulares}= cachorro
console.log("Genero: ", genero); // Canis
console.log("Espécie: ", especie); // Canis lupus familiaris