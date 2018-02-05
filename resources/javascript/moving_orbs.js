$(document).ready(function() {
	(function() {
	"use strict";
		let fps = 50;
		let maxVx = 20;
		let maxVy = 20;
		let numOfOrbs = 4;
		let minOpacity = 0.4;
		let maxOpacity = 0.6;
		
//	GOAL: Create a few (3-5) orbs which will explode from the center of the Elegantly Effective h2 element and then move around the jumbotron bouncing off of the walls when they come in contact with them

	 function floaterFunctionality() {
		let floaterFPS = fps;
		let floaterDisplaySize = parseInt($('html').css("font-size"));	//Set size to 1rem for boundries, size of elements is set in css
		let jumbotronElement = $("div.jumbotron");
		let jumbotronWidth = jumbotronElement.width();
		let jumbotronHeight = jumbotronElement.height();
		let jumbotronStart = $("header").height();
		let jumbotronEnd = jumbotronStart + jumbotronHeight;
		let jumbotronTitleElement = $("div.jumbotron h2");
		let jumbotronTitleStartX = $(jumbotronTitleElement).offset().left;
		let jumbotronTitleStartY = $(jumbotronTitleElement).offset().top  - $(document).scrollTop();
		let jumbotronTitleWidth = $(jumbotronTitleElement).width();
		let jumbotronTitleHeight = $(jumbotronTitleElement).height();
		function CreateFloater() {
			this.x = Math.round((Math.random() * jumbotronWidth));
			this.y = jumbotronStart + Math.round((Math.random() * jumbotronHeight));
			this.Vx = (-1 * maxVx) + Math.round(Math.random() * (maxVx * 2));
			this.Vy = (-1 * maxVy) + Math.round(Math.random() * (maxVy * 2));
			this.Ax = 0;
			this.Ay = 0;
		}
		let floaterArray = [];
		function generateNewFloater() {
			let floater = document.createElement("div");
			floaterArray.push(new CreateFloater());
			floater.className += "floater";
			let x = jumbotronTitleStartX + (jumbotronTitleWidth - 50) + 'px';
			let y = jumbotronTitleStartY + (jumbotronTitleHeight / 2) + 'px';
			floater.style.left = x;
			floater.style.top = y;
			let opacity = minOpacity + (Math.floor(Math.random() * ((maxOpacity - minOpacity) * 10)) / 10);
			floater.style.opacity = opacity;
			$('body').append(floater);
		}
		function generateFloaters(number) {
			for (let i = 0; i < number; i++) {
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
			let floaters = $(".floater");
			setInterval(function(){
				for (let i = 0; i < floaters.length; i++) {
					let x = parseInt($(floaters[i]).css("left"), 10);
					let y = parseInt($(floaters[i]).css("top"), 10);
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
//		 function returnMouseCoordinates() {
//			 let mouseX = document.pageX;
//			 console.log(mouseX);
//			 return event.pageX;
//		 }
//		 returnMouseCoordinates();
		generateFloaters(numOfOrbs);
		createFloaterMovement();
	}
	setTimeout(floaterFunctionality, 500);
	})();
});