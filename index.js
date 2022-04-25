let userController = new UserController('form-user-create', 'table-users');


let nomes = 'João Vitor Nunes Lobato de Souza'

const tratarNomes = nomes.split(' ').map(nomeAtual => {
    return nomeAtual[0].toUpperCase() + 
    nomeAtual.toLowerCase().slice(1)
})

console.log(tratarNomes)