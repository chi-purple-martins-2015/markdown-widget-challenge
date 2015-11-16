$(document).ready(function() {
  $(document).on("keyup", function(event){
    var textString = $('textarea').val();
    var textStringWithReturns = textString.replace(/\n/g, '<br>');
    // $('div').html(textStringWithReturns);
    var transformedArray = textStringWithReturns.split('<br>').map(parseLines);
    var htmlString = transformedArray.join();
    $('div').html(htmlString);

//arr.forEach(callback[, thisArg])

  })
});
