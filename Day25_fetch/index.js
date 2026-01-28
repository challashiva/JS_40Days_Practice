/* ## 1. Use `fetch()` to retrieve a list of users from `https://jsonplaceholder.typicode.com/users` and log the names to the console */
const URL="https://jsonplaceholder.typicode.com";
async function getName() {
    try {
        const response = await fetch(`${URL}/users`);
        if(!response.ok) throw new Error("No user data found");

        const data = await response.json();
        console.log(data);
        data.forEach(element => {
            console.log(element.name)
        });
    } catch (error) {
        console.error(error);
    }
}

console.log(getName());


/* ## 2. Fetch all posts by userId=1 from `https://jsonplaceholder.typicode.com/posts?userId=1` and display the titles in the DOM */

async function getPosts() {
    try {
        const response = await fetch(`${URL}/posts?userId=1`);

        const data= await response.json();
        console.log(data);
        displayPosts(data);
    } catch (error) {
        console.error(error)
    }
}

function displayPosts(data) {
    let divElem=document.querySelector("#titles");
    divElem.innerHTML = data
        .map(data => `<h3>${data.title}</h3>`)
        .join("");
}
getPosts();

/* ## 3. Send a `POST` request to `https://jsonplaceholder.typicode.com/posts` with a new post (title, body, userId). Show the response in console */

async function postReq() {
    try {
        const response = await fetch(`${URL}/posts`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userId:1,
                title:'Modified from url',
                body: "Updated post body",
            })
        });
        if(!response.ok) throw new Error("HTTP error");

        const contentType=response.headers.get('Content-Type');
        console.log(contentType.includes('application/json'));

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

postReq();

/*## 4. Update the post with `ID = 1` by sending a `PUT` request with a new title and body. Use the same endpoint
 */

async function putReq(){
    try {
        const response = await fetch(`${URL}/posts/1`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json; charset=UTF-8'
            },
            body:JSON.stringify({
                userId: 1,
                id:1,
                title:'Modified put request',
                body: "Updated put body",
            })
        });

        const result = await response.json();

        console.log("Put request",result);
    } catch (error) {
        console.error(error)
    }
}

putReq();

//## 5. Send a `PATCH` request to update just the title of post `ID = 1`

async function patchReq(){
    try {
        const response = await fetch(`${URL}/posts/1`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json; charset=UTF-8'
            },
            body:JSON.stringify({
                id: 1,
                title:'Modified patch request',
                body: "Updated post body",
            })
        });

        const result = await response.json();

        console.log("Patch request",result);
    } catch (error) {
        console.error(error)
    }
}

patchReq();

//## 6. Send a `DELETE` request to remove post with `ID = 1`. Log the status of the response

async function deleteReq(){
    try {
        const response = await fetch(`${URL}/posts/1`,{
            method:'DELETE',
            
        });

        // const result = await response.json();

        console.log("Delete request",response.status);
    } catch (error) {
        console.error(error)
    }
}

deleteReq();

//## 7. Send a POST request to `https://jsonplaceholder.typicode.com/posts` with `Content-Type: application/json` in headers. Log the response

async function postRequest() {
    try {
        const response = await fetch(`${URL}/posts`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                body:'Posting new values',
                title:'Posting response'
            })
        });

        console.log("Post response status",response.status);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

postRequest();

//## 8. Create a custom function `request(url, options)` that wraps fetch. Use it to `GET` users and `POST` a new post
const postOptoin = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    body: "Posting from request object",
    title: "Posting response",
  }),
};
async function request(url,options) {
    try {
        const response = await fetch(url,options);
        if(!response.ok) throw new Error('Invalid request');

        const data = await response.json();
        console.log("Data from request function",data);
    } catch (error) {
        console.error(error);
    }
}
request(`${URL}/posts`,postOptoin);
request(`${URL}/posts/1`);


//## 9. Make a fetch call to a broken URL and use `.catch()` or `try...catch` to show a user-friendly error message

async function brokenUrl() {
    try {
        const response = await fetch(`${URL}/posts`);

        if(!response.ok) throw new Error('Invlid request');

        const data = await response.json();

    } catch (error) {
        console.error(error);
    }
}

brokenUrl();

//## 10. Use `AbortController` to cancel a long-running fetch request (you can delay the response using a mock server or setTimeout)

const controller = new AbortController();
const signal = controller.signal;


async function fetchUser() {
    try {
        const res = await fetch(`${URL}/posts`,{signal});
        if(!res.ok) throw new Error("invalid request");

        const data = await res.json();

        console.log(data);

    } catch (error) {
        if(error.name === "AbortError") {
            console.log("Fetch Aborted");
        } else {
            console.log(error)
        }
    }
}
setTimeout(()=>{
    controller.abort();
},500);
setTimeout(() => {
    fetchUser();
},2000)


