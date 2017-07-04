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




   $("#submitbtn").on("click", function(event) {
   	 // Don't refresh the page!
     event.preventDefault();
  		TrainName = $("#TrainNameInput").val().trim();
      	Destination = $("#DestinationInput").val().trim();
      	Time = $("#TrainTimeInput").val().trim();
      	Frequency = $("#frequencyInput").val().trim();
     	console.log(TrainName)
       	console.log(Destination)
        console.log(Time)
        console.log(Frequency)
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
	
   	//
	database.ref().on("child_added", function(childSnapshot) {

		var namefb = childSnapshot.val().Name;
		var Destinationfb = childSnapshot.val().Destination;
		var timefb = childSnapshot.val().Time;
		var frequencyfb= childSnapshot.val().Frequency;
		



		$("#traininfo").append("<tr><td> " + "</tr></td> " + namefb+ "<tr><td> " + "</tr></td> "+ Destinationfb +
		 "<tr><td> " + timefb + "</tr></td> "+ "<tr><td> " + frequencyfb + "</tr></td> ");


		
    });


