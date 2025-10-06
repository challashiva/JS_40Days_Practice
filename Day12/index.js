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

console.log("Keyss ", Object.keys(profile));

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

const user3 ={
  name:"Siva",
  address:{city:"bangalore"}
}

const frezeUser = Object.freeze(user3);
user3.age=30;
user3.address.pin=515123;
console.log(frezeUser);
console.log(Object.isFrozen(user3)); //true

const dept ={
  name:'finance'
}

Object.seal(dept);
delete dept.name; // it won't delete

dept.name="HR"; // it will change the name to HR
console.log(dept);

console.log(Object.hasOwn(dept,"name"));
console.log(Object.hasOwn(dept,"address"));

console.log("Learn Object destructuring");



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



 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------
// ## 1. What will be the output and why?

const user4 = { name: "Alex", age: undefined };
console.log(user4.age ?? "Not provided");
//Output will be not provided, ??(Nullish Coalescing) this operator checks 
// if value is null or undefined then return default value

// ## 2. What will happen if we try to modify a frozen object?

const obj4 = Object.freeze({ a: 1 });
obj4.a = 2;
console.log(obj4.a);
//Output will be 1, we cannot change value while objeect is freezess


// ## 3. Given an object with deeply nested properties,
//  extract name, company, and address.city using destructuring

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name:pName,company:{name:cName,location:{city:Pcity}}} = person;
console.log(pName,cName,Pcity);

/* ## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books. */


const bookStore ={
  storeName:"Study Books",
  books:[ {
      title:"JS Book"
    },{
      title:"CSS Book"
    },{
      title:"HTML Book"
    }],
  availability:function(name){
    if(name in this.books) {
      console.log(`${name} is not available`);
    } else {
      console.log(`${name} is available`);
    }
  },
  restock:function(name) {
    this.books.push({title:name});  
    console.log(this.books);  
  }
}

console.log(bookStore);
bookStore.availability("JS1 Book");
bookStore.restock("React");

//## 6. What is the difference between Object.keys() and Object.entries()? 
// Explain with examples

//Objet keys will return key values in arrays -- Returns an array of the object’s own property names (keys).
//Object entries will return array every object in[key,value] pair -- Returns an array of key-value pairs, where each pair is an array [key, value].

console.log(Object.keys(bookStore));
console.log(Object.entries(bookStore));

//## 7. How do you check if an object has a certain property?
//Using Object.hasOwn(obj,property) we can check
console.log(Object.hasOwn(bookStore,"books"));

// ## 8. What will be the output and why?

const person3 = { name: "John" };
const newPerson = person3;
newPerson.name = "Doe";
console.log(person3.name);
/* Objects are stored by reference in JavaScript.

Assigning one object to another variable does not create a copy; both variables point to the same object. */

/* ## 9. What’s the best way to deeply copy a nested object? Expalin with examples */
//For deepclone nested object we need to use structured() method

const cloneObj={
  a:1,
  b:{c:2}
} 

const assignClone= Object.assign({},cloneObj);
assignClone.a=10;
assignClone.b.c=20;
console.log(assignClone.a); //10
console.log(cloneObj.a); //1
console.log(cloneObj.b.c); //20
console.log(assignClone.b.c); //20
//Using assgn nested objects not deeply cloned or copied so we are using structured()method


console.log("StructuredClone()")
const assignClone1= structuredClone(cloneObj)
assignClone1.a=30;
assignClone1.b.c=300;
console.log(assignClone1.a); //30
console.log(cloneObj.a); //1
console.log(cloneObj.b.c); //20
console.log(assignClone1.b.c); //300


// ## 10. Loop and print values using Object destructuiring

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(const {name,address,age} of users) {
  console.log(name, address,age);
}

console.log((users));
