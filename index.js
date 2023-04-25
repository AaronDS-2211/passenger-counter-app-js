let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");//pass in arguments 
//above is something called 'working with the DOM' which means how to use js to modify a website
//document- interacting with an html document
//object - the html document is placed within an 'object' and used by js
//model is a the js representation of the html doc. ex. let countEl. Real thing is <h2>
//document and getElementBy Id are the chef and inside the parenthesis are the ingredients
let count = 0;

function increment(){
    count += 1
    countEl.textContent = count
}


function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}