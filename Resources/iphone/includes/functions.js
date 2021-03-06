Ti.API.info("!!functions.js LOADED");

Alloy.Globals.dump = function(arr, level) {
    var dumped_text = "";
    level || (level = 0);
    var level_padding = "";
    for (var j = 0; level + 1 > j; j++) level_padding += "    ";
    if ("object" == typeof arr) for (var item in arr) {
        var value = arr[item];
        if ("object" == typeof value) {
            dumped_text += level_padding + "'" + item + "' ...\n";
            dumped_text += Alloy.Globals.dump(value, level + 1);
        } else dumped_text += level_padding + "'" + item + "' => \"" + value + '"\n';
    } else dumped_text = "===>" + arr + "<===(" + typeof arr + ")";
    return dumped_text;
};

Alloy.Globals.getJsonData = function(jsonURL) {
    var defaultData = "";
    var xhr = Titanium.Network.createHTTPClient();
    defaultData = xhr.onload = function() {
        Ti.API.info("got data from the network: " + this.responseText);
        defaultData = JSON.parse(this.responseText);
    };
    xhr.open("GET", jsonURL);
    xhr.send();
    xhr.getResponseText();
    alert(defaultData);
    Ti.API.info("return got data from the network: " + xhr.responseText);
    return xhr.responseText;
};

Alloy.Globals.clearCollectionData = function() {};

Alloy.Globals.updateFIXDataOfTable = function(tableName) {
    Ti.API.info("Going to Update: " + tableName);
    clearCollectionData(tableName);
    var jsonURL = "?tableName=" + tableName;
    var tableArray = getJsonData(jsonURL);
    tableArray.forEach(function(eachRow) {
        var modelElement = Alloy.createModel(tableName);
        eachRow.forEach(function(eachField) {
            modelElement.set({
                index: eachField
            });
        });
        modelElement.save();
    });
};

Alloy.Globals.getLocation = function(tableName) {
    Ti.API.info("Going to Update: " + tableName);
    clearCollectionData(tableName);
    var jsonURL = "?tableName=" + tableName;
    var tableArray = getJsonData(jsonURL);
    tableArray.forEach(function(eachRow) {
        var modelElement = Alloy.createModel(tableName);
        eachRow.forEach(function(eachField) {
            modelElement.set({
                index: eachField
            });
        });
        modelElement.save();
    });
};

Alloy.Globals.getArticlesIndexByArticleId = function(articleId) {
    for (var index in Alloy.Globals.articlesArray) if (Alloy.Globals.articlesArray[index]["articleId"] == articleId) return index;
};