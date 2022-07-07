var numero = 1 //Só existe escopo de var dentro de funcao
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

