console.log("Day 18 DOM Manipulation");

const sibElement = document.getElementById("something-id");
const sibElement1 = document.getElementById("something-id2");

console.log(sibElement.nextSibling);
console.log(sibElement.nextElementSibling);
console.log(sibElement1.previousSibling);
console.log(sibElement1.previousElementSibling);

{
    const mainElem= document.getElementById("main-id");
    // console.log(mainElem.classList);
    // mainElem.className="secondary-class";
    console.log(mainElem.classList);
}

function showHidepara() {
    const paraElem = document.getElementById("togglePara");
    paraElem.classList.toggle("showPara");
}