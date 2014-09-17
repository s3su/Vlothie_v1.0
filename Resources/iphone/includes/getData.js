function cleanAllModels() {
    Ti.API.info("!!----Clean All models");
    var collections = [ "ArticleCategories", "Articles", "ArticleSeasons" ];
    collections.forEach(function(eachCollection) {
        var aCollection = Alloy.createCollection(eachCollection);
        aCollection.fetch();
        while (aCollection.length > 0) aCollection.at(0).destroy();
        aCollection.fetch();
        Ti.API.info("!!-------- Clean collection: " + eachCollection);
    });
}

function printAllModels() {
    Ti.API.info("!!----Print All models");
    var collections = [ "ArticleCategories" ];
    collections.forEach(function(eachCollection) {
        var aCollection = Alloy.createCollection(eachCollection);
        aCollection.fetch();
        Ti.API.info("!!-------- Collection: " + eachCollection);
        printCollection(aCollection);
    });
}

function printCollection(aCollection) {
    var string = "";
    string += "!!------------\n";
    aCollection.forEach(function(eachCollectionElement, i) {
        string = string + "[" + i + "] \n";
        string = string + "[artcatId]: " + eachCollectionElement.get("artcatId") + "\n";
        string = string + "[name]: " + eachCollectionElement.get("name") + "\n";
        string = string + "[status]: " + eachCollectionElement.get("status") + "\n";
        string = string + "[alloy_id]: " + eachCollectionElement.get("alloy_id") + "\n";
    });
    Ti.API.info(string);
}

Ti.API.info("!!getDeafultData.js LOADED");

var isGetDataFromJson = false;

var isGetDataFromHardcode = false;

var jsonURL = "http://localhost/vlothieLocal/getDefaultData.php";

while (articleCategoriesCollection.length > 0) {
    articleCategoriesCollection.at(0).destroy();
    Ti.API.info("!!destroy: " + articleCategoriesCollection.get(artcatId));
}

alert("Length after destry: " + articleCategoriesCollection.length);

articleCategoriesCollection.save();

articleCategoriesCollection.fetch();

alert("Length after fetch again: " + articleCategoriesCollection.length);

if (isGetDataFromJson) {
    Ti.API.info("!!---- getDeafultData.js get json data from: " + jsonURL);
    var xhr = Titanium.Network.createHTTPClient();
    xhr.onload = function() {
        Ti.API.info("got data from the network: " + this.responseText);
        var defaultData = JSON.parse(this.responseText);
        Ti.API.info(dump(defaultData));
        defaultData.forEach(function(eachModel) {
            var modelElement = Alloy.createModel("Articles");
            eachModel.forEach(function(eachField) {
                modelElement.set({
                    index: eachField
                });
            });
            modelElement.save();
        });
    };
    xhr.open("GET", jsonURL);
    xhr.send();
}

if (isGetDataFromHardcode) {
    var articleCategories1 = Alloy.createModel("ArticleCategories");
    articleCategories1.set({
        name: "Top"
    });
    articleCategories1.save();
    alert(articleCategories1.get("name"));
}

printAllModels();