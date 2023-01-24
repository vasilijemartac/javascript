//proveriti da li je broj prost


/*n=Number(prompt('Unesite neki broj'))
brojac=0;
for(i=1;i<=n;i++){
    if(n%i===0){
        brojac++
    }
}
if(brojac>2){
    console.log('nije prost broj')
}else{
    console.log('prost')
}*/

//Proveriti da li je uneti broj savrsen 

/*n=234567890
suma=0

for(i=1;i<=n/2;i++){
    if(n%i===0){
        suma+=i
    }
   

}
if(n===suma){
    console.log('broj je savrsen')
}else{
    console.log('broj nije savrsen')
}*/

text='Hello World'

//console.log(text[4])
console.log(text)
text.length===11

noviText= text+" Ken"
console.log(noviText)
console.log(text.length)
console.log(noviText.length)

/*for(i=0;i<text.length;i++){
    console.log(text[i])

}*/

/*for(i=text.length-1;i>=0;i--){
    console.log(text[i])
}*/

/*for(i=0;i<text.length;i++){
    if(text[i]===' '){
        continue

    }
    console.log(text[i])
}*/

str=''

for(i=0;i<text.length;i++){
    if(text[i]===" "){
        continue
    }
    str+=text[i]

}
console.log(str)

//proveriti da li su 2 stringa ista


strPrvi='hazz'
strDrugi='hezz'

if(strPrvi===strDrugi){
    console.log('Stringovi su isti')
}else{
    console.log('nisu isti')
}

console.log(strPrvi.toUpperCase())
console.log(strDrugi.toLowerCase())

