     $(document).ready(function () {
  
      $("#add-entry").on("click", function(event){

        event.preventDefault();
   
        var trainNum = $("#train-input").val().trim(); 
        var destination = $("#destination-input").val().trim();"";
        var origin = $("#origin-input").val().trim();
        var freq =  $("#freq-input").val().trim();
        var startTime =  $("#depart-input").val().trim();
        var nextTrainArrival = moment(tarrive); 
        var currentT=moment();
        var departsT=""

      console.log(trainNum,destination,origin,freq,startTime,tarrive,mintoarrive,currentT);
        while(nextTrainArrival < moment())  // moment() is the curren date/time
        {
            nextTrainArrival.add(freq, "minutes");
        } 

        var nextTrainArrival = moment(firstTrainTime); 

while(nextTrainArrival < moment())  // moment() is the curren date/time
{
    nextTrainArrival.add(frequency, "minutes");
}//   event.preventDefault();
        // var currentT=$("#currentT-input").val().trim();
                var mintoarrive = nextTrainArrival.diff(moment(),"minutes"); var tarrive ="";   
// post to form
$('#train-input').append('<tr><td class="table">'+trainNum+'</td></tr>');
//         $(".table #train-input").appendchild($("<td>").text(trainNum));

// //         .on("child_added", function(data) { 
// // console.log(data.val())}


//         $(".table #origin-input").append($("<td>").text(origin));
//         $(".table #destination-input").append($("<td>").text(destination));
//         $(".table #freq-input").append($("<td>").text(freq));    
//         $(".table #departT").append($("<td>").text(departsT));
       
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
train = 
 {

    trainNum:trainNum,
    destination:destination,
    freq: freq,
    origin:origin,
    departsT:departsT,
    tarrive:tarrive,
    mintoarrive:mintoarrive,
    
}
database.ref().push(Train);

});

        // console.log(trainNum);

        $("#displayed-data").text("trainNum" + trainObj.trainNum +" Train Dest: " + destination + " Depart Time: " + trainObj.departs + " Freq: " + trainObj.freq + " Time Expected: " +trainObj.timeExpected + "  1st time moment:  " + trainObj.firstTimeMoment+ "  To Arrive Time: " + trainObj.tarrive  + "  Minutes to Arrive: " + trainObj.mintoarrive + "  Current Time : " + trainObj.currentT);



//  function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });



// var currentTime = "3:30";
var trainName = "austin";
var destination1 ="midland"; /*runs every 22 min

 // var randomDate = "02/23/1999";
 //    var randomFormat = "hh:mm:ss";
    var convertedDate = moment();
    var newDate=moment(convertedDate).add(6, 'm')/*.format("YYYY-mm-dd-hh:mm:ss");*/

var c= convertedDate.diff(newDate, 'm'); // 1

    console.log(moment(convertedDate).format("hh:mm:ss"));
    console.log(newDate.format("hh:mm:ss"));
    console.log(c);
  })

//     unction update() {
//   $("#currentT-input").html(moment().format("H:mm:ss"));
// }
// setInterval(update, 1000);


//       $("#add-entry").on("click", function(event){

//         event.preventDefault();
// // var currentT=$("#currentT-input").val().trim();

//         // var timenow = $(time);
//         var trainNum =    $("#train-input").val().trim();
//         var routeTime =   $("#routeTime-input").val().trim();
//         var destination = $("#destination-input").val().trim();
//         var origin =      $("#origin-input").val().trim();
//         var freq =        $("#freq-input").val().trim();
//         var departs =     $("#depart-input").val().trim();
//         var arrive =      $("#arrive-input").val().trim();
//         var tarrive =     $("#toarrive-input").val().trim();
//         var currentT =    $("#currentT-input").val().trim();
//         var startT=1000;
//         var routeTime=200;
//         var arriveT=startT+routeTime;
//         var ttt=currentT;
//         var remainT=(currentT-arriveT)*-1;
        
        
//         console.log(trainNum,routeTime,destination,origin,freq,departs,tarrive,startT,arriveT,currentT,remainT,ttt);
// // post to form

//         $("#displayed-data").text("  train name:  " + trainObj.trainName + " Train Dest: " + trainObj.destination + " First Time: " + trainObj.firstTime + " Freq:  " + trainObj.freq + " Time Expected: " +trainObj.timeExpected + "  1st time moment:  " + trainObj.firstTimeMoment+    "  Stringtime: " + trainObj.stringTime   + /*"  diffTime: " + trainObj.diffTime  +   */ "  firstTimeConverted: " + trainObj.firstTimeConverted);
//     }
//     </script>
//     // console.log(diffTime);
// // this works
//     var convertedDate = moment();
//     var newDate=moment(convertedDate).add(6, 'h')/*.format("YYYY-mm-dd-hh:mm:ss");*/

// var c= convertedDate.diff(newDate, 'h') // 1

//     console.log(moment(convertedDate).format("hh:mm:ss"));
//     console.log(newDate.format("hh:mm:ss"));
//     console.log(c);


    // Using scripts from moment.js write code below to complete each of the following.
    // Console.log to confirm the code changes you made worked.
    // 1 ...to convert the randomDate into three other date formats
    // console.log(moment(convertedDate).format("MM/DD/YY"));
    // console.log(moment(convertedDate).format("MMM Do, YYYY hh:mm:ss"));
    // console.log(moment(convertedDate).format("X"));
   

// var startTime =moment().startOf('day').format("dd-hh:mm:ss");
// var newTime=startTime.add(1, 'years').format("dd-hh:mm:ss");
// var startTime=moment(currentTime, "hh:mm").format("dd-hh:mm:ss");
// var newTime=(startTime, "hh:mm").add(1, 'years').format("dd-hh:mm:ss");
   // var firstTime = "03:30";

    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    // console.log(firstTimeConverted);
// var yesterday = moment("2017/10/30");
// yesterday.format();
// var lessonehour = currentTime.add(1, 'years').format();
// var freq = 22;
// var expectedTime=(firstTime


// var stringTime = "";
// /
// var firstConverted = 0;
// var diffTime = 0;


// $("#add-entry").on("click", function(event){
//   event.preventDefault();
//   currentTime = moment();
//     console.log("CURRENT TIME: " , moment(currentTime).format("hh:mm")); 
  
//   trainName = $("#train-name").val().trim();
//   destination = $("#destination").val().trim();

//   firstTime = $("#first-time").val().trim();
//   firstTimeConverted = moment(firstTime, "hh:mm");


//   console.log("first time", firstTime);  /*will be a string input*/
//    firstConverted1 = moment(firstTime, "hh:mm");
//   console.log("first time converted", firstConverted1);

//   freq = $("#frequency").val().trim(); /*will be a string input*/
 
  // diffTime = moment().diff(moment(firstConverted), "hh:mm");
    // console.log("DIFFERENCE IN TIME: ", diffTime);
  


//            var nextTrainArrival = moment(firstTrainTime); 

// while(nextTrainArrival < moment())  // moment() is the curren date/time
// {
//     nextTrainArrival.add(frequency, "minutes");
// } //   event.preventDefault();
// // var currentT=$("#currentT-input").val().trim();
// var minutesAway = nextTrainArrival.diff(moment(), "minutes"); // remeber moment() gives us current date/time







