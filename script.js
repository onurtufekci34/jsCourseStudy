// // // // // // // // // // // console.log('merhaba');



// // // // // // // // // // //DEGISKENLER
// // // // // // // // // // var age = 19;
// // // // // // // // // // console.log(age);





// // // // // // // // // let firstName = 'onur';
// // // // // // // // // console.log(typeof firstName);


// // // // // // // // // let names = [ 'ali', 'veli', 'ahmet'];
// // // // // // // // // console.log(typeof names);


// // // // // // // // // let adress = {
// // // // // // // // //     city:'istanbul',
// // // // // // // // //     country:'turkey'
// // // // // // // // // }
// // // // // // // // // console.log(typeof adress);

// // // // // // // // // var calculateAge = function(){
// // // // // // // // //     return 0;
// // // // // // // // // };

// // // // // // // // // console.log(typeof calculateAge)


// // // // // // // // // const a = 'onur'


// // // // // // // // // a = 'ahmet'
// // // // // // // // // console.log(a);

// // // // // // // // // let num1 = '5';
// // // // // // // // // let num2 = 10;

// // // // // // // // // console.log(num1 + num2);
// // // // // // // // let val;

// // // // // // // // val = String(10);

// // // // // // // // val = new Date();


// // // // // // // // val = String([1,2,3,4]);




// // // // // // // // //string to number


// // // // // // // // val = Number('10');

// // // // // // // // val =Number(true);

// // // // // // // // val = Number(false);

// // // // // // // // val = Number('a');


// // // // // // // // //parseInt
// // // // // // // // //parseFloat

// // // // // // // // val = parseFloat('10.5');

// // // // // // // // console.log(val);
// // // // // // // // console.log(typeof val);
// // // // // // // // console.log(val.length);


// // // // // // // var customerName = 'onur'
// // // // // // // var customerLastName = 'tufekci';
// // // // // // // var fullName = 'onur tufekci'
// // // // // // // var customerId = '123123123';

// // // // // // // var total = 205.6;
// // // // // // // var gender = true; // erkek true

// // // // // // // var adress ={
// // // // // // //     city:'kocaeli',
// // // // // // //     district:'izmit',
// // // // // // //     body:'kayisdagi mh. no:2'

// // // // // // // }

// // // // // // // var hobbies = ['sinema', 'kitap', 'spor' ];

// // // // // // // var order1= Number('100');
// // // // // // // var order2= Number('150');



// // // // // // // var totalOrder = order1 + order2;

// // // // // // // console.log(totalOrder);


// // // // // // // var order3 = 100.2;
// // // // // // // var order4 = 150.5;

// // // // // // // var totelOrder2 = order3 + order4;
// // // // // // // console.log(parseInt(totelOrder2));



// // // // // // // var yearOfBirth = 1985;

// // // // // // // console.log(new Date().getFullYear()-yearOfBirth);

// // // // // // // var course = 'Modern Javascript Kursu';

// // // // // // // console.log(course.length);

// // // // // // let val;
// // // // // // const a= 10;
// // // // // // const b= 5;
// // // // // // let c= 3;
// // // // // // val = a+b;

// // // // // // val = a-b;

// // // // // // val = a*b;

// // // // // // val = a%b;

// // // // // // let = c++;


// // // // // // console.log(c);

// // // // // // val = a;
// // // // // // val +=a; // val = val +a   mantigi bu 



// // // // // // val = a==b;

// // // // // // val = a != b; // esit degil mi sorusu








// // // // // // console.log(val);
// // // // // // console.log(typeof val);





// // // // // let d = new Date();

// // // // // console.log(d.getDate());
// // // // // console.log(d.getDay()); // haftanin kacinci gunu 0 pazar



// // // // // console.log(d);
// // // // // console.log(typeof d);





// // // // var dt = new Date();


// // // // console.log(dt);
// // // // console.log(dt.getMonth());
// // // // console.log(dt.getDate());
// // // // console.log(dt.getFullYear());



// // // // var dtA = new Date('8/5/1985');
// // // // var dtB = new Date(1985,7,5,13,14,15,34);



// // // // console.log(dtA);
// // // // console.log(dtB);


// // // // var dtC = new Date('1/1/1990');
// // // // var dayOfMonth = dtC.getDate();
// // // // dtC.setDate(dayOfMonth-1);


// // // // console.log(dtC);


// // // // var start = new Date('3/25/1990');
// // // // var finish = new Date('')


// // // var dt = new Date();


// // // console.log(dt);
// // // console.log(dt.getMonth());
// // // console.log(dt.getDate());
// // // console.log(dt.getFullYear());



// // // var dtA = new Date('8/24/2010 14:50:10');
// // // var dtB = new Date(2010, 7,24,14,50,10);

// // // console.log(dtA);
// // // console.log(dtB);



// // // var dtC = new Date('1/1/1990');
// // // console.log(dtC);
// // // var dayOfMonth = dtC.getDate();
// // // dtC.setDate(dayOfMonth-1);



