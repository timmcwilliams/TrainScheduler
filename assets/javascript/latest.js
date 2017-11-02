$(document).ready(function () {

    var config = {

      apiKey: "AIzaSyBpmN96KsxcvLVDWO86qRTdW66UGckcBII",
    authDomain: "latest-aed4d.firebaseapp.com",
    databaseURL: "https://latest-aed4d.firebaseio.com",
    projectId: "latest-aed4d",
    storageBucket: "latest-aed4d.appspot.com",
    messagingSenderId: "257593556673"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

      
   
  $("#add-entry").on("click", function(event){

        event.preventDefault();

        var trainName = $("#train-input").val().trim(); 
        var dest = $("#destination-input").val().trim();
        var startTime =  $("#depart-input").val().trim();
        freq =  $("#freq-input").val().trim();


        var train = 
        {
            Train: trainName,     
            Destination: dest,
            frequency: freq,
            departsT: startTime  
        };

        console.log(train);

        database.ref().push(train);


    });//END $("#add-entry");


    database.ref().on("child_added", function(snap){
        console.log("snap:", snap);
        console.log("snap.val():", snap.val());

        // our snapshot val
        var train = snap.val();
        
        var firstTimeString = train.departsT;
        var freq = parseInt(train.frequency)
        
        var nextTrainArrival = moment(firstTimeString, "hh:mm"); 

        while(nextTrainArrival < moment())  // moment() is the curren date/time
        {
            nextTrainArrival.add(freq, "minutes");
        }


        var minutesAway = calculateDiff(nextTrainArrival);

            /* model to build our table
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    */



        var newRow = $("<tr>");
        newRow.append("<td>" + train.Train + "</td>");
        newRow.append("<td>" + train.Destination + "</td>");
        newRow.append("<td>" + train.frequency + "</td>");
        newRow.append("<td>" + nextTrainArrival.format("hh:mm a") + "</td>");
        newRow.append("<td>" + minutesAway + "</td>");

        $("#table-body").append(newRow);


    });

      
    function calculateDiff(nta)   
    {

        return  nta.diff(moment(), "minutes"); //45

    }



});//END $(document).ready


