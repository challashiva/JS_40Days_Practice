console.log("Taks Manager");

function addtask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("tasksList");

    let task = taskInput.value;
    console.log(taskList);
    if(task.trim() === "") return;
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText=task;
    p.id="pId";
    p.style.display="inline";
    li.appendChild(p); // added neew task text
    //Complete btn afer text
    const completeBtn = document.createElement("button");
    completeBtn.innerText="✔"
    completeBtn.style.marginLeft ="10px";
    completeBtn.style.color ="green";
    completeBtn.onclick = function() {
        li.classList.add("completed")
    }
    li.appendChild(completeBtn); // added to LI next to Paragraph

    //Complete btn afer text
    const editBtn = document.createElement("button");
    editBtn.innerText="✏"
    editBtn.style.marginLeft ="10px";
    editBtn.style.color ="green";
    let modifiedText="";
    const editInput = document.createElement("input");
    editInput.id="editText";
    editBtn.onclick = function() {
        editInput.type="text";
        editInput.value=task;
        p.style.display="none";
        deleteBtn.style.display="none";
        completeBtn.style.display="none";
        submitBtn.style.display="inline";
        editInput.style.display="inline";
        li.prepend(editInput);
    }
    
    li.appendChild(editBtn);// added to LI next to Paragraph

    const submitBtn=document.createElement("button");
    submitBtn.innerText="submit";
    submitBtn.style.marginLeft ="10px";
    submitBtn.style.display="none";
    submitBtn.onclick=function() {
        task=editInput.value;
        p.innerText=task;
        p.style.display="inline";
        deleteBtn.style.display="inline";
        completeBtn.style.display="inline";
        editInput.style.display="none";
        submitBtn.style.display="none";
    }
    li.appendChild(submitBtn);

    //Complete btn afer text
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText="❌"
    deleteBtn.style.marginLeft ="10px";
    deleteBtn.style.color ="red";
    deleteBtn.onclick = function() {
        li.remove();
    }
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value ="";
}