function dump(arr, level) {
    var dumped_text = "";
    level || (level = 0);
    var level_padding = "";
    for (var j = 0; level + 1 > j; j++) level_padding += "    ";
    if ("object" == typeof arr) for (var item in arr) {
        var value = arr[item];
        if ("object" == typeof value) {
            dumped_text += level_padding + "'" + item + "' ...\n";
            dumped_text += dump(value, level + 1);
        } else dumped_text += level_padding + "'" + item + "' => \"" + value + '"\n';
    } else dumped_text = "===>" + arr + "<===(" + typeof arr + ")";
    return dumped_text;
}

Ti.API.info("!!getArticleData.js LOADED");

var jsonURL = "http://be.vlothie.com/json/getArticles.php";

var articlesArray = [];

articlesArray[3] = [];

Ti.API.info("!!---- getArticleData.js get json data from: " + jsonURL);

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
    Ti.API.info("got data from the network: " + this.responseText);
    var jsonData = JSON.parse(this.responseText);
    for (var index in jsonData) {
        articlesArray[index] = [];
        for (var field in jsonData[index]) articlesArray[index][field] = jsonData[index][field];
    }
};

xhr.open("GET", jsonURL);

xhr.send();

alert(dump(articlesArray));