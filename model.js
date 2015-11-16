var parseLines = function(line) {
  if (line.substring(0, 3) == "###"){
    return ("<h3>" + line.slice(3) + "</h3><br>");
  }
  else if (line.substring(0, 2) == "##"){
    return ("<h2>" + line.slice(2) + "</h2><br>");
  }
  else if (line.charAt(0) == "#"){
    return ("<h1>" + line.slice(1) + "</h1><br>");
  }
  else if (line.indexOf('*') != -1) {
      var firstStar = line.indexOf('*');
      console.log(firstStar);
      if (line.includes("*", firstStar + 1 )) {
        alert("italics");
      }
  }
  else {
    return (line + "<br>");
  };
};
