

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
	var Fname = document.getElementById("fname").value;
	var Mail = document.getElementById("mail").value;
	var Regno = document.getElementById("regno").value;
	var Pass = document.getElementById("pass").value;
	var Button = document.getElementById("but").value;

	var skillsSelect = document.getElementById("Clg_drp_down");
	var selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;



	 window.alert(CID+Dname+Fname+Mail+Pass+selectedText);

	var fref = firebase.database().ref();

	var data = 
	{
		ColgID: CID,
		Cname: selectedText,
		Dept: Dname,
		Uname: Fname,
		Mail: Mail,
		Mass: Pass,
		Reg: Regno

	}

	fref.child("UserCreds").child(CID).child("Staff").child(Regno).set(data);

}










