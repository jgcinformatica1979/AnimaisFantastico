// pode mos elecionar elemento por id, classe e tagname
//document.getElementById('id')
//document.getElementsByClassName('classe')
//document.getElementsByTagName('tag html')



const animais = document.getElementById('animais');
console.log(animais.innerText)

const contato = document.getElementsByClassName('grid-section')
console.log(contato)
console.log(contato[1])

const ul = document.getElementsByTagName('ul')
console.log(ul)


// seletor geral 

// document.querySelector()

// seleciona elemento da mesma forma que o css

/* ou seja para selecionar uma class deve usar o ponto, para selecionar um id voce deve usar # antes do id ou direto uma tag

vai selecionar o primeiro elemento encontrado

*/

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)
const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]') // retorna o primeiro link comecado com #
console.log(linkInterno)

// seletor geral 

// document.querySelectorAll()

// seleciona todos os elementos, é indetificado ugual no css

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)
console.log(animaisImg[1]
)

// diferenca entre Html colection e node List  eta nos metodos e propriedade de ambos, alem do retorno da nodeLista ser estatico e o HTMLColectico ser dinamico

const gridsectionHtML = document.getElementsByClassName('grid-section');
const gridSectionNodeList = document.querySelectorAll('.grid-section')
// primeiraUl.classList.add('grid-section') //, veja que apenas o html colectio atualizou
console.log(gridSectionNodeList)
console.log(gridsectionHtML)

// array-like

// HTMLColection e NodeList sao array-like , parece uma array mas nao sao, o metodo do array forEach() so existem no NodeList

// é possivel transformar um array-like em uma array real , ultilizando o metodo array.from()

gridSectionNodeList.forEach(function(intem, index){
    console.log(intem)
    
})
const arrayGrid = Array.from(gridsectionHtML) // antem nao podia usar o forEach na gridsectionHTML 
console.log(arrayGrid)
arrayGrid.forEach(function(intem, index){
    console.log(intem,index)
})

/* rerone no conssole todas as imagem do site*/

const todasImagem = document.querySelectorAll('img')
console.log(todasImagem)

// retorne no console apena a imeagem que começa com lion

const apenaLeon = document.querySelector('img[src^="img/lion"]')
console.log(apenaLeon)

//selecione todos os links internos

const linkInternos = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)


// selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

// selecione o ultimo p do site

const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length -1])



