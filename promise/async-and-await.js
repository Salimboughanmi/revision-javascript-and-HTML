/* 
Async
  - async before function mean this function retun a promise
  - asyn and await help in creating asynchronous promise behaviors with cleaner style
*/

/* function getData() {
    return new Promise(
        
        (resolve , reject )=>{
            let user =["salim"]
            if (user.length > 0) {
                resolve("users found")
            } else{
                reject('users NOOOT found')
            }
        } )
        
};

getData().then((resolveValue)=>{
    console.log("accepted " + resolveValue)
} ,(rejectValue)=>{
    console.log("rejected " + rejectValue)
} ) */

    ////////////////////////////////////  meme exemple avec meme reseltat avec autre methode ****************************************************************
/* function getData() {
    let user =[]
    if (user.length > 0) {
        return Promise.resolve("users found")
     } else{
 return Promise.reject('users NOOOT found') }
   
};

getData().then((resolveValue)=>{
    console.log("accepted " + resolveValue)
} ,(rejectValue)=>{
    console.log("rejected " + rejectValue)
} )  */
    ////////////////////////////////////*************************** */ avec async ****************************************************************

// async comme promess
  /* async  function getData() {
        let user =["salim"]
        if (user.length > 0) {
            return "users found"
         } else{
     //return 'users NOOOT found' // or reurn throw
     throw new Error("users NOOOT found");
     
     }   
    };
   console.log(getData()) 

     getData().then((resolveValue)=>{
        console.log("accepted " + resolveValue)
    } ,(rejectValue)=>{
        console.log("rejected " + rejectValue)
    } )   */
/////////************************************************************* Await  ***************************** */
/* 
Await
  - await works only inside async function
  - await make Javascript wait for the promise result
  - await is more elegant syntax of getting Promise result
*/

let myPromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{ resolve("Iam the good promise")} , 3000)
});

async function readData(){
    console.log("before affiche promise")
   //await myPromise.then((resolvedValue)=>{console.log(`HI  ${resolvedValue}`)}).catch("catch my errorrrrr")
   console.log(await myPromise)
    console.log("after affiche promise")
}
readData()