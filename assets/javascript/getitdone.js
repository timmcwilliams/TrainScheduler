    // $(document).ready(function () {

//REPLACE WITH YOUR FIREBASE CONFIG INFO
var config = {

    apiKey: "AIzaSyCW-mK6zVMB_PpgQkIJoS6jx0_cxPsx8LE",
    authDomain: "test2-fd625.firebaseapp.com",
    databaseURL: "https://test2-fd625.firebaseio.com",
    projectId: "test2-fd625",
    storageBucket: "test2-fd625.appspot.com",
    messagingSenderId: "486049921336"
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

  var newTrain = {

    trainName: trainName,
    destination: destination,
    firstTime: firstTimeMoment,
    freq: freq
  };

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
  
      //NOW YOU CAN DO SOMETHING WITH EACH TRAIN OBJECTs Data
    }

  }
});








//alert("Firebased is active");



  // // Initial Values
  // departs = 111;
  // highPrice = 222;
  // initialBidder = 333;
  // highBidder= 444;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
// database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  // if (snapshot.child("highBidder1").exists() && snapshot.child("highPrice1").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // database.ref().set({
    //   departs : departs,
    //   highPrice : highPrice,
    //   initialBidder : initialBidder,
    //   highBidder: highBidder
    // });
    // console.log(departs);
    // console.log(highPrice);
    // console.log(initialBidder);
    // console.log(highBidder);
    //  database.ref().on("value", function(snapshot) {

    //   // Print the initial data to the console.
    //   console.log(snapshot.val());

    //   // Log the value of the various properties
    //   console.log(snapshot.val().departs);
    //   console.log(snapshot.val().highPrice);
    //   console.log(snapshot.val().initialBidder);
    //   console.log(snapshot.val().highBidder)
    //   // Change the HTML
    //   $("#displayed-data").text(snapshot.val().departs + " | " + snapshot.val().highPrice + " | " + snapshot.val().initialBidder + " | " + snapshot.val().highBidder);

    //   // If any errors are experienced, log them to console.
    // // }, function(errorObject) {
    // //   console.log("The read failed: " + errorObject.code);
    // });
//});



        // var ttt=currentT;
        // var remainT=(currentT-arriveT)*-1;
        // console.log(currentT);


      // $(".table .depart-input").append($("<td>").text(depart));
      // $(".table .currentT-input").append($("<td>").text(currentT));
    
 // Change the HTML to reflect the stored values


    // Print the data to the console.


  // }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  // else {

    // Change the HTML to reflect the initial values


    // Print the data to the console.


  // }


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



        // var ttt=currentT;
        // var remainT=(currentT-arriveT)*-1;
        // console.log(currentT);


      // $(".table .depart-input").append($("<td>").text(depart));
      // $(".table .currentT-input").append($("<td>").text(currentT));
    
 // Change the HTML to reflect the stored values


    // Print the data to the console.


  // }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  // else {

    // Change the HTML to reflect the initial values


    // Print the data to the console.


  // }


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
