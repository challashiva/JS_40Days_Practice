console.log("Day15 - Arrays");

const mixedArray = [100,true,"JS",{}];

function Car(model) {
    this.model = model;
}

const bmw=new Car("BMW");
console.log(bmw);

//Array create methods

//1.Ayyay literals
const salad=["tomoto","avacado","mushroom","spinatch"];
console.log(salad);

//2.Using Constructor method(new Array())

const anotherSalad=new Array("tomoto","avacado","mushroom","spinatch");
console.log(anotherSalad);

const two=new Array(2);
console.log(two); // It will create empty array with the lenght of 2 when we give single value

//Access elements from an array

//const element = array[index]

console.log(salad[0]);
console.log(salad[2]);

for(let i=0;i<=salad.length-1;i++) {
    console.log(`Elements at index ${i} is ${salad[i]}`);
}

//Add elements to an array

//push - add elements to an array at the end of an array

salad.push("carrot");
console.log(salad);


//Sort() 
console.log("Sorting an array");

let names=['tom','alex','bob'];
console.log(names.sort());

const artists=[
    'Jhon White Abbott',
    'Leonardo da Vinci',
    'Charles Aubry',
    'Anna Atkins',
    'Barent Avercamp'
];

console.log(artists.sort());

artists.sort(function(a,b){
    console.log("Debugging", a,b);
    return a === b ? 0 : a > b ? -1 :1
})

console.log(artists);

let ages=[2,1000,10,3,60,30];

console.log(ages.sort(function(a,b){
    console.log("Debugging", a,b);
    return a === b ? 0 : a > b ? 1 :-1
}));

console.log("Grouping");

const employees1 =[
    {name:"Bob",dept:"HR",salary:5000},
    {name:"Alex",dept:"Engineering",salary:4000},
    {name:"Siva",dept:"Engineering",salary:3000},
    {name:"Jhon",dept:"Sales",salary:2000},
    {name:"Tom",dept:"Engineering",salary:7000},
];

const groupByDept = Object.groupBy(employees1,({dept}) => dept);
console.log(groupByDept);

const groupBySalary5000 = Object.groupBy(employees1,({salary}) => {
    return salary >=5000 ? "Morethan 5k" : "Lessthan 5k"
})

console.log((groupBySalary5000));




// ----------------------------
// Tasks
// -----------------------------

// - [ ] **T-001**: Create an array of 5 elements using the Array Constructor.

const citiesConstructor = new Array("HYD","BANG","MUM","CHE","VIZ");
console.log(citiesConstructor);

// - [ ] **T-002**: Create an array of 3 empty slots.

const emptyArr=[, , ,];

const emptyArr1=new Array(3);
console.log(emptyArr,emptyArr1);

 /* - [ ] **T-003**: Create an array of 6 elements using
  the Array literals and access the fourth element in the 
  array using its `length` property. */

const citiesArr = ["HYD","BANG","MUM","CHE","VIZ","DEL"];
console.log(citiesArr[citiesArr.length-3]);

// - [ ] **T-004**: Use the `for` loop on the above array to
//  print elements in the odd index.

for(let i=0;i<=citiesArr.length-1;i++){
    if((i%2!==0)) {
        console.log(citiesArr[i]);
    }
}

// - [ ] **T-005**: Add one element at the front and the end
//  of an array.

citiesArr.push("PUNE");
citiesArr.unshift("CHE");
console.log(citiesArr);

// - [ ] **T-006**: Remove an 
// element from the front and the end of an array.

citiesArr.pop();
citiesArr.shift();
console.log(citiesArr);


/* - [ ] **T-007**: Create an array containing the name of your
 favourite foods(10 foods). Destructure
 the 6th food element from the array using destructuring. */

 const foodItems=["idli","dosa","pongal","puri","vada","rice","dal","chapathi","alooo","ricebath"];

 let [,,,,,rice]=["idli","dosa","pongal","puri","vada","rice","dal","chapathi","alooo","ricebath"];
 console.log(rice);

 /*  [ ] **T-008**: Take out the last 8 food items
  from the above
  array using the Array destructuring. Hint: rest parameter. */
 
  let [,,...rest]=foodItems;
  console.log(rest);
  

// - [ ] **T-009**: Clone an Array(Shallow cloning)

let foodCopy=foodItems.slice();
console.log(foodCopy);

// - [ ] **T-010**: Empty an array using its length property

foodCopy.length=0;
console.log(foodCopy);

