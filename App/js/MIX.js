/*
	R3ditor - MIX.js
	Por mitosan/mscore/misto_quente/mscorehdr

	29 41 00 3D 46 51 40 41 00 3D 00 4F 41 4A 50 45 4E 00 3E 41 49 
	00 3F 4B 49 45 43 4B 00 49 41 4F 49 4B 00 4D 51 3D 4A 40 4B 00 
	52 41 46 4B 00 4B 00 49 51 4A 40 4B 00 40 4B 00 46 41 45 50 4B 
	00 4D 51 41 00 41 48 41 00 4F 41 49 4C 4E 41 00 42 4B 45 01 00
*/
var MIX_Database;
var MIX_arquivoBruto;
var MIX_currentFunction;
var MIX_TOTAL_00 = 0;
var MIX_TOTAL_01 = 0;
var MIX_TOTAL_02 = 0;
var MIX_TOTAL_03 = 0;
var MIX_TOTAL_04 = 0;
var MIX_TOTAL_05 = 0;
var MIX_TOTAL_06 = 0;
/*
	Functions
*/
function MIX_loadExe(file){
	var c = 0;
	var end_pos = 16;
	var start_pos = 0;
	var totalMixes = 125;
	ORIGINAL_FILENAME = file;
	MIX_arquivoBruto = fs.readFileSync(file, 'hex');
	MIX_clearHolders();
	MIX_Database = MIX_arquivoBruto.slice(RANGES['MIX_Slice_Pos'][0], RANGES['MIX_Slice_Pos'][1]);
	while (c < totalMixes){
		MIX_decompileMix(c, start_pos, end_pos, false);
		start_pos = parseInt(start_pos + 16);
		end_pos = parseInt(end_pos + 16);
		c++;
	}
	addLog('log', 'MIX - File loaded sucessfully!');
	addLog('log', 'File: <font class="user-can-select">' + file + '</font>');
	main_menu(8);
}
function MIX_decompileMix(id, start, end, useLocalStorage){
	var hex_temp;
	var MIX_HTML_TEMPLATE;
	if (useLocalStorage === false){
		hex_temp = MIX_Database.slice(start, end);
		localStorage.setItem('MIX_ID_' + id, hex_temp);
	} else {
		hex_temp = localStorage.getItem('MIX_ID_' + id);
	}
	var comb_function = hex_temp.slice(RANGES['MIX_HEX_currentFunction'][0], RANGES['MIX_HEX_currentFunction'][1]);
	var comb_item_a   = hex_temp.slice(RANGES['MIX_Combine_Item_A'][0],	  	 RANGES['MIX_Combine_Item_A'][1]);
	var comb_item_b   = hex_temp.slice(RANGES['MIX_Combine_Item_B'][0],   	 RANGES['MIX_Combine_Item_B'][1]);
	var comb_value_a  = hex_temp.slice(RANGES['MIX_Combine_Value_A'][0],  	 RANGES['MIX_Combine_Value_A'][1]);
	var comb_value_b  = hex_temp.slice(RANGES['MIX_Combine_Value_B'][0],  	 RANGES['MIX_Combine_Value_B'][1]);
	var comb_offset   = hex_temp.slice(RANGES['MIX_Combine_Offset'][0],   	 RANGES['MIX_Combine_Offset'][1]);
	/*
		00: Reloading / Sum
		V1 & V2 Always gonna be 00
	*/
	if (comb_function === '00'){
		MIX_TOTAL_00++;
		var comb_function_lbl = MIX_function_types[comb_function];
		var comb_item_a_lbl   = ITEM[comb_item_a][0];
		var comb_item_b_lbl   = ITEM[comb_item_b][0];
		MIX_HTML_TEMPLATE 	  = '<div class="RDT-Item MIX-func-sum-bg" id="MIX_combination_' + id + '"><input type="button" class="btn-remover-comando RDT_modifyBtnFix" id="MIX_editBtn_' + id + '" value="Modify" onclick="MIX_showEdit(0, ' + id + ', \'' + hex_temp + '\');">' + 
							  '(' + MIX_TOTAL_00 + ') Mix ID: ' + id + ' - Function: ' + comb_function_lbl + ' (<font class="user-can-select">' + comb_function + '</font>)<div class="menu-separador"></div>Weapon: <font class="MIX_fixLabel-2">' + 
							  comb_item_a_lbl + '</font><br>Ammo: <font class="MIX_fixLabel-2">' + comb_item_b_lbl + '</font><div class="menu-separador"></div>Hex: <font class="user-can-select">' + hex_temp.toUpperCase() + '</font></div>';
	}
	// 01: Combine
	if (comb_function === '01'){
		MIX_TOTAL_01++;
		var comb_function_lbl = MIX_function_types[comb_function];
		var comb_item_a_lbl   = ITEM[comb_item_a][0];
		var comb_item_b_lbl   = ITEM[comb_item_b][0];
		var comb_value_a_lbl  = ITEM[comb_value_a][0];
		var comb_value_b_lbl  = parseInt(comb_value_b, 16);
		MIX_HTML_TEMPLATE 	  = '<div class="RDT-Item MIX-func-comb-bg" id="MIX_combination_' + id + '"><input type="button" class="btn-remover-comando RDT_modifyBtnFix" id="MIX_editBtn_' + id + '" value="Modify" onclick="MIX_showEdit(0, ' + id + ', \'' + hex_temp + '\');">' + 
							  '(' + MIX_TOTAL_01 + ') Mix ID: ' + id + ' - Function: ' + comb_function_lbl + ' (<font class="user-can-select">' + comb_function + '</font>)<div class="menu-separador"></div>Item A: <font class="MIX_fixLabel">' + 
							  comb_item_a_lbl + '</font><br>Item B: <font class="MIX_fixLabel">' + comb_item_b_lbl + '</font><br>Result: <font class="MIX_fixLabel">' + comb_value_a_lbl + '</font><br>Quantity: ' + 
							  '<font class="MIX_fixLabel user-can-select">' + comb_value_b_lbl + '</font><div class="menu-separador"></div>Hex: <font class="user-can-select">' + hex_temp.toUpperCase() + '</font></div>';
	}
	// 02: Reloading Tool
	if (comb_function === '02'){
		MIX_TOTAL_02++;
		var comb_function_lbl = MIX_function_types[comb_function];
		var comb_item_a_lbl   = ITEM[comb_item_a][0];
		var comb_item_b_lbl   = ITEM[comb_item_b][0];
		var comb_value_a_lbl  = ITEM[comb_value_a][0];
		var comb_value_b_lbl  = parseInt(comb_value_b, 16);
		MIX_HTML_TEMPLATE 	  = '<div class="RDT-Item MIX-func-reloading-bg" id="MIX_combination_' + id + '"><input type="button" class="btn-remover-comando RDT_modifyBtnFix" id="MIX_editBtn_' + id + '" value="Modify" onclick="MIX_showEdit(0, ' + id + ', \'' + hex_temp + '\');">' + 
							  '(' + MIX_TOTAL_02 + ') Mix ID: ' + id + ' - Function: ' + comb_function_lbl + ' (<font class="user-can-select">' + comb_function + '</font>)<div class="menu-separador"></div>Item A: <font class="MIX_fixLabel">' + 
							  comb_item_a_lbl + '</font><br>Item B: <font class="MIX_fixLabel">' + comb_item_b_lbl + '</font><br>Result: <font class="MIX_fixLabel">' + comb_value_a_lbl + '</font><br>Quantity: ' + 
							  '<font class="MIX_fixLabel user-can-select">' + comb_value_b_lbl + '</font><div class="menu-separador"></div>Hex: <font class="user-can-select">' + hex_temp.toUpperCase() + '</font></div>';
	}
	/*
		03: Change Bullet Function (Handgun & Magnum)
		V2 always gonna be 00
	*/
	if (comb_function === '03'){
		MIX_TOTAL_03++;
		var comb_function_lbl = MIX_function_types[comb_function];
		var comb_item_a_lbl   = ITEM[comb_item_a][0];
		var comb_item_b_lbl   = ITEM[comb_item_b][0];
		var comb_value_a_lbl  = ITEM[comb_value_a][0];
		MIX_HTML_TEMPLATE 	  = '<div class="RDT-Item MIX-func-bullet-handMag-bg" id="MIX_combination_' + id + '"><input type="button" class="btn-remover-comando RDT_modifyBtnFix" id="MIX_editBtn_' + id + '" value="Modify" onclick="MIX_showEdit(0, ' + id + ', \'' + hex_temp + '\');">' + 
							  '(' + MIX_TOTAL_03 + ') Mix ID: ' + id + ' - Function: ' + comb_function_lbl + ' (<font class="user-can-select">' + comb_function + '</font>)<div class="menu-separador"></div>Weapon: <font class="MIX_fixLabel-4">' + 
							  comb_item_a_lbl + '</font><br>Ammo: <font class="MIX_fixLabel-4">' + comb_item_b_lbl + '</font><br>New Weapon: <font class="MIX_fixLabel-4">' + comb_value_a_lbl + '</font><div class="menu-separador">' + 
							  '</div>Hex: <font class="user-can-select">' + hex_temp.toUpperCase() + '</font></div>';
	}
	// 04: Change Bullet Function (G. Launcher)
	if (comb_function === '04'){
		MIX_TOTAL_04++;
		var comb_function_lbl = MIX_function_types[comb_function];
		var comb_item_a_lbl   = ITEM[comb_item_a][0];
		var comb_item_b_lbl   = ITEM[comb_item_b][0];
		var comb_value_a_lbl  = ITEM[comb_value_a][0];
		var comb_value_b_lbl  = ITEM[comb_value_b][0];
		MIX_HTML_TEMPLATE 	  = '<div class="RDT-Item MIX-func-bullet-gLauncher-bg" id="MIX_combination_' + id + '"><input type="button" class="btn-remover-comando RDT_modifyBtnFix" id="MIX_editBtn_' + id + '" value="Modify" onclick="MIX_showEdit(0, ' + id + ', \'' + hex_temp + '\');">' + 
							  '(' + MIX_TOTAL_04 + ') Mix ID: ' + id + ' - Function: ' + comb_function_lbl + ' (<font class="user-can-select">' + comb_function + '</font>)<div class="menu-separador"></div>Weapon: <font class="MIX_fixLabel-3">' + comb_item_a_lbl + '</font>' + 
							  '<br>Ammo: <font class="MIX_fixLabel-3">' + comb_item_b_lbl + '</font><br>New Weapon: <font class="MIX_fixLabel-3">' + comb_value_a_lbl + '</font><br>New Ammo: <font class="MIX_fixLabel-3">' + comb_value_b_lbl + '</font></font><div class="menu-separador"></div>Hex: ' + 
							  '<font class="user-can-select">' + hex_temp.toUpperCase() + '</font></div>';
	}
	/*
		05: Combine Powder W. Granade Rouds
		Item B Always disappears
	*/
	if (comb_function === '05'){
		MIX_TOTAL_05++;
		var comb_function_lbl = MIX_function_types[comb_function];
		var comb_item_a_lbl   = ITEM[comb_item_a][0];
		var comb_item_b_lbl   = ITEM[comb_item_b][0];
		var comb_value_a_lbl  = ITEM[comb_value_a][0];
		var comb_value_b_lbl  = parseInt(comb_value_b, 16);
		MIX_HTML_TEMPLATE 	  = '<div class="RDT-Item MIX-func-bullet-powderGL-bg" id="MIX_combination_' + id + '"><input type="button" class="btn-remover-comando RDT_modifyBtnFix" id="MIX_editBtn_' + id + '" value="Modify" onclick="MIX_showEdit(0, ' + id + ', \'' + hex_temp + '\');">' + 
							  '(' + MIX_TOTAL_05 + ') Mix ID: ' + id + ' - Function: ' + comb_function_lbl + ' (<font class="user-can-select">' + comb_function + '</font>)<div class="menu-separador"></div>Ammo: <font class="MIX_fixLabel-5">' + comb_item_a_lbl + '</font>' + 
							  '<br>G. Powder: <font class="MIX_fixLabel-5">' + comb_item_b_lbl + '</font><br>New Ammo: <font class="MIX_fixLabel-5">' + comb_value_a_lbl + '</font><br>Quantity: <font class="MIX_fixLabel-5">' + comb_value_b_lbl + '</font></font><div class="menu-separador"></div>Hex: ' + 
							  '<font class="user-can-select">' + hex_temp.toUpperCase() + '</font></div>';
	}
	/*
		06: Infinite Ammo
		Item B dissapears, Item a becomes infinite
		V1, V2 = 00
	*/
	if (comb_function === '06'){
		MIX_TOTAL_06++;
		console.log(comb_item_a + ' - ' + comb_item_b);
		var comb_function_lbl = MIX_function_types[comb_function];
		var comb_item_a_lbl   = ITEM[comb_item_a][0];
		var comb_item_b_lbl   = ITEM[comb_item_b][0];
		MIX_HTML_TEMPLATE 	  = '<div class="RDT-Item MIX-func-infBullets-bg" id="MIX_combination_' + id + '"><input type="button" class="btn-remover-comando RDT_modifyBtnFix" id="MIX_editBtn_' + id + '" value="Modify" onclick="MIX_showEdit(0, ' + id + ', \'' + hex_temp + '\');">' + 
							  '(' + MIX_TOTAL_06 + ') Mix ID: ' + id + ' - Function: ' + comb_function_lbl + ' (<font class="user-can-select">' + comb_function + '</font>)<div class="menu-separador"></div>New Infinite Item: <font class="MIX_fixLabel-6">' + comb_item_a_lbl + '</font>' + 
							  '<br>Infinite Ammo: <font class="MIX_fixLabel-6">' + comb_item_b_lbl + '</font><div class="menu-separador"></div>Hex: <font class="user-can-select">' + hex_temp.toUpperCase() + '</font></div>';
	}
	$('#MIX-holder-' + (parseInt(comb_function) + 1)).append(MIX_HTML_TEMPLATE);
}
function MIX_convertCombination(mix_id, btn){
	var newType = document.getElementById('MIX_edit_function_' + btn).value;
	if (newType !== MIX_currentFunction){
		var NEW_HEX;
		if (newType === '00'){
			NEW_HEX = '0002150000000000';
		}
		if (newType === '01'){
			NEW_HEX = '0121212401000000';
		}
		if (newType === '02'){
			NEW_HEX = '028261150f000000';
		}
		if (newType === '03'){
			NEW_HEX = '0311150200000000';
		}
		if (newType === '04'){
			NEW_HEX = '040918061b000000';
		}
		if (newType === '05'){
			NEW_HEX = '05186d1b12000000';
		}
		if (newType === '06'){
			NEW_HEX = '06096e0000000000';
		}
		localStorage.setItem('MIX_ID_' + mix_id, NEW_HEX);
		$('#MIX_btn_SAVE_EXE').css({'display': 'inline'});
		MIX_updateList();
		MIX_showEdit(1);
	} else {
		addLog('warn', 'WARN - You can\'t convert this mix to current type!');
	}
	scrollLog();
}
function MIX_updateList(){
	var c = 0;
	MIX_TOTAL_00 = 0;
	MIX_TOTAL_01 = 0;
	MIX_TOTAL_02 = 0;
	MIX_TOTAL_03 = 0;
	MIX_TOTAL_04 = 0;
	MIX_TOTAL_05 = 0;
	MIX_TOTAL_06 = 0;
	MIX_clearHolders();
	while (c < 125){
		MIX_decompileMix(c, 0, 0, true);
		c++;
	}
	MIX_updateMainTabsTitle();
	if (MIX_TOTAL_00 === 0){
		$('#MIX-holder-1').append(MIX_404);
	}
	if (MIX_TOTAL_01 === 0){
		$('#MIX-holder-2').append(MIX_404);
	}
	if (MIX_TOTAL_02 === 0){
		$('#MIX-holder-3').append(MIX_404);
	}
	if (MIX_TOTAL_03 === 0){
		$('#MIX-holder-4').append(MIX_404);
	}
	if (MIX_TOTAL_04 === 0){
		$('#MIX-holder-5').append(MIX_404);
	}
	if (MIX_TOTAL_05 === 0){
		$('#MIX-holder-6').append(MIX_404);
	}
	if (MIX_TOTAL_06 === 0){
		$('#MIX-holder-7').append(MIX_404);
	}
}
function MIX_applyChanges(id, funcType){
	var Item_A;
	var Item_B;
	var Item_C;
	var Item_D;
	var Quanti;
	var MIX_FINAL_HEX;
	// 00: Reload / Sum
	if (funcType === '00'){
		Item_A = document.getElementById('MIX_00_edit_Weapon').value.toLowerCase();
		Item_B = document.getElementById('MIX_00_edit_Ammo').value.toLowerCase();
		MIX_FINAL_HEX = '00' + Item_A + Item_B + '0000000000';
	}
	// 01: Combine
	if (funcType === '01'){
		Item_A = document.getElementById('MIX_01_edit_item_A').value.toLowerCase();
		Item_B = document.getElementById('MIX_01_edit_item_B').value.toLowerCase();
		Item_C = document.getElementById('MIX_01_edit_item_Result').value.toLowerCase();
		Quanti = MEMORY_JS_fixVars(parseInt(document.getElementById('MIX_01_edit_item_Quantity').value).toString(16), 2);
		MIX_FINAL_HEX = '01' + Item_A + Item_B + Item_C + Quanti + '000000';
	}
	// 02: Reloading Tool
	if (funcType === '02'){
		Item_A = document.getElementById('MIX_02_edit_reloadingItem').value.toLowerCase();
		Item_B = document.getElementById('MIX_02_edit_item').value.toLowerCase();
		Item_C = document.getElementById('MIX_02_edit_item_Result').value.toLowerCase();
		Quanti = MEMORY_JS_fixVars(parseInt(document.getElementById('MIX_02_edit_item_Quantity').value).toString(16), 2);
		MIX_FINAL_HEX = '02' + Item_A + Item_B + Item_C + Quanti + '000000';
	}
	// 03: Change Bullet Type (H.G. / Magnum)
	if (funcType === '03'){
		Item_A = document.getElementById('MIX_03_edit_handMag_weapon').value.toLowerCase();
		Item_B = document.getElementById('MIX_03_edit_handMag_ammo').value.toLowerCase();
		Item_C = document.getElementById('MIX_03_edit_item_Result').value.toLowerCase();
		MIX_FINAL_HEX = '03' + Item_A + Item_B + Item_C + '00000000';
	}
	// 04: Change Bullet Type (G. Launcher)
	if (funcType === '04'){
		Item_A = document.getElementById('MIX_04_edit_GL_weapon').value.toLowerCase();
		Item_B = document.getElementById('MIX_04_edit_GL_ammo').value.toLowerCase();
		Item_C = document.getElementById('MIX_04_edit_GL_newWeapon').value.toLowerCase();
		Item_D = document.getElementById('MIX_04_edit_GL_newAmmo').value.toLowerCase();
		MIX_FINAL_HEX = '04' + Item_A + Item_B + Item_C + Item_D + '000000';
	}
	// 05: Combine Powder + G. Rounds
	if (funcType === '05'){
		Item_A = document.getElementById('MIX_05_edit_powderGl_ammo').value.toLowerCase();
		Item_B = document.getElementById('MIX_05_edit_powderGl_powder').value.toLowerCase();
		Item_C = document.getElementById('MIX_05_edit_powderGl_newAmmo').value.toLowerCase();
		Quanti = MEMORY_JS_fixVars(parseInt(document.getElementById('MIX_edit_powderGl_quantity').value).toString(16), 2);
		MIX_FINAL_HEX = '05' + Item_A + Item_B + Item_C + Quanti + '000000';
	}
	if (funcType === '06'){
		Item_A = document.getElementById('MIX_06_edit_infinite_item').value.toLowerCase();
		Item_B = document.getElementById('MIX_06_edit_infinite_inf').value.toLowerCase();
		MIX_FINAL_HEX = '06' + Item_A + Item_B + '0000000000';
	}
	// Finish
	localStorage.setItem('MIX_ID_' + id, MIX_FINAL_HEX);
	$('#MIX_btn_SAVE_EXE').css({'display': 'inline'});
	MIX_updateList();
	MIX_showEdit(1);
}
function MIX_saveOnExe(){
	if (MIX_arquivoBruto !== undefined){
		MIX_Backup();
		var c = 0;
		var t = 125;
		var MIX_NEW_DATABASE = '';
		while (c < 125){
			MIX_NEW_DATABASE = MIX_NEW_DATABASE + localStorage.getItem('MIX_ID_' + c);
			c++;
		}
		var RE3_EXE_START = MIX_arquivoBruto.slice(0, RANGES['MIX_Slice_Pos'][0]);
		var RE3_EXE_END = MIX_arquivoBruto.slice(RANGES['MIX_Slice_Pos'][1], MIX_arquivoBruto.length);
		var NEW_FILE = RE3_EXE_START + MIX_NEW_DATABASE + RE3_EXE_END;
		try {
			fs.writeFileSync(ORIGINAL_FILENAME, NEW_FILE, 'hex');
			addLog('log', 'MIX - The file was saved successfull!');
			addLog('log', 'Path: <font class="user-can-select">' + ORIGINAL_FILENAME + '</font>');
			log_separador();
			$('#MIX_btn_SAVE_EXE').css({'display': 'none'});
		} catch (err){
			addLog('error', 'ERROR - Unable to save EXE!');
			addLog('error', 'Info: ' + err);
		}
	}
	scrollLog();
}
function MIX_Backup(){
	R3DITOR_CHECK_FILES_AND_DIRS();
	if (MIX_arquivoBruto !== undefined){
		try{
			var backup_name = getFileName(ORIGINAL_FILENAME).toUpperCase() + '- MIX -' + currentTime() + '.exe';
			fs.writeFileSync(APP_PATH + '\\Backup\\EXE\\' + backup_name, MIX_arquivoBruto, 'hex');
			log_separador();
			addLog('log', 'INFO - The backup was made successfully! - File: ' + backup_name);
			addLog('log', 'Path: <font class="user-can-select">' + APP_PATH + '\\Backup\\EXE\\' + backup_name + '</font>');
			log_separador();
		} catch (err){
			addLog('error', 'ERROR - Unable to make backup! - ' + err);
		}
	} else {
		addLog('error', 'ERROR - You can\'t make a backup if you haven\'t opened a file yet!');
	}
}