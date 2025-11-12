const table = document.getElementById("myTable");
const searchBox= document.getElementById("searchInTable");
function addToTable() {
    const nameFld = document.getElementById("nameFld");
    const getName=nameFld.value.trim();
     const ageFld = document.getElementById("ageFld");
    const getAge=ageFld.value.trim();
    const roleFld = document.getElementById("roleFld");
    const getRole=roleFld.value.trim();

    if(!getName || !getAge || !getRole) {
        alert("Please fill all the fields");
        return;
    }
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="delete";
    deleteBtn.type="button";
    deleteBtn.onclick=function() {
        table.deleteRow(newRow.rowIndex);
    }

    const newRow = table.insertRow();
    const newCell1=newRow.insertCell(0);
    const newCell2=newRow.insertCell(1);
    const newCell3=newRow.insertCell(2);
    const newCell4=newRow.insertCell(3);

    console.log(getName);
    newCell1.textContent=getName;
    newCell2.textContent=getAge;
    newCell3.textContent=getRole;
    newCell4.appendChild(deleteBtn);

    document.getElementById("nameFld").value="";
    document.getElementById("ageFld").value="";
    document.getElementById("roleFld").value="";
}

searchBox.addEventListener('input',function(){
    const filter= searchBox.value.toLowerCase();
    const rows= table.rows;

    for(let i=1;i<rows.length;i++){
        const nameCell=rows[i].cells[0];
        const nameText=nameCell.textContent.toLowerCase();

        rows[i].style.display = nameText.includes(filter) ? "" : "none";
    }
    
})  
