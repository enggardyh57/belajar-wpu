// Menghitung volume kubus tanpa fungsi

// sisiA = 20;
// sisiB = 30;

// volumeA = sisiA * sisiA *sisiA;
// volumeB = sisiB *sisiB * sisiB;

// totalVolumeKubus = volumeA + volumeB
// alert(totalVolumeKubus)



// Menghitung volume kubus pakai fungsi

function jumlahVolumeDuaKubus(a,b){


	var volumeA = a*a*a;
	var volumeB = b*b*b;

	var total   = volumeA + volumeB;

	return total;
}


// alert(jumlahVolumeDuaKubus(5,10));
// alert(jumlahVolumeDuaKubus(15,8));
// alert(jumlahVolumeDuaKubus(30,25));
alert("Mari kita hitung jumlah volume dari dua kubus");
var ulang = true 
while(ulang){
	
	
	var a = parseInt(prompt("Masukkan sisi kubus pertama : "));
	var b = parseInt(prompt("Masukkan sisi kubus kedua : "));
	alert("Sisi kubus pertama : " + a + "\nSisi  kubus kedua : " + b + "\nJadi jumlah dari volume dua kubus tersebut adalah " + jumlahVolumeDuaKubus(a,b));




	var ulang =  confirm("Mau menghitung volume dari dua kubus lagi?")
}


alert("Terimakasih sudah mencoba menghitung dua kubus ")