// // // console.log(dtC);


// // // var start = new Date(1990,3,25);
// // // var end = new Date();


// // // var miliSecond = end -start;
// // // var saniye = miliSecond / 1000;
// // // var dakika = saniye / 60 ;
// // // var saat = dakika / 60;
// // // var gun = saat / 24;
// // // var ay = gun / 30;
// // // var yil = ay / 12;

// // // console.log('milisecond :' + miliSecond )
// // // console.log('saniye : ' + saniye);
// // // console.log('dakika : ' + dakika);
// // // console.log('saat : ' + saat);
// // // console.log('gun : ' + gun);
// // // console.log('ay : ' + ay);
// // // console.log('yil : ' + yil);


// // // var annelerGunu = new Date();
// // // annelerGunu.setHours(0,0,0,0);
// // // annelerGunu.setFullYear(2019);
// // // annelerGunu.setDate(1);
// // // annelerGunu.setMonth(4);
// // // console.log(annelerGunu);

// // // console.log(annelerGunu.getDay());
// // // while(annelerGunu.getDay() != 0){
// // //     annelerGunu.setDate(annelerGunu.getDate()+1)
// // // }
// // // console.log(annelerGunu);

// // // annelerGunu.setDate(annelerGunu.getDate()+7);
// // // console.log(annelerGunu);



// // //Numbers

// // let val;

// // // val =10;
// // // val = Number('10');
// // // val = parseInt('10');
// // //val = parseInt('a10.a');
// // //val = isNaN('10');
// // var num = 10.12343434;
// // val = num.toPrecision(5); //ilk bes
// // val = num.toFixed(2); //virgulden sonra 2

// // val = Math.PI;
// // val = Math.round(2.4);//en yakin sayiya yuvarlar
// // val = Math.ceil(2.3);//her zaman yukari yuvarlar
// // val = Math.floor(2.6);//her zaman asagi yuvarlar
// // val = Math.sqrt(64);//karekok alir
// // val = Math.pow(2,4);//2 uzeri 4 yapar
// // val = Math.abs(-100);//mutlak deger
// // val = Math.min(1,3,5,6,7,9);//en kucuk sayiyi verir
// // val = Math.max(1,2,3,4,5,7,8);//en buyuk sayiyi verir
// // val = Math.random()*10;//rastgele bir sayi uretir 0 ile 1 arasinda ama 10 ile carparak 0 ile 9 arasi yapariz 
// // val = Math.floor(Math.random()*10);//bu da asagi yuvarlar


// // console.log(val);
// // console.log(typeof val);

// var num = 15.123456789;

// //toplamda 3 basamakli sayi kullan
// console.log(num.toPrecision(3));

// //ondalik kismi 3 basamakta sinirla
// console.log(num.toFixed(3));

// //en yakin sayiya yuvarla
// console.log(Math.round(num));

// //asagi yuvarla
// console.log(Math.floor(num));

// //yukari yuvarla
// console.log(Math.ceil(num));

// //sayi araligini kullanicinin belirleyecegi rastgele bir sayi uretin
// var min = 50;
// var max = 100;

// console.log(min+Math.random()*(max-min));

// //bir personelin yaptigi mesaiyeye gore aldigi maasi hesaplayalim
// // brut maas 3700tl
// // brut mesai 10.3 tl
// // agustos ayi mesai toplami 42 saat ise toplam brut maas nedir?
// // brut maas uzerinden toplam kesinti orani %25 ise alinacak toplam 
// // net maas nedir?

// var brutMaas = 3700;
// var mesaiUcreti = 10.3;
// var mesaiSuresi = 42;

// var toplamBrutMaas = brutMaas + (mesaiUcreti*mesaiSuresi);

// var toplamNetMaas = toplamBrutMaas - toplamBrutMaas*0.25;

// console.log(toplamBrutMaas.toFixed(2), toplamNetMaas.toFixed(2));

//Strings


const firstName = 'Onur';
const lastName = 'Tufekci'
const age = 35;
let hobbies = 'cinema,football,reading,coding '
let val;


//string concat

val = firstName + ' ' + lastName;
val = 'Onur';
val += ' Tufekci';

val = 'Benim adim '+firstName+' '+lastName+' ve yasim ' + age+ " istanbul'da yasiyorum";//ya cift tirnak ya da tek tirnak onune ters slas koy
val = firstName.concat(' ',lastName);
//string length
//val = val.length;

//string uppercase lowecase
val = val.toUpperCase();
val = val.toLowerCase();
//val = val.indexOf('t');//o karakterin kacinci deger oldugu

//string replace
val = val.replace('onur','baharnur');

//string trim
//bas ve sonda ki bosluklari alir



//substring
//val = val.substring(2,4);//arasi
//val = val.slice(5);//5 den sonra
val = hobbies.split(',');

console.log(val);
console.log(typeof val);

























































 
































