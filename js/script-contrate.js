// NÃO PRECISA DO .ready, SE NÃO OS COMANDOS PRA ESCONDER OS PASSOS 2, 3 E 4 SÓ
// VÃO EXECUTAR QUANDO O JAVASCRIPT INTEIRO CARREGAR, SE A INTERNET TIVER LENTA,
// O CLIENTE VAI PODER ENXERGAR TODOS OS PASSOS
//$(document).ready(function(){

var cpf;
$( ".passo-dois").hide();
$( ".passo-tres").hide();
$( ".passo-quatro").hide();
$( ".barra-conversao").hide();
$( "#acessar-logtelplay").hide();
$( "#cadastrar-logtelplay").hide();
var cliente; /* Novo cliente / Cliente com contrato cancelado */

$( "#passo-um" ).click(function() {
  cpf = busca = $("#cpf").val().toUpperCase().replace(/[^a-zA-Z0-9 çÇáÁéÉíÍóÓúÚãÃõÕ]/g, "");
  var data = { busca:cpf, tipo:"todos" }
  $.ajax({
    method: "POST",
    url: "../api/consultar_cliente",
    data: data,
    dataType: "json",
    success: function (response) {
      var internet = false, mumo = false, cdn = false, tv = false, qualifica = false;
      for(var i = 0; i < response.length; i++) {
        try {
          // VERIFICAR INTERNET
          if(response[i].servico_internet) {
            var servico_internet = JSON.parse(response[i].servico_internet);
            if(servico_internet[0].status == 1 || servico_internet[0].status == 4) {
              console.log(servico_internet[0].status);
              internet = true;
            }
          }
          
          if(response[i].servico_multimida) {
            var servico_multimidia = JSON.parse(response[i].servico_multimida);
            // VERIFICAR QUALIFICA
            if(servico_multimidia[0].email != null && servico_multimidia[0].descricao == "Qualifica treinamentos") {
              qualifica = true;
            }
            // VERIFICAR MUMO
            if(servico_multimidia[0].email != null && servico_multimidia[0].descricao == "Mumo Logtel Music") {
              mumo = true;
            }
          }

          // VERIFICAR CDNTV
          if(response[i].servico_tv) {
            var servico_cdntv = JSON.parse(response[i].servico_tv);
            if(servico_cdntv[0].login != null && servico_cdntv[0].descricao == "CDNTV - Total") {
              cdn = true;
            }
          }

          // VERIFICAR WATCHTV
          if(response[i].servico_tv) {
            var servico_tv = JSON.parse(response[i].servico_tv);
            if(servico_tv[0].smartcard != null && servico_tv[0].descricao == "WatchTV") {
              tv = true;
            }
          }
        } catch (e) {}
      }

      try {
        if(response[0].nome) {
          $("#buscaCPF #response").html("Você já tem contrato ativo conosco. Já tem direito logtel play.");
          $( "#acessar-logtelplay").show();
          $( "#cadastrar-logtelplay").hide();
        }
        else {
          $("#buscaCPF #response").html("Tudo certo. Deseja continuar com o contrato de serviço avulso da Logtel Play?");
          $( "#acessar-logtelplay").hide();
          $( "#cadastrar-logtelplay").show();
        }
      } catch(e) {
        $("#buscaCPF #response").html("Já identificamos seu cadastro no sistema, com serviço de internet cancelado. Deseja prosseguir com o contrato da Logtel Play? ");
        $( "#acessar-logtelplay").hide();
        $( "#cadastrar-logtelplay").show();
      }
    }
  });
});

$("#cadastrar-logtelplay").click(function(){
  $( ".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
  $( ".passo-um").hide();
  $( ".passo-tres").hide();
  $( ".passo-quatro").hide();
  $( ".barra-conversao").hide();
});


var cadastroVenda = { 
  
  'cpf' : cpf,
  'nome': $('#nome').val(),
  'email': $('#email').val(),
  'telefone': $('#telefone').val(),
  'cep':$('#cep').val(),
  'bairro': $('#bairro').val(),
  'cidade': $('#cidade').val(),
  'uf': $('#uf').val(),
  'logradouro': $('#logradouro').val(),
  'numero': $('#numero').val(),
  'servico': $('#servico').val()
 };

$("#cadastrar_venda");
console.log(cadastroVenda);

/* 
$("#cadastrar-venda").click(function() {
  $.ajax({
    method: "POST",
    url: "../api/cadastrar_vendas",
    data: data,
    dataType: "json",
    success: function (response) {
      var internet = false, mumo = false, cdn = false, tv = false, qualifica = false;
     
    }
  });
});

 */
// NÃO PRECISA DESSE CÓDIGO, VISTO QUE ACIMA JÁ TEM O CÓDIGO QUE FAZ O MESMO
/* $( "#passo-um" ).click(function() {
    $( ".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
    $( ".passo-um").hide();
    $( ".passo-tres").hide();
    $( ".passo-quatro").hide();
    $( ".barra-conversao").hide();
}); */

$( "#passo-dois" ).click(function() {
    $( ".passo-tres").animate({ width: "show", 'left': 0 }, "slow");
    $( ".passo-um").hide();
    $( ".passo-dois").hide();
    $( ".passo-quatro").hide();
});

$( "#passo-tres" ).click(function() {
    $( ".passo-quatro").animate({ width: "show", 'left': 0 }, "slow");
    $( ".passo-um").hide();
    $( ".passo-tres").hide();
    $( ".passo-dois").hide();
    $( ".barra-conversao").hide();
});

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


//});