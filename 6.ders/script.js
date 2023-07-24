//json verileri depolamak için kullanılır

// let text = '{"firstname":"Ramazan","lastname":"Galip"}'
// console.log(text)

// let text2 = '{"employee":[{"firstname":"Ahmet","lastname":"Tarık"},{"firstname":"Tarık","lastname":"Ahmet"}]}'
// console.log(JSON.parse(text2))

// let object = {
//     firstname: "Ramazan",
//     lastname:"Galip"
// }


// console.log(JSON.stringify(object))

// let value = 24
// console.log( typeof value.toString())

// stringfy ifadesi json objesini dönüştürür.tipi text olsada dönüşümü json a özgüdür.String dönüşümü için kullanılan ifade toString dir.


// object details

// const person = {
//     firstname:"Mustafa",
//     lastname:"Önal",
//     age:"30",
//     eyeColor:"green"
// }
// const myArray = Object.values(person).toString()
// console.log(myArray)
// const myArray2 = Object.keys(person)
// console.log(myArray2)
// const myArray3 = Object.entries(person)
// console.log(myArray3)

// delete person.age;
// console.log(person)


// delete ile bir nesnenin bir alanını siler.


// function details


// function myFunction(x,y){
//     if( y === undefined){
//         y = 2 ; 
//     }
//     return x + y
// }
// console.log(myFunction(2))


// function myFunction(x,y=2){
//     return x+y

// }
// console.log(myFunction(1,5))

// function sum(...args){
//     console.log(args)
//     let sum = 0;
//     for(let arg of args){
//         sum += arg;

//     }
//     return sum;
// }
// let x = sum(1,2,3,5)
// console.log(x)


// function self1(){
//     console.log("self1 work")
// }
// // self1();
// (function self2(){
//     console.log("self2 work")
// })();
// //self-invoke
// class detail 

// class Car {
//     constructor(name) {
//         this.name = name
        
//     }
//     static hello(){
//         return "Static Hello!"
//     }
// }
// let myCar = new Car("Dacia")

// // console.log(myCar.hello())
// console.log(Car.hello())


// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age ;
//     }
//     showInfos(){
//         console.log("İsim:" +this.name + "Yaş:" +this.age)
//     }
// }
// class Employee extends Person {
//     constructor(name,age,salary) {
//         super(name,age);
//         this.salary = salary;
//     }
//     showInfos(){
//         console.log("İsim:" +this.name + "Yaş:" +this.age + "Maaş:" + this.salary)
//     }
//     raiseSalary(amount){
//         this.salary += amount
//     }
// }
// const per = new Person("Esma",10)
// const emp = new Employee("Ramazan",16,25000)
// console.log(emp)
// console.log(per)
// emp.raiseSalary(500)
// emp.showInfos()
// per.showInfos()



// callbacks

// function myDisplayer(message){
//     console.log(message)
// }
// function myFirst(){
//     myDisplayer("Hello")
// }
// function mySecond(){
//     myDisplayer("Goodbye")
// }
// myFirst();
// mySecond();

// function myDisplayer(some){
//     console.log(some)
// }
// function myCalculator(num1,num2){
//     let sum = num1 + num2;
//     myDisplayer(sum)
// }

// myCalculator(5,4)


// function myDisplayer(some){
//     console.log(some)
// }
// function  myCalculator(num1,num2){
//     let sum = num1 + num2
//     return sum;
// }
// let result = myCalculator(3,4)
// myDisplayer(result)


// function myDisplayer(some){
//     console.log(some)
// }
// function myCalculator(num1,num2,myCallback){
//     let sum = num1 + num2;
//     myCallback(sum)
// }
// myCalculator(2,3,myDisplayer)


// settime,setinterval

// function myFunction(){
//     console.log("function running");
// }
// setTimeout(myFunction,3000)
// function myFunction(){
//     console.log("function running");
// }
// setInterval(myFunction,3000)


// promise object


// let myPromise =  new Promise(function(myResolve,myReject){
//     myResolve(); // başarılı olduğunda
//     myReject(); // başarısız olduğunda 
    

// })
// myPromise.then(
//     function(value){ kod başarılı olduğunda},
//     function(error){kod başarısız olduğunda}
// )

function myDisplayer(some){
    console.log(some)
}
// let myPromise = new Promise(function(myResolve,myReject){
//     let x = 0;
//     if(x==0){
//         myResolve("Tamam")
//     }else{
//         myReject("Hata")
//     }
// })
let myPromise = new Promise(function(){
    let x = 0  ;
    if(x == 0)
    return Promise.resolve("Tamam")
    else
    return Promise.reject("Error")
})

// myPromise.then(function(value){
//     myDisplayer(value)
// },function(error){
//     myDisplayer(error)
// })
myPromise.then(function(value){
    myDisplayer(value)
})
.catch(function(error){
    myDisplayer(error)
})
.finally(console.log("işlem tamamlandı"))