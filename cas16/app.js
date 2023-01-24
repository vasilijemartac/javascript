// // let arrayNumber=[10,15,12,15]

// // //pop()-UKLANJA ZADNJI IZ NIZA

// // arrayNumber.pop();
// // console.log(arrayNumber)

// // //push()-dodajte novi element na kraju niza
// // arrayNumber.push()
// // console.log(arrayNumber)

// // let str='Danas je drugi dan ciklusa'

// // //toLowerCase()-sve u mala slova
// // console.log(str.toLowerCase())
// // //toUpperrCase()-sve u velika slova
// // console.log(str.toUpperCase())

// // //concat()-omogucava nam da sastavimo 2 niza ili stringa

// // let str1='Hello'
// // let str2='Lejla'

// // let newStr = str1.concat(str2)

// // let arr1=['a','b','c','d']
// // let arr2=['e','f','g','h']
// // let abeceda=arr1.concat(arr2)


// // console.log(abeceda)
// // console.log(newStr)

// // //trim-da uklonimo space sa pocetka i kraja stringa

// // const exampleTrim="                               CENTAR NIT                                       "
// // console.log(exampleTrim.trim())

// // //slice(start,end)-da uzmemo deo niza,start uzima i prikazuje end ne prikazuje
// // const exampleSlice = 'Hello World'
// // console.log(exampleSlice.slice(2,exampleSlice.length))

// // //substring()-izdvaja karaktere i vraca novi string
// // const exampleSubstring='neki tekst'
// // console.log(exampleSubstring.substring(2,5))

// // //unshift()-dodaje novi element na pocetku niza
// // const exampleUnshift=[10,15,16,70];
// // exampleUnshift.unshift(50)
// // console.log(exampleUnshift)

// // //shift()-uklanja element na pocetku niza
// // const exampleShift=[10,15,16,70];
// // exampleUnshift.shift()
// // console.log(exampleShift)


// // //includes()-proverava dal se neki element nalazi u nizu/stringu
// // const exampleIncludes=[15,45,65,7,8,9]
// // const exampleIncludesString='nesto'
// // console.log(exampleIncludes(17))
// // console.log(exampleIncludesString('o'))

// // //split()-string prebacuje u niz
// // const exampleSplit='Danas je drugi cas'
// // console.log(exampleSplit.split('a'))
// // //join()-niz da prebaci u string
// // const exampleJoin=['a','b','c','b']
// // console.log(exampleJoin.join('  '))
// // //replace(    ,    )-da zameni neki element

// // const exampleReplace='Ucimo u centru NIT'

// // console.log(exampleReplace.replace('i','u'))

// // //map()-vraca ceo niz ali sa izmenama

// // const exampleMap=[10,15,45,65,7,8,9]
// // const newExample=exampleMap.map(x=>x*2)

// // // function pomnozi(x){
// //     return x*2
// // }

// // const exampleMapPodeljeno=[10,15,45,65,7,8,9]
// // const newExamplePodeljeno=exampleMapPodeljeno.map(x=>x/2)
// // console.log(newExamplePodeljeno)

// //sort()-da sortira
// let newA=[45,65,20,10,1];
// newA.sort();
// console.log();

// //reverse()
// let exampleReverse=[1,5,6,9,8,7,10]
// exampleReverse.reverse()
// console.log(exampleReverse)

// //charAt()-da prikaze karakter na nekoj poziciji 

// let exampleCharAt='Nestoooooooo'
// console.log(exampleCharAt.charAt(2))

// //filter()-vraca samo elemente niza koji prodju test
// let exampleFilter=[10,5,67,7,7,8,8]
// console.log(exampleFilter.filter((x)=>x%2===0))

// //indexOF('')-vraca nam index trazenog elementa
// console.log(exampleFilter.indexOf(7))
