const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? (Em metros, usando .) ');

const imc = peso / (altura ^ 2);

if (imc < 18.5) return console.log(`Você está abaixo do peso. Seu IMC: ${imc.toFixed(2)}`);

if (imc >= 18.5 && imc < 24.9) {
  return console.log(`Seu peso está normal. IMC: ${imc.toFixed(2)}`);
}

if (imc >= 25 && imc < 29.9) return console.log(`Acima do peso. IMC: ${imc.toFixed(2)}`);

if (imc >= 30 && imc < 34.9) return console.log(`Obesidade grau 1. IMC: ${imc.toFixed(2)}`);

if (imc >= 35 && imc < 39) return console.log(`Obesidade grau 2 IMC: ${imc.toFixed(2)}`);

return console.log(`Obesidade grau 3 e 4 IMc: ${imc}`);