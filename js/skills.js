$(document).ready(function() {
	$('#layout_description').hide();	
	
	$('.layout').hover(function() {
		$(this).css('border', '1pt solid #ec2127');
		$('#default_description').hide();
		$('#layout_description').hide().fadeIn(125);
	},
	function() {
		$(this).css('border', 'none');
		$('#layout_description').hide();
		$('#default_description').show();
	});
	
	$('#skill_name').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">SKILL NAME</font><br><br>The name of the skill.');
	},
	function() {
	});
	$('#skill_type').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">SKILL TYPE</font><br><br>Every skill is described by a skill type.<br><br>This skill type determines how a skill is activated and how it interacts with other skills.');
	},
	function() {
	});
	$('#action_type').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">ACTION TYPE</font><br><br>Every skill is also described by an action type.<br><br>This action type determines whether using the skill expends the user\'s action, movement action, or bonus action for that round.<br><br>Action types can also include extended actions which span multiple turns or reactions that can take place during other turns.');
	},
	function() {
	});
	$('#profession_icon').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">PROFESSION ICON</font><br><br>A symbol representing which profession <br>can use this skill.<br><br>Note that the user can have this as either their primary or secondary professions.<br><br>For a full listing of all 10 professions, please <br>visit the Professions page.');
	},
	function() {
	});
	$('#attribute').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">ATTRIBUTE</font><br><br>The associated attribute that determines the effectiveness of the skill.<br><br>Based on the user\'s attribute rank (0-5), the skill becomes more powerful. This is reflected in both the description and scaling sections below.');
	},
	function() {
	});
	$('#resource_cost').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">RESOURCE COST</font><br><br>The amount of each resource needed to use the skill. Most skills require energy to use:<br><br>Energy <img src="images/icons/energy.png" style="height: 5%; padding-top: 0.5%;"></img><br><br>Some professions use additional secondary resources: <br><br>Adrenaline <img src="images/icons/adrenaline.png" style="height: 5%; padding-top: 0.5%;"></img> (Warrior, Assassin, Dervish)<br>Upkeep <img src="images/icons/upkeep.png" style="height: 5%; padding-top: 0.5%;"> (Monk, Assassin)</img><br>Sacrifice <img src="images/icons/sacrifice.png" style="height: 5%; padding-top: 0.5%;"></img> (Necromancer)<br>Overcast <img src="images/icons/overcast.png" style="height: 5%; padding-top: 0.5%;"></img> (Elementalist)<br><br><br>Rangers, Mesmers, and Ritualists do not use secondary resources.');
	},
	function() {
	});
	$('#recharge_time').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">RECHARGE TIME</font><br><br>The number of rounds the user must wait after using the skill before attempting to use it again.');
	},
	function() {
	});
	$('#skill_icon').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">SKILL ICON</font><br><br>Visual representation of the skill.');
	},
	function() {
	});
	$('#arrow').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">ARROW</font><br><br>An optional symbol representing whether the skill is an enchantment or a hex.<br><br>Enchantment <img src="images/icons/enchantment.png"></img><br><br>Hex <img src="images/icons/hex.png"></img>');
	},
	function() {
	});
	$('#activation_rank').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">ACTIVATION RANK</font><br><br>An optional symbol representing the amount of time it takes to execute the skill.<br><br>Ranks range from Rank 3 to Rank 1 as the skill takes less time to execute. Unlabeled skills are assumed to be of Rank 4.<br><br>When attempting to interrupt a skill, activation ranks are compared to determine how they will interact.<br><br>Skills can always interrupt other skills of a lesser rank, but must be prepared in advance to interrupt a skill of equal rank.<br><br>Against skills of a higher rank, the interrupt skill must be prepared in advance and the user must succeed with an 11 or higher on a d20 roll.');
	},
	function() {
	});
	$('#skill_description').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">SKILL DESCRIPTION</font><br><br>Description of what the skill does.<br><br>If the skill increases in effectiveness at higher attribute ranks, the scaling factor(s) will be represented by a range of green numbers.<br><br>The scaling for each factor is represented by columns to the right.');
	},
	function() {
	});
	$('#scaling').hover(function() {
		$('#layout_description').html('<div style=\"margin-top: 10%; background-color: #222222; width: 100%; height: 0.5%; position: absolute;\"></div><font style=\"font-family: Fremont-Regular; font-size: 25pt;\">SCALING</font><br><br>The effectiveness of the skill.<br><br>Each row represents the ability\'s effectiveness from attribute rank 0 at the top to attribute rank 5 at the bottom.<br><br>For the example skill to the left, it would heal 3d8 health at rank 3.<br><br>Some skills have multiple factors that are affected by attribute rank, in which case they will have separate scaling columns for each individual factor.');
	},
	function() {
	});
});