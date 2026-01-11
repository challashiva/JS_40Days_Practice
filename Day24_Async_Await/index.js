const loadMessage = async () => {
    let message =  await "Some message";
    console.log(message);
}

loadMessage();

async function foo() {
    return await 11
}

foo().then(res => console.log(res));



/* ## 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay */

function wait(ms) {
    return new Promise((resolve,reject) =>{
           setTimeout(() => {
                resolve(`Messsage delivered after ${ms}ms`);
           },ms) 
        });
}

async function logMesages() {
    console.log("Before the delay");
    await wait(1000).then(res => console.log(res));
    console.log("After the delay");

}

logMesages();

/* ## 2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises */

async function logMsgs() {
    console.log("one");

    await wait(1000);
    console.log("Two");

    await wait(2000);
    console.log("Three");
}

logMsgs();

/* ## 3. Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console */

async function getJsonData() {
    const response = await fetch("./data.json");
    const data = await response.json();
    console.log(data);
}

getJsonData();


/* ## 4. Use the public API `https://jsonplaceholder.typicode.com/users/1` to fetch and display the user’s name, email, and address on the page */

async function fetchData() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users2/1`);
        if(!response.ok)  throw new Error("Incorrect response");

        const data = await response.json();
        console.log(data);
        displayData(data);
    } catch (error) { 
        console.error(error);
        document.querySelector("#userDetails").innerHTML = `<p>${error}<p/>`;
    }
    
}
function displayData(data) {
    document.querySelector("#userDetails").innerHTML = `
        <h1>User Details</h1>
        <p>${data.name}</p>
        <p>${data.email}</p>
        <p>${data.address.city}</p>
    `
}

fetchData();    

/* ## 5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM */


/* ## 6. Refactor then/catch to async/await

```js
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```
 */

async function refactorData() {
    try {
        const res = await fetch('/api/data');
        if(!res.ok)  throw new Error("Incorrect response");

        const data = refactorData.json();
        console.log(data)
    } catch(error) {
        console.error(error);
    }
}