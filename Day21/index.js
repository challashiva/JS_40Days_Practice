const quizData = [
    {
        question:"What does DOM stands for?",
        options:[
            "Document Order Model",
            "Document Object Model",
            "Data Object Method",
            "Direct Object Management"
        ],
        corect:1
    },
    {
        question:"Which method selects by ID?",
        options:[
            "getElementById()",
            "querySelectorAll()",
            "getElement()",
            "getElementByClassName()"
        ],
        corect:0
    },
    {
        question:"Which event fires on input change?",
        options:["click","submit","change","keydown"],
        corect:2
    }
];

let questions  = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score =0;
let timer;
let timeLeft;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultEl =document.getElementById("result");

function loadQuestion() {

    clearInterval(timer);
    timeLeft=15;
    updateTimer();
    timer=setInterval(countdown,1000); 
    resultEl.innerHTML="";

    const q = questions[currentQuestion];
    questionEl.textContent = `Q${currentQuestion +1}. ${q.question}`;

    optionEl.innerHTML="";

    q.options.forEach((option,index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = option;
        btn.addEventListener('click',() => selectAnswer(index,true));
        optionEl.appendChild(btn);
    });

    nextBtn.classList.add("disabled");
    nextBtn.style.display="inline-block";
}
function countdown() {
    timeLeft--;
    updateTimer();
    if(timeLeft === 0) {
        clearInterval(timer);
        selectAnswer(questions[currentQuestion]?.corect,false);
    }
}

function updateTimer() {
    timerEl.innerHTML = `⌚ ${timeLeft}`;
}

function selectAnswer(index,sholdScore) {
    clearInterval(timer);
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => btn.disabled = true);

    if(index === q.corect) {
        sholdScore && score++;
        buttons[index].classList.add("correct");
    } else {
        buttons[index].classList.add("wrong");
        buttons[q.corect].classList.add("correct"); 
    }
    nextBtn.classList.remove("disabled");
}

nextBtn.addEventListener('click', ()=> {
    currentQuestion++;
    if(currentQuestion < questions.length) {
        loadQuestion();
    }
    else{
        showResult();
        currentQuestion=0;
    }
})

function showResult() {
    nextBtn.style.display ="none";
    const hightScore = localStorage.getItem("quizHighScore") || 0;

    const isNew = score > hightScore;

    if(isNew) {
        localStorage.setItem("quizHighScore",score);
    }

    resultEl.innerHTML=`
        <h2>Hurray !!! Quiz Comleted</h2>
        <p>You have scored ${score} out of ${questions.length} questions</p>
        <p>Highest Score: ${Math.max(score,hightScore)}</p>
        ${isNew ? "<p>Hey, New High Score!</p>":""}
        <button class="restart-btn" onclick="restartQuiz()">Restart Quiz</button>
    `

}

function restartQuiz() {
    localStorage.removeItem("quizHighScore");
    score = 0;
    currentQuestion = 0;
    questions = [...quizData].sort(() => Math.random() - 0.5);
    loadQuestion();
}

loadQuestion();