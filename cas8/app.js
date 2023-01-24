//uneti string i proveriti da li je prazan

/*nekiTekst=prompt("Unesite neki tekst")

if(nekiTekst.length == 0){
    console.log("prazan")
}else{
    console.log("Duzina stringa je",nekiTekst.length)
}*/

//uneti neki string i mala slova pretvoriti u velika i obrnuto,velika pretvoriti u malo

/*rec='ABCdEf';
noviString='';

for(i=0;i<rec.length;i++){
    if(rec[i]===rec[i].toUpperCase()){
        noviString+=rec.toLowerCase()
    }else{
        noviString+=rec[i].toUpperCase()
    }
}*/
//console.log(noviString)

/*cars=("Mercedes","Audi","BMW");
console.log(cars[0]);
console.log(cars[2]);


console.log(cars.length);
cars.push("Golf");
console.log(cars);

cars.pop();
console.log(cars);

for (i=0;i<cars.length;i++){
    console.log(cars[i])
}*/

/*cars=['audi','bmw','mercedes','nisan','honda']

/*for(i=cars.length -1;i>0;i--){
    console.log(cars[i])
}*/

/*newCars=[]
for(i=car.length-1;i>=0;i--){
    newCars.push(cars[i])

}
console.log(newCars)*/

//naci najmanji 

/*niz=["5","12","8","7","6"]
max=niz[0]
min=niz[0]

for(i=0;i<niz.length;i++){
   if(niz[i]<max){
    max=niz[i];

   }
   
   if(niz[i]>min){
    min=niz[i];
   }

}
console.log('Najveci je ',max)
console.log('najmanji je',min)*/


niz=[10,15,9,5,6,7,17,1];
Parni=[];
Neparni=[];

for(i=0;i<niz.length;i++){
    if(Parni%2===0){
        Parni.push (niz[i]);
    }else{
        Neparni.push(niz[i]);
    }
}
console.log(Parni)
console.log(Neparni)
