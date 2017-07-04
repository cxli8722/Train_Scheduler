// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCRB_OzgwtbtBW3mTmTYBmyKUUd6kgYK3M",
    authDomain: "trainscheduler-f2069.firebaseapp.com",
    databaseURL: "https://trainscheduler-f2069.firebaseio.com",
    projectId: "trainscheduler-f2069",
    storageBucket: "",
    messagingSenderId: "943237040749"
  };
  firebase.initializeApp(config);

   $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

console.log('hello');
  });

