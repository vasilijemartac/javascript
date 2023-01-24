/*for(i=1;i<100;i++){
     if(i%3===0 && i%5===0){
        console.log('FizzBuzz')
    }else if(i%3===0){
        console.log('Fizz')
    }else if(i%5===0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}*/

//ispisati brojeve od 1 do 10 ali 5 da se ne ispise

/*for(i=1;i<=10;i++){
    if(i!==5){
        console.log(i)
    }
}*/

//break zavrsava for petlju i izlazi iz petlje
//continue preskace samo 1 operaciju

/*suma=0

for(i=1;i<=100;i++){
    if(i%2===0){
        suma+=i
        console.log(suma)
    }else{
        continue
    }
    
}*/

/*suma=0
for(i=0;i<=100;i+=2){
    suma+=i
}

console.log(suma)*/

//naci faktorijal nekog broja

broj=Number(prompt("Unesite neki broj"))
proizvod=1

for(i=1;i<=broj;i++){
    proizvod*=i
}
console.log(proizvod)
