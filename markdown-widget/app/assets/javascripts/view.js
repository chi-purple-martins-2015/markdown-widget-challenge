$(document).ready(function() {

  $("textarea").keyup(function(event){

    var character = $(this).val();
    var result = stringParser(character);
    $(".preview").html(result);
  });
});


