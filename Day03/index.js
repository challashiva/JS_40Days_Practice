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

let b1=5;
let b2=b1++;
console.log(b1 + " b1");
console.log(b2);
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

//Conditional (ternary) operator:

//condition ? val1 : val2;

let age = 23;
console.log(age >= 60 ? "Senior citizen" : "Non Senior citizen");

//Bitwise Operators: & ,|, ^,~,<<,>>

15 & 9 // decimal numbers
/* 
15 / 2 = 7 (1) //1 -- remander
7 / 2 =  3 (1)
3/2 = 1 (1) */

// 9/2 = 4 (1)
// 4/2=2 (0)
// 2/2=1 (0)

// 15 - 1111 (32 bit representation)
//9 - 1001

// 1111 & 1001 = 1001 convert in to decimal from right side 1 * (2 ** 0) + 0 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3)

    1111
    1001
//-----
    1001

console.log((9 << 2) + " Left shift operator"); //36
console.log((9 >> 2) + " right shift operator"); //2
console.log((9 & 2) + " Bitwise AND operator"); //0
console.log((9 | 2) + " Bitwise OR operator"); //11
console.log((9 ^ 2) + " Exclusive OR operator"); //11
console.log(~5 + " Bitwise NOT");  //-6

//Grouping

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r);  //* is the higher precidence so o/p is 7
(p+q) * r //now grouping is higher precidence so o/p is 3*3=9

//typeof Operator 

console.log(typeof "siva");
console.log(typeof 200);
let a7 = [1,2,3,4,5];
console.log(typeof a7);
console.log(typeof null);

 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------
 
//#1
let evenOrOddNum=1101;
console.log((evenOrOddNum % 2 == 0) ? 'even number':'Odd Number');
//#2
let approvedAge=18;
console.log(approvedAge >= 18 ? 'Eligible for driving licence' : 'Not eligible for driving licence');
//#3
let salary=12300;
let bonusOnSalary=12300 * 0.20;
console.log("Per anum CTC with bonus is"+ 12 * (12300 + bonusOnSalary));
//#4
let color='red';
console.log((color == 'green')  ? "GO" : "STOP");
//#5
let elecUnit=100;
let unitCost=150;
let monthlyBill=elecUnit * unitCost;
console.log(monthlyBill+" Annual electricity bill with 20% discount is "+ ((monthlyBill * 12) - (monthlyBill * 0.2) * 12));
//#6
let checkLeapYear = 1990;
let isLeapYearOrNot=(checkLeapYear % 4 === 0 && checkLeapYear % 100 !==0) || checkLeapYear % 400 === 0;
console.log(isLeapYearOrNot ? `the year ${checkLeapYear} is Leap year`: `${checkLeapYear} is not a leap year`);
//#7
let p1=30;
let q1 =50;
let r1 = 10;
let maxNum =(p1 > q1) ? p1 : q1;
console.log((maxNum > r1) ? maxNum : r1);
//8
let count1 = 5;
console.log(count1<< 1 );