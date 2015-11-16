$(document).ready(function(){
  $("form").on("click", "button", function(e){
    e.preventDefault();
    var text = $("textarea").val();
    var result = converter(text, /\*/, "i");
    $("#preview-div p").append(result);
    console.log("this is the jquery function")
    console.log(text);
    console.log(result);
  })
  $("#preview-div button").on("click", function(){
    $("#preview-div p").empty();
  })
})

//
// testString = "I * heart * New York."


var converter = function(text, symbol, styleAdd){
  start = text.search(symbol);

  beginText = text.slice((start+1), -1);

  end = beginText.search(symbol);

  endText = beginText.slice(0, end);

  returnText = "<" + styleAdd + ">" + endText+ "</" + styleAdd + ">"
  result = text.replace(endText, returnText);
  result = result.replace(/\*/, "");
  result = result.replace(/\*/, "");
  return result;
}
