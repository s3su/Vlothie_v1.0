Ti.API.info('!!getHomeData.js LOADED');

var jsonURL = "http://be.vlothie.com/json/getHomeData.php";

//Array to store the data from the articles
//Alloy.Globals.homeDataArray = {};
Alloy.Globals.homeDataArray = "getting the data? outside";
var jsonData = '';
//Ti.API.info('!!---- getArticleData.js get json data from: '+jsonURL);
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
	
		//Ti.API.info('got data from the network: ' + this.responseText);
		jsonData = JSON.parse(this.responseText);
		//Ti.API.info(dump(jsonData));
		
		//alert(Alloy.Globals.dump());
		
		Alloy.Globals.homeDataArray = jsonData;
		
};

xhr.open("GET",jsonURL);
xhr.send();


