console.log("Sample JS");

const ids = ["1","2","3","4"];


const fetchUrl = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
}

function displayData(data) {
  console.log(
    `
        Id:${data?.id},
        Name:${data?.name},
        Company:${data?.company?.name}
        City:${data?.address?.city}
    `,
  );
}

const loopFetch = () =>{
    for(let i=0;i<ids.length;i++) {
        console.log(`***Fetching details of ${ids[i]}***`);

        const response = fetchUrl(ids[i]);

        response.then((response) => {
            response.json().then((data) => {
                displayData(data);
            })
        })
    }
}

// loopFetch();

const asyncLoop = async () => {
  for (let i = 0; i < ids.length; i++) {
    console.log(`===Fetching details of ${ids[i]}===`);
    const response = await fetchUrl(ids[i]);

    const data = await response.json();
    displayData(data)
  }
};

// asyncLoop();

const loopAll = async () => {
    const response = await Promise.allSettled(ids.map((id)=>fetchUrl(id)));
    console.log(response);
    const data= await Promise.allSettled(
        response.map((response) => response.value.json())
    )
    console.log(data);
    data.map((userinfo) =>{
        const user = userinfo.value;
        console.log(`===Fetching details of ${user.id}===`);
        displayData(user);
    })
}
// loopAll();


//Promise Chain vs No Chain

Promise.resolve(10)
    .then(x => x*10)
    .then(x=>x+10)
    .then(x=> console.log(x));


// fetchUser()
//     .then(user => {
//         getPosts(user.id);
//     })
//     .then(posts => {
//         console.log(posts);
//     });

Promise.resolve(1)
.then(x=>{
    console.log(x);
    return x+1;
})
.then(x=>{
    console.log(x);
    return Promise.resolve(x+1);
})
.then(x=>{
    console.log(x);
})

Promise.resolve()
.then(()=>{
    return Promise.reject("Failed");
})
.then(()=>{
    console.log("Won't run")
})
.catch((err)=>{
    console.log(err)
})

//Missing functions in .then() handler

const hello = Promise.resolve("Hello");

hello.then("world").then((res)=>console.log(res));