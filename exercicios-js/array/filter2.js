Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 500 && p.fragil == true
}))

console.log(produtos.filter(i => i.fragil == false))

const barato = produto => produto.preco < 500
const duravel = produto => produto.fragil == false

console.log(produtos.filter2(barato).filter2(duravel))