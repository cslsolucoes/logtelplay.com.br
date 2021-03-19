// NÃO PRECISA DO .ready, SE NÃO OS COMANDOS PRA ESCONDER OS PASSOS 2, 3 E 4 SÓ
// VÃO EXECUTAR QUANDO O JAVASCRIPT INTEIRO CARREGAR, SE A INTERNET TIVER LENTA,
// O CLIENTE VAI PODER ENXERGAR TODOS OS PASSOS
//$(document).ready(function(){

var cpf;
var n;
var nome, email, telefone;
var cep, bairro, cidade, uf, rua, numeroCasa;

$(".movie").hide();
$(".book").hide();
$(".music").hide();
$(".passo-dois").hide();
$(".passo-tres").hide();
$(".passo-quatro").hide();
$(".passo-cinco").hide();
$(".barra-conversao").show();
$("#acessar-logtelplay").hide();
$("#passo-um-cadastrar-logtelplay").hide();

barraProgresso();
var cliente; /* Novo cliente / Cliente com contrato cancelado */
var passos = 1; /* Controlador de onde o cliente está */

$( "#btn-passo-um" ).click(function() {
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
            } else{
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
          $("#modal-text #response").html("Você já tem contrato ativo conosco. Já tem direito logtel play.");
          $("#acessar-logtelplay").show();
          $("#passo-um-cadastrar-logtelplay").hide();
        } else {
          $("#modal-text #response").html("Identificamos que você tem um contrato cancelado conosco. Deseja continuar com o contrato de serviço avulso da Logtel Play?");
          $("#acessar-logtelplay").hide();
          $("#passo-um-cadastrar-logtelplay").show();
        }
      } catch(e) {
        $("#modal-text #response").html("Tudo certo. Deseja continuar com o contrato de serviço avulso da Logtel Play?");
        $("#acessar-logtelplay").hide();
        $("#passo-um-cadastrar-logtelplay").show();
      }
    }
  });
});

$("#passo-um-cadastrar-logtelplay").click(function(){
  $("#modal-text").modal('hide');
  $(".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
  $(".passo-um").hide();
  $(".passo-tres").hide();
  $(".passo-quatro").hide();
});
  
var valorteste = '0,00';
$(".total").html(valorteste);

$(".servico").on("click", function(e){
  var $this = $(this);
  var valor = $(".total").html();
  valor = valor.replace(',', '.');
  if($this.attr("data-ativo") == "0") {
    $this.attr("data-ativo", "1");
    var n = parseFloat(valor) + parseFloat($this.data('valor'));
    n = n.toFixed(2).toString();
    n = n.replace('.', ',');
    $(".total").html(n);
  } else {
    $this.attr("data-ativo", "0");
    var n = parseFloat(valor) - parseFloat($this.data('valor'));
    n = n.toFixed(2).toString();
    n = n.replace('.', ',');
    $(".total").html(n);
  }
  console.log(n);
  if(n  == "0,00"){
    $(".vazio").html("Você ainda não selecionou nenhum serviço");
    $("#btn-passo-dois").prop("disabled", true);
  } else {
    $(".vazio").html("Você escolheu os serviços abaixo:");
    $("#btn-passo-dois").prop("disabled", false);
  }
});


$(".card-watch").click(function() {
  $(".movie").toggle();
});$(".card-mumo").click(function() {
  $(".music").toggle();
});$(".card-qualifica").click(function() {
  $(".book").toggle();
});


$("#btn-passo-dois").click(function(){
  $("#modal-text").modal('hide');
  $(".passo-dois").hide();
  $(".passo-tres").animate({ width: "show", 'left': 0 }, "slow");
  $("#cpf-disabled").val(cpf);
});


function limpa_formulário_cep() {
  // Limpa valores do formulário de cep.
  $("#rua").val("");
  $("#bairro").val("");
  $("#cidade").val("");
  $("#uf").val("");
}

//Quando o campo cep perde o foco.
$('body').on('blur', '#cep', function() {

  //Nova variável "cep" somente com dígitos.
  var cep = $(this).val().replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {

          //Preenche os campos com "..." enquanto consulta webservice.
          $("#rua").val("...");
          $("#bairro").val("...");
          $("#cidade").val("...");
          $("#uf").val("...");

          //Consulta o webservice viacep.com.br/
          $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
            console.log(dados);
            if (!("erro" in dados)) {
                  //Atualiza os campos com os valores da consulta.
                  $("#rua").val(dados.logradouro).prop("disabled", false);
                  $("#numero-casa").prop("disabled", false);;
                  $("#bairro").val(dados.bairro);
                  $("#cidade").val(dados.localidade);
                  $("#uf").val(dados.uf);
                  
              } //end if.
              else {
                  //CEP pesquisado não foi encontrado.
                  limpa_formulário_cep();
                  console.log("CEP não encontrado.");
              }
          });
      } //end if.
      else {
          //cep é inválido.
          limpa_formulário_cep();
          console.log("Formato de CEP inválido.");
      }
  } //end if.
  else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
  }
});

