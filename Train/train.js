/* global firebase moment */
// Steps to complete:
// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAGHDNn0UAy0OTVODHrIR4oeLYwAczyHro",
  authDomain: "trainschedule-bfc6f.firebaseapp.com",
  databaseURL: "https://trainschedule-bfc6f.firebaseio.com",
  projectId: "trainschedule-bfc6f",
  storageBucket: "",
  messagingSenderId: "405205468701"
};
firebase.initializeApp(config);

var database = firebase.database();

function startTime() { //add real time clock in jumbotron header
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  
  m = checkTime(m);
  s = checkTime(s);
  
  document.getElementById("nowTime").innerHTML = "Current Time: " +
    h + ":" + m + ":" + s;
    if (s === "00") { //reload page at top of each minute
      window.location.reload();
    }
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

startTime();



// 2. Button for adding Employees
$("#submitButton").on("click", function (event) {
  event.preventDefault();
  // Grabs user input
  var trainName = $("#trainNameInput").val().trim();
  var destName = $("#destinationInput").val().trim();
  var initTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").unix();
  var freqRate = $("#frequencyInput").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    destination: destName,
    firstTrain: initTrain,
    frequency: freqRate
  };
  // Uploads employee data to the database
  database.ref().push(newTrain);
  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);
  // Alert
  alert("Train successfully added");
  // Clears all of the text-boxes
  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#firstTrainInput").val("");
  $("#frequencyInput").val("");
});
// 3. Create Firebase event for adding train info to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var destName = childSnapshot.val().destination;
  var initTrain = childSnapshot.val().firstTrain;
  var freqRate = childSnapshot.val().frequency;

  // Train Info
  console.log(trainName);
  console.log(destName);
  console.log(initTrain);
  console.log(freqRate);

  // Time variables
  var currentTime = moment().unix(); //current time in unix
  var timeDifference = currentTime - initTrain; //difference between current time and time of first train
  var frequencySeconds = freqRate * 60; // converting the frequency in minutes to frequency in seconds

  var intervalCalc = timeDifference % frequencySeconds; //calculate the remainder in the current unfinished interval
  var minutesAwayAll = freqRate - (intervalCalc / 60); // calculate how much time in minutes is left in current interval
  var secondsAway = minutesAwayAll * 60; // calculate how much time in seconds is left in current interval
  var nextTrainSeconds = currentTime + secondsAway;
  var absTimeDifference = Math.abs(timeDifference);

  //If / Else check to account for first train occuring in the future which will occur if currentTime - initTrain < 0
  if (timeDifference < 0) {
    var minutesAway = Math.round(absTimeDifference / 60);
    var nextTrain = moment(initTrain, "X").format("HH:mm");
  }
  else {
    var minutesAway = Math.round(minutesAwayAll);
    var nextTrain = moment(nextTrainSeconds, "X").format("HH:mm");
  }

  console.log(currentTime);
  console.log(minutesAway);
  console.log(timeDifference);
  console.log(frequencySeconds);
  console.log(intervalCalc);
  console.log(minutesAway);
  console.log(secondsAway);
  // Add each train's data into the table
  $("#trainSchedule > tbody").append("<tr><td>" + trainName + "</td><td>" + destName + "</td><td>" +
    freqRate + "</td><td>" + nextTrain + "</td><td>" + minutesAway + "</td><td>");
});



