console.log("Promises");

//syntax
let promise = new Promise(function(resolve,reject){
    resolve("I'm resolved");
    reject("I'm Rejected");
});

let loading = false;
promise.then(
    (result) => {loading = true;console.log(result)}
).catch(
    (error) => {console.error(error)}
).finally(
    () =>{
        loading=false;
        console.log(loading);
    }
);

// Create a Promise

let getUser = new Promise(function(resolve,reject){
    const user = {
        name:'Siva',
        emial:'challashiva08@gmail.com',
        password:'chalashiva08',
        permissions:['db','hr','admin']
    };
    resolve(user);
});

getUser.then((user) => {
    if(user.name != "Siva") {
        throw new Error(`User ${user.name} is not available`);
    }
    return user.name;
})
.then((name) => {
    console.log(`${name} is exits in the list`);
})
.catch((error) => {
    console.error(error);
});

let promieFinally = new Promise(function(resolve,reject){
    resolve("Testing Finally!");
});

promieFinally
    .finally(() => {
        console.log("Running Finally");
    })
    .then(function(result) {
        console.log(result);
    });


//Calling the .then() handler method multiple times on a single promise is NOT Chaining

let promise1 = new Promise(function(resolve,reject){
    resolve(10);
})

promise1.then((result)=> {
    result++;
    result = result+10;
    return result;
});
promise1.then(function(result) {
    result = result+40;
    return result;
});
promise1.then((result) => {
    result++;
    console.log(result);
})

//Correct way to do promise chaining

promise1.then((result)=> {
    result++;
    result = result+10;
    return result;
})
.then(function(result) {
    result = result+40;
    return result;
})
.then((result) => {
    result++;
    console.log(result);
})

var twoSum = function(nums, target) {
    let resultArr=[];
    for(let i=0;i<=nums.length;i++) {

        for(let j=i+1;j<=nums.length;j++) {
            if(!(nums[i] === nums[j])) {
                if((nums[i]+nums[j]) == target){
                    resultArr.push(nums[i])
                }
            }
        }
    }
    console.log(resultArr);
};

twoSum([2,7,11,15],9);