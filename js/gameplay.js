$(document).ready(function() {
	$('#build_options').hide();
	$('#combat_options').hide();
	$('#armor').hide();
	$('#attack_layers').hide();
	
	$('#starter_armor').hide();
	
	$('.gameplay_submenu').hover(function() {
		$(this).css('color', '#222222');
		$(this).css('font-weight', 'bold');
	},
	function() {
		$(this).css('color', '#999999');
		$(this).css('font-weight', 'none');
	});
	
	$('#character_tab').click(function() {	
		$(this).css('color', 'white');
		$(this).css('background-color', '#222222');
		$('#build_tab').css('color', '#222222');
		$('#build_tab').css('background-color', 'transparent');
		$('#combat_tab').css('color', '#222222');
		$('#combat_tab').css('background-color', 'transparent');
		
		$('#character_options').show();
		$('#build_options').hide();
		$('#combat_options').hide();
		
		$('#choosing_professions').show();
		$('#armor').hide();
		$('#attack_layers').hide();
	});
	$('#build_tab').click(function() {
		$('#character_tab').css('color', '#222222');
		$('#character_tab').css('background-color', 'transparent');	
		$(this).css('color', 'white');
		$(this).css('background-color', '#222222');
		$('#combat_tab').css('color', '#222222');
		$('#combat_tab').css('background-color', 'transparent');
		
		$('#character_options').hide();
		$('#build_options').show();
		$('#combat_options').hide();
		
		$('#choosing_professions').hide();
		$('#armor').show();
		$('#attack_layers').hide();
	});
	$('#combat_tab').click(function() {	
		$('#character_tab').css('color', '#222222');
		$('#character_tab').css('background-color', 'transparent');	
		$('#build_tab').css('color', '#222222');
		$('#build_tab').css('background-color', 'transparent');
		$(this).css('color', 'white');
		$(this).css('background-color', '#222222');
		
		$('#character_options').hide();
		$('#build_options').hide();
		$('#combat_options').show();
		
		$('#choosing_professions').hide();
		$('#armor').hide();
		$('#attack_layers').show();
	});
	
	$('#character_two').click(function() {
		$('#choosing_professions').hide();
		$('#starter_armor').show();
	});
});