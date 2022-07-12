const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
] 

// Desafio 1 : todos os alunos são bolsista?

console.log(alunos.map( a => a.bolsista ))
const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}
)

console.log(resultado)
console.log(typeof resultado)

const todosBolsistas = function () {
    if(resultado === 4) { console.log('verdadeiro')
    } else { console.log('falso') }
}

todosBolsistas()

// Desafio 2: Algum aluno é bolsista?

const AlgumBolsista = function () {
    if(resultado >= 1) { console.log('verdadeiro')
    } else { console.log('falso') }
}

AlgumBolsista()