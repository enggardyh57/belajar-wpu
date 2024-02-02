// PEMBAHASAN PARAMETER dan ARGUMENTS

// function tambah(a,b){
// 	return a+=b;
// }


// function kali (a,b){
// 	return a*=b
// }

// Arguments 1
// console.log(tambah(15,10));

// Arguments 2 
// var a = 7;
// var b = 25;

// console.log(tambah(a,b))


// Arguments 3
// var a = parseInt(prompt("Masukkan angka pertama :"));
// var b = parseInt(prompt("Masukkan angka kedua : "));

// console.log(tambah(a,b))

// Arguments 4
// var a = parseInt(prompt("Masukkan angka pertama :"));
// var b = parseInt(prompt("Masukkan angka kedua : "));

// console.log(tambah(a*2,b*2))


// Arguments 5
// console.log(kali(tambah(5,5),tambah(2,8)));


// Arguments 6

function tambah(){
	var hasil = 0;

	for(var i = 0; i < arguments.length; i++){
		hasil += arguments[i];
	}

	return hasil


}





var hitung = tambah(10,20,30,100,200);
console.log(hitung)