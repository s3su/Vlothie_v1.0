Ti.API.info('---------------- look.js ------------------------');
var animation = require('alloy/animation');

var looksCurrentArray = [];


if(Alloy.Globals.selectedSituationId > 0){
	
	//Ti.API.info('looksCurrentArray: ' + Alloy.Globals.dump(Alloy.Globals.looksArray));
	//Ti.API.info('getArticlesIndexByArticleId(6): '+Alloy.Globals.getArticlesIndexByArticleId(6));
	
	buildLooksBySituationId();
	
	Ti.API.info('looksCurrentArray: ' + Alloy.Globals.dump(looksCurrentArray));
	
	loadRandomLook();
	showLook();
	
	$.lookContent.addEventListener('swipe',function(e){
		//Ti.API.info('!!Swipe with direction: '+e.direction);
		if (e.direction == 'right') {
	      	loadPreviousLook();
	   	} else if (e.direction == 'left') {
	      	loadNextLook();
	   	} else if (e.direction == 'up') {
	      	buildLooksByNextSituation();
			loadRandomLook();
	   	} else if (e.direction == 'down') {
	      	buildLooksByPreviousSituation();
			loadRandomLook();
	   	}
		
		showLook();
	});
	
		
	
}else if(Alloy.Globals.selectedLookId > 0){
	
	buildLooksByLookId();
	loadRandomLook();
	showLook();
	
	$.lookTitleText.setText(looksCurrentArray[Alloy.Globals.lookCurrentIndex]['title']);
	
	$.lookContent.addEventListener('swipe',function(e){
		if (e.direction == 'right') {
	      	Alloy.createController("trend").getView().open();
	   	} else if (e.direction == 'left') {
	      	//NOthing
	   	} else if (e.direction == 'top') {
	      	//NOthing
	   	} else if (e.direction == 'down') {
	      	//NOthing
	   	}
		showLook();
		
	});
	
}

$.lookContent.addEventListener('pinch',function(e){
	if(e.scale > 1){ //pinch OUT
		//Niente
	}else{ //pinchIN
		Alloy.createController("diy").getView().open();
	}
				
});

$.lookContent.addEventListener('longpress',function(e){
	//Open DIY
	Alloy.createController("diy").getView().open();
	
				
});

function buildLooksBySituationId(){
	
	var count = 0;
	Ti.API.info('!!Building Look By situation ID: '+Alloy.Globals.selectedSituationId);
	for(var index in Alloy.Globals.looksArray) {
		if(Alloy.Globals.looksArray[index]['situationId'] == Alloy.Globals.selectedSituationId){
			looksCurrentArray[count] = [];
			looksCurrentArray[count]['title'] = Alloy.Globals.looksArray[index]['title'];
			looksCurrentArray[count]['lookId'] = Alloy.Globals.looksArray[index]['lookId'];
			looksCurrentArray[count]['topArticleIndex'] = Alloy.Globals.getArticlesIndexByArticleId( Alloy.Globals.looksArray[index]['topArticleId']);
			looksCurrentArray[count]['bottomArticleIndex'] = Alloy.Globals.getArticlesIndexByArticleId(Alloy.Globals.looksArray[index]['bottomArticleId']);
			looksCurrentArray[count]['shoesArticleIndex'] = Alloy.Globals.getArticlesIndexByArticleId(Alloy.Globals.looksArray[index]['shoesArticleId']);
			count++;		
		}
	
	}
	looksCurrentArray['size'] = count;
	
}

function buildLooksByLookId(){
	
	var count = 0;
	Ti.API.info('!!Building Look By look ID: '+Alloy.Globals.selectedLookId);
	for(var index in Alloy.Globals.looksArray) {
		if(Alloy.Globals.looksArray[index]['lookId'] == Alloy.Globals.selectedLookId){
			looksCurrentArray[count] = [];
			looksCurrentArray[count]['title'] = Alloy.Globals.looksArray[index]['title'];
			looksCurrentArray[count]['lookId'] = Alloy.Globals.looksArray[index]['lookId'];
			looksCurrentArray[count]['topArticleIndex'] = Alloy.Globals.getArticlesIndexByArticleId( Alloy.Globals.looksArray[index]['topArticleId']);
			looksCurrentArray[count]['bottomArticleIndex'] = Alloy.Globals.getArticlesIndexByArticleId(Alloy.Globals.looksArray[index]['bottomArticleId']);
			looksCurrentArray[count]['shoesArticleIndex'] = Alloy.Globals.getArticlesIndexByArticleId(Alloy.Globals.looksArray[index]['shoesArticleId']);
			count++;		
		}
	
	}
	looksCurrentArray['size'] = count;
	
}

