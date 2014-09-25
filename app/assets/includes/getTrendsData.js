Ti.API.info('!!getTrendsData.js LOADED');

var jsonURL = "http://be.vlothie.com/json/getTrends.php";

//Array to store the data from the articles
Alloy.Globals.trendsArray = {};


Ti.API.info('!!---- getTrendsData.js get json data from: '+jsonURL);
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
		var looksArrayLocal = [];
		Ti.API.info('got data from the network: ' + this.responseText);
		var jsonData = JSON.parse(this.responseText);
		//Ti.API.info('got data from: ' + Alloy.Globals.dump(jsonData));
		
		//alert(jsonData[0]['name']);
		
		for(var index in jsonData) {
			Alloy.Globals.trendsArray[index] = [];
			//articlesArray[3]['name'] = 'test';
			//Ti.API.info('Name jsonData[index]: ' + jsonData[index]['title']);
			for(var field in jsonData[index]) {
				//Ti.API.info('Name jsonData['+index+']['+field+']: ' + jsonData[index][field]);
				
				Alloy.Globals.trendsArray[index][field] = jsonData[index][field];
			}
		}
		//Ti.API.info(Alloy.Globals.dump(Alloy.Globals.trendsArray));
		
};

xhr.open("GET",jsonURL);
xhr.send();

