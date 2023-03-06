let palavra = 'Mortadela canadense';
let palavraSeparada = palavra.split('');
let palavraInvertida = '';
let c = palavraSeparada.length;
for (let i = c - 1; i >= 0; i--) {
  palavraInvertida += palavraSeparada[i];
}
console.log(palavraInvertida);
