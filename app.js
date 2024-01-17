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


// const password = prompt('buat password');

// if (password.length >= 6 ) {
//     if (password.indexOf(' ')=== -1) {
//         console.log('Password Valid');
//     } else {
//         console.log('Password tidak boleh ada spasi');
//     }
    
// }else{
//     console.log('Password minimal 6 karakter');
// }

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Password Valid');
// } else {
//     console.log('Password tidak memenuhi syarat');
// }

// const role = prompt('masukan role akun');

// if (role != 'admin') {
//     console.log('akses ditolak');
// } else {
//     console.log('boleh mengaksesnya');
// }

// const balonku = prompt('masukan warna balon');
// switch (balonku) {
//     case 'merah':
//         console.log('warna merah');
//         break;
//     case 'hijau':
//         console.log('dorr');
//         break;
//     default:
//         console.log('bukan balon saya');
        
// }


// for (let i = 0; i <= 10; i++) {
//     console.log('Saya Dalam Looping');
//     console.log(i);
    
// }
// for (let i = 1; i <= 20; i +=2) {
//     console.log(i);
    
// }

// const animals = ['kucing', 'kelinci', 'kuda', 'sapi', 'kambing'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i + 1,animals[i]);
    
// }

// const pilihan = 'abcd';

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. Soal nomor ${i}:`);
//     for (let j = 0; j < pilihan.length; j++) {
//         console.log(`       ${pilihan[j]}. Pilihan Jawaban`);
        
//     }
    
// }


// const studentRow = [
//     ['Dicky','Meli','Rizky','Arya'],
//     ['Rahmat','Rizal','Fakhri','Farhan'],
//     ['Azman','Bang Jef','Tod','Yayan']
// ];

// for (let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i];

//     console.log(`Seat Row #${i+1}`);
    
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
        
//     }
    
// }

// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
    
// }

// const PASSWORD = 'Pass1234';

// let guess = prompt('Masukan Password');
// while (guess !== PASSWORD) {
//     guess = prompt('Masukan Password');
    
// }
// alert('Password Benar');

// let input = prompt('Hei,say something');
// while (true) {
//     input = prompt(input);
//     if(input.toLowerCase() === 'stop')break;
// }
// alert('ok');

// let maximum = parseInt(prompt("Masukan Angka Maximum!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Masukan Angka Maximum!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Masukan Angka Tebakan!"));
// let attempt = 1;

// while (parseInt(guess) !== targetNum) {
//     attempt++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt("Terlalu Tinggi! Masukan Angka Tebakan!"));
//     } else {
//         guess = parseInt(prompt("Terlalu Rendah! Masukan Angka Tebakan!"));
//     }
    
// }
// alert(`Kamu Menang! Dengan ${attempt} Percobaan`);

// const fruits = ['apel', 'mangga', 'jeruk', 'pisang', 'anggur'];

// for(let fruit of fruits){
//     console.log(`Buah ${fruit}`);
    
// }

// const studentScore = {
//     Dicky:90,
//     Meli:80,
//     Rizky:70,
//     Arya:60,
//     Farhan:50,
//     Fakhri:40,
//     Yayan:30,
//     Rahmat:20,
//     Rizal:10,
//     Azman:80

// };

// for (let student in studentScore) {
//     console.log(`${student} memiliki nilai ${studentScore[student]}`);
    
// }

// let total = 0;    
// let scores = Object.values(studentScore);

// for (let score of scores) {
//     total += score;
    
// }
// console.log(total / scores.length);

// function nyanyi() {
//     console.log('la la la');
//     console.log('la la la');
// }

// nyanyi();

// function getName(name)
// {
//     console.log(`Hello, ${name}`, 'Selamat Pagi');
// }

// getName('Meli');

// function jumlah(a,b){
    // const total = a + b;
//     return total;
//     console.log('tidak akan tereksekusi');
// }

// jumlah(3,4);

// let programming = 'Javascript';

// function typeSafe(){
//    let programming = 'PHP';
//     console.log(programming);
// }

// typeSafe();

// console.log(programming);

// function lamarKerja() {
//     const jabatan = 'Frontend Developer';

//     function interview() {
//         console.log(`Saya melamar sebagai ${jabatan}`);
        
//     }

//     interview();
// }

// function perpangkatan(nilai) {
//     return nilai * nilai;
// }

// let hasil = perpangkatan(5);


// function duaKali(func){
//     func();
//     func();
// }

// function lemparDadu(){
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

