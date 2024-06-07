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
//////******************************************* ajout et  modifier les attribut de html */********************************************** */
//<element attribute > text </element>
// get attributes :  afficher les attributes  
//set attributes :ajouter ou modifier les attributes
//remove attributes : afficher les attributes

/* let image = document.getElementById("img")
console.log(image.alt)
console.log(image.src)
console.log(image.className)
// set attribute of element
//image.src="../img/3.jpg" // change image src
//console.log(image.hasAttribute ('alt'))// verify attribute false or true
console.log(image.attributes)// ou avec [index]
console.log(image.setAttribute ('alt',"salimmmm"))// change attribute
image.removeAttribute ('alt') // remove attribute alt */
//////******************************************* sibling- parent */**********************************************
//element.nextElementSibling : Cette propriété renvoie le prochain élément frère (élément enfant du même parent) de l'élément spécifié dans le document DOM, dans l'ordre de leur apparition dans le code HTML.
//element.previousElementSibling : Cette propriété renvoie l'élément frère précédent (élément enfant du même parent) de l'élément spécifié dans le document DOM, dans l'ordre de leur apparition dans le code HTML.
//element.nextSibling : Cette propriété renvoie le nœud suivant dans l'arbre DOM, y compris les nœuds textuels, les commentaires et les éléments, à l'intérieur du même parent que l'élément spécifié.
//element.previousSibling : Cette propriété renvoie le nœud précédent dans l'arbre DOM, y compris les nœuds textuels, les commentaires et les éléments, à l'intérieur du même parent que l'élément spécifié.
//element.parentElement : Cette propriété renvoie l'élément parent de l'élément spécifié dans le document DOM.
//Ces scripts sont très utiles lors de la manipulation et de la navigation dans le DOM (Document Object Model) en JavaScript. Ils permettent d'accéder aux éléments voisins et parent d'un élément donné dans la structure HTML du document.

//////******************************************* innerHTML- outerHTML */**********************************************

/* let container = document.getElementById('container');
//console.log(container.outerHTML) // afficher et modf tt les elemt sous elt d'id conatainer, expl : tt les elemt de div et les elmt sous elmt div
//console.log(container.innerHTML) // afficher et modif jst les elmt sous id conatainer ctt , l'elmt de id conatainer n'affiche pas
//container.outerHTML ='<p> hellooooo</p>' // changer tt le div et le remplacer avec <p>
container.innerHTML +='<p> hellooooo</p>' // ajouter un <p> dans le <div>
container.innerHTML ='<p> hellooooo</p>' // ajouter un jst <p> dans le <div> et effacer les autre contenu de div
container.innerText='kkkkkkkkkkkk'// ajouter un text
container.outerText='kkkkkkkkkkkk'// remplacer elmt principale par text

console.log(container) */
//////***************************************************** css style */**********************************************


/*  let container = document.getElementById('container')
 container.style.backgroundColor='yellow'
container.style.color='red'

container.style.padding ='10px'
container.style.margin='30px'
// ou un autre methode 
container.style.cssText =`background : green ; color : yellow` */

//////***************************************************** create element by javascript */**********************************************
// create elt

/* let container = document.createElement('div')
let head = document.createElement('h3')
let image = document.createElement('img')

//2-ajouter contenu

let content = document.createTextNode("create element by javascript with create node text")
image.src = "../img/2.jpg"

//3-ajouter element dans element

head.appendChild(content)
container.appendChild(head)
container.appendChild(image)
console.log(container)
container.style.background = "green"
document.body.appendChild(container) */

//////***************************************************** events */**********************************************

let btn = document.getElementById("btn")
function aalert() {
    window.alert("alert pour salim")
}
btn.onclick= aalert
//btn.onclick = () => console.log("btn clicked")


btn.addEventListener('click',function() { document.body.style.background = "red"})

btn.addEventListener('click', function(){btn.style.background = "blue"} )

btn.addEventListener('click', function(){ btn.style.color ='white'}) //=> utuliser addeventlisner quand je veux faire plusieure evenement par contre onclick pour une seul evenement
//btn.addEventListener('click', aalert)                             // => remarque btn.onevent  et dans addEventListener btn.addEventListener('event sans on',function(){]}
