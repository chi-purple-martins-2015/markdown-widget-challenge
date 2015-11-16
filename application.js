// //get input text from form

var transform = function(inputText) {
  var inputString = inputText;
  var insertArray = [];
  for (var i =0; i < inputString.length; i++) {
    if (inputString[i] === '*' && inputString[i+1] === "*"){
        inputString = inputString.replace("**", "<strong>")
        inputString = inputString.replace("**", "</strong>")
      } else if (inputString[i] === "*" && inputString[i+1] !== "*") {
        inputString = inputString.replace("*", "<em>")
        inputString = inputString.replace("*", "</em>")
      } else if (inputString[i] === '_') {
      inputString = inputString.replace("_", "<em>")
      inputString = inputString.replace("_", "</em>")
    }
  }
  return inputString;
};

$(document).ready(function(){
  $(document).on("keyup", function(){
    var text = $("textarea").val();
    var replacedText = transform(text);
    $('.output').html(replacedText);
  })
})
