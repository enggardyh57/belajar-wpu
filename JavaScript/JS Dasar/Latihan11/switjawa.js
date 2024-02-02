// Perulangan
var ulang = true;
while(ulang){
    // Menangkap pilihan player

    var plyr = prompt("Kamu memilih : \n (pilihan : semut,gajah,manusia) huruf kecil semua")


    // Menangkap pilihan komputer dengan random
    var comp = Math.random();

    if(comp <= 0.40){
        comp = "semut";
    } else if(comp >= 0.41 && comp <= 0.70){
        comp = "manusia";
    } else{
        comp = "gajah";
    }

    console.log(comp)

    // Menentukan rules
    // Gajah vs manusia: Gajah menang.
    // Gajah vs Manusia: Gajah menang.
    // Gajah vs Semut: Semut menang.
    // Semut vs manusia : manusia menang


    var hasil = "";

    if(plyr == comp){
        hasil = "Seri";
    } else if(plyr == "semut"){
        // if(comp == "gajah" || comp == "Semut"){
        //     hasil = "Menang";
        // } else{
        //     hasil = "Kalah"
        // }
        hasil = (comp == "gajah") ? "Menang" : "Kalah";
    } else if(plyr == "gajah"){
        hasil = (comp == "manusia") ? "Menang" : "Kalah";
    } else if(plyr == "manusia" ){
        hasil = (comp == "semut" ) ? "Menang" : "Kalah";
    } else{
        hasil = "Pilihan tidak ada di instruksi!!!"
    }
    // Tampilkan hasilnya

    alert(" Kamu memilih : " + plyr + " dan komputer memilih : " + comp + " \n maka kamu " + hasil)


    ulang = confirm("Mau bermain lagi ?");
}

alert("Terimakasih sudah bermain game ini")