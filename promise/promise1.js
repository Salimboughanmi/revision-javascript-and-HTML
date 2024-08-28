/* Promise Intro And Syntax 
 - Promise In JavaScript Is Like Promise In Real Life 
 - Promise Is Something That Will Happen In The Future 
 - Promise Avoid Callback Hell 
 - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

- Promise Status 
 --- Pending: Initial State 
 --- Fulfilled: Completed Successfully 
 --- Rejected: Failed 
• Story •

--- Once A Promise Has Been Called, It Will Start In A Pending State 
--- The Created Promise Will Eventually End In A Resolved State Or In A Rejected State .
--- Calling The Callback (Passed To Then And Catch) Upon Finishing. 

-Then 
--- Takes 2 Optional Arguments [Callback For Success Or Failure]  */

 /*  const myPromise = new Promise((resolveFunction , rejectFunction)=>{
    let connect = true ; // connect to data base
    //let connect = false
    if (connect){
        resolveFunction ("connection established") // si resoved qu'est ce qu'il retour
    } else{
        rejectFunction(Error("connection failed"))
    }
}).then(
  (resolveValue)=>console.log(`Good ${resolveValue}`) ,  // si promise true qu'est ce que je fait , 1er tjrs fullfield
  (rejectValue)=>console.log(`bad ${rejectValue}`))  // si promise faux qu'est ce que je fait , 2 emme tjrs reject

console.log(myPromise)   */
 

/* console.log("*************************************************************************") */

/*  const myPromisee = new Promise((resolveFunction , rejectFunction)=>{
    let connect = false ; // connect to data base
    if (connect){
        resolveFunction("connection established from promise console")
    } else{
        rejectFunction(Error("connection failed from promise console"))
    }
})

console.log(myPromisee)
myPromisee.then(
    (resolveValue)=>console.log(`Good ${resolveValue} from then `) ,
    (rejectValue)=>console.log(`bad ${rejectValue}  from then    `)
  )  
  myPromisee.then(
    (resolveValue)=>console.log(`Good ${resolveValue} from then `) ,
    (rejectValue)=>console.log(`bad ${rejectValue}  from then    `)
  )   */
 //*-****************************************- Promise - Then, Catch And Finally******************************************

  /*  const myPromise = new Promise((resolveFunction , rejectFunction)=>{
    let employers =["salim " ,"fadi" ,"ahmed" , "saif" ];
    if (employers.length === 4 ) {
        resolveFunction(employers)
    }
    else{
        rejectFunction(Error("numbers of employees NOT 4")) 
    }
    
 });

myPromise.then((resolvedValue)=> {resolvedValue.length = 2 ;
     console.log(resolvedValue)
    //return (resolvedValue)
} ,)
 myPromise.then((resolvedValue)=> {resolvedValue.length = 1 ;
    //return console.log(resolvedValue)
    return (resolvedValue)

} ,).then((resolvedValue)=>{ console.log(`the choose employee is ${resolvedValue}`)}).catch((rejectedReason)=> console.log(rejectedReason)) .finally(console.log("the operation is done"))

 
 */