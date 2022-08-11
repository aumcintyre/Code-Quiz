//Dom Elements
var startBtn = document.querySelector("#start")
var questionEl = document.querySelector("#questions")
var optionsEl = document.querySelector("#options")
var submitBtn = document.querySelector("#submit")
var timerEl = document.querySelector("#time")
var initialsEl = document.querySelector("#initials")
var graderEl = document.querySelector("#grader")
var endPage = document.querySelector("#endPage")
var scoreEl = document.querySelector("#score")
var scoresEl = document.querySelector("#scores")
var highBtn = document.querySelector("#high")
//Question object array below

var questions = [
    {
        title: "Javascript is a(n) ______ language?",
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
var score = 0;

// Will run when 'start' button is clicked. Hides the start page and shows the first question and options.
function startQuiz(event) {
    var startEl = document.getElementById("startPage");
    startEl.setAttribute("class", "hide");
    questionEl.removeAttribute("class");
    timerId = setInterval(countdown, 1000)
    console.log("CLICK");
    // event.stopPropagation();
    showQuestion();
}

//Shows the question at the current index
function showQuestion() {
    var thisQuestion = questions[activeQuestion];
    var titleEl = document.getElementById("title");
    titleEl.textContent = thisQuestion.title;


    //Will list the options for the current question below as buttons
    function showOptions() {
        console.log(thisQuestion.answer);
        for (let i = 0; i < thisQuestion.options.length; i++) {
            var choices = document.createElement("button");
            choices.textContent = thisQuestion.options[i];
            optionsEl.appendChild(choices);
            choices.setAttribute("id", "ansButton")
            const ansBtn = document.querySelector("#ansButton")
            choices.addEventListener("click", answerSelect);
        }
    }


    showOptions();

    function answerSelect() {

        if (this.textContent !== thisQuestion.answer) {
            time -= 30;
            timerEl.textContent = time;
            graderEl.textContent = "Incorrect";
            graderEl.style.color = "red";
            console.log("WRONG");
        } else {
            graderEl.textContent = "Correct";
            graderEl.style.color = "Green";
            console.log("RIGHT");
            score++;
        }


        graderEl.setAttribute("class", "grader");
        setTimeout(function () {
            graderEl.setAttribute("class", "grader hide")
        }, 1000);

        activeQuestion++;

        if (activeQuestion === questions.length) {
            quizEnd();
        } else {
            optionsEl.innerHTML = "";
            showQuestion();
        }
    }
}

function countdown() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        clearInterval(timerId);
        quizEnd();
    }

}

function quizEnd() {
    timerEl.textContent = "Done!";
    clearInterval(timerId);
    console.log("done");
    questionEl.setAttribute("class", "hide")
    endPage.removeAttribute("class")
    scoreEl.textContent = score;

}

//insert function to show total score here

function getHighscore() {
    var highscore = JSON.parse(localStorage.getItem("highscore")) || [];
    var initials = initialsEl.value;


    var totalScore = {
        score: score,
        initials: initials
    }


    highscore.push(totalScore);
    localStorage.setItem("highscore", JSON.stringify(highscore));

    //Can this all be one function?
    function showHighScore() {
        var highscore = JSON.parse(localStorage.getItem("highscore")) || [];
        highscore.sort(function (a, b) {
            return b.score - a.score
        });

        for (let i = 0; i <= highscore.length; i++) {
            var rows = document.createElement("li");

            var rankEl = document.getElementById("highscores");
            rankEl.append(rows);
            // rows.textContent = "SCORE";
            // rows.itextContent = (initials.initials + " - " + score.score);
            rows.innerHTML = (totalScore.initials + " - " + totalScore.score);
            rows.text
            console.log(rows);
        }

        //------- THIS LINE BREAKS
        endPage.setAttribute("class", "hide");
        scoresEl.classList.remove("hide")

        console.log(totalScore);
    }
    showHighScore();
}

// function showScore() {

//     var totalScore = {
//         score: score,
//         initials: initials
//     }


//     var highscore = JSON.parse(localStorage.getItem("highscore")) || [];
//     highscore.sort(function (a, b) {
//         return b.score - a.score
//     });

//     for (let i = 0; i <= highscore.length; i++) {
//         var rows = document.createElement("li");

//         var rankEl = document.getElementById("highscores");
//         rankEl.append(rows);
//         // rows.textContent = "SCORE";
//         // rows.itextContent = (initials.initials + " - " + score.score);
//         rows.innerHTML = (totalScore.initials + " - " + totalScore.score);
//         rows.text
//         console.log(rows);
//     }

//     scoresEl.classList.remove("hide")

//     console.log(totalScore);
// }

submitBtn.addEventListener("click", getHighscore);
highBtn.addEventListener("click", showScore);
startBtn.addEventListener("click", startQuiz);


