// Sangat tidak disarankan karena value yang telah dibuat akan tertimpa elemen baru
// var nama = "Enggar";
// var nama = "Dyah"
// console.log(nama)

// Sebenernya bisa menyimpan banyak value tetapi kurang efisien

// var nama1 = "Enggar"
// var nama2 = "Dyah"
// var nama3 = "Bintang"
// var nama4 = "Ayuna"

// console.log(nama1,nama2,nama3,nama4)


// KONSEP ARRAY

// 1. variable jamak bisa menyimpan lebih dari 1 elemen atau values
// var namaku = ["Enggar","Dyah","Bintang","Ayuna"];
// console.log(namaku)

// 2. pasangan key dan nilai yang dimulai dari 0

// console.log(namaku[2]);


// 3. array bertipe objek

// console.log(typeof(namaku))
// jumlah isi pada array sesuai jumlah data bukan sesuai indeks
// console.log(namaku.length);

// 4. elemen array boleh beda tipe
var angka = [1,5,7,8]

var tampilData = function(){
	alert("Hello World")
}
var acak = ['Enggar',20,2,true, tampilData,angka];
console.log(acak[4]);

console.log(acak[5][2])

