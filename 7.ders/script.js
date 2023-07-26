// js async,await

// function myFunction(){
//     return Promise.resolve("Hello")
// }
// async function myFunction(){
//     return "Hello"
// }

// myFunction().then(function(value){console.log(value +  " "+"World")})
// function resolveAfter2Seconds(x){
//     return new Promise((resolve)=> {
//         setTimeout(()=>{
//             resolve(x);
//         },5000)
//     })
// }




// async function f1(){
//     const x = await resolveAfter2Seconds(10);
//     console.log(x);
// }
// f1()
// async function test(data){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(data){
//                 resolve("bu bir değerdir")
//             }else{
//                 reject("Bu bir değer değildir")
//             }
//         },5000)
//     })
//     console.log("promise bekleniyor")
//     let response = await promise
//     console.log("promise bitti")
//     return promise
// }
// test("değer").then(resolve => console.log(resolve),reject => console.log(reject))

// async function  testData(data){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof data === "string")
//             {
//                 resolve(data)
//             }
//             else{
//                 reject(new Error("Lütfen String bir değer giriniz:"))
//             }
//         },5000)
//     })
//     const response = await promise;
//     return response
// }
// testData("hello")
// .then(data=> console.log(data))
// .catch(err => console.log(err))

// const a = new Error("error")
// console.log(a)

//  dom (document object model)

// document.getElementById("demo").innerHTML = "Hello World"

// document.getElementsByTagName("p")
// document.getElementsByClassName("intro")
// document.querySelectorAll("p.intro")
// document.forms["frm1"] // name i frm1 olan formları alır

// document.getElementById("p1").innerHTML = "Merhaba Dünya"

// function validateForm(){
//     let x = document.forms["myForm"]["fname"].value
//     console.log(isNaN(x))
//     if(!isNaN(x)){
//         alert("isim Yazmak Zorunludur")
//         return false;
//     }
//     alert("giriş başarılı")
// }

// document.getElementById("p2").style.color  = "blue"
// document.getElementById("p2").style.backgroundColor = "yellow"

// function changeColor(){
//     let x  = document.getElementById("id1").style.color = "red"
// }
// function hide(){
//     let x  = document.getElementById("p2").style.visibility = "hidden"
// }
// function show(){
//     let x  = document.getElementById("p2").style.visibility = "visible"
// }
// function upperCase(){
//     const x = document.getElementById("fname")
//     x.value = x.value.toUpperCase()
//     console.log("çalıştı")
// }
// function mOver(obj){
//     obj.innerHTML = "Thank You"
// }
// function mOut(obj){
//     obj.innerHTML = "Mouse Over Me"
// }
// document.getElementById("myBtn").addEventListener("click",function(){
//     alert("Hello World")
// })
// var x = document.getElementById("myBtn");
// x.addEventListener("mouseover",myFunction);
// x.addEventListener("click",mySecondFunction)
// x.addEventListener("mouseout",myThirdFunction)
// function myFunction(){
//     document.getElementById("demo").innerHTML += "Moused Over!<br>"
// }
// function mySecondFunction(){
//     document.getElementById("demo").innerHTML += "Clicked!<br>"
// }
// function myThirdFunction(){
//     document.getElementById("demo").innerHTML += "Moused Out!<br>"
// }

// document.getElementById("myP1").addEventListener("click",function(){
//     alert("myP1")
// },false)

