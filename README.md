## Treinamento Digital Innovation One - Exercicio - Uniformes de final de ano

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Ordenação e Filtro em JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano. Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho. Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.


#### Entrada:

Cada caso de teste inicia com um valor N, (1 ≤ N ≤ 60) inteiro e positivo, que indica a quantidade de uniformes a serem feitas para aquela turma. As próximas N* 2 linhas contém informações de cada um dos uniformes (serão duas linhas de informação para cada uniforme). A primeira linha irá conter o nome do estudante e a segunda linha irá conter a cor do uniforme ("branco" ou "vermelho") seguido por um espaço e pelo tamanho do uniforme "P" "M" ou "G". A entrada termina quando o valor de N for igual a zero (0) e esta valor não deverá ser processado.


#### Saída:

Para cada caso de entrada deverão ser impressas as informações ordenadas pela cor em ordem ascendente, seguido pelos tamanhos em ordem descendente e por último por ordem ascendente de nome, conforme o exemplo abaixo.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
9 | branco P Cezar Torres Mo
Maria Jose | branco P Maria Jose
branco P | branco M JuJu Mentina
Mangojata Mancuda | branco G Adabi Finho
vermelho P | branco G Severina Rigudinha
Cezar Torres Mo | vermelho P Amaro Dinha
branco P | vermelho P Baka Lhau
Baka Lhau | vermelho P Carlos Chade Losna
vermelho P | vermelho P Mangojata Mancuda
JuJu Mentina|
branco M|
Amaro Dinha|
vermelho P|
Adabi Finho|
branco G|
Severina Rigudinha|
branco G|
Carlos Chade Losna|
vermelho P|
0|


```javascript
//SOLUCAO 1
var listaUniforme = [];
//Leitura da primeira linha, referente a quantidade das proximas entrada de dados*/
let totalItems = gets();
for (let i = 0; i < totalItems; i++) {
    /*leitura da segunda linha em diante*/
    let leitura = gets();
    /*verificar se a leitura da linha é 0 ou nulo*/
    if (leitura != 0 || leitura != null) {
        /*leitura referente o nome do aluno*/
        let nome = leitura;
        /*leitura referente a cor e tamanho do uniforme*/
        let arrayAux = gets().split(' ');
        /*armazena lista no array de objeto: cor, tamanho e nome*/
        listaUniforme.push({ cor: arrayAux[0], tamanho: arrayAux[1], nome: nome })
    }
}
/*ordena a listagem*/ 
function ordenarLista(a, b) {
    if (a.cor === b.cor) {
        if (a.tamanho === b.tamanho) {
            return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
        }
        return a.tamanho > b.tamanho ? -1 : a.tamanho < b.tamanho ? 1 : 0;
    }
    return a.cor < b.cor ? -1 : a.cor > b.cor ? 1 : 0;
}
/*ordena e imprime a lista na ordem correta*/
listaUniforme.sort(ordenarLista);
listaUniforme.forEach(item => console.log(item.cor, item.tamanho, item.nome));


//SOLUCAO 2 - Resumido
listaUniforme = [];
/*Leitura da primeira linha, referente a quantidade das proximas entrada de dados*/
totalItems = gets();
while ((totalItems--)) {
    /*O if() faz leitura da segunda linha referente o nome do aluno.Verifica se o valor é nulo*/
    if ((nome = gets())) {
        /*leitura referente a cor e tamanho do uniforme*/
        arrayAux = gets().split(' ');
        /*armazena lista no array de objeto: cor, tamanho e nome*/
        listaUniforme.push({ cor: arrayAux[0], tamanho: arrayAux[1], nome: nome });
    }
}
/*ordena a listagem*/ 
function ordenarLista(a, b) {
    if (a.cor === b.cor) {
        if (a.tamanho === b.tamanho) {
            return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
        }
        return a.tamanho > b.tamanho ? -1 : a.tamanho < b.tamanho ? 1 : 0;
    }
    return a.cor < b.cor ? -1 : a.cor > b.cor ? 1 : 0;
}
/*ordena e imprime a lista na ordem correta*/
listaUniforme.sort(ordenarLista).forEach(item => console.log(item.cor, item.tamanho, item.nome));
```