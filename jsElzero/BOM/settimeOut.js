
/* 

   let hello =  setTimeout(function(){
        console.log("hello")
    } , 3000)                // une seul apres 3sec

clearTimeout(hello) // arreter hello */


let i = 0;
 let hi = setInterval(function(){
    console.log(i++)

if (i ==4){
    clearTimeout(hi) 
}
}  , 3000   // chaque 3 sec repeat la fct
 )