$("#btn-passo-tres").click(function(){
  $(".passo-tres").hide();
  $(".passo-quatro").animate({ width: "show", 'left': 0 }, "slow");
});

$("#btn-passo-quatro").click(function(){
  $(".passo-quatro").hide();
  $(".passo-cinco").animate({ width: "show", 'left': 0 }, "slow");
  $(".total").html(n);
  
  nome = $("#nome").val();
  email = $("#email").val();
  telefone = $('#telefone').val();
  cep = $('#cep').val();
  bairro = $('#bairro').val();
  cidade = $('#cidade').val();
  uf = $('#uf').val();
  rua = $('#rua').val();
  numeroCara = $('#numero-casa').val();
  $(".nome").html(nome);
  $(".telefone").html(telefone);
  $(".email").html(email);
  $(".cep").html(cep);
  $(".bairro").html(bairro);
  $(".cidade").html(cidade);
  $(".uf").html(uf);
  $(".rua").html(rua);
  $(".numero-casa").html(numeroCasa);
});

$("#btn-passo-cinco").click(function(){
  $("#modal-text").modal('show');
  $("#modal-text #response").html("Seus dados foram enviados com sucesso<p> Em até 24 horas enviaremos seu boleto de pagamento para o e-mail cadastrado.</p>" + email);
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

function barraProgresso() {
  $("#passo-um-cadastrar-logtelplay").click(function(){
    $("#progressbar-um").addClass("last");
    $("#progressbar-dois").addClass("active");
  }); 
  $("#btn-passo-dois").click(function(){
    $("#progressbar-dois").addClass("last");
    $("#progressbar-tres").addClass("active");
  }); 
  $("#btn-passo-tres").click(function(){
    $("#progressbar-tres").addClass("last");
    $("#progressbar-quatro").addClass("active");
  }); 
  $("#btn-passo-quatro").click(function(){
    $("#progressbar-quatro").addClass("last");
    $("#progressbar-cinco").addClass("active ");
  }); 

  
  $("#progressbar-um").click(function(){
    $(".passo-um").animate({ width: "show", 'left': 0 }, "slow");
    $(".passo-dois").hide();
    $(".passo-tres").hide();
    $(".passo-quatro").hide();
    $(".passo-cinco").hide();
    $("#progressbar-um").addClass("last");
    $("#progressbar-dois").removeClass("last");
    $("#progressbar-tres").removeClass("last");
    $("#progressbar-quatro").removeClass("last");
    $("#progressbar-cinco").removeClass("last");
  }); 

  $("#progressbar-dois").click(function(){
    $(".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
    $(".passo-um").hide();
    $(".passo-tres").hide();
    $(".passo-quatro").hide();
    $(".passo-cinco").hide();
    $("#progressbar-um").addClass("last");
    $("#progressbar-dois").addClass("last");
    $("#progressbar-tres").removeClass("last");
    $("#progressbar-quatro").removeClass("last");
    $("#progressbar-cinco").removeClass("last");
  }); 
  
}


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


