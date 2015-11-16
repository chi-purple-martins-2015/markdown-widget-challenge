var parseLines = function(line) {
  if (line[0] == "#"){
    // var lineHTML = "<h1>" + line + "/<h1>"
    return ("<h1>" + line + "/<h1>");
  }
  else {
    return line;
  }
};
