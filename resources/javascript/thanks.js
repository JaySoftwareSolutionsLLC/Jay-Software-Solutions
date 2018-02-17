$( document ).ready(function() {
    "use strict";

    let startTime = 10;
    setInterval(function() {
        startTime--;
        if (startTime <= 0) {
            window.location.href = "index.html";
        }
        if (startTime != 1) {
            $('.time').html(`We will get back to you soon. You will be redirected back to our homepage in ${startTime} seconds...`)
        }
        else {
            $('.time').html(`We will get back to you soon. You will be redirected back to our homepage in ${startTime} second...`)            
        }
    }, 1000);
});
