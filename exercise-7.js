// 1. Menyusun Barisan Bintang 
console.log("program start from here");

for( var rows1 = 1; rows1 <= 5; rows1++) {
    console.log("*");
}

console.log("\n");
console.log("program start from here \n")

// 2. Menyusun Barisan Bintang dengan Nested Looping

var bintangbaris = "";
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        bintangbaris += "*";
    }

console.log(bintangbaris);
bintangbaris = "";
}

console.log("\n");
console.log("program start from here");
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = "";
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        rows3 += "*";
    }
console.log(rows3);
rows3 = "";
} 
 