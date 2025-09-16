console.log("Day 06 Functions");

//define or declare a function

function printThis() {
    console.log("Printing...");
}

//Call or Invoke a fnction
printThis();

//Function as an Expression

let printMe = function(){
    console.log("Print Me....");
}
printMe();
console.log(printMe);
/* Output is like this
ƒ (){
    console.log("Print Me....");
} */

//paameters and arguments

function sum(a,b) {
    const result = a + b;
    return result;
}

let result =sum(10,9);
function double(x) {
    return 2*x;
}
console.log(double(result)); 

//default parameters

function calc(a, b=0) {
    return (2*(a+b));
}

const resVar = calc(3,2);

console.log(resVar);

//Rest Parameters

function calculateThis(x,y, ...rest){
    console.log(x, y, rest);
}

calculateThis(1,2,3,4,5,6);

//Nested functions

function outer(){
    console.log("outer");
    return function inner()  {
        console.log("Inner");
    }
    //inner();
}
let retFunc = outer();

console.log(retFunc());

//Callback function

function foo(func) {
    console.log("foo");
    
    func();
}

foo(function(){
    console.log("buz");
});

//Pure functions & Side effects

function add(a,b){
    return a+b;
}

console.log(add(2,3)); //5 (same output will come for below also)
console.log(add(2,3)); //5
console.log(add(2,3)); //5

let total=0;
function addToTotal(num) {
    total +=num;
    return total;
}

console.log(addToTotal(5));//5 (different reults with same input)
console.log(addToTotal(5)); //10
console.log(addToTotal(5));//15

//Arrow Functions

const addtotal = (a,b) => a+b;

console.log(addtotal(3,5));

//IIFE(Immediaely Invoked Function Expression)

(function iifeAdd(a,b){
   console.log(a+b);
})(4,6);

//Recussion

function recussiveFunc(n) {
    if(n===0){
        console.log("Ends");
        return;
    }
    console.log(n);
    recussiveFunc(n-1);
}

recussiveFunc(3);

//Tasks

/* ## 1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
Formula: (Celsius * 9/5) + 32 = Fahrenheit */

function celsiusToFahrenheit(celsius) {
    let Fahrenheit = (celsius * (9/5)) + 32;
    console.log(Fahrenheit);
}

celsiusToFahrenheit(35);

/* ## 2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well. */

function  findMax(num1, num2) {
    if(num1 === num2) return console.log("both are equal");
    if(num1 > num2) {
        console.log(num1 + " is greter number")
    } else {
        console.log(num2 + " is greter number")
    }
}

findMax(20,10);

/* 
## 3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward).
 You can not use any string function that we have not learned in the series so far. */

function isPalindrome(str) {
    let palndromStr="";
    for(let i=1;i<=str.length;i++) {
        palndromStr  += str[str.length-i];
    }
    if(str === palndromStr) {
        console.log(str + " is palindrome");
    } else {
        console.log(str + " is not palindrome");
    }
    console.log(str,palndromStr);
}

isPalindrome("racecar");

/* ## 4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n.
Example 5! = 5 * 4 * 3 * 2 * 1 */

function factorial(n) {
    let total=1;
    for(let i=1;i<=n;i++) {
        total *= i; 
    }
    console.log("factorial of "+n+"! is "+total);
}
factorial(3);

/* ## 5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string. */


function countVowels(str) {
    let countvowels=0;
    let vowelStr="aeiou";
    for(let i=0;i<=vowelStr.length-1;i++){
        for(let j=0;j<=str.length-1;j++){
            if(vowelStr[i] === str[j]) {
                countvowels++;
            }
        }
    }
    console.log("No of vowels present in the string "+str +" is "+countvowels)
}

countVowels("Siva prasadi");


/* 
## 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word.
 You can use the toUpperCase() method of string to convert the lowercase to uppercase. */

let sentenceToConvert="javascript is programming language";
let convertToUpppercase="";
let converToUpper=true;
for(let i=0;i<=sentenceToConvert.length-1;i++){
    let ch=sentenceToConvert[i];
    if(converToUpper && ch !== " "){
        convertToUpppercase += ch.toUpperCase();
        converToUpper = false;
    } else {
        convertToUpppercase += ch;
    }
    if(ch === " "){
        converToUpper=true;
    }
}
console.log(convertToUpppercase);

/* 
## 7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. 
Here the Second word must be supplied using paramneter and argument. */

(function(str){
   console.log("Hello, "+str); 
})("JavaScript");

/* ## 8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter. */

function greet(name,callback) {
    callback(name);
}

function calBack(str) {
    console.log(str);
}

greet("Welcome to Call backH",calBack);

/* 
## 9. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {
    f1();
}
f2();
``` */

// 1.f2() called and it goes to the stack
// 2. f2  stays in stack still it completes the function
// 3.in f2 f1() called
// 4. f1 goes to stach in positions of 2 and comeout from stack after execution
// 5.then f2 will comeplete execution and come out from stack , now stack is emptied

/* 
## 10. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();


Stack
f2()                
------
|     |
|     |
-------
|       |
|       |
--------
|       \
|  f2     |  f2 cam3 to stack and exist after exection
_________
f3()
------
|     |
|     |
-------
|    f1   |     f1 is called here and executesm, after executes it is removed from stach 
|       |
--------
|   f3    \     f3 called and came to the stack, in f3 is called inside f1 is called
|       |       after f1 executed , f3 also completes it's execution and cameout of stack
_________   

f1()
------
|     |
|     |
-------
|       |
|       |
--------
|       \
|     f1  |  f1 called and came to stack and exists after exection
_________
``` */