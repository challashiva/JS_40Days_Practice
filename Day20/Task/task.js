console.log("Day 20 Tasks");

/* Build a navigation menu. On click of a list item:

- Traverse up to parent `<ul>`
- Remove .active class from all `<li>`
- Add .active only to the clicked `<li>` */

document.addEventListener('click',function(event){
    console.log("clicked");
    
    if(event.target.tagName.toLowerCase() === "li") {
        const mainMenu = event.target.closest('ul');

        const allLiItems=mainMenu.querySelectorAll('li');

        allLiItems.forEach(item => item.classList.remove("active"));

        event.target.classList.add("active");
    }
});

/* ## 2. Highlight Text Using Range

Use the Range API to highlight a portion of a paragraph by wrapping it with a `<mark>` tag. */

const p = document.getElementById('para');
const markTag = document.createElement("mark");

const range = document.createRange();

range.setStart(p.firstChild,2);
range.setEnd(p,1);

range.surroundContents(markTag);

console.log(range.toString());

/* ## 3. Use DocumentFragment for Performance

Insert 100 list items into the DOM using:

- Plain DOM methods (one by one)
- DocumentFragment (all at once) */


const ul= document.getElementById("list");

for(let i=0;i<=100;i++){
    const li= document.createElement("li");
    li.textContent="Lits Item number: "+i;
    ul.appendChild(li);
}

const fragment = document.createDocumentFragment();

for(let i=0;i<=100;i++){
    const li= document.createElement("li");
    li.textContent="Fragment Lits Item number: "+i;
    fragment.appendChild(li);
}
ul.appendChild(fragment);

/* ## 4. Build a “Smart Cloner”

Create a UI with an element and a “Clone” button. Use cloneNode(true) and cloneNode(false) and show the difference visually. */

const templateUI= document.getElementById("clonerTemplate");
const outputContainer= document.getElementById("cloneOutput");

document.getElementById("cloneTrueBtn").addEventListener("click",function(){
    outputContainer.innerHTML="";
    const clone = templateUI.content.cloneNode(true);
    clone.querySelector(".title").textContent="Smart cloner with  cloneNode(true)";
    clone.querySelector(".cloneText").textContent="Deep clone(copies all the children)";
    outputContainer.appendChild(clone);
})

document.getElementById("cloneFalseBtn").addEventListener("click",function(){
    outputContainer.innerHTML="";
    const clone = templateUI.content.cloneNode(false);
    console.log(clone);
    
    // clone.querySelector(".title").textContent="Smart cloner with  cloneNode(False)";
    // clone.querySelector(".cloneText").textContent="Shallow copy(copies the first level nodes)";

    // const createDiv= document.createElement("div");
    // createDiv.innerHTML=`<h1>Smart cloner with  cloneNode(False)</h1>
    // <p>Shallow copy(copies the first level nodes)</p>`;
    outputContainer.appendChild(clone);
})

/* 
## 5. MutationObserver Watcher

Create a div and use MutationObserver to log whenever:

- A new child is added
- The class attribute changes
- Text is modified
 */

const mutationDiv= document.getElementById("mutationDiv");

const observer = new MutationObserver((mutationList,observer) =>{
    for(const mutation of mutationList) {
        console.log(`Type of mutation: ${mutation.type}`)

        switch(mutation.type){
            case 'childList':
                console.log("Detected Added/Removed child Nodes");
                mutationDiv.style.backgroundColor="red";
                break;
            case 'attributes':
                console.log("Detected attribute chanegs");
                mutationDiv.style.backgroundColor="blue";
                break;
            case 'childList':
                console.log("Child node chanegs");
                mutationDiv.style.backgroundColor="yellow";
                break;
            case 'characterData':
                console.log("characterData chanegs",mutation);
                mutationDiv.style.backgroundColor="green";
                break;
            default:
                console.log("No changes made");
                break;
        }
    }
});


const config = {
    subtree:true, 
    characterData:true,
    childList:true,
    attributes:true
}

observer.observe(mutationDiv,config);

function mutateDOM() {
    const newChild= document.createElement("p");
    newChild.innerText="New child is added";
    mutationDiv.appendChild(newChild);
    mutationDiv.textContent="New Text Added";
}