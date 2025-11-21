console.log("DOM Advanced Features");

const templateCard = document.getElementById("card-template");

const clone = templateCard.content.cloneNode(true);
clone.querySelector(".name").textContent="Siva";
clone.querySelector(".role").textContent="Developer";

document.body.appendChild(clone);

//Document Fragment and Range

const fragment = document.createDocumentFragment();

for(let i=0;i<=3;i++){
    const li = document.createElement("li");
    li.textContent=`Item ${i}`;
    fragment.appendChild(li);
}

document.getElementById("lists").appendChild(fragment);

//Range

const p = document.getElementById('para');

const range = document.createRange();

range.setStart(p.firstChild,6); // After Hello
range.setEnd(p.childNodes[2],4);

const content = range.cloneContents();

const span = document.createElement("span");
span.textContent=" Welcome to ";
range.insertNode(span);
console.log(content);

// Shadow DOM

const shadowHost= document.querySelector('#box');
const shadow =  shadowHost.attachShadow({mode:'open'});
shadow.innerHTML=`<style>p{color:red;}</style><p>Hellow Shadow!</p>`


//Mutation Observer

const target=document.getElementById('watchMe');
const observer = new MutationObserver((mutationList,observer)=>{
    for(const mutation of mutationList) {
        console.log(`Type of mutation: ${mutation.type}`);

        if(mutation.type === 'childList') {
            console.log('A child node was added or removed');
        }

        if(mutation.type === 'attributes') {
            console.log(`Attribute ${mutation.attributeName} was changed.`);
        }

        if(mutation.type === 'characterData') {
            console.log(`Text content has changed to: ${mutation.target.data}`);
        }
    }
});

const config = {
    subtree:true, 
    characterData:true,
    childList:true,
    attributes:true
}

observer.observe(target,config);

function changeDOM() {
    target.textContent="Welcome!";
    target.setAttribute("data-status","changed")
}

let mRange = document.createRange();
let pa = document.getElementById("pa");
let result = document.getElementById("result");
let methods ={
    deleteContents() {
        range.deleteContents()
    },
    extractContents(){
        let content=range.extractContents();
        // result
    }
}

mRange.setStart(pa,0);
mRange.setStart(pa,2);
console.log(mRange.cloneContents());

