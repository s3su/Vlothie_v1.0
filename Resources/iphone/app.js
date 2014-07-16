var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var getDefaultData = true;

getDefaultData && require("includes/getDefaultData");

require("includes/functions");

var articleOne = Alloy.createModel("Articles", {
    title: "sebas1"
});

var articleCollection = Alloy.createCollection("Articles");

articleCollection.fetch();

var articleCategories1 = Alloy.createModel("ArticleCategories", {
    name: "Top"
});

articleCategories1.save();

var articleCategoriesCollection = Alloy.createCollection("ArticleCategories");

articleCategoriesCollection.fetch();

var articleSeasonCollection = Alloy.createCollection("ArticleSeasons");

articleSeasonCollection.fetch();

var elements = "";

articleSeasonCollection.forEach(function(eachCollectionElement) {
    eachCollectionElement.destroy();
});

alert("seaoson elements deleted");

articleSeasonCollection.forEach(function(eachCollectionElement) {
    alert("ELEm: " + eachCollectionElement.get("season"));
});

Alloy.Globals.top = 0;

Alloy.Globals.tableTop = "50dp";

try {
    if (true && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
        Alloy.Globals.top = "20dp";
        Alloy.Globals.tableTop = "70dp";
    }
} catch (e) {}

Alloy.createController("index");