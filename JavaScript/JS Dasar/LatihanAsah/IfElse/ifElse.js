// SOAL 1 Pengecekan Bilangan Positif/Negatif/Zero
// var angka = parseInt(prompt("Masukkan angka bebas"));

// if(angka===0){
//     alert("Ini adalah bilangan zero");
// } else if(angka > 0){
//     alert("Ini adalah bilangan positif")
// } else if (angka < 0){
//     alert("Ini adalah bilangan negatif");
// } else{
//     alert("Ini bukan angka");
// }


// SOAL 2 Menentukan Bilangan Ganjil/Genap
// var angka = parseInt(prompt("Masukkan angka bebas"));
// if(angka %2 ===0){
//     alert('Ini bilangan genap');
// } else if(angka %2 ===1){
//     alert("Ini bilangan ganjil");
// } else{
//     alert("ini bukan angka")
// }

// SOAL 3 Menentukan Grade Mahasiswa
// var nilai = parseInt(prompt("Masukkan nilai mahasiswa"));
// if(nilai >= 90 && nilai <=100){
//     alert('Nilai A');
// }else if(nilai >=80 && nilai <=89){
//     alert("Nilai B");
// }else if(nilai >=70 && nilai <=79){
//     alert("Nilai C");
// }else if(nilai >=60 && nilai <=69){
//     alert("Nilai D");
// }else {
//     alert("Nilai E anda tidak lulus");
// }


// SOAL 4 pengguna memasukkan dua angka dan operasi (tambah, kurang, kali, atau bagi).
// var angka1 = parseInt(prompt("Masukkan angka bebas(1)"));
// var angka2 = parseInt(prompt("Masukkan angka bebas(2)"));
// var operasi = prompt("mau dihitung apaa? \n +,-,*,/");
// if(isNaN(angka1)||isNaN(angka2)){
//     alert("angka tidak boleh kosong adik-adik");
// } else{
//     switch(operasi){
//         case "+" :
//             alert(angka1+angka2);
//             break;
//         case "-" :
//             alert(angka1-angka2);
//             break;
//         case "*" :
//             alert(angka1*angka2);
//             break;
//         case "?" :
//             alert(angka1/angka2);
//             break;
//         case "/" :
//             if(angka1 > angka2){
//                 alert(angka1/angka2);
//             }else if(angka1 < angka2){
//                 alert(angka2/angka1)
//             }
//              else{
//                 alert('tidak dapat melakukan pembagian');
//             }
//             break;
//         default:
//             alert("operasi tidak valid");
//     }
// }



// SOAL 5 Menentukan Jenis Segitiga
// var sisi1 =parseInt(prompt("Masukkan sisi 1"));
// var sisi2 =parseInt(prompt("Masukkan sisi 2"));
// var sisi3 =parseInt(prompt("Masukkan sisi 3"));

// if(sisi1===sisi2 && sisi2===sisi3){
//     alert('Ini adalah segitiga sama sisi');
// } else if(sisi1===sisi2 || sisi2===sisi3||sisi3===sisi1){
//     alert("Ini adalah segitiga sama kaki");
// } else{
//     alert("Ini adalah segitiga sembarang");
// }




// SOAL 6 MMenentukan Hari dalam Sebuah Minggu
// var hari= parseInt(prompt("Masukkan angka \n 1-7"));
// if(hari >=1 &&hari <=10){
//     switch(hari){
//         case 1:
//             alert("Senin");
//             break;
//         case 2:
//             alert("Selasa");
//             break;
//         case 3:
//             alert("Rabu");
//             break;

//         case 4:
//             alert("Kamis");
//             break;
//         case 5:
//             alert("Jumat");
//             break;
//         case 6:
//             alert("Sabtu");
//             break;
//         case 7:
//             alert("Minggu");
//             break;
//         default:
//             alert("heyy nomor 1-7 woy");
//             break;
//     }
// }



