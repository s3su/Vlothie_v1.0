Ti.API.info("!!getStylistsData.js LOADED");

var jsonURL = "http://be.vlothie.com/json/getStylists.php";

Alloy.Globals.stylistsArray = {};

Ti.API.info("!!---- getStylistsData.js get json data from: " + jsonURL);

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
    Ti.API.info("got data from the network: " + this.responseText);
    var jsonData = JSON.parse(this.responseText);
    var count = 0;
    for (var index in jsonData) {
        Alloy.Globals.stylistsArray[index] = [];
        for (var field in jsonData[index]) Alloy.Globals.stylistsArray[index][field] = jsonData[index][field];
        count++;
    }
    Alloy.Globals.stylistsArray["size"] = count;
};

xhr.open("GET", jsonURL);

xhr.send();