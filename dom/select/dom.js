// dom é uma intreface e usa pontos para acessar os métodos, para manipular

// seleciona pelo ID
document.getElementById("customTitle")
console.log(document.getElementById("customTitle")) // <h2 id...>   </h2>

//seleciona pela TAGS - todos daquela tag
 document.getElementsByTagName ("button")
 console.log(document.getElementsByTagName ("button"))//mostra todos os botões da página, com a classe, em forma de array

//seleciona por CLASS - todos daquela classe
document.getElementsByClassName("boldTexts")
console.log(document.getElementsByClassName("boldTexts"))//mostra todos os elementos que estão nessa classe, em forma de array

//seleciona o PRIMEIRO caso que encontrar
document.querySelector(".boldTexts")
console.log(document.querySelector(".boldTexts"))//mostra o primeiro elemento que encontrar com essa classe - mostra a sua tag, id e classe


//seleciona o TODOS que encontrar
document.querySelectorAll(".boldTexts")
console.log(document.querySelectorAll(".boldTexts"))//mostra todos os elementos que estão nessa classe