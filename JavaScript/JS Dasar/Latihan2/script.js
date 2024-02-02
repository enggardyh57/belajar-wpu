
// Alert adalah pesan singkat
// alert('Halo');
// alert('Nama');
// alert('Saya');
// alert('Enggar Dyah');

// Prompt pesan yang ada input data
// // prompt('Siapa namamu?');
// var nama_user = prompt('Siapa namamu?');
// alert("Halo " +  nama_user);

// Confirm pesan untuk pertanyaan konfirmasi
// var hasil= confirm("Apakah kamu yakin???");
// alert(hasil);


// Tes fungsi prompt pada percabangan
// var cek_data = confirm("Apakah kamu yakin ingin menghapus data?")
// if (cek_data === true) {
//     alert('User setuju');
// } else{
//     alert('User membatalkan');
// }

// Tes fungsi pada perulangan

alert("Selamat datang di indomaret")
var indomaret = true;

while (indomaret===true) {
    var namamu = prompt('Nama kamu siapa ?????');
    alert(" Halo selamat datang di Toko Kami  " + namamu)

    var indomaret = confirm("Apakah kamu ingin mengisi data lagi?");
}
alert("Terimakasih telah berbelanja di Indomaret " + namamu)