console.log("Error Handling");

try {
    console.log("Execution strats here");
    abc;
    console.log("Execution ends here");
    
} catch (error) {
    console.log("An error has occured",error);
    console.log(error.message);
}

function divideNumbers(a,b) {
    try {
        if(b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        const result = a/b;
        console.log(`The result is ${result}`);
        
    } catch (error) {
        console.error("Got a math error ",error.message);
    }
}

divideNumbers(15,3);
// divideNumbers(15,0);


const person = {
    name:"Siva",
    address:{
        city:"banglore"
    }
}

function getPostalCode(user) {
    try {
        console.log(user.address.country.postalCode);
    } catch(error) {
        console.log("Error accesing properties ",error.message);
    }
}

getPostalCode(person);

function validateAge(age) {
    try {
        if(isNaN(age)) {
            throw new Error("Invalid input: Age must be number");
        }
        console.log(`User's age is: ${age}`)
    } catch(error) {
        console.log("Validation Error: ", error.message);
    }
}

validateAge('20');

//rethrow error

function valiadateFrom(fromData) {
    try {
        if(!fromData.username) throw new Error("Username is Mandatorry");
        if(!fromData.email.includes("@")) throw new Error("Invalid email format!");
    } catch (error) {
        console.error("Validation Isses Found: ", error.message);
        throw error; //rethrow
    }
}

try {
    valiadateFrom({username:"Siva",email:"bademail"});
} catch(error) {
    console.error("Showing error message for user creation", error.message);
}


try {
    //code that may throw error
} catch (error) {
    //code to handle error
} finally {
    //code that always runs (cleanup actions)
}

 function processsInformation(information) {
    try {
        console.log("Processing information...");
        if(!information) throw new Error("No available information to precess");
        console.log("Information precessed");
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Cleanup: Closing database connection");
    }
 }

 processsInformation();

 //Custom error

 function ValidateError(message) {
    this.name="ValidationError";
    this.message=message;
    // this.stack=new Error().stack;
 }
//we are prtotype here we will lear this later sessions

// ValidateError.prototype=Object.create(Error.prototype);

 function validateCitizen(age) {
    if(age < 60) {
        throw new Error("Yor are not a senior citizen");
    }
    return "You are a senior citizen";
 }

 try {
    const message= validateCitizen(10);
    console.log(message);
 } catch (error) {
    console.error(`${error.name}: ${error.message}`)
 }

 -----------------------------------------------------
 //Tasks
 -----------------------------------------------------

 /* ## 1. What will be the output of the following code?

```js
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
```

- ReferenceError  -- correct ans
- SyntaxError
- TypeError
- No error, it prints 10 */

try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}

/* ## 2. Write a function processPayment(amount) 
that checks if the amount is positive and not exceeding balance.
 If any condition fails, throw appropriate errors */

 function processPayment(amount) {
    try {
        let blance=1000;
        if(amount <= 0) throw new Error("Amount should be greater than 0");
        if(amount>blance) throw new Error("Amount is exceding the balance, please check");
        console.log("Procesing payment is done!");
        
    } catch (error) {
        console.error("Payment Processing Failires:", error.message);
    }
 }

 processPayment(2000);

 /* ## 3. Implement a custom error handling system for an 
 e-commerce website that categorizes errors as

- UserError
- PaymentError
- ServerError
- EmailError */

function ErrorHandling(name,message) {
    this.name=name;
    this.message=message;
}

function eCommerceWebsite(serviceData) {

    if(serviceData.payment === undefined || serviceData.payment === null) {
        throw new ErrorHandling("PaymentError","Payment error please check again")
    } else if(!serviceData.username) {
        throw new ErrorHandling("UserError","Username should not be empty");
    } else if(!serviceData.serverConnection) {
        throw new ErrorHandling("ServerError","Server connection failed! please check the connection");
    } else if(!serviceData.email.includes("@")) {
        throw new ErrorHandling("EmailError","Email you entered is not in correct format");
    } else {
        console.log("payment successful, Enjoy your day!");
    }
}

try {
    eCommerceWebsite({username:"siva",payment:0,serverConnection:true,email:"siva123"})
} catch (error) {
    console.error("Error while checking out items from the cart:",error.message,error.name);
}

// ## 4. Simulate an API call function fetchData(url).
//  If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {
    try {
        if(url.indexOf("https://")) throw new Error("Invalid URL");
        console.log("Data from the url ", url);
    } catch (error) {
        console.error("Error details: ", error.message); 
    }
} 

fetchData("httasps://www.sample.com");


/* ## 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

Example:

```js
const userInput = { username: "", age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number
``` */

function ValidationError(message) {
    this.name="ValidationError",
    this.message=message
}

function validateUser(userdetails) {
    if(!userdetails.username) throw new ValidationError("Username cannot be empty");
    console.log("Username is correct: ", userdetails.username);
    if(userdetails.age < 0) throw new ValidationError("Age must be a positive number");
    console.log(`user ${userdetails.name} age is ${userdetails.age}`);
}

try {
    const userInput = { username: "sample", age: -2 };
    validateUser(userInput);
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

/* 
## 6. Write a function readFile(filePath) that simulates reading a file.
 If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch.
  Make sure you have code to handle releasing the IO resources

Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them. */

function readFile(filePath) {
    try {
        if(!filePath) {
            throw new Error("File not found");
        }
        console.log("File exist", filePath);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Releeasing file resources");
    }
}

readFile("C:drive/html.css");
readFile();

/* ## 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). 
If parsing fails, catch the error and return "Invalid JSON" */

function parseJson(str) {
    try {
        const result = JSON.parse(str);
        console.log(result);
    } catch (error) {
        console.error("Invalid JSON");   
    }
}
parseJson('{"name":"siva","age":30}');
parseJson("sampel");

/* ## 8. What is the purpose of throw in JavaScript?

- It catches an error
- It stops the execution of a program
- It creates a new error manually -- Coreect answer
- It prints an error message */

/* ## 9. What does the finally block do in a try...catch statement?

- Runs only if an error occurs
- Runs only if no error occurs
- Runs regardless of whether an error occurs or not -- correct answer
- Stops the execution of the script */

// ## 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object