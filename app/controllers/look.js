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
		if (e.direction == 'right') {
	      	loadPreviousLook();
	   	} else if (e.direction == 'left') {
	      	loadNextLook();
	   	} else if (e.direction == 'top') {
	      	buildLooksByNextSituation();
			loadRandomLook();
	   	} else if (e.direction == 'down') {
	      	buildLooksByPreviousSituation();
			loadRandomLook();
	   	}
		
		showLook();
	});
	
		
	
}else if(Alloy.Globals.selectedTrendId > 0){
	
	loadLookByTrendId();
	showLook();
	
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

function buildLooksByNextSituation(){
	
	
	if((Alloy.Globals.selectedSituationId+1) >= Alloy.Globals.situationArraySize){
		Alloy.Globals.selectedSituationId = 1;
	}else{
		Alloy.Globals.selectedSituationId++;
	}
	
	buildLooksBySituationId();
	
}

function buildLooksByPreviousSituation(){
	
	
	if((Alloy.Globals.selectedSituationId-1) >= 1){
		Alloy.Globals.selectedSituationId--;
	}else{
		Alloy.Globals.selectedSituationId = Alloy.Globals.situationArraySize;
	}
	
	
	buildLooksBySituationId();
	
}

function loadRandomLook(){
	Alloy.Globals.lookCurrentIndex = Math.floor(Math.random() * (looksCurrentArray['size']));
}

function showLook(){
	
	Ti.API.info('!!Show Look with index: '+Alloy.Globals.lookCurrentIndex);
	
	animation.flipHorizontal($.lookContent,$.lookContent, 500);
	$.articleTopImg.image = Alloy.Globals.articlesArray[looksCurrentArray[Alloy.Globals.lookCurrentIndex]['topArticleIndex']]['articlePhotoLook'];
	$.articleBottomImg.image = Alloy.Globals.articlesArray[looksCurrentArray[Alloy.Globals.lookCurrentIndex]['bottomArticleIndex']]['articlePhotoLook'];
	$.articleShoesImg.image = Alloy.Globals.articlesArray[looksCurrentArray[Alloy.Globals.lookCurrentIndex]['shoesArticleIndex']]['articlePhotoLook'];
	animation.flipHorizontal($.lookContent,$.lookContent, 500);
	
	
}


function loadPreviousLook(){
	
	if((Alloy.Globals.lookCurrentIndex-1) >= 0){
		Alloy.Globals.lookCurrentIndex--;
	}else{
		Alloy.Globals.lookCurrentIndex = looksCurrentArray['size']-1;
	}
}

function loadNextLook(){
	if((Alloy.Globals.lookCurrentIndex+1) == looksCurrentArray['size']){
		Alloy.Globals.lookCurrentIndex = 0;
	}else{
		Alloy.Globals.lookCurrentIndex++;
	}
}


function showArticleTop(){

}

function showArticleBottom(){

}

function showArticleShoes(){

}

function closeLook() {
	//alert('close look');
	$.lookWindow.close();
}