/* 
exemple with map MAP

*/
console.log("*********************************** Higher Order Functions - map****************************************************")

let swappingCases ='elzerO';
let invertedNumbers =[1,-10 ,-20 ,15 ,20 ,100 ,-30];
let ingnoreNumbers= "elz123ero" ;

let swap = swappingCases.split("").map((function(element){ // split covert to array
    //condition ? true : false
    return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase() 
})).join("") // join() return to string

console.log(swap)

// convert positive to negative and neg to pos invertedNumbers

let invert = invertedNumbers.map((element)=> - element)
console.log(invert);

let ingnore = ingnoreNumbers.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : ""      // map work with si sinon dans outpout si eleminer  ele : ""  outpout true true false 
}).join("")
console.log(ingnore);


console.log("*********************************** Higher Order Functions - Filter****************************************************")
//get friend with name start with A
let friends =["Ahmed" , "zied" , "Afif" , "jawed" , "Adem" , "adem"]

let StartA = friends.filter(function(ele , i ) { // filtre faire un test =/= map

    return ele.startsWith("A")  ? true : false
})
console.log(StartA)


// get even Numbers only
let numbers =[22,115,5,35,2,8,4,6]

let even = numbers.filter((ele)=> ele % 2 == 0)
console.log(even);


// get even Numbers only ******use string**
let numb ="22,115,5,35,2,8,4,6" ;

let ev = numbers.filter((ele)=> ele % 2 == 0)
console.log(`with string input ${ev}`);

ages = "12 25 35 47 38 15 7 20";

// Return a string with the inverted digits of ages
function inverted(ages) {
 return ages.split('').map( (age) => {
   return age.split('').reverse().join('');
 }).join('');
}
console.log( inverted(ages) );
// Output: "21 52 53 74 83 51 7 02"

console.log("***********************************  Higher Order Functions - Filter Practice****************************************************")

//filtre word more than 4 caracteres
let sentence ="i love fooood and too playing much"

let word = sentence.split(" ").filter((ele )=> ele.length > 4 ? true : false ).join(' ')
console.log(word)


/// Filtre Strings + multiply
let mix = "A15R28Y" ;
// filter work with si trouve vrai ok , pas besoin de sinon

/* let m =mix.split('')
console.log(m) // resultat [A'1'5'R'2'8'Y]
x= m.join('')
console.log(x); */ //resultat A15R28Y

let mixedContent = mix.split("")
.filter(function(ele){
    return !isNaN (parseInt(ele));
})
.map(function (ele) {
    return ele * ele ;
}).join("");
console.log(mixedContent)

