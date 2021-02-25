$(document).ready(function(){

    $( ".btn-planos-watch" ).click(function() {
        $( ".img-fluid-watch").animate({ width: "show", 'left': 0 }, "slow");
        $( ".img-fluid-noggin").hide();
        $( ".img-fluid-paramount").hide();
        $( ".img-fluid-mumo").hide();
      });

      $( ".btn-planos-noggin" ).click(function() {
        $( ".img-fluid-watch").hide();
        $( ".img-fluid-noggin").animate({ width: "show", 'left': 0 }, "slow");
        $( ".img-fluid-paramount").hide();
        $( ".img-fluid-mumo").hide();
      });

      $( ".btn-planos-paramount" ).click(function() {
        $( ".img-fluid-watch").hide();
        $( ".img-fluid-noggin").hide();
        $( ".img-fluid-paramount").animate({ width: "show", 'left': 0 }, "slow");
        $( ".img-fluid-mumo").hide();
      });

      $( ".btn-planos-mumo" ).click(function() {
        $( ".img-fluid-watch").hide();
        $( ".img-fluid-noggin").hide();
        $( ".img-fluid-paramount").hide();
        $( ".img-fluid-mumo").animate({ width: "show", 'left': 0 }, "slow");
      });
    
  });