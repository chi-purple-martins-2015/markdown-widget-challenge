

var stringParser = function(string){
  string = string.replace(/(\*|\_){1}/, "<i>");
  string = string.replace(/(\*|\_){1}/, "</i>");

  string = string.replace(/(\*){2}\b/gi, "<b>");
  string = string.replace(/\b\*\*/gi, "</b>");


  return string;
}
