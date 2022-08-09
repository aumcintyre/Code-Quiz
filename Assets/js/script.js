//Dom Elements
var startBtn = document.querySelector("#start")
var questionEl = document.querySelector("#questions")
var optionsEl = document.querySelector("#options")
var submitBtn = document.querySelector("#submit")
var timerEl = document.querySelector("#time")
var initialsEl = document.querySelector("#initials")

//Question object array below

var questions = [
    {
        title: "Javascript is a ______ landguage?",
        options: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answer: "Object-Oriented"
    },
    {
        title: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["Var", "Let", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        title: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["getElementbyID()", "getElementbyClassname()", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        title: "How can a datatype be declared to be a constant type?",
        options: ["Const", "Var", "Let", "None of the above"],
        answer: "Const"
    },
    {
        title: "Which function is used to serialize an object into a JSON string in Javascript?",
        options: ["Stringify()", "Parse()", "Convert()", "None of the above"],
        answer: "Stringify()"
    },
    {
        title: "Which of the following are closures in Javascript?",
        options: ["Variables", "Objects", "Functions", "All of the above"],
        answer: "All of the above"
    }
];


var activeQuestion = 0;
var time = questions.length * 15;
var timerId;


// Will run when 'start' button is clicked. Hides the start page and shows the first question and options.
function startQuiz(event) {
    var startEl = document.getElementById("startPage");
    startEl.setAttribute("class", "hide");
    questionEl.removeAttribute("class");
    timerId = setInterval(countdown, 1000)
    console.log("CLICK");
    showQuestion();
}

function showQuestion(){
    var thisQuestion = questions[activeQuestion];
    var titleEl = document.getElementById("title");
    titleEl.textContent = thisQuestion.title;
    optionsEl.textContent="";

var options = function(){
    for (let i = 0; i <= questions.options.length; i++){
        var choices = document.createElement("button");
        optionsEl.appendChild("ol");
        // choices.setAttribute("class", "option");
        // choices.setAttribute("value", )
        // choices.textContent = i + 1 + "." + choice;
        // optionsEl.appendChild(choices);
        // // choices.addEventListener()
    }


}
}
function countdown () {
    time--;
    timerEl.textContent=time;
    if (time <=0){
        return;
        // quizEnd();
    }
}
startBtn.addEventListener("click", startQuiz);
