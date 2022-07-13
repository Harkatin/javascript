const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chines = p => p.pais === 'China'
const mulher = p => p.genero === 'F'
const menorSalario = (patual, pconst) => {
    return patual.salario < pconst.salario ? patual : pconst
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chines)
        .filter(mulher)
        .reduce(menorSalario)
    console.log(func)
})


