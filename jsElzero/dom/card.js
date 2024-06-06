/* let container = document.createElement ('div');
document.body.appendChild(container);
container.style.textalign = 'center'

function  elements() {
//create element

 let  card = document.createElement ('div');
  let title = document.createElement ('h1');
  let age = document.createElement ('p');
  let image = document.createElement ('img');
 
//contenet

head = document.createTextNode('title')
agecontent = document.createTextNode ('age')
img.src = "../img/2.jpg"
container.appendChild(card)
title.appendChild(head)
age.appendChild(agecontent)
image.appendChild(image)


//style


}
elements()  */


let names = ['ahmed','ali','gamal','abdelrahman'];
let ages= ['18 years old','17 years old','22 years old','20 years old'];
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
function element(name,ages)
{
    // elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let image = document.createElement('img');
    // content
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    image.src = '../img/2.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);
    // style
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    image.style.width = '100%';
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(image);
    container.appendChild(card);
}
for(let i = 0; i < names.length; i++)
{
    element(names[i], ages[i]);
}