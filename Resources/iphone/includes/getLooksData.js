Ti.API.info("!!getLooksData.js LOADED");

var jsonURL = "http://be.vlothie.com/json/getLooks.php";

Alloy.Globals.looksArray = {};

Ti.API.info("!!---- getLooksData.js get json data from: " + jsonURL);

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
    Ti.API.info("got data from the network: " + this.responseText);
    var jsonData = JSON.parse(this.responseText);
    var count = 0;
    for (var index in jsonData) {
        Alloy.Globals.looksArray[index] = [];
        for (var field in jsonData[index]) Alloy.Globals.looksArray[index][field] = jsonData[index][field];
        count++;
    }
    Alloy.Globals.looksArray["size"] = count;
};

xhr.open("GET", jsonURL);

xhr.send();