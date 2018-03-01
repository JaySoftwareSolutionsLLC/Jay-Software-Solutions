$(document).ready(function() {
	"use strict";
//	THIS SHOULD BE DONE SERVER SIDE SO THAT THEY CANT CHANGE IT
	let now = new Date().getTime();
	let start = new Date('March 5, 2018 00:00:00').getTime();
	let end = new Date('March 23, 2018 23:59:59').getTime();
	let timeDirectionString;
	function returnTimeLeft(nowMS, startMS, endMS) {
		if (startMS > nowMS) {
			timeDirectionString = 'begins';
			return startMS - nowMS;
		}
		else {
			timeDirectionString = 'ends';
			return endMS - nowMS;
		}
	}
	function msToString(ms) {
		let days, hours, minutes, seconds;
		let secToMS = 1000;
		let minToMS = 60 * secToMS;
		let hrToMS = 60 * minToMS;
		let dayToMS = 24 * hrToMS;
		days = Math.floor(ms / dayToMS);
		ms = ms - (days * dayToMS);
		if (days < 10) {
			days = '0' + days;
		}
		hours = Math.floor(ms / hrToMS);
		ms = ms - (hours * hrToMS);
		if (hours < 10) {
			hours = '0' + hours;
		}
		minutes = Math.floor(ms / minToMS);
		ms = ms - (minutes * minToMS);
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		seconds = Math.floor(ms / secToMS);
		ms = ms - (seconds * secToMS);
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		return `${days}:${hours}:${minutes}:${seconds}`;
	}
	let timingFunction = setInterval(function() {
		now = new Date().getTime();
		$('span.countdown').html(msToString(returnTimeLeft(now, start, end)));
		$('span.direction').html(timeDirectionString);
	}, 1000)
	function changeDisplay(previous, future) {
		$(previous).hide();
		$(future).css('display', 'inline-flex');
	}
	function colorProgressCircle(n) {
		let circles = $('svg.progress circle');
		let index = n - 1;
		let c = circles[index];
		$(c).css('fill', 'hsla(205, 100%, 45%, 1)');
	}
  	$('button.begin').on('click', function() {
		changeDisplay('div.instructional', 'div.form');
		colorProgressCircle(1);
		$('footer').css('position', 'static');
		clearInterval(timingFunction);
  	});
	$('div.general button.next').on('click', function() {
	  	changeDisplay('div.general', 'div.services-budget');
	  	colorProgressCircle(2);
	});
	$('div.services-budget .option input').change(function() {
		let thisID = $(this).attr('id');
		let budgetID = "#" + thisID + "-budget";
		let budgetEl = $(budgetID).parent();
		if ($(this).is(":checked")) {
			$(budgetEl).css('display', 'inline-flex');
		}
		else {
			$(budgetEl).css('display', 'none');
		}
	});
	$('div.services-budget button.next').on('click', function() {
		changeDisplay('div.services-budget', 'div.services-recommendations');
		colorProgressCircle(3);
	});
	$('div.services-recommendations button.next').on('click', function() {
		changeDisplay('div.services-recommendations', 'div.website-recommendations');
		colorProgressCircle(4);
	});
	
});