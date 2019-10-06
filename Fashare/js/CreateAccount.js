function saveToDB(){
  // Initialize Firebase
	var rName=document.getElementById("Rname").value;
	var dob=document.getElementById("dob").value;
	var contact=document.getElementById("contact").value;
	var adminNo=document.getElementById("adminNo").value;
	var password=document.getElementById("password").value;
	var diploma=document.getElementById("diploma").value;
	var username=document.getElementById("username").value;
	var rEmail=document.getElementById("rEmail").value;


	var gender;
	if (document.getElementById("t1").checked)
		gender=document.getElementById("t1").value;
	if (document.getElementById("t2").checked)
		gender=document.getElementById("t2").value;
	
	var profilep = localStorage.getItem("ProfilePic");

	var dbRef=firebase.database().ref().child('CreateAccount');

	var postData = {
		name : rName,
		dayOfBirth : dob,
		contactNumber : contact,
		adminNo : adminNo,
		gender : gender,
		course : diploma,
		username : username,
		emailAddress: rEmail,
		profilepic: profilep,
	};

	dbRef.push(postData);
	document.getElementById("response").innerHTML = "Successfully Created Account.";
	localStorage.setItem("fullname", rName);

  	}
  
  function createAccount(){
	var userEmail = document.getElementById("rEmail").value;
	var userPass = document.getElementById("password").value;
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
  
}


