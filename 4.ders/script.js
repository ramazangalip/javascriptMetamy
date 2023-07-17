// // js dates

// const myDate = new Date()
// console.log(myDate)
// //getfullyear 

// console.log(myDate.getFullYear())

// //getmonth

// console.log(myDate.getMonth())

// //getdate
// console.log(myDate.getDate())

// //saat dakika saniye

// console.log(`Su An saat ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`)

// js math

//yanlış kullanım
// let myMath = new Math()
// console.log(myMath.round(4.6))

// en yakın  tam sayıya yuvarlama
// console.log(Math.round(4.6))
// // bir üst sayıya yuvarlama
// console.log(Math.ceil(4.3))

// // bir alt sayıya yuvarlama

// console.log(Math.floor(4.9))
// console.log(Math.floor(-1.6))

// // tam sayıyı al

// console.log(Math.trunc(4.038838))

// // karesini almak

// console.log(Math.pow(8,3))

// // karekökünü bul
// console.log(Math.sqrt(16))
// // en küçüğünü bul
// console.log(Math.min(0,150,30,-20))


// js boolean

// console.log(10<9)
// // değeri olan herşey boolean de true dur
// console.log(Boolean(10))

// let x = 0;
// console.log(Boolean(x))

// let y  = new Boolean(0)
// console.log(y)

// let z = "";
// console.log(Boolean(z))

// let q;
// console.log(q)
// console.log(Boolean(q))

//js comparison 

// let x = 8;

// console.log(x == 8)


// değer olarak eşit olsa data tipi olarak eşit değil
// let y  = "34"
// console.log(y == 34)

// console.log(y === 34)

// let z  = "78"

// console.log(z != 88)

// console.log(z !==78)

// let a = 5;
// let b = 120;

// console.log(a>=b)

// && (and-ve işareti) -> ikiside doğru ise doğru
// || (or-veya işareti) ->  ikisinden biri doğru ise dogru


// let x = 8;
// let y = 10;
// console.log(x>5 && y<12)

// console.log(x<5 || y>12)

// // ternary operator 

// let yaş = 16;
// let oyverme = (yaş<18) ? "Çok Genç Oy Veremez" : "Oy vermek için yaşı yeterli"
// console.log(oyverme)

// // nullish operator ?? 

// let name ="Ramazan"
// let name2;
// let name3 = null
// let name4 = 0
// let name5 = ""
// let name6 = NaN
// let text = "isim yok"
// console.log("---------")
// console.log(name ?? text)
// console.log(name2 ?? text)
// console.log(name3 ?? text)
// console.log(name4 ?? text)
// console.log(name5 ?? text)
// console.log(name6 ?? text)
// console.log("----------")
// console.log(name || text)
// console.log(name2 || text)
// console.log(name3 || text)
// console.log(name4 || text)
// console.log(name5 || text)
// console.log(name6 || text)
// console.log("----------")
// console.log(name && text)
// console.log(name2 && text)
// console.log(name3 && text)
// console.log(name4 && text)
// console.log(name5 && text)
// console.log(name6 && text)
// console.log("----------")


// koşullu ifadeler - conditional statements

// if,else,else if,switch

// let hour = 18;
// if(hour<18){
//     console.log("İyi Günler")
// }

// if(hour >=18){
//     console.log("iyi geceler")
// }

// let saat = 8;
// if(saat<18){
//     console.log("iyi günler")
// }else{
//     console.log("iyi geceler")
// }

// let saat = 8;
// if(saat<18){
//     console.log("iyi günler")
// }else if (saat<22){
//     console.log("iyi aksamlar")
// }else{
//     console.log("iyi geceler")
// }
// if (saat <8){
//     console.log("herkese günaydın ")
// }

// switch use strict comparison ===
let day;
switch(new Date().getDay()){
    case 0:
        day = "Cumartesi"
        break;
        case 1:
            day = "Pazar"
        break;
        case 2:
            day = "Pazartesi"
            break;
        case 3:
            day ="Salı"
            break;
        case 4:
            day = "Çarşamba"
            break;
        case 5:
            day = "Perşembe"
            break;
        case 6:
            day = "Cuma"
            break;
            default:
                day = "Hatalı Veri"
}
console.log(day)


