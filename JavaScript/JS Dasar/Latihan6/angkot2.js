var jmlAngkot = prompt('Masukkan jumlah semua angkot');
var angkotBeroperasi = prompt("Masukkan jumlah angkot yang beroperasi");
var noAngkot = 1;

// Cara 1
// while(noAngkot<=angkotBeroperasi){
//      console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
// noAngkot++
// }

// for(noAngkot=7;noAngkot<=jmlAngkot;noAngkot++){
//      console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
// }

// Cara 2
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// while(noAngkot<=angkotBeroperasi){
//      console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
// noAngkot++;
// }

// for( noAngkot=angkotBeroperasi +1;noAngkot<=jmlAngkot;noAngkot++){
//     console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi ");
// }

// Cara 3
while(noAngkot<=angkotBeroperasi){
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
noAngkot++;
}

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");

}


