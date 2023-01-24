// // // function NazivFunkcije(){
// // //     console.log("ispisi nesto")
// // // }

// // // NazivFunkcije()

// // // function Saberi(firstNumber,secondNum){
// // //     return firstNumber+secondNum;
// // // }

// // // console.log(Saberi(10,15))

// // // function niz(arr){
// // //     for(let i=0;i<arr.length;i++){
// // //         console.log(arr[i])
// // //     }
// // // }
// // // const array=[2,5,8,12,4]
// // // niz(array)

// // // const saberiDvaBroja=(first,second) => first+second;

// // // console.log(saberiDvaBroja(2,4))

// // const niz=[2,4,6,7,8,43,23]

// // // noviNiz=niz.map((x)=>x**2)

// // // console.log(noviNiz)

// // noviNiz=niz.filter((x)=>x>10)

// // console.log(noviNiz)

// niz=[12,1,4,12,4];

// let a=niz.includes(10);
// co
// console.log(a)

// function uniqueArray(arr){
// for(i=0;i<niz.length;i++){
//     if(unique.includes(niz[i])){
//         continue;
//     }
//     else{
//         unique.push(niz[i])
//     }
// }

// return unique;
// }

// console.log(uniqueArray(niz))

function uniqueInOrder(arr){
    const uniqueArr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            continue;
        }
        uniqueArr.push(arr[i])
    }
    return uniqueArr;
}

const test='AAAABBBCCDAABBB'
console.log(uniqueInOrder(test))