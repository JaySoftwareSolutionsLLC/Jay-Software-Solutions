function roundEdges(percent) {
  let elms = document.querySelectorAll('.logo-svg-rects rect');
  let i = 0;
  let LNG = elms.length;
  for (let i = 0; i < LNG; i++) {
    let thisEl = elms[i];
    let size = thisEl.getAttribute('width');
    let r = (size * percent / 100) + 'px';
    thisEl.setAttribute('rx', r);
    thisEl.setAttribute('ry', r);
  }
}
/*
function hideBlocks(y) {
  let elms = document.querySelectorAll('.logo-svg-rects rect');
  let i = 0;
  let LNG = elms.length;
  for (let i = 0; i < LNG; i++) {
    let thisEl = elms[i];
    let thisY = thisEl.getAttribute('y');
    if (thisY >= y) {
      thisEl.style = 'display: none';
    }
    // thisEl.setAttribute('ry', r);
  }
}
*/
function animateBlocks(fade, fadeRnd, delay, delayRnd, percentTranslated) {
  let elms = document.querySelectorAll('.logo-svg-rects rect');
  let i = 0;
  let LNG = elms.length;
  let diffFactor = Math.round(100 / percentTranslated);
  for (let i = 0; i < LNG; i++) {
    let thisFade = (Math.random() * fadeRnd) + fade;
    let thisDelay = (Math.random() * delayRnd) + delay;
    if (i % diffFactor === 0) {
      elms[i].style = `-webkit-animation: logo-svg-translate ${thisFade}s ${thisDelay}s infinite; /* Safari 4+ */
                      -moz-animation:    logo-svg-translate ${thisFade}s ${thisDelay}s infinite; /* Fx 5+ */
                      -o-animation:      logo-svg-translate ${thisFade}s ${thisDelay}s infinite; /* Opera 12+ */
                      animation:         logo-svg-translate ${thisFade}s ${thisDelay}s infinite; /* IE 10+, Fx 29+ */`

    }
    else {
      elms[i].style = `-webkit-animation: logo-svg-flip ${thisFade}s ${thisDelay}s infinite; /* Safari 4+ */
                      -moz-animation:    logo-svg-flip ${thisFade}s ${thisDelay}s infinite; /* Fx 5+ */
                      -o-animation:      logo-svg-flip ${thisFade}s ${thisDelay}s infinite; /* Opera 12+ */
                      animation:         logo-svg-flip ${thisFade}s ${thisDelay}s infinite; /* IE 10+, Fx 29+ */`
    }
  }
}

roundEdges(20);
animateBlocks(2, 2, 0, 2, 11);
// hideBlocks(150);
