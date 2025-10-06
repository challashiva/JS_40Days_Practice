console.log("Day 10 Scope");


//Scope Chain

let globalVar="I an a Global Variable";

function outer() {
    let outerVar ="I am an Outer Variable";
    function inner() {
        let innerVar ="I am an Inner Variable";

        console.log(innerVar); //"I am an Inner Variable"
        console.log(outerVar); //"I am an Outer Variable"
        console.log(globalVar);//"I an a Global Variable"
    }
    inner();

}

outer();
// console.log(outerVar); //ReferenceError: outerVar is not defined

var count=10;

function outer1(){
    var count=20;

    function inner() {
        // var count=30;
        console.log(count); //30 now o/p is 20 aafter sommenting count
    }
    inner();
    console.log(count); //20
}
outer1();
console.log(count); //10

//Varaible Shadowing

let message="I an good";

function situation() {
    let message ="I am not well";
    console.log(message);
}
situation();
console.log(message);

 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------

// ## 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();
/*
    Global execution context (GEC)
     CP(creation phase)
        user
        outer
    Execution Phase(EP)
        Outer
            Function Execution context(FEC)
            CP
                Inner
                user
            EP
                user:Bob
                Function Execution context(FEC)
                    CP
                    EP
                        Executes the function and O/P is "Bob"

    Step1: user is assigned with value of "Alice"
    Step2: Function outer is created and called at bottom
    step3: inside outer inner() function is created
    step4: inside outer again user variable is created and assigned with value of "Bob"
    Step4: Called inner function and in inner we are printing user first it will check any user variable inside inner function
            if it not available then it will see in paraet block which is outer function in outer we are created user varaible
            so it will take the outer function variable

 */


// ## 2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

//## 3. Create a function with a nested function and log a variable from the parent function.

function printMessage() {
    let message="Hello World";
    function child() {
        console.log(message);
    }
    child();
}
printMessage();

//## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function loopFunc(){
    for(let i=0;i<=5;i++) {
        console.log(i);
    }
    // console.log(i);
}
loopFunc();

//Above we can't access i in outside of for loop because 
// "let" is block level scope so it is not available outside if it is block level {}

//## 5. Write a function that tries to access a variable declared inside another function.

function varOuter() {
    varInner();
    function varInner() {
        let innVar="Inner Variable";
        console.log("Inner variable" + innVar);
    }
    // console.log(innVar); we will get refference error
}
varOuter();

// ## 6. What will be the output and why?
// console.log(a);
let a = 10;

//Out put for above is refference error Cannot access 'a' before initialization, If we use "var" we wil get undefined error

// ## 7. Where is the `age` variable accessible?
function showAge() {
    let age = 25;
    console.log(age);
}
showAge();

`Options:
- A: In Global
- B: Only inside showAge (Correct)
- C: It will cause an error
- D: None of the above`
// console.log(age);
// Inside functtion only we can accesss out side we can't

// ## 8. What will be the output and explain the output?
let message1 = "Hello";

function outer() {
    let message1 = "Hi";

    function inner() {
        console.log(message1);
    }

    inner();
}

outer();

//Out put will be "Hi"
//First inner will see in his scope level if varible is not there it will look above the scope if it is available
//it will print the value

// ## 9. What will be the output and why?
let x = "Global";

function outer1() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer1();

//Output will be "Inner" in inner function it self x varible is declared so it no need to look for outer scopes

// ## 10. What will be the output and why?
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

//output will be -1 and -2 
/* when we declare varaible with const we cann't change when those are primitive types like strings, number which is 
    directly assgned values to variables
    const a=10;
    a=20; we cann't reassign
    But we reassign when it holds non-primitive types like object ,arrays , functions
    But when the const holds an object or function, the object’s contents (properties, variables captured in closures, etc.) can still be changed:
    const obj = { a: 1 };
    obj.a = 2;      // ✅ Allowed (modifying property)
    console.log(obj.a); // 2

    obj = {};       // ❌ Error (can't reassign the whole object)
 */