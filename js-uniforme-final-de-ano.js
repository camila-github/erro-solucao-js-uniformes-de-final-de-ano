//SOLUCAO 1
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


//SOLUCAO 2 - Resumido
listaUniforme = [];
totalItems = gets();
while ((totalItems--)) {
    if ((nome = gets())) {
        arrayAux = gets().split(' ');
        listaUniforme.push({ cor: arrayAux[0], tamanho: arrayAux[1], nome: nome });
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
listaUniforme.sort(ordenarLista).forEach(item => console.log(item.cor, item.tamanho, item.nome));