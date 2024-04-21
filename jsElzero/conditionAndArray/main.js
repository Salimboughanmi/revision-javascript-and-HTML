let name = 'salimboughanmi';
/* count =0 ; 
for (let i = 0; i < name.length; i++) {
    if (name[i] === 'a') 
    

    {
        count++;
      
    } 
}
console.log(count);  */
//console.log(name.split('m'));
/* *************************************************** Array  **************************************************************************/

let names =['aoa','b','c','d',[1,2,3,4,5,'jj']]
/* names.push('ali') // add element to last array
names.unshift('dali') // add element to start of array
names.shift() // remove first element
names.pop() // remove last element
console.log(names.shift());
console.log(names); */

                             // splice array (start, count , add , add, add .. )
//names.splice(1,0, 'samou',"sam","sami") // remove element with  index element and number of elements and add element to the start of array
// if i want add element to array in any index without remove any elmt for expl : names.splice(i,0) => add element to index i 
//console.log(names)

                              // slice array (start , end )
// names.slice(0,2) => return array from index 0 to 2
// names.slice(2,4) => return array from index 2 to 4
// names.slice(-2) => return array from index -2 to the end
// names.slice(-2,-1) => return array from index -2 to -1
// names.slice(0,-2) => return array from index 0 to -2
                                     //search in array
// names.indexOf('a') => return index of first occurence of 'a' in array
// names.lastIndexOf('a') => return index of last occurence of 'a' in array
// names.includes('a') => return true if 'a' is in array
// names.includes('b') => return false if 'b' is in array
                                 //sort and reverse array
                       
 //names.reverce() // => reverce array
 //names.sort() // => organase array
                                            // concat and join arrays
let array1 =['a','b','c','d','e','f']
let array2 =[1,2,3,4,5]

/* console.log(array1.concat(array2 ,"hello world")); // resultat sous form array
console.log(array2.join(array1)); // resutat sous forme string
console.log(array2.join('*')); // separer par * */

/* *************************************************** Conditions  **************************************************************************/

/* let age = 18;

if (age > 18) {
    console.log('you are adult');}
 if (age == 18){ console.log('you are 18')} 
 else {
    console.log('you are not adult');
} */
/* let num1 = prompt("Please enter num1: ");
let num2 = prompt("Please enter num2: ");

if (num1 > num2) { 
    console.log(num1 + " is greater than " + num2);
 }else{ console.log(num2 + " is greater than " +num1    )  } */
 
 // ou
 /* let age = prompt("Please enter ur age ");

 age > 18 ? console.log("you are older than 18") 
 : age == 18 ? console.log( "your age is 18") 
 :  console.log( "your age is younger than 18  "); */
 
 
 /////////////////////switch
/* let role = prompt("Please enter role");
switch (role) {
    case 'admin' :document.write("create , upt , delete");
    break ; // end switch
    case 'moderator' :document.write("create , upt ");
    break;
    case 'user' :document.write("create ");
    default :document.write("thank u ") // end switch without the previous PREVIOUS command 
}
 */


/* *************************************************** lOOP  **************************************************************************/

/* let myname = prompt("Please entry your name");
for (let index =0 ; index < 3; index ++) {
    //document.write("<p> '${myname}'i </p>")
    document.write (`<h1> ${myname} ${index} </h1>`);
    
    
} */

/* let namess = ["alex" ,"ale", "alexenda", "jhon", "jhonnnnn" ]
for (let i = 0 ; i < 3 ; i++){
    console.log(namess[i])
} */

//////////////////// nested loop
/* 
let Cars = ["BMW","Marcedes", "KIA" , "Peugoiut"]
let Models = [2020,2021,2022,2023]
let Colors = ['red','green','blue','yellow']
for (let i = 0 ; i <Cars.length ; i++){
console.log(Cars[i])
for (let j = 0; j < Models.length; j++) {
    console.log(Models[j])
}

    for (let x = 0; x < Colors.length; x++) {
        console.log(Colors[x])
       

        

}
console.log("--------------------------------------------------")

}
 */
/////////////////////////// continue and break

let users =["John","jamel" , "aymen" ,12,56,'saemr' , 555 , "fedi" , "yahya"]

/* for (let i = 0 ; i< users.length; i++)
{ 
    if (users[i] == "John" ){ // si trouve john skip it ou avec typeof 
        continue;
    }
    console.log(users[i])
}
 */

/* for (let i = 0 ; i< users.length; i++)
{ 
    if (users[i] == "12" ){ // la boucle arrete dans 12
        break;
    }
    console.log(users[i])
}
 */
//////////////////////////while and do while
let i=0;
/* while (i<users.length) {
    console.log(users[i])  ,
      i++;
}
 */
do{
    console.log(users[i])  ,
      i++;
}while ( i < users.length) // notre condition 
    