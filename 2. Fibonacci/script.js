let result = document.getElementById('result');
const object = document.getElementById('number');

//Executa a verificação do número conforme o usuário digite
object.addEventListener('keyup', verifyNumber);

//Solicita que o número seja maior que 1
function verifyNumber() {
  if (object.value > 1) {
    geraSequencia();
  } else {
    result.innerHTML = `A seqûencia sempre inicia com 0 e 1, Insira um número maior que 1`;
  }
}

function geraSequencia() {
  let firstNumber = 0;
  let nextNumber = 1;
  let sum = 0;
  number = object.value;
  let foundNumber = false;
  for (let i = 0; i < number; i++) {
    sum = firstNumber + nextNumber;
    firstNumber = nextNumber;
    nextNumber = sum;

    if (sum == number) {
      foundNumber = true;
    } else {
    }
  }
  if (foundNumber == true) {
    result.innerHTML = `Opa! O número ${number} pertence a sequência de Fibonacci`;
  } else {
    result.innerHTML = `Huuum , desculpe mas o número ${number} não foi encontrado e não pertence a sequência de Fibonacci`;
  }
}
