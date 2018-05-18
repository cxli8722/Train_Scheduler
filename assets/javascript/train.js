// Initialize Firebase
 var config = {
    apiKey: "AIzaSyAPrKot0w2dTRq5GpG2n6sbmEwB-xGKWaY",
    authDomain: "trainproject-d0bb1.firebaseapp.com",
    databaseURL: "https://trainproject-d0bb1.firebaseio.com",
    projectId: "trainproject-d0bb1",
    storageBucket: "trainproject-d0bb1.appspot.com",
    messagingSenderId: "982233013749"
  };
  firebase.initializeApp(config);

 	var database = firebase.database();
	var TrainName = "";
	var Destination = "";
	var Time = "";
	var Frequency = "";

//event listener 
   $("#submitbtn").on("click", function(event) {
   	 // Don't refresh the page!
     event.preventDefault();
  		TrainName = $("#TrainNameInput").val().trim();
      	Destination = $("#DestinationInput").val().trim();
      	Time = $("#TrainTimeInput").val().trim();
      	Frequency = $("#frequencyInput").val().trim();
     	// console.log(TrainName)
       	// console.log(Destination)
        // console.log(Time)
        // console.log(Frequency)
        //pushing data to the firebase without rewriting old data
    	database.ref().push({
        TrainName: TrainName,
       	Destination : Destination,
        Time: Time,
        Frequency: Frequency,
        //time stamp
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    
 	});
	
   	
	database.ref().on("child_added", function(childSnapshot) {

		var namefb = childSnapshot.val().TrainName;
		var Destinationfb = childSnapshot.val().Destination;
		var timefb = childSnapshot.val().Time;
		var frequencyfb= childSnapshot.val().Frequency;
//console.log to make sure it works 
		// console.log(namefb)
		// console.log(Destinationfb)
		// console.log(timefb)
		// console.log(frequencyfb)

// Time conversion
		var TimeConversionOne=moment(timefb, "hh:mm");
		//console.log("conversionONe:  " + TimeConversionOne)
		var TimeDiff= moment().diff(moment(TimeConversionOne), "minutes");
		//console.log("timedifferent: " + TimeDiff)
		var ReminderResult=TimeDiff % frequencyfb;
		//console.log("reminder: " + ReminderResult)
		var TrainArrivedInMins= frequencyfb-ReminderResult;
		//console.log("Minutes till next train " + TrainArrivedInMins)
		var nextTrainTime = moment().add(TrainArrivedInMins, 'minutes').format("hh:mm");
		//console.log("next train time: " + nextTrainTime)
		var FormatedTrainTime=moment(nextTrainTime).format("hh:mm");
		//console.log("Formated next Train time " + FormatedTrainTime)
		
		//append to html 
		$("#traininfo").append("<tr><td> " + namefb +"</td> " + "<td> " + "</td> "+ Destinationfb +
		 "<td> " + frequencyfb + "</td> "+ "<td> " + nextTrainTime + "</td> "+ "<td> " + TrainArrivedInMins + "</td> ");
		
    });


