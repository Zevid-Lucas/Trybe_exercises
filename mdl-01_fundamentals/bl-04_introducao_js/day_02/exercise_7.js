let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = Infinity;

for (let i = 0; i < numbers.length; i += 1) {
  if (menorNumero > numbers[i]) {
    menorNumero = numbers[i];
  }
}

console.log(menorNumero);
