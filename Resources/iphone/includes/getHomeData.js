Ti.API.info("!!getHomeData.js LOADED");

var jsonURL = "http://be.vlothie.com/json/getHomeData.php";

Alloy.Globals.homeDataArray = {};

var jsonData = "";

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
    jsonData = JSON.parse(this.responseText);
    Alloy.Globals.homeDataArray = jsonData;
};

xhr.open("GET", jsonURL);

xhr.send();