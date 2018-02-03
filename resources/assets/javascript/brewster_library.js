// JavaScript Document
(function() {
"use strict";	

//console.log($('body'));
	
function floaterFunctionality(quantity, fps, size, initialX, initialY, minX, maxX, minY, maxY, minVx, maxVx, minVy, maxVy) {
	function CreateFloater() {
		this.x = initialX;
		this.y = initialY;
		this.Vx = Math.round(minVx + (Math.random * 2 * maxVx));
		this.Vy = Math.round(minVy + (Math.random * 2 * maxVy));
	}
}

	
})();