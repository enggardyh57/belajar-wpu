var jmlAngkot= prompt('Jumlah semua angkot :');
var angkotBeroperasi=prompt('Jumlah Angkot Beroperasi:');


// CARA 1
// for(noAngkot=1;noAngkot<=jmlAngkot;noAngkot++){
//     if(noAngkot===8||noAngkot===10||noAngkot===5||noAngkot===1){
//         console.log("Angkot No. " + noAngkot + " sedang lembur");
//     }else if(noAngkot<=angkotBeroperasi){
//         console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//     } else{
//         console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
//     }
// }

// CARA 2


for (var noAngkot=1;noAngkot<=jmlAngkot;noAngkot++){
    if(noAngkot<=angkotBeroperasi && noAngkot !== 5){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    } else if (noAngkot===8||noAngkot===10||noAngkot===5){
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    } else{
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
    }
}










