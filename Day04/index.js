console.log("Day 04");

// Difference between multiple if blocks and if else block

let x = 0;

if (x === 0) {
  console.log(0);
}

if (x >= 0) {
  console.log("Greater than 0");
}

if (x <= 0) {
  console.log("Less than 0");
}

//In above cases are executed but it should execute only condition

if (x === 0) {
  console.log(0);
} else if (x >= 0) {
  console.log("Greater than 0");
} else if (x <= 0) {
  console.log("Less than 0");
}

//Here output is 0 and other conditions will not execute, it will come out of the condition

let outerCondition = false;
let innerCondition = true;

if (outerCondition) {
  console.log("Outer if");
  if (innerCondition) {
    console.log("inner if");
  } else {
    console.log("inner else");
  }
} else {
  console.log("Outer else");
}

//Swith case

let position = 13;

switch (position) {
  case 1:
    console.log("print 1");
    break;
  case 2:
    console.log("print 2");
    break;
  case 3:
    console.log("print 3");
    break;
  case 4:
    console.log("print 4");
    break;
  default:
    console.log(`${position} is not available`);
}

let day = 4;

switch(day){
    case 1:
            console.log("Monday");
            break; 
    case 2:
            console.log("Tuesday");
            break;
    case 3:
            console.log("Wednesday");
            break; 
    case 4:
            console.log("Thursday");
            break;
    case 5:
            console.log("Friday");
            break; 
    case 6:
            console.log("Saturday");
            break; 
    case 7:
            console.log("Sunday");
            break;
    default:
            console.log("Invalid Day");
}

let name1="Javascript";

switch(name1) {
    case "Javascript":``
                console.log("Siva is learnig JS");
                break;
    case "react":
                console.log("Siva is learnig React");
                break;
    default:
                console.log("He is not learning anything")
}


 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------
 
//#01 1. What will be the output of this code snippet and why?
 let day1 = "Monday";

switch (day1) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
}

// Output is "It's a normal day", 
// Because variable first letter is in capital letter 
// but in switch case it is small case so case monday is not passed here

/* ## 2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100.
 Print “Withdrawal successful” if valid, otherwise print “Invalid amount”. */


 let withdrawAmount=1000;

 if((withdrawAmount % 100) === 0) {
    console.log ("Withdrawal successful");
 } else {
    console.log("Invalid amount");
 }

 /* ## 3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, 
and performs the operation on two numbers. Print the output on the console. */

let operator="-";
let a1=1;
let b1=2;

switch(operator) {
    case "+":
        console.log(a1+b1);
        break;
    case "-":
        console.log(a1-b1);
        break;
    case "/":
        console.log(a1/b1);
        break;
    case "%":
        console.log(a1%b1);
        break;
    default:
        console.log("Invalid operation");
}

/* ## 4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:
- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8 
Write a program that prints the ticket price based on the person’s age.*/

let age1=1;

if(age1 < 18){
    console.log("Movie ticket price is $3 for children");
} else if((age1 >=18) && (age1 <= 60)) {
    console.log("Movie ticket price is $10 for Adults");
} else if(age1 > 60) {
    console.log("Movie ticket price is $8 for senior citizens");
}

/* ## 5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.)
 based on a person’s birth month. Make it month bases, not date based.
 Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else. */

 let birthMonth="May";

 switch(birthMonth) {
    case "January":
        console.log("Zodiac sign is Aries");
        break;
    case "February":
        console.log("Zodiac sign is Taurus");
        break;
    case "March":
        console.log("Zodiac sign is Gemini");
        break;
    case "April":
        console.log("Zodiac sign is Cancer");
        break;
    case "May":
        console.log("Zodiac sign is Leo");
        break;
    case "June":
        console.log("Zodiac sign is Virgo");
        break;
    case "July":
        console.log("Zodiac sign is Libra");
        break;
    case "August":
        console.log("Zodiac sign is Scorpio");
        break;
    case "September":
        console.log("Zodiac sign is Sagittarius");
        break;
    case "October":
        console.log("Zodiac sign is Capricorn");
        break;
    case "November":
        console.log("Zodiac sign is Aquarius");
        break;
    case "December":
        console.log("Zodiac sign is Pisces");
        break;
    default:
        console.log("Invalid month");
 }

 /* ## 6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:
- All sides equal is called, `Equilateral Triangle`.
- Two sides equal is called, `Isosceles Triangle`.
- All sides different is called, `Scalene Triangle`.

Take the sides of a triangle as input and write a program to determine the triangle type. 
Change the inputs everytime manually to see if the output changes correctly. */

let sideOne=10;
let sideTwo=101;
let sideThree=100;

if((sideOne == sideTwo) && (sideOne == sideThree) && (sideThree == sideTwo)){
    console.log('The given trianglr is called Equilateral Triangle');
} else if((sideOne == sideTwo) || (sideOne == sideThree) || (sideThree == sideTwo)) {
    console.log('The given trianglr is called Isosceles Triangle');
} else {
    console.log('The given trianglr is called Scalene Triangle');
}