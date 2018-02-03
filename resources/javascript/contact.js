function validateForm() {
    var name = document.forms["form1"]["name"].value;
	console.log(name.length);
	var email = document.forms["form1"]["email"].value;
	var message = document.forms["form1"]["email"].value;
    if (name == "" | name.length < 2) {
        alert("Please submit a valid name");
		console.log($("#name").position().left);
        return false;
    }
	else if (email == "") {
//		alert("Email must be filled out with a valid email address");
		return false;
	}
	if (message = "") {
//		alert("Please write us a brief message");
		return false;
	}
}

document.getElementById('name').onkeyup = function(event) {
    this.value = this.value.replace(/[^ A-Za-z]/, '');
}

