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
for(i=1;i<=noOfRows;i++){
    for(j=1;j<=noOfRows;j++){
        if(i === 1 || i === noOfRows || j === 1 || j === noOfRows){
            result += "*";
        }else {
            result += " ";        
        }
    }
    result +="\n";
}
console.log(result);
