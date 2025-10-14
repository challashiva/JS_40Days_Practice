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

const employees =[
    {name:"Bob",dept:"HR",salary:5000},
    {name:"Alex",dept:"Engineering",salary:4000},
    {name:"Siva",dept:"Engineering",salary:3000},
    {name:"Jhon",dept:"Sales",salary:2000},
    {name:"Tom",dept:"Engineering",salary:7000},
];

const groupByDept = Object.groupBy(employees,({dept}) => dept);
console.log(groupByDept);

const groupBySalary5000 = Object.groupBy(employees,({salary}) => {
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

