// DOM -> Document Object Model(Model that converts document into object)

//console.dir(document)
// console.log(document.URL)
// console.log(document.all)

// const myHeading = document.all[4];
// document.all[4].textContent = "Welcome to DOM"
// console.log(myHeading)

// console.log(document.all[20]);
// const myLi=document.all[20];
// console.log(myLi);


// DOM -> Document  Object Model
// console.log(document.all)
// const myLi = document.all[19]
// console.log(myLi)

// IDENTIFIER METHODS :- 
// 1. getElementById()   no requirement to add #
//const myHeader = document.getElementById('header-title')
//console.log(myHeader)

// // 2. getElementsByClassName no requirement to add .
//  const listItems = document.getElementsByClassName('list-group-item')
//  console.log(li stItems)

// // 3. getElementsByTagName   no requirement to add <>
//  const myForms = document.getElementsByTagName('form')
// console.log(myForms)

// 4. querySelector(id/className/tagName) requirement to add #,. for id and class
 //const myHeader1 = document.querySelector('form')
//console.log(myHeader1)

//console.log( document.querySelector('.list-group-item') )

// 5. querySelectorAll
//console.log( document.querySelectorAll('.list-group-item') )

//DOM MANIPULATION METHODS :- 
const heading = document.querySelectorAll('#header-title')


// 1. textContent -> text in b/w of the <> and </> of the elt
// heading.textContent = 'Welcome to DOM';

// 2. innerHTML -> 
// document.querySelector('#my-div').innerHTML = "<p>Hello...</p>" 

// NOTE :- textContent & innerHTML both works the different way,
// textContent changes the text b/w <> & </> while innerHTML adds a child to the given element

// CSS with JavaScript (.style)
const secondHeading = document.querySelector('#second-heading')

// JS Function - setTimeOut()
// Syntax -> setTimeOut( callfn, timeoutDelay (in ms) )
setTimeout( () => {
    secondHeading.style.backgroundColor = 'black'
    secondHeading.style.color = 'white'
    secondHeading.style.padding = '10px'
    secondHeading.style.textAlign = 'center'
}, 3000)

setTimeout(() => {
    heading.innerHTML = "<h2>Welocme to DOM</h2>"
}, 5000)

// document.querySelector("#btn").textContent='press me'
//const myBtn = document.querySelector('#btn')
//myBtn.textContent='press me'

//EVENTS:-
// odd -> black
// even-> grey
// document.getElementById('btn').textContent = 'Press'


// const listItems = document.getElementsByClassName('list-group-item');
// const listArray = []

// for(let i=0; i < listItems.length; i++) {
//     listArray.push(listItems[i])
// }

// console.log(listItems)
// // for(let i=0; i < listItems.length; i++) {
// //     // Odd Items
// //     if(i%2 == 0) {
// //         listItems[i].style.backgroundColor = '#f4f4f4'
// //     }    
// // }

// console.log(listArray)
// listArray.forEach( (item, index) => {
//     if(index%2 == 0) item.style.backgroundColor = '#f4f4f4'
// } )



// EVENTS IN DOM

// element.addEventListner( eventName, () => {} )
// element.addEventListner( eventName, fuctionName )

const myBtn = document.getElementById('btn')
myBtn.addEventListener( 'dblclick', () => {
    console.log('My Button was Clicked!')
} )

document.getElementById('item-one').addEventListener('click', () => {
    console.log('Item -1 was clicked!')
})

// SUBMIT BUTTON
document.getElementById('submitBtn').addEventListener('click', () => {
    console.log('Submit Button was clicked!')
})

// Keyboard Events
