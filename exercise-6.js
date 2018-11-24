// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');

var counter = 2;
while(counter <= 20) {
    console.log(counter + " - " + "I love coding");
    counter += 2;
}
console.log("\n")

console.log('LOOPING KEDUA');
var counter = 20;
while(counter > 0) {
    console.log(counter + " - " + "I will become fullstack developer");
    counter -= 2;
}
console.log('\n');

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');

for(var counter = 1; counter <= 20; counter++) {
    console.log(counter + " - " + "I love coding");
}
console.log('\n');

console.log('LOOPING KEDUA');
for(var counter = 20; counter > 0; counter--) {
    console.log(counter + " - " + "I will become fullstack developer");
}
console.log("\n");
// 3. Angka Ganjil dan Genap

for(var counter = 1; counter <= 100; counter++) {
    if (counter % 2 == 0) {
        console.log(counter + " adalah angka genap");
    } else if (counter % 2 == 1) {
        console.log(counter + " adalah angka ganjil");
    }
}

console.log("\n");
console.log("Program Start From Here")

for(var lipat = 1; lipat <= 100; lipat+=2) {
    if(lipat % 3 == 0) {
        console.log(lipat + " kelipatan 3");
    }
}

console.log("\n");

for(var lipat = 1; lipat <= 100; lipat+=5) {
    if(lipat % 6 == 0 ) {
        console.log(lipat + " kelipatan 6");
    }
}

console.log("\n");

for(var lipat = 1; lipat <= 100; lipat+=9) {
    if(lipat % 10 == 0 ) {
        console.log(lipat + " kelipatan 10");
    }
}