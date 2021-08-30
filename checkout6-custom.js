
var compra_cod = ""

function searchLeadbyEmail(lead) {
	$.getJSON(`https://try.readme.io/https://9omhprzx4i.execute-api.sa-east-1.amazonaws.com/leads/${ lead }`, function(dataLead) {
		$.ajax().done(function(response) {
        if(!Object.keys(dataLead).length == false){
        compra_cod = (dataLead.Item.id)
        }else{
        compra_cod = (Math.floor(Math.random() * 99999)) + "-" + (Math.floor(Math.random() * 99999));
        }
         console.log(compra_cod);
		});
	});
}


window.addEventListener("hashchange", () => {
    isPayment = window.location.hash === '#/payment';


    if (isPayment) {
	
    searchLeadbyEmail($("#client-email").val());


        var paymentSubmitWrap = document.querySelector('.payment-submit-wrap');
        paymentSubmitWrap.addEventListener('click', () => {
            let compra_email = $("#client-email").val()
            let compra_name = $("#client-first-name").val() + " " + $("#client-last-name").val()
            let compra_phone = $("#client-phone").val()

            $.ajax({
                type: 'POST',
                url: "https://try.readme.io/https://9omhprzx4i.execute-api.sa-east-1.amazonaws.com/leads",
                contentType: 'application/json',
                data: JSON.stringify({
                    id: compra_cod,
                    email: compra_email,
                    nome: compra_name,
                    telefone: compra_phone,
                    cliente: true
                })
            }).done(function(data) {
                console.log(data);
            });
        });
    }
});


      
      
if(!Object.keys(response.data).length){
     console.log("sem equivalencia para "+lead+"na AWS");
}else{
  if ((data.Item.id) != undefined){
              compra_cod = data.Item.id
  }
}



