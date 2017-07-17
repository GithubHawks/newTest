function submitClick()
{
	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyBDGRHixrljrRIHz2jgVVbgJwMRvex9B_Q",
	    authDomain: "attendance-d62f0.firebaseapp.com",
	    databaseURL: "https://attendance-d62f0.firebaseio.com",
	    projectId: "attendance-d62f0",
	    storageBucket: "attendance-d62f0.appspot.com",
	    messagingSenderId: "530559961039"
	  };
	  firebase.initializeApp(config);
  	  console.log(firebase);

  	var CID = document.getElementById("Clg_drp_down").value;
	var Dname = document.getElementById("Dpt_drp_down").value;
	window.alert(CID+Dname);

	var ref = firebase.database().ref().child("UserCreds").child(CID).child("Staff");
	window.alert(ref);

	ref.on('child_added',snap =>{

			var name = snap.child("Uname").val();
			var dept = snap.child("Dept").val();

			window.alert(name+dept);
	});	
}