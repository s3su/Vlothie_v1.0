Ti.API.info("!!getLooksData.js LOADED");

var jsonURL = "http://be.vlothie.com/json/getLooks.php";

Alloy.Globals.looksArray = {};

Ti.API.info("!!---- getLooksData.js get json data from: " + jsonURL);

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
    Ti.API.info("got data from the network: " + this.responseText);
    var jsonData = JSON.parse(this.responseText);
    Ti.API.info("got data from: " + Alloy.Globals.dump(jsonData));
    for (var index in jsonData) {
        Alloy.Globals.looksArray[index] = [];
        for (var field in jsonData[index]) {
            Ti.API.info("Name jsonData[" + index + "][" + field + "]: " + jsonData[index][field]);
            Alloy.Globals.looksArray[index][field] = jsonData[index][field];
        }
    }
    Ti.API.info(Alloy.Globals.dump(Alloy.Globals.looksArray));
};

xhr.open("GET", jsonURL);

xhr.send();