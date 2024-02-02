// // Penggunaan IF ELSE
// var angka = parseInt(prompt("masukkan angka"));
// if(angka ===1){
//     alert("anda memasukkan angka 1");
// } else if(angka ===2){
//     alert('anda memasukkan angka 2');
// }else{
//     alert('angka anda salah');
// }

// Penggunaan Switch dari contoh diatas
// var angka = prompt("masukkan angka");
// switch(angka){
//     case  '1': 
//         alert("anda memasukkan angka 1");
//         break;
//     case '2':
//     alert('anda memasukkan angka 2');
//         break;
//     default:
//         alert('angka anda salah');
//         break;
// }

var produk = prompt('Pilih makanan dan minuman: \n daging sapi, jus mangga, nasi goreng, coca-cola, pizza, ale-ale');

switch(produk){
    case 'daging sapi' :
        alert("Makanan dan minuman sehat!!!");
        break;
    case 'jus mangga' :
        alert("Makanan dan minuman sehat!!!");
        break;
    case 'nasi goreng' :
        alert("Makanan dan minuman sehat!!!");
        break;
    case 'coca-cola' :
        alert("Makanan dan minuman  tidak sehat!!!");
        break;
    case 'pizza' :
        alert("Makanan dan minuman tidak sehat!!!");
        break;
    case 'ale-ale' :
        alert("Makanan dan minuman tidak sehat!!!");
        break;
    default:
        alert("ketikan makanan dan minuman sesuai instruksi");
        break;
}
