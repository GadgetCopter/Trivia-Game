// Generate first question & answers

// Start timer

// user must then choose answer

// log whether answer is correct or incorrect

// display correct or incorrect page

// if timer reaches 0, "You ran out of time screen is logged."

// generate next question after a 5 second pause.

// next question is pushed to page.
var time = 25;
var intervalId;
var count = 0;
var answersCorrect = 0;
var answersIncorrect = 0;

// wait for page to be ready function
$(document).ready(function(){

// Game will start upon the start button being clicked.
$("#start-button").on("click", function(){
    startGame();
})

var stopwatch = function(){
    intervalId = setInterval(secondsTimer, 1000)    
    function secondsTimer(){
        if (time > 0) {
            time--;
        }
        else if (time === 0) {
            clearInterval(intervalId)
            answersIncorrect++
            count++
            startGame();
        }
        $("#time-remaining").html("Time Remaining: " + time)
    }
}

if (count > 6) {
  
}

var startGame = function(){
    time = 25;
    $("#time-remaining").html("Time Remaining: 25")
    $("#question").html(questions[count].question)
    $("#answer-one").html(questions[count].answer.one)
    $("#answer-two").html(questions[count].answer.two)
    $("#answer-three").html(questions[count].answer.three)
    $("#answer-four").html(questions[count].answer.four)
    $("#answers-correct").html("Answers Correct: " + answersCorrect)
    $("#answers-incorrect").html("Answers Incorrect: " + answersIncorrect)
    $("#start-button").removeClass("start-button").text("")
    stopwatch();
    
}

$("li").on("click", function() {
    var chosenAnswer = $(this).text();

    if (chosenAnswer === questions[count].correctAnswer) {
        $("#question").html("Nailed it! the correct answer was " + chosenAnswer)
        clearInterval(intervalId)
        time = 25;
        count++;
        answersCorrect++;
        setTimeout(startGame, 3000);
    } else if (chosenAnswer !== questions[count].correctAnswer){
        $("#question").html("Sorry, the correct answer was " + questions[count].correctAnswer)
        time = 25;
        clearInterval(intervalId)
        count++
        answersIncorrect++;
        setTimeout(startGame, 3000)
    }

    if(count > 6) {
        $("#time-remaining").html("")
        $("#question").text("That's it! You finished the Quiz!")
        $("#answer-one").text("")
        $("#answer-two").text("")
        $("#answer-three").text("")
        $("#answer-four").html(questions[count].answer.four)
        $("#answers-correct").html("Answers Correct: " + answersCorrect)
        $("#answers-incorrect").html("Answers Incorrect: " + answersIncorrect)
        $("#start-button").removeClass("start-button").text("")
    }
})

// array of objects containing all questions and answers in the trivia game
var questions = [
    {
        question: "This is the current price of an Ak-47",
        correctAnswer: "$2,700",
        answer: {
            one: "$3,100",
            two: "$2,900",
            three: "$2,700",
            four: "$2,500"
        }

    },
    
    {
        question: "Loss bonus after 3 rounds lost in a row",
        correctAnswer: "$2,400",
        answer: {
            one: "$2,400",
            two: "$2,900",
            three: "$2,200",
            four: "$4,750"
        }
    },

    {
        question: "Cost of a 'Full buy' for an Awper assuming this grenade setup: 2 Flashbangs, 1 Molotov, 1 Smoke",
        correctAnswer: "$7,050",
        answer: {
            one:"$7,400",
            two:"$7,050",
            three:"$8,000",
            four:"$16,000"
        }
    },

    {
        question: "Money reward for a frag with a UMP-45",
        correctAnswer: "$600",
        answer: {
            one: "$300",
            two: "$900",
            three: "$100",
            four: "$600"
        }
    },

    {
        question: "Indiviual player reward for defusing the bomb",
        correctAnswer: "$300",
        answer: {
            one: "$300",
            two: "$500",
            three:"$600",
            four: "$3500"
        }
    },
    
    {
        question: "Which team won the first ever CS:GO major championship?",
        correctAnswer: "Fnatic",
        answer: {
            one: "Fnatic",
            two: "Ninjas in Pyjamas",
            three: "Complexity Gaming",
            four: "VeryGames"
        }
    },

    {
        question: "This player maintained the #1 spot on HLTV top 20 two years in a row for 2016 and 2017",
        correctAnswer: "Marcelo 'coldzera' David",
        answer: {
            one: "Aleksandr 's1mple' Kostyliev",
            two: "Nikola 'Niko' Kovac",
            three: "Gabriel 'FalleN' Toledo",
            four: "Marcelo 'coldzera' David"
        }
    }


    
]


// var timeRemaining = setInterval(function() {   
//     console.log(time)
//     time--
//     if (time === 0) {
//         clearInterval(timeRemaining);
//     }

// }, 1000)


// function that handles the countdown timer for each question

});
