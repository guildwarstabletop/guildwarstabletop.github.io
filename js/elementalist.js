$(document).ready(function() {
	// Hide attributes and tips
	$('#attributes').hide();	
	$('#tips').hide();	
	$('#physical_resistance_bar').animate({width: "3.1%"}, 750);
	$('#elemental_resistance_bar').animate({width: "3.1%"}, 750);
	$('#energy_bar').animate({width: "15.5%"}, 750);
	$('#energy_regeneration_bar').animate({width: "15.5%"}, 750);
	
	// Elementalist navigation
	$('#traits_tab').click(function() {
		$('#tab_label').html("TRAITS");

		$(this).css('background-color', '#222222');
		$('#attributes_tab').css('background-color', '#c44a4a');
		$('#tips_tab').css('background-color', '#c44a4a');
		
		$('#traits').fadeIn(125);
		$('#attributes').fadeOut(125);
		$('#tips').fadeOut(125);
	});	
	$('#attributes_tab').click(function() {			
		$('#tab_label').html("ATTRIBUTES");
		
		$('#traits_tab').css('background-color', '#c44a4a');
		$(this).css('background-color', '#222222');
		$('#tips_tab').css('background-color', '#c44a4a');
		
		$('#traits').fadeOut(125);
		$('#attributes').fadeIn(125);
		$('#tips').fadeOut(125);				
	});
	$('#tips_tab').click(function() {			
		$('#tab_label').html("TIPS");
		
		$('#traits_tab').css('background-color', '#c44a4a');
		$('#attributes_tab').css('background-color', '#c44a4a');
		$(this).css('background-color', '#222222');
		
		$('#traits').fadeOut(125);
		$('#attributes').fadeOut(125);
		$('#tips').fadeIn(125);
	});

	// Attributes navigation
	$('#energy_storage').hover(function() {
		$(this).css('color', '#c44a4a');
		$('#air_magic').css('color', '#222222');
		$('#earth_magic').css('color', '#222222');
		$('#fire_magic').css('color', '#222222');
		$('#water_magic').css('color', '#222222');
		
		$('#bullet_1').attr('src', 'images/ui/bullet_fill.png');
		$('#bullet_2').attr('src', 'images/ui/bullet.png');
		$('#bullet_3').attr('src', 'images/ui/bullet.png');
		$('#bullet_4').attr('src', 'images/ui/bullet.png');
		$('#bullet_5').attr('src', 'images/ui/bullet.png');
		
		$('#example').attr('src', 'images/example_skills/glyph_of_lesser_energy.png');
	}, function() {
	});
	$('#air_magic').hover(function() {
		$('#energy_storage').css('color', '#222222');
		$(this).css('color', '#c44a4a');
		$('#earth_magic').css('color', '#222222');
		$('#fire_magic').css('color', '#222222');
		$('#water_magic').css('color', '#222222');
		
		$('#bullet_1').attr('src', 'images/ui/bullet.png');
		$('#bullet_2').attr('src', 'images/ui/bullet_fill.png');
		$('#bullet_3').attr('src', 'images/ui/bullet.png');
		$('#bullet_4').attr('src', 'images/ui/bullet.png');
		$('#bullet_5').attr('src', 'images/ui/bullet.png');
		
		$('#example').attr('src', 'images/example_skills/shock.png');
	}, function() {
	});
	$('#earth_magic').hover(function() {
		$('#energy_storage').css('color', '#222222');
		$('#air_magic').css('color', '#222222');
		$(this).css('color', '#c44a4a');
		$('#fire_magic').css('color', '#222222');
		$('#water_magic').css('color', '#222222');
		
		$('#bullet_1').attr('src', 'images/ui/bullet.png');
		$('#bullet_2').attr('src', 'images/ui/bullet.png');
		$('#bullet_3').attr('src', 'images/ui/bullet_fill.png');
		$('#bullet_4').attr('src', 'images/ui/bullet.png');
		$('#bullet_5').attr('src', 'images/ui/bullet.png');
		
		$('#example').attr('src', 'images/example_skills/armor_of_earth.png');
	}, function() {
	});
	$('#fire_magic').hover(function() {
		$('#energy_storage').css('color', '#222222');
		$('#air_magic').css('color', '#222222');
		$('#earth_magic').css('color', '#222222');
		$(this).css('color', '#c44a4a');
		$('#water_magic').css('color', '#222222');
		
		$('#bullet_1').attr('src', 'images/ui/bullet.png');
		$('#bullet_2').attr('src', 'images/ui/bullet.png');
		$('#bullet_3').attr('src', 'images/ui/bullet.png');
		$('#bullet_4').attr('src', 'images/ui/bullet_fill.png');
		$('#bullet_5').attr('src', 'images/ui/bullet.png');
		
		$('#example').attr('src', 'images/example_skills/immolate.png');
	}, function() {
	});		
	$('#water_magic').hover(function() {
		$('#energy_storage').css('color', '#222222');
		$('#air_magic').css('color', '#222222');
		$('#earth_magic').css('color', '#222222');
		$('#fire_magic').css('color', '#222222');
		$(this).css('color', '#c44a4a');
		
		$('#bullet_1').attr('src', 'images/ui/bullet.png');
		$('#bullet_2').attr('src', 'images/ui/bullet.png');
		$('#bullet_3').attr('src', 'images/ui/bullet.png');
		$('#bullet_4').attr('src', 'images/ui/bullet.png');
		$('#bullet_5').attr('src', 'images/ui/bullet_fill.png');
		
		$('#example').attr('src', 'images/example_skills/frozen_burst.png');
	}, function() {
	});	

	// Profession navigation
	$('.profession_nav').hover(function() {			
		$('#nav_label').show();
	},
	function(){
		$('#nav_label').hide();
	});
	// Warrior
	$('#warrior_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/warrior_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '17.875%');
		$('#nav_label').html('WARRIOR');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/warrior_nav_bw.png\')  no-repeat center center');
	});				
	// Ranger
	$('#ranger_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/ranger_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '23.875%');
		$('#nav_label').html('RANGER');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/ranger_nav_bw.png\')  no-repeat center center');
	});					
	// Monk
	$('#monk_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/monk_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '29.875%');
		$('#nav_label').html('MONK');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/monk_nav_bw.png\')  no-repeat center center');
	});					
	// Necromancer
	$('#necromancer_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/necromancer_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '35.875%');
		$('#nav_label').html('NECROMANCER');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/necromancer_nav_bw.png\')  no-repeat center center');
	});					
	// Mesmer
	$('#mesmer_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/mesmer_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '41.875%');
		$('#nav_label').html('MESMER');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/mesmer_nav_bw.png\')  no-repeat center center');
	});					
	// Assassin
	$('#assassin_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/assassin_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '53.875%');
		$('#nav_label').html('ASSASSIN');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/assassin_nav_bw.png\')  no-repeat center center');
	});					
	// Ritualist
	$('#ritualist_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/ritualist_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '59.875%');
		$('#nav_label').html('RITUALIST');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/ritualist_nav_bw.png\')  no-repeat center center');
	});					
	// Paragon
	$('#paragon_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/paragon_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '65.875%');
		$('#nav_label').html('PARAGON');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/paragon_nav_bw.png\')  no-repeat center center');
	});					
	// Dervish
	$('#dervish_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/dervish_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '71.875%');
		$('#nav_label').html('DERVISH');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/dervish_nav_bw.png\')  no-repeat center center');
	});
});