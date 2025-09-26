console.log("Day 13: The this keyword");

//Global

// this keyword and window object

console.log("this at global", this);

console.log(window === this);

const tom ={
    name:"tom",
    age:2
}

const jerry = {
    name:"jerry",
    age:3
}

function greetMe(obj) {
    obj.logMessage = function() {
        console.log(`${this.name} is ${this.age} years old`);
    }

    console.log(obj);
}

greetMe(tom);
tom.logMessage();

greetMe(jerry);
jerry.logMessage();

//Inside Function

function sayHello() {
    console.log("this inside function", this);
}

sayHello(); // window

function outer(a) {
    console.log("this inside outer function", this);

    return function inner(b) {
        console.log("this inside an inner function", this);
    }
}

const outerResult = outer(5);
outerResult(3);

//this Inside the arrow function

const getFood =() => this;

console.log("this Inside the arrow function defined in global scope", getFood());


const food = {
    name:"mango",
    color:"yellow",
    //getDesc:() => `${this.name} is ${this.color}` // undefined
    /* getDesc: function() {
        return `${this.name} is ${this.color}`; // mango is yellow
    } */
   getDesc: function() {
        return () => `${this.name} is ${this.color}`;
   }
}
const descFunc=food.getDesc();
console.log(descFunc());


//Explicit Binding -  Call, apply, bind

//Call
function greeting(){
    console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
    name:'siva',
    address:'Banglore'
};

greeting.call(user);

const likes= function(hobb1,hobby2) {
    console.log(this.name + ' likes ' + hobb1 +' , '+ hobby2);
}

const person1 ={
    name:"Siva"
};
likes("teching","reading");

likes.call(person1,"teaching","reading");

// apply()

const hobbiesToApply=["Sleeping","Cricket"];
likes.apply(person1,hobbiesToApply);

//bind()

const newHobbies = function(hobb1,hobby2) {
    console.log(this.name + ' likes ' + hobb1 +' , '+ hobby2);
}


const officer ={
    name:"Bob"
}

const newHbsFun= newHobbies.bind(officer);
newHbsFun("hunting","hockey");


//Tasks
console.log("**** Examples ****");

const user5 = {
    name:"siva",
    greet:function() {
        // const inner = () => {
        //     console.log(`Hello, ${this.name}!`);
        // }

        //2. Save this in a Variable
        //Before ES6 arrow functions, devs often saved this into another variable (like self).
        const self = this; 
        function inner() {
            console.log(`Hello, ${self.name}!`);
        }

        //Use bind() You can force the inner function to use the same this as greet.

        /* function inner() {
            console.log(`Hello, ${this.name}!`);
        }
        const boundInner = inner.bind(this);
        boundInner(); */

        // function inner() {
        //     console.log(`Hello, ${this.name}!`);
        // }
        inner();
    }
};
user5.greet();
 // output is Hello !, 
 /* user5.greet() → here this inside greet = user5 ✅
But inside greet, you defined another function: inner()

When inner() is called, it is a normal standalone function call.

In non–strict mode: this inside inner = window (browser global).

In strict mode: this inside inner = undefined.

Since neither window nor undefined has a property name, you get Hello ! */

const exmpObj ={
    name:"Jhon",
    greet :function() {
        console.log(`Hello, ${this.name}!`);
    }
}

const greetFn = exmpObj.greet;
greetFn(); 
//Here output is Hello, !
/* Now greetFn is just a standalone function reference.

It is not called through exmpObj anymore.

So when greetFn() runs, this falls back to:

window in browsers (non-strict mode), or

undefined in strict mode.

Since window.name is usually empty → you see Hello, !. */

// Use bind()

// Lock the this value when assigning:

greetFn.call(exmpObj);

/* Simple Way to Remember

When you call obj.method(), this → obj.

When you store the method in a variable and call it, it loses its object context → this → global (or undefined in strict mode).

To keep the connection, use bind. */

/* ## 1. Create a table of two columns, `situation` and `value`. Now add the rows for every situations and the value of `this` in that situation. Please cover the following situations

- At the Global
- Inside an Object Method
- Inside the Satandalone non-Arrow Function
- Inside an Arrow Function(standalone)
- Inside an Arrow Function(as object method)
- Inside an object created with the Constructor Function

Please add examples for each of the scenarios. */
// At the Global
console.log("Global level this:" , this); 

// Inside an Object Method
const objMethod = {
    name: "Object Method",
    showThis: function() {
        console.log("Inside Object Method this:", this);
    }
};
objMethod.showThis(); 

// Inside the Standalone non-Arrow Function
