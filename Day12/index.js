console.log("Day-12 Objects");

let user ={
    name:"Siva",
    age:34,
    "is admin":true
}

console.log(user.name); //Siva
console.log(user.age); //34

user.isSeeniorCitizen=false;
user["movie lover"] = true;

console.log(user);
// console.log(user.is admin); //we will get erroe here
console.log(user["is admin"]); // true
user.age=34;
console.log(user);

// delete user.isSeeniorCitizen;
console.log(user);

const someKey="age";

console.log(user.someKey); //Undefined we can't access variable like this
console.log(user[someKey]); //34

// Add key values dynamicall using prompt

// let car = prompt("Which is your fav car?");

// let favCars = {
//     [car] : 5
// }

// console.log(favCars);

//Constructor Function

function Car(name,model){
    this.name=name;
    this.model=model;
}

const bmrCar = new Car("BMW",2020);
console.log(bmrCar);

//Object construction

let user1 = new Object();
user1.name="siva";
user1.age=35;
console.log(user1);

//Factory

function createUser(name,age) {
    return {
        name,
        age
    }
}

const newUser= createUser("Siva",35);
console.log(newUser);
const newUser1= createUser("Bob",35);
console.log(newUser1);


let profile = {
    name:'siva',
    age:30,
    company:'Smartapp',
    message: function(){
        console.log(`${this.name} works at ${this.company}`);
    },
    address :{
        city:'Banglore',
        pin:560007,
        country:'India',
        greeting: function() {
            console.log("Welcome to India");
        }
    }
}

//object.keys()

console.log(Object.keys(profile));

//in operator
console.log("state" in profile);//false
console.log("name" in profile); // true

// for...in loop
for(let key in profile){
    console.log(key, profile[key]);
}

console.log(profile.name);
profile.message();

console.log(profile.address.city);
profile.address.greeting();


//Object Reference

let fruit={name:"mango"};
let newFruit={name:"mango"};

console.log(fruit == newFruit); // false
console.log(fruit === newFruit); // false

fruit = newFruit;
//both are pinting to the same reference in the memory
console.log(fruit == newFruit); // true
console.log(fruit === newFruit); //true

//Static Methods

const target={p:1,q:2};
const source={a:3,b:5};

const targetRes=Object.assign(target,source);
console.log(targetRes);

const obj1={
    a:1,
    b:{c:2}
}

const obj2=Object.assign({},obj1);

console.log(obj2); //{a:1,b{c:2}}
obj2.b.c =3;

console.log(obj1.b.c);//3
console.log(obj2.b.c); //3

obj2.a=100;

console.log(obj1.a); //1
console.log(obj2.a);//100

/* Object.assign() only does a shallow copy.
That means if the value of a property is an object or array, the reference (memory address) is copied,
 not the actual nested data. */

/* structuredClone() is a built-in method (added in modern browsers & Node.js 17+) that creates a deep clone of a given object or value.

Unlike Object.assign() or the spread operator ({...obj}), which only do shallow copies, structuredClone() recursively copies all nested objects. */

const obj = {
  a: 1,
  nested: { b: 2 },
};

const copy = structuredClone(obj);

copy.nested.b = 99;

console.log(obj.nested.b);  // 2 ✅ (unchanged)
console.log(copy.nested.b); // 99


// Declare the global variable
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      // no change
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  // Decide whether to Bet or Hold
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(10));
console.log(cc("J"));
console.log(cc("Q"));
console.log(cc("K"));



