/* async await
Try, Catch And Finally With Fetch */

/* let myPromise = new Promise((resolve , reject)=>{
     setTimeout(()=> resolve("Iam the good promise") , 3000
    ) 
    // reject (Error("i am the bad reject"))
});

async function readData(){
    console.log("before affiche promise")
   try {
    console.log(await myPromise )
   } catch (error) {
    console.log(`Reason ${error}`)
   } finally{
    console.log("after affiche promise")

   }

}
readData()  */
//********************************************************************************************************* */

/* 
let myPromise = new Promise((resolve , reject)=>{
    setTimeout(()=> resolve("Iam the good promise") , 3000
   ) 
   // reject (Error("i am the bad reject"))
});
async function readData(){
   console.log("before affiche promise")
  try {
   console.log(await myPromise )
  } catch (error) {
   console.log(`Reason ${error}`)
  } finally{
   console.log("after affiche promise")

  }

}
readData()  */

async function fetchData(){
    console.log("before fetch")
   try {
    let myData = await fetch("https://api.github.com/users/elzerowebschool/repos")
    console.log(await myData.json())
   } catch (error) {
    console.log(`Reason ${error}`)
   } finally{
    console.log("after affiche promise")
 
   }
 
 }
 fetchData() 

