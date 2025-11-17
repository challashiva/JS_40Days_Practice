console.log("Event Bubblling, Capturing and  Delegation");

//Bubbling

document.getElementById("grandParent").addEventListener('click',function(){
    console.log("Grand parent clicked");
})

document.getElementById("parent").addEventListener('click',function(){
    console.log("Parent clicked");
})

document.getElementById("child").addEventListener('click',function(){
    console.log("Child clicked");
})

//Capturing

document.getElementById("grandParent").addEventListener('click',function(){
    console.log("Captured at Grand parent");
},true)

document.getElementById("parent").addEventListener('click',function(){
    console.log("Captured at parent");
},true)

document.getElementById("child").addEventListener('click',function(){
    console.log("Captured at Child");
},true)

//Event Delegation

document.getElementById("itemList").addEventListener('click',(event) => {
    if(event.target.tagName === "LI"){
        console.log(`you clicked on ${event.target.textContent}`);
    } 
})


//Event stop propagation

document.getElementById("father").addEventListener('click',()=>{
    console.log("Parent clicked");
})
document.getElementById("son").addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("Child clicked");
})