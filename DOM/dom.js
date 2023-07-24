// DOM -> Document Object Model
console.dir(document)
console.dir(document.URL)
console.log(document.all)

const myHeading = document.all[4];
document.all[4].textContent = "welcome to DOM"
console.log(myHeading)