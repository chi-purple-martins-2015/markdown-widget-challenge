var parseLines = function(line) {
  // if (line.charAt(0) == "#"){
  //   console.log('----------------')
  //   console.log('yes')
  //   console.log(line);
  //   console.log('----------------')
  // }
  // else {
  //   console.log('----------------')
  //   console.log('no')
  //   console.log(line);
  //   console.log('----------------')
  // }
  if (line.substring(0, 3) == "###"){
    console.log("heading3")
    console.log(line.substring(0, 2));
    return ("<h3>" + line + "</h3><br>");
  }
  else if (line.substring(0, 2) == "##"){
    console.log("heading2")
    console.log(line.substring(0,1));
    return ("<h2>" + line + "</h2><br>");
  }
  else if (line.charAt(0) == "#"){
    console.log("heading1")
    console.log(line.charAt(0));
    return ("<h1>" + line + "</h1><br>");
  }
  else {
    return line;
  }
};
