$(document).ready(function() {
  $(document).on("keyup", function(event){
    var textString = $('textarea').val();

    $('div').html(textString);


  })
});
