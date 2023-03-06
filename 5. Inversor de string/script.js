let palavra = 'mortadela canadense';

//Separa a palavra em várias strings
let palavraSeparada = palavra.split('');
let palavraInvertida = '';

//pega o tamanho da palavra
let c = palavraSeparada.length;
for (let i = c - 1; i >= 0; i--) {
  palavraInvertida += palavraSeparada[i];
}
console.log(palavraInvertida);
