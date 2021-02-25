$(document).ready(function(){

    $(".passo-dois").hide();
    $(".passo-tres").hide();
    $(".passo-quatro").hide();

    $( "#passo-um" ).click(function() {
        $( ".passo-dois").animate({ width: "show", 'left': 0 }, "slow");
        $( ".passo-um").hide();
        $( ".passo-tres").hide();
        $( ".passo-quatro").hide();
        $( ".barra-conversao").hide();
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