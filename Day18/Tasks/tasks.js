function createFormElements() {
    const formInput = document.getElementById("inputTypeVallue");
    const formContainer = document.getElementById("formContainer");
    const inputText= formInput.value;
    const validInputTypes=["text","email","password","number","date"];
    if(!validInputTypes.includes(inputText)) {
        alert(`${inputText} is not valid input`)
        return;
    }
    const divElem = document.createElement("div");
    divElem.style.display="flex";
    divElem.style.alignItems="center";
    divElem.style.marginTop="10px";

    const createInput = document.createElement("input");
    createInput.type=inputText;
    createInput.style.marginLeft="10px";
    createInput.classList.add("inputForms");

    const label= document.createElement("label");
    label.innerText=inputText;
    label.style.marginRight="20px";
    label.style.width="80px";


    divElem.appendChild(label);
    divElem.appendChild(createInput);

    formContainer.appendChild(divElem);

    formInput.value="";
}

function submitForm() {
    const allInputValues= document.querySelectorAll(".inputForms");
    const inputObj = Object.assign({},allInputValues);
    console.log(inputObj);
    
    // allInputValues.forEach(p=>console.log(p.value))
}

function resetForm() {
    const allInputValues= document.querySelectorAll(".inputForms");
    allInputValues.forEach(p=> p.value="");
}