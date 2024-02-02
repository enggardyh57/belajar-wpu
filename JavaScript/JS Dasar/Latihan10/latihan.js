// J. Mencetak
// ****
// *  *
// *  *
// *  *
// ****

// var n = 10;
// var bintang = "";

// for(var i = 1; i < n; i++){
// 	for(var j = 1; j < n; j++){
// 		if(i === 1 || i ===  n-1){
// 			bintang += "*"
// 		} else{
// 			if(j ===1 || j === n-1){
// 				bintang += "*"
// 			} else{
// 				bintang += " "
// 			}
// 		}
// 	}
// 	bintang += "\n"
// }
// console.log(bintang)


// K. Mencetak 
// 	   *
//    ***
//   *****
//  *******
// *********


// var n = 10;
// var bintang = "";

// for(var i = 1; i <= n; i++){
// 	for(var s = 1; s <= n-i; s++){
// 		bintang += " "
// 	}
// 	for(var j = 1; j <= 2 * i-1;j++){
// 		bintang += "*"
// 	}
// 	bintang += "\n"
// }
// console.log(bintang)



// L. Mencetak 
// *********
//  *******
//   *****
//    ***
//     *

// var n = 10;
// var bintang = "";


// for(var i = 0; i <= n-1; i++){
// 	for(var s = 0; s < i; s++){
// 		bintang += " "
// 	}
// 	for(var j = 1; j <= 2 * (n-i)- 1 ; j++){
// 		bintang += "*"
// 	}
// 	// for(var j = 1)
// 	bintang += "\n"
// }
// console.log(bintang)
// M. Mencetak 
// 	   *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

// var n = 10;
// var bintang = "";

// for(var i = 1; i <= n; i++){
// 	for(var s = 1; s <= n-i; s++){
// 		bintang += " "
// 	}
// 	for(var j = 1; j <= 2 * i-1;j++){
// 		bintang += "*"
// 	}
// 	bintang += "\n"
// }
// for(var i = 1; i <= n-1; i++){
// 	for(var s = 1; s <= i; s++ ){
// 		bintang += " "
// 	}
// 	for(var j = (n-i) * 2- 1; j >= 1; j-- ){
// 		bintang += "*"
// 	}
// 	bintang += "\n"
// }

// console.log(bintang)

// N. Mencetak
// *********
//  *******
//   *****
//    ***
//     *
// 	   *
//    ***
//   *****
//  *******
// *********

// var n = 10;
// var bintang = "";

// for(var i = 0; i <= n-1; i++){
// 	for(var s = 1; s <=i ; s++){
// 		bintang += " "
// 	}
// 	for(var j = 1; j <= 2*(n-i)-1;j++){
// 		bintang += "*"
// 	}
// 	bintang += "\n"
// }
// for(var i = 1; i <= n; i++){
// 	for(var s = 1; s <= n-i; s++){
// 		bintang += " "
// 	}
// 	for(var j = 2 * i-1; j >= 1; j--){
// 		bintang += "*"
// 	}
// 	bintang += "\n"
// }

// console.log(bintang);

// O. Mencetak 
// # # #
//  # #
// # # #
//  # #
// # # #
// var n = 10;
// var bintang = "";

// for(var i = 1; i <= n; i++){
// 	if(i % 2 == 1){
// 		for(var j = 1; j <= n; j++){
// 			if(j % 2 == 1){
// 				bintang += "#"
// 			}
// 			else{
// 				bintang += " "
// 			}
// 		}
// 		bintang += "\n"
// 	}
// 	else{
// 	for(var j = 1; j <= n; j++){
// 			if(j % 2 == 1){
// 				bintang += " "
// 			}
// 			else{
// 				bintang += "#"
// 			}
// 		}
// 		bintang += "\n"
// 	}
// }
// console.log(bintang)





// var n = 5;

// for(var i = 0; i < n; i++){
// 	var baris = "";
// 	var angka = 1;

// 	for(var j = 1; j <= n-i; j++){
// 		baris += " ";
// 	}

// 	for(var j = 0; j <= i; j++){
// 		if(j > 0){
// 			angka = angka * (i - j + 1) / j;
// 		}
// 		baris += angka + " "
// 	}
// 	console.log(baris)
// }

var n = 1;
var bintang = "";
for(var i = 10; i >= n; i--){
 for(var s = 1; s <= i; s++){
  bintang += " "
 }
 for(var j = 10; j >= i; j--){
  bintang += "*"
 }
 bintang += "\n"
}
console.log(bintang)









