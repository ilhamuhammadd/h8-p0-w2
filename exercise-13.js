function xo(str) {
    var str;
    var tampungX = "";
    var tampungO = "";
    for(var i = 0; i <= str.length-1; i++ ) {
    // console.log(i + " " + karakter.charAt(i))
      if (str.charAt(i) === 'x') {
          tampungX += str.charAt(i);
      } else if (str.charAt(i) === 'o') {
          tampungO += str.charAt(i);
      }
      // console.log(tampungX + " vs " + tampungO);
  }
    console.log(tampungX + " vs " + tampungO);
  
    if (tampungX.length === tampungO.length) {
      return('true')
    } else if(tampungX.length !== tampungO.length) {
      return('false')
    }
  }
  
  console.log(xo("xoxoxo"));
  console.log(xo("oxooxo"));
  console.log(xo("oxo"));
  console.log(xo("xxxooo"));
  console.log(xo('xoxooxxo'));
