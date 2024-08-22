/*   class User {
   static  count = 1 ; 
    salimo (){
        return `theeeeeeeeeeeesalimo user ${this.u} has id ${this.i} and his salary ${this.s}`;
       };
    constructor(id , username , salary){
        //properiter
        this.i = id ,
        this.u = username , 
        this.s =salary ,
        this.msg = function (){
         return `the user ${this.u} has id ${this.i} and his salary ${this.s}`;
        };
    } 
    // methode
    

}
let userone = new User(1 , 'salim' , 3000)

//console.log(userone.u);
console.log(userone.msg())
//console.log(userone.msg) // error : native code sans nom methode
//console.log(userone.salimo) // error : native code avec nom methode
console.log(userone.salimo())
console.log(userone.count)
console.log(User.count)
console.log(User.salimo())  */

//Class Inheritance

class User {
    //private property
    // encapsulation

    #s ;
    constructor(id , username , salaire){
        this.i = id , 
        this.u = username,
         this.#s = salaire        
    }
    changeName(newName){
        this.u = newName
        
    }
    getSalaire(){
        return parseInt(this.#s)
        
    }
    
}

let fedi  = new User (1 , "fadiii",999)
// encapsulation
console.log(fedi.getSalaire())

//fedi.changeName("jamel");

//console.log(fedi.u) 
console.log(fedi.getSalaire())

 class Admin extends User{
    constructor(id , username, salaire ,permission){
        super(id , username ,salaire) 
    this.per =permission ; 
    }
}
let jawher  = new Admin(2 , "jawher" , "permission_jawher" , 1500)
/* console.log(jawher.i);
console.log(jawher.u);
console.log(jawher.per); */
console.log(jawher.getSalaire())

 