# desafiofinal-checkout
Arquivos e considerações pertinentes ao checkout e jornada do usuário na conversão de lead.

Para que a jornada de usuário fosse possível, realizamos os seguintes cadastros:
-	marca de produto;
-	categoria;
-	Estratégia de envio, com transportadora, doca e estoque;
-	produto;
-	SKU;
-	Inserimos imagem no SKU;
-	Inserimos preço no SKU;
-	Inserimos Estoque no SKU;
-	Forma de pagamento;

Uma vez que entendemos que a dinâmica do desafio proposto visa o entendimento e prática da captura e conversão de leads, achamos interessante cadastrar uma promoção regular acionada por cupom e aplicada na primeira compra, assim o lojista pode entrar em contato com o lead e oferecer um desconto em sua primeira compra. 

O arquivo checkout6-custom.css faz a estilização do layout do checkout legado da VTEX, procurando manter a identidade visual da ACCT. Para que a estilização também atuasse no cabeçalho e no rodapé, dois templates foram gerados, checkout-footer  
e checkout-header .

O arquivo checkout6-custom.js faz a verificação na finalização da compra, para que em caso do cliente ser um lead, ou seja, seu e-mail existir na API AWS , seu cadastro seja atualizado para cliente:true, constatando uma conversão de lead. Caso o cliente não exista na API AWS, um novo cadastro é realizado como cliente:true.
