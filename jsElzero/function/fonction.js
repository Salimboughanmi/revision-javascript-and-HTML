/*  function pro( price , texas , ads ) {
    let product = price + texas
    let result = product + ads 
console.log( result )   
}
pro(200 ,10 , 20 ) */


/*  function product( price , texas , ads ) {
let product = price + texas ; 
    let result = product + ads;
    
    
    return result ; 
 }
 let x = product(2080 ,20 , 20 ) 

 console.log(x)   */



/* function calculAge(age){
    age = age * 356
    return age
 }
 let ag = calculAge(20)
 console.log("the number of days is" , ag )

 function hoursAge() {
   let hours = ag * 24
    return hours ;
 }
 let hours = hoursAge()
 console.log("age with hours is" , hours) */
 //////////////////////////////////////////////////Housting //////////////////////////////////////////////////

//////////////////// exemple avec var 
/* console.log(x);
var  x = 10; */  // resultat undefined
// javascript le convertir comme ci
//var x ; 
//console.log(x);
//x=10;

 /////////////////// exemple avec let 
/* console.log(x);
let  x = 10; 
  */ // resultat error

 //console.log(hello()) 
  
 /* hello()
 function hello() {
   result = 77 +12
  console.log(result)   
}    // meme pour les type de fonctions "declarations" la code sa marche et afficher la result */
// pour la fct exprations !!

/* console.log(hello()) 
var hello = function () {
    result = 77 +12
    console.log(result)
    return result
}
 */ // ne marche pas avec la fct "exprations" comme expl precedent

///////////////////scope and self invoked(appel) //
//dans la bloc of code comme : if , for , while , do while sauf les funct son variables global
// pour etre les variable local on utulise let expl : for (let i = 0; i <11 ; i++) {} // si i est var sera global

 // pour faire une fct call himself expl : 
/* ( function x() {
  // console.log("hiii")
   var x = 44
   let y = 55
 })() // dans cette exemple x et y sont locale que ce soit let ou var
 */
/* console.log(x())
  function x() {
   function y() {return 1}
   return y()
   function y() {return 0}
 }  // res EST 0

  */
  /* function calcul(...numbers) { // array de nom numbers of numbers
   let result = 0 ;
   for (let index = 0; index < numbers.length; index++) {
     result += numbers[index]

   }
   console.log(result)
 }
calcul(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)  */
////////////////////////////////////////////arrow fonction

/* function message (){
  console.log("================================")
  return 12
}
console.log(message()) */
// avec Arrow function sera
/* let message2 = ()=> 12


console.log(message2())   */

///////////////////////////////////////////////////////////////////////////oussema elzero////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////Dot Notation vs Bracket Notation////////////////////////////////////////////////////////////////
