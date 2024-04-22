//*******************************//DOM (document object model)
//////********************************** select et affchage les eelemt de html avec js */
//let head = document.getElementById('id1')// get the id of element by her id
//let cls = document.getElementsByClassName('head')//[index];// get the class of the elements by its class name(its an array) 
//console.log(cls);
//head.innerHTML="this is salim" // change le contenu de l'element  
//head.style.color = "red" // change style by id
//console.log(head)

//let tgname =document.getElementsByTagName('p')[0] // get the name of the element by tagname(h1 , p , etc)(array ,  can we use [] for tag name)
//console.log(tgname) 
//*************** */ querySelector("#pour id" or tagname or .className) expl :
// le problem de query selector quand ns avons utuliser tagname ou classe retourner just le premier tagname , expl

//let q = document.querySelector('h1'); 
//console.log(q) // affiche just premier h1 ctt
// pour resoudrer cette prblm utuliser querySelectorAll ()[pir index qi tu veux]
/* let qselector = document.querySelector('#p2');
console.log(qselector) */

/* let body = document.body.style.background='green'; 
//body.style.background ='red';
console.log(body) // afficher le body 
// pour afficher (title , images[index] , links[] , ... )
let title = document.title.replace ="kkkkkk"
console.log(title)
 */
//////******************************************* ajout et  modifier les attribut de html */
//<element attribute > text </element>
// get attributes :  afficher les attributes  
//set attributes :ajouter ou modifier les attributes
//remove attributes : afficher les attributes

let image = document.getElementById("img")
console.log(image.alt)
console.log(image.src)
console.log(image.className)