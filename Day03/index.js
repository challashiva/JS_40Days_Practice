let a=12;
let b=8;

console.log(a + b); //30
console.log(a - b); //-10
console.log(b - a); //10
console.log(a / b); //0.5
console.log(a * b); //200
console.log(a ** b); // Exponential operator 10 power of 20

console.log(a % b); // Remainder operator 5)12(2
                                          //10
                                          // 2 this is the remainder

let count =5;
console.log(count++); //5 
console.log(count); //6

//Assignment opertors

let x=10;
x += 5; // x= x + 5; o/p 15
x -+ 3; // x= x - 3; o/p 12 because now x valse is 15 evaluating form above


// Comparison operators

console.log(0 == false); // true
console.log(3 === '3'); // false
console.log(null === null); //true
console.log(undefined === undefined); //true
console.log(NaN === 10);// false

let obj1 = {'name':'script'}
let obj2 = {'name':'script'}

console.log(obj1 === obj2); //false

//Logical operators
// && || ?? !

//Logical AND &&

console.log(false && false); //false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("cow" && "Horse");  // Horse

//Logical OR ||

console.log(false || false); //false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("cow" || "Horse");  // Cow

// Negate Operator !

console.log(!true); // false
console.log(!false); //true

// Nullish Operator ??
/* The nullish coalescing operator (??) specifically checks if the left-hand side is null or undefined.
 Unlike the logical OR operator (||), it does not treat other "falsy" values like 0,
 "" (empty string), or false as a trigger to return the right-hand operand */

let a1= null ?? 1;
let a2= undefined ?? "script";
const a3= 0 ?? "script";
const a4 = NaN ?? 2;
console.log(a1,a2,a3,a4); // 