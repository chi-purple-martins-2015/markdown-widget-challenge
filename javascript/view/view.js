$(document).ready(function(){
  $("form").on("click", "button", function(e){
    e.preventDefault();
    var result = $("textarea").val();
    result = converter(result, /\*/, "i");
    result = converter(result, /\_/, "i");
    // result = converter(result, /(\*){2}/, "b");
    result = converter(result, /\*\*/, "b");
    $("#preview-div p").append(result);
  })
  $("#preview-div button").on("click", function(){
    $("#preview-div p").empty();
  })
})

var converter = function(text, symbol, styleAdd){
    var start = text.search(symbol);
    console.log(typeof(symbol));
    if(text[start+1]==="*"){
      var beginText = text.slice((start+2), -1);
    } else{
      var beginText = text.slice((start+1), -1);
    }
    var end = beginText.search(symbol);
    var endText = beginText.slice(0, end);
    var returnText = "<" + styleAdd + ">" + endText + "</" + styleAdd + ">"
    text = text.replace(endText, returnText);
    text = text.replace(symbol, "");
    text = text.replace(symbol, "");
    return text;
}

// This is the *cat*, you _must_ love **him**.
