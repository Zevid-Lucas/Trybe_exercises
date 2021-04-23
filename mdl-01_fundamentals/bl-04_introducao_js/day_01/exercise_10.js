let custoProdutoInicial = 600;
let vendaProduto = 1000;
let impostoProduto = (custoProdutoInicial * 20) / 100;
let custoProdutoFinal = custoProdutoInicial + impostoProduto;
let lucroProduto = vendaProduto - custoProdutoFinal;

if (custoProdutoInicial <= 0 || vendaProduto <= 0) {
  console.log("Erro!! Digite um valor válido");
} else {
  let lucroVendaMil = lucroProduto * 1000;
  console.log(lucroVendaMil);
}
