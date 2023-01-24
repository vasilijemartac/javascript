/*str='Mama ima Momu'
brojac=0

for(i=0;i<str.length;i++){
    if(str[i].toLowerCase()==='m'){
        brojac++
    }
    
}
console.log(brojac)*/

/*str=prompt('unesite neki string')
brojac=0

for(i=0;i<str.length;i++){
    if(str[i]===str[i].toLowerCase() && str[i]!==' '){
        brojac++
 
    }
}
console.log(brojac)*/

// str='MALASLOVAmalaslova'
// brojacVelikaSlova=0
// brojacMalaSlova=0

// for(i=0;i<str.length;i++){
//     if(str[i]===str[i].toLowerCase() && str[i]!==' '){
//         brojacMalaSlova++
//     }else if(str[i]===str[i].toUpperCase() && str[i]!==' '){
//      brojacVelikaSlova++
//      }

// if(brojacVelikaSlova===brojacMalaSlova){
//     console.log('isti broj slova')
// }else if(brojacMalaSlova>brojacVelikaSlova){
//     console.log('ima vise malih slova')
// }else{
//     console.log('ima vise velikih slova')
// }
//}



// let num = 5
// const arrayNiz=[
//     'Ponedeljak',
//     'Utorak',
//     'Sreda',
//     'cetvrtak',
//     'petak',
//     'subota',
//     'nedelja',
// ]

// //console.log(arrayNiz[num-1])


// switch(num){
//     case 1:
//         console.log('ponedeljak')
//         break
//     case 2:
//          console.log('ponedeljak')
//          break
//     case 3:
//         console.log('sreda')
//         break
//     case 4:
//         console.log('cetvrtak')
//         break
//     case 5:
//         console.log('petak')
//         break
//     case 6:
//         console.log('subota')
//         break
//     case 7:
//         console.log('nedelja')
//         break

//     default:
//         console.log('greska')
// // 
//}

// const niz=[10,15,2,3,10,13,3,45,2]
// const noviNiz=[]
// let isInside=false

// for(let i=0;i<niz.length;i++){
//     isInside=false
//     for(let j=0;j<niz.length;j++){
//         if(niz[i]===noviNiz[j]){
//             isInside=true;
//             break;
//         }
    
//     }
//     if(isInside){
//         continue;
//     }else{
//         noviNiz.push(niz[i]);
//     }

// }
// console.log(noviNiz)

// let firstStr='Pera'
// let secondStr='sladoled'

// let newStr=''
// let length=0

//     if(firstStr.length>secondStr.length){
//         length = firstStr.length;
//     }else{
//         length=secondStr.length;
//     }
//     for(let i=0;i<length;i++){
//         if(firstStr[i]===undefined){
//             newStr+=secondStr[i];
//             continue
//         }
//         if(secondStr[i]===undefined){
//             newStr+=firstStr[i]
//             continue
//         }
//         newStr +=firstStr[i]+secondStr[i]
//     }
//     console.log(newStr)


  