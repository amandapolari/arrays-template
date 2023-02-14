// ------ PRÁTICA GUIADA ------
// Prática Guiada I
const minhasStrings = ['Amanda', 'Luan', 'Juju'];
const meusNumeros = [23,6,20];
const minhaListaDiversa = ['Amor', 1, true];
const minhaListaUnitaria = [2018];
const minhaListaVazia = [];

// Prática Guiada II
// a)
const tamanhoMinhasStrings = minhasStrings.length
// console.log(`Tamanho do array minhasStrings ${tamanhoMinhasStrings}`)

const quartoElementoMinhasSctrings = minhasStrings[3];
// console.log(`O quarto elemento da minhasStrings é ${quartoElementoMinhasSctrings};`)

// b)
const temJuju = minhaListaDiversa.includes('Amor');
// console.log(`minhaListaDiversa inclui 'Juju'? ${temJuju}`);

const temUm = minhaListaDiversa.includes(1);
// console.log(`minhaListaDiversa inclui 1? ${temUm}`);

const temTrue = minhaListaDiversa.includes(true);
// console.log(`minhaListaDiversa inclui 1? ${temTrue}`);

// c)
const valorItemUnico = minhaListaUnitaria[0];
// console.log(`O valor da minhaListaUnitaria é ${valorItemUnico}`)

const tamanhoMinhaLista = minhaListaUnitaria.length; 
// console.log(`O tamanho da minhaListaUnitaria é igual a ${tamanhoMinhaLista}`)

// Prática Guiada III
// a)
const minhasStringsCopiaErrada = minhasStrings

// b) 
minhasStringsCopiaErrada.push('livros');

// c)
// console.log(`Array original: ${minhasStrings}`)
// console.log(`Array cópia ERRADA: ${minhasStringsCopiaErrada}`)

// d) 
const minhasStringsCopiaCERTA = minhasStrings.slice()
// console.log(`Cópia CERTA ${minhasStringsCopiaCERTA}`)

minhasStringsCopiaCERTA.splice(2,2);

//console.log(`Array original: ${minhasStrings}`)

// console.log(`Array após slice: ${minhasStringsCopiaCERTA}`)

// Fixação:
/*
Crie um array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

Depois disso, crie uma cópia deste array utilizando o método slice().

No array copiado: 
Remova o último item 
Adicione o número 6 no fim do array
Remova o número que está no índice 2 do array
Por fim, imprima os dois arrays
*/

// 1)
const minhaListaAleatoria = [2018,31,27,14];

// 2)
const copiaMinhaListaAleatoria = minhaListaAleatoria.slice();

// 3)
// a)
copiaMinhaListaAleatoria.pop();
// console.log(copiaMinhaListaAleatoria);

// b) 
copiaMinhaListaAleatoria.push(6);
// console.log(copiaMinhaListaAleatoria);

// c)
copiaMinhaListaAleatoria.splice(2,1);
// console.log(copiaMinhaListaAleatoria);

// d)
console.log(
`Array original: `, minhaListaAleatoria,
`Array manipulada: `, copiaMinhaListaAleatoria
)

