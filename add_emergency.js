function init()
{
	var name = localStorage.getItem("firstQ");
	var age = localStorage.getItem("secondQ");
	var occupation = localStorage.getItem("thirdQ");
	var climate = localStorage.getItem("fourthQ");;
	var allergies = localStorage.getItem("fifthQ");
	var diseases = localStorage.getItem("sixthQ");
	var injuries = localStorage.getItem("seventhQ");
	document.getElementById("firstQ").value = name;
	document.getElementById("secondQ").value = age;
	document.getElementById("thirdQ").value = occupation;
	document.getElementById("fourthQ").value = climate;
	document.getElementById("fifthQ").value = allergies;
	document.getElementById("sixthQ").value = diseases;
	document.getElementById("seventhQ").value = injuries;
	
};

function Save()
{
	localStorage.setItem("firstQ", document.getElementById("firstQ").value);
	localStorage.setItem("secondQ", document.getElementById("secondQ").value);
	localStorage.setItem("thirdQ", document.getElementById("thirdQ").value);
	localStorage.setItem("fourthQ", document.getElementById("fourthQ").value);
	localStorage.setItem("fifthQ", document.getElementById("fifthQ").value);
	localStorage.setItem("sixthQ", document.getElementById("sixthQ").value);
	localStorage.setItem("seventhQ", document.getElementById("seventhQ").value);	
	SetSaved();
}

function SetSaved()
{
	var name = localStorage.getItem("firstQ");
	var age = localStorage.getItem("secondQ");
	var occupation = localStorage.getItem("thirdQ");
	var climate = localStorage.getItem("fourthQ");;
	var allergies = localStorage.getItem("fifthQ");
	var diseases = localStorage.getItem("sixthQ");
	var injuries = localStorage.getItem("seventhQ");
	document.getElementById("firstQ").value = name;
	document.getElementById("secondQ").value = age;
	document.getElementById("thirdQ").value = occupation;
	document.getElementById("fourthQ").value = climate;
	document.getElementById("fifthQ").value = allergies;
	document.getElementById("sixthQ").value = diseases;
	document.getElementById("seventhQ").value = injuries;
}

init();