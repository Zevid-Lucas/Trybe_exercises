let salarioBruto = 5645.4;
let salarioLiquido;
let taxaINSS;
let taxaIR;

if (salarioBruto <= 1556.94) {
  taxaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  taxaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  taxaINSS = salarioBruto * 0.11;
} else {
  taxaINSS = 570.88;
}

salarioBruto -= taxaINSS;

if (salarioBruto <= 1903.98) {
  taxaIR = 0;
} else if (salarioBruto <= 2826.65) {
  taxaIR = salarioBruto * 0.075 - 142.8;
} else if (salarioBruto <= 3751.05) {
  taxaIR = salarioBruto * 0.15 - 354.8;
} else if (salarioBruto <= 4664.68) {
  taxaIR = salarioBruto * 0.22 - 636.13;
} else {
  taxaIR = salarioBruto * 0.275 - 869.36;
}

salarioLiquido = salarioBruto - taxaIR;
console.log(salarioLiquido);
