// "use strict"

console.log("Practice questions");
console.log("basic Star program");
let printStat="";
let n=3;
for(let i=1;i<=n;i++) {
    for(let j=1;j<=n;j++) {
        printStat += "* ";
    }
    printStat +="\n";
}
console.log(printStat);

console.log("Pyramid Number Pattern");

/* 
                1
            2   2   2
        3   3   3   3   3
    4   4   4   4   4   4   4
5   5   5   5   5   5   5   5   5
*/
/* 
Assumptions
each row we need to print (row-1)  spaces
after spaces we need to print number which is row number
we need to print odd no of times only
*/
let rows=5;
for(let i=1;i<=rows;i++) {
    let result="";
    for (let j=1;j<=rows-i;j++) {
        result += "\t";
    }
    for (let k=1;k<=(2*i)-1;k++) {
        result +="\t"+i;
    }
    console.log(result);
}

//Problem: Print a hollow square of size n × n.
/* 
    *****
    *   *
    *   *
    *   *
    *****
    
    Assumptions
    1.print start with the size of n*n
    2.print first and last coloumns full stars
    3.remainig coloums that n-2(5-2=3) print  first and last star remaning empty space that is n-2 times(5-2=3)
*/
let noOfRows=5;
let result="";
for(let i=1;i<=noOfRows;i++){
    for(let j=1;j<=noOfRows;j++){
        if(i === 1 || i === noOfRows || j === 1 || j === noOfRows){
            result += "*";
        }else {
            result += " ";        
        }
    }
    result +="\n";
}
console.log(result);

/* var a = 1
function foo(){
 var a = 2
 console.log(a)
}
foo()
console.log(a);
I think the answer is pretty straightforward. If you said 2 and 1, you are correct. This question is about Scope. In JavaScript, there are two types of scopes: Global Scope and Local Scope, variables declared within a JavaScript function become local, and variables declared outside of the function become global.
The var a = 1 declared out of the function and saved in global memory. The var a = 2 declared inside the function and saved in local memory. it's a different place in memory (even if they have the same name).
---------------------------------------------------------------------------------------------------------------

Q2)
function foo(){
    a = 2
  }
  foo()
  console.log(a);
  ANS:If you said a is not defined, you have healthy thinking, but the answer is 2. This is why JavaScript is a unique language. According to the logic we talked about in the previous question, the variables should be in local scope, But, if you pay attention, the variables didn't declare (without var, let, const). When we do assignments without declarations in JavaSacript (a=2), the compiler will save the variable in the global scope. FYI, we can fix this behavior by add "use strict".
*/


function foo() {
    a=5;
    console.log(a);
}
foo();
console.log(a);

var answer =0;

const baseValue = value => multipleValue => value*multipleValue;

const multiple =  baseValue(2);
answer=multiple(5);
console.log(answer);

/* The answer is 10. This question is about Closures. In simple words - Closures are functions that return another function, and the inner function has access to the outer variables function (You can read more here). We can look at Closures like Global scope (outer function) and Local scope (inner function) that leaves inside the local scope (baseValue). Like regular Scope in JavaScript, the Local scope has access to Global Scope. For that reason, the compiler can know what is value.
FYI, This doesn't seem like a "conservative" Closure example because it's writing in ES5 syntax (arrow function). The "conservative" looks like:

var answer = 0;

function baseValue(value){
   return function(multipleValue){
      return value * multipleValue;
   }
}

const multiple = baseValue(2);
answer = multiple(5);
console.log(answer); */