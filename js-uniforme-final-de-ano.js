//SOLUÇÃO 1
var listaUniforme = [];
//Leitura da primeira linha, referente a quantidade das proximas entrada de dados.
let totalItems = gets();
for (let i = 0; i < totalItems; i++) {
    // leitura da segunda linha em diante
    let leitura = gets();
    //verificar se a leitura da linha é 0 ou nulo
    if (leitura != 0 || leitura != null) {
        // leitura referente o nome do aluno
        let nome = leitura;
        //leitura referente a cor e tamanho do uniforme
        let arrayAux = gets().split(' ');
        //armazena lista no array de objeto: cor, tamanho e nome
        listaUniforme.push({ cor: arrayAux[0], tamanho: arrayAux[1], nome: nome })
    }
}
//ordena a listagem 
function ordenarLista(a, b) {
    if (a.cor === b.cor) {
        if (a.tamanho === b.tamanho) {
            return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
        }
        return a.tamanho > b.tamanho ? -1 : a.tamanho < b.tamanho ? 1 : 0;
    }
    return a.cor < b.cor ? -1 : a.cor > b.cor ? 1 : 0;
}
//ordena e imprime a lista na ordem correta
listaUniforme.sort(ordenarLista);
listaUniforme.forEach(item => console.log(item.cor, item.tamanho, item.nome));


//SOLUÇÃO 2 - Resumido
listaUniforme = [];
//Leitura da primeira linha, referente a quantidade das proximas entrada de dados.
totalItems = gets();
while ((totalItems--)) {
    // O if() faz leitura da segunda linha referente o nome do aluno.Verifica se o valor é nulo
    if ((nome = gets())) {
        //leitura referente a cor e tamanho do uniforme
        arrayAux = gets().split(' ');
        //armazena lista no array de objeto: cor, tamanho e nome
        listaUniforme.push({ cor: arrayAux[0], tamanho: arrayAux[1], nome: nome });
    }
}
//ordena a listagem 
function ordenarLista(a, b) {
    if (a.cor === b.cor) {
        if (a.tamanho === b.tamanho) {
            return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
        }
        return a.tamanho > b.tamanho ? -1 : a.tamanho < b.tamanho ? 1 : 0;
    }
    return a.cor < b.cor ? -1 : a.cor > b.cor ? 1 : 0;
}
//ordena e imprime a lista na ordem correta
listaUniforme.sort(ordenarLista).forEach(item => console.log(item.cor, item.tamanho, item.nome));