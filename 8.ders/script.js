// document.getElementById("head").style.color  = "blue"
// let myTitle = document.getElementById("head").innerHTML="DOM ders 1"
// console.log(myTitle)
// let myTitle2 = document.getElementById("head").firstChild
// console.log(myTitle2)
// let myTitle3  = document.getElementById("head").childNodes[0].nodeValue
// console.log(myTitle3)
// console.log(document.head.innerHTML)
// const para =document.createElement("p")
// const node = document.createTextNode("this is new")
// para.appendChild(node)
// const element = document.getElementById("div1")
// const child = document.getElementById("p1")
// // element.appendChild(para)
// element.insertBefore(para,child)
// const elemnt = document.getElementById("p1")
// elemnt.remove()

// const myNodeList  =document.querySelectorAll("p")
// console.log(myNodeList[0])
// const myNodeList2 = document.querySelectorAll("#p1")     
// console.log(myNodeList2)
// const myNodeList3 = document.querySelectorAll(".param")
// console.log(myNodeList3)

//local storage sadece string kayıt alır ve her seferinde üzerine yazar

// localStorage.setItem("name","Ramazan Said Galip")

// const item = localStorage.getItem("name")
// console.log(item)
// localStorage.setItem("name",["Ali","Veli","Abdullah"])
// const item2 = localStorage.getItem("name")
// console.log(item2)

// const name = ["ayşe","fatma"]
// localStorage.setItem("name",JSON.stringify(name))
// const item = JSON.parse(localStorage.getItem("name"))
// console.log(item)

// const name = ["ayşe","fatma"]
// localStorage.getItem("name",JSON.stringify(name))
// const name2 = [...JSON.parse(localStorage.getItem("name")),"ramazan"]
// localStorage.setItem("name",JSON.stringify(name2))
// const item2 = JSON.parse(localStorage.getItem("name"))
// console.log(item2)
// // localStorage.removeItem("name")

// //session storage
// //geçici kayıt yeri - sayfayı kapatınca silinir.

// sessionStorage.setItem("name","mustafa")

// const xhttp  =new XMLHttpRequest();
// xhttp.onload = function(){
//     //yüklendiğinde ne olması gerektiğini söyler
//     document.getElementById("demo").innerHTML = this.responseText
// }
// xhttp.open("GET","ajax.txt")
// xhttp.send();

// const xhttp = new XMLHttpRequest();
// xhttp.onload = function(){
//     document.getElementById("demo").innerHTML = this.responseText
//     console.log(JSON.parse(this.responseText).age)

// }
// xhttp.open("GET","ajax.json")
// xhttp.send()

// const xhttp  = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     console.log(this.readyState)
//     console.log(this.status)
// }
// xhttp.onload = function(){
//     document.getElementById("demo").innerHTML = this.responseText
//     console.log(this)
// }
// xhttp.open("GET","ajax.txt")
// xhttp.send();

//fetc apı

// function fetchResponse(){
// //     fetch("ajax.txt")
// //     .then(response => console.log(response))
// // }
// // fetchResponse()

