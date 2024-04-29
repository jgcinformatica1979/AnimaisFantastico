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
