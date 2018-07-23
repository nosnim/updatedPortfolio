var currentScore;
var winScore = 0;
var lossScore = 0;
var targetValue;
var redValue;
var yellowValue;
var greenValue;
var blueValue;
var aws = require('aws-sdk');

function newGame() {
    currentScore = 0;
    redValue = Math.floor(Math.random() * 12) + 1;
    yellowValue = Math.floor(Math.random() * 12) + 1;
    greenValue = Math.floor(Math.random() * 12) + 1;
    blueValue = Math.floor(Math.random() * 12) + 1;
    targetValue = Math.floor(Math.random() * 102) + 19;
    document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
    document.getElementById("targetNumber").innerHTML = "Target Number: " + targetValue;
    document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
}

function gameLogic() {
    $("#red").click(function () {
        currentScore = currentScore + redValue;
        document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        if ((targetValue - currentScore) <= 0) {
            endGame();
        }
    });

    $("#yellow").click(function () {
        currentScore = currentScore + yellowValue;
        document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        if ((targetValue - currentScore) <= 0) {
            endGame();
        }
    });

    $("#green").click(function () {
        currentScore = currentScore + greenValue;
        document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        if ((targetValue - currentScore) <= 0) {
            endGame();
        }
    });

    $("#blue").click(function () {
        currentScore = currentScore + blueValue;
        document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        if ((targetValue - currentScore) <= 0) {
            endGame();
        }
    });
}

newGame();
gameLogic();

var endGame = function () {
    if (targetValue == currentScore) {
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        winScore++;
        setTimeout(function () {
            alert("You Win!!!");
        }, 1);

    }
    else {
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        lossScore++;
        setTimeout(function () {
            alert("You didn't win....try again!");
        }, 1);

    }

    document.getElementById("winScore").innerHTML = "Wins: " + winScore;
    document.getElementById("lossScore").innerHTML = "Losses: " + lossScore;

    setTimeout(function () {
        var playAgain = confirm("Play Again?");
        if (playAgain = true) {
            newGame();
        }
    }, 1)
}

aws.config.loadFromPath('../config.json'); //load aws from config
var ses = new aws.SES({ apiversion: '2.260.1' }); //load AWS SES
var to = ['ericnsarah@gmail.com', 'stuartmurry93@gmail.com'] //send to list
var from = 'ericminson01@gmail.com' //verified FROM email address
$('#email').on("click", function () {

    //send email
    ses.sendEmail({
      Source: from,
      Destination: { ToAddresses: to },
      Message: {
        Subject: {
          Data: 'A Message To You, Eric & Stu'
        },
        Body: {
          Text: {
            Data: "Let's get this thing going!!!",
          }
        }
      }
    },
      function (err, data) {
        if (err) throw err
        console.log('Email sent:');
        console.log(data);
      });
  });



