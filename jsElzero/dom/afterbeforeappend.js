let after = document.getElementById('after');
let before  = document.getElementById('before');
let append = document.getElementById('append');

let content = document.getElementById('content');
let container = document.getElementById('container');


container.style.backgroundColor = '#a9a995';
container.style.height = '30px'

after.onclick = function() {
      container.after(content); // make element content after element container
}

before.onclick= function() {
    container.before(content);
}

append.onclick = function() {
    container.append(content);
}