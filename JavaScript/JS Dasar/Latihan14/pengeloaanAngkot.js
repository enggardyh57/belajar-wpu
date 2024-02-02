
// Var kosong menyimpan penumpang
var penumpang = [];


// penyimpanan fungsi untuk menambah penumpang
var tambahPenumpang = function (namaPenumpang,penumpang) {
	


// Cek kursi penumpang jika masi kosong
	if(penumpang.length == 0){
		penumpang.push(namaPenumpang);
		return penumpang;
	}


	// Cek semua kursi dengan perulangan jika kursi sudah terisi 

	else{
		for(var i = 0; i < penumpang.length;i++){

			// mengecek nama penumpang yang sama
			if(namaPenumpang == penumpang[i]){
				console.log(namaPenumpang + " sudah di dalam angkot");
				return penumpang;
			}

			else if(i == penumpang.length-1){
			// / Cek semua kursi dengan perulangan kedua agar lbih akurat 
	
				for(var j = 0; j < penumpang.length;j++){
					// mengecek ketersediaan kursi kosong
					if(penumpang[j] == undefined){
						penumpang[j] = namaPenumpang;
						return penumpang;
					}
					// mengisi kursi secara berurutan
					else if(j == penumpang.length-1){
						penumpang.push(namaPenumpang);
						return penumpang;
					}
				}
				
			}
		}
	}


}

var hapusPenumpang = function(namaPenumpang,penumpang){


	if(penumpang == 0){
		console.log("Angkot masih kosong");
		return penumpang;
	}

	else {
		 for(i = 0; i < penumpang.length; i++){
		 	if(namaPenumpang == penumpang[i]){
		 		penumpang[i] = undefined;
		 		return penumpang;
		 	}

		 	else if(namaPenumpang != penumpang[i]){
		 		console.log(namaPenumpang + " tidak didalam angkot");
		 		return penumpang;
		 	}
		 }
	}
}