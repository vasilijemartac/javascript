// for(let i=1;i<=100;i++){
//     if(i%3===0 && i%5 ===0){
//         console.log("Fizz Buzz")
//     }else if(i%5===0){
//         console.log('Buzz')
//     }else if(i%3===0){
//         console.log('Fizz')
//     }else{
//         console.log(i)
//     }
// }
// let auto={
//     boja: 'bela',
//     godiste: '2018',
//     marka:'Mercedes',
//     model:'C200',

// }
// console.log(Object.keys(auto))
// auto.boja ='crna'
// console.log(auto)
// delete auto.model
// console.log(auto)

function isPolindrom(str){
    return str===str.split('').reverse().join('')
}
const word='ana'
console.log(isPolindrom(word))
