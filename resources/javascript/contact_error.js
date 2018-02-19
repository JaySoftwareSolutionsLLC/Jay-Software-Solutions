$( document ).ready(function() {
    "use strict";

    let time = 10;
    setInterval(function() {
        time--;
        if (time <= 0) {
            window.location.href = "contact.html";
        }
        if (time != 1) {
            $('.time').html(`It looks like there was an issue with your name, email or message. We will redirect you to the contact form in ${time} seconds or you can click this button`)
        }
        else {
            $('.time').html(`It looks like there was an issue with your name, email or message. We will redirect you to the contact form in ${time} second or you can click this button`)            
        }
    }, 1000);
});
