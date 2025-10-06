 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------
// ## 1. Draw the Execution Context Diagram of the follwoing code and share as explained below:

const message = "I can do it";
function sum(a, b) {
    const result = a + b;
    return result;
}
function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}
function getResult(a, b) {
    return calc(a, b);
}
getResult(8, 5);

/* - Create the GEC and FEC with CP and EP flow
- Create the Stack and Heap Flow
- Create the Stack Diagram
- Create a Readme file with all the above diagram and share on Discord. */

/* 
    GEC(Global execution context)
        CP(Creation Phase)
            message:unassigned (allocating memory in stack) (primitive type saves in stack)
            getResult(): allocating memory in heap
        EP(Execution Phase)
            message:I can do it -- assigned value to variable
            getResult()-- execution
                FEC(Function execution context)
                    CP
                        a: unassigned
                        b:unassigned
                        calc(): allocating memory
                    EP
                        a:8
                        b:5
                        calc(8,5): execute
                            FEC 
                                CP 
                                   a:unassigned
                                   b:unassigned
                                   sum(): allocating memory
                                   mul(): In memory
                                EP
                                    a:8
                                    b:5
                                    sum(a,b): execute
                                        FEC
                                            CP
                                                a:undifined
                                                b:undefine
                                                result:unassigned
                                            EP
                                                a:8
                                                b:5
                                                result:8+5=13
                                    mul(a,b): execute
                                        FEC
                                            CP
                                                a:undifined
                                                b:undefine
                                                result:unassigned
                                            EP
                                                a:8
                                                b:5
                                                result:8*5=40

                                            

                    
        
*/