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
$("#passo-cinco-ok").hide();

barraProgresso();
validacaoCPF();
var cliente; /* Novo cliente / Cliente com contrato cancelado */
var passos = 1; /* Controlador de onde o cliente está */

function validacaoCPF() {
  $('#cpf').on('keyup', function (e) {
    $(this).mask('000.000.000-00');
    if(validaCpf($(this).val())) {
      $("#btn-passo-um").prop("disabled", false);
      $("#label").html("");
    } else {
      $("#btn-passo-um").prop("disabled", true);
      if($(this).val().length == 14)
      $("#label").html("Digite um CPF válido");
    }
    if(e.keyCode == 13) {
      $("#btn-passo-um").trigger('click');
    }
/*     if ($(this).val() != "") {
      let cpf = $(this).unmask().val();
      let cpfValido = validaCpf(cpf);
      if (!cpfValido) {
        
        $("#btn-passo-um").prop("disabled", true);
        $('#cpf').mask('000.000.000-00');
        return false;
      }else{
        $('#cpf').mask('000.000.000-00');
        $("#btn-passo-um").prop("disabled", false);
      }
    } */
  });

  $('#cpf').focus(function () {
    $('#cpf').mask('000.000.000-00');
    $("#label").html("");
    //$("#btn-passo-um").prop("disabled", true);
  });
  
}


  


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
            //if(servico_internet[0].status == 1 || servico_internet[0].status == 4) {
              //internet = servico_internet[0].status;
            //} else{
              internet = servico_internet[0].status;
            //}
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

      //try {
        if(internet == 1 || internet == 4) {
          $("#modal-text #response").html("Você já tem contrato ativo conosco. Já tem direito logtel play.");
          $("#acessar-logtelplay").show();
          $("#passo-um-cadastrar-logtelplay").hide();
        } else if(internet == 3) {
          $("#modal-text #response").html("Identificamos que você tem um contrato cancelado conosco. Deseja continuar com o contrato de serviço avulso da Logtel Play?");
          $("#acessar-logtelplay").hide();
          $("#passo-um-cadastrar-logtelplay").show();
        } else {
      //} catch(e) {
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
});
$(".card-mumo").click(function() {
  $(".music").toggle();
});
$(".card-qualifica").click(function() {
  $(".book").toggle();
});


$("#btn-passo-dois").click(function(){
  $("#modal-text").modal('hide');
  $(".passo-dois").hide();
  $(".passo-tres").animate({ width: "show", 'left': 0 }, "slow");
  $('#cpf-disabled').mask('000.000.000-00');
  $('#telefone').mask('(00) 0 0000-0000');
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
            if (!("erro" in dados)) {
                  //Atualiza os campos com os valores da consulta.
                  $("#rua").val(dados.logradouro).prop("disabled", false);
                  $("#numero-casa").prop("disabled", false);
                  $("#bairro").val(dados.bairro);
                  $("#cidade").val(dados.localidade);
                  $("#uf").val(dados.uf);
                  $("#btn-passo-quatro").prop("disabled", false);
                  
              } //end if.
              else {
                  //CEP pesquisado não foi encontrado.
                  limpa_formulário_cep();
                  $("#labelcep").html("CEP não encontrado.");
                  $("#btn-passo-quatro").prop("disabled", true);
              }
          });
      } //end if.
      else {
          //cep é inválido.
          limpa_formulário_cep();
          $("#labelcep").html("Formato de CEP inválido.");
          $("#btn-passo-quatro").prop("disabled", true);
      }
  } //end if.
  else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
  }
});

$("#btn-passo-tres").click(function(){
  $(".passo-tres").hide();
  $('#cep').mask('00.000-000');
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
  numeroCasa = $('#numero-casa').val();
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
  $("#passo-cinco-ok").click(function(){
    window.location.href = "http://www.logtelplay.com.br";
  });

});

