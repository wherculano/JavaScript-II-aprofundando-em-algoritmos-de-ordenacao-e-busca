const listaLivros = require("./array")

function encontraMenores(pivo, array){
    /** Encontra a quantidade de valores abaixo do valor do pivo
     * e adiciona o pivo no indice desta quantidade, ordenando-o */
    let qtdMenores = 0
    for(let atual=0; atual < array.length; atual++){
        let produtoAtual = array[atual]
        if(produtoAtual.preco < pivo.preco){
            qtdMenores++
        }
    }
    trocaLugar(array, array.indexOf(pivo), qtdMenores)
    return array
}

function trocaLugar(array, de, para){
    /** Efetua a troca de posicoes entre dois valores do array */
    let elemento1 = array[de]
    let elemento2 = array[para]

    array[para] = elemento1
    array[de] = elemento2
 
}

function divideNoPivo(array){
    let pivo = array[Math.floor(array.length / 2)]
    encontraMenores(pivo, array)
    let valoresMenores = 0
    for(let indiceAnalisado=0; indiceAnalisado < array.length; indiceAnalisado++){
        let itemAtual = array[indiceAnalisado]
        if(itemAtual.preco < pivo.preco && itemAtual != pivo){
            trocaLugar(array, indiceAnalisado,valoresMenores)
            valoresMenores++
        }
    }
    
    return array
}
// console.log(divideNoPivo(listaLivros))
module.exports = trocaLugar
