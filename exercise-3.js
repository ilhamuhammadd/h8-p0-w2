// Algorithm
// Membuat Game Sederhana
// 1. Simpan variabel nama tanpa nilai 
// 2. Simpan variabel peran tanpa nilai
// 3. Jika nama dan peran kosong , muncul pesan Nama harus disi
// 4. Simpan variabel nama dengan nilai
// 5. Munculkan pesan Halo nama, Pilih peranmu untuk memulai Game
// 6. Simpan variabel peran dengan nilai
// 7. Jika peran dimasukan dengan nilai ksatria , maka muncul pesan Selamat datang di Dunia Proxtyia, nama
    // Halo ksatria nama, kamu dapat menyerang dengan senjatamu
// 8. Jika peran dimasukan dengan nilai tabib, maka muncul pesan Selamat datang di Dunia Proxtyia, nama
    // Halo tabib nama, kamu akan membantu temanmu yang terluka
// 9. Jika peran dimasukan dengan nilai penyihir, maka muncul pesan Selamat datang di Dunia Proxytia, nama
    // Halo penyihir nama, ciptakan keajaiban untuk membantu kemenanganmu
// 10.Kamu Keluar dari Permainan

// Psudocode

// 1. Store "nama" with any value
// 2. Store "peran" with any value
// 3. IF "nama" equals to undefined AND "peran" equals to undefined
// 4.   THEN DO "Nama harus diisi"
// 5.   Read and Save "nama"
// 6.   Calculate "Halo" Added by "nama," Added by "Pilih peranmu untuk memulai Game"

// 7.   Read and Save "peran"

// 8.   IF "peran" equals to "ksatria"
// 9.      DO "Selamat datang di Dunia Proxytia," Added by "nama"
// 10.     Calculate "Halo" Added by "peran" Added by "nama," Added by "kamu dapat menyerang dengan senjatamu"
// 11.  ELSE IF "peran" equals to "tabib"
// 12.     DO "Selamat datang di Dunia Proxtyia," Added by "nama"
// 13.     Calculate "Halo" Added by "peran" Added by "nama," Added by "kamu akan membantu temanmu yang terluka"
// 14.  ELSE IF "peran" equals to "penyihir"
// 15.     DO "Selamat datang di Dunia Proxytia," Added by "nama"
// 16.     Calculate "Halo" Added by  "peran" Added by "nama," Added by "ciptakan keajaiban untuk membantu kemenanganmu"
// 17.ELSE
// 18.  DISPLAY "Kamu keluar dari Game" 

var nama = "ilham";
var peran = "ksatria";

if (nama == "" || peran == "") {
    Console.log("Nama harus diisi!");
    Console.log("Halo" + nama + ", Pilih peranmu untuk memulai Game" );
    } 
else if (peran == "ksatria") {
    console.log("Selamat datang di Dunia Proxytia," ,nama);
    console.log("Halo" , peran , nama +", kamu dapat menyerang dengan senjatamu");
    } 
else if (peran == "tabib") {
    console.log("Selamat datang di Dunia Proxytia," + nama);
    console.log("Halo" , peran , nama +", kamu akan membantu temanmu yang terluka");
    }
else if (peran == "penyihir") {
    console.log("Selamat datang di Dunia Proxytia," , nama);
    console.log("Halo" , peran , nama +", ciptakan keajaiban yang membantu kemenanganmu");
    }
else {
    console.log("Kamu Keluar Dari Game")
}
