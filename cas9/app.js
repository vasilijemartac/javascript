/*niz = [10,5,17,2,6,9,14]
min=niz[0]
max=niz[0]
suma=0

for(i=0;i<niz.length;i++){
    if(niz[i]>max){
        max=niz[i];
    }
    if(niz[i]>min){
        min=niz[i];
    }
    suma+=niz[i];
}
prosek=(suma-min-max)/(niz.length-2);

console.log('prosek je',prosek)*/

//Ukloniti element sa n pozicije

/*niz = [10,15,4,17,2,6,9,14]
n=5
noviNiz=[]

for(i=0;i<niz.length;i++){
   
    if(i===n){
        continue;
    }


    noviNiz.push(niz[i]);
    
}
console.log(noviNiz)*/

/*niz = [10,15,4,17,2,6,9,14]
n=3
noviNiz=[]

for(i=n;i<niz.length;i++){
    noviNiz.push(niz[i]) 
}   
    
    for(i=0;i<n;i++){
        noviNiz.push(niz[i])

    }

console.log(noviNiz)*/

/*a=prompt('unesite broj meseca')

if(a<=3){
    console.log('prvi kvartal')
} else if(a<=6){
    console.log('drugi kvartal')
}else if(a<=9){
    console.log('treci kvartal')
}else if(a<=12){
    console.log('cetvrti kvartal')
}else{
    console.log('greska')
}*/

//Naci par sa datom sumom u nizu

// niz=[10,4,2,3,5,6,7,15,6]
// suma=15

// for(i=0;i<niz.length;i++){
//     for(j=1;j<niz.length;j++){
//        if(niz[i]+niz[j]===suma){
//         console.log(niz[i])
//         console.log(niz[j])
//        }
        
//     }
// }

// niz=[10,11,13,14,15]

// for(i=0;i<niz.length;i++){
//     if(niz[i+1]-niz[i]===1){
//         continue
//     }else{
//     console.log(niz[i]+1)
//     break
// }
// }









