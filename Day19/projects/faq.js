
const faq=document.querySelector(".faq");

faq.addEventListener("click",function(e){

    if(e.target.classList.contains("question")){
        e.stopPropagation();
        const currentItem=e.target.parentElement;
        const answerElem= currentItem.querySelector(".answer");

        answerElem.classList.toggle("show");
        console.log(currentItem.querySelector(".answer"));
    }
})

document.addEventListener('click',function() {
    const allAnswers=document.querySelectorAll(".answer.show");
    allAnswers.forEach(ans=>ans.classList.remove("show"));
})