Ti.API.info('!!getDeafultData.js LOADED');

var isGetDataFromJson = false;

var jsonURL = "http://localhost/vlothieLocal/getDefaultData.php";

//clean all models
cleanAllModels();

if(isGetDataFromJson){
	Ti.API.info('!!---- getDeafultData.js get json data from: '+jsonURL);
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function() {
		Ti.API.info('got data from the network: ' + this.responseText);
		var defaultData = JSON.parse(this.responseText);
		Ti.API.info(dump(defaultData));
		
		
		defaultData.forEach(function(eachModel){
	    	var modelElement = Alloy.createModel('Articles', { 
				name: articles[i].name,
				articleId: articles[i].DBId,
				mainPhoto: articles[i].photo 
				});
				//modelElement.save();
				
		});
		
		
		
	};

xhr.open("GET",jsonURL);
xhr.send();

}else{
	
	/*

	var articleCategories1 = Alloy.createModel('ArticleCategories', { name: 'Top'});
	articleCategories1.save();
	
	var articleCategoriesCollection = Alloy.createCollection('ArticleCategories');
	articleCategoriesCollection.fetch();
	
	//var articleSeason1 = Alloy.createModel('ArticleSeasons', { season: 'autum'});
	//articleSeason1.save();	
	*/
}



function cleanAllModels(){
	Ti.API.info('!!----Clean All models');
	
	var collections = [
			"ArticleCategories",
			"Articles",
			"ArticleSeasons"
			];
			
	collections.forEach(function(eachCollection){
		
		var aCollection = Alloy.createCollection(eachCollection);
		aCollection.fetch();
		
		aCollection.forEach(function(eachCollectionElement){
			eachCollectionElement.destroy();
		});
		Ti.API.info('!!-------- Clean collection: '+eachCollection);
	});
	
}
