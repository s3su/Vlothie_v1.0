Ti.API.info('!!getWeatherData.js LOADED');

var jsonURL = "http://be.vlothie.com/json/getWeatherData.php";

//Array to store the data from the articles
Alloy.Globals.weatherArray = {};
Alloy.Globals.weatherArray['temp_C'] = '--';
Alloy.Globals.weatherArray['weatherCodeC'] = "0";
//Alloy.Globals.homeWeatherArray = "getting the data? outside";
var jsonData = '';
//Ti.API.info('!!---- getArticleData.js get json data from: '+jsonURL);
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
	
		//Ti.API.info('got data from the network: ' + this.responseText);
		jsonData = JSON.parse(this.responseText);
		//Ti.API.info(dump(jsonData));
		
		//alert(Alloy.Globals.dump());
		
		Alloy.Globals.weatherArray = jsonData;
		
};

xhr.open("GET",jsonURL);
xhr.send();


