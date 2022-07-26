const readline = require('readline-sync');

function logResultado(numEscolhido, numAleatorio) {
  if (numEscolhido !== numAleatorio)
    return console.log(
      `Opa, não foi dessa vez. O número sorteado era ${numAleatorio}`
    );

  return console.log('Parabéns, você acertou!');
}

function runGame() {
  const numAleatorio = parseInt(Math.random() * 10);

  const numEscolhido = readline.questionInt('Escolha um número entre 0-10 ');

  logResultado(numEscolhido, numAleatorio);

  const jogarNovamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (jogarNovamente !== 's') return console.log('OK, até a próxima!');

  runGame();
}

runGame();