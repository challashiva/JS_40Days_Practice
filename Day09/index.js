// console.log("Name is ", name);
// var name;
let name;
name="tom";
console.log("name is ", name);
//VAR Output is Name is and name is tom
//Let OUTPUT: "Cannot access 'name' before initialization" getting this error
/* 
when we use var is initialized with undefined and JS is hoisting this variable to up and desiplay with empty
    GES 
        CP
            name:undefined
        EP
            name:"tom"
when we use let is will not initialized with any value like undefined and JS will through error
GES 
        CP
            name
        EP
            name:"tom"
*/

 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------

/* ## 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.*/

{
    // Temporaal dead zone will start here for variable we declared below user,user2,user3
    
    //console.log(user); // it will through error here "Refference error" ReferenceError: Cannot access 'name' before initialization
    let user;
    user = "Siva" // Temporal dead zone will end here for variable "user" while initializing (assigning a value)
    console.log(user);// here output will be Siva

    let user2="sample";//Temporal dead zone will end here for variable user2



    let user3="sample user2"//Temporial dead zone will ends here for variable user3

}
/* For above block GEC 
    GEC (Global execution context) (Javascript execution processs step by step)
        CP(Creation phase) -- Here for varaibles and functions and other any items will be initialized and allocating 
                                memory in the Stack or Heap, -- not assignied any values to valiables here and for 
                                "Var" used variable (var user="siva") "undefined" value is allocated in memory while initializing
                                for "let & const" it will not allocating any values so it will through error while hoisting before
                                assigning any value.
            user:
            user2:
            user3:
        EP(Execution phases): -- assignning values to variables and execute
            user:Siva
            user2:sample
            user3:sample user2
                        
*/

//## 2. Explain Variable and Function Hoisting with Example. Post the code as your answer. 

//Variable is used to store the data 

//Function Hoisting

foo();
function foo(){
    console.log("Helloo");
}

/* 
    For above one it will show the output hello becausse it will see while executing foo() is there memory 
    allcating/Initilization or not for function, so it is initialized in creation pahse so in
    execution phase it will execute
    GEC( Global execution context):
            CP:foo() -- Allocating memory for foo() function and initialized here
            EP:
                FEC(Function Execution Context) for foo()
                Execute the foo() and o/p is "Helloo" 
 */

 foo1();
 let foo1=function(){
    console.log("Hello foo");
 }

 /* 
    For above one it will through an error ReferenceError: Cannot access 'foo1' before initialization
    in creation phse it is initiaalized as a variable for let it will through an refference error
     if you are hoisting/execute that variable before assignung any value

    GEC( Global execution context):
            CP:foo1 -- Allocating memory with undefined as it is considered as an variable
            EP:
                foo1: assigning function body
                    FEC(Function Execution Context) for foo1()
                        Execute the foo1()
 */