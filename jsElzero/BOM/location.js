//https://www.w3schools.com/bootstrap/ ==href
//https == protocole
//www.w3schools.com/ ==hostname
// /bootstrap/ == pathname

//GET

/* console.log(location.href)
console.log(location.protocol)
console.log(location.hostname)
console.log(location.pathname) */

// SET
location.href = "https://www.w3schools.com/bootstrap/"
/* location.protocol = "http:"
location.hostname = "www.w3schools.com"
location.pathname = "/bootstrap/" */
location.href = "fb.com" // changer to another link


//reload
location.reload();

location.assign('http://localhost') // changer to another link and keep data in previous link
location.replace('http://localhost') // changer to another link and cant back previous link 