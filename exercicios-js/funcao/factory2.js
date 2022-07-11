function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('sabonete', 5.98))
console.log(criarProduto('iPad', 2555.88))