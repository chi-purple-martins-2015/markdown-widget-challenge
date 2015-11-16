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
    console.log(line.slice(3));
    return ("<h3>" + line.slice(3) + "</h3><br>");
  }
  else if (line.substring(0, 2) == "##"){
    console.log("heading2")
    console.log(line.slice(2));
    return ("<h2>" + line.slice(2) + "</h2><br>");
  }
  else if (line.charAt(0) == "#"){
    console.log("heading1")
    console.log(line.slice(1));
    return ("<h1>" + line.slice(1) + "</h1><br>");
  }
  else {
    return line;
  }
};
