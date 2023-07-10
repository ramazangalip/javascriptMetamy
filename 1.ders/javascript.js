function myFunction3(){
    document.getElementById('demo2').innerHTML = 'External Sscript Çalıştı'
}

// var x = 5 ;
// var y = 6 ; 
// var z = x + y;

// console.log(z);

// const değişmeyen ifadeler için kullanılır;
// ilk değer ataması zorunludur
const a = 5;

console.log(a);


// x  = y; // y değişkenin değeri x e atanır
// x == y ; // x ile y karşılaştırması vardır

const pi = 3.14;

console.log(pi);

//let blok kapsamına

{
    let b1 = 3;
    console.log(b1)
}
let b1 = 5;
console.log(b1)

// arrays,object,function da const kullanılır.


const cars = ["volvo","wolkswagen","dacia"]
console.log(cars)
console.log(cars[1])

cars.push('Range Rover')
console.log(cars)

// operators

let x = 3;
let y = 5;

let z  = x * y;

console.log(z)


let text1 = 'Ramazan'

let text2 = 'Esma'
let text3 = text1 + ' ' + text2
console.log(text3)

let text4 = 'ne güzel'
text4 += 'bir gün '

console.log(text4)

//data type:
let length = 16 //numbers

let color = 'red' //string

//boolean

let değişkenin = true;
let değişkenin2 = false;

//object

const person = {firstname:'Ramazan',lastname:'Galip'}

const date = new Date("2023-03-25")
console.log(date)

