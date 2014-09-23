Ti.API.info("!!getArticleData.js LOADED");

var jsonURL = "http://be.vlothie.com/json/getArticles.php";

Alloy.Globals.articlesArray = {};

Ti.API.info("!!---- getArticleData.js get json data from: " + jsonURL);

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
    Ti.API.info("got data from the network: " + this.responseText);
    var jsonData = JSON.parse(this.responseText);
    Ti.API.info("got data from: " + Alloy.Globals.dump(jsonData));
    for (var index in jsonData) {
        Alloy.Globals.articlesArray[index] = [];
        for (var field in jsonData[index]) Alloy.Globals.articlesArray[index][field] = jsonData[index][field];
    }
};

xhr.open("GET", jsonURL);

xhr.send();