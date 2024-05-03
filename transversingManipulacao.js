/* outerHTML, innerHTML e innerText 
propriedade que retorn uma strig contendo o html ou texto. Epoivel atribuir um valor para as mesma
element.innerText = 'Novo Texto'
*/

const h1 = document.querySelector('h1')
console.log(h1.outerHTML) // retorna o html do elemento
console.log(h1.innerHTML) // html inetrno
console.log(h1.innerText) // texto sem tag
// h1.outerHTML = '<h1> novo titulo<h1>' // troca o h1 do site

const animaisLista = document.querySelector('.animais-lista')
console.log(animaisLista.outerHTML) // retorna o html do elemento
console.log(animaisLista.innerHTML) // html inetrno
console.log(animaisLista.innerText) // texto sem tag

// transversing
 // como navegar pelo dom, ultilizando propriedade e metodo

 const lista = document.querySelector('.animais-lista')
 console.log(lista.parentElement) //mostra o elemento pai do elemento
 console.log(lista.nextElementSibling) // mostra o proximo elemento
 console.log(lista.previousElementSibling) //mostra o elemento anterrior
 console.log(lista.children) // retorna HTMLCollevtion dos filhos do elemento 
console.log(lista.children[1]) // retorna o segundo filho da lista
console.log(lista.children[--lista.children.length]) // retorna o ultimo elemneto
console.log(lista.querySelector('li:last-child')) // tambem retorna o ultimo da lista

// Element vs Node 

// Elements representam um elemento html, ou seja uma tag

// node representa um nó e pode ser qualquer coisa , um Element, texto, cometario ou ate mesmo quebra de linha ou espaço

// console.log(lista.childNodes) // puxa os filhos node da lista

// Manipulando Elementos

// é possivel mover elementos no dom com metodos do node
//const animais = document.querySelector('.animais')
//const contato = document.querySelector('.contato')
//const titulo =contato.querySelector('.titulo')
//const mapa = document.querySelector('.mapa')
// animais.appendChild(titulo) // move titulo para final de animais
//contato.insertBefore(animais, mapa) // pega a classe contato e insere a classe animais antes da classe mapa que esta dentro da classe contato 
//contato.removeChild(titulo) // remove a classe titulo de dentro da classe contato
//contato.replaceChild(lista, titulo) // substitui a titulo pela lista de animais



// novos Elementos
 
// podemos criar novos elementos com o metodo createElement()
 
//const novoH1 = document.createElement('h1')
//novoH1.innerText = 'novo titulo h1'
// novoH1.classList.add('titulo')
// mapa.appendChild(novoH1) // addicio o novo h1 logo apos o primeiro filho da classe mapa no caso o iframe do google mapa

// clona Elementos

// todo elemento é unico , para criar um novo elemento baseado no anterior , ultilizamos o metodo cloneNode()
//const h = document.querySelector('h1')
//const faq = document.querySelector('.faq')

//const cloneh1 = h.cloneNode(true) // o true indica para clonar o filhos tambem
//cloneh1.classlist.add('.azul')
//faq.appendChild(cloneh1)


// exeercicio

//  duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)


// selecione o primeito dt de faq

const faq = document.querySelector('.faq')
const primeiroDT = faq.querySelector('dt')

// selecione o primeiro dd referente ao primeiro dt

const primeiroDd = primeiroDT.nextElementSibling


// substitue o conteudo html de .faq pelo de .animais

const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML





















