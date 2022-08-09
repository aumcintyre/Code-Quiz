//Dom Elements
var startBtn = document.querySelector("#start")
var questionEl = document.querySelector("#questions")
var optionsEl = document.querySelector("#options")
var submitBtn = document.querySelector("#submit")
var timerEl = document.querySelector("#time")
var initialsEl = document.querySelector("#initials")
var graderEl = document.querySelector("#grader")

//Question object array below

var questions = [
    {
        title: "Javascript is a ______ language?",
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

//Shows the question at the current index
function showQuestion() {
    var thisQuestion = questions[activeQuestion];
    var titleEl = document.getElementById("title");
    titleEl.textContent = thisQuestion.title;


    //Will list the options for the current question below as buttons
    //HOW DO I APPEND THE BUTTONS TO AN ORDERED LIST? NECESSARY?
    function showOptions() {
        for (let i = 0; i < thisQuestion.options.length; i++) {
            var choices = document.createElement("button");
            choices.textContent = (i + 1) + ". " + thisQuestion.options[i];
            optionsEl.appendChild(choices);
            choices.setAttribute("class", "button")

        }

    }

    showOptions();
}

function answerSelect() {
    if (this.value !== thisQuestion.answer) {
        time -= 10;
        timerEl.textContent = time;
        graderEl.textContent = "Incorrect";
        graderEl.style.color = "red";
        graderEl.stle.fontSize = "300%";
    } else {
        graderEl.textContent = "Correct";
        graderEl.style.color = "Green";
        graderEl.stle.fontSize = "300%";
    }
    graderEl.setAttribute("class", "grader");
    setTimeout(function () {
        graderEl.setAttribute("class", "grader hide")
    }, 1000);

    activeQuestion++;

    if (activeQuestion === questions.length) {
        quizEnd();
    } else {
        showQuestion();
    }

}


function countdown() {
    time--;
    timerEl.textContent = time;
    if (time === 0) {
        clearInterval(timerId);
        // quizEnd();
    }
}
startBtn.addEventListener("click", startQuiz);
choices.addEventListener("click", answerSelect);

//the choices button is currently wired incorrectly.