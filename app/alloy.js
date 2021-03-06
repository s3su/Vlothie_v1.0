// .. INCLUDES
require('includes/functions');
require('includes/getArticlesData');
require('includes/getLooksData');
require('includes/getTrendsData');
require('includes/getStylistsData');
require('includes/getHomeData');
require('includes/getWeatherData');
require('includes/setArticlesData');


//Articles
Alloy.Globals.selectedArticleIndex = 0;


//Situations
Alloy.Globals.selectedSituationId = 0;
Alloy.Globals.situationArraySize = 4;

//Looks
Alloy.Globals.lookCurrentIndex = -1;
Alloy.Globals.lookCurrentId = -1;
Alloy.Globals.lookSetIndex = 0;
Alloy.Globals.selectedLookId = 0;

Alloy.Globals.lookTopId = 0;
Alloy.Globals.lookBottomId = 0;
Alloy.Globals.lookShoesId = 0;

Alloy.Globals.trendId = 0;

Alloy.Globals.webBrowserUrl = "";




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