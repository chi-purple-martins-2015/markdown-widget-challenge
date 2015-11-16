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
  if (line.charAt(0) != "#"){
    return line
  }
  if (line.charAt(0) == "#"){
    console.log('----------------')
    console.log('yes')
    console.log(line);
    console.log('----------------')
    return ("<h1>" + line + "</h1><br>");
  }
  else {
      console.log('----------------')
    console.log('no')
    console.log(line);
    console.log('----------------')
    return line;
  }
};
