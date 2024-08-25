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
    return isNaN(parseInt(ele)) ? ele : ""
}).join("")
console.log(ingnore);


console.log("*********************************** Higher Order Functions - Filter****************************************************")
//get friend with name start with A
let friends =["Ahmed" , "zied" , "Afif" , "jawed" , "Adem" , "adem"]

let StartA = friends.filter(function(ele , i ) { // filtre faire un test =/= map

    return ele.startsWith("A") 
})
console.log(StartA)


// get even Numbers only
let numbers =[22,115,5,35,2,8,4,6]