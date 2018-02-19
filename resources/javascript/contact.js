$( document ).ready(function() {        //THIS MAY CAUSE ISSUES ONCE WEBSITE HAS ACTUALLY BEEN UPLOADED
    "use strict";

$('#form1').on('submit', validateForm);

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
	let errorStr = ``;
	let valid = true;
	console.log('got-em');
    let name = $('#name').val();
	let email = $('#email').val();
	let phone = $('#phone').val();
	let pMthd = $('#pMthd').val();
	let message = $('#msg').val();
    if (name === "" || name.length < 2) {
		errorStr += `<li>Please tell us your name</li>`;
        valid = false;
    }
	if (email === "" | !validateEmail(email)) {
		errorStr += `<li>Please input a valid email</li>`;
		valid = false;
	}
	if (message === "") {
		errorStr += `<li>Please enter a message</li>`;
		valid = false;
	}
	if (!valid) {
		$('section.modal').css('opacity', '1');
		$('section.modal').css('z-index', '100');
		$('section.modal ul').html(errorStr);
		$('section.modal button').on('click', function() {
			$('section.modal').css('opacity', '0');
			$('section.modal').css('z-index', '-10');
		})
	}
	return valid;
}

document.getElementById('name').onkeyup = function() {
    this.value = this.value.replace(/[^ A-Za-z]/, '');
};
document.getElementById('phone').onkeyup = function() {
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
};

});
