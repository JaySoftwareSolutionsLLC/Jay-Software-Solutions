// JavaScript Document
(function() {
"use strict";
	
//	$('div.feature.design').css("display", "none");
//	$('div.feature.customization').css("display", "none");
//	$('div.feature.extras').css("display", "none");
	
	var hostingFee = 100;
	var minPrice = 0;
	var maxPrice = 0;
	var sizeChosen = false;
	var designChosen = false;
	var customizationChosen = false;
	function checkIfThisIsActive(id) {
		if ($(id).hasClass("active")) {
			$(id).removeClass("active");
		}
	}
	function updatePrices() {
		minPrice = hostingFee + minSizeContribution + minDesignContribution + minCustomizationContribution + minExtrasContribution;
		maxPrice = hostingFee + maxSizeContribution + maxDesignContribution + maxCustomizationContribution + maxExtrasContribution;
		if (sizeChosen && designChosen && customizationChosen) {
			$('div.features div.price-estimate').css("display", "inline-flex");
			$('.price-estimate h4').text("$" + minPrice + " to " + "$" + maxPrice);
		}
	}
	
	var minSizeContribution = 0;
	var maxSizeContribution = 0;
	function sizeRowFunctionality() {
		function sizeRowUnitFunctionality(thisID, deactivateOneID, deactivateTwoID, minContribution, maxContribution) {
			$(thisID).click(function() {
				$(this).addClass("active");
				checkIfThisIsActive(deactivateOneID);
				checkIfThisIsActive(deactivateTwoID);
				minSizeContribution = minContribution;
				maxSizeContribution = maxContribution;
				sizeChosen = true;
				updatePrices();
//				$('div.feature.design').css("display", "inline-flex");
			});
		}
		sizeRowUnitFunctionality('#large', 	'#medium', 	'#small', 	540, 900);
		sizeRowUnitFunctionality('#medium', '#large', 	'#small', 	380, 500);
		sizeRowUnitFunctionality('#small', 	'#large', 	'#medium', 	200, 320);
	}
	sizeRowFunctionality();

	var minDesignContribution = 0;
	var maxDesignContribution = 0;
	function designRowFunctionality() {
		function designRowUnitFunctionality(thisID, deactivateOneID, deactivateTwoID, minContribution, maxContribution) {
			$(thisID).click(function() {
				$(this).addClass("active");
				checkIfThisIsActive(deactivateOneID);
				checkIfThisIsActive(deactivateTwoID);
				minDesignContribution = minContribution;
				maxDesignContribution = maxContribution;
				designChosen = true;
				updatePrices();
//				$('div.feature.customization').css("display", "inline-flex");
			});
		}
		designRowUnitFunctionality('#exactly', 	'#roughly', '#barely', 	80, 	200);
		designRowUnitFunctionality('#roughly', 	'#exactly', '#barely', 	140, 	400);
		designRowUnitFunctionality('#barely', 	'#exactly', '#roughly', 240, 	800);
	}
	designRowFunctionality();

	var minCustomizationContribution = 0;
	var maxCustomizationContribution = 0;
	function customizationRowFunctionality() {
		function customizationRowUnitFunctionality(thisID, deactivateOneID, deactivateTwoID, minContribution, maxContribution) {
			$(thisID).click(function() {
				$(this).addClass("active");
				checkIfThisIsActive(deactivateOneID);
				checkIfThisIsActive(deactivateTwoID);
				minCustomizationContribution = minContribution;
				maxCustomizationContribution = maxContribution;
				customizationChosen = true;
				updatePrices();
//				$('div.feature.extras').css("display", "inline-flex");
			});
		}
		customizationRowUnitFunctionality('#fully', 	'#partially', 	'#not-at-all', 	160, 	600);
		customizationRowUnitFunctionality('#partially', '#fully', 		'#not-at-all', 	80, 	400);
		customizationRowUnitFunctionality('#not-at-all','#fully', 		'#partially', 	0, 		0);
	}
	customizationRowFunctionality();
	
	var minExtrasContribution = 0;
	var maxExtrasContribution = 0;
	function extrasRowUnitFunctionality(unitID, minContribution, maxContribution) {
		$(unitID).click(function() {
			if($(this).hasClass("active")) {
				$(this).removeClass("active");
				minExtrasContribution -= minContribution;
				maxExtrasContribution -= maxContribution;
				updatePrices();
			}
			else {
				$(this).addClass("active");
				minExtrasContribution += minContribution;
				maxExtrasContribution += maxContribution;
				updatePrices();
			}
		});	
	}
	extrasRowUnitFunctionality('#e-commerce', 			140, 	400);
	extrasRowUnitFunctionality('#responsive-design', 	80, 	320);
	extrasRowUnitFunctionality('#seo', 					120, 	240);

})();