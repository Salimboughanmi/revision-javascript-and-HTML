console.log("***********************************  Higher Order Functions -  Reduce **************************************")

 /* let nums =[10 , 15 ,20 , 30 ]

let add = nums.reduce(function(acc , current , index , array) {
    console.log(`Acc => ${acc}`);
    console.log(`current element  => ${current}`);
    console.log(`current element index => ${index}`);
    console.log(`array => ${array}`);
    console.log(acc + current);
    console.log("*************************");
    return acc + current
    
},5) // si on veut ajout 5 au debut de l'array
 
console.log(add) */


console.log("***********************************  Higher Order Functions -  Reduce Practice************************")

///////////exercice remove @ from array and convert to string 
let removeChart=["S","@","A","@","L","@","I","@","M"]

let finalString = removeChart.filter(function(ele){
    return !ele.startsWith('@')
})/* .join('') */.reduce((acc , current)=>acc+current) // reduce qui va retourner 1 seul resultat
console.log(finalString)

/////////////// longest word
let biggest =["salimbough", "salim" , "yassine" ,"ali"]

let check = biggest.reduce(function(acc , current){
    return acc.length > current.length ? acc : current
})
console.log(check);
