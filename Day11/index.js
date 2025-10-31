console.log("Day 11 - CLosures");

function outer() {
    let x=10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();
//Above function normal one once outer function executes all variables and functions are removed from the memory
//Closures Def: This gives you access to variables of outer function ffrom in inner function even after outer function has finished execution
//Ex for closres

function outerFunc() {
    let y=20;

    return function innerFunc() {
        console.log(y);
    }
}

// outerFunc(); o/p empty
 const func = outerFunc(); //Here outer function lifespan is over, whenever we call func() it willl execute inner function which we returned
/*   console.log(func); o/p is innerFunc() {
        console.log(x);
    }
    in this after executing outer function also we need to access x which is defined in outerFunc
    we can access that variable called "CLOSURES"
    */
console.log(func());


function outerCount() {
    let count=0;
    return function innerCount() {
        count++;
        console.log(count);
    }
}

const retVal = outerCount();
retVal();//1
retVal();//2
retVal();//3

//Real World Example
//Data Encapsulation

function createBankAccount(initialBalance) {
    let balance=initialBalance;
    return {
        "deposit" : (amount) => {
            balance = balance + amount;
            console.log("Deposited amount ",amount," Balance amount ",balance);
        },
        "withdraw" :(amount) => {
            if(amount > balance) {
                console.log("Insufficeint funds");
            } else {
                balance = balance - amount;
                console.log("Deposited amount ",amount," Balance amount ",balance);
            }
        },
        "checkBaance" :() => console.log("Avaiable balance in the account is ",balance)
    }
}

const sivasAccont=createBankAccount(100);
sivasAccont.deposit(300); //o/p ; Depost- 300 and balance 400, because while we executing function on first time with 100 balance
sivasAccont.deposit(500); // o/p :Deposit- 500 and balance 900
sivasAccont.withdraw(200);
sivasAccont.withdraw(900);
sivasAccont.checkBaance();
// sivasAccont = null;

//  -----------------------------------------------------
 //Tasks
//  -----------------------------------------------------
 
// ## 1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
/* Output will be 1 and 2, it is because of closures while executing firtst counter increment to 1 then next counter it will become two */

// ## 2. What will be the output and why?
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

/* Output will be 100
testClosure() returns the inner function like this" function () { return x * x; }()"
The returned function is immediately invoked ().  so it will exected imediatly 
*/

//## 3. Create a button dynamically and attach a click event handler using a closure.
//  The handler should count and log how many times the button was clicked.

function buttonClicks() {
    let count=0;
    document.getElementById('myButton').addEventListener("click", function(){
        count++;
        console.log("Count of button clicked", count);
    } );
}
buttonClicks();

//## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

function createMultiplier(multiplier) {
    return function(number) {
        console.log(number * multiplier);
    }
}
const double=createMultiplier(2);
const triple=createMultiplier(3);
double(5);
triple(20);

/* createMultiplier(multiplier) returns an inner function.
That inner function remembers the multiplier value via a closure.
Every time you call the returned function with a number, it multiplies it by the remembered multiplier. */

/* ## 5. What happens if a closure references an object?
- 1) The object is garbage collected immediately
- 2) The object remains in memory as long as the closure exists
- 3) The object is automatically cloned
- 4) None of the Above. 
Correct answer is 2

When a closure references an object:

That object is not garbage collected immediately, because the closure still holds a reference to it.

It is also not cloned automatically — the closure works with the same object reference, not a copy.

It stays in memory as long as the closure (or anything else) that references it is alive.
*/

// ## 6. Write a function factory of counter to increment, decrement, and reset a counter.
//  Use closure to refer the count value across the functuions.

function countFactory() {
    let count=0;
    return {
        "increment": () => console.log("Count increment to", ++count),
        "decrement": () => {
            if(count <=0){
                console.log("Exceeded count decrement value");
            }
            else {
                console.log("Count Decrement to", count--);
            }
        },
        "reset": () => console.log("count reset into 0", count=0)
    }
}
const countFn=countFactory();
countFn.increment();
countFn.increment();
countFn.increment();
countFn.reset();
countFn.increment();
