$(document).ready(function() {
	// Hide attributes and tips
	$('#attributes').hide();	
	$('#tips').hide();	
	$('#physical_resistance_bar').animate({width: "3.1%"}, 750);
	$('#elemental_resistance_bar').animate({width: "3.1%"}, 750);
	$('#energy_bar').animate({width: "15.5%"}, 750);
	$('#energy_regeneration_bar').animate({width: "15.5%"}, 750);
	
	// Mesmer navigation
	$('#traits_tab').click(function() {
		$('#tab_label').html("TRAITS");

		$(this).css('background-color', '#222222');
		$('#attributes_tab').css('background-color', '#9d7b96');
		$('#tips_tab').css('background-color', '#9d7b96');
		
		$('#traits').fadeIn(125);
		$('#attributes').fadeOut(125);
		$('#tips').fadeOut(125);
	});	
	$('#attributes_tab').click(function() {			
		$('#tab_label').html("ATTRIBUTES");
		
		$('#traits_tab').css('background-color', '#9d7b96');
		$(this).css('background-color', '#222222');
		$('#tips_tab').css('background-color', '#9d7b96');
		
		$('#traits').fadeOut(125);
		$('#attributes').fadeIn(125);
		$('#tips').fadeOut(125);				
	});
	$('#tips_tab').click(function() {			
		$('#tab_label').html("TIPS");
		
		$('#traits_tab').css('background-color', '#9d7b96');
		$('#attributes_tab').css('background-color', '#9d7b96');
		$(this).css('background-color', '#222222');
		
		$('#traits').fadeOut(125);
		$('#attributes').fadeOut(125);
		$('#tips').fadeIn(125);
	});

	// Attributes navigation
	$('#fast_casting').hover(function() {
		$(this).css('color', '#9d7b96');
		$('#domination_magic').css('color', '#222222');
		$('#illusion_magic').css('color', '#222222');
		$('#inspiration_magic').css('color', '#222222');
		
		$('#bullet_1').attr('src', 'images/ui/bullet_fill.png');
		$('#bullet_2').attr('src', 'images/ui/bullet.png');
		$('#bullet_3').attr('src', 'images/ui/bullet.png');
		$('#bullet_4').attr('src', 'images/ui/bullet.png');
		$('#bullet_5').attr('src', 'images/ui/bullet.png');
		
		$('#example').attr('src', 'images/example_skills/Power Return.png');
	}, function() {
	});
	$('#domination_magic').hover(function() {
		$('#fast_casting').css('color', '#222222');
		$(this).css('color', '#9d7b96');
		$('#illusion_magic').css('color', '#222222');
		$('#inspiration_magic').css('color', '#222222');
		
		$('#bullet_1').attr('src', 'images/ui/bullet.png');
		$('#bullet_2').attr('src', 'images/ui/bullet_fill.png');
		$('#bullet_3').attr('src', 'images/ui/bullet.png');
		$('#bullet_4').attr('src', 'images/ui/bullet.png');
		$('#bullet_5').attr('src', 'images/ui/bullet.png');
		
		$('#example').attr('src', 'images/example_skills/Backfire.png');
	}, function() {
	});
	$('#illusion_magic').hover(function() {
		$('#fast_casting').css('color', '#222222');
		$('#domination_magic').css('color', '#222222');
		$(this).css('color', '#9d7b96');
		$('#inspiration_magic').css('color', '#222222');
		
		$('#bullet_1').attr('src', 'images/ui/bullet.png');
		$('#bullet_2').attr('src', 'images/ui/bullet.png');
		$('#bullet_3').attr('src', 'images/ui/bullet_fill.png');
		$('#bullet_4').attr('src', 'images/ui/bullet.png');
		$('#bullet_5').attr('src', 'images/ui/bullet.png');
		
		$('#example').attr('src', 'images/example_skills/Imagined Burden.png');
	}, function() {
	});
	$('#inspiration_magic').hover(function() {
		$('#fast_casting').css('color', '#222222');
		$('#domination_magic').css('color', '#222222');
		$('#illusion_magic').css('color', '#222222');
		$(this).css('color', '#9d7b96');
		
		$('#bullet_1').attr('src', 'images/ui/bullet.png');
		$('#bullet_2').attr('src', 'images/ui/bullet.png');
		$('#bullet_3').attr('src', 'images/ui/bullet.png');
		$('#bullet_4').attr('src', 'images/ui/bullet_fill.png');
		$('#bullet_5').attr('src', 'images/ui/bullet.png');
		
		$('#example').attr('src', 'images/example_skills/Ether Feast.png');
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
	// Elementalist
	$('#elementalist_nav').hover(function() {
		$(this).css('background', 'url(\'images/icons/elementalist_nav.png\')  no-repeat center center');
		$('#nav_label').css('marginLeft', '47.875%');
		$('#nav_label').html('ELEMENTALIST');
	},
	function(){
		$(this).css('background', 'url(\'images/icons/elementalist_nav_bw.png\')  no-repeat center center');
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