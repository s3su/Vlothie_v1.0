var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

require("includes/functions");

require("includes/getArticlesData");

var articleCategoriesCollection = Alloy.createCollection("ArticleCategories");

var articlesCollection = Alloy.createCollection("Articles");

var articleSeasonsCollection = Alloy.createCollection("ArticleSeasons");

var articleSubcategoriesCollection = Alloy.createCollection("ArticleSubcategories");

var brandsCollection = Alloy.createCollection("Brands");

var citiesCollection = Alloy.createCollection("Cities");

var coloursCollection = Alloy.createCollection("Colours");

var materialsfabricsCollection = Alloy.createCollection("Materialsfabrics");

var measurementsTypesCollection = Alloy.createCollection("MeasurementsTypes");

var patternsCollection = Alloy.createCollection("Patterns");

var getFIXData = true;

var getArticlesData = true;

getFIXData;

getArticlesData;

Alloy.Globals.top = 0;

Alloy.Globals.tableTop = "50dp";

try {} catch (e) {}

Alloy.createController("index");