// function hasilnyaAdalahFunction(){
//     const rand = Math.random();
//     if (rand > 0.1) {
//         return function(){
//             console.log('Selamat, angkanya lebih besar');
//         };
//     }else {
//         return function(){
//             console.log('Maaf, angkanya lebih kecil');
//         }
//     }
// }

// function myFun(){
//     console.log('Hello');
//     return 123;
// }

// const myMath = {
//     perkalian: function(a,b){
//         return a * b;
//     },
// };

// const saya = {
//     nama: 'Dicky',
//     umur: 24,
//     hobi: 'Mencintai Meli',

//     kenalan: function(){
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun , dan hobi saya ${this.hobi}`);
//     }
// }

// try {
//     saya.Kenalan();
// } catch (error) {
//     console.log('Error');
// }

// // saya.kenalan();
// console.log('Setelah Error');

// function teriak(msg){
//     try {
//         console.log(msg.toUpperCase(). repeat(3));
//     } catch (error) {
//         console.log(error);
//         console.log('Masukan String');
//     }
// }

// const angka = [1,2,3,4,5,6,7,8,9,10];
// const angkaDouble = angka.map(function(num){
//     return num * 2;
// });

// angka.forEach(function(el){
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });

// const anime = [
//     {
//         title: 'Naruto',
//         rating: 100,
//         year: 2000,
//     },
//     {
//         title: 'One Piece',
//         rating: 95,
//         year: 1999,
//     },
//     {
//         title: 'Dragon Ball',
//         rating: 85,
//         year: 1998,
//     },
//     {
//         title: 'Bleach',
//         rating: 80,
//         year: 1997,
//     },
//     {
//         title: 'Hunter X Hunter',
//         rating: 70,
//         year: 1996,
//     },
// ];
// const isAnime = anime.some(function(anime){
//     return anime.year < 2000;
// });
// const titles = anime.map(function(anime){
//     return anime.title.toUpperCase();
// });

// anime.forEach(function(anime){
//     console.log(`${anime.title} - ${anime.rating}/100`);
// });

// const perpangkatan = (x) => {
// return x * x;
// };

// const random = () => (

//     Math.floor(Math.random() * 10)
// );

// console.log('Halo');
// setTimeout(()=>{
//     console.log('Halo Lagi');
// }, 5000);
// console.log('Selamat Tinggal');

// const interval = setInterval(()=>{
//     console.log(Math.random());
// }, 2000);

// const angka = [1,3,5,7,9];
// const angkaGanjil = angka.filter((n)=>{
// return n % 2 === 1;
// });

// const animes = [
//     {
//         title: 'Naruto',
//         rating: 100,

//     },
//     {
//         title: 'One Piece',
//         rating: 95,
//     },
//     {
//         title: 'Dragon Ball',
//         rating: 85,
//     },
//     {
//         title: 'Bleach',
//         rating: 80,
//     },
//     {
//         title: 'Hunter X Hunter',
//         rating: 70,
//     },
// ];

// const bestAnime = animes.reduce((best, anime)=>{
//     if (anime.rating > best.rating) {
//         return anime;
//     }
//     return best;
// });

// const animeRating = animes.filter((anime)=>{
//     return anime.rating >= 80;
// });

// const examScore = [80, 90, 70, 60, 50, 100];
// const total = examScore.reduce((total, score)=>{
//     return total + score;
// });
// let total = 0;
// for (let score of examScore) {
//     total += score;
    
// }
// const isGoodScore = examScore.every((score)=>{
//     return score >= 75;
// });

// const person = {
//     'firstname': 'Dicky',
//     'lastname': 'Meli',
//     fullname: () => {
//         console.log(this);
//         return `${this['first name']} ${this['last name']}`;
//     },
//     panggilNanti: function(){
//         setTimeout(()=>{
//             console.log(this);
//             // console.log($this.firstname);
//         }, 3000);
//     }

// };

// function lemparDadu(sisi = 6 ){
//     return Math.floor(Math.random() * sisi) + 1;
// }

// const angka = [1,2,3,4,5,6,7,8,9,10];
// const nama = ['Dicky', 'Meli', 'Rizky', 'Arya', 'Farhan', 'Fakhri', 'Yayan', 'Rahmat', 'Rizal', 'Azman'];

// const campuran = [...angka,...nama];

// const user = {
//     name: 'Dicky',
//     email: 'dicky@gmail'
// };
// const credetials = {
//     password: '1234',
// };

// const userBaru ={
//     ...user,
//     name: 'Dicky',
//    ...credetials
// };


