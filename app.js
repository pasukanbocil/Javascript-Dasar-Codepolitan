// alert(1 + 1);

// console.log('Hello World!');

// console.log('Sebelum Pembanding');
// if (1 + 1 === 2) {
//     console.log('Didalam Pembanding');
// }

// console.log('Setelah Pembanding');

// let angka = Math.random();
// console.log(angka);

// if (angka>= 0.5) {
//     console.log('Angka Lebih Besar Dari 0.5');
// }

// if (angka <= 0.5) {
//     console.log('Angka Lebih Kecil Dari 0.5');
    
// }

// const iniHari =prompt('Hari apa sekarang?').toLowerCase();

// if (iniHari=== 'senin') {
//     console.log('Selamat Bekerja Kawan')
// } else if(iniHari === 'selasa'){
//     console.log('Semoga Jangan Cepat Berlalu!')
// }else{
//     console.log('Yah Biasa Aja');
// }

// const nilai = '40';

// if (nilai < 50 ) {
//     console.log('E');
// } else if (nilai < 60) {
//     console.log('D');
    
// }else if (nilai < 70) {
//     console.log('C');
    
// }else if (nilai < 80) {
//     console.log('B');
// }else if (nilai < 100) {
//     console.log('A');
// }


const password = prompt('buat password');

if (password.length >= 6 ) {
    if (password.indexOf(' ')=== -1) {
        console.log('Password Valid');
    } else {
        console.log('Password tidak boleh ada spasi');
    }
    
}else{
    console.log('Password minimal 6 karakter');
}


