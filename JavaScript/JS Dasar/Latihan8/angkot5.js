// var jmlAngkot = prompt('Jumlah semua angkot :')
// var angkotBeroperasi= prompt('Jumlah angkot yang beroperasi');


// CARA 1
// for (noAngkot=1; noAngkot<=jmlAngkot;noAngkot++){
//     if(noAngkot<=angkotBeroperasi){
//         console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//     } else if(noAngkot ===8){
//         console.log("Angkot No. " + noAngkot + " sedang lembur");
//     }else if(noAngkot===10){
//         console.log("Angkot No. " + noAngkot + " sedang lembur");
//     } 
//     else{
//         console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
//     }

// }

// CARA 2
// for (noAngkot=1;noAngkot<=jmlAngkot;noAngkot++){
//     if(noAngkot<=angkotBeroperasi){
//         console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//     }else if(noAngkot===8 || noAngkot===10){
//         console.log("Angkot No. " + noAngkot + " sedang lembur");
//     } else{
//         console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
//     }
// }