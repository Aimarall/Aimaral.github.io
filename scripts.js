// let name = document.querySelector('#name');
// let message = document.querySelector('#message');
// let color = document.querySelector('#color');
// let button = document.querySelector('button');
//   let div = document.querySelector('#chat');
// button.addEventListener('click', function () {
  
//     let spanName = document.createElement('span');
//     let spanMeassge = document.querySelector('span');
//     div.append(spanName);
//     console.log(input.value);


// });

// document.body.append(div);


fetch('https://it-academy-proect-default-rtdb.firebaseio.com/people.com')

let btn1 = document.querySelector('#btn1')
let name = document.querySelector('#name')
let massege = document.querySelector('#massage')
let color = document.querySelector('#color')
let chat = document.querySelector('#chat')

btn1.addEventListener("mousedown", function(){
    let div = document.createElement('div')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    div.append(span1)
    div.append(span2)
    chat.append(div)
    span1.innerText = name.value + ": "
    span2.innerText = massege.value
    span1.style.color = color.value
})
