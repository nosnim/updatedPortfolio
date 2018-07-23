
var wins = 0;
var losses = 0;
var remainingGuesses = 8;

var lettersInWord = []; //array of letters in random word
var words = ["patriot", "dolphin", "jet", "bill", "eagle", "redskin", "cowboy", "giant", "viking", "packer", "bear", "lion", "steeler", "raven", "bengal", "brown", "seahawk", "forty niner", "cardinal", "ram", "bronco", "chief", "charger", "raider", "jaguar", "liberty", "hannah", "jaguar", "colt", "texan", "titan", "saint", "panther", "falcon", "buccaneer"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomWord = ""; //placeholder for random word
var numBlanks = 0; //number of letters in chosen word 
var numWrong = 0; //number of letters in wrong guesses
var wrongLetters = []; //wrong guesses
var blankAndGuessed = []; //blank and successful guesses




function startGame() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = randomWord.split("");
    numBlanks = lettersInWord.length;
    numWrong = wrongLetters.length;
    var checkWrongLetters = false;



    blankAndGuessed = [];
    wrongLetters = [];
    remainingGuesses = 8;

    for (var i = 0; i < numBlanks; i++) {
        blankAndGuessed.push("_");
        console.log(blankAndGuessed);
    }


    document.getElementById("blankWord").innerHTML = blankAndGuessed.join(" ");
    document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;
    document.getElementById("totalWins").innerHTML = "Total Wins: " + wins;
    document.getElementById("totalLosses").innerHTML = "Total Losses: " + losses;

}

function checkLetters(letterGuessed) {
    var lettersInWord = false;
    

    for (var i = 0; i < numBlanks; i++) {
        if (randomWord[i] == letterGuessed) {
            lettersInWord = true;
        }
    }

    if (lettersInWord) {
        for (i = 0; i < numBlanks; i++) {
            if (randomWord[i] == letterGuessed) {
                blankAndGuessed[i] = letterGuessed;
            }
        }
    }

    else {
        wrongLetters.push(letterGuessed);
        remainingGuesses--;
    }

}

function roundDone() {
    document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;
    document.getElementById("blankWord").innerHTML = blankAndGuessed.join(" ");
    document.getElementById("wrongGuesses").innerHTML = "Wrong Guesses: " + wrongLetters.join(" ");

    if (lettersInWord.toString() == blankAndGuessed.toString()) {
        document.getElementById("totalWins").innerHTML = "Total Wins: " + wins;
        wins++;
        setTimeout(function () {
            alert("You Win!!!");
        }, 1);
        setTimeout(function () {
            startGame();
        }, 1);
    }

    else if (remainingGuesses === 0) {
        losses++;
        setTimeout(function () {
            alert("You lose.  The word was " + randomWord.toUpperCase());
        }, 1);
        setTimeout(function () {
            document.getElementById("totalLosses").innerHTML = "Total Losses: " + losses;
        }, 1);
        setTimeout(function () {
            startGame();
        }, 1);
    }

}

startGame();

document.onkeyup = function (event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(lettersGuessed);
    roundDone();

}