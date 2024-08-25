console.log("***********************************  Higher Order Functions -  Reduce **************************************")

 let nums =[10 , 15 ,20 , 30 ]

let add = nums.reduce(function(acc , current , index , array) {
    console.log(`Acc => ${acc}`);
    console.log(`current element  => ${current}`);
    console.log(`current element index => ${index}`);
    console.log(`array => ${array}`);
    console.log(acc + current);
    console.log("*************************");
    return acc + current
    
},5) // si on veut ajout 5 au debut de l'array
 
console.log(add)