console.log("Event Default Behaviour");

document.getElementById("website").addEventListener('click',function(e){
    e.preventDefault();
    console.log("Default link behaviour is prevented!");
})

document.getElementById("loginForm").addEventListener('click',function(e) {
    e.preventDefault();
    console.log("Form submission prevented!");
})