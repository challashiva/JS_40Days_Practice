console.log("Task");

const tabHeaders = document.querySelector(".tab-headers");
const tabContents= document.querySelectorAll(".content");
const tabs = document.querySelectorAll(".tab");

function switchToTab(tabNumber){
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    const activeBtn = document.querySelector(`.tab[data-tab="${tabNumber}"]`);
    const activeContent = document.querySelector(`.content[data-tab="${tabNumber}"]`);

    activeBtn.classList.add("active");
    activeContent.classList.add("active");

    const custEvent= new CustomEvent("tabName",{
        detail:{name:tabNumber}
    });

    document.dispatchEvent(custEvent);
}

document.addEventListener('tabName',(e) =>{
    console.log("Tab changes to:", e.detail.name);
})


tabHeaders.addEventListener('click',function(e) {
    if(e.target.classList.contains("tab")){
        e.stopPropagation();
        const tabNumber=e.target.getAttribute("data-tab");
        console.log(tabNumber);
        switchToTab(tabNumber);
    }
})

document.addEventListener('click',function(){
    const allButtons=document.querySelectorAll(".tab.active");
})

document.addEventListener('keydown',(e)=>{
    console.log(e.key);
    if(e.key=== "1"){
        switchToTab(e.key);
    } else if(e.key === "2") {
        switchToTab(e.key);
    } else if(e.key === "3"){
        switchToTab(e.key);
    }
})
