let userController = new UserController('form-user-create', 'form-user-update', 'table-users');


let nomes = 'João Vitor Nunes Lobato de Souza'

const tratarNomes = nomes.split(' ').map(nomeAtual => {
    return nomeAtual[0].toUpperCase() + 
    nomeAtual.toLowerCase().slice(1)
})

console.log(nomes)

let numbers = [{ nome: 'João', Age: 21 }]

numbers.forEach(element => {
    let elementStringfy = JSON.stringify(element.Age)
    element.Age = JSON.parse(elementStringfy)
    console.log(typeof element.Age)
})


let palavra = 'world'

let formatado = palavra.split('').reverse().join('')

console.log(formatado)