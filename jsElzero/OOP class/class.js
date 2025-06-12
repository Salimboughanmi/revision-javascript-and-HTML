   class User {
    // Declare private field
    #s;

    constructor(id,username,salary) {
        //properiter
        this.i = id ,
        this.u = username , 
        this.#s =salary;
        this.msg = function (){
            
            return `the user ${this.u} has id ${this.i} and his salary ${this.#s}`
        
        };
        this.update = function (newId , newUsername , newSalary){
            this.i = newId ;
            this.u = newUsername ;
            this.s = newSalary ;
        }

}

 updateUser (newId , newUsername , newSalary){
    this.i = newId ;
    this.u = newUsername ;
    this.s = newSalary ; 
}

   }

class Admin extends User {
    constructor(id,username,salary,role) {
        super(id,username,salary ); // appel du constructeur de la classe parente
        this.r = role ; 
    }
    msg (){
        return `the user ${this.u} has id ${this.i} and his salary ${this.s} and his role is ${this.r}`
    }
}
let admin = new Admin(1,"salim",2000,"admin") ; // instanciation de la class
admin.updateUser(888888,'aaaaa',8888555)
console.log(admin.msg()) // appel de la methode msg
