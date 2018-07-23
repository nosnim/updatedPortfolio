var now = moment().format('LT');
var frequency = 20;
var initTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").unix();
var currentTime = moment().unix();
//var minAway = frequency - (currentTime-firstTrain)/frequency;

var intro = "The time is: ";

$(document).ready
$("#intro").html(intro);
$("#time").html(now);
$("#hour").html(currentTime);
$("#trial").html(initTrain);