//- [ ] **T-011**: Create an array of 10 elements
// (number 1 to 10). Resize the array to length 6 once
//  you find the number 5 in that array. Hint: Use `for-loop`.

let arrayToResize = [1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<=arrayToResize.length-1;i++) {
    if(arrayToResize[i] === 5) {
        arrayToResize.length=6;
    }
}
console.log(arrayToResize);

/* - [ ] **T-012**: Create an Array of 10 elements.
 Use the `splice()` method to empty the array. */

 let arrayToSplice =  [1,2,3,4,5,6,7,8,9,10];

arrayToSplice.splice(0,arrayToSplice.length);
 console.log(arrayToSplice);

 /* - [ ] **T-013**: Create an Array of 10 elements.
  You can empty the array in multiple ways: 
  using the `length` property, using the `pop()` method,
   using the `shift()` method, setting the array with `[]`,
    or the `splice()` method. Which among these methods 
    are most efficient and why?

using length : it's strightforward setting the  array lenght to 0 reset the array and removed all existing elemnts.

using pop(): it will remove only one at a time
shift() : it is also same like pop
splice(): it is bit confusing and slightly slower but we can empty an array
[]: it is creates empty array
the most efficient way to empty an array is using lenght property 
    */

//- [ ] **T-014**: What happens when you concatenate two empty arrays?
 
console.log([].concat([]));
//it creates an another empty array

// - [ ] **T-016**: What is the difference between the slice() and splice() methods?

//slice() - it creates new copy of an array does not change source array

//splice() -- it is used to add,remove and modify an array
//  and it modifies original array

// - [ ] **T-017**: Create an Array of alphanumeric strings.
//  Sort the elements in both ascending and descending orders.
//  You must be doing this in an 
// immutable way such that the source array never gets modified.

let sortCars = ["bmw","audi","benz","maruthi","ford","alto","mahindra","tesla"];

let accendingCars = sortCars.toSorted(function(a,b){
    return a === b ? 0 : a > b ? 1 : -1;
});

console.log(accendingCars);
console.log(sortCars);

// - [ ] **T-018**: Can you give examples of sparse and dense arrays?
//Sparse array
const sparseArr=[1,,,4,5]; //length=5
//Dense array
const denseArr=[1,2,3,4,5];

// - [ ] **T-019**: Give a practical usages of the .fill() method

const carsArr = ["blue","bmw",2025,"diesel"];
console.log(carsArr);

carsArr.fill("petrol",2,3);
console.log(carsArr);

//- [ ] **T-020**: How to convert an array to a string?

const strArr=[1,2,3,4];
console.log(strArr.join("||"));

 const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 4, salary: 5100 },
  ];

 const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
  ];

  //- [ ] **T-021**: Can you filter employees who work in the "Engineering" department?

  const enggEmpoyees = employees.filter((element) => {
        return element.departmentId === 2;
  });

  console.log("employees who work in the Engineering department",enggEmpoyees);

  //- [ ] **T-022**: Create a new array that combines employee
  //  names and department names in the format: "Alice (HR)".

  const empDept = employees.map((employee) => {
    let dept = departments.find(d => d.id === employee.departmentId);
    let displayName=`${employee.name} (${dept ? dept.name :"UnKnown"})`;
   // employee['Display Name'] = displayName; // Mutates the original object original array will change here because
    //  original and new array is refering to same reference to avoid this use below process
    const copyArray= structuredClone(employee);
    copyArray['Display Name'] = displayName; 
    //return copyArray;
    //one more method
    return{
        ...employee,
        "Display Name": displayName
    }
  });

  console.log(empDept);
  console.log(employees);
  
  //- [ ] **T-023**: Find the highest salary among employees.

  const highSalEmp = employees.reduce((acc,currentValue) => {
    return (currentValue.salary > acc.salary) ? currentValue : acc;
  });
console.log(highSalEmp);

// - [ ] **T-024**: Check if there is at least one employee
//  in the "Sales" department.

const salesEmp = employees.some((emp) => {    
    return (emp.departmentId === departments[emp.departmentId-1].id);
});

console.log("is there any employee in Sales department?",salesEmp);

//- [ ] **T-025**: Write a function to filter employees earning
//  more than 6000.

const empEarningCount = employees.filter((emp) => {
    return emp.salary > 6000;
})
console.log("employees earning more than 6000.",empEarningCount);

//- [ ] **T-026**: Create an array of employee names only.

const empNames = employees.map((emp) => {
    return emp.name;
})
console.log(empNames);

