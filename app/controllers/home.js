//alert(arguments[0]);

function showLooks() {
	
	var looksTab = $.TabGroup.setActiveTab(2); 
	looksTab.open();
	
}

function showTrends() {
	
	var looksTab = $.TabGroup.setActiveTab(1); 
	looksTab.open();
	
}



Ti.API.info('seeded: ' + Ti.App.Properties.hasProperty('seeded'));

//var article1 = Alloy.createModel('Articles', { title: 'juan'});
//article1.save();

//var db = Ti.Database.open('myDB');
//alert(db.close());
//alert(db.remove());

/*
//determine if the database needs to be seeded
if (!Ti.App.Properties.hasProperty('seeded')) {

	// Use the HTTPClient object to send a GET request to 
	// http://bountyhunterapp.appspot.com/bounties and process the returned data.
	// It returns an array of objects in the form [{name: 'Jeff Haynie'}, ...]
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function() {
		Ti.API.info('got data from the network: ' + this.responseText);
		var articles = JSON.parse(this.responseText);
		alert(dump(articles));
		
		
		for(var i=0,j=articles.length;i<j;i++) {
			var eachArticle = Alloy.createModel('Articles', { 
				name: articles[i].name,
				articleId: articles[i].DBId,
				mainPhoto: articles[i].photo 
				});
			//eachArticle.save();
		}
		// set our app property so this code doesn't run next time
	    Ti.App.Properties.setString('seeded', 'yuppers');
		// force tables to update
		Alloy.Collections.Articles.fetch();
		
		
	};
	xhr.open("GET","http://be.vlothie.com/json/getArticles.php");
	xhr.send();
	
    
/*
} else {

   

}
*/

// force tables to update
//articleCollection.fetch();

if(OS_ANDROID) {
    // Add the app's name to the Android action bar
    $.tabGroup.addEventListener('open', function(e) {
        var activity = $.tabGroup.getActivity(); 
        if (activity != undefined && activity.actionBar != undefined) {
            // set the title to the app name defined in tiapp.xml
            activity.actionBar.title = Ti.App.name; 
        }
    });
}