function balikKata(kata) {
    var tampung = "";
    for (var i = kata.length-1; i >= 0; i-- ) {
    tampung += kata.charAt(i);
}
console.log(tampung);
}

balikKata("Hello World and Coders");

// balikKata("Hello World and Coders");
// var tampung = "";
// var a = "Hello world and coders";
// for (var i = a.length-1; i >= 0; i-- ) {
//     tampung += a.charAt(i);
// }
// console.log(tampung);