// - [ ] **T-027**: Calculate the total salary of all employees using
let totalSal=0;
const totalEmpSal = employees.reduce((acc,val) => {
    totalSal = totalSal + val.salary;
    return totalSal;
});

console.log(totalEmpSal);

// - [ ] **T-028**: Is there any employee earning less than 5000?

const lessEarningEmp = employees.some((emp) => {
    return emp.salary < 5000;
})

console.log("employee earning less than 5000?", lessEarningEmp);

//- [ ] **T-029**: Find the first employee who earns exactly 5100.

const empEarningLessThan5000 = employees.find((emp) =>{
    return emp.salary === 5100;
})

console.log(empEarningLessThan5000);

//- [ ] **T-030**: Find the last employee in the "HR" department.

const empHR = employees.findLast((emp) =>{
    return emp.departmentId === departments.find(d => d.name === "HR").id;
})

console.log("employee in the HR department.",empHR);

//- [ ] **T-031**: Find the first employee in the "Marketing" 

const empMarketing = employees.find((emp) =>{
    return emp.departmentId === departments.find(d => d.name === "Marketing").id;
})

console.log("first employee in the Marketing",empMarketing);

//- [ ] **T-032**: Check if all employees earn more than 4000.

const empMorethan4000 = employees.every((emp) => {
    return emp.salary > 4000;
})

console.log("employees earn more than 4000 is there?",empMorethan4000);

//- [ ] **T-033**: Find the first employee in the "Sales" 
// and "HR" department.


let firstSalesEmp =employees.find(emp => emp.departmentId === departments.find(d => d.name === "Sales").id);
let firstHREmp =employees.find(emp => emp.departmentId === departments.find(d => d.name === "HR").id);

console.log("employees in Sales and HR department", firstSalesEmp,firstHREmp);

//- [ ] **T-034**: Verify if all employees belong
//  to a department listed in the departments array.

const verifyDeptEmp=employees.every((emp) => {
    let depts = departments.find(d => d.id === emp.departmentId); 
    return emp.departmentId === (depts? depts.id : "unknown");
})

console.log("employees belong to a department listed in the departments array.", verifyDeptEmp);

//- [ ] **T-035**: Log each employee's name and department 
// name to the console.

employees.forEach((emp) => {
    let depts = departments.find(d => d.id === emp.departmentId); 
    console.log(`${emp.name} (${depts.name})`);
})

// **T-036**: Extract all employee names into a single array.
const empArray= employees.map(emp => emp.name);
console.log(empArray);

//- [ ] **T-037**: Increment each employee's salary by 10%

let salryIncrement = employees.map((emp) => {
    let salChangedArray = structuredClone(emp);
    salChangedArray.salary = salChangedArray.salary + (salChangedArray.salary*0.10);
    return salChangedArray;
})
console.log("Increment each employee's salary by 10%", salryIncrement);

//- [ ] **T-038**: Assume each employee can have multiple skills.
// Create an array of employee skills and flatten them.
//  Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

const employeeFlatten = [
    {name:"Alice",skills:["Excel","Management"]},
    {name:"Alice",skills:["Javascript","React"]},
    {name:"Alice",skills:["Python","Data Analysis"]},
    {name:"Alice",skills:["Sales","Comminication"]}
];

const allSkills = employeeFlatten.flatMap(emp => emp.skills);
console.log(allSkills);

//- [ ] **T-039**: Find the total salary of all employees 
// working in the "Engineering" department.
let deptId =departments.find(d => d.name === "Engineering").id;
const enggEmpSal = employees.filter((emp) => {
    return emp.departmentId === deptId;
}).reduce((acc,val) =>{
   return acc  + val.salary;
},0);
console.log(enggEmpSal);

//- [ ] **T-040**: Check if there is any department where 
// all employees earn more than 5000.
const isDeptAbove5000=departments.some((dept) => {
    const empInDept = employees.filter((emp) => emp.departmentId === dept.id);
    return empInDept.length > 0 && empInDept.every(emp => emp.salary > 5000)
})

console.log("Any department where all employees earn more than 5000.",isDeptAbove5000);

/* - [ ] **T-041**: Assume each employee has a projects array
 (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
Find the total number of unique projects being handled across all employees. */

const projectArrayEmp = [
    {id:1,name:"Alice",projects:["ProjectA","ProjectB"]},
    {id:2,name:"Jhon",projects:["ProjectC","ProjectD"]},
    {id:3,name:"Mike",projects:["ProjectA","ProjectE"]},
    {id:4,name:"Siva",projects:["ProjectB","ProjectZ"]},
    {id:5,name:"James",projects:["Project1","ProjectA"]},
];

//get uniq projects
//ue reduce to find total number of unique projects
//filter unique projects from employees
let countUniq=0;

const totalProject = projectArrayEmp.flatMap(p => p.projects)
.reduce((acc,project) => {
    if(!acc.includes(project)) {
        acc.push(project);
    }
    return acc;
},[]);


console.log("the total number of unique projects being handled across all employees. ",totalProject.length);

const projectEmployees = projectArrayEmp.reduce((acc,emp)=>{
    emp.projects.forEach(project => {
        if(!acc[project]) {
            acc[project] = [];
        }
        acc[project].push(emp.name)
    })
    return acc;
},{});

console.log("Employees per project", projectEmployees);

//- [ ] **T-042**: For each employee, find their department name
//  and return an array of employee names with their department names.

const empWithDept = employees.map((emp) => {
    let depts = departments.find(d => d.id === emp.departmentId); 
    return depts ? `${emp.name} ${depts.name}`: ` ${emp.name} undefined`
})

console.log("Employee with department names ",empWithDept);

//- [ ] **T-043**: Get a list of names of employees earning more than 6000.

const empMoreThan6000 = employees.filter((emp) => {
    return emp.salary > 6000
}).map(emp => emp.name);
console.log("Employees list more than 6000",empMoreThan6000);


//- [ ] **T-044**: Write a for-of loop to print the names of all
//  employees from the employees array.
console.log("employees from the employees array using for-of loop");

for(const empNames of employees) {
    console.log(empNames.name);
}

// - [ ] **T-045**: Using a for-of loop, print the names of 
// employees earning more than 5000.
console.log("employees earning more than 5000. using for-of loop");
console.log("------------------------------------");

for(const empNames of employees) {
    if(empNames.salary > 5000) {
        console.log(empNames.name);
    }
}

//- [ ] **T-046**: Modify the for-of loop to destructure each
//  employee object and log their name and salary.
console.log("Employeees with their Name and Salary");
console.log("------------------------------------");
for(const {name,salary} of employees) {
    console.log(`Employees Name ${name} and Salary ${salary}`);
}

//- [ ] **T-047**: Write a for-of loop to match employees with
//  their departments and print the results.
console.log("Employeees with their departments");
console.log("------------------------------------");

for (const emp of employees) {
    let dept = departments.find(d => d.id === emp.departmentId);
    console.log(`Employee ${emp.name} department ${dept.name}`);
}

// - [ ] **T-048**: Use Array.prototype.entries() with a for-of
//  loop to print the index and name of each employee.
console.log("Employeees index and names");
console.log("------------------------------------");

for(let [index,emp] of employees.entries()) {
    console.log(`Indes:${index}, Name:${emp.name}`);
}

//- [ ] **T-049**: Given the array-like object below,
//  access the second element and log it:
console.log("Array Like Object");
console.log("------------------------------------");
const arrayLike = { 0: "First", 1: "Second", length: 2 };

console.log(arrayLike[1]);

//- [ ] **T-050**: Write a function that takes a variable number
//of arguments and converts the arguments object into a real
// array using Array.from.
console.log("Array Like Object");
console.log("------------------------------------");

function arrayForm() {
    const argsFrom = Array.from(arguments);
    console.log("Arrays : ",argsFrom);
}

arrayForm(1,3,4,6,7,8);

//- [ ] **T-051**: Write a snippet to select all div elements 
// on a webpage (using document.querySelectorAll) and convert
//  the resulting NodeList into an array.

const divElements = document.querySelectorAll("div");
console.log("convert the resulting NodeList into an array.",Array.from(divElements));

//- [ ] **T-052**: Merge these two arrays into a single array:

const arr1 = [1, 2];
const arr2 = [3, 4];

console.log("Merge Two arrays arr1 and arr2",[...arr1 ,...arr2]);

//- [ ] **T-053**: Create an array of n duplicate values using 
// Array.from. Input: Create an array with 5 "A" values. 
// Output: ["A", "A", "A", "A", "A"]

let n=5;
const arrayFromElements = Array.from({length:6},()=> "A");
console.log("Create an array of n duplicate values using Array.from",arrayFromElements);

//- [ ] **T-054**: Use Array.from to convert a string like 
// "Hello" into an array of characters.

