// ## 1. Find the Most Frequent Word in a Paragraph

const paragraphText = document.getElementById("text");
const wordsArray = paragraphText.innerText.toLowerCase().split(" ");
let count=0;
const wordsObject = Object.groupBy(wordsArray, word =>word);
let mosrFrequentWord="";
let maxCount=0;
for(let word in wordsObject) {
    let count =wordsObject[word].length;
    if(count > maxCount) {
        mosrFrequentWord = word;
        maxCount =count
    }
}

document.querySelector("#mostFrequent").innerText = `Most frequent word is:" ${mosrFrequentWord}" and count is ${maxCount}`;

//## 2. Create a zebra pattern

const items = document.querySelectorAll("#cars li");
console.log(items);
let itemCount=0;
items.forEach((item) =>{
    itemCount++;
    if(itemCount %2 === 0) {
        item.style.background = "black";
        item.style.color="white";
    } else {
        item.style.background = "white";
    }
});
/* ## 3. Write different ways we can access DOM and what they returns
    1. getElementById() access the element by ID attribute - returns single HTML Element
    2. getElementsClassName() Access multiple elements by their class name - returns HTMLCollection with matching elements
    3. getElementsByTagName() Select elements by tag name - retunrs HTMLCollection with matching elements
    4. querySelector() - selects the first matching element using css selectors - Returns single Element
    5.querySelectorAll() - Selects all matching elements using css selectors - Retunrs NodeList
*/

// ## 4. Find and Replace Text Inside a Page

// Write a script that finds all occurrences of a word inside a `<p>` tag and replaces them with another word dynamically.

const findWord= "car";
const replaceWith ="bike";

const pElement=document.querySelectorAll("p");
pElement.forEach((ele) => {
    const text = ele.innerText;
    const wordsArr = text.split(" ");

    const undateArr = wordsArr.map((word)=>{
        return word.toLowerCase() === findWord.toLowerCase()? replaceWith : word  
    })
    console.log(undateArr);
    
    ele.innerText = undateArr.join(" ");
})


/* ## 5. Extract and Count Unique Links from a Page

Count all the unique hyperlinks (`<a>`) in a page and display their count. */
let countEle=0;
const hyperLinks=document.querySelectorAll("a");
hyperLinks.forEach((ele) =>{
    countEle++;
})
console.log("Count of hyperlinks",countEle);
