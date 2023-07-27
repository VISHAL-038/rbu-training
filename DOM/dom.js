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
// const heading = document.querySelectorAll('#header-title')


// 1. textContent -> text in b/w of the <> and </> of the elt
// heading.textContent = 'Welcome to DOM';

// 2. innerHTML -> 
// document.querySelector('#my-div').innerHTML = "<p>Hello...</p>" 

// NOTE :- textContent & innerHTML both works the different way,
// textContent changes the text b/w <> & </> while innerHTML adds a child to the given element

// CSS with JavaScript (.style)
// const secondHeading = document.querySelector('#second-heading')

// JS Function - setTimeOut()
// Syntax -> setTimeOut( callfn, timeoutDelay (in ms) )
// setTimeout( () => {
//     secondHeading.style.backgroundColor = 'black'
//     secondHeading.style.color = 'white'
//     secondHeading.style.padding = '10px'
//     secondHeading.style.textAlign = 'center'
// }, 3000)

// setTimeout(() => {
//     heading.innerHTML = "<h2>Welocme to DOM</h2>"
// }, 5000)

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

//  document.getElementById('btn').addEventListener( 'click', () => {
//      console.log('My Button was Clicked!')
//  } )

// document.getElementById('btn').addEventListener( 'dblclick', () => {
//     console.log('My Button was 2 Clicked!')
// } )

// document.getElementById('item-one').addEventListener('click', () => {
//     console.log('Item -1 was clicked!')
// })

// // SUBMIT BUTTON
// // document.getElementById('submitBtn').addEventListener('click', () => {
// //     console.log('Submit Button was clicked!')
// // })
// document.getElementById('submitBtn').addEventListener('click',(e)=>{
//     e.preventDefault()
//     console.log("sumbit button was clicked!")
// })

//document.getElementById('text-input').addEventListener('mouseenter', () => { console.log('Cursror entered the element') }) //go on elemet

//document.getElementById('text-input').addEventListener('mouseleave', () => { console.log('Cursror left the element') }) //go out from element

//document.getElementById('text-input').addEventListener('focus', () => { console.log('Element was focused') }) //select the element


// Keyboard Events

//copy
//document.getElementById('text-input').addEventListener('copy',()=> { console.log("data was copied")})

//cut
//document.getElementById('text-input').addEventListener('cut',()=> { console.log("data was cut")})

//paste
//document.getElementById('text-input').addEventListener('paste',()=> { console.log("data was pasted")})

//keydown
//document.getElementById('text-input').addEventListener('keydown',()=> { console.log("key is down")})

//keyup
//document.getElementById('text-input').addEventListener('keyup',()=> { console.log("key is up")})

//keypress
//document.getElementById('text-input').addEventListener('keypress',()=> { console.log("key is press")})

// document.getElementById('text-input').addEventListener('keypress',(e)=> { console.log(e.target.value);})

//alternative
// document.getElementById('sumbitBtn').addEventListener('click', (e)=>{
// e.preventDefault()
// console.log(document.getElementById('text-input').value )
// });

// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log( document.getElementById('text-input').value )
// })

// FUN ACTIVITY
// document.querySelector('#container-box').addEventListener('mouseenter', (e) => {
//     console.log(e);
//     document.querySelector('#container-box').style.backgroundColor = `rgb(0, ${e.offsetX}, ${e.offsetY})`
// })
// document.querySelector('#container-box').addEventListener('mouseleave', (e) => {
//     document.querySelector('#container-box').style.backgroundColor = `rgb(100, ${e.offsetX}, ${e.offsetY})`   
// })


//DOM RELATIONS AND DOM TRAVERSAIS

//parent9
// console.log(document.getElementById('items').parentElement)

// //children
// console.log(document.getElementById('items').children);
// const items = document.getElementById('items').children
// for(let i=0;i<=items.length;i++){
//     if(i%2==0)
//     {
//         items[i].style.backgroundColor = "#f4f4f4"
//     }
// }

// //first-child
// console.log(document.getElementById('items').firstChild);
// //what is text? thorugh identiation (blank text is there that's why it is giving that if you we want to access then we have to remove the space)
// // why it is not giving correct ans and how to find that?

// // alternative of firstchild is first element child
// console.log(document.getElementById('items').firstElementChild);

// //last-child
// console.log(document.getElementById('items').lastChild);
// //lastElementChilds
// console.log(document.getElementById('items').lastElementChild);

// //siblings-> previous sibling and next sibling
// console.log(document.getElementById('head').previousSibling);
// console.log(document.getElementById('head').previousElementSibling);
// console.log(document.getElementById('head').nextSibling);
// console.log(document.getElementById('head').nextElementSibling);

// console.log(document.getElementById('second-heading').previousElementSibling);
// console.log(document.getElementById('second-heading').previousSibling);

// console.log(document.getElementsByName('script').nextElementSibling);

// console.log(document.getElementById('head').parentElement.parentElement.parentElement);

// Creating HTML using JS
// const myDiv = document.createElement('div')
// myDiv.textContent = 'Demo Text'
// myDiv.setAttribute('id', 'my-div')
// myDiv.setAttribute('class', 'my-div-class')

// // ADding element to the HTML - appendChild()
// document.getElementById('dummy-div').appendChild(myDiv)

// console.log(myDiv)

//item listener application
//value will not come in run time . it will initiate.
document.getElementById('submitBtn').addEventListener('click', (e)=>{
    e.preventDefault()
    const text = document.getElementById('text-input').value
    const newLi = document.createElement('li')
    newLi.setAttribute('class','list-group-item')
    newLi.textContent = text;
    document.getElementById('text-input').value = ''
    document.getElementById('items').appendChild(newLi)
    

})