var questions = [
    //     {question: "...",
    //     "0", "1", "2", "3", "4", "5"],
    //     correctAnswer: 2
    // },
    ["what year did The Shawshank Redemption release?", "1989", "1776", "1994", "None of these", "1992"],
    ["who played Batman in The Dark Knight?", "Heath Ledger", "Russel Crowe", "Christian Bale", "None of these", "Micheal Keaton"],
    ["how much money did the Avenger's movie, 'ENDGAME' gross in the opening weekend", "$540 million", "$2.9 billion", "$1.223 billion", "None of these", "all of these"],
    ["how many Avengers are there in the first Avengers movie?", " 4", " 10", "6", "100", "3"],
    ["how many jury members voted not guilty in '12 Angry Men'?", "6", "9", "all 12", "none of them", "it was ruled a miss-trial"],
    ["how many hours does the Lord of the Rings trilogy run?", "8", "13", "9", "15 with extended footage", "7.25"],
    ["Who plays Captain America in the Avenger's Infinity Saga movies?", "Chris Pine", "Chris Hemsworth", "Chris Evans", "Chris Tucker", "Chris Pratt"]
];

var quiz = document.getElementById("quiz");
var ques = document.getElementById("question");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var opt5 = document.getElementById("option5");
var res = document.getElementById("result");
var scoreText = document.getElementById("scoreBoard");
var nextbutton = document.getElementById("next");
var timerEl = document.getElementById("timer");

var timeLEFT = 360;

var totalQuestions = questions.length;
var score = 0;
var scoreText = document.getElementById("scoreBoard");
var index = 0;
var start = document.getElementById("start")

// ------------------------------------------------------------------
// ------------------------------------------------------------------

$(start).on("click", function () {
    startTimer();
    firstQuestion(0);
});

function startTimer() {
    // TIMER BEGINS HERE AND IS NESTED IN THE CORNER
    // timer set and begins 360s countdown
    setTimer();
}

function setTimer() {

    var countdown = setInterval(function () {
        timeLEFT--;
        timerEl.textContent = " " + timeLEFT + " seconds's";
        var secondsLeft = timeLEFT;
        if (secondsLeft === 0) {
            clearInterval(countdown);
            alert("QUIZ IS OVER");
        }
    }, 1000);

}




// ________________________________________________________________________
// PLAY THE GAME BELOW
// ______________________________________________
function firstQuestion(index) {
    ques.textContent = index + 1 + ". " + questions[index][0];
    opt1.textContent = questions[index][1];
    opt2.textContent = questions[index][2];
    opt3.textContent = questions[index][3];
    opt4.textContent = questions[index][4];
    opt5.textContent = questions[index][5];
    return;
};


function nextques() {
    var selected_answer = document.querySelector('input[type=radio]:checked');
    if (!selected_answer) { alert("SELECT AN OPTION"); return; }
    console.log(selected_answer.value);
    if (questions[selected_answer.value] == questions[3]) { score = score++; }


    selected_answer.checked = false;
    index++;
    firstQuestion(index);

    if ((index == totalQuestions - 1) || (timeLEFT == 0)) {
        nextbutton.textContent = "Finish";
        nextbutton.on("click", function () {
            highScore();
            console.log("*");
        }
        )
    };



    var f = score / totalQuestions;
    if (index == totalQuestions) {

        quiz.style.display = 'none';
        result.style.display = '';
        result.textContent = "SCORED:" + score;

    }

}

// ____________________________________
// score board



function highScore() {
    var scoreList = $("#scoreBoard");
    var AAA = prompt("Enter Initials: ").toUpperCase() + "  " + score;
    console.log(AAA);
    scoreList.append("<li>" + AAA + "<li>");

}