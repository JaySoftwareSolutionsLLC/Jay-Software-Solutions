$(document).ready(function() {
	(function() {
	"use strict";
//		Variables
		let fps = 30;
		let maxVx = 20;
		let maxVy = 20;
		let numOfOrbs = 4;
		let minOpacity = 0.4;
		let maxOpacity = 0.6;
		let explosionDelay = 1.5;
		
		
		let mouseX = 100000000;
		let mouseY = 100000000;
		
		
//	GOAL: Create a few (3-5) orbs which will explode from the center of the Elegantly Effective h2 element and then move around the jumbotron bouncing off of the walls when they come in contact with them

	 function floaterFunctionality() {
		let floaterFPS = fps;
		let floaterDisplaySize = parseInt($('html').css("font-size"));	//Set size to 1rem for boundries, size of elements is set in css
		let jumbotronElement = $("div.jumbotron");
		let jumbotronWidth = jumbotronElement.width();
		let jumbotronHeight = jumbotronElement.height();
		let jumbotronStart = $("header").height();
		let jumbotronEnd = jumbotronStart + jumbotronHeight;
		let jumbotronStartX = $('div.jumbotron').position().left;
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
			if (x < jumbotronStartX) {
	//			x = 0;
				return false;
			}
			else if (x > (jumbotronWidth + jumbotronStartX - floaterDisplaySize)) {
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
//					if (i === 0) {
//						let thisAcceleration = returnAcceleration(x, y);
//						let Ax = thisAcceleration[0];
//						let Ay = thisAcceleration[1];
//						let Vx = floaterArray[i].Vx;
//						let Vy = floaterArray[i].Vy;
//						floaterArray[i].Vx -= Ax;
//						floaterArray[i].Vy -= Ay;
//						if (Vx >= maxVx) {
//							floaterArray[i].Vx = maxVx;
//						}
//						else if (Vx <= (maxVx * -1)) {
//							floaterArray[i].Vx = (maxVx * -1);
//						}
//						if (Vy >= maxVy) {
//							floaterArray[i].Vy = maxVy;
//						}
//						else if (Vy <= (maxVy * -1)) {
//							floaterArray[i].Vy = (maxVy * -1);
//						}					
//					}
					if (checkXParameter(x)) {
//						floaterArray[i].Vx -= Ax;
					}
					else {
						floaterArray[i].Vx *= -1;
					}
					if (checkYParameter(y)) {
//						floaterArray[i].Vy -= Ay;
					}
					else {
						floaterArray[i].Vy *= -1;
					}
					$(floaters[i]).css("left", x);
					$(floaters[i]).css("top", y);
				}
			}, 1000/floaterFPS);
		}
//		 $( document ).on( "mousemove", function( event ) {
//			 mouseX = event.pageX;
//			 mouseY = event.pageY;
//			 console.log(`mouseX: ${mouseX} | mouseY ${mouseY} | ${returnAcceleration(200,200)}`);
//		 });
//		 function returnAcceleration(x, y) {
//			 let dX = x - mouseX;
//			 let dY = y - mouseY;
//			 let aX = 1 / (dX * dX);
//			 let aY = 1 / (dY * dY);
//			 return [aX, aY];
//		 }
		generateFloaters(numOfOrbs);
		createFloaterMovement();
	}
	setTimeout(floaterFunctionality, (explosionDelay*1000));
	})();
});