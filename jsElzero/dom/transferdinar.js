
let dianar = document.getElementById('dinar');

let euro = document.getElementById('euro');
 
let inputdinar = document.getElementById('inputdinar');

let inputeuro = document.getElementById('inputeuro');


euro.onkeyup = function() {
    dianar.value = euro.value *3.9;
    
}

dianar.onkeyup = function() {
    euro.value = dianar.value / 3.9;
}
 