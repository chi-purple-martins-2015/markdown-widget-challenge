$(document).ready(function(){
  $("form").on("click", "button", function(e){
    e.preventDefault();
    var text = $("textarea").val();
    $("#preview-div textarea").append(text);
  })
  $("#preview-div button").on("click", function(){
    $("#preview-div textarea").empty();
  })
})
