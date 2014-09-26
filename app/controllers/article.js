// Show task list based on selected status type
function showArticle() {
	//console.log(e);
		Alloy.createController("article").getView().open();
}

function showHome() {
	//console.log(e);
	Alloy.createController("home", {showTab: 'look'}).getView().open();
}	

function closeArticle() {
	$.articleWindow.close();
}

$.buttonBuyItView.addEventListener('click',function(e){
	
	Alloy.Globals.webBrowserUrl = Alloy.Globals.articlesArray[Alloy.Globals.selectedArticleIndex]['articleLink'];
	Ti.API.info('!!articleIndex: '+Alloy.Globals.selectedArticleIndex+' - Link: '+Alloy.Globals.webBrowserUrl);
	Alloy.createController("webBrowser").getView().open();
});

//alert("articleId: "+Alloy.Globals.sectedArticleId+" -- data: "+Alloy.Globals.dump(Alloy.Globals.articlesArray[Alloy.Globals.sectedArticleId]));
Ti.API.info('!!-----------------article.js ---------------------------');
Ti.API.info('!!articleIndex: '+Alloy.Globals.selectedArticleIndex+' - Title: ');

//SET DATA IN VIWE
$.articleSelectedImg.image = Alloy.Globals.articlesArray[Alloy.Globals.selectedArticleIndex]['articlePhotoArt'];
$.articleTitle.text = Alloy.Globals.articlesArray[Alloy.Globals.selectedArticleIndex]['title'];
$.articleInfoText.text = Alloy.Globals.articlesArray[Alloy.Globals.selectedArticleIndex]['description'];
