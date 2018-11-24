function konversiMenit(menit){
    var jam = menit / 60;
    jam = Math.floor(jam); 
    // console.log(jam);
  
    var menit = menit % 60;
    if ( menit < 10 ) {
      return jam + ":" + "0"+menit 
    } else {
      return jam + ":" + menit 
    }
    // console.log(menit);
  }
  
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120))



// var jam = 223 / 60;
// jam = Math.floor(jam); 
// console.log(jam);

// var menit = 183 % 60;
// console.log(menit);