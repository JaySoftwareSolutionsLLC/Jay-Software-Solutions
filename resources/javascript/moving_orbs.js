$(document).ready(function() {
	(function() {
	"use strict";
		let fps = 50;
		let maxVx = 20;
		let maxVy = 20;
		let numOfOrbs = 4;
		let minOpacity = 0.4;
		let maxOpacity = 1;
		
//	GOAL: Create a few (3-5) orbs which will explode from the center of the Elegantly Effective h2 element and then move around the jumbotron bouncing off of the walls when they come in contact with them

	 function floaterFunctionality() {
		let floaterFPS = fps;
		var floaterDisplaySize = parseInt($('html').css("font-size"));	//Set size to 1rem for boundries, size of elements is set in css
		var jumbotronElement = $("div.jumbotron");
		var jumbotronWidth = jumbotronElement.width();
		var jumbotronHeight = jumbotronElement.height();
		var jumbotronStart = $("header").height();
		var jumbotronEnd = jumbotronStart + jumbotronHeight;
		var jumbotronTitleElement = $("div.jumbotron h2");
		var jumbotronTitleStartX = $(jumbotronTitleElement).offset().left;
		var jumbotronTitleStartY = $(jumbotronTitleElement).offset().top  - $(document).scrollTop();
		var jumbotronTitleWidth = $(jumbotronTitleElement).width();
		var jumbotronTitleHeight = $(jumbotronTitleElement).height();
		function CreateFloater() {
			this.x = Math.round((Math.random() * jumbotronWidth));
			this.y = jumbotronStart + Math.round((Math.random() * jumbotronHeight));
			this.Vx = (-1 * maxVx) + Math.round(Math.random() * (maxVx * 2));
			this.Vy = (-1 * maxVy) + Math.round(Math.random() * (maxVy * 2));
		}
		var floaterArray = [];
		function generateNewFloater() {
			var floater = document.createElement("div");
			floaterArray.push(new CreateFloater());
			floater.className += "floater";
			var x = jumbotronTitleStartX + (jumbotronTitleWidth - 50) + 'px';
			var y = jumbotronTitleStartY + (jumbotronTitleHeight / 2) + 'px';
			floater.style.left = x;
			floater.style.top = y;
			var opacity = minOpacity + (Math.floor(Math.random() * ((maxOpacity - minOpacity) * 10)) / 10);
			floater.style.opacity = opacity;
			$('body').append(floater);
		}
		function generateFloaters(number) {
			for (var i = 0; i < number; i++) {
				generateNewFloater();
			}
		}
		function checkXParameter(x) {
			if (x < $('div.jumbotron').position().left) {
	//			x = 0;
				return false;
			}
			else if (x > (jumbotronWidth + $('div.jumbotron').position().left - floaterDisplaySize)) {
	//			x = jumbotronWidth;
				return false;
			}
			return true;
		}
		function checkYParameter(y) {
			if (y < (jumbotronStart)) {
				y = jumbotronStart;
				return false;
			}
			else if (y > (jumbotronEnd - floaterDisplaySize)) {
				y = parseInt($('body').height());
				return false;
			}
			return true;
		}
		function createFloaterMovement() {
			var floaters = $(".floater");
			setInterval(function(){
				for (var i = 0; i < floaters.length; i++) {
					var x = parseInt($(floaters[i]).css("left"), 10);
					var y = parseInt($(floaters[i]).css("top"), 10);
					x += floaterArray[i].Vx;
					y += floaterArray[i].Vy;
					if (checkXParameter(x)) {}
					else {
						floaterArray[i].Vx *= -1;
					}
					if (checkYParameter(y)) {}
					else {
						floaterArray[i].Vy *= -1;
					}
					$(floaters[i]).css("left", x);
					$(floaters[i]).css("top", y);
				}
			}, 1000/floaterFPS);
		}
		generateFloaters(numOfOrbs);
		createFloaterMovement();
	}
	floaterFunctionality();
	})();
});