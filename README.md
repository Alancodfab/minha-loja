# Desafio 1 — Minha Loja: Simulador de Compras

- **Aluno:** Alan da Cruz dos Santos
- **Trilha:** Desenvolvimneto Mobile
- **Tecnologias:** HTML, CSS e JavaScript

## A loja

**Mercadinho Bom Preço** é uma loja com  itens básicos: arroz, feijão e leite. A página mostra os produtos, as instruções de uso e o botão **Simular compra**.

| Produto | Descrição | Preço |
|---|---|---|
| Arroz Branco | Pacote de 1 kg | R$ 6,50 |
| Arroz Integral | Pacote de 1 kg | R$ 8,00 |
| Feijão Branco | Pacote de 1 kg | R$ 9,00 |
| Feijão Preto | Pacote de 1 kg | R$ 7,50 |
| Leite Desnatado | Caixa de 1 litro | R$ 5,50 |
| Leite Normal | Caixa de 1 litro | R$ 5,00 |

**Desconto:** compras a partir de R$ 100,00 ganham 10% de desconto.

## Captura de tela

![Captura de tela da página](assets/captura-tela.png)

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador.
3. Clique em **Simular compra** e digite as quantidades.

## Arquivos

- `index.html`: estrutura da página
- `style.css`: cores e layout
- `script.js`: função `simularCompra()`
- `assets/`: captura de tela

## Como funciona a simulação

1. O botão chama `simularCompra()` pelo atributo `onclick`.
2. O `prompt()` pergunta a quantidade de cada produto e o `Number()` converte a resposta em número.
3. O código calcula `preço × quantidade` de cada produto e soma o total.
4. Se o total for 0 (ou a resposta não for um número), mostra "Nenhum produto foi selecionado."
5. Se o total for R$ 100,00 ou mais, aplica 10% de desconto.
6. O `alert()` mostra a quantidade e o valor de cada produto e o total a pagar.

## Testes realizados

| Teste | Quantidades (na ordem da tabela) | Resultado esperado |

| Um produto | 1, 0, 0, 0, 0, 0 | Total R$ 6,50 |
| Sem desconto | 2, 0, 1, 0, 0, 3 | Total R$ 37,00 |
| Com desconto | 3, 2, 1, 1, 2, 2 | Subtotal R$ 100,00, desconto R$ 10,00 total R$ 90,00 |
| Tudo zero | 0, 0, 0, 0, 0, 0 | "Nenhum produto foi selecionado." |
| Letra digitada | "abc" em algum produto | "Nenhum produto foi selecionado." |



## Dificuldade e aprendizado



**O que aprendi:** [escreva com suas palavras]

## Uso de IA

Usei o Claude  como apoio.

 sugeriu a estrutura dos arquivos 

