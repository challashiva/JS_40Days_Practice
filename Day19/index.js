function clickMe() {
    console.log("Button Clcked");
}

const myBtn=document.getElementById("myBtn");

myBtn.onclick = function()  {
    console.log("Button clicked form Js")
}

function buttonClick(){
    console.log("Button clicked form Js Function");
}
//it overwrites the first click event 
// myBtn.onclick = buttonClick;

// it wont work because of function will execute already while loading
//so use arrow function while you want to call function on events
// myBtn.onclick=buttonClick();

myBtn.onclick = () => buttonClick();

// addEventListener and removeEventListener

const btn = document.getElementById("btn2");

let count=0;

const handleClick = function() {
    console.log(`count is increment to ${count}`);
    count++;
}
const helloClick = function() {
    console.log("Hello World");
}
btn.addEventListener("click",handleClick);
btn.addEventListener("click",helloClick);

// btn.removeEventListener("click",handleClick);
/* btn.addEventListener("click",function() {
    console.log("Hello World");
}) */
// we need to separate the fucntion in variable and assign that function here
//while removing event listener it targeted to the function reference


// DOm Content loaded

// will never run

document.onDOMContentLoaded=function(){
    console.log("DOM Content Loaded...");
}

// this will run
document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM Content Loaded...");
})

const searchInput=document.getElementById("search-id");

searchInput.addEventListener("change",function(event){
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.currentTarget);
})