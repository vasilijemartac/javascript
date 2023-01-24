// n=Number(prompt('Unesite trocifreni broj'))

// if(n<100 && n>999){
//     console.log('niste uneli trocifren broj')

// }else if(n%10<5){
//     n-=5;
// }else{
//     n+=2;
// }

//  console.log(n)

// humanYears=Number(prompt('Unesite broj godina'))



// if(humanYears===1){
//      console.log([1,15,15])
// }else if(humanYears===2){
//      console.log([2,15+9,15+9])
// }else{
//      console.log([humanYears,15+9+(humanYears-2)*4,15+9+(humanYears-2)*5])
// }



//Palindrom

// str='ana'
// isPalindrom=true
// for(i=0;i<=str.length/2;i++){
//     if(str[i]!==str[str.length-1-i]){
//         isPalindrom=false;
//         break
//     }
   
//    }
   
//     if(isPalindrom){
//         console.log('string je palindrom')
//     }else{
//         console.log('string nije palindrom')
//     }

//Amstrongov broj

// broj=371

// trecaCifra=broj%10 //371/10=31 ostatak 1
// drugiBroj=Math.floor(broj/10)%10 //371/10=37%10=7
// prviBroj=Math.floor(broj/100)



//  console.log(prviBroj,drugiBroj,trecaCifra)

// amstrongNumber=prviBroj**3 + drugiBroj**3 +trecaCifra**3

// if(broj===amstrongNumber){
//     console.log('Ovo je amstrongov broj')
// }else {
//     console.log('ovo nije amstrongov broj')
// }




// for(i=100;i<=999;i++){
//     treca=i%10 
//     drugi=Math.floor(i/10)%10 
//     prvi=Math.floor(i/100)

//     if(prvi + drugi > treca){
//         continue
//     }
//     console.log(i)
// }

// x=20

// for(i=100;i<=999;i++){
//         treca=i%10 
//         drugi=Math.floor(i/10)%10 
//         prvi=Math.floor(i/100)
    
//         if(prvi+drugi+treca===x){
//             console.log(i)
//         }
       

//     }












