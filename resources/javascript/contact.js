$( document ).ready(function() {        //THIS MAY CAUSE ISSUES ONCE WEBSITE HAS ACTUALLY BEEN UPLOADED
    "use strict";




function validateForm() {
    var name = document.forms["form1"]["name"].value;
	console.log(name.length);
	var email = document.forms["form1"]["email"].value;
	var phone = $('#phone').val();
	var pMthd = $('#pMthd').val();
	if (pMthd === 'phone')
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
document.getElementById('phone').onkeyup = function(event) {
    let number = this.value.replace(/\D/g, '');
    let string = '';
    if (number.length > 0 && number.length < 3) {
        string += '(' + number;
    }
    else if (number.length >= 3 && number.length < 6) {
        string += '(' + number.slice(0,3) + ') ' + number.slice(3);
    }
    else if (number.length >= 6 && number.length <= 10) {
        string += '(' + number.slice(0,3) + ') ' + number.slice(3,6) + '-' + number.slice(6);
    }
    this.value = string;
}

});
