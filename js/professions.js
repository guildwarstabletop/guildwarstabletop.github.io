$(document).ready(function() {
	// Profession panel hover on
	$('.panel').hover(function() {				
		// Panel grow
		$(this).animate({width: '+=0.5%', height: '+=1.5%', marginLeft : '-=0.25%', marginTop: '-=0.375%'}, 125);
		
		// Profession overview fade in
		$('#icon').stop().hide().fadeIn(125);
		$('#name').stop().hide().fadeIn(125);
		$('#divider').stop().hide().fadeIn(125);
		$('#description').stop().hide().fadeIn(125);
	},
	function(){  
		$(this).animate({width: '-=0.5%', height: '-=1.5%', marginLeft : '+=0.25%', marginTop: '+=0.375%'}, 125);
		$('#icon').css('background', 'url(\'images/ui/professions_icon.png\')  no-repeat center center');
		$('#name').text("PROFESSIONS");
		$('#name').css("color", "#222222");
		$('#description').html("There are 10 total professions in Guild Wars. Each character can have a primary and secondary profession.");
	});
			
	// Warrior panel hover
	$('#warrior').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/warrior_icon.png\')  no-repeat center center');
		$('#name').text("WARRIOR");
		$('#description').html("<b>Warriors</b> are masters of melee fighting and combat tactics, subduing enemies by building adrenaline to unleash ferocious attacks.");
	},
	function(){
	});
	
	// Ranger panel hover
	$('#ranger').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/ranger_icon.png\')  no-repeat center center');
		$('#name').text("RANGER");
		$('#description').html("<b>Rangers</b> are long-ranged combatants that use archery, beast mastery, and their attunement to nature to fight from a distance and survive.");
	},
	function(){
	});
	
	// Monk panel hover
	$('#monk').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/monk_icon.png\')  no-repeat center center');
		$('#name').text("MONK");
		$('#description').html("<b>Monks</b> use prayer combined with holy magic to heal, protect, and support their allies while calling down divine wrath on their enemies.");
	},
	function(){  
	});
	
	// Necromancer panel hover
	$('#necromancer').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/necromancer_icon.png\')  no-repeat center center');
		$('#name').text("NECROMANCER");
		$('#description').html("<b>Necromancers</b> draw power from blood sacrifice and communion with death, using dark magic to cast curses, steal health, and raise undead minions.");
	},
	function(){
	});
	
	// Mesmer panel hover
	$('#mesmer').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/mesmer_icon.png\')  no-repeat center center');
		$('#name').text("MESMER");
		$('#description').html("<b>Mesmers</b> are masters of illusion, misdirection, and control, able to manipulate enemy health, energy, movement, and skill casting for their own purposes.");
	},
	function(){
	});
	
	// Elementalist panel hover
	$('#elementalist').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/elementalist_icon.png\')  no-repeat center center');
		$('#name').text("ELEMENTALIST");
		$('#description').html("<b>Elementalists</b> are masters of arcane lore and mystical aptitude, calling upon the powers of fire, earth, air, and water to obliterate enemies.");
	},
	function(){
	});
	
	// Assassin panel hover
	$('#assassin').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/assassin_icon.png\')  no-repeat center center');
		$('#name').text("ASSASSIN");
		$('#description').html("<b>Assassins</b> are trained to efficiently link attacks in a chain to deal swift death. They are silent masters of shadows, daggers, and the deadly arts.");
	},
	function(){
	});
	
	// Ritualist panel hover
	$('#ritualist').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/ritualist_icon.png\')  no-repeat center center');
		$('#name').text("RITUALIST");
		$('#description').html("<b>Ritualists</b> are living conduits to the Spirit world, channeling magic from the Mists to perform binding rituals, summon ashes, and create spirit weapons.");
	},
	function(){
	});
	
	// Paragon panel hover
	$('#paragon').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/paragon_icon.png\')  no-repeat center center');
		$('#name').text("PARAGON");
		$('#description').html("<b>Paragons</b> rally the valiant through shouts and chants, inspiring their allies through spear and shield, voice and leadership.");
	},
	function(){
	});
	
	// Dervish panel hover
	$('#dervish').hover(function() {
		$('#icon').css('background', 'url(\'images/icons/dervish_icon.png\')  no-repeat center center');
		$('#name').text("DERVISH");
		$('#description').html("<b>Dervishes</b> are pious scythe-wielding warriors that can attack multiple enemies at once. Bolstered by their faith, they are whirlwinds of destruction.");
	},
	function(){
	});
});