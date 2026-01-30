console.log("Event Loops Tasks");

//## 1. What's the output of the code below?

/* 
Options are,

- Let's do it!, f4, f1, f3, f2
- Let's do it!, f1, f3, f2, f4
- Let's do it!, f1, f2, f3, f4
- Let's do it!, f1, f4, f2, f3

Explanation:

- "Let's do it!" is executed by Execution Stack
- f1() calls browser API, so gets added to Callback Queue
- f4() gets added to Execution Stack and is executed
- Event loop finds a callback function f1() in callback queue & executes it
- f2() calls browser API and gets added to Callback Queue. Similarly f3() is added to callback queue
- Now there is nothing in Execution Stack, so event loop checks & finds f2() & - f3() callback functions in callback queue
- f3() goes back into the stack after timeout, and gets executed
- f2() too goes back into the stack after timeout, and gets executed
*/

/* function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function f4() {
    console.log('f4');
}

console.log("Let's do it!");

setTimeout(function() {f1();}, 0);

f4();

setTimeout(function() {f2();}, 5000);

setTimeout(function() {f3();}, 3000); */

/* 

"Let's do it!" is executed first form call stack

f1() calls browser API, so it gets added in to callback queue

f4() gets added to execution stack and is executed immediatly

f2() calls browser API , so it gets added in to callback queue with 5000 delay
f3() calls browser API , so it gets added in to callback queue with 3000 delay

now call stack is empty so Event loops finds f1() in callback queue gets executed

now f3() goes to callstack after timeout and gets executed
now f2() goes to callstack after timeout and gets executed
*/

//Correct answer is Let's do it! , f1, f4, f3, f2

//## 2. What's the output of the code below?

/* function f1() {
    console.log('f1');
}

console.log("Let's do it!");

setTimeout(function() {console.log('in settimeout');}, 0);

f1();
f1();
f1();
f1(); */

/* Options are,

- Let's do it!, in settimeout, f1, f1, f1, f1
- Let's do it!, f1, f1, f1, f1, in settimeout
- Let's do it!, f1, , in settimeout, f1, f1, f1

correct answer is Let's do it!, f1, f1, f1, f1, in settimeout

Let's do it! goes to call stack and executed imediately

settime out calls browser API, so it goes to callback queue

f1() goes to call stack and gets executed upto 4 times

now callstack is getting emtied so Event loop check in callback queue, settime out function moved to execution stack and gets executed
*/

/* ## 3. Which statements are `true`? Select multiple

- [ ] JavaScript is single-threaded  -- correct
- [ ] By default, JavaScript is synchronous  -- correct
- [ ] Only promises make JavaScript asynchronous
- [ ] All function callbacks are asynchronous



## 4. Which statement is `true`? Select Only one

- (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
- (_) The job queue gets higher priority than the callback queue.  -- correct
- (_) The only job of Event Loop is to manage the Call Stack
- (_) The StackOverflow exception is random.


*/

//### 5. Guess the output

/* 
Options are,

- Cartoon, Jerry, should it be right after Tom, before Jerry?, tom  --- correct answer
- Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
- Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
- Error
 */
/* 
const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve('should it be right after Tom, before Jerry?')
  ).then(resolve => console.log(resolve))

  jerry();
}

cartoon(); */

/* 
First cartoon() function moved to call stack
console.log("cartoon") moved to execution context and get executed
tom() calls browser API so it mmoved to callback queue with 5000 delay
promise object calls and it moved to Job queue
jerry() gets added to callstack and is executed
now call stack gets emptied so Event loop checks in Job queue
Promise goes back to the execution stack and gets executed
now Job Queue is empty so Event loop checks Callback Queue
tom function goes back to the execetion stack and is ececuted 
*/

/* 
 6. Guess the output
*/
/* const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after tom and doggy! Really?')
  ).then(resolve => console.log(resolve));
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  jerry();
}

cartoon(); */

/* 
Options are,

- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
- Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
- Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
- None of the above.

Correct answer
------------------------------
- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
*/


// ### 7. Guess the output

/* const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Boom');
}).then(result => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result)); */


/* 
Options are,

- f4, Boom, Sonic, Albert, f1, f3, f2  --- Correct answer
- f4, f1, Boom, f2, Sonic, f3, Albert
- f4, Boom, Sonic, Albert, f3, f1, f2
- f4, Boom, Sonic, Albert, f1, f2, f3


*/

//8. Guess the output

const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));

/* 
Options are,

- f4, f1, f2, Sonic, f3, Albert
- f4, Sonic, Albert, f3, f1, f2
- f4, Sonic, Albert, f1, f2, f3  -- Correct answer
- f4, Albert, Sonic, f1, f2, f3 */