
if (localStorage.length > 0 ) {
   // document.body.style.background = localStorage.color;
    document.body.style.background = localStorage.getItem('color');

    
}

function change(color){

    document.body.style.background = color;
    localStorage.setItem('color', color);

}

