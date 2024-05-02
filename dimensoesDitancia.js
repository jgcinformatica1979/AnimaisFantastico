// height e Width

// Essa ao propriedade e metodo do objeto Element e HTMLElement, a maioria sao somente de leitura

const listaAnimais = document.querySelector('.animais-lista')
console.log(listaAnimais.clientHeight)// heigth + padding
console.log(listaAnimais.scrollHeight) // heigth total memo dentro do scroll
console.log(listaAnimais.offsetHeight) // heigth + padding + borda

// offsetTop e OffsetLeft

 
console.log(listaAnimais.offsetTop) // distancia entre o top do elemento e o topo da pagina
console.log(listaAnimais.offsetLeft) // ditancia entre o canto esquedo do elemento e o canto esquerdo da pagina

// getBoundingClientRect()

// metodo que retorna divessos valores de um elento

console.log(listaAnimais.getBoundingClientRect())

// windows 

// retorna a propidade da tela do uuario

console.log(
    window.innerWidth,
    window.outerWidth,
    window.innerHeight,
)

// matchMedia
 // ultilize um media querie como no css para verificar a largura do brouser

 const small = window.matchMedia('(max-width: 600px)').matches
console.log(small)

 if (small){
    console.log('usuario mobile')
 }else{
    console.log('usuario dektop')
 }

 // exercicio

 // verifique a ditancia da primeira imagem em relacao ao topo da pagina

 const primeiraImagem = document.querySelector('img')
console.log(primeiraImagem.offsetTop)

// retorne a  soma da lagura de toda as imagem
function somaImagem(){
const Imgs = document.querySelectorAll('img')
let soma = 0    
Imgs.forEach((imagem) =>{
        console.log(imagem.offsetWidth)
        soma = soma + imagem.offsetWidth
    })
    console.log(soma)
}

window.onload = function(){
    somaImagem()
}


// verifique se os link da pagina tenha o tamanho minimo recomendado pelo google 48 x 48 px

const links = document.querySelectorAll('a');
console.log(links)
links.forEach((link) =>{
    const linkWidth = link.offsetWidth
    const linkHeigth = link.offsetHeight
    if (linkWidth >= 48 && linkHeigth >= 48){
        console.log(link, 'possui boa acessibilidade')
        }else{
            console.log(link, 'nao possui boa acessibilidade')
        }

})
 
// se o brousser for menor que 720px add a classe menu mobile ao menu

const brouserSmall = window.matchMedia('(max-width: 720px)').matches
if(brouserSmall){
    const menu =document.querySelector('.menu');
    menu.classList.add('menu-mobile')
}












