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

function getJsonData(jsonURL) {
    var xhr = Titanium.Network.createHTTPClient();
    xhr.onload = function() {
        Ti.API.info("got data from the network: " + this.responseText);
        var defaultData = JSON.parse(this.responseText);
        return defaultData;
    };
    xhr.open("GET", jsonURL);
    xhr.send();
    return xhr.onload;
}

function clearCollectionData() {}

function updateFIXDataOfTable(tableName) {
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
}

Ti.API.info("!!functions.js LOADED");