//Napraviti funkciju koja vraca string u kojem je ime zamenjeno prezimenom
// let imePrezime = 'Vasilije Martac'
// function reverseName(str){
//     return str.split(' ').reverse().join(' ')


// }

// console.log(reverseName(imePrezime))

//map,join,split

// const input = 'Every developer likes to mix kubernetes and javascript'

// function zadatak(arr){
//     return arr.split(' ').map((e)=>e.length>4 ? e[0]+[e.length -2]:e).join(' ')
// }
// console.log(zadatak(input))

// const input = [
//     {
//         name:'John',
//         age: 13,
//     },
//     {
//         name:'Mark',
//         age: 50,
//     },
//     {
//         name:'Rachel',
//         age:45,
//     },
//     {
//         name:'Nate',
//         age:67,
//     },
//     {
//         name:'Jennifer',
//         age: 65,
//     },

// ]
// let najvece =input[0].age
// let najmanji = input[0].age
// for(let i=0;i<input.length;i++){
//     if(input[i].age<najmanji){
//         najmanji=input[i].age
//     }
//     if(input[i].age>najvece){
//         najvece=input[i].age
//     }
    


// }
// console.log(najmanji,najvece)

// function createPhoneNumber(niz){
//     let format='(xxx)xxx-xxx'
    
//     for(let i=0;i<niz.length;i++){
//         format=zamenjenFormat.replace('x',niz[i+1])
//     }
//     return format;
// }
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))