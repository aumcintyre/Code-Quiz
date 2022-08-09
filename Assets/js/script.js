//Dom Elements
var startBtn = document.querySelector("#start")
var questionEl = document.querySelector("#questions")
var options = document.querySelector("#options")
var submitBtn = document.querySelector("#submit")
// var timerEl = document.queryselector("#time")
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

console.log(questions);



var activeQuestion = 0;
var time = questions.length * 15;


function startQuiz() {

    
}