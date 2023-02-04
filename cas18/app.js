// const osoba={
//     ime:"Vasilije",
//     prezime:"Martac" ,
//     imePrezime: function(){
//         return this.ime+" "+this.prezime;

//     },
// }





// console.log(osoba.imePrezime())

// // console.log(osoba.ime)
// // console.log(osoba['prezime'])

// // osoba.ime='ASDF'
// // console.log(osoba)

// // osoba.prezime='OPURT'
// // console.log(osoba.prezime)


// const auto={
//     model:'mercedes',
//     godiste:'2012',
//     boja:'bela',
//     cena:20000,

// }

// console.log(Object.keys(auto))
//console.log(Object.values(auto))

// //reduce = 
// let niz=[4,5,1,2]

// // let noviNiz=niz.map(niz=> niz/2)

// // let suma = noviNiz.reduce((prethodno,trenutno )=>trenutno+prethodno*2,0);

// let suma = niz
// .map((x)=>x*2)
// .filter((x)=>x<5)
// .reduce((p,t)=>p+t,0)


// console.log(suma)



// function nadjiLejlu(niz){
//     if(niz.indexOf('Lejla')=== -1){
//         return 'Sad ce Lejla doci'
//     }

//     return niz.indexOf('Lejla');
   
// }
// niz=['Vasilije','Amar','Marko','Lejla','Marko']
// console.log(nadjiLejlu(niz))

// const noviNiz = new Set(niz)
// console.log(noviNiz)

// niz=[1,2,3,1,1,4]

// function pivot(arr){
//     let sumasaDesne=0
//     let sumasaLeve=0
//     for(let i=0;i<arr.length/2;i++){
//         sumasaLeve+=arr[i];
//         sumasaLeve+=arr[arr.length-1-i];

//     }
//     if(sumasaLeve===sumasaDesne){
//         return 'niz je pivot'
//     }
    
//         return 'niz nije pivot'
    
// // }
// console.log(pivot(niz))










