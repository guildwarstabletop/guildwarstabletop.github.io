$(document).ready(function() {	
	$('#build').hide();
	$('#combat').hide();
	
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
		
		$('#choosing_professions').css('visibility', 'visible');
		$('#starter_armor').css('visibility', 'hidden');
		$('#starter_weapons').css('visibility', 'hidden');
		$('#starter_skills').css('visibility', 'hidden');
		$('#attributes').css('visibility', 'hidden');
		$('#leveling_up').css('visibility', 'hidden');
	});
	$('#starter_armor_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#222222','font-weight':'bold'});
		$('#starter_weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_skills_tab').css({'color':'#999999','font-weight':'normal'});
		$('#attributes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#leveling_up_tab').css({'color':'#999999','font-weight':'normal'});	

		$('#character_arrow').css('margin-top','4.25%');
		
		$('#choosing_professions').css('visibility', 'hidden');
		$('#starter_armor').css('visibility', 'visible');
		$('#starter_weapons').css('visibility', 'hidden');
		$('#starter_skills').css('visibility', 'hidden');
		$('#attributes').css('visibility', 'hidden');
		$('#leveling_up').css('visibility', 'hidden');
	});
	$('#starter_weapons_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_weapons_tab').css({'color':'#222222','font-weight':'bold'});
		$('#starter_skills_tab').css({'color':'#999999','font-weight':'normal'});
		$('#attributes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#leveling_up_tab').css({'color':'#999999','font-weight':'normal'});	

		$('#character_arrow').css('margin-top','6.35%');
		
		$('#choosing_professions').css('visibility', 'hidden');
		$('#starter_armor').css('visibility', 'hidden');
		$('#starter_weapons').css('visibility', 'visible');
		$('#starter_skills').css('visibility', 'hidden');
		$('#attributes').css('visibility', 'hidden');
		$('#leveling_up').css('visibility', 'hidden');
	});
	$('#starter_skills_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_skills_tab').css({'color':'#222222','font-weight':'bold'});
		$('#attributes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#leveling_up_tab').css({'color':'#999999','font-weight':'normal'});	

		$('#character_arrow').css('margin-top','8.45%');
		
		$('#choosing_professions').css('visibility', 'hidden');
		$('#starter_armor').css('visibility', 'hidden');
		$('#starter_weapons').css('visibility', 'hidden');
		$('#starter_skills').css('visibility', 'visible');
		$('#attributes').css('visibility', 'hidden');
		$('#leveling_up').css('visibility', 'hidden');
	});
	$('#attributes_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_skills_tab').css({'color':'#999999','font-weight':'normal'});
		$('#attributes_tab').css({'color':'#222222','font-weight':'bold'});
		$('#leveling_up_tab').css({'color':'#999999','font-weight':'normal'});	

		$('#character_arrow').css('margin-top','10.55%');
		
		$('#choosing_professions').css('visibility', 'hidden');
		$('#starter_armor').css('visibility', 'hidden');
		$('#starter_weapons').css('visibility', 'hidden');
		$('#starter_skills').css('visibility', 'hidden');
		$('#attributes').css('visibility', 'visible');
		$('#leveling_up').css('visibility', 'hidden');
	});
	$('#leveling_up_tab').click(function() {
		$('#choosing_professions_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_armor_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_weapons_tab').css({'color':'#999999','font-weight':'normal'});
		$('#starter_skills_tab').css({'color':'#999999','font-weight':'normal'});
		$('#attributes_tab').css({'color':'#999999','font-weight':'normal'});
		$('#leveling_up_tab').css({'color':'#222222','font-weight':'bold'});	

		$('#character_arrow').css('margin-top','12.65%');
		
		$('#choosing_professions').css('visibility', 'hidden');
		$('#starter_armor').css('visibility', 'hidden');
		$('#starter_weapons').css('visibility', 'hidden');
		$('#starter_skills').css('visibility', 'hidden');
		$('#attributes').css('visibility', 'hidden');
		$('#leveling_up').css('visibility', 'visible');
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
		
		$('#armor').css('visibility', 'visible');
		$('#insignias').css('visibility', 'hidden');
		$('#runes').css('visibility', 'hidden');
		$('#weapons').css('visibility', 'hidden');
		$('#upgrade_components').css('visibility', 'hidden');
		$('#inscriptions').css('visibility', 'hidden');
		$('#skills').css('visibility', 'hidden');
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
		
		$('#armor').css('visibility', 'hidden');
		$('#insignias').css('visibility', 'visible');
		$('#runes').css('visibility', 'hidden');
		$('#weapons').css('visibility', 'hidden');
		$('#upgrade_components').css('visibility', 'hidden');
		$('#inscriptions').css('visibility', 'hidden');
		$('#skills').css('visibility', 'hidden');
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
		
		$('#armor').css('visibility', 'hidden');
		$('#insignias').css('visibility', 'hidden');
		$('#runes').css('visibility', 'visible');
		$('#weapons').css('visibility', 'hidden');
		$('#upgrade_components').css('visibility', 'hidden');
		$('#inscriptions').css('visibility', 'hidden');
		$('#skills').css('visibility', 'hidden');
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
		
		$('#armor').css('visibility', 'hidden');
		$('#insignias').css('visibility', 'hidden');
		$('#runes').css('visibility', 'hidden');
		$('#weapons').css('visibility', 'visible');
		$('#upgrade_components').css('visibility', 'hidden');
		$('#inscriptions').css('visibility', 'hidden');
		$('#skills').css('visibility', 'hidden');
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
		
		$('#armor').css('visibility', 'hidden');
		$('#insignias').css('visibility', 'hidden');
		$('#runes').css('visibility', 'hidden');
		$('#weapons').css('visibility', 'hidden');
		$('#upgrade_components').css('visibility', 'visible');
		$('#inscriptions').css('visibility', 'hidden');
		$('#skills').css('visibility', 'hidden');
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
		
		$('#armor').css('visibility', 'hidden');
		$('#insignias').css('visibility', 'hidden');
		$('#runes').css('visibility', 'hidden');
		$('#weapons').css('visibility', 'hidden');
		$('#upgrade_components').css('visibility', 'hidden');
		$('#inscriptions').css('visibility', 'visible');
		$('#skills').css('visibility', 'hidden');
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
		
		$('#armor').css('visibility', 'hidden');
		$('#insignias').css('visibility', 'hidden');
		$('#runes').css('visibility', 'hidden');
		$('#weapons').css('visibility', 'hidden');
		$('#upgrade_components').css('visibility', 'hidden');
		$('#inscriptions').css('visibility', 'hidden');
		$('#skills').css('visibility', 'visible');
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
		
		$('#attack_layers').css('visibility', 'visible');
		$('#conditions').css('visibility', 'hidden');
		$('#morale_boosts').css('visibility', 'hidden');
		$('#death_penalty').css('visibility', 'hidden');
		$('#areas_of_effect').css('visibility', 'hidden');
		$('#weapon_damage').css('visibility', 'hidden');
		$('#skill_damage').css('visibility', 'hidden');
		$('#drops').css('visibility', 'hidden');
		$('#critical_hits').css('visibility', 'hidden');
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
		
		$('#attack_layers').css('visibility', 'hidden');
		$('#conditions').css('visibility', 'visible');
		$('#morale_boosts').css('visibility', 'hidden');
		$('#death_penalty').css('visibility', 'hidden');
		$('#areas_of_effect').css('visibility', 'hidden');
		$('#weapon_damage').css('visibility', 'hidden');
		$('#skill_damage').css('visibility', 'hidden');
		$('#drops').css('visibility', 'hidden');
		$('#critical_hits').css('visibility', 'hidden');
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
		
		$('#attack_layers').css('visibility', 'hidden');
		$('#conditions').css('visibility', 'hidden');
		$('#morale_boosts').css('visibility', 'visible');
		$('#death_penalty').css('visibility', 'hidden');
		$('#areas_of_effect').css('visibility', 'hidden');
		$('#weapon_damage').css('visibility', 'hidden');
		$('#skill_damage').css('visibility', 'hidden');
		$('#drops').css('visibility', 'hidden');
		$('#critical_hits').css('visibility', 'hidden');
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
		
		$('#attack_layers').css('visibility', 'hidden');
		$('#conditions').css('visibility', 'hidden');
		$('#morale_boosts').css('visibility', 'hidden');
		$('#death_penalty').css('visibility', 'visible');
		$('#areas_of_effect').css('visibility', 'hidden');
		$('#weapon_damage').css('visibility', 'hidden');
		$('#skill_damage').css('visibility', 'hidden');
		$('#drops').css('visibility', 'hidden');
		$('#critical_hits').css('visibility', 'hidden');
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
		
		$('#attack_layers').css('visibility', 'hidden');
		$('#conditions').css('visibility', 'hidden');
		$('#morale_boosts').css('visibility', 'hidden');
		$('#death_penalty').css('visibility', 'hidden');
		$('#areas_of_effect').css('visibility', 'visible');
		$('#weapon_damage').css('visibility', 'hidden');
		$('#skill_damage').css('visibility', 'hidden');
		$('#drops').css('visibility', 'hidden');
		$('#critical_hits').css('visibility', 'hidden');
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
		
		$('#attack_layers').css('visibility', 'hidden');
		$('#conditions').css('visibility', 'hidden');
		$('#morale_boosts').css('visibility', 'hidden');
		$('#death_penalty').css('visibility', 'hidden');
		$('#areas_of_effect').css('visibility', 'hidden');
		$('#weapon_damage').css('visibility', 'visible');
		$('#skill_damage').css('visibility', 'hidden');
		$('#drops').css('visibility', 'hidden');
		$('#critical_hits').css('visibility', 'hidden');
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
		
		$('#attack_layers').css('visibility', 'hidden');
		$('#conditions').css('visibility', 'hidden');
		$('#morale_boosts').css('visibility', 'hidden');
		$('#death_penalty').css('visibility', 'hidden');
		$('#areas_of_effect').css('visibility', 'hidden');
		$('#weapon_damage').css('visibility', 'hidden');
		$('#skill_damage').css('visibility', 'visible');
		$('#drops').css('visibility', 'hidden');
		$('#critical_hits').css('visibility', 'hidden');
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
		
		$('#attack_layers').css('visibility', 'hidden');
		$('#conditions').css('visibility', 'hidden');
		$('#morale_boosts').css('visibility', 'hidden');
		$('#death_penalty').css('visibility', 'hidden');
		$('#areas_of_effect').css('visibility', 'hidden');
		$('#weapon_damage').css('visibility', 'hidden');
		$('#skill_damage').css('visibility', 'hidden');
		$('#drops').css('visibility', 'visible');
		$('#critical_hits').css('visibility', 'hidden');
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
		
		$('#attack_layers').css('visibility', 'hidden');
		$('#conditions').css('visibility', 'hidden');
		$('#morale_boosts').css('visibility', 'hidden');
		$('#death_penalty').css('visibility', 'hidden');
		$('#areas_of_effect').css('visibility', 'hidden');
		$('#weapon_damage').css('visibility', 'hidden');
		$('#skill_damage').css('visibility', 'hidden');
		$('#drops').css('visibility', 'hidden');
		$('#critical_hits').css('visibility', 'visible');
	});
});