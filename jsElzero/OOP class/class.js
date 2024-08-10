/* class User {
    constructor(id , username , salary){
        this.i = id ,
        this.u = username , 
        this.s =salary ,
        this.msg = function(){
         return `the user ${this.u} has id ${this.i} and his salary ${this.s}`;
        };
    } 
    salimo (){
        return `the user ${this.u} has id ${this.i} and his salary ${this.s}`;
       };

}
let userone = new User(1 , 'salim' , 3000)

console.log(userone.u);
console.log(userone.msg())
console.log(salimo());
 */

var a = 10 ; 
function test (){
    var a = 20;
    console.log(a)
}
test()
console.log(a)