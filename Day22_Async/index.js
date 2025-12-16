console.log("Exec 1st");
setTimeout(()=>{
    console.log("Executed after 2Secs");
},2000);
console.log("Exec 2nd");

let numbers=[3,29,34,67,34,2333,300,290,344];

function getNumbersGreaterThan(){
    let newArray=[];
    for(const iterator of numbers) {
        if(iterator > 400){
            newArray.push(newArray);
        }
    }
    return newArray;
}

console.log(getNumbersGreaterThan());


// ## 1. Pass a function to greet a user and then thank them

function greetings(greet) {
    greet();
    console.log("Thanks for visiting us");
}
function greet() {
    console.log("Welcome to out CODE!");
}

greetings(greet);


//## 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract

function calculator(a, b, operationCallback) {
  // Complete this function
    console.log(operationCallback(a,b));
}

function add(x, y) {
  return x + y;
}
function subtract(x,y) {
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function division(x,y) {
    return x/y;
}
calculator(5, 3, add);
calculator(15, 3, subtract);
calculator(5, 3, multiply);
calculator(35, 3, division);

//## 3. Create a delayedMessage function that prints a message after a delay using setTimeout

function delayedMessage(message, delay, callback) {
  setTimeout(()=>{
    console.log(message);
  },delay);
  callback();
}

delayedMessage("Task complete", 3000, () => console.log("Callback Fired!"));

//## 4. Implement a function that filters numbers in an array based on a condition provided via callback

function filterNumbers(arr, conditionCallback) {
  // Use loop and callback to return filtered array
  for (const element of arr) {
    if(conditionCallback(element)){
        console.log(element);
    }
  }
}

filterNumbers([1, 2, 3, 4], n => n > 2)

//## 5. Execute a sequence of tasks one after another using callbacks

function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

task1(()=> {
  task2(()=>{
    task3();
  });
});