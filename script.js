// Queries
const btn = document.querySelector('button')
const input = document.querySelector('input').value
// console.log(btn)
// // Functions
// //Event Listeners
btn.addEventListener('click', (event) => {
    // the first parameter that you pass on callback function will always be the event object
    // console.log(event.target)
    // console.log('this', this)
    // creating an element
    const li = document.createElement('li')
    const input = document.querySelector('input')
    // const ul = document.querySelector('ul')
    // console.log(input.value)
    console.log('li before adding what we typed',li)
   
// Append new li to ul  
const ul = document.querySelector('ul')
li.textContent = input.value
ul.appendChild(li)  
input.value = ''

// REMOVE EVENT LISTENER
ul.removeEventListener('click', handleClick)

})

// ==================
// event delegation
const ul = document.querySelector('ul')
function handleClick(e){
    if(e.target.localName === 'li'){
        // e.target allows to isolate the element that we clicked on and change its font color only
        e.target.style.color = 'white'
    console.log("clickable")
    }
}
ul.addEventListener('click',handleClick)
// =========================================================================================
//  if you don't need to pass any arguments, then omit the parenthesis when invoking the callback function. It will automatically send the event object to the callback function.
// ul.addEventListener('click', handleClick)

// if you need to pass more arguments you will need to write your event listener like this below
// ul.addEventListener('click', (e) => handleClick(e, 'Teo'))
// =========================================================================================
// EVENT BUBBLING
// const grandparent = document.querySelector('.grandparent')
// const parent = document.querySelector('.parent')
// const child = document.querySelector('.child')

// grandparent.addEventListener('click', (e) => {
//     console.log('I am the grandparent.')
// })

// parent.addEventListener('click', (e) => {
//     console.log('I am the parent.')
// })

// child.addEventListener('click', (e) => {
//     // stop the event from propagating all the way up to the document.
//     e.stopPropagation()
//     console.log('I am the child.')
// },{capture : true})

//  document.addEventListener('click', () => {
    //     console.log('I am the God Father')
    // })