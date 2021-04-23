let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let posicao = 0;

for (let cont1 = 1; cont1 < numbers.length; cont1 += 1) {
  for (let cont2 = 0; cont2 < cont1; cont2 += 1) {
    if (numbers[cont1] < numbers[cont2]) {
      posicao = numbers[cont1];
      numbers[cont1] = numbers[cont2];
      numbers[cont2] = posicao;
    }
  }
}

console.log(numbers);
