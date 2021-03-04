// NÃO PRECISA DO .ready, SE NÃO OS COMANDOS PRA ESCONDER OS PASSOS 2, 3 E 4 SÓ
// VÃO EXECUTAR QUANDO O JAVASCRIPT INTEIRO CARREGAR, SE A INTERNET TIVER LENTA,
// O CLIENTE VAI PODER ENXERGAR TODOS OS PASSOS
//$(document).ready(function(){

var cpf;


$(".passo-um").hide();
$(".passo-tres").hide();
$(".passo-quatro").hide();
$(".barra-conversao").show();
$("#acessar-logtelplay").hide();
$("#cadastrar-logtelplay").hide();
var cliente; /* Novo cliente / Cliente com contrato cancelado */
var passos = 1; /* Controlador de onde o cliente está */

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
              internet = true;
            }
            else{
              internet = false;
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
        if(internet) {
          $("#buscaCPF #response").html("Você já tem contrato ativo conosco. Já tem direito logtel play.");
          $("#acessar-logtelplay").show();
          $("#cadastrar-logtelplay").hide();
        }
        else {
          $("#buscaCPF #response").html("Identificamos que você tem um contrato cancelado conosco. Deseja continuar com o contrato de serviço avulso da Logtel Play?");
          $("#acessar-logtelplay").hide();
          $("#cadastrar-logtelplay").show();
        }
      } catch(e) {
        $("#buscaCPF #response").html("Tudo certo. Deseja continuar com o contrato de serviço avulso da Logtel Play?");
        $("#acessar-logtelplay").hide();
        $("#cadastrar-logtelplay").show();
        // MUDAR A COR DO IDENTIFICADOR DO PASSO EM QUE O CLIENTE ESTÁ PARA O NÚMERO 2
        // E REMOVER A COR DO PASSO 1
        $("#identificador-passo2").addClass("identificador-passos-ativo");
        $("#texto-passo2").css("color", "#7c06c2");
        $("#identificador-passo1").removeClass("identificador-passos-ativo");
        $("#texto-passo1").css("color", "#c8cacb");
        // HABILITAR OS PASSOS 1 E 2 PARA SEREM CLICÁVEIS, DANDO A POSSIBILIDADE DO CLIENTE
        // VOLTAR E AVANÇAR NOS PASSOS AOS QUAIS ELE JÁ TENHA PASSADO
        $("#identificador-passo1").css("cursor", "pointer");
        $("#identificador-passo2").css("cursor", "pointer");
        $("#identificador-passo1").on("click", function(e) {
          // ALTERAR AS CORES E MOSTRAR O PASSO 1 NOVAMENTE, OCULTANDO O 2
          $("#identificador-passo1").addClass("identificador-passos-ativo");
          $("#texto-passo1").css("color", "#7c06c2");
          $("#identificador-passo2").removeClass("identificador-passos-ativo");
          $("#texto-passo2").css("color", "#c8cacb");
          $(".passo-um").animate({ width: "show", 'left': 0 }, "slow");
          $(".passo-dois").hide();
        });
        $("#identificador-passo2").on("click", function(e) {
          // ALTERAR AS CORES E MOSTRAR O PASSO 2 NOVAMENTE, OCULTANDO O 1
          $("#identificador-passo2").addClass("identificador-passos-ativo");
          $("#texto-passo2").css("color", "#7c06c2");
          $("#identificador-passo1").removeClass("identificador-passos-ativo");
          $("#texto-passo1").css("color", "#c8cacb");
          $(".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
          $(".passo-um").hide();
        });
      }
    }
  });
});

$("#cadastrar-logtelplay").click(function(){
  $("#buscaCPF").modal('hide');
  $(".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
  $(".passo-um").hide();
  $(".passo-tres").hide();
  $(".passo-quatro").hide();
});
 
/* 
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
 */
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
  
    var valorteste = 0.00;
    $("#total").html(valorteste);
  


$("#mumo").on("click", function(e){
  var $this = $(this);
  var valor = $("#total").html() || 0.00;
  if($this.attr("data-ativo") == "0") {
    $this.attr("data-ativo", "1");
    $("#total").html(parseFloat(valor) + parseFloat($this.data('valor')));
    $("#total").html(n.toPrecision(4));
    $(".music").hide();
  } else {
    $this.attr("data-ativo", "0");
    $("#total").html(parseFloat(valor) - parseFloat($this.data('valor')));
    $("#total").html(n.toPrecision(4));
    $(".music").show();
  }
});

$("#qualifica").on("click", function(e){
  var $this = $(this);
  var valor = $("#total").html() || 0.00;
  if($this.attr("data-ativo") == "0") {
    $this.attr("data-ativo", "1");
    var n = parseFloat(valor) + parseFloat($this.data('valor'));
    $("#total").html(n.toPrecision(4));
  } else {
    $this.attr("data-ativo", "0");
    var n = parseFloat(valor) - parseFloat($this.data('valor'));
    $("#total").html(n.toPrecision(4));
  }
});

$("#watch").on("click", function(e){
  var $this = $(this);
  var valor = $("#total").html() || 0.00;
  if($this.attr("data-ativo") == "0") {
    $this.attr("data-ativo", "1");
    var n = parseFloat(valor) + parseFloat($this.data('valor'));
    $("#total").html(n.toPrecision(4));
  } else {
    $this.attr("data-ativo", "0");
    var n = parseFloat(valor) - parseFloat($this.data('valor'));
    $("#total").html(n.toPrecision(4));
  }
});


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

// MUDAR A COR DO IDENTIFICADOR DO PASSO EM QUE O CLIENTE ESTÁ PARA O NÚMERO 1
$("#identificador-passo1").addClass("identificador-passos-ativo");
$("#texto-passo1").css("color", "#7c06c2");