firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
	  var email_verified = user.emailVerified;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id +
													"</br>verified : " + email_verified;
		if(email_verified == true){
			window.location.href="profile.html";
		}else{
			window.alert("Error : " + errorMessage);
		}
	
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("rEmail").value;
  var userPass = document.getElementById("password").value;

  localStorage.setItem("email", userEmail);

  
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

  
  
}

function RetrieveData(){
	  // Initialize Firebase
	  var config = {
		apiKey: "AIzaSyA9W19h4_1tpp4KSL0M99M8SOUuN7c2U3E",
		authDomain: "fashare-2c.firebaseapp.com",
		databaseURL: "https://fashare-2c.firebaseio.com",
		projectId: "fashare-2c",
		storageBucket: "fashare-2c.appspot.com",
		messagingSenderId: "115707668738"
	  };
	 
	  if (firebase.apps.length === 0){
	  firebase.initializeApp(config);
	  }
	
	var dbRef=firebase.database().ref().child('CreateAccount');

	var rEmail=document.getElementById("rEmail").value;
	var username=document.getElementById("username").value;
	
	
	dbRef.once('value', function(snapshot){
		snapshot.forEach(function(childSnapshot){
			var childData = childSnapshot.val();
			
			if(childData.rEmail.toUpperCase() == rEmail.toUpperCase().trim())
				{if (rEmail == rEmail){
					  localStorage.setItem("uname", username);
				}
				}

		});
	});
}


function sendVerification(){
	var user = firebase.auth().currentUser;

	user.sendEmailVerification().then(function() {
	  // Email sent.
	  window.alert("Verification Sent") ;
	  
	}).catch(function(error) {
	  // An error happened.
	  window.alert("Error : " + error.message);
});
}

function logout(){
  firebase.auth().signOut();
}
