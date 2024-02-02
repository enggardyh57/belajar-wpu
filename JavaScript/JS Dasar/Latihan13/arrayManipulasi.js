
// MEMANIPULASI ARRAY

// 1.menambah isi array
// cara isi array dengan index

// hati-hati jika lupa dengan nomor indeks nomor yang lupa akan tetap dilewati dengan kata undefined

// var nama = ["Enggar","Aura","Khalis","Manda"]

// nama[4] = "Natasha";
// nama[6] = "Salma";

// console.log(nama)



// 2. menghapus isi array
// nama[6] = undefined;
// console.log(nama)


// 3. menampilkan isi array
// console.log(nama[6])

// for(var i = 0; i < nama.length; i++){
	// console.log("No absen urut " + (i+ 1) + ":"  +  nama[i])
// }



// ARRAY METHOD


// 1. Join merubah tipe data ke string
// var namaku = ["Enggar","Dyah","Bintang","Ayuna"];

// console.log(namaku.join());



// 2. Push menambahkan value di akhir array

// namaku.push("Keren")
// console.log(namaku.join())

// 3. Pop menghapus value di akhir array

// namaku.pop()
// namaku.pop()
// console.log(namaku.join())
// 4. unshift menambahkan value di awal dari array

// namaku.unshift("Keysia ")
// console.log(namaku.join())

// 5. Shift menghapus value di awal array
// namaku.shift()
// console.log(namaku.join())

// 6. Splice menambahkan value di tengah array
// splice = indexawal,yangMauDIhapusBerapa,elemenBaru1,elemenBaru 

// var namaku = ["Enggar","Dyah","Ayuna"];
// console.log(namaku.join());

// namaku.splice(2,0,"Bintang")

// console.log(namaku.join());

// 7. Slice memisah value atau elemen
// slice = awal,akhir

// var namaBaru = namaku.slice(2,4);
// console.log(namaBaru.join())

// 8. ForEach
// var angka = [1,2,3,4,5,6,7,8];

// for(var i = 0; i < angka.length;i++){
// 	console.log(angka[i])
// }

// angka.forEach(function(e){
	// console.log(e)
// })
// 9. Map
// var angkaBaru= angka.map(function(e){
	// return e*2
// })

// console.log(angkaBaru.join("-"))
// 10. Sort mengurutkan values

// var acak = [1,8,9,7,3,9,2,10,50]

// console.log(acak.sort())

// var urut = acak.sort(function(a,b){
// 	return a-b
// })

// console.log(urut)

// 11. Filter bisa mencetak lebih dari 1
var acak = [1,8,9,7,3,9,2,10,50]

var filter = acak.filter(function(e){
	// return e == 9
	return e > 7
})

console.log(filter)

// 12. Find hanya 1 yang terdekat yang tercetak
var find = acak.find(function(e){
	// return e == 9
	return e > 9
})

console.log(find)
