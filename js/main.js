$(document).ready(function() {
	$('.clickable').hover(function() {
		$(this).css('cursor','pointer');
	},
	function() {
	})
	
	$('.main_unselected').hover(function() {
		$(this).css('color','white');
		$(this).css('background-color','#363636');
	},
	function() {
		$(this).css('color','#999999');
		$(this).css('background-color','transparent');
	})
});