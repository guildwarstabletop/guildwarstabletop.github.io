$(document).ready(function() {
	// Initial State
	$('#starter_armor').hide();
	$('#starter_weapons').hide();
	$('#starter_skills').hide();
	$('#attributes').hide();
	$('#leveling_up').hide();
	
	$('#build').hide();
	$('#insignias').hide();
	$('#runes').hide();
	$('#weapons').hide();
	$('#upgrade_components').hide();
	$('#inscriptions').hide();
	$('#skills').hide();
	
	$('#combat').hide();
	$('#conditions').hide();
	$('#morale_boosts').hide();
	$('#death_penalty').hide();
	$('#areas_of_effect').hide();
	$('#weapon_damage').hide();
	$('#skill_damage').hide();
	$('#drops').hide();
	$('#critical_hits').hide();
	
	// Tabs
	$('#character_tab').click(function() {	
		$(this).css('color', 'white');
		$(this).css('background-color', '#222222');
		$('#build_tab').css('color', '#222222');
		$('#build_tab').css('background-color', 'transparent');
		$('#combat_tab').css('color', '#222222');
		$('#combat_tab').css('background-color', 'transparent');
		
		$('#character').show();
		$('#build').hide();
		$('#combat').hide();
	});
	$('#build_tab').click(function() {
		$('#character_tab').css('color', '#222222');
		$('#character_tab').css('background-color', 'transparent');	
		$(this).css('color', 'white');
		$(this).css('background-color', '#222222');
		$('#combat_tab').css('color', '#222222');
		$('#combat_tab').css('background-color', 'transparent');
		
		$('#character').hide();
		$('#build').show();
		$('#combat').hide();
	});
	$('#combat_tab').click(function() {	
		$('#character_tab').css('color', '#222222');
		$('#character_tab').css('background-color', 'transparent');	
		$('#build_tab').css('color', '#222222');
		$('#build_tab').css('background-color', 'transparent');
		$(this).css('color', 'white');
		$(this).css('background-color', '#222222');
		
		$('#character').hide();
		$('#build').hide();
		$('#combat').show();
	});
	
	// Character
	$('#choosing_professions_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#222222','font-weight':'bold'});
		$('#starter_armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_skills_tab').css({'color':'#999999','font-weight':'normal'});
		$('#attributes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#leveling_up_tab').css({'color':'#999999','font-weight':'normal'});

		$('#character_arrow').css('margin-top','2.15%');
		
		$('#choosing_professions').show();
		$('#starter_armor').hide();
		$('#starter_weapons').hide();
		$('#starter_skills').hide();
		$('#attributes').hide();
		$('#leveling_up').hide();
	});
	$('#starter_armor_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#222222','font-weight':'bold'});
		$('#starter_weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_skills_tab').css({'color':'#999999','font-weight':'normal'});
		$('#attributes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#leveling_up_tab').css({'color':'#999999','font-weight':'normal'});	

		$('#character_arrow').css('margin-top','4.25%');
		
		$('#choosing_professions').hide();
		$('#starter_armor').show();
		$('#starter_weapons').hide();
		$('#starter_skills').hide();
		$('#attributes').hide();
		$('#leveling_up').hide();
	});
	$('#starter_weapons_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_weapons_tab').css({'color':'#222222','font-weight':'bold'});
		$('#starter_skills_tab').css({'color':'#999999','font-weight':'normal'});
		$('#attributes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#leveling_up_tab').css({'color':'#999999','font-weight':'normal'});	

		$('#character_arrow').css('margin-top','6.35%');
		
		$('#choosing_professions').hide();
		$('#starter_armor').hide();
		$('#starter_weapons').show();
		$('#starter_skills').hide();
		$('#attributes').hide();
		$('#leveling_up').hide();
	});
	$('#starter_skills_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_skills_tab').css({'color':'#222222','font-weight':'bold'});
		$('#attributes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#leveling_up_tab').css({'color':'#999999','font-weight':'normal'});	

		$('#character_arrow').css('margin-top','8.45%');
		
		$('#choosing_professions').hide();
		$('#starter_armor').hide();
		$('#starter_weapons').hide();
		$('#starter_skills').show();
		$('#attributes').hide();
		$('#leveling_up').hide();
	});
	$('#attributes_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_skills_tab').css({'color':'#999999','font-weight':'normal'});
		$('#attributes_tab').css({'color':'#222222','font-weight':'bold'});
		$('#leveling_up_tab').css({'color':'#999999','font-weight':'normal'});	

		$('#character_arrow').css('margin-top','10.55%');
		
		$('#choosing_professions').hide();
		$('#starter_armor').hide();
		$('#starter_weapons').hide();
		$('#starter_skills').hide();
		$('#attributes').show();
		$('#leveling_up').hide();
	});
	$('#leveling_up_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_skills_tab').css({'color':'#999999','font-weight':'normal'});
		$('#attributes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#leveling_up_tab').css({'color':'#222222','font-weight':'bold'});	

		$('#character_arrow').css('margin-top','12.65%');
		
		$('#choosing_professions').hide();
		$('#starter_armor').hide();
		$('#starter_weapons').hide();
		$('#starter_skills').hide();
		$('#attributes').hide();
		$('#leveling_up').show();
	});
	
	// Build
	$('#armor_tab').click(function() {
		$('#armor_tab').css({'color':'#222222','font-weight':'bold'});
		$('#insignias_tab').css({'color':'#999999','font-weight':'normal'});
		$('#runes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#upgrade_components_tab').css({'color':'#999999','font-weight':'normal'});
		$('#inscriptions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skills_tab').css({'color':'#999999','font-weight':'normal'});		

		$('#build_arrow').css('margin-top','2.15%');
		
		$('#armor').show();
		$('#insignias').hide();
		$('#runes').hide();
		$('#weapons').hide();
		$('#upgrade_components').hide();
		$('#inscriptions').hide();
		$('#skills').hide();
	});
	$('#insignias_tab').click(function() {
		$('#armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#insignias_tab').css({'color':'#222222','font-weight':'bold'});
		$('#runes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#upgrade_components_tab').css({'color':'#999999','font-weight':'normal'});
		$('#inscriptions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skills_tab').css({'color':'#999999','font-weight':'normal'});		

		$('#build_arrow').css('margin-top','4.25%');
		
		$('#armor').hide();
		$('#insignias').show();
		$('#runes').hide();
		$('#weapons').hide();
		$('#upgrade_components').hide();
		$('#inscriptions').hide();
		$('#skills').hide();
	});
	$('#runes_tab').click(function() {
		$('#armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#insignias_tab').css({'color':'#999999','font-weight':'normal'});
		$('#runes_tab').css({'color':'#222222','font-weight':'bold'});
		$('#weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#upgrade_components_tab').css({'color':'#999999','font-weight':'normal'});
		$('#inscriptions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skills_tab').css({'color':'#999999','font-weight':'normal'});		

		$('#build_arrow').css('margin-top','6.35%');
		
		$('#armor').hide();
		$('#insignias').hide();
		$('#runes').show();
		$('#weapons').hide();
		$('#upgrade_components').hide();
		$('#inscriptions').hide();
		$('#skills').hide();
	});
	$('#weapons_tab').click(function() {
		$('#armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#insignias_tab').css({'color':'#999999','font-weight':'normal'});
		$('#runes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapons_tab').css({'color':'#222222','font-weight':'bold'});
		$('#upgrade_components_tab').css({'color':'#999999','font-weight':'normal'});
		$('#inscriptions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skills_tab').css({'color':'#999999','font-weight':'normal'});		

		$('#build_arrow').css('margin-top','8.45%');
		
		$('#armor').hide();
		$('#insignias').hide();
		$('#runes').hide();
		$('#weapons').show();
		$('#upgrade_components').hide();
		$('#inscriptions').hide();
		$('#skills').hide();
	});
	$('#upgrade_components_tab').click(function() {
		$('#armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#insignias_tab').css({'color':'#999999','font-weight':'normal'});
		$('#runes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#upgrade_components_tab').css({'color':'#222222','font-weight':'bold'});
		$('#inscriptions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skills_tab').css({'color':'#999999','font-weight':'normal'});		

		$('#build_arrow').css('margin-top','10.55%');
		
		$('#armor').hide();
		$('#insignias').hide();
		$('#runes').hide();
		$('#weapons').hide();
		$('#upgrade_components').show();
		$('#inscriptions').hide();
		$('#skills').hide();
	});
	$('#inscriptions_tab').click(function() {
		$('#armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#insignias_tab').css({'color':'#999999','font-weight':'normal'});
		$('#runes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#upgrade_components_tab').css({'color':'#999999','font-weight':'normal'});
		$('#inscriptions_tab').css({'color':'#222222','font-weight':'bold'});
		$('#skills_tab').css({'color':'#999999','font-weight':'normal'});		

		$('#build_arrow').css('margin-top','12.65%');
		
		$('#armor').hide();
		$('#insignias').hide();
		$('#runes').hide();
		$('#weapons').hide();
		$('#upgrade_components').hide();
		$('#inscriptions').show();
		$('#skills').hide();
	});
	$('#skills_tab').click(function() {
		$('#armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#insignias_tab').css({'color':'#999999','font-weight':'normal'});
		$('#runes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#upgrade_components_tab').css({'color':'#999999','font-weight':'normal'});
		$('#inscriptions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skills_tab').css({'color':'#222222','font-weight':'bold'});		

		$('#build_arrow').css('margin-top','14.75%');
		
		$('#armor').hide();
		$('#insignias').hide();
		$('#runes').hide();
		$('#weapons').hide();
		$('#upgrade_components').hide();
		$('#inscriptions').hide();
		$('#skills').show();
	});
	
	// Combat
	$('#attack_layers_tab').click(function() {
		$('#attack_layers_tab').css({'color':'#222222','font-weight':'bold'});
		$('#conditions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#morale_boosts_tab').css({'color':'#999999','font-weight':'normal'});
		$('#death_penalty_tab').css({'color':'#999999','font-weight':'normal'});
		$('#areas_of_effect_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapon_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skill_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#drops_tab').css({'color':'#999999','font-weight':'normal'});
		$('#critical_hits_tab').css({'color':'#999999','font-weight':'normal'});			

		$('#combat_arrow').css('margin-top','2.15%');
		
		$('#attack_layers').show();
		$('#conditions').hide();
		$('#morale_boosts').hide();
		$('#death_penalty').hide();
		$('#areas_of_effect').hide();
		$('#weapon_damage').hide();
		$('#skill_damage').hide();
		$('#drops').hide();
		$('#critical_hits').hide();
	});
	$('#conditions_tab').click(function() {
		$('#attack_layers_tab').css({'color':'#999999','font-weight':'normal'});
		$('#conditions_tab').css({'color':'#222222','font-weight':'bold'});
		$('#morale_boosts_tab').css({'color':'#999999','font-weight':'normal'});
		$('#death_penalty_tab').css({'color':'#999999','font-weight':'normal'});
		$('#areas_of_effect_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapon_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skill_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#drops_tab').css({'color':'#999999','font-weight':'normal'});
		$('#critical_hits_tab').css({'color':'#999999','font-weight':'normal'});			

		$('#combat_arrow').css('margin-top','4.25%');
		
		$('#attack_layers').hide();
		$('#conditions').show();
		$('#morale_boosts').hide();
		$('#death_penalty').hide();
		$('#areas_of_effect').hide();
		$('#weapon_damage').hide();
		$('#skill_damage').hide();
		$('#drops').hide();
		$('#critical_hits').hide();
	});
	$('#morale_boosts_tab').click(function() {
		$('#attack_layers_tab').css({'color':'#999999','font-weight':'normal'});
		$('#conditions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#morale_boosts_tab').css({'color':'#222222','font-weight':'bold'});
		$('#death_penalty_tab').css({'color':'#999999','font-weight':'normal'});
		$('#areas_of_effect_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapon_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skill_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#drops_tab').css({'color':'#999999','font-weight':'normal'});
		$('#critical_hits_tab').css({'color':'#999999','font-weight':'normal'});			

		$('#combat_arrow').css('margin-top','6.35%');
		
		$('#attack_layers').hide();
		$('#conditions').hide();
		$('#morale_boosts').show();
		$('#death_penalty').hide();
		$('#areas_of_effect').hide();
		$('#weapon_damage').hide();
		$('#skill_damage').hide();
		$('#drops').hide();
		$('#critical_hits').hide();
	});
	$('#death_penalty_tab').click(function() {
		$('#attack_layers_tab').css({'color':'#999999','font-weight':'normal'});
		$('#conditions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#morale_boosts_tab').css({'color':'#999999','font-weight':'normal'});
		$('#death_penalty_tab').css({'color':'#222222','font-weight':'bold'});
		$('#areas_of_effect_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapon_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skill_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#drops_tab').css({'color':'#999999','font-weight':'normal'});
		$('#critical_hits_tab').css({'color':'#999999','font-weight':'normal'});			

		$('#combat_arrow').css('margin-top','8.45%');
		
		$('#attack_layers').hide();
		$('#conditions').hide();
		$('#morale_boosts').hide();
		$('#death_penalty').show();
		$('#areas_of_effect').hide();
		$('#weapon_damage').hide();
		$('#skill_damage').hide();
		$('#drops').hide();
		$('#critical_hits').hide();
	});
	$('#areas_of_effect_tab').click(function() {
		$('#attack_layers_tab').css({'color':'#999999','font-weight':'normal'});
		$('#conditions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#morale_boosts_tab').css({'color':'#999999','font-weight':'normal'});
		$('#death_penalty_tab').css({'color':'#999999','font-weight':'normal'});
		$('#areas_of_effect_tab').css({'color':'#222222','font-weight':'bold'});
		$('#weapon_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skill_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#drops_tab').css({'color':'#999999','font-weight':'normal'});
		$('#critical_hits_tab').css({'color':'#999999','font-weight':'normal'});			

		$('#combat_arrow').css('margin-top','10.55%');
		
		$('#attack_layers').hide();
		$('#conditions').hide();
		$('#morale_boosts').hide();
		$('#death_penalty').hide();
		$('#areas_of_effect').show();
		$('#weapon_damage').hide();
		$('#skill_damage').hide();
		$('#drops').hide();
		$('#critical_hits').hide();
	});
	$('#weapon_damage_tab').click(function() {
		$('#attack_layers_tab').css({'color':'#999999','font-weight':'normal'});
		$('#conditions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#morale_boosts_tab').css({'color':'#999999','font-weight':'normal'});
		$('#death_penalty_tab').css({'color':'#999999','font-weight':'normal'});
		$('#areas_of_effect_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapon_damage_tab').css({'color':'#222222','font-weight':'bold'});
		$('#skill_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#drops_tab').css({'color':'#999999','font-weight':'normal'});
		$('#critical_hits_tab').css({'color':'#999999','font-weight':'normal'});			

		$('#combat_arrow').css('margin-top','12.65%');
		
		$('#attack_layers').hide();
		$('#conditions').hide();
		$('#morale_boosts').hide();
		$('#death_penalty').hide();
		$('#areas_of_effect').hide();
		$('#weapon_damage').show();
		$('#skill_damage').hide();
		$('#drops').hide();
		$('#critical_hits').hide();
	});
	$('#skill_damage_tab').click(function() {
		$('#attack_layers_tab').css({'color':'#999999','font-weight':'normal'});
		$('#conditions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#morale_boosts_tab').css({'color':'#999999','font-weight':'normal'});
		$('#death_penalty_tab').css({'color':'#999999','font-weight':'normal'});
		$('#areas_of_effect_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapon_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skill_damage_tab').css({'color':'#222222','font-weight':'bold'});
		$('#drops_tab').css({'color':'#999999','font-weight':'normal'});
		$('#critical_hits_tab').css({'color':'#999999','font-weight':'normal'});			

		$('#combat_arrow').css('margin-top','14.75%');
		
		$('#attack_layers').hide();
		$('#conditions').hide();
		$('#morale_boosts').hide();
		$('#death_penalty').hide();
		$('#areas_of_effect').hide();
		$('#weapon_damage').hide();
		$('#skill_damage').show();
		$('#drops').hide();
		$('#critical_hits').hide();
	});
	$('#drops_tab').click(function() {
		$('#attack_layers_tab').css({'color':'#999999','font-weight':'normal'});
		$('#conditions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#morale_boosts_tab').css({'color':'#999999','font-weight':'normal'});
		$('#death_penalty_tab').css({'color':'#999999','font-weight':'normal'});
		$('#areas_of_effect_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapon_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skill_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#drops_tab').css({'color':'#222222','font-weight':'bold'});
		$('#critical_hits_tab').css({'color':'#999999','font-weight':'normal'});			

		$('#combat_arrow').css('margin-top','16.85%');
		
		$('#attack_layers').hide();
		$('#conditions').hide();
		$('#morale_boosts').hide();
		$('#death_penalty').hide();
		$('#areas_of_effect').hide();
		$('#weapon_damage').hide();
		$('#skill_damage').hide();
		$('#drops').show();
		$('#critical_hits').hide();
	});
	$('#critical_hits_tab').click(function() {
		$('#attack_layers_tab').css({'color':'#999999','font-weight':'normal'});
		$('#conditions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#morale_boosts_tab').css({'color':'#999999','font-weight':'normal'});
		$('#death_penalty_tab').css({'color':'#999999','font-weight':'normal'});
		$('#areas_of_effect_tab').css({'color':'#999999','font-weight':'normal'});
		$('#weapon_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#skill_damage_tab').css({'color':'#999999','font-weight':'normal'});
		$('#drops_tab').css({'color':'#999999','font-weight':'normal'});
		$('#critical_hits_tab').css({'color':'#222222','font-weight':'bold'});			

		$('#combat_arrow').css('margin-top','17.95%');
		
		$('#attack_layers').hide();
		$('#conditions').hide();
		$('#morale_boosts').hide();
		$('#death_penalty').hide();
		$('#areas_of_effect').hide();
		$('#weapon_damage').hide();
		$('#skill_damage').hide();
		$('#drops').hide();
		$('#critical_hits').show();
	});
});