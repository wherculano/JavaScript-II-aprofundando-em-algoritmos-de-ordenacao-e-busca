const listaLivro = require("./arrayOrdenado")

function buscaBinaria(array, indiceDe, indiceAte, valorBuscado){
    const indiceDoMeio = Math.floor((indiceAte + indiceAte) / 2)
    const elementoDoMeio = array[indiceDoMeio]

    if( indiceDe > indiceAte){
        return -1  // em JS significa que nao encontrou nada
    }
    if (valorBuscado === elementoDoMeio.preco){
        return indiceDoMeio
    }
    if (valorBuscado < elementoDoMeio.preco){
        return buscaBinaria(array, indiceDe, indiceDoMeio - 1, valorBuscado)
    }
    if(valorBuscado > elementoDoMeio.preco){
        return buscaBinaria(array, indiceDoMeio + 1, indiceAte, valorBuscado)
    }
}

console.log(buscaBinaria(listaLivro, 0, listaLivro.length-1, 35))
console.log(buscaBinaria(listaLivro, 0, listaLivro.length-1, 60))