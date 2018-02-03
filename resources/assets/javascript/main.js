// JavaScript Document
(function() {
"use strict";	
//console.log(parseInt($('html').height()));

 function floaterFunctionality() {
	var floaterFPS = 50;
	var floaterDisplaySize = parseInt($('html').css("font-size"));
	console.log($('html').css("font-size"));
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
	var jumbotronTitleEnd = jumbotronTitleStartX + jumbotronTitleWidth;
//	console.log(jumbotronTitleEnd);
	function CreateFloater() {
		this.x = Math.round((Math.random() * jumbotronWidth));
		this.y = jumbotronStart + Math.round((Math.random() * jumbotronHeight));
		this.Vx = -5 + Math.round(Math.random() * 10);
		this.Vy = -5 + Math.round(Math.random() * 10);
	}
	var floaterArray = [];
	function generateNewFloater() {
		var floater = document.createElement("div");
		floaterArray.push(new CreateFloater());
		floater.className += "floater";
//		var x = jumbotronTitleEnd + 'px';
		var y = (parseInt($('.jumbotron').height() / 2)) + 'px';
		var x = (parseInt($('.jumbotron').width() / 2)) + 'px';
		console.log(x + ":" + y);
		floater.style.left = x;
		floater.style.top = y;
		var opacity = 0.2 + (Math.floor(Math.random() * 7) / 10);
		floater.style.opacity = opacity;
		$('body').append(floater);
	}
	function generateFloaters(number) {
		for (var i = 0; i < number; i++) {
			generateNewFloater();
		}
	}
	 console.log($('div.jumbotron').position().left);
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
	generateFloaters(6);
	createFloaterMovement();
}
floaterFunctionality();

//$('div.right-side.mobile img').click(function() {
//	$('div.drop-down').toggle();
//});
	
})();