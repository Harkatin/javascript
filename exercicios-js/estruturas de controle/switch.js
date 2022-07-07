const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra!')
            break
        case 8:
        case 7:
            console.log('Aprovado!')
            break
        case 6:
        case 5:
        case 4:
            console.log('Prova Final!')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado!')
            break
        default:
            console.log("Nota inválida!")
    }
}

imprimirResultado(10)
imprimirResultado(9.5)
imprimirResultado(7.9)
imprimirResultado(5.9)
imprimirResultado(4.4)
imprimirResultado(2.9)
imprimirResultado(0.9)
imprimirResultado()
imprimirResultado(null)
imprimirResultado(11)