Ti.API.info("!!getTrendsData.js LOADED");

var jsonURL = "http://be.vlothie.com/json/getTrends.php";

Alloy.Globals.trendsArray = {};

Ti.API.info("!!---- getTrendsData.js get json data from: " + jsonURL);

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
    Ti.API.info("got data from the network: " + this.responseText);
    var jsonData = JSON.parse(this.responseText);
    for (var index in jsonData) {
        Alloy.Globals.trendsArray[index] = [];
        for (var field in jsonData[index]) Alloy.Globals.trendsArray[index][field] = jsonData[index][field];
    }
};

xhr.open("GET", jsonURL);

xhr.send();