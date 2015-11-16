$(document).ready(function() {

  $("textarea").keyup(function(event){

    // alert(event.which);
    var character = $(this).val();
    var result = stringParser(character)
    // alert(result)
    $(".preview").html(result);
  });
});


