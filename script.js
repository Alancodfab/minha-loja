// Preços dos produtos (iguais aos da página)
var precoArrozBranco = 6.5;
var precoArrozIntegral = 8.0;
var precoFeijaoBranco = 9.0;
var precoFeijaoPreto = 7.5;
var precoLeiteDesnatado = 5.5;
var precoLeiteNormal = 5.0;

function simularCompra() {
  // 1. Perguntar a quantidade de cada produto e converter para número
  var qtdArrozBranco = Number(prompt("Quantos Arroz Branco (R$ 6,50)? Digite 0 para não comprar."));
  var qtdArrozIntegral = Number(prompt("Quantos Arroz Integral (R$ 8,00)? Digite 0 para não comprar."));
  var qtdFeijaoBranco = Number(prompt("Quantos Feijão Branco (R$ 9,00)? Digite 0 para não comprar."));
  var qtdFeijaoPreto = Number(prompt("Quantos Feijão Preto (R$ 7,50)? Digite 0 para não comprar."));
  var qtdLeiteDesnatado = Number(prompt("Quantos Leite Desnatado (R$ 5,50)? Digite 0 para não comprar."));
  var qtdLeiteNormal = Number(prompt("Quantos Leite Normal (R$ 5,00)? Digite 0 para não comprar."));

  // 2. Calcular o valor de cada produto (preço x quantidade)
  var valorArrozBranco = precoArrozBranco * qtdArrozBranco;
  var valorArrozIntegral = precoArrozIntegral * qtdArrozIntegral;
  var valorFeijaoBranco = precoFeijaoBranco * qtdFeijaoBranco;
  var valorFeijaoPreto = precoFeijaoPreto * qtdFeijaoPreto;
  var valorLeiteDesnatado = precoLeiteDesnatado * qtdLeiteDesnatado;
  var valorLeiteNormal = precoLeiteNormal * qtdLeiteNormal;

  // 3. Calcular o total
  var total = valorArrozBranco + valorArrozIntegral + valorFeijaoBranco +
              valorFeijaoPreto + valorLeiteDesnatado + valorLeiteNormal;

  // 4. Se o total for 0 ou inválido, nenhum produto foi escolhido
  if (isNaN(total) || total <= 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  // 5. Desconto de 10% para compras a partir de R$ 100,00
  var mensagemDesconto = "Sem desconto (compras a partir de R$ 100,00 ganham 10%).";
  if (total >= 100) {
    var desconto = total * 0.1;
    total = total - desconto;
    mensagemDesconto = "Parabéns! Voçê ganhou um desconto de 10%: R$ " + desconto.toFixed(2);
  }

  // 6. Mostrar o resultado
  alert(
    "RESUMO DA COMPRA\n\n" +
    "Arroz Branco: " + qtdArrozBranco + " = R$ " + valorArrozBranco.toFixed(2) + "\n" +
    "Arroz Integral: " + qtdArrozIntegral + " = R$ " + valorArrozIntegral.toFixed(2) + "\n" +
    "Feijão Branco: " + qtdFeijaoBranco + " = R$ " + valorFeijaoBranco.toFixed(2) + "\n" +
    "Feijão Preto: " + qtdFeijaoPreto + " = R$ " + valorFeijaoPreto.toFixed(2) + "\n" +
    "Leite Desnatado: " + qtdLeiteDesnatado + " = R$ " + valorLeiteDesnatado.toFixed(2) + "\n" +
    "Leite Normal: " + qtdLeiteNormal + " = R$ " + valorLeiteNormal.toFixed(2) + "\n\n" +
    mensagemDesconto + "\n" +
    "TOTAL A PAGAR: R$ " + total.toFixed(2)
  );
}
