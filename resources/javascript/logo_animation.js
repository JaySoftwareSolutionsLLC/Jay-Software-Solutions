$(window).on('load', function () {
	(function() {
	"use strict";	
		let logoEls = document.querySelectorAll('object.logo');
//	console.log('test');
		function roundEdges(percent) {
//			let logoEls = document.querySelectorAll('object.logo');
			for (let e of logoEls) {
				let thisLogo = e.contentDocument;
				let theseEls = thisLogo.querySelectorAll('.logo-svg-rects rect');
//				console.log(theseEls);
		    	let i = 0;
  				let LNG = theseEls.length;
  				for (let i = 0; i < LNG; i++) {
					let thisEl = theseEls[i];
					let size = thisEl.getAttribute('width');
					let r = (size * percent / 100) + 'px';
					thisEl.setAttribute('rx', r);
					thisEl.setAttribute('ry', r);
  				}
			}
		}
		let sLogo = logoEls[1];
		let rects = sLogo.contentDocument.querySelectorAll('.logo-svg-rects rect');
//		console.log(rects);
		for (let i = 0; i < 50; i++) {
			rects[i].style = `-webkit-animation: logo-svg-flip 2s infinite ;
  							-moz-animation: logo-svg-flip 2s infinite ;
  							-ms-animation: logo-svg-flip 2s infinite ;
  							-0-animation: logo-svg-flip 2s infinite ;
  							animation: logo-svg-flip 2s infinite ;`;
		}
		console.log(rects);
//		function animateBlocks(fade, fadeRnd, delay, delayRnd, percentTranslated) {
////			let logoEls = document.querySelectorAll('object.logo');
//			for (let e of logoEls) {
//				let thisLogo = e.contentDocument;
//				let elms = thisLogo.querySelectorAll('.logo-svg-rects rect');
//		  		let i = 0;
//		  		let LNG = elms.length;
//		  		let diffFactor = Math.round(100 / percentTranslated);
//		  		for (let i = 0; i < LNG; i++) {
//					let thisFade = (Math.random() * fadeRnd) + fade;
//					let thisDelay = (Math.random() * delayRnd) + delay;
//					elms[i].style = 'transform-origin: center;';
//					if (i % diffFactor === 0) {
//				  		elms[i].style = `animation: logo-svg-translate ${thisFade}s ${thisDelay}s infinite;`
//					}
//					else {
//				  		elms[i].style = `animation: logo-svg-flip ${thisFade}s ${thisDelay}s linear infinite;`
//					}
//		  		}
//			}
//		}
		

		roundEdges(30);
//		animateBlocks(2, 2, 0, 2, 11);
	})();
});

