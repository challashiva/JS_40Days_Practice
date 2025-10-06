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


 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------
 
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

function standaloneFun() {
    console.log("Inside staandalone function this:", this);
}
standaloneFun(); //Window

//Inside an Arrow Function(standalone)

const standaloneArrow = () =>{ console.log("Standalone arrow function this:", this)};

standaloneArrow(); // Window

//Inside an Arrow Function(as object method)

const arrowFuncInObj=  {
    name:"arrow function",
    arrowMethod:() => console.log("Standalone arrow function inside object this:", this.name)
}
arrowFuncInObj.arrowMethod();

// Inside an object created with the Constructor Function

function Person(name) {
    this.name=name;

    this.sayWishes = function() {
        console.log("Hello! Welcome to JS ",this.name);
    }
}

let p1=new Person('Siva');
p1.sayWishes();

let p2=new Person("Siva");
p2.sayWishes();

// ## 2. What is the problem here? Fix it to log the correct name and explain the fix
/* greet is defined as an arrow function.

Arrow functions do not have their own this. Instead, they use this from the surrounding (lexical) scope.

Here, the surrounding scope is the global scope (or undefined in strict mode).

So this.name is undefined. */

const user21 = {
  sName: "tapaScript",
  greet: function() {
   return console.log("Hellow world", this.sName);
  },
  greet1: function() {
   return () => console.log(`Hello, ${this.sName}!`);
  },
};

user21.greet();
let greetTapa=user21.greet1();
greetTapa();


// ## 3. Can you explain what is the problem here and fix the issue to log the correct name?
/* greetFun() is called as a standalone function, not as a method of obj.

In this context, this is:

undefined in strict mode

window (or globalThis) in non-strict mode

So this.name4 is undefined. That’s why it logs: */

/* Fixing the issue

There are a few ways to fix it.

Option 1: Call the method on the object directly
obj.greet(); 

Option 2: Bind this to the function
const greetFun = obj.greet.bind(obj); // bind `this` to obj
greetFun(); 

Key Takeaways

this in regular functions depends on how the function is called.

Extracting a method from an object (like const greetFun = obj.greet) loses the object context.

Use .bind() or call the method directly on the object to fix it.*/
const obj = {
  name4: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name4}!`);
  },
};

const greetFun = obj.greet.bind(obj);
greetFun();
console.log(greetFun());

// ## 4. What is the problem with the following code? Why isn't it logging the name correctly?
/* greet is a regular function, so when called as user12.greet(), this inside greet correctly points to user12. ✅

Inside greet, you define another regular function inner.

When you call inner(), it’s a standalone function call, not a method of user12.

Therefore, this inside inner is:

undefined in strict mode

window (or globalThis) in non-strict mode

So this.name12 inside inner is undefined. That’s why it logs:

Fix
Option 1: Use an arrow function

Arrow functions don’t have their own this, they inherit this from the surrounding scope.*/
const user12 = {
  name12: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello 4, ${this.name12}!`);
    };
    inner();
    // function inner() {
    //   console.log(`Hello  4, ${this.name12}!`);
    // }
    // inner();
  },
};

user12.greet();
//this.name12 scope is inner() function and inner() scope is greet method

/* ## 5. Create a `Sports` constructor function that takes `name` and `number of players` 
as arguments and assigns them using `this` keyword.
 Then, create two sports instances and log their details */

function Sports(sName,noOfPlayers) {
    this.sName=sName;
    this.noOfPlayers=noOfPlayers;
}

let cricket=new Sports("cricket",11);
let kabaddi=new Sports("Kabaddi",7);
console.log(cricket);
console.log(kabaddi);

// ## 6. Can you attach the car1's `describe()` method to car2 object?
//  Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.call(car2);

car2.describe = car1.describe;
car2.describe()

car1.describe.apply(car2);

const car2Describe = car1.describe.bind(car2);
car2Describe();

/* ## 7. What will be the output of the following code and why?

```js
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
```

Options are:

- A: "Charlie" and "Charlie"
- B: "Charlie" and undefined
- C: "Charlie" and "" (empty string)
- D: undefined and "Charlie"

Options B is correct
for sayHeloo() this refers to the object person 
for sayHelloArrow() arrow function doesn't have onw this so it looks for surrounding scope that parent context person
the person object is global scope so this function this is global and value will be undefine
sayHelloArrow is an arrow function.

Arrow functions do not have their own this, they take this from the lexical scope where they were defined.

Here, it was defined inside the object literal, but the object itself does not create a new this.

In a normal script (non-module, strict mode), this at the top level is undefined.

So this.name → undefined ✅
 */

const person21 = {
  nameC: "Charlie",
  sayHello: function () {
    console.log(this.nameC);
  },
  sayHelloArrow: () => {
    console.log(this.nameC);
  },
};

person21.sayHello();
person21.sayHelloArrow();