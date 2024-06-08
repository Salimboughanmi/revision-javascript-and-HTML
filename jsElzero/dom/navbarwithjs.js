
let btnOpen = document.getElementById('open');

let btnClose = document.getElementById('close');
let container = document.querySelector(".container")


btnClose.onclick = function() {
    btnClose.classList.add("hide");
    btnOpen.classList.remove("hide");
    container.classList.add("hide");
}

btnOpen.onclick = function() {
   btnOpen.classList.add("hide");
   container.classList.remove("hide");
   btnClose.classList.remove("hide");
}

