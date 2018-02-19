$( document ).ready(function() {
    "use strict";

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