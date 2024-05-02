// constantemente vamos selecionar uma lista do DOM. A melhor forma para interrragirmos com ela é ultilizando o metodo ForEach

// paramento do forEach o primeiro paramento é o callback, ou eja a funcao que sera ativada, ea funcao pode receber 3 paramentro ValorAtual, index, array

const imgs = document.querySelectorAll('img');
let i = 0
imgs.forEach(function(intem, index, array){
    console.log(intem);
    console.log(i++)
    console.log(index);
    console.log(array);


});
// forEach é um mentodo de array, algun objeto array-like possuem esse metodo, caso nao possua ,  o ideal é transforma-lo em uma array

const titulos = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulos);
tituloArray.forEach(function(item){
    console.log(item)
})

// arrow function

/* É uma sinatxe curta em relacao a function Expression. basta remover a palavra chave functon e adicionar a fat arrow => apos os argumentos*/

const imagem = document.querySelectorAll('img');
 
imagem.forEach((item) => {
    console.log(item);

})

// argumentos unico nao precisa de parentese, multiplos argumentos precisa de parentese e sem argumento precisa de parentese
// por padrao sempre usaremos o parentese 
imagem.forEach(item =>{
    console.log(item)

})

imagem.forEach((item, index) => {
    console.log(item, index)
})

let x = 0
imagem.forEach(()=>{
    console.log(x++)
})

// Exercicio

// mostre no console cada paragrafo do site

const paragrafo = document.querySelectorAll('p')

paragrafo.forEach((i)=>{
    console.log(i)
})

// motre o texto dos paragrafo no console

paragrafo.forEach((i)=>{
    console.log(i.innerText)
})


