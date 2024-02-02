var ulang = true;

while(ulang){
	alert("tebak angka 1-10 \n kamu punya 3 kesempatan");

	var angka = Math.floor(Math.random()*10)+1;
	console.log(angka);

	var sisaMain = 3;

	var tebakan = "";
	for(var sisaMain; sisaMain >= 1; sisaMain--){
		var pemain = parseInt(prompt("Tulis angka tebakanmu : \n 1-10 ya jangan lupa"));

		if (pemain == angka) {
			tebakan = alert("tebakanmu benar \n angka yang dicari adalah " + angka)
		}

		else if( pemain > angka){
			if(sisaMain == 1){
			tebakan =	alert  ("Maaf, kesempatan menebak habis");
			} else if(sisaMain == 2){
			tebakan =	alert("Angka terlalu tinggi \n ayo masi ada 1 kesempatan")
			} else{
			tebakan =	alert("Angka terlalu tinggi \n ayo masi ada 2 kesempatan")
			}
		}

		else if( pemain < angka  ){
			if(sisaMain == 1){
			tebakan =	alert  ("Maaf, kesempatan menebak habis");
			} else if(sisaMain == 2){
			tebakan =	alert("Angka terlalu rendah \n ayo masi ada 1 kesempatan")
			} else{
			tebakan =	alert("Angka terlalu rendah \n ayo masi ada 2 kesempatan")
			}
		}

		else{
		tebakan =alert("Jawaban kamu tidak sesuai instruksi")
		}

	}

	ulang = confirm("Mau main lagi ?")
}
