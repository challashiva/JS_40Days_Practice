/* ## 1. Create Your First Promise

- Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
- Log the result using .then(). */

const firstPromise = new Promise((resolve,reject) => {
    resolve("First promise resolved!");
});

// console.log(firstPromise);
firstPromise.then((res) => {console.log(res)});

/* ## 2.  Reject a Promise

- Create a Promise that immediately rejects with the message "Something went wrong!".
- Handle the error using .catch(). */

const rejectMsg = new Promise((resolve,reject) => {
    reject("Something went wrong!");
});

rejectMsg.catch((error) => {
    console.log(error);
});

/* ## 3. Simulate Coin Toss

Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second. */
const cionFace = Math.random();
const simulateCoins = new Promise((resolve,reject) => {
    if(cionFace < 0.5) {
        resolve("Heads");
    } else {
        resolve("Tails");
    }
});

setTimeout(() => {
    simulateCoins.then((result) => {
        console.log(`Result after coin toss is ${result}`);
    });
},1000);

/* ## 4. Promise with Condition

- Create a function checkAge(age) that returns a Promise.
- Resolve if age >= 18, reject otherwise. */

function checkAge(age) {
    return new Promise((resolve,reject) => {
        if(age >= 18) {
            resolve("You are eligible to proceed further!")
        } else {
            reject("You are not eligible to proceed further!")
        }
    });
}

checkAge(30)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})


/* ## 5. Chain Promises Sequentially

- Create three Promises that log:
  - "Step 1 done"
  - "Step 2 done"
  - "Step 3 done"
- Chain them using .then(). */

const promiseChain1 = new Promise((resolve,reject) =>{
    resolve("Step 1 done")
})
const promiseChain2 = new Promise((resolve,reject) =>{
    resolve("Step 2 done")
})
const promiseChain3 = new Promise((resolve,reject) =>{
    resolve("Step 3 done")
})

promiseChain1.then((result) => {
    console.log(result);
    return promiseChain2;
})
.then((result) => {
    console.log(result);
    return promiseChain3;
})
.then((result) => {
    console.log(result);
});

/* ## 6. Value Transformation in Chain

- Create a Promise that resolves with 5.
- Chain .then() handlers to double it, then square it.
- Final output should be 100. */

const transformValues = new Promise((resolve,reject) => {
    resolve(5);
});

transformValues.then((result) => {
    return result*2;
})
.then((result) =>{
    console.log(result*result);
})

transformValues
.then(result => result*2)
.then(result => result * result)
.then(finalResult => {
    console.log(finalResult);
});

/* ## 7. Chain with Random Rejection

- First .then() resolves to "Start".
- Second .then() randomly throws an error or returns "Continue".
- Handle rejection gracefully. */

const randomRejection = new Promise((resolve,reject) => {
    resolve("start");
})

randomRejection
.then((result) => {
    console.log(result);
    return result;
})
.then((result) => {
    if(Math.random() < 0.5) {
        return "Continue"
    } else {
        throw new Error("throw an error");
    }
})
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.error(error);
})

/* ## 8. Multiple then() calls on same Promise

- Create a single resolved Promise.
- Attach two different .then() handlers to it.
- Explain that both run independently. */

const multipleThen = new Promise((resolve,reject) => {
    resolve("Multiple then is called!");
});

multipleThen.then((result) => {
    console.log(result);
})
multipleThen.then((result) => {
    console.log(result);
})

/* ## 9.  Return New Promises in .then()

- Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
  - “First”
  - “Second”
  - “Third”
 */

  const returnPromise = new Promise((resolve,reject) => {
    resolve("First");
  });

  returnPromise
  .then((result) =>{
    console.log(result);
    return new Promise((resolve,reject) =>{
        setTimeout(() => { 
            resolve("Second");
        },1000)
    })
  })
  .then((result) =>{
    console.log(result);
    return new Promise((resolve,reject) =>{
        setTimeout(() => { 
            resolve("Third");
        },1000)
    })
  })
  .then((result) => {
        console.log(result);
  });

  /* ## 10. Implement fakeDBQuery()

- Create a function that simulates a DB query with a random delay and returns data (like a user object).
- Chain multiple fake queries. */

const userData = {
    id:123,
    name:"siva"
}

function fakeDBQuery(user) {
    return new Promise((function(resolve,reject) {
        const delay = Math.random()*1000;

        setTimeout(()=> {
            console.log(`Resolved query in ${delay} ms`);
            resolve(user);
        },delay);

    }));
}

fakeDBQuery(userData).then((result) => {
    console.log(result);
})