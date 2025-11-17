console.log("Custom Events");

//Step1 : Create a Custom Event
const myEvent = new CustomEvent("userLogIn",{
    detail:{
        userName:"Siva",
        role:"Admin"
    }
})

//Step2: Listen to the custom event

document.addEventListener('userLogIn',function(e){
    console.log(`User login detected ${e.detail.userName}`);
})

//Step 3: Dispatching the Custom Event
document.dispatchEvent(myEvent);


function login(username) {
    const event = new CustomEvent("userLoggedIn",{
        detail:{username}
    });

    document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn",function(e){
    const user=e.detail.username;
    document.getElementById("pId").innerText=`Welcome ${user}!`;
})