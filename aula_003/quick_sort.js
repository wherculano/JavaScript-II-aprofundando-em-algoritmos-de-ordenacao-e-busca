const listaLivro = require("./array")
const trocaLugar = require("./encontra_menores_com_pivo")


function quickSort(array, esquerda, direita){
    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita)
         if (esquerda < indiceAtual - 1){
            quickSort(array, esquerda, indiceAtual-1)
         }
         if (indiceAtual < direita){
            quickSort(array, indiceAtual, direita)
         }

    }
    return array
}

function particiona(array, esquerda, direita){
    let itemDoMeio = array[Math.floor((esquerda + direita)/2)]
    let indiceAtualEsquerda = esquerda
    let indiceAtualDireita = direita

    console.log("esquerda, direita", esquerda, direita)
    console.log(array)
    
    while (indiceAtualEsquerda <= indiceAtualDireita){
        while (array[indiceAtualEsquerda].preco < itemDoMeio.preco){
            indiceAtualEsquerda++
        }
        while (array[indiceAtualDireita].preco > itemDoMeio.preco){
            indiceAtualDireita--
        }

        if (indiceAtualEsquerda <= indiceAtualDireita){
            trocaLugar(array, indiceAtualEsquerda, indiceAtualDireita)
            indiceAtualEsquerda++
            indiceAtualDireita--
        }
    }
    return indiceAtualEsquerda
}

console.log(quickSort(listaLivro, 0, listaLivro.length-1))