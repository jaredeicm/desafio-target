const faturamento = [
  { sigla: 'SP', valor: 67836.43 },
  { sigla: 'RJ', valor: 36678.66 },
  { sigla: 'MG', valor: 29229.88 },
  { sigla: 'ES', valor: 27165.48 },
  { sigla: 'Outros', valor: 19849.53 },
];
// Chama a função de soma para cada valor dentro do array
totalFat = faturamento.reduce(somarTotal, 0);

//Soma todos os valores do array
function somarTotal(soma, item) {
  return soma + item.valor;
}
// faz o cálculo de porcentagem e informa na tela para cada registro
let porcentagem;
faturamento.forEach(e => {
  porcentagem = (e.valor / totalFat) * 100;
  console.log(
    `O estado de ${
      e.sigla
    } obteve um faturamento referente a ${porcentagem.toFixed(
      2
    )}% do total da transportadora.`
  );
});
