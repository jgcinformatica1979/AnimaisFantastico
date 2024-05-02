// addEventListener

const img = document.querySelector('img');
img.addEventListener('click',() =>{
    console.log('clicou')
})


// boa pratica separar a funcao de callback do addEventListner, ou seja declarar a funcao ao inves de passar a funcao totalmente anonima

// evento 

// o primeiro paramento do callback é referente ao evento que ocoreu

function callback(){
    console.log('clicou')

}

img.addEventListener('click', callback); // a funcao callback o sera execultada quando for chamada
// img.addEventListener('click', callback()); // assim a funcao esta sendo execultada ao rodar o programa 
img.addEventListener('click',() =>{ // assim funciona ma nao é boa pratica
    console.log('clicou')  
})

img.addEventListener('click', function(){  // funcao anonima
    console.log('clicou, mas nao é boa pratica')
})

function callback1 (){
    console.log()
}
addEventListener('click', callback1)



function callbackAnimaisLista(event){
    console.log(event.currentTarget)
    console.log(event.target)

}

const animaisLista = document.querySelectorAll('.animais-lista')
// animaisLista.addEventListener('click', callbackAnimaisLista())

const linkExterno = document.querySelector('a[href^="http"]')
function handLinkExterno(e){
    e.preventDefault() // esta acontecendo o evento mas esta sendo prevenido enao deixando acontecer
  
}



linkExterno.addEventListener('click', handLinkExterno)


// this 

// é uma palavra resevada do javaScript , que pode fazer referencia a diferente objetos, no caso de evento ela fara referencia ao elemneto que o addEventListener foi adicionado

const img1 = document.querySelector('img')
function callback2 (evento){
    console.log(this) // retorna a imagem
    console.log(this.getAttribute('src'))
}

img1.addEventListener('click', callback2)


// Diferentes Eventos

// Exitem diferentes eventos como Click, scroll, resize, keydown, keyup, mouseenter e mais . Evento pode ser adicionado a diferentes elementos como window e document tambem
function handEvent(event){
    console.log(event.type, event);

}


const h1 = document.querySelector('h1')
//h1.addEventListener('click', handEvent)
//h1.addEventListener('mouseenter', handEvent)
h1.addEventListener('mousemove',handEvent )

window.addEventListener('scroll', handEvent)
window.addEventListener('resize', handEvent)
window.addEventListener('keydown', handEvent)
function handKeyboard(event){
    console.log(event.key)
    if (event.key === 'a'){
        document.body.classList.toggle('azul')
    }else if( event.key === 'v')
        document.body.classList.toggle('vermelho')
}


window.addEventListener('keydown', handKeyboard)


// forEach e Eventos

// o metodo addEventListener é adicionado a um unico elemento, entao é nescessario um loop entre os elementos para adicionar a cada um deles.

const imgs = document.querySelectorAll('img')

function imgSrc(event){
    const src = event.currentTarget.getAttribute('src');
    console.log(event.target)
 
}

imgs.forEach((img) => {
   img.addEventListener('click', imgSrc) 


});

// execicio

// quando o usuario clicar no link internos, addiciona a classe ativo ao intem clicado e remova dos demais, cao ele posua a mesma, previna o comportamento padra desse link

const linkInternos = document.querySelectorAll('a[href^="#"]')

function handClick(event){
    event.preventDefault()
    linkInternos.forEach((link)=>{
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')


}


linkInternos.forEach((link)=>{
    link.addEventListener('click', handClick)

})

// selecione todos elementos do site a partir do body e ao click moste examente o elemento que esta sendo clicado
function  handelemento(event){
   // console.log(event.currentTarget)
    event.currentTarget.remove()

}


const todosElemento = document.querySelectorAll('body *')
todosElemento.forEach((elemento)=>{
    elemento.addEventListener('click', handelemento)
})


// ultilizando o codigo anterior remova o intem clicado

// codigo linha 142

// e o usuario clicar na tecla t aumente todo texto do site

function handClitT(event){
    if (event.key === 't'){
        console.log('clicou no t')
        document.documentElement.classList.toggle('htmlTextoMaior')
    }    
// documentElement === esta falando com o html
}

window.addEventListener('keydown', handClitT)


//1:04




