var jmlAngkot = prompt("Masukkan jumlah semua angkot:");
var angkotBeroperasi = prompt("Masukkan jumlah angkot yang sedang beroperasi :")
var noAngkot=1;

while (noAngkot<=jmlAngkot) {
    if (noAngkot <= angkotBeroperasi){
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
    }
        noAngkot++
}