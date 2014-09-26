Ti.API.info("!!getWeatherData.js LOADED");

var jsonURL = "http://be.vlothie.com/json/getWeatherData.php";

Alloy.Globals.weatherArray = {};

Alloy.Globals.weatherArray["temp_C"] = "--";

Alloy.Globals.weatherArray["weatherCodeC"] = "0";

var jsonData = "";

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
    jsonData = JSON.parse(this.responseText);
    Alloy.Globals.weatherArray = jsonData;
};

xhr.open("GET", jsonURL);

xhr.send();