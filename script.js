// // // // // // // // console.log('merhaba');



// // // // // // // //DEGISKENLER
// // // // // // // var age = 19;
// // // // // // // console.log(age);





// // // // // // let firstName = 'onur';
// // // // // // console.log(typeof firstName);


// // // // // // let names = [ 'ali', 'veli', 'ahmet'];
// // // // // // console.log(typeof names);


// // // // // // let adress = {
// // // // // //     city:'istanbul',
// // // // // //     country:'turkey'
// // // // // // }
// // // // // // console.log(typeof adress);

// // // // // // var calculateAge = function(){
// // // // // //     return 0;
// // // // // // };

// // // // // // console.log(typeof calculateAge)


// // // // // // const a = 'onur'


// // // // // // a = 'ahmet'
// // // // // // console.log(a);

// // // // // // let num1 = '5';
// // // // // // let num2 = 10;

// // // // // // console.log(num1 + num2);
// // // // // let val;

// // // // // val = String(10);

// // // // // val = new Date();


// // // // // val = String([1,2,3,4]);




// // // // // //string to number


// // // // // val = Number('10');

// // // // // val =Number(true);

// // // // // val = Number(false);

// // // // // val = Number('a');


// // // // // //parseInt
// // // // // //parseFloat

// // // // // val = parseFloat('10.5');

// // // // // console.log(val);
// // // // // console.log(typeof val);
// // // // // console.log(val.length);


// // // // var customerName = 'onur'
// // // // var customerLastName = 'tufekci';
// // // // var fullName = 'onur tufekci'
// // // // var customerId = '123123123';

// // // // var total = 205.6;
// // // // var gender = true; // erkek true

// // // // var adress ={
// // // //     city:'kocaeli',
// // // //     district:'izmit',
// // // //     body:'kayisdagi mh. no:2'

// // // // }

// // // // var hobbies = ['sinema', 'kitap', 'spor' ];

// // // // var order1= Number('100');
// // // // var order2= Number('150');



// // // // var totalOrder = order1 + order2;

// // // // console.log(totalOrder);


// // // // var order3 = 100.2;
// // // // var order4 = 150.5;

// // // // var totelOrder2 = order3 + order4;
// // // // console.log(parseInt(totelOrder2));



// // // // var yearOfBirth = 1985;

// // // // console.log(new Date().getFullYear()-yearOfBirth);

// // // // var course = 'Modern Javascript Kursu';

// // // // console.log(course.length);

// // // let val;
// // // const a= 10;
// // // const b= 5;
// // // let c= 3;
// // // val = a+b;

// // // val = a-b;

// // // val = a*b;

// // // val = a%b;

// // // let = c++;


// // // console.log(c);

// // // val = a;
// // // val +=a; // val = val +a   mantigi bu 



// // // val = a==b;

// // // val = a != b; // esit degil mi sorusu








// // // console.log(val);
// // // console.log(typeof val);





// // let d = new Date();

// // console.log(d.getDate());
// // console.log(d.getDay()); // haftanin kacinci gunu 0 pazar



// // console.log(d);
// // console.log(typeof d);





// var dt = new Date();


// console.log(dt);
// console.log(dt.getMonth());
// console.log(dt.getDate());
// console.log(dt.getFullYear());



// var dtA = new Date('8/5/1985');
// var dtB = new Date(1985,7,5,13,14,15,34);



// console.log(dtA);
// console.log(dtB);


// var dtC = new Date('1/1/1990');
// var dayOfMonth = dtC.getDate();
// dtC.setDate(dayOfMonth-1);


// console.log(dtC);


// var start = new Date('3/25/1990');
// var finish = new Date('')


var dt = new Date();


console.log(dt);
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getFullYear());



var dtA = new Date('8/24/2010 14:50:10');
var dtB = new Date(2010, 7,24,14,50,10);

console.log(dtA);
console.log(dtB);



var dtC = new Date('1/1/1990');
console.log(dtC);
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);



console.log(dtC);


var start = new Date(1990,3,25);
var end = new Date();


var miliSecond = end -start;
var saniye = miliSecond / 1000;
var dakika = saniye / 60 ;
var saat = dakika / 60;
var gun = saat / 24;
var ay = gun / 30;
var yil = ay / 12;

console.log('milisecond :' + miliSecond )
console.log('saniye : ' + saniye);
console.log('dakika : ' + dakika);
console.log('saat : ' + saat);
console.log('gun : ' + gun);
console.log('ay : ' + ay);
console.log('yil : ' + yil);


var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);
console.log(annelerGunu);

console.log(annelerGunu.getDay());
while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
console.log(annelerGunu);

annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);









































 
































