var penumpang = ["Enggar",undefined,"Bintang",undefined,"Keysia"];

var tambahPenumpang = function(namaPenumpang,bangku){

	if(bangku.length == 0){
		bangku.push(namaPenumpang);
		return bangku;
	}

	else{
		var cekNama = bangku.find(function(a){
			if(a == namaPenumpang){
				return true;
			}
		})

		var angkutPenumpang = bangku.findIndex(function(a){
			return a == undefined;
		})


		if(cekNama === namaPenumpang){
			console.log(namaPenumpang + " sudah didalam angkot");
			return bangku;
		}


		else if(angkutPenumpang < 0 && cekNama == undefined){
			bangku.push(namaPenumpang);
			return bangku;
		}

		else if(cekNama == undefined && bangku.length > 0){
			bangku[angkutPenumpang] = namaPenumpang;
			return bangku;
		}
	}


}

var hapusPenumpang = function(namaPenumpang, bangku){
	if(bangku == 0){
		console.log("Angkot sedang kosong");
		return bangku;
	}


	else{
		var turunAngkot = bangku.findIndex(function(a){
			return a == undefined;
		})

		var bukanPenumpang = bangku.find(function(a){
			if(bangku != namaPenumpang){
				return bangku;
			}
		})

		if(turunAngkot == namaPenumpang){
			bangku[turunAngkot] = undefined;
			return bangku;
		}

		else if(bukanPenumpang != namaPenumpang){
			console.log(namaPenumpang + " tidak didalam angkot")
		}


	}
}