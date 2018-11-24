console.log('Program Start From Here')
// Let's Form a Sentence

var word = 'Javascript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh + "\n");

console.log('program start from here ----------------------------------')
// Index Accessing - 1 by 1

var word = 'wow Javascript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
// console.log(word.substr(4,10).length);
// console.log(word.length);
var SecondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var ThirdWord = word[15] + word[16];
var FourthWord = word[18] + word[19];
var FifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word : ' + exampleFirstWord);
console.log('Second Word : ' + SecondWord);
console.log('Third Word : ' + ThirdWord);
console.log('Fourth Word : ' + FourthWord);
console.log('Fifth Word : ' + FifthWord + "\n");


console.log('Program Start from here -----------------------------------------')
// Breaking Sentence (Again) using Substring
var word3 = 'wow Javascript is so cool';
var exampleFirstWord3 = word3.substr(0,3);
var SecondWord3 = word3.substr(4,10);
var ThirdWord3 = word3.substr(15,2);
var FourthWord3 = word3.substr(18,2);
var FifthWord3 = word3.substr(21,4)

console.log("First Word : " + exampleFirstWord3);
console.log("Second Word : " + SecondWord3);
console.log("Third Word : " + ThirdWord3);
console.log("Fourth Word : " + FourthWord3);
console.log("Fifth Word : " + FifthWord3 + "\n");

console.log('Program Start from here -----------------------------------------------');
// Breaking Sentence (yet Again) and Count Each Length
var word4 = 'wow Javascript is so cool';
var exampleFirstWord4 = word4.substr(0,3);
var SecondWord4 = word4.substr(4,10);
var ThirdWord4 = word4.substr(15,2);
var FourthWord4 = word4.substr(18,2);
var FifthWord4 = word4.substr(21,4);

var FirstWordLength = exampleFirstWord4.length;
var SecondWordLength = SecondWord4.length;
var ThirdWordLength = ThirdWord4.length;
var FourthWordLength = FourthWord4.length;
var FifthWordLength = FifthWord4.length;

console.log(FirstWordLength);
console.log(SecondWordLength);
console.log(ThirdWordLength);
console.log(FourthWordLength);
console.log(FifthWordLength);