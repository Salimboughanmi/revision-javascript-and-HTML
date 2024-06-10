/* //la deference entre local storage et session storage (local storage only local peranante) et session temporaire dans la session 
// local storage = 5 MB
//sessionStorage = 5 MB -10 MB
//localStorage = data enregistrer dans domaine (url)
// deux methode pour stacke localstorage
////////////////////////////////////////////////////////////////////////////////set localStorage
localStorage.setItem('name', "salim"); // key and value
localStorage.lastname ='boughanmi' 
localStorage.setItem('age',JSON.stringify(55)); // avec JSON.stringify SERA DE type number dans local storage
localStorage.setItem('skills', [1,2,3,4]) // quand ns avons ajouter array value stcker sous forme string ====> faux
localStorage.setItem('number' , JSON.stringify([11,22,23,24,])); // quand ns avons ajouter array value stcker sous forme arrayc====> vrai 

//rq : on peut eliminer JSON.stringify QAND ON PEUT AJOUTER STRING

// ajouter object
localStorage.user = JSON.stringify({  // aavec JSON.stringify object sera sous forme object dans local storage
    name : "fedi",
    lastname : "abidi",
    age : 20
})
//ou 
localStorage.setItem('user2', JSON.stringify({  // aavec JSON.stringify object sera sous forme object dans local storage
    name : "semo",
    lastname : "darragi",
    age : 20
}))

// donc avec JSON.stringify TOUT les input sera sous form String
//////////////////////////////////////////////////////////////////////////////get localStorage
console.log(typeof
    JSON.parse(localStorage.getItem('user'))) //avec JSON.parse get user avec sons type object

console.log(localStorage.key(0))

/////////////////////////////////////////////////////////////////////////////// remove localStorage

localStorage.removeItem('number') // remove item by key

localStorage.clear() // remove all item in local storage */

input = document.getElementById('input')

if (localStorage.length > 0) {
    input.value = localStorage.getItem('ahla')
}

input.onkeyup = function (){
   localStorage.setItem('ahla',input.value)
}