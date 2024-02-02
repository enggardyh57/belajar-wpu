// Membuat object sederhana


// var aboutMe = {
// 	name : "Enggar Dyah Bintang Ayuna",
// 	age  : 20,
// 	gender : "Female",
// 	religion : "islam",
// ipSemester : [4.00,4.00,3.95,4.00,4.00],
// 	addres : {
// 		ward : "Jejalen Jaya",
// 		city : "Bekasi",
// 		full : "Perum Taman Kintamani Blok F4 No 15B",
// 		province : "Jawa Barat",
// 	}

// }

// var mhs = {
// 	nama : "Enggar Dyah",
// 	kampus : "Univ. Bina Sarana Informatika",
// 	ipSemester : [4.00,4.00,3.95,4.00,4.00],

// 	IPK : function(){
// 		var total = 0;
// 		var ips = this.ipSemester;
// 		for(var i= 0; i< ips.length;i++){
// 			total += ips[i];

// 		}
// 		return total/ips.length
// 	}
// }

// mhs.IPK()



// var saya = {
// 	// properti
// 	nama : "Enggar Dyah",
// 	umur : 20,
// 	pekerjaan : "Mahasiswa",
// 	agama : "Islam",

// 	// method
// 	sapa : function(){
// 		return "Nama saya " + this.nama + "," +
// 				"Saya berusia " + this.umur + 
// 				" dan saya masih berstatus  " + this.pekerjaan + "," +
// 				" agama saya adalah " + this.agama 
// 	}
// }


// Jenis-jenis pembuatan object javascript
// 1. Object Literal

// var mahasiswa = {
// 	nama  : "Enggar",
// 	kelas : "19.2B.05",
// 	nim   : 19221285,
// }


// 2. Function declaration

// function dataMahasiswa(nama,kelas,nim){
// 	var mhs = {};
// 	mhs.nama = nama;
// 	mhs.kelas= kelas;
// 	mhs.nim	 = nim;
// 	return mhs;

// }

// var mhsKaliabang = dataMahasiswa("Enggar","19.2B.05",19221285);


// 3. Constructor Function

// function Mahasiswa(nama,kelas,nim){
// 	this.nama = nama,
// 	this.kelas= kelas,
// 	this.nim  = nim
// }

// var mhsCons = new Mahasiswa("Enggar","19.2B.05",19221285)


// Materi This

// var a =10;
// var b= 20;
// console.log(this===window)
// console.log(this.a+ this.b)

// 1. Membuat object dengan function declaration

// function halo(){
// 	halo = {}
// 	console.log(this)
// 	console.log("Halo Semua")
// }

// this.halo();
// this pada declaration mengembalikan object global
// 2. Membuat object dengan object literal
// obj = {no : 11, nama : "Enggar"};

// obj.halo = function(){
// 	console.log(this)
// 	console.log("Halo Gaiss")
// }

// obj.halo()

// this pada literal mengembalikan object yang bersangkutan


// 3. Membuat object dengan constructor object

// function Halo(){
	
// 	console.log(this)
// 	console.log("Halo Coy");
// }

// new Halo();
// var obj1 = new Halo()

// this pada constructor mengembalikan object yang baru dibuat