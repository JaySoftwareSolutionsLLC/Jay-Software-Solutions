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
		let proceed = true;
		if (now < start) {
			proceed = confirm('Warning: This sweepstakes may not have started yet! Do you still wish to continue?');
		}
		if (now > end) {
			proceed = confirm('Warning: This sweepstakes may have ended! Do you still wish to continue?');
		}
		if (proceed) {
			changeDisplay('div.instructional', 'div.form');
			colorProgressCircle(1);
			$('footer').css('position', 'static');
			clearInterval(timingFunction);
		}
  	});
	$('div.general button.next').on('click', function() {
		if (!validName()) {
			alert('Please enter a valid name');
		}
		else if (!validEmail()) {
			alert('Please enter a valid email address');
		}
		else {
			changeDisplay('div.general', 'div.services-budget');
	  		colorProgressCircle(2);
		}
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
		if (validLikelihood()) {
			changeDisplay('div.services-recommendations', 'div.website-recommendations');
			colorProgressCircle(4);
		}
		else alert('Please select a likelihood.')
	});
	
/*--- VALIDATION ---*/
	function validName() {
		let name = $('#ent-name').val();
		if (name.length <= 2) {
			return false;
		}
		else return true;
	}
	function validEmail() {
		let email = $('#ent-email').val();
 		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
		else return false;
}
	function validLikelihood() {
		let value = $('input[name=service-likelihood]:checked').val();
		console.log(value);
		if (value === undefined) {
			return false;
		}
		else return true;
	}
	
/*--- PREVENT ENTER FROM SUBMITTING AND BACKSPACE FROM BACKING OUT ---*/
	$(function(){
		 var keyStop = {
		   8: ":not(input:text, textarea, input:file, input:password)", // stop backspace = back
		   13: "input:text, input:password", // stop enter = submit 

		   end: null
		 };
		 $(document).bind("keydown", function(event){
		  var selector = keyStop[event.which];

		  if(selector !== undefined && $(event.target).is(selector)) {
			  event.preventDefault(); //stop event
		  }
		  return true;
		 });
	});
	

});