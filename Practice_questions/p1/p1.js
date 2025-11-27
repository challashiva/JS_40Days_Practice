console.log(document.documentElement === document.body.parentNode)
console.log(document.body.children);
// console.log(document.body.childNodes);

// for(let node of document.body.childNodes) {
//     console.log(node);
// }

const table= document.getElementById("table");

console.log(table.rows)
let td=table.rows[0].cells[1];
td.style.backgroundColor="green";

const task1=document.getElementById("task1");


console.log("The <ul> DOM node ",task1.nextElementSibling);
console.log("The second <li> (with Pete)",task1.nextElementSibling.children[1].innerText);
console.log("The second <li> (with Pete)",task1.nextElementSibling.lastElementChild);


const table1 = document.getElementById("table1");
const rows = table1.rows.length;
for(let i=0;i<=rows;i++){
    let td=table1.rows[i].cells[i];
    td.style.backgroundColor="red";
}
console.log(table1.rows.length)