var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

<<<<<<< HEAD
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

=======
>>>>>>> b97304c2793e9857911b0f654e1cd46b100ba1f6
Alloy.createController("index");