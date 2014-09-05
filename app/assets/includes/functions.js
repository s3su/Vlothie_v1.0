Ti.API.info('!!functions.js LOADED');

Alloy.Globals.dump = function(arr,level){
    var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += Alloy.Globals.dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Stings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
};

Alloy.Globals.getJsonData = function (jsonURL){
	
	var defaultData = "";
	//Ti.API.info('!!---- getDeafultData.js get json data from: '+jsonURL);
	var xhr = Titanium.Network.createHTTPClient();
	defaultData = xhr.onload = function() {
		Ti.API.info('got data from the network: ' + this.responseText);
		defaultData = JSON.parse(this.responseText);
		//Ti.API.info(dump(defaultData));
		
	};

	xhr.open("GET",jsonURL);
	xhr.send();
	xhr.getResponseText();
	alert(defaultData);
	Ti.API.info('return got data from the network: ' + xhr.responseText);
	return xhr.responseText;
};

Alloy.Globals.clearCollectionData = function (tableName){
	
};

Alloy.Globals.updateFIXDataOfTable = function (tableName){
	Ti.API.info('Going to Update: ' + tableName);
	clearCollectionData(tableName);
	var jsonURL = "?tableName="+tableName;
	var tableArray = getJsonData(jsonURL);
	tableArray.forEach(function(eachRow){
	    	var modelElement = Alloy.createModel(tableName);
	    	eachRow.forEach(function(eachField, index){ //FIND INDEX
	    		modelElement.set({index: eachField}); //SET INDEX with EACHFIELD VALUE
	    	});
	    	modelElement.save();
	});
	
};



Alloy.Globals.getLocation = function (tableName){
	Ti.API.info('Going to Update: ' + tableName);
	clearCollectionData(tableName);
	var jsonURL = "?tableName="+tableName;
	var tableArray = getJsonData(jsonURL);
	tableArray.forEach(function(eachRow){
	    	var modelElement = Alloy.createModel(tableName);
	    	eachRow.forEach(function(eachField, index){ //FIND INDEX
	    		modelElement.set({index: eachField}); //SET INDEX with EACHFIELD VALUE
	    	});
	    	modelElement.save();
	});
	
};
