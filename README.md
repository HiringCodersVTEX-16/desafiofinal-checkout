<div align="center">
  <h1> Desafio Final - Checkout </h1>
	</br><p>Projeto realizado no desafio final do <a href="https://www.hiringcoders.com.br/">Hiring Coders 2021</a> realizado pelo grupo 16.</br>
	<p> <strong> Arquivos e considerações pertinentes ao checkout e jornada do usuário na conversão de lead.</strong></p>
</div>

## 📌 Descrição do Checkout
- O arquivo checkout6-custom.css faz a estilização do layout do checkout legado da VTEX, procurando manter a identidade visual da ACCT. 
- Para que a estilização também atuasse no cabeçalho e no rodapé, dois templates foram gerados, checkout-footer e checkout-header.
- O arquivo checkout6-custom.js faz a verificação na finalização da compra, para que em caso do cliente ser um lead, ou seja, seu e-mail existir na API AWS, seu cadastro seja atualizado para cliente:true, constatando uma conversão de lead. Caso o cliente não exista na API AWS, um novo cadastro é realizado como cliente:true.

```
# Arquivo checkout6-custom.js
{
  "nome": "Eddie Rock",
  "id": "16367-49061",
  "email":"eddie.rock@gmail.com",
  "cliente": true, 
  "telefone": "(31) 98887-6543"
}
```

## ⚙️ Funcionalidades
Para que a jornada de usuário fosse possível, realizamos os seguintes cadastros:
-	Marca de produto;
-	Categoria;
-	Estratégia de envio, com transportadora, doca e estoque;
-	Produto;
-	SKU;
-	Inserimos imagem no SKU;
-	Inserimos preço no SKU;
-	Inserimos Estoque no SKU;
-	Forma de pagamento;

## 🎁 Bônus 
Uma vez que entendemos que a dinâmica do desafio proposto visa o entendimento e prática da captura e conversão de leads, achamos interessante cadastrar uma promoção regular acionada por cupom e aplicada na primeira compra, assim o lojista pode entrar em contato com o lead e oferecer um desconto em sua primeira compra. 

<br>

Desenvolvido com ❤︎ pelo Grupo 16 ACCT.
