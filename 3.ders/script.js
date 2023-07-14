// const cars = ["BMW","Dacia",2]
// console.log(cars)

// console.log(cars[0])
// console.log(cars.length)
// console.log(cars[2])

// const fruit = ["elma","portakal","kayısı"]
// let deger = fruit.toString()
// console.log(deger[0])

// const fruit = ["elma","portakal","kayısı"]
// console.log(fruit.join("-"))

// const fruit = ["elma","portakal","kayısı"]
// const value = fruit.pop()
// console.log(fruit)

// const fruit = ["elma","portakal","kayısı"]
// const value =  fruit.push("şeftali")
// console.log(fruit)

// const fruit = ["elma","portakal","kayısı"]
// const value =  fruit.shift()
// console.log(fruit)

// const fruit = ["elma","portakal","kayısı"]
// const value =  fruit.unshift("şeftali")
// console.log(fruit)
// fruit[0] = "değiştir"
// console.log(fruit)
// fruit[3] = "değiştir"
// console.log(fruit.length)
// console.log(fruit[fruit.length-1])
// const fruit2 = ["nar","portakal"]
// const fruit3 = fruit2.concat(fruit)
// console.log(fruit3)

// splice değeri çıkarılan değerleri döndürür
// const fruit = ["elma","portakal","kayısı"]
// fruit.splice(2,1,"limon","nar")
// console.log(fruit)

// const fruit = ["elma","portakal","kayısı"]

// const total = fruit.slice(1)
// console.log(total)

// const fruits = ["Banana","Orange","Apple","Mango"]
// console.log(fruits.sort())
// console.log(fruits.reverse())


// const numbers = [40,100,1,5,34,12]

// console.log(numbers.sort(function(a,b){return a-b}))

// console.log(Math.random())
// const numbers = [40,100,1,5,34,12]
// console.log(numbers.sort(function(){return 0.5 - Math.random()}))

 const cars = [{
     type:"Dacia", year: 2013
 },
     {
         type:"Fiat" , year:2012
    },
    {
       type:"BMW", year:2023
    }]
//     console.log(cars)
//     console.log(cars.sort(
//         function(a,b){
//             console.log(a)
//             console.log(b)
//             return a.year - b.year
//         }))

// console.log(cars.sort(
//     function(a,b){
//         let x = a.type.toLowerCase();
//         let y = b.type.toLowerCase();
//         if(x<y) {return -1}
//         if(x>y) {return 1}

//     }
// ))

// const numbers = [43,3,44,13,24]
// numbers.forEach(
//     function myFunction(value,index,array){
//         console.log(`value degeri: ${value}`)
//         console.log(`index degeri: ${index}`)
//         console.log(`array degeri: ${array}`)
//     }
//     )

// const numbers1 = [43,3,4,12,24]
// const numbers2 = numbers1.map(myFunction)
// function myFunction(value,index,array) {
//         return value * 2  
// }
// console.log(numbers2)

// const numbers = [43,3,4,12,24]
// const over18 = numbers.filter(myFunction)
// function myFunction(value,index,array){
//     return value > 18
// }
// console.log(over18)

// const fruits = ["Elma","Armut","Portakal","Kayısı"]
// let position  = fruits.indexOf("Elma") + 1 
// console.log(position)

// const numbers = [4,6,12,34,54]
// let first = numbers.find(myFunction)
// function myFunction(value,index,array){
//     return value > 18
// }
// console.log(first)
//  const numbers = [4,6,12,34,54]
//  let first = numbers.findIndex(myFunction)
//  function myFunction(value,index,array){
//     return value > 18
//  }
//  console.log(first)

// const array = Array.from("Tüm string diziye dönüşcek")
// console.log(array)

// const deger = "Tüm string diziye dönüşcek"
// let deger2 = deger.split(" ")
// console.log(deger2)

const fruits = ["Elma","Armut","Portakal","Kayısı"]

console.log(fruits.includes("Kiraz"))

