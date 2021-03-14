//SOLUCAO 1
let listaDeUniforme = [];
let quantidadeDeUniformes = gets();
while (quantidadeDeUniformes--) {  
  let nome = gets();
  if(nome){
    let [cor, tamanho] = gets().split(" ")
    listaDeUniforme.push({corUniforme: cor, tamanhoUniforme: tamanho, nomeEstudante: nome});
  }
}

function ordenarListaDeUniformes(a, b) {
    if (a.corUniforme === b.corUniforme) {
        if (a.tamanhoUniforme === b.tamanhoUniforme) {
            return a.nomeEstudante < b.nomeEstudante ? -1 : a.nomeEstudante > b.nomeEstudante ? 1 : 0;
        }
        return a.tamanhoUniforme > b.tamanhoUniforme ? -1 : a.tamanhoUniforme < b.tamanhoUniforme ? 1 : 0;
    }
    return a.corUniforme < b.corUniforme ? -1 : a.corUniforme > b.corUniforme ? 1 : 0;
}

listaDeUniforme.sort(ordenarListaDeUniformes).forEach(item => console.log(item.corUniforme, item.tamanhoUniforme, item.nomeEstudante));


//SOLUCAO 2
var listaUniforme = [];
let totalItems = gets();
for (let i = 0; i < totalItems; i++) {
    let leitura = gets();
    if (leitura != 0 || leitura != null) {
        let nome = leitura;
        let arrayAux = gets().split(' ');
        listaUniforme.push({ cor: arrayAux[0], tamanho: arrayAux[1], nome: nome })
    }
}

function ordenarLista(a, b) {
    if (a.cor === b.cor) {
        if (a.tamanho === b.tamanho) {
            return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
        }
        return a.tamanho > b.tamanho ? -1 : a.tamanho < b.tamanho ? 1 : 0;
    }
    return a.cor < b.cor ? -1 : a.cor > b.cor ? 1 : 0;
}

listaUniforme.sort(ordenarLista);
listaUniforme.forEach(item => console.log(item.cor, item.tamanho, item.nome));