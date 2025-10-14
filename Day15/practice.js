// Array like

//{key:"value"} // object
//[1,2,3] // array

const arrLike={0:'I',1:'am',2:'array-like',length:3};

console.log(arrLike);
console.log(arrLike[1]);
console.log(arrLike.length);
console.log("Is arrLike is an array? ", Array.isArray(arrLike));
console.log("Is arrLike is an object? ", arrLike instanceof Object);

function checkArgs(){
    console.log(arguments);
}
checkArgs(1,2,3);

//Array-like to Array

function checkArgs1(){
    console.log(arguments);
    const argArr=[...arguments];
    console.log("using spread operator",argArr);
    const argFrom =Array.from(arguments)
    console.log("using Array.from ",argFrom);
    const argSlicle=Array.prototype.slice.call(arguments);
    console.log("using Array.prototype.slice.call ",argSlicle);
    
    
}
checkArgs1(1,2,3);

console.log("HTML Collection as Array like");

console.log(document.getElementsByTagName('li'));
console.log("convert HTML COllection into array",Array.from(document.getElementsByTagName('li')));
