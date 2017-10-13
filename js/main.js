$(document).ready(function() {
	$('#contact_tooltip').hide();
	
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
	});
	
	$('#main_contact').hover(function() {
		$('#contact_tooltip').show();
	},
	function() {
		$('#contact_tooltip').hide();
	});
});