function buildLooksByNextSituation(){
	
	
	if((Alloy.Globals.selectedSituationId+1) > Alloy.Globals.situationArraySize){
		Alloy.Globals.selectedSituationId = 1;
	}else{
		Alloy.Globals.selectedSituationId++;
	}
	Ti.API.info('!!Show Next Situation with SitId: '+Alloy.Globals.selectedSituationId);
	
	buildLooksBySituationId();
	
}

function buildLooksByPreviousSituation(){
	
	
	if((Alloy.Globals.selectedSituationId-1) >= 1){
		Alloy.Globals.selectedSituationId--;
	}else{
		Alloy.Globals.selectedSituationId = Alloy.Globals.situationArraySize;
	}
	Ti.API.info('!!Show Previous Situation with SitId: '+Alloy.Globals.selectedSituationId);
	
	buildLooksBySituationId();
	
}

function loadRandomLook(){
	Alloy.Globals.lookCurrentIndex = Math.floor(Math.random() * (looksCurrentArray['size']));
	Alloy.Globals.lookCurrentId = looksCurrentArray[Alloy.Globals.lookCurrentIndex]['lookId'];
}

function showLook(){
	
	Ti.API.info('!!Show Look with index: '+Alloy.Globals.lookCurrentIndex);
	
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	$.articleTopImg.image = Alloy.Globals.articlesArray[looksCurrentArray[Alloy.Globals.lookCurrentIndex]['topArticleIndex']]['articlePhotoLook'];
	$.articleBottomImg.image = Alloy.Globals.articlesArray[looksCurrentArray[Alloy.Globals.lookCurrentIndex]['bottomArticleIndex']]['articlePhotoLook'];
	$.articleShoesImg.image = Alloy.Globals.articlesArray[looksCurrentArray[Alloy.Globals.lookCurrentIndex]['shoesArticleIndex']]['articlePhotoLook'];
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	
	$.lookTitleText.setText(looksCurrentArray[Alloy.Globals.lookCurrentIndex]['title']);
}


function loadPreviousLook(){
	
	if((Alloy.Globals.lookCurrentIndex-1) >= 0){
		Alloy.Globals.lookCurrentIndex--;
	}else{
		Alloy.Globals.lookCurrentIndex = looksCurrentArray['size']-1;
	}
	Alloy.Globals.lookCurrentId = looksCurrentArray[Alloy.Globals.lookCurrentIndex]['lookId'];
	Ti.API.info('!!Show Previous Look with index: '+Alloy.Globals.lookCurrentIndex);
}

function loadNextLook(){
	if((Alloy.Globals.lookCurrentIndex+1) == looksCurrentArray['size']){
		Alloy.Globals.lookCurrentIndex = 0;
	}else{
		Alloy.Globals.lookCurrentIndex++;
	}
	Alloy.Globals.lookCurrentId = looksCurrentArray[Alloy.Globals.lookCurrentIndex]['lookId'];
	Ti.API.info('!!Show Next Look with index: '+Alloy.Globals.lookCurrentIndex);
}



function showArticleTop(){
	Alloy.Globals.selectedArticleIndex = looksCurrentArray[Alloy.Globals.lookCurrentIndex]['topArticleIndex'];
	//Ti.API.info('!!Selected Top article .. ID: '+Alloy.Globals.selectedArticleIndex);
	Alloy.createController("article").getView().open();
}

function showArticleBottom(){
	Alloy.Globals.selectedArticleIndex = looksCurrentArray[Alloy.Globals.lookCurrentIndex]['bottomArticleIndex'];
	//Ti.API.info('!!Selected Top article .. ID: '+Alloy.Globals.selectedArticleIndex);
	Alloy.createController("article").getView().open();
}

function showArticleShoes(){
	Alloy.Globals.selectedArticleIndex = looksCurrentArray[Alloy.Globals.lookCurrentIndex]['shoesArticleIndex'];
	//Ti.API.info('!!Selected Top article .. ID: '+Alloy.Globals.selectedArticleIndex);
	Alloy.createController("article").getView().open();
}

function closeLook() {
	//alert('close look');
	$.lookWindow.close();
}