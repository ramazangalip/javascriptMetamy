// for(let i = 0;i<11;i++){
//     console.log(`i değeri : ${i} döngü çalıstı`)

// }

// ilk kısım hakkında
// let i = 0
// for(;i<5;i++){
//      console.log(`i değeri : ${i} döngü çalıstı`)
    
//     }

// const cars = ["Bmw","Volvo","Ford"]
// let i = 0;
// let len = cars.length;
// let text = "";
// for(;i<len;i++){
//     text+= cars[i] + "\n"
// }
// console.log(text)


// const arr = [1,2,3,4,5,6,7,8,9]

// for(let l = 0,r = arr.length - 1;l<r ; l++,r--){
//     console.log(arr[l],arr[r])
// }

// for in //nesne özellikleri arasında geçiş yapar,dizide de kullanılır

// const person = {
//     ad:"Ramazan",soyad:"Galip",yas:16
// }
// let text = ""
// for(let x in person){
//     console.log(x)
//     text += person[x]

// }
// console.log(text)


// const number = [43,4,2,30]
// for(let x in number){
//     console.log(x,number[x])
// }


// const number = [43,4,2,30]
// let text = ""
// number.forEach(myFunction)
// function  myFunction(value,index,array){
//     console.log("value:",value)
//     console.log("index:",index)
//     console.log("array:",array)
//     text += value
// }
// console.log(text)


// let language = "Javascript"
// let text  = ""
// for(let x in language){
//     console.log(x,language[x])
// }

// const cars = ["Dacia","Fiat","BMW"]
// // const cars =  "Mercedes"
// let text = ""
// for(let x of cars){
//     console.log(x)
// }

// while
// let i = 0;

// while(i <10){
//     console.log(i)
//     i++;
// }

// do-while

// let i = 0;

// do{
//     console.log(i)
//     i++;
// }
// while(i<10)

// break continue ifadeleri

// for(let i=0;i<10;i++){
//     if(i===3){
//         // break;
//         continue;
//     }
//     console.log(i)
// }


//js errors

// try{
//     console.log("mesajınız")
// }
// catch(err){
//     console.log(err.message)
// }

// finally{
//     console.log("son mesaj")
// }


// let x = ""
// try{
//     if(x.trim() == "") throw "empty value";
// }
// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("son mesaj")
// }
// let x = NaN
// try{
//     if(isNaN(x)) throw "value NaN";
// }
// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("son mesaj")
// }
// let x = "12"
// try{
//     x = Number(x);
//     if(x<5) throw "cok kucuk"
//     if(x>10) throw "çok büyük"
// }
// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("son mesaj")
// }

// this kullanımı
// console.log(this)
// Window.alert("bu bir uyarıdır")

// const person = {
//     name:"Ramazan",
//     description:function(){
//         return this;
//     }
// }
// console.log(person.description())

// constructor fonksiyonlar
// const person = {
//     name:"Ramazan",
//     description:function(){
//         return this;
//     }
// }
// const person2 = {
//     name:"esma",
//     surname:"galip"
// }

// function Person(first,last,age,eye){
//     this.firstname = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.showInfos = function(){
//         console.log(this.firstname,"",this.lastName,"",this.age)
//     }
// }
// const myFather = new Person("John","Day",50,"blue")
// myFather.showInfos();
// const MyMother = new Person("Mary","Day",50,"green")
// MyMother.showInfos();


// class Person {
//     constructor(first,last,age,eye){
//         this.firstname = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eye;
//     }
//     showInfos(){
//         console.log(this.firstname,"",this.lastName,"",this.age)
//     }
// }
// const myFather  = new Person("John","Day",50,"green")
// console.log(myFather)

// new Person()

//es6 arrow function

// function myFunction(){
//     console.log("hello world")
// }
// myFunction();


// let myFunction = () => {
//     return "Hello World"
// }
// console.log(myFunction())

const person = {
    name:"Johny",
    age:30,
    eyeColor:"blue",
    description:function(){
        return this
    }
}
console.log(person.description())

// arrow fonksiyonu içindeki this kendi kapsamını değil global kapsamı gösterir.
