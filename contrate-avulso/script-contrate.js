$(document).ready(function(){

    $(".passo-dois").hide();
    $(".passo-tres").hide();
    $(".passo-quatro").hide();

    $( "#passo-um" ).click(function() {
      var cpf = busca = $("#cpf").val().toUpperCase().replace(/[^a-zA-Z0-9 çÇáÁéÉíÍóÓúÚãÃõÕ]/g, "");
      var data = { busca:cpf, tipo:"todos" }
      $.ajax({
        method: "POST",
        url: "api/v1/consultar_cliente",
        data: data,
        dataType: "json",
        success: function (response) {
          $("#response").html(response[0].cliente_id);
          $( ".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
          $( ".passo-um").hide();
          $( ".passo-tres").hide();
          $( ".passo-quatro").hide();
          $( ".barra-conversao").hide();
        }
      });

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
        $( ".barra-conversao").hide();
    });

    $( "#passo-um" ).click(function() {
        $( ".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
        $( ".passo-um").hide();
        $( ".passo-tres").hide();
        $( ".passo-quatro").hide();
        $( ".barra-conversao").hide();
    });

    
  });