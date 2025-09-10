// Loops and Iteration

//for loop
// a for is best when you know exactly how many many number of times to run a block of code.

/* Syntax: 
   for (initialization; condition; update){
        code to execute
   }
*/

for (let count = 1; count <= 5; count++) {
    console.log("Iterations/Loops ", count)
}

//Addition of even numbers between 1 to 100

let sum =0;
for(i = 1; i <=100; i++){
    if(i % 2 === 0){
        // sum = sum + i;
        sum +=i;
    }
}
console.log("Sum is ", sum);

let language = "Javascript";

for(i = 0; i < language.length; i++){
    console.log(language.charAt(i));
}

//Nested loops

for(let i = 1; i<= 3; i++){
    for (let j=1; j<= 3; j++) {
        console.log("row ",i , "coloumn ", j);
    }
}

//Break and Continue

//Break is to exiting from the loop with no more iterations
//Countinue is to skip perticular iteration and countinew the next one
for (let i = 1; i<=5;i++){
    console.log(i); //o/p  1, 2 , 3
    if(i===3) break;

    // console.log(i); //o/p 1, 2
}

for (let i = 1; i<=5;i++){
    if(i===3) continue;

    console.log(i); //o/p 1, 2,4,5
}

//While loop
//A while loop runs as long as a given conditions is true, It's best when we don't know in advance how many iterations are needed

let counter = 1;
console.log("While loop");
while(counter <=5 ) {
    console.log(counter);
    counter++;
}

//Do- While
// this loop ensures that the code executes at least once before checiking the condition

/* do {
   //code 
} while(condition); */


let num=1;
console.log("Do WHile loop");
do{
    console.log(num);
    num++;
} while(num <= 5);

// Tasks

/* ## 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

```bash
*
* *
* * *
* * * *
* * * * *
``` */

console.log("tasks");
for(let i =1;i<=5;i++) {
    let outputstring=" ";
    console.log(i);
    for(let j=1;j<=i;j++){
        console.log(j);
        outputstring += "* ";
    }
    console.log(outputstring);
}

/* ## 2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10.
For Example: If N = 3, output should be:

```bash
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
``` */

let n=3;
console.log("Multiplication Table");
for(let i=1;i<=10;i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}   

//## 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
let totalSum=0;
for(let i=1;i<=500;i++){
    let oddNumber=(i % 2 !==0);
    if(oddNumber) {
        totalSum = totalSum + i;
    }
}
console.log(totalSum);

/* ## 4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3. */

for(let i=1;i<=20;i++){
    if(i % 3 !== 0){
        console.log(i);
    }
}

/* ## 5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

```bash
Input: 6789
Output: 9876
``` */  

let numToReverse= 6789;
let revDigit="";
console.log(numToReverse);
while(numToReverse > 0){
    let lastDigit=numToReverse % 10;
    revDigit = revDigit + lastDigit;
    
    numToReverse = Math.floor(numToReverse / 10);
}
console.log(revDigit);
