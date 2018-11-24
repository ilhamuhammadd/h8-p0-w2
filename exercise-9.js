// Tugas 1

function shoutOut() {
    console.log("Halo Function!");
}

shoutOut();

console.log("\nProgram Start From Here");

// Tugas 2

function calculateMultiply(num1,num2) {
    return num1 * num2;
}

var hasilPerkalian = calculateMultiply(5,6);

console.log(hasilPerkalian);
var Name = "Agus";
// var Age = "30";
// var Address = "Jln. Maliboro, Yogyakarta";
// var hobby = "gamming";
console.log("\nProgram Start From Here");

// Tugas 3

function processSentence(Name,Age,Address,hobby) {
    return "Nama saya " + Name + ", umur saya " + Age + " tahun, alamat saya di " + Address + ", dan saya punya hobby yaitu " + hobby 
}

// var Name = "Agus";
// var Age = "30";
// var Address = "Jln. Maliboro, Yogyakarta";
// var hobby = "gamming";

var fullSentence = processSentence("Agus",30,"Jln Malioboro, Yogyakarta","gamming");

console.log(fullSentence);