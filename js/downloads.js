$(document).ready(function() {
	$('.download').hover(function() {
		$(this).css('color','#222222');
	},
	function() {
		$(this).css('color','#999999');
	});

	$('#prophecies').hover(function() {
		$('#downloads_description').html('All skill cards exclusive to the original <b>Prophecies</b> campaign.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#factions').hover(function() {
		$('#downloads_description').html('All skill cards exclusive to the second <b>Factions</b> campaign.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#nightfall').hover(function() {
		$('#downloads_description').html('All skill cards exclusive to the third <b>Nightfall</b> campaign.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#eye_of_the_north').hover(function() {
		$('#downloads_description').html('All skill cards exclusive to the <b>Eye of the North</b> expansion.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#all_card_sets').hover(function() {
		$('#downloads_description').html('All skill cards.');
	},
	function() {
		$('#downloads_description').html('');
	});
	
	$('#critical_chance').hover(function() {
		$('#downloads_description').html('Determine whether a weapon attack is a critical hit.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#weapon_damage').hover(function() {
		$('#downloads_description').html('Calculate weapon damage for all combat scenarios.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#skill_damage').hover(function() {
		$('#downloads_description').html('Calculate skill damage for all combat scenarios.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#all_combat_tools').hover(function() {
		$('#downloads_description').html('All combat tools.');
	},
	function() {
		$('#downloads_description').html('');
	});
	
	$('#armor').hover(function() {
		$('#downloads_description').html('Armor rating and damage reduction.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#weapons').hover(function() {
		$('#downloads_description').html('Weapons and damage rolls.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#minions').hover(function() {
		$('#downloads_description').html('Animated minion statistics.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#spirits').hover(function() {
		$('#downloads_description').html('All skill cards.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#area_of_effect').hover(function() {
		$('#downloads_description').html('Determine whether a weapon attack is a critical hit.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#conditions').hover(function() {
		$('#downloads_description').html('Determine how much damage a weapon attack does to its target.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#pets').hover(function() {
		$('#downloads_description').html('Determine how much damage a non-armor-ignoring skill does to its target.');
	},
	function() {
		$('#downloads_description').html('');
	});
	$('#all_quick_references').hover(function() {
		$('#downloads_description').html('All combat tools.');
	},
	function() {
		$('#downloads_description').html('');
	});
});