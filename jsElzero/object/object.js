//******************************************************Nested object******************************************************* */
/* let car ={
    active : true,
    title : "bmw",
    color : "black",
    prix : 200000,
    year : 2020,
    hello: x =()=>"1rerer",
   
    prog :{
        html : 100,
        css : 90,
        js : 80,
        python : 70,
        salim : function(){console.log("its me")},
        
    },
    isActive  : function (){
        if (car.active === true) {
    
    document.write("<h1> this account is active <h1/>")}   
      else{
         document.write("<h1> this account is not active <h1/>")
     }
  
     },
     phoneNumber :[n1 = 2321233 , n2 = 4545456]

} */
/* console.log(car.hello())
console.log(car.prog.salim())
console.log(car.isActive())
console.log(car["title"]) //ou  console.log(car.title)
console.log(car.phoneNumber[0]) //ou console.log(car["phoneNumber"][1]) */

//******************************************************create object******************************************************* */
// comment ajouter un property or method to object 

/* let user ={name:"salim",email:"boughanmi1salim@gmail.com"}

 user.phoneNumber = 7777777 ; 
 console.log(user.phoneNumber) // ajouter property phone number to user
user["lastName"] = "boughanmi" ;
user.color = "green" ; // add property color to user 
console.log(user)
/// convertir variable to object avec new 
// let student = new Array(["jjjjjj" ,"heloooo","zdd"]) // or string  or number or object ...
let student = new Object({name: "student", phoneNumber:4444, color: "green", lastName: "boughanmi"}) ;
console.log(student) */
//////////////////////////////////////////this keyword////////////////////////////////////////////////

//"use strict"; // use for clean coode (forget let or var for variable= error , two variables are defined in the same variable name error)

let user1 ={name:"salimoo",
email:"boughanmi1salim@gmail.com",
getName : function(){
return `hello ${this.name}` ;
       },
    

}
////////////////////////////////////////////////object.create( in js)
// pour copier un objet dans un autre objet

let user2 = Object.create(user1 , {age : {value : 20}}); // on peut ajouter d'autre proprietary
console.log(user2.getName())
user2.name ="sami" //ou user2["name"]="chames"
console.log(user2.name) // on peut modifier le name de user 2 
user1.color ="black"
console.log(user2.color)
console.log(user2.getName())


//////////////////////////////////////////object assign() in js////////////////////////////////////////////////

// pour fusionner des objets AVEC EUX
let a1 ={
    num1:1
}
let a2 ={
    num2:2
}
let a3 ={
    num3:3
}
let a4 =Object.assign(a1,a2,a3,{num4:4})
console.log(a4)