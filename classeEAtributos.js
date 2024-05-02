// classList

// retorna uma lista com as classes do elemento. Pemite add, remover e verificar se contem

const menu = document.querySelector('.menu')

console.log(menu.classList) // lista as classes
menu.classList.add('ativo') // addiciona a classe ativo
menu.classList.remove('azul') // remove a classe azul
menu.classList.toggle('azul') // verifica se true, se true remove azul caso false add azul
menu.classList.contains('azul') // verifica se contem azul

if (menu.classList.contains('azul')){
    console.log('yes')
}else{
    console.log('nao')

}
console.log(menu.classList)

//atributos
// retorna um array-like com atributo do elemento

const animais = document.querySelector('.animais')

console.log(animais.attributes) // retorna todos o atributos do elemento
console.log(animais.attributes[1])


// getAttibute e setAttibutes

const img = document.querySelector('img')
console.log(img.getAttribute('src')) // mostra o caminho src
console.log(img.getAttribute('alt')) // mostra o atributo alt se tiver
console.log(img.setAttribute('alt', 'raposassa')) // grava o atributo alt

// read only vs writable

// existem propriedade que nao permite a mundaça de seus valores, elas sao considderada so de leitura

// console.log(img.attributes = 'class="ativo"') // nao funciona pois atribute é so leitura


// exercicio

// addiciona a classe ativo a todos os intem do menu
const inteMenu = document.querySelectorAll('.menu')
inteMenu.forEach((i) => {
    i.classList.add('ativo')

})

// remover a classe ativo de todos os intem e mantem so primeiro

inteMenu.forEach((i) => {
    i.classList.remove('ativo')
})
inteMenu[0].classList.add('ativo')

// verifique se a imagem possui o atributo alt

const imgs = document.querySelectorAll('img')
imgs.forEach((img) => {
    console.log(img.hasAttribute('alt'))


})

// modifique o href do link externo
const linkExterno = document.querySelector('a[href^="http"]')
linkExterno.setAttribute('href', 'google.com')
console.log(linkExterno)




