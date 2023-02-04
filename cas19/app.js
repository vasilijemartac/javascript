//Napisati program koji se ispisati samo propertie
// var student={
//     firstName:'Vasilije',
//     lastName:'Martac',
//     class:'IV',
//     age:17,
// }

// let strKey=Object.keys(student).join('-');
// console.log(strKey)


//Napisati JavaScript funkciju da nam da duzinu objekta
// var student={
//     firstName:'Vasilije',
//     lastName:'Martac',
//     class:'IV',
//     age:17,
//     }
    
// function lengthOBJ(obj){
//     let object=Object.keys(obj)
//     return object.length   
// }
// console.log(lengthOBJ(student))

//Naci sumu svih poznatih brojeva u nizu 

// let arrayNumber=[5,6,7,8,9,9,9.-9,2,-5]

// function sumaPozitivnih(arr){
//     let arrayPoz
//     return arrayPoz.Filter((el)=>el>0).reduce((p,t)=>p+t,0)
    
// }
// console.log(sumaPozitivnih(arrayNumber))

//Uneti string kao puno ime i prezime. Uzeti samo inicijale

// let str='Vasilije Martac'

// function inicijali(strr){
//     str.split(" ")
//     console.log(str[0])
//     for (let i=0;i<str.length;i++){
//         if(str[i]==" "){
//            str[i+1]
//         }
//     }
   
// }
// console.log(inicijali(str))

// let imeiprezime='Vasilije Martac';

// function inicijali(str){
//     return str
//     .split(" ")
//     .map((el)=>el[0])
//     .join(" ")
// }
// console.log(inicijali(imeiprezime))

//Svako pocetno ime niza napisite velikim slovom

// let nizImena=['Vasilije','AMIN','Marko','amin']

// function CapitalizeName(arr){
//     return arr.map((el)=>el[0].toUpperCase()+el.slice(1,el.lngth).toLowerCase())

// }
// console.log(CapitalizeName(nizImena))

// var libery =[
//     {
//         author:"Bill Gates",
//         title:"The Road Ahead",
//         readingStatus:true,
//     },
//     {
//         author:"Steve Jobs",
//         title:"Walter Issacson",
//         readingStatus:true,
//     },
//     {
//         author:"Suzane Collins",
//         title:"Mockingjay",
//         readingStatus:false,
//     }
// ]

// function JelProcitano(arr) {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].readingStatus){
//             console.log("Vec procitano",'-',arr[i].author,'-',arr[i].title)
//         }else{
//             console.log("Morate citati",'-',arr[i].author,'-',arr[i].title)
//         }
//     }
    
// }
// JelProcitano(libery)


//for(let i=0;i<10;i++){}
let nizB =[10,15,45,65]

// for(let element in nizB){
//     console.log(element)
// }
// for(let element of nizB){
//     console.log(element)
// }

//let novN=nizB.forEach();



