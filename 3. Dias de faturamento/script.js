const fat = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

let soma = 0;
let qtdDias = 0;

//ForEach para percorrer e obter a soma e quantidade de dias acima de 0
fat.forEach(e => {
  if (e.valor > 0) {
    soma += e.valor;
    qtdDias++;
  }
});

let media = soma / qtdDias;
let melhorDia = { dia: 0, valor: 0 };
let piorDia = { dia: 0, valor: soma };
let diasMedia = 0;

//Percorre o json e verifica o melhor dia, pior dia e se é superior a media
for (const i of fat) {
  if (i.valor > 0) {
    if (i.valor > melhorDia.valor) {
      melhorDia = i;
    }
    if (i.valor < piorDia.valor) {
      piorDia = i;
    }
    if (i.valor > media) {
      diasMedia++;
    }
  }
}

//Imprime os valores solicitados
console.log(
  `O pior valor de faturamento ${piorDia.valor} no dia ${piorDia.dia}`
);
console.log(
  `O melhor valor de faturamento ${melhorDia.valor} no dia ${melhorDia.dia}`
);
console.log(`A quantidade de dias que superaram a média foi: ${diasMedia}`);
