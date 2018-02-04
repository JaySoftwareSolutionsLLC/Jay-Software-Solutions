function rotateEye(dur) {
    let el = document.querySelectorAll(".logo-svg-eye rect");
    TweenMax.to(el, dur, {
        transformOrigin:    "50% 50%",
        rotation:           360,
        repeat:             -1,
        ease:               Power0.easeNone
    });
}
rotateEye(60);

function translateBlock(element, dur, delay) {
    TweenMax.to(element, dur, {
        transformOrigin:    "50% 50%",
        delay:              delay,
//        repeatDelay:        delay,
        x:                  -900,
        repeat:             -1,
//		yoyo:				false,
//        ease:               Power0.easeIn
    });
}
function flipBlock(element, dur, delay) {
    TweenMax.to(element, dur, {
        transformOrigin:    "50% 50%",
        delay:              delay,
//        repeatDelay:        delay,
        scaleX:             0.1,
        repeat:             -1,
//        yoyo:               true,
//        ease:               Power0.easeIn
    });
}
function animateBlocks(minDur, maxDur, maxDelay, percentTranslated) {
    let els = document.querySelectorAll('.logo-svg-rects rect');
    let i = 0;
    let LNG = els.length;
    for (i; i < LNG; i++) {
        let thisEl = els[i];
        let thisDelay = Math.random() * maxDelay;
        let thisDur = Math.random() * (maxDur - minDur) + minDur;
        let thisRand = Math.random() * 100;
        console.log(`${els[i]} | ${thisRand}`);
        if (thisRand <= percentTranslated) {
            console.log('translate');
            translateBlock(thisEl, thisDur, thisDelay);
            continue;
        }
        else {
            console.log('flip');
            flipBlock(thisEl, thisDur, thisDelay);
            continue;
        }
    }
}

animateBlocks(2, 4, 3, 10);