function barraProgresso() {
  $("#passo-um-cadastrar-logtelplay").click(function(){
    $("#progressbar-um").removeClass("last");
    $("#progressbar-dois").addClass("active last").attr("data-ativo", 1) ;
  }); 
  $("#btn-passo-dois").click(function(){
    $("#progressbar-dois").removeClass("last");
    $("#progressbar-tres").addClass("last active").attr("data-ativo", 1);
  }); 
  $("#btn-passo-tres").click(function(){
    $("#progressbar-tres").removeClass("last");
    $("#progressbar-quatro").addClass("last active").attr("data-ativo", 1);
  }); 
  $("#btn-passo-quatro").click(function(){
    $("#progressbar-quatro").removeClass("last");
    $("#progressbar-cinco").addClass("last active").attr("data-ativo", 1);
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
    if($("#progressbar-dois").attr("data-ativo") == "1") {
      $(".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
      $(".passo-um").hide();
      $(".passo-tres").hide();
      $(".passo-quatro").hide();
      $(".passo-cinco").hide();
      $("#progressbar-um").removeClass("last");
      $("#progressbar-dois").addClass("last");
      $("#progressbar-tres").removeClass("last");
      $("#progressbar-quatro").removeClass("last");
      $("#progressbar-cinco").removeClass("last");
    }
  }); 

  $("#progressbar-tres").click(function(){
    if($("#progressbar-tres").attr("data-ativo") == "1") {
      $(".passo-tres").animate({ width: "show", 'left': 0 }, "slow");
      $(".passo-um").hide();
      $(".passo-dois").hide();
      $(".passo-quatro").hide();
      $(".passo-cinco").hide();
      $("#progressbar-um").removeClass("last");
      $("#progressbar-dois").removeClass("last");
      $("#progressbar-tres").addClass("last");
      $("#progressbar-quatro").removeClass("last");
      $("#progressbar-cinco").removeClass("last");
    }
  }); 

  $("#progressbar-quatro").click(function(){
    if($("#progressbar-quatro").attr("data-ativo") == "1") {
      $(".passo-quatro").animate({ width: "show", 'left': 0 }, "slow");
      $(".passo-um").hide();
      $(".passo-dois").hide();
      $(".passo-tres").hide();
      $(".passo-cinco").hide();
      $("#progressbar-um").removeClass("last");
      $("#progressbar-dois").removeClass("last");
      $("#progressbar-tres").removeClass("last");
      $("#progressbar-quatro").addClass("last");
      $("#progressbar-cinco").removeClass("last");
    }
  }); 

  $("#progressbar-cinco").click(function(){
    if($("#progressbar-cinco").attr("data-ativo") == "1") {
      $(".passo-cinco").animate({ width: "show", 'left': 0 }, "slow");
      $(".passo-um").hide();
      $(".passo-dois").hide();
      $(".passo-tres").hide();
      $(".passo-quatro").hide();
      $("#progressbar-um").removeClass("last");
      $("#progressbar-dois").removeClass("last");
      $("#progressbar-tres").removeClass("last");
      $("#progressbar-quatro").removeClass("last");
      $("#progressbar-cinco").addClass("last");
    }
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

$('#btn-passo-cinco').on('click', function(e) {
  $("#passo-um-cadastrar-logtelplay").hide();
  $(".btn-light").hide();
  $("#passo-cinco-ok").show();

  e.preventDefault();
  var bit = 0;
  var servicos = '';
  $('.servico[data-ativo=1]').each(function(i) {
    bit += $(this).data('bitwise');
  });
  switch(bit) {
    case 7: servicos = 'Mumo, Qualifica, WatchTV';
    break;
    case 6: servicos = 'Qualifica, WatchTV';
    break;
    case 5: servicos = 'Mumo, WatchTV';
    break;
    case 4: servicos = 'WatchTV';
    break;
    case 3: servicos = 'Mumo, Qualifica';
    break;
    case 2: servicos = 'Qualifica';
    break;
    case 1: servicos = 'Mumo';
    break;
    default: servicos = 'Não identificado';
    break;
  }
  var msg = '** VENDA DE PLANOS AVULSOS **';
  msg = msg + '\n\nPlanos escolhidos: ' + servicos;
  msg = msg + '\nCPF: ' + $('#cpf').val();
  msg = msg + '\nNome: ' + $(".nome").html();
  msg = msg + '\nTelefone: ' + $(".telefone").html();
  msg = msg + '\nE-mail: ' + $(".email").html();
  msg = msg + '\nCEP: ' + $(".cep").html();
  msg = msg + '\nRua: ' + $(".rua").html();
  msg = msg + '\nNúmero: ' + $(".numero-casa").html();
  msg = msg + '\nBairro: ' + $(".bairro").html();
  msg = msg + '\nCidade: ' + $(".cidade").html();
  msg = msg + '\nUF: ' + $(".uf").html();
  msg = msg + '\nPreço Total: ' + $(".total").html();
  var data = {plano:servicos, cpf:$('#cpf').val(), nome:$(".nome").html(),telefone:$(".telefone").html(),email:$(".email").html(),cep:$(".cep").html(),logradouro:$(".rua").html(),numero:$(".numero-casa").html(),bairro:$(".bairro").html(),cidade:$(".cidade").html(),uf:$(".uf").html(),total:$(".total").html()};
  $.ajax({
    method: "POST",
    url: "../api/cadastrar_venda",
    data: data,
    dataType: "json",
    success: function (response) {
      
    }
  });
});


/**
 * Valida o CPF através de sua fórmula
 * @param mixed cpf - .val() do input a ser validado
 */
 function validaCpf(cpf) {
	if (cpf === null) {
		return false;
	}

	cpf = cpf.replace(/[^0-9]/g, '');
		//.split('.')
		//.join('')
		//.split('-')
		//.join('');
	var numeros, digitos, soma, i, resultado, digitos_iguais;
	digitos_iguais = 1;

	if (cpf.length < 10) {
		return false;
	}
	if (cpf.length == 10) {
		cpf = '0' + cpf;
	}
	for (i = 0; i < cpf.length - 1; i++) {
		if (cpf.charAt(i) != cpf.charAt(i + 1)) {
			digitos_iguais = 0;
			break;
		}
	}

	if (!digitos_iguais) {
		numeros = cpf.substring(0, 9);
		digitos = cpf.substring(9);
		soma = 0;

		for (i = 10; i > 1; i--) {
			soma += numeros.charAt(10 - i) * i;
		}

		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado != digitos.charAt(0)) {
			return false;
		}

		numeros = cpf.substring(0, 10);
		soma = 0;
		for (i = 11; i > 1; i--) {
			soma += numeros.charAt(11 - i) * i;
		}

		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

		if (resultado != digitos.charAt(1)) {
			return false;
		}

		return true;
	} else {
		return false;
	}
}