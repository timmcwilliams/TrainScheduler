    // $(document).ready(function () {

//REPLACE WITH YOUR FIREBASE CONFIG INFO
var config = {

 apiKey: "AIzaSyDBniCZaqg-B2cPJPMp4YQvKuvan4tX7Eg",
 authDomain: "trytwoontrains.firebaseapp.com",
 databaseURL: "https://trytwoontrains.firebaseio.com",
 projectId: "trytwoontrains",
 storageBucket: "trytwoontrains.appspot.com",
 messagingSenderId: "226391422814"
};

firebase.initializeApp(config);

var database = firebase.database();

// this is a clock
function update() {
  $("#currentT-input").html(moment().format("H:mm:ss"));
}
setInterval(update, 1000);

// this is a console log of moment
var currentTime = moment();

console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm:ss"));

// add entries
$("#add-entry").on("click", function(event){
  event.preventDefault();
  
  // some variables
  var trainName = $("#train-name").val().trim();
  var destination = $("#destination").val().trim();
  var firstTime = $("#first-time").val().trim();  
  var freq = $("#frequency").val().trim();
  var stringTime = moment().format("YYYY-MM-DD"); // get me todays date as a string
  var firstTimeMoment = stringTime + "T" + firstTime;  
  var timeExpected=("timeexpected");
  var firstTimeConverted = ("");

  var newTrain = {

    trainName: trainName,
    destination: destination,
    firstTime: firstTimeMoment,
    freq: freq,
    timeExpected:timeExpected,
    firstTimeConverted:firstTimeConverted

  };

// what I want to do here 
// get variables in and out of the firebase
// enter a time now and frequency - that would be 
// so use frequency like every 30 min and min from now. 
// use difference (diff)
// input trainName
// example Houston To Austin
// Input freq - example 45 min
// use a start time example 3PM
// use time now and calculate what to get which is remainder of the 45 min trip
// time from min to min current from start time. 
// example 6pm - 3 pm diff = 180 min - then 180/45 = remaining min = so is  min away.
// post is x miniutes away
// will need current time for comparison.

// needs - 
// current time - git from system
// start time - use input
// frequency - use input and post

// calculated expected time
// main formula current time - start time giving miniutes and dividing by frequency giving remainder. 
// example 
// 7 pm = 60 x 19 = 1140 gives current time
// start time = user input in minutes so using 12:30 = 12 * 60 +30 = 750
// freq is set by user - 25 this means it runs every 25 min
// calulate where it is starts at 750 is time 0 - 1140 is where are now 
// 1140-750 = time run = 390
// 390 / 25 = 15.6
// so will arrive at 25 - 15.6 inotd to convert .6 so .6 is key number - need .6 of 25 min


// put in freq of every 2 hours for example
// get current time and show is 2 hours away. 
// decrement time till arrive by difference of set current time to now current time
// display min from now



  database.ref().push(newTrain);

});


database.ref().on("value", function(snapshot){

  if(snapshot.val())
  {  
    var wholeDatabase = snapshot.val();

    // THIS LOOPS
    for(var key in wholeDatabase)
    {
      console.log(key);
      var trainObj = wholeDatabase[key];
     // console.log(key.val().freq);
     console.log(trainObj.freq);
      //NOW YOU CAN DO SOMETHING WITH EACH TRAIN OBJECTs Data
      $("#displayed-data").text(trainObj.trainName + " | " + trainObj.destination + " | " + trainObj.firstTime + " | " + trainObj.freq + "| " + trainObj.timeExpected);
 // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
 //    console.log(firstTimeConverted);
    }
  }
});



// If any errors are experienced, log them to console.
// }, function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
// $("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  // event.preventDefault();

  // Get the input values


  // Log the Bidder and Price (Even if not the highest)
  // if (bidderPrice > highPrice) {

    // Alert
    // alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  // }

  // else {
    // Alert
  //   alert("Sorry that bid is too low. Try again.");
  // }

// });
