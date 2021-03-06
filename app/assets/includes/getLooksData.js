Ti.API.info('!!getLooksData.js LOADED');

var jsonURL = "http://be.vlothie.com/json/getLooks.php";

//Array to store the data from the articles
Alloy.Globals.looksArray = {};


Ti.API.info('!!---- getLooksData.js get json data from: '+jsonURL);
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
		var looksArrayLocal = [];
		Ti.API.info('got data from the network: ' + this.responseText);
		var jsonData = JSON.parse(this.responseText);
		//Ti.API.info('got data from: ' + Alloy.Globals.dump(jsonData));
		
		//alert(jsonData[0]['name']);
		
		var count = 0;
		for(var index in jsonData) {
			Alloy.Globals.looksArray[index] = [];
			//articlesArray[3]['name'] = 'test';
			//Ti.API.info('Name jsonData[index]: ' + jsonData[index]['title']);
			for(var field in jsonData[index]) {
				//Ti.API.info('Name jsonData['+index+']['+field+']: ' + jsonData[index][field]);
				
				Alloy.Globals.looksArray[index][field] = jsonData[index][field];
			}
			count++;
		}
		Alloy.Globals.looksArray['size'] = count;
		//Ti.API.info('Alloy.Globals.looksArray.[size]: '+Alloy.Globals.looksArray['size']);	
};

xhr.open("GET",jsonURL);
xhr.send();

