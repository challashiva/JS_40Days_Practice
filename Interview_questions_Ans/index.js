// Questions from here
//https://github.com/lydiahallie/javascript-questions



/* 4 What's the output?
+true;
!'Lydia';

*/

console.log(+true);
console.log(!"sd");

/* Ans
The unary plus tries to convert an operand to a number. true is 1, and false is 0.

The string 'Lydia' is a truthy value. What we're actually asking, is "Is this truthy value falsy?". This returns false.
 */

//15. What's the output?
function sum(a, b) {
  return a + b;
}

/* sum(1, '2');
A: NaN
B: TypeError
C: "12"
D: 3 */

/* Ans
Answer: C
JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.

In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'),
 the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".

 */


//16.  What's the output?
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
/* A: 1 1 2
B: 1 2 2
C: 0 2 2
D: 0 1 2
Ans

The postfix unary operator ++:

Returns the value (this returns 0)
Increments the value (number is now 1)
The prefix unary operator ++:

Increments the value (number is now 2)
Returns the value (this returns 2)
This returns 0 2 2.
*/


// 20. What's the output?
function getAge() {
  'use strict';
//   age = 21;
//   console.log(age);
}

getAge();

/* 
A: 21
B: undefined
C: ReferenceError
D: TypeError
Answer: C
With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.
*/

//23 What's the output?
var num = 8;
var num = 10;

console.log(num);
/* A: 8
B: 10
C: SyntaxError
D: ReferenceError

Ans
With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

You cannot do this with let or const since they're block-scoped and therefore can't be redeclared.*/

//27.  What's the output?
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
/* A: 1 2
B: 1 2 3
C: 1 2 4
D: 1 3 4

Ans
Answer: C
The continue statement skips an iteration if a certain condition returns true.*/