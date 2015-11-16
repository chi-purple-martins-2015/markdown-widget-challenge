$(document).ready(function() {
  $(document).on("keyup", function(event){
    var textString = $('textarea').val();
    var textStringWithReturns = textString.replace(/\n/g, '<br>');
    $('div').html(textStringWithReturns);
    textStringWithReturns.split('<br>').forEach(parseLines);

//arr.forEach(callback[, thisArg])

  })
});
