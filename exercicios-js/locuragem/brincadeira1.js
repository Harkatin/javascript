const humana = {
    continente: 'Africa',
    raca: 'Negra',
    especie: 'homo sapiens',
    animal: 'leao',
    altura: 1.78
}

function Tamanho() {
    if(humana.altura > 1.56) {
        console.log('Voce eh alto')
    } else {
        console.log('Voce eh pitoco')
    }
}

Tamanho()

const minhaarray = [{
    Nome: 'Kamila',
    idade: 29,
    femea: true
}, {
    Nome: 'Thiago',
    idade: 38,
    femea: false
}]

console.log(minhaarray)

console.log(minhaarray.filter(function(p) {
    if(p.idade < 30 && p.femea) {console.log(`${p.Nome } pode engravidar!`)}
}))


