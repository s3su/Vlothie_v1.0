Ti.API.info('---------------- look.js ------------------------');
var animation = require('alloy/animation');
var articleTop = [];
var articleBottom = [];
var articleShoes = [];


var articleTopCount = 0;
var articleBottomCount = 0;
var articleShoesCount = 0;


for(var index in Alloy.Globals.articlesArray) {
	
		

	switch(Alloy.Globals.articlesArray[index]['categoryId']){
		case "1":
			articleTop[articleTopCount] = [];
			articleTop[articleTopCount]['articleIndex'] = index;
			articleTop[articleTopCount]['articleId'] = Alloy.Globals.articlesArray[index]['articleId'];
			articleTop[articleTopCount]['articlePhotoLook'] = Alloy.Globals.articlesArray[index]['articlePhotoLook'];
			articleTop[articleTopCount]['title'] = Alloy.Globals.articlesArray[index]['title'];
			articleTop[articleTopCount]['subcategoryId'] = Alloy.Globals.articlesArray[index]['subcategoryId'];
			articleTop[articleTopCount]['subcategoryName'] = Alloy.Globals.articlesArray[index]['subcategoryName'];
			articleTop[articleTopCount]['situationId'] = Alloy.Globals.articlesArray[index]['situationId'];
			articleTop[articleTopCount]['articleLink'] = Alloy.Globals.articlesArray[index]['articleLink'];
			articleTop[articleTopCount]['wearIt'] = Alloy.Globals.articlesArray[index]['wearIt'];
			articleTop[articleTopCount]['clicks'] = Alloy.Globals.articlesArray[index]['clicks'];
			articleTop[articleTopCount]['description'] = Alloy.Globals.articlesArray[index]['description'];
			articleTopCount++;
		break;
		
		case "2":
			articleBottom[articleBottomCount] = [];
			articleBottom[articleBottomCount]['articleIndex'] = index;
			articleBottom[articleBottomCount]['articleId'] = Alloy.Globals.articlesArray[index]['articleId'];
			articleBottom[articleBottomCount]['articlePhotoLook'] = Alloy.Globals.articlesArray[index]['articlePhotoLook'];
			articleBottom[articleBottomCount]['title'] = Alloy.Globals.articlesArray[index]['title'];
			articleBottom[articleBottomCount]['subcategoryId'] = Alloy.Globals.articlesArray[index]['subcategoryId'];
			articleBottom[articleBottomCount]['subcategoryName'] = Alloy.Globals.articlesArray[index]['subcategoryName'];
			articleBottom[articleBottomCount]['situationId'] = Alloy.Globals.articlesArray[index]['situationId'];
			articleBottom[articleBottomCount]['articleLink'] = Alloy.Globals.articlesArray[index]['articleLink'];
			articleBottom[articleBottomCount]['wearIt'] = Alloy.Globals.articlesArray[index]['wearIt'];
			articleBottom[articleBottomCount]['clicks'] = Alloy.Globals.articlesArray[index]['clicks'];
			articleBottom[articleBottomCount]['description'] = Alloy.Globals.articlesArray[index]['description'];
			articleBottomCount++;
		break;
		
		case "3":
			articleShoes[articleShoesCount] = [];
			articleShoes[articleShoesCount]['articleIndex'] = index;		
			articleShoes[articleShoesCount]['articleId'] = Alloy.Globals.articlesArray[index]['articleId'];
			articleShoes[articleShoesCount]['articlePhotoLook'] = Alloy.Globals.articlesArray[index]['articlePhotoLook'];
			articleShoes[articleShoesCount]['title'] = Alloy.Globals.articlesArray[index]['title'];
			articleShoes[articleShoesCount]['subcategoryId'] = Alloy.Globals.articlesArray[index]['subcategoryId'];
			articleShoes[articleShoesCount]['subcategoryName'] = Alloy.Globals.articlesArray[index]['subcategoryName'];
			articleShoes[articleShoesCount]['situationId'] = Alloy.Globals.articlesArray[index]['situationId'];
			articleShoes[articleShoesCount]['articleLink'] = Alloy.Globals.articlesArray[index]['articleLink'];
			articleShoes[articleShoesCount]['wearIt'] = Alloy.Globals.articlesArray[index]['wearIt'];
			articleShoes[articleShoesCount]['clicks'] = Alloy.Globals.articlesArray[index]['clicks'];
			articleShoes[articleShoesCount]['description'] = Alloy.Globals.articlesArray[index]['description'];
			articleShoesCount++;
		break;
	}
	
}


//Ti.API.info("articleTop: "+Alloy.Globals.dump(articleTop));
//Ti.API.info("articleBottom: "+Alloy.Globals.dump(articleBottom));
//Ti.API.info("articleShoes: "+Alloy.Globals.dump(articleShoes));


setInitialLook();




$.articleTop.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	Alloy.Globals.lookTopId = selectTopId('right');
   	} else if (e.direction == 'left') {
      	Alloy.Globals.lookTopId = selectTopId('left');
   	}
	
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	var imagePath = articleTop[Alloy.Globals.lookTopId]['articlePhotoLook'];
	$.articleTopImg.image = imagePath;
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	
	Ti.API.info('!!top title: '+articleTop[Alloy.Globals.lookTopId]['title']+' - Image: '+imagePath);
});

$.articleBottom.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	Alloy.Globals.lookBottomId = selectBottomId('right');
   	} else if (e.direction == 'left') {
      	Alloy.Globals.lookTopId = selectBottomId('left');
   	}
	
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	var imagePath = articleBottom[Alloy.Globals.lookBottomId]['articlePhotoLook'];
	$.articleBottomImg.image = imagePath;
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	Ti.API.info('!!bottom title: '+articleBottom[Alloy.Globals.lookBottomId]['title']+' - Image: '+imagePath);
});

$.articleShoes.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	Alloy.Globals.lookShoesId = selectShoesId('right');
   	} else if (e.direction == 'left') {
    	Alloy.Globals.lookShoesId = selectShoesId('left');
   	}
	
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	var imagePath = articleShoes[Alloy.Globals.lookShoesId]['articlePhotoLook'];
	$.articleShoesImg.image = imagePath;
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	Ti.API.info('articleShoes[Alloy.Globals.lookShoesId][articlePhotoLook]:  with: Alloy.Globals.lookShoesId: '+Alloy.Globals.lookShoesId);
	Ti.API.info('!!shoes title: '+articleShoes[Alloy.Globals.lookShoesId]['title']+' - Image: '+imagePath);
});





// Show task list based on selected status type
function showArticleTop() {
	Alloy.Globals.selectedArticleIndex = articleTop[Alloy.Globals.lookTopId]['articleIndex'];
	//Ti.API.info('!!Selected Top article .. ID: '+Alloy.Globals.selectedArticleIndex);
	Alloy.createController("article").getView().open();
}

function showArticleBottom() {
	Alloy.Globals.selectedArticleIndex = articleBottom[Alloy.Globals.lookBottomId]['articleIndex'];
	Alloy.createController("article").getView().open();
}

function showArticleShoes() {
	Alloy.Globals.selectedArticleIndex = articleShoes[Alloy.Globals.lookShoesId]['articleIndex'];
	Alloy.createController("article").getView().open();
}
function showHome() {
	Alloy.createController("home").getView().open();
}

function showTrends() {
	Alloy.createController("trend").getView().open();
}

function showLooks() {
	Alloy.createController("look").getView().open();
}
	

	
function selectTopId(direction){
	//alert('select top id prev: '+topId+' with length: '+articleTop.length);
	if(direction == 'right'){
		if((Alloy.Globals.lookTopId-1) >= 0){
			Alloy.Globals.lookTopId--;
		}else{
			Alloy.Globals.lookTopId = articleTop.length-1;
		}
	}else if(direction == 'left'){
		if((Alloy.Globals.lookTopId+1) < articleTop.length){
			Alloy.Globals.lookTopId++;
		}else{
			Alloy.Globals.lookTopId = 0;
		}
	}else if(direction == 'random'){
		Alloy.Globals.lookTopId = Math.floor(Math.random() * (articleTop.length));
	}
	return Alloy.Globals.lookTopId;
}

function selectBottomId(direction){
	if(direction == 'right'){
		if((Alloy.Globals.lookBottomId-1) >= 0){
			Alloy.Globals.lookBottomId--;
		}else{
			Alloy.Globals.lookBottomId = articleBottom.length-1;
		}
	}else if(direction == 'left'){
		if((Alloy.Globals.lookBottomId+1) < articleBottom.length){
			Alloy.Globals.lookBottomId++;
		}else{
			Alloy.Globals.lookBottomId = 0;
		}
	}else if(direction == 'random'){
		Alloy.Globals.lookBottomId = Math.floor(Math.random() * (articleBottom.length));
	}
	return Alloy.Globals.lookBottomId;
}

function selectShoesId(direction){
	if(direction == 'right'){
		if((Alloy.Globals.lookShoesId-1) >= 0){
			Alloy.Globals.lookShoesId--;
		}else{
			Alloy.Globals.lookShoesId = articleShoes.length-1;
		}
	}else if(direction == 'left'){
		if((Alloy.Globals.lookShoesId+1) < articleShoes.length){
			Alloy.Globals.lookShoesId++;
		}else{
			Alloy.Globals.lookShoesId = 0;
		}
	}else if(direction == 'random'){
		Alloy.Globals.lookShoesId = Math.floor(Math.random() * (articleShoes.length));
	}
	return Alloy.Globals.lookShoesId;
}

function setLook(){
	
	//Ti.API.info('Set Look function || Alloy.Globals.looksArray.length: '+Alloy.Globals.looksArray.length);
	//Ti.API.info('Alloy.Globals.looksArray ===: '+Alloy.Globals.dump(Alloy.Globals.looksArray));
	if((Alloy.Globals.lookSetId+1) < Alloy.Globals.looksArray['size']){
		Alloy.Globals.lookSetId++;
	}else{
		Alloy.Globals.lookSetId = 0;
	}
	Ti.API.info('Alloy.Globals.lookSetId: '+Alloy.Globals.lookSetId);
	
	
	for(var index in articleTop) {
		if(articleTop[index]['articleId'] == Alloy.Globals.looksArray[Alloy.Globals.lookSetId]['topArticleId']){
			Alloy.Globals.lookTopId = index;
			break;
		}
	}
	
	for(var index in articleBottom) {
		if(articleBottom[index]['articleId'] == Alloy.Globals.looksArray[Alloy.Globals.lookSetId]['bottomArticleId']){
			Alloy.Globals.lookBottomId = index;
			break;
		}
	}
	
	for(var index in articleShoes) {
		if(articleShoes[index]['articleId'] == Alloy.Globals.looksArray[Alloy.Globals.lookSetId]['shoesArticleId']){
			Alloy.Globals.lookShoesId = index;
			break;
		}
	}
	
}

//--------------set INITIAL LOOK
function setInitialLook(){
	//alert('setInitialLook');
	if(Alloy.Globals.selectedSituationId > 0){
		Ti.API.info('!!setInitialLook() situationId: '+Alloy.Globals.selectedSituationId);
		//alert('Look with situationId: '+Alloy.Globals.selectedSituationId);
		for(var topId in articleTop) {
			
			if(articleTop[topId]['situationId'] == Alloy.Globals.selectedSituationId){
				Alloy.Globals.lookTopId =  topId;
				//Ti.API.info('!!articleTop[topId][title]: '+articleTop[topId]['title']);
				break;
			}
		}
		//Ti.API.info('!!Alloy.Globals.lookTopId: '+Alloy.Globals.lookTopId);
		if(Alloy.Globals.lookTopId < 0){
			Alloy.Globals.lookTopId = selectTopId();
		}
		
		for(var bottomId in articleBottom) {
			if(articleBottom[bottomId]['situationId'] == Alloy.Globals.selectedSituationId){
				Alloy.Globals.lookBottomId =  bottomId;
				//Ti.API.info('!!articleBottom[bottomId][title]: '+articleBottom[bottomId]['title']);
				break;
			}
		}
		if(Alloy.Globals.lookBottomId < 0){
			Alloy.Globals.lookBottomId = selectBottomId();
		}
		
		
		for(var shoesId in articleShoes) {
			if(articleShoes[shoesId]['situationId'] == Alloy.Globals.selectedSituationId){
				Alloy.Globals.lookShoesId =  shoesId;
				//Ti.API.info('!!articleShoes[shoesId][title]: '+articleShoes[shoesId]['title']);
				break;
			}
		}
		if(Alloy.Globals.lookShoesId < 0){
			Alloy.Globals.lookShoesId = selectShoesId();
		}
		
		
		Alloy.Globals.selectedSituationId = 0;
		
	}else if(Alloy.Globals.isSetLook == 0){
		Ti.API.info('!!setInitialLook() Not setted Look ');
		
		setLook();
		Alloy.Globals.isSetLook = 0;
	}
	
	
	Ti.API.info('!!Setted looks ids) TOP: '+Alloy.Globals.lookTopId+" - BOTTOM: "+Alloy.Globals.lookBottomId+" - SHOES: "+Alloy.Globals.lookShoesId);
	
	//TOP
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	var imagePath = articleTop[Alloy.Globals.lookTopId]['articlePhotoLook'];
	$.articleTopImg.image = imagePath;
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	
	
	//BOTTOM
	
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	var imagePath = articleBottom[Alloy.Globals.lookBottomId]['articlePhotoLook'];
	$.articleBottomImg.image = imagePath;
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
		
	//SHOES
	
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	//Ti.API.info('articleShoes[Alloy.Globals.lookShoesId][articlePhotoLook]:  with: Alloy.Globals.lookShoesId: '+Alloy.Globals.lookShoesId);
	var imagePath = articleShoes[Alloy.Globals.lookShoesId]['articlePhotoLook'];
	$.articleShoesImg.image = imagePath;
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	
	
}