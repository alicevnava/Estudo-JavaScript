// alterar, manipular, adicionar e deletar - conteúdos, elementos e atributos

// selecionar o elemento
const buttonsContainer = document.querySelector(".container")

//ALTERAR CONTÉUDO
//alterar o elemento
//innerHTML - altera o conteúdo do elemento, substituindo o conteúdo atual pelo novo conteúdo
//buttonsContainer.innerHTML = "<button>Teste</button>"

//adicionar o elemento com innerHTML, usa o += que é de atribuição, então esse novo botão seria adicionado ao conteúdo atual, sem substituir o conteúdo atual
//buttonsContainer.innerHTML += "<button>Teste</button>"

//alterar o texto de um elemento
const firstTitle = document.querySelector('h1')
firstTitle.innerText = "Novo título"


//ALTERar ESTLOS
buttonsContainer.style.backgroundColor = "red" //altera o background do elemento


//ALTERAr ATRIBUTOS das TAGS

//alterar o ID de um elemento
const lastTiltle = document.getElementById('title4') 
title4.setAttribute('id' , 'customTitle') //altera o id do elemento e se tiver algum estilo, ele vai aplicar o estilo do id que foi alterado

//acha o terceiro h2 e altera o texto dele
const thirdTitle = document.querySelector('h2:nth-of-type(3)')
thirdTitle.setAttribute('id', 'orangeTitle')


//REMOÇÃO DE ATRIBUTOS  
lastTiltle.removeAttribute('id') //remove o id do elemento

//CRIAR e REMOVER ELEMENTOS
const newTitle = document.createElement('h3')
newTitle.innerText = "Novo título" //adiciona o texto ao elemento criado
//adicionar no final do body
document.body.appendChild(newTitle)

//adicionar em um local específico
const newButton = document.createElement('button')
newButton.innerText = "Novo botão"
buttonsContainer.appendChild(newButton) //adiciona o botão dentro do container, no final dele
//estilo do botão - pela classe
// newButton.setAttribute('class', 'styledButton')

//adicionar mais de uma classe ao botão
newButton.classList.add('styledButton', 'boldTexts') 