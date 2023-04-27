
//1. when clicking the start button, first question appears

//2. timer starts running
//3. user selects answer, and it will show correct or show wrong message at the bottom
//4. user will enter initials at the end of the quiz
//5. user will click submit and will be redirected to 

const questions = [
    {
        question: "What is the capital of the US?",
        options: [  "1. Washington",
                    "2. Washington DC",
                    "3. New York",
                    "4. Miami"],
        correct: "2. Washington DC",
    },
    {
        question: "Florida is located in the _____",
        options: [  "1. West coast",
                    "2. East coast",
                    "3. Central",
                    "4. North"],
        correct: "2. East coast"
    },
    {
        question: "What is the capital of Peru?",
        options: [  "1. Buenos Aires",
                    "2. Madrid",
                    "3. Lima",
                    "4. Bogota"],
        correct: "3. Lima"
    },
    {
        question: "Which one is the largest country in the world?",
        options: [  "1. Russia",
                    "2. USA",
                    "3. Canada",
                    "4. Australia"],
        correct: "1. Russia"
    },
]
 var timer=document.getElementById('timer');
 var startButton = document.getElementById("start-button");
 var questionsContainer = document.getElementById("questionsContainer");
 var showQuestion=document.getElementById("showQuestion");
 var answers=document.getElementById("answers");
 var allDoneSection=document.getElementById("finished-section");
 var submitFormButton=document.getElementById("submitForm")
 var finalScore=document.getElementsByClassName("final-score")
var secondsLeft=60
var questionIndex=0
var timeState;


// Set up the event listener for the start button
 function startTimer(){
    timeState=setInterval(function(){
    secondsLeft=secondsLeft-1
    timer.textContent="time left,"+ secondsLeft
        if (secondsLeft<=0) {
            console.log("quiz is done")
            clearInterval(timeState)
        }
    },1000)
 }


 function startQuiz() {
   // Hide the start button
   startButton.style.display = "none";
   startTimer();
    questionsContainer.removeAttribute("class","hide");
    //run display questions here

questionDisplay()
}

function questionDisplay() {
    var nextQuestion=questions[questionIndex]
    showQuestion.textContent=nextQuestion.question;
    nextQuestion.options.forEach(function(option){
        var optionButton=document.createElement("button")
        optionButton.textContent=option
        optionButton.setAttribute("value", option)
        optionButton.onclick=checkAnswer
        answers.append(optionButton)
    })
}

function checkAnswer (){
    if (this.value===questions[questionIndex].correct)
    { console.log("correct")
    } else {
        console.log ("incorrect")
    }
questionIndex++
answers.innerHTML ="";
if (questionIndex===questions.length) {
    endQuiz()
} else {questionDisplay()}

}

function endQuiz (){
    showQuestion.setAttribute("class", "hide");
    questionsContainer.setAttribute("class", "hide");
    allDoneSection.removeAttribute("class", "hide");
}


startButton.onclick=startQuiz