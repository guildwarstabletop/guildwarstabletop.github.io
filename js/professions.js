$(document).ready(function() {	
	// Profession panel hover
	$('.panel').hover(function() {
		$('#icon').stop().hide().fadeIn(250);
		$('#name').stop().hide().fadeIn(250);
		$('#divider').stop().hide().fadeIn(250);
		$('#description').stop().hide().fadeIn(250);
		$(this).animate({width: '+=0.5%', height: '+=1.5%', marginLeft : '-=0.25%', marginTop: '-=0.375%'}, 125);
	},
	function(){
		$('#icon').css('background', 'url(\'images/ui/professions_icon.png\')  no-repeat center center');
		$('#name').text("PROFESSIONS");
		$('#name').css("color", "#222222");
		$('#description').html("There are 10 total professions in Guild Wars. Each character can have a primary and secondary profession.");
		$(this).animate({width: '-=0.5%', height: '-=1.5%', marginLeft : '+=0.25%', marginTop: '+=0.375%'}, 125);
	});
			
	// Warrior panel hover
	$('#warrior_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/warrior_icon.png\')  no-repeat center center');
		$('#name').text("WARRIOR");
		$('#description').html("<b>Warriors</b> are masters of melee fighting and combat tactics, subduing enemies by building adrenaline to unleash ferocious attacks.");
		$('#warrior_image').attr('src','images/panels/warrior_hover.jpg');
	},
	function() {
		$('#warrior_image').attr('src','images/panels/warrior.jpg');
	});
	
	// Ranger panel hover
	$('#ranger_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/ranger_icon.png\')  no-repeat center center');
		$('#name').text("RANGER");
		$('#description').html("<b>Rangers</b> are long-ranged combatants that use archery, beast mastery, and their attunement to nature to fight from a distance and survive.");
		$('#ranger_image').attr('src','images/panels/ranger_hover.jpg');
	},
	function(){
		$('#ranger_image').attr('src','images/panels/ranger.jpg');
	});
	
	// Monk panel hover
	$('#monk_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/monk_icon.png\')  no-repeat center center');
		$('#name').text("MONK");
		$('#description').html("<b>Monks</b> use prayer combined with holy magic to heal, protect, and support their allies while calling down divine wrath on their enemies.");
		$('#monk_image').attr('src','images/panels/monk_hover.jpg');
	},
	function(){  
		$('#monk_image').attr('src','images/panels/monk.jpg');
	});
	
	// Necromancer panel hover
	$('#necromancer_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/necromancer_icon.png\')  no-repeat center center');
		$('#name').text("NECROMANCER");
		$('#description').html("<b>Necromancers</b> draw power from blood sacrifice and communion with death, using dark magic to cast curses, steal health, and raise undead minions.");
		$('#necromancer_image').attr('src','images/panels/necromancer_hover.jpg');
	},
	function(){
		$('#necromancer_image').attr('src','images/panels/necromancer.jpg');
	});
	
	// Mesmer panel hover
	$('#mesmer_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/mesmer_icon.png\')  no-repeat center center');
		$('#name').text("MESMER");
		$('#description').html("<b>Mesmers</b> are masters of illusion, misdirection, and control, able to manipulate enemy health, energy, movement, and skill casting for their own purposes.");
		$('#mesmer_image').attr('src','images/panels/mesmer_hover.jpg');
	},
	function(){
		$('#mesmer_image').attr('src','images/panels/mesmer.jpg');
	});
	
	// Elementalist panel hover
	$('#elementalist_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/elementalist_icon.png\')  no-repeat center center');
		$('#name').text("ELEMENTALIST");
		$('#description').html("<b>Elementalists</b> are masters of arcane lore and mystical aptitude, calling upon the powers of fire, earth, air, and water to obliterate enemies.");
		$('#elementalist_image').attr('src','images/panels/elementalist_hover.jpg');
	},
	function(){
		$('#elementalist_image').attr('src','images/panels/elementalist.jpg');
	});
	
	// Assassin panel hover
	$('#assassin_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/assassin_icon.png\')  no-repeat center center');
		$('#name').text("ASSASSIN");
		$('#description').html("<b>Assassins</b> are trained to efficiently link attacks in a chain to deal swift death. They are silent masters of shadows, daggers, and the deadly arts.");
		$('#assassin_image').attr('src','images/panels/assassin_hover.jpg');
	},
	function(){
		$('#assassin_image').attr('src','images/panels/assassin.jpg');
	});
	
	// Ritualist panel hover
	$('#ritualist_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/ritualist_icon.png\')  no-repeat center center');
		$('#name').text("RITUALIST");
		$('#description').html("<b>Ritualists</b> are living conduits to the Spirit world, channeling magic from the Mists to perform binding rituals, summon ashes, and create spirit weapons.");
		$('#ritualist_image').attr('src','images/panels/ritualist_hover.jpg');
	},
	function(){
		$('#ritualist_image').attr('src','images/panels/ritualist.jpg');
	});
	
	// Paragon panel hover
	$('#paragon_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/paragon_icon.png\')  no-repeat center center');
		$('#name').text("PARAGON");
		$('#description').html("<b>Paragons</b> rally the valiant through shouts and chants, inspiring their allies through spear and shield, voice and leadership.");
		$('#paragon_image').attr('src','images/panels/paragon_hover.jpg');
	},
	function(){
		$('#paragon_image').attr('src','images/panels/paragon.jpg');
	});
	
	// Dervish panel hover
	$('#dervish_panel').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/dervish_icon.png\')  no-repeat center center');
		$('#name').text("DERVISH");
		$('#description').html("<b>Dervishes</b> are pious scythe-wielding warriors that can attack multiple enemies at once. Bolstered by their faith, they are whirlwinds of destruction.");
		$('#dervish_image').attr('src','images/panels/dervish_hover.jpg');
	},
	function(){
		$('#dervish_image').attr('src','images/panels/dervish.jpg');
	});
});