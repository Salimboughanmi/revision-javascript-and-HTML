/* let dateNow= new Date()
console.log(dateNow)

//get date and time
console.log(dateNow.getTime())
console.log(dateNow.getFullYear())
console.log(dateNow.getHours())
console.log(dateNow.getMonth())
console.log(dateNow.getMinutes())
console.log(dateNow.getTimezoneOffset())
console.log('####################################') */

//////////Generator Function
/* 
function* generateNumbers(){
 yield 1;
 yield 2;
 yield 3;
 yield 4;

}
let generator = generateNumbers();
console.log(typeof generator) */

// Modules Import And Export

//import defaultfunct , { aa ,arr ,saySomthening as say} from "./importAndExport.js";
import * as all from "./importAndExport.js";

console.log(aa);
console.log(arr);
console.log(say());
console.log(defaultfunct());
console.log(all.arr);