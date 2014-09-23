Ti.API.info('!!getArticleData.js LOADED');

var jsonURL = "http://be.vlothie.com/json/getArticles.php";

//Array to store the data from the articles
Alloy.Globals.articlesArray = {};


Ti.API.info('!!---- getArticleData.js get json data from: '+jsonURL);
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
		var articlesArrayLocal = [];
		Ti.API.info('got data from the network: ' + this.responseText);
		var jsonData = JSON.parse(this.responseText);
		//Ti.API.info('got data from: ' + Alloy.Globals.dump(jsonData));
		
		//alert(jsonData[0]['name']);
		
		for(var index in jsonData) {
			Alloy.Globals.articlesArray[index] = [];
			//articlesArray[3]['name'] = 'test';
			//Ti.API.info('Name jsonData[index]: ' + jsonData[index]['title']);
			for(var field in jsonData[index]) {
				//Ti.API.info('Name jsonData['+index+']['+field+']: ' + jsonData[index][field]);
				
				Alloy.Globals.articlesArray[index][field] = jsonData[index][field];
			}
		}
		//Ti.API.info(Alloy.Globals.dump(Alloy.Globals.articlesArray));
		
};

xhr.open("GET",jsonURL);
xhr.send();