const convertString = Array.from("Hello");
console.log("Convert string into array of characters", convertString);

// - [ ] **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'],
//  group words by their first letter using group().

let groupArray =['apple', 'banana', 'apricot', 'mango', 'blueberry'];

const modifiedGroupArray = Object.groupBy(groupArray,(arr)=>{
    return arr[0]
});

console.log("words by their first letter",modifiedGroupArray);

//- [ ] **T-057**: From this array [3, 7, 3, 2, 3, 8, 7, 7], 
// find the most repeated number. Hint: Use array method.
let grpArr= [3, 7, 3, 2, 3, 8, 7, 7];
console.log(Object.entries(Object.groupBy(grpArr,n=>n)));

let groupCount = Object.entries(Object.groupBy(grpArr,n=>n))
    .reduce((acc,val)=>val[1].length > acc[1].length ? val : acc)[0];
console.log(" most repeated number:",groupCount);

// - [ ] **T-058**: Find the median of [5, 2, 9, 1, 3, 6, 8].

let medianArr =[5, 2, 9, 1, 3, 6, 8,10];

function findMedian(arr) {
    let sortedArr =arr.sort((a,b) => a-b);
    console.log(sortedArr);
    let medianNum = Math.floor(sortedArr.length/2);

    let medianVal;
    if(sortedArr.length %2 !== 0) {
        medianVal = sortedArr[medianNum];
    } else {
        medianVal = (sortedArr[medianNum-1]+sortedArr[medianNum])/2;
    }
    return medianVal;
}

console.log("median of given array",findMedian(medianArr));

//- [ ] **T-059**: Convert this array [['a', 1], ['b', 2], ['c', 3]],
//  into { a: 1, b: 2, c: 3 } using array method(s).

let arrC = [['a', 1], ['b', 2], ['c', 3]];
console.log(Object.fromEntries(arrC));

//- [ ] **T-060**: Flatten and convert all letters to uppercase 
// in one step using flatMap(). 
// Here is input array: [['a', 'b'], ['c', 'd']].

let flatMapArr = [['a', 'b'], ['c', 'd']];

let flatMapRes = flatMapArr.flatMap((val) =>{
    return val.map(v => v.toUpperCase() )
})

console.log(flatMapRes);

//- [ ] **T-061**: Count the occurrences of each fruit in this array:
//  ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

let fruitsArr = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
const groupedArr = Object.groupBy(fruitsArr,f=>f);
console.log(Object.fromEntries(Object.entries(groupedArr)));
const fruitCount = Object.fromEntries(
    Object.entries(groupedArr).map(([a,b]) => [a,b.length])
);
console.log(fruitCount);

//- [ ] **T-062**: Extract extract [‘b’, ‘c’, ‘d’] using slice()
//  from this array: ['a', 'b', 'c', 'd', 'e']

let originalArr = ['a', 'b', 'c', 'd', 'e'];
let slisedArr = originalArr.slice(1,4);
console.log("Sliced Array",slisedArr);

//- [ ] **T-063**: Sort the array [9, 3, 1, 6, 8] in ascending 
// order using toSorted()

let normalArr = [9, 3, 1, 6, 8];
let asceArr = normalArr.toSorted();
console.log("ascending order using toSorted()",asceArr);

//- [ ] **T-064**: Reverse [1, 2, 3, 4, 5] using
//  toReversed() and compare it with reverse()

let reverseArr = [1, 2, 3, 4, 5];

console.log("Reverse() method", reverseArr.reverse());
console.log("toReversed() method", reverseArr.toReversed());

//- [ ] **T-065**: Group the follwing array elements based on
//  age(Adult vs Non-Adult):
const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];
const groupedAdultArr = Object.groupBy(users,(a) =>{
    return a.age > 18 ? "Adults" : "Non-Adults";
})
console.log(groupedAdultArr);

//- [ ] **T-066**: Find the longest word in this sentence using
// Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".

let longestSentence = "40 Days of JavaScript by tapaScript is a powerful initiative";

let wordsArr = longestSentence.split(" ");
const longestWord = wordsArr.reduce((acc,currentVal) => {
    return currentVal.length > acc.length ? currentVal : acc;
})
console.log(longestWord);

//- [ ] **T-067**: Find common elements between two arrays,
//  [1, 2, 3, 4], [3, 4, 5, 6]

const arrr1 = [1,2,3,4];
const arrr2 = [3,4,5,6];

const commonEle = arrr1.filter(ele => arrr2.includes(ele));
console.log(commonEle);
