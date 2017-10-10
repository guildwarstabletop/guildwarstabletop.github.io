$(document).ready(function() {
	$('#build_options').hide();
	$('#combat_options').hide();
	
	$('#starter_armor').hide();
	
	$('.gameplay_submenu').hover(function() {
		$(this).css('color', '#222222');
	},
	function() {
		$(this).css('color', '#999999');
	});
	
	$('#character').click(function() {
		$('#character_options').show();
		$('#build_options').hide();
		$('#combat_options').hide();
	});
	$('#build').click(function() {		
		$('#character_options').hide();
		$('#build_options').show();
		$('#combat_options').hide();
	});
	$('#combat').click(function() {
		$('#character_options').hide();
		$('#build_options').hide();
		$('#combat_options').show();
	});
	
	$('#character_two').click(function() {
		$('#choosing_professions').hide();
		$('#starter_armor').show();
	});
});