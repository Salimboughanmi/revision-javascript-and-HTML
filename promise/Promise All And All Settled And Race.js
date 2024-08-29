/* 
Promise
- All 
- All Settled 
- Race
*/

const myFirstPromise = new Promise((resolve ,rej)=>{
    setTimeout(()=>{
        rej("I am the first promise") 
    } ,5000)
} )

const mySecondPromise = new Promise((resolve ,rej)=>{
    setTimeout(()=>{
        resolve("I am the second promise") 
    }, 1000)
} )

const myThirdPromise = new Promise((resolve ,rej)=>{
    setTimeout(()=>{
        resolve("I am the third promise") 
    } , 2000)
} )

/* Promise.all([myFirstPromise ,mySecondPromise ,myThirdPromise]).then((resolvedValue)=>{
    console.log(resolvedValue)},
((rejectedValue)=> console.log(`rejected promise : ${rejectedValue}`))
) */
// si un promess reject , afficher just la peomess reject

/* Promise.allSettled([myFirstPromise ,mySecondPromise ,myThirdPromise]).then((resolvedValue)=>{
    console.log(resolvedValue)},
((rejectedValue)=> console.log(`rejected promise : ${rejectedValue}`))
) // afficher les fullfield and rejected dans array  */

Promise.race([myFirstPromise ,mySecondPromise ,myThirdPromise]).then((resolvedValue)=>{
    console.log(resolvedValue)},
((rejectedValue)=> console.log(`rejected promise : ${rejectedValue}`))
) // le premier dans set out si rejected ou resolved qu'il affiche  (n'est pas dans un array)