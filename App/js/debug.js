/*

	debug.js
	themitosan/mscorehdr
	me ajuda

*/

function renderRanges(modo, first) {
	if (modo == 0){ // invent
		var tot = 11;
		var c = 1;
		var a = undefined;
		var anterior = first;
		while (c !== tot){
			console.log(anterior + ", " + parseInt(anterior + 8));
			anterior = anterior + 8;
			c++;
		}
		console.log("Pronto - OK!");
	} else { 		// Ba�
		var tot = 65;
		var c = 1;
		var a = undefined;
		var anterior = first;
		while (c !== tot){
			console.log(anterior + ", " + parseInt(anterior + 8));
			anterior = anterior + 8;
			c++;
		}
		console.log("Pronto - OK!");
	}
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

/// Reload js file
function reloadJsFile(src) {
	console.log("Recarregando Script: " + src);
    $('script[src="' + src + '"]').remove();
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = src;
    head.appendChild(script);
}

/// Undo solvehex
function DEBUG_splitHex(hex){
	var c = 0;
	var fina = "";
	var rw = hex.match(/.{1,2}/g);
	while(c < rw.length){
		fina = fina + rw[c] + " ";
		c++;
	}
	return fina.slice(0, fina.length - 1);
}

function testeInvent(){
	addInvent(0, "10", "fe", 1, "02");
	addInvent(0, "11", "fe", 2, "16");
	addInvent(0, "12", "fe", 3, "17");
	addInvent(0, "13", "fe", 4, "0e");
	addInvent(0, "14", "fe", 5, "01");
	addInvent(0, "15", "fe", 6, "01");
	addInvent(0, "16", "fe", 7, "01");
	addInvent(0, "17", "fe", 8, "01");
	addInvent(0, "18", "fe", 9, "01");
	addInvent(0, "19", "fe", 10, "01");
	$("#JILL-BOX").html("<!-- nothing -->");
	$("#CARLOS-BOX").html("<!-- nothing -->");
	ADD_ITEM_BOX(0, "00", "00", "ff", "01", "00");
	ADD_ITEM_BOX(0, "01", "01", "ff", "01", "00");
	ADD_ITEM_BOX(0, "02", "02", "ff", "01", "00");
	ADD_ITEM_BOX(0, "03", "03", "ff", "01", "00");
	ADD_ITEM_BOX(0, "04", "04", "ff", "01", "00");
	ADD_ITEM_BOX(0, "05", "05", "ff", "01", "00");
	ADD_ITEM_BOX(0, "06", "06", "ff", "01", "00");
	ADD_ITEM_BOX(0, "07", "07", "ff", "01", "00");
	ADD_ITEM_BOX(0, "08", "08", "ff", "01", "00");
	ADD_ITEM_BOX(0, "09", "09", "ff", "01", "00");
	ADD_ITEM_BOX(0, "0a", "0a", "ff", "01", "00");
	ADD_ITEM_BOX(0, "0b", "0b", "ff", "01", "00");
	ADD_ITEM_BOX(0, "0c", "0c", "ff", "01", "00");
	ADD_ITEM_BOX(0, "0d", "0d", "ff", "01", "00");
	ADD_ITEM_BOX(0, "0e", "0e", "ff", "01", "00");
	ADD_ITEM_BOX(0, "0f", "0f", "ff", "01", "00");
	ADD_ITEM_BOX(0, "10", "10", "ff", "01", "00");
	ADD_ITEM_BOX(0, "11", "11", "ff", "01", "00");
	ADD_ITEM_BOX(0, "12", "12", "ff", "01", "00");
	ADD_ITEM_BOX(0, "13", "13", "ff", "01", "00");
	ADD_ITEM_BOX(0, "14", "14", "ff", "01", "00");
	ADD_ITEM_BOX(0, "15", "15", "ff", "01", "00");
	ADD_ITEM_BOX(0, "16", "16", "ff", "01", "00");
	ADD_ITEM_BOX(0, "17", "17", "ff", "01", "00");
	ADD_ITEM_BOX(0, "18", "18", "ff", "01", "00");
	ADD_ITEM_BOX(0, "19", "19", "ff", "01", "00");
	ADD_ITEM_BOX(0, "1a", "1a", "ff", "01", "00");
	ADD_ITEM_BOX(0, "1b", "1b", "ff", "01", "00");
	ADD_ITEM_BOX(0, "1c", "1c", "ff", "01", "00");
	ADD_ITEM_BOX(0, "1d", "1d", "ff", "01", "00");
	ADD_ITEM_BOX(0, "1e", "1e", "ff", "01", "00");
	ADD_ITEM_BOX(0, "1f", "1f", "ff", "01", "00");
	ADD_ITEM_BOX(0, "20", "20", "ff", "01", "00");
	ADD_ITEM_BOX(0, "21", "21", "ff", "01", "00");
	ADD_ITEM_BOX(0, "22", "22", "ff", "01", "00");
	ADD_ITEM_BOX(0, "23", "23", "ff", "01", "00");
	ADD_ITEM_BOX(0, "24", "24", "ff", "01", "00");
	ADD_ITEM_BOX(0, "25", "25", "ff", "01", "00");
	ADD_ITEM_BOX(0, "26", "26", "ff", "01", "00");
	ADD_ITEM_BOX(0, "27", "27", "ff", "01", "00");
	ADD_ITEM_BOX(0, "28", "28", "ff", "01", "00");
	ADD_ITEM_BOX(0, "29", "29", "ff", "01", "00");
	ADD_ITEM_BOX(0, "2a", "2a", "ff", "01", "00");
	ADD_ITEM_BOX(0, "2b", "2b", "ff", "01", "00");
	ADD_ITEM_BOX(0, "2c", "2c", "ff", "01", "00");
	ADD_ITEM_BOX(0, "2d", "2d", "ff", "01", "00");
	ADD_ITEM_BOX(0, "2e", "2e", "ff", "01", "00");
	ADD_ITEM_BOX(0, "2f", "2f", "ff", "01", "00");
	ADD_ITEM_BOX(0, "30", "30", "ff", "01", "00");
	ADD_ITEM_BOX(0, "31", "31", "ff", "01", "00");
	ADD_ITEM_BOX(0, "32", "32", "ff", "01", "00");
	ADD_ITEM_BOX(0, "33", "33", "ff", "01", "00");
	ADD_ITEM_BOX(0, "34", "34", "ff", "01", "00");
	ADD_ITEM_BOX(0, "35", "35", "ff", "01", "00");
	ADD_ITEM_BOX(0, "36", "36", "ff", "01", "00");
	ADD_ITEM_BOX(0, "37", "37", "ff", "01", "00");
	ADD_ITEM_BOX(0, "38", "38", "ff", "01", "00");
	ADD_ITEM_BOX(0, "39", "39", "ff", "01", "00");
	ADD_ITEM_BOX(0, "3a", "3a", "ff", "01", "00");
	ADD_ITEM_BOX(0, "3b", "3b", "ff", "01", "00");
	ADD_ITEM_BOX(0, "3c", "3c", "ff", "01", "00");
	ADD_ITEM_BOX(0, "3d", "3d", "ff", "01", "00");
	ADD_ITEM_BOX(0, "3e", "3e", "ff", "01", "00");
	ADD_ITEM_BOX(0, "3f", "3f", "ff", "01", "00");
	ADD_ITEM_BOX(0, "40", "40", "ff", "01", "00");
	ADD_ITEM_BOX(0, "41", "41", "ff", "01", "00");
	ADD_ITEM_BOX(0, "42", "42", "ff", "01", "00");
	ADD_ITEM_BOX(0, "43", "43", "ff", "01", "00");
	ADD_ITEM_BOX(0, "44", "44", "ff", "01", "00");
	ADD_ITEM_BOX(0, "45", "45", "ff", "01", "00");
	ADD_ITEM_BOX(0, "46", "46", "ff", "01", "00");
	ADD_ITEM_BOX(0, "47", "47", "ff", "01", "00");
	ADD_ITEM_BOX(0, "48", "48", "ff", "01", "00");
	ADD_ITEM_BOX(0, "49", "49", "ff", "01", "00");
	ADD_ITEM_BOX(0, "4a", "4a", "ff", "01", "00");
	ADD_ITEM_BOX(0, "4b", "4b", "ff", "01", "00");
	ADD_ITEM_BOX(0, "4c", "4c", "ff", "01", "00");
	ADD_ITEM_BOX(0, "4d", "4d", "ff", "01", "00");
	ADD_ITEM_BOX(0, "4e", "4e", "ff", "01", "00");
	ADD_ITEM_BOX(0, "4f", "4f", "ff", "01", "00");
	ADD_ITEM_BOX(0, "50", "50", "ff", "01", "00");
	ADD_ITEM_BOX(0, "51", "51", "ff", "01", "00");
	ADD_ITEM_BOX(0, "52", "52", "ff", "01", "00");
	ADD_ITEM_BOX(0, "53", "53", "ff", "01", "00");
	ADD_ITEM_BOX(0, "54", "54", "ff", "01", "00");
	ADD_ITEM_BOX(0, "55", "55", "ff", "01", "00");
	ADD_ITEM_BOX(0, "56", "56", "ff", "01", "00");
	ADD_ITEM_BOX(0, "57", "57", "ff", "01", "00");
	ADD_ITEM_BOX(0, "58", "58", "ff", "01", "00");
	ADD_ITEM_BOX(0, "59", "59", "ff", "01", "00");
	ADD_ITEM_BOX(0, "5a", "5a", "ff", "01", "00");
	ADD_ITEM_BOX(0, "5b", "5b", "ff", "01", "00");
	ADD_ITEM_BOX(0, "5c", "5c", "ff", "01", "00");
	ADD_ITEM_BOX(0, "5d", "5d", "ff", "01", "00");
	ADD_ITEM_BOX(0, "5e", "5e", "ff", "01", "00");
	ADD_ITEM_BOX(0, "5f", "5f", "ff", "01", "00");
	ADD_ITEM_BOX(0, "60", "60", "ff", "01", "00");
	ADD_ITEM_BOX(0, "61", "61", "ff", "01", "00");
	ADD_ITEM_BOX(0, "62", "62", "ff", "01", "00");
	ADD_ITEM_BOX(0, "63", "63", "ff", "01", "00");
	ADD_ITEM_BOX(0, "64", "64", "ff", "01", "00");
	ADD_ITEM_BOX(0, "65", "65", "ff", "01", "00");
	ADD_ITEM_BOX(0, "66", "66", "ff", "01", "00");
	ADD_ITEM_BOX(0, "67", "67", "ff", "01", "00");
	ADD_ITEM_BOX(0, "68", "68", "ff", "01", "00");
	ADD_ITEM_BOX(0, "69", "69", "ff", "01", "00");
	ADD_ITEM_BOX(0, "6a", "6a", "ff", "01", "00");
	ADD_ITEM_BOX(0, "6b", "6b", "ff", "01", "00");
	ADD_ITEM_BOX(0, "6c", "6c", "ff", "01", "00");
	ADD_ITEM_BOX(0, "6d", "6d", "ff", "01", "00");
	ADD_ITEM_BOX(0, "6e", "6e", "ff", "01", "00");
	ADD_ITEM_BOX(0, "6f", "6f", "ff", "01", "00");
	ADD_ITEM_BOX(0, "70", "70", "ff", "01", "00");
	ADD_ITEM_BOX(0, "71", "71", "ff", "01", "00");
	ADD_ITEM_BOX(0, "72", "72", "ff", "01", "00");
	ADD_ITEM_BOX(0, "73", "73", "ff", "01", "00");
	ADD_ITEM_BOX(0, "74", "74", "ff", "01", "00");
	ADD_ITEM_BOX(0, "75", "75", "ff", "01", "00");
	ADD_ITEM_BOX(0, "76", "76", "ff", "01", "00");
	ADD_ITEM_BOX(0, "77", "77", "ff", "01", "00");
	ADD_ITEM_BOX(0, "78", "78", "ff", "01", "00");
	ADD_ITEM_BOX(0, "79", "79", "ff", "01", "00");
	ADD_ITEM_BOX(0, "7a", "7a", "ff", "01", "00");
	ADD_ITEM_BOX(0, "7b", "7b", "ff", "01", "00");
	ADD_ITEM_BOX(0, "7c", "7c", "ff", "01", "00");
	ADD_ITEM_BOX(0, "7d", "7d", "ff", "01", "00");
	ADD_ITEM_BOX(0, "7e", "7e", "ff", "01", "00");
	ADD_ITEM_BOX(0, "7f", "7f", "ff", "01", "00");
	ADD_ITEM_BOX(0, "80", "80", "ff", "01", "00");
	ADD_ITEM_BOX(0, "81", "81", "ff", "01", "00");
	ADD_ITEM_BOX(0, "82", "82", "ff", "01", "00");
	ADD_ITEM_BOX(0, "83", "83", "ff", "01", "00");
	ADD_ITEM_BOX(0, "84", "84", "ff", "01", "00");
	ADD_ITEM_BOX(0, "85", "85", "ff", "01", "00");
	//
	ADD_ITEM_BOX(1, 255, "00", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "01", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "02", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "03", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "04", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "05", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "06", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "07", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "08", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "09", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "0a", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "0b", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "0c", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "0d", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "0e", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "0f", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "10", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "11", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "12", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "13", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "14", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "15", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "16", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "17", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "18", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "19", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "1a", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "1b", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "1c", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "1d", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "1e", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "1f", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "20", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "21", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "22", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "23", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "24", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "25", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "26", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "27", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "28", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "29", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "2a", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "2b", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "2c", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "2d", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "2e", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "2f", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "30", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "31", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "32", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "33", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "34", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "35", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "36", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "37", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "38", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "39", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "3a", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "3b", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "3c", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "3d", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "3e", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "3f", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "40", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "41", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "42", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "43", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "44", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "45", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "46", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "47", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "48", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "49", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "4a", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "4b", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "4c", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "4d", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "4e", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "4f", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "50", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "51", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "52", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "53", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "54", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "55", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "56", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "57", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "58", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "59", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "5a", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "5b", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "5c", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "5d", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "5e", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "5f", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "60", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "61", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "62", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "63", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "64", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "65", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "66", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "67", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "68", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "69", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "6a", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "6b", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "6c", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "6d", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "6e", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "6f", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "70", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "71", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "72", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "73", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "74", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "75", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "76", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "77", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "78", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "79", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "7a", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "7b", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "7c", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "7d", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "7e", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "7f", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "80", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "81", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "82", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "83", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "84", "ff", "01", "00");
	ADD_ITEM_BOX(1, 255, "85", "ff", "01", "00");
}