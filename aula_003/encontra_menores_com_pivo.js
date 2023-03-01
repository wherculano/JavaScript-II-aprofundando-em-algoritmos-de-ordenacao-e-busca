const listaLivros = require("./array")

function encontraMenores(pivo, array){
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
    let elemento1 = array[de]
    let elemento2 = array[para]

    array[para] = elemento1
    array[de] = elemento2
 
}

console.log(encontraMenores(listaLivros[2], listaLivros))