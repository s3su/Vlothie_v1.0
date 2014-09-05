// .. INCLUDES
require('includes/functions');
require('includes/getArticlesData');
require('includes/getHomeData');

//create collections
var articleCategoriesCollection = Alloy.createCollection("ArticleCategories");
var articlesCollection = Alloy.createCollection("Articles");
var articleSeasonsCollection = Alloy.createCollection("ArticleSeasons");
var articleSubcategoriesCollection = Alloy.createCollection("ArticleSubcategories");
var brandsCollection = Alloy.createCollection("Brands");
var citiesCollection = Alloy.createCollection("Cities");
var coloursCollection = Alloy.createCollection("Colours");
//var lastestFixDataVersionsCollection = Alloy.createCollection("LastestFixDataVersions");
var materialsfabricsCollection = Alloy.createCollection("Materialsfabrics");
var measurementsTypesCollection = Alloy.createCollection("MeasurementsTypes");
var patternsCollection = Alloy.createCollection("Patterns");
//var situationsCollection = Alloy.createCollection("Situations");
//var stylesCollection = Alloy.createCollection("Styles");

Alloy.Globals.sectedArticleId = 0;
Alloy.Globals.isSetInitialLook = 0;
Alloy.Globals.selectedSituationId = 0;


var getFIXData = true;
var getArticlesData = true;

if(getFIXData){
	//require('includes/getFIXData');
}

if(getArticlesData){
	//require('includes/getArticlesData');
}




if (OS_IOS || OS_ANDROID) {
	
	Alloy.Globals.top = 0;
	Alloy.Globals.tableTop = '50dp';

	try {
		// check for iOS7
		if (OS_IOS && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
			Alloy.Globals.top = '20dp';
			Alloy.Globals.tableTop = '70dp';
		}
	} catch(e) {
		// catch and ignore
	}
}