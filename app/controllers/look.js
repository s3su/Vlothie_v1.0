var animation = require('alloy/animation');
var articleTop = [];
var articleBottom = [];
var articleShoes = [];


var articleTopCount = 0;
var articleBottomCount = 0;
var articleShoesCount = 0;

Alloy.Globals.lookTopId = -1;
Alloy.Globals.lookBottomId = -1;
Alloy.Globals.lookShoesId = -1;


//alert(Alloy.Globals.dump(Alloy.Globals.articlesArray));

for(var articleId in Alloy.Globals.articlesArray) {
		

	switch(Alloy.Globals.articlesArray[articleId]['categoryId']){
		case "1":
			articleTop[articleTopCount] = [];
			articleTop[articleTopCount]['articleId'] = articleId;
			articleTop[articleTopCount]['articlePhotoLook'] = Alloy.Globals.articlesArray[articleId]['articlePhotoLook'];
			articleTop[articleTopCount]['title'] = Alloy.Globals.articlesArray[articleId]['title'];
			articleTop[articleTopCount]['subcategoryId'] = Alloy.Globals.articlesArray[articleId]['subcategoryId'];
			articleTop[articleTopCount]['subcategoryName'] = Alloy.Globals.articlesArray[articleId]['subcategoryName'];
			articleTop[articleTopCount]['situationId'] = Alloy.Globals.articlesArray[articleId]['situationId'];
			articleTop[articleTopCount]['articleLink'] = Alloy.Globals.articlesArray[articleId]['articleLink'];
			articleTop[articleTopCount]['wearIt'] = Alloy.Globals.articlesArray[articleId]['wearIt'];
			articleTop[articleTopCount]['clicks'] = Alloy.Globals.articlesArray[articleId]['clicks'];
			articleTop[articleTopCount]['description'] = Alloy.Globals.articlesArray[articleId]['description'];
			articleTopCount++;
		break;
		
		case "2":
			articleBottom[articleBottomCount] = [];
			articleBottom[articleBottomCount]['articleId'] = articleId;
			articleBottom[articleBottomCount]['articlePhotoLook'] = Alloy.Globals.articlesArray[articleId]['articlePhotoLook'];
			articleBottom[articleBottomCount]['title'] = Alloy.Globals.articlesArray[articleId]['title'];
			articleBottom[articleBottomCount]['subcategoryId'] = Alloy.Globals.articlesArray[articleId]['subcategoryId'];
			articleBottom[articleBottomCount]['subcategoryName'] = Alloy.Globals.articlesArray[articleId]['subcategoryName'];
			articleBottom[articleBottomCount]['situationId'] = Alloy.Globals.articlesArray[articleId]['situationId'];
			articleBottom[articleBottomCount]['articleLink'] = Alloy.Globals.articlesArray[articleId]['articleLink'];
			articleBottom[articleBottomCount]['wearIt'] = Alloy.Globals.articlesArray[articleId]['wearIt'];
			articleBottom[articleBottomCount]['clicks'] = Alloy.Globals.articlesArray[articleId]['clicks'];
			articleBottom[articleBottomCount]['description'] = Alloy.Globals.articlesArray[articleId]['description'];
			articleBottomCount++;
		break;
		
		case "3":
			articleShoes[articleShoesCount] = [];
			articleShoes[articleShoesCount]['articleId'] = articleId;
			articleShoes[articleShoesCount]['articlePhotoLook'] = Alloy.Globals.articlesArray[articleId]['articlePhotoLook'];
			articleShoes[articleShoesCount]['title'] = Alloy.Globals.articlesArray[articleId]['title'];
			articleShoes[articleShoesCount]['subcategoryId'] = Alloy.Globals.articlesArray[articleId]['subcategoryId'];
			articleShoes[articleShoesCount]['subcategoryName'] = Alloy.Globals.articlesArray[articleId]['subcategoryName'];
			articleShoes[articleShoesCount]['situationId'] = Alloy.Globals.articlesArray[articleId]['situationId'];
			articleShoes[articleShoesCount]['articleLink'] = Alloy.Globals.articlesArray[articleId]['articleLink'];
			articleShoes[articleShoesCount]['wearIt'] = Alloy.Globals.articlesArray[articleId]['wearIt'];
			articleShoes[articleShoesCount]['clicks'] = Alloy.Globals.articlesArray[articleId]['clicks'];
			articleShoes[articleShoesCount]['description'] = Alloy.Globals.articlesArray[articleId]['description'];
			articleShoesCount++;
		break;
	}
	
}


setInitialLook();




$.articleTop.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	Alloy.Globals.lookTopId = selectTopId('right');
   	} else if (e.direction == 'left') {
      	Alloy.Globals.lookTopId = selectTopId();
   	}
	
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	var imagePath = articleTop[Alloy.Globals.lookTopId]['photo'];
	$.articleTopImg.image = imagePath;
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
});

$.articleBottom.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	Alloy.Globals.lookBottomId = selectBottomId('right');
   	} else if (e.direction == 'left') {
      	Alloy.Globals.lookTopId = selectBottomId();
   	}
	
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	var imagePath = articleBottom[Alloy.Globals.lookBottomId]['articlePhotoLook'];
	$.articleBottomImg.image = imagePath;
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
});

$.articleShoes.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	Alloy.Globals.lookShoesId = selectShoesId('right');
   	} else if (e.direction == 'left') {
    	Alloy.Globals.lookShoesId = selectShoesId();
   	}
	
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	var imagePath = articleShoes[Alloy.Globals.lookShoesId]['photo'];
	$.articleShoesImg.image = imagePath;
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
});





// Show task list based on selected status type
function showArticleTop() {
	Alloy.Globals.sectedArticleId = articleTop[Alloy.Globals.lookTopId]['articleId'];
	Alloy.createController("article").getView().open();
}

function showArticleBottom() {
	Alloy.Globals.sectedArticleId = articleBottom[Alloy.Globals.lookBottomId]['articleId'];
	Alloy.createController("article").getView().open();
}

function showArticleShoes() {
	Alloy.Globals.sectedArticleId = articleShoes[Alloy.Globals.lookShoesId]['articleId'];
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
	
function showAlarm() {
	Alloy.createController("alarm").getView().open();
}
	
function showSettings() {
	Alloy.createController("settings").getView().open();
}
	
function selectTopId(direction){
	//alert('select top id prev: '+topId+' with length: '+articleTop.length);
	if(direction == 'right'){
		if((Alloy.Globals.lookTopId-1) >= 0){
			Alloy.Globals.lookTopId--;
		}else{
			Alloy.Globals.lookTopId = articleTop.length-1;
		}
	}else{
		if((Alloy.Globals.lookTopId+1) < articleTop.length){
			Alloy.Globals.lookTopId++;
		}else{
			Alloy.Globals.lookTopId = 0;
		}
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
	}else{
		if((Alloy.Globals.lookBottomId+1) < articleBottom.length){
			Alloy.Globals.lookBottomId++;
		}else{
			Alloy.Globals.lookBottomId = 0;
		}
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
	}else{
		if((Alloy.Globals.lookShoesId+1) < articleShoes.length){
			Alloy.Globals.lookShoesId++;
		}else{
			Alloy.Globals.lookShoesId = 0;
		}
	}
	return Alloy.Globals.lookShoesId;
}

//--------------set INITIAL LOOK
function setInitialLook(){
	//alert('setInitialLook');
	if(Alloy.Globals.selectedSituationId > 0){
		//alert('Look with situationId: '+Alloy.Globals.selectedSituationId);
		for(var topId in articleTop) {
			//Ti.API.info('!!articleTop[topId][situationId]: '+articleTop[topId]['situationId']);
			if(articleTop[topId]['situationId'] == Alloy.Globals.selectedSituationId){
				Alloy.Globals.lookTopId =  topId;
				break;
			}
		}
		//Ti.API.info('!!Alloy.Globals.lookTopId: '+Alloy.Globals.lookTopId);
		if(Alloy.Globals.lookTopId < 0){
			Alloy.Globals.lookTopId = selectTopId();
			//Ti.API.info('!!article top setted random');
		}
		
		for(var bottomId in articleBottom) {
			if(articleBottom[bottomId]['situationId'] == Alloy.Globals.selectedSituationId){
				Alloy.Globals.lookBottomId =  bottomId;
				break;
			}
		}
		if(Alloy.Globals.lookBottomId < 0){
			Alloy.Globals.lookBottomId = selectBottomId();
		}
		
		
		for(var shoesId in articleShoes) {
			if(articleShoes[shoesId]['situationId'] == Alloy.Globals.selectedSituationId){
				Alloy.Globals.lookShoesId =  shoesId;
				break;
			}
		}
		if(Alloy.Globals.lookShoesId < 0){
			Alloy.Globals.lookShoesId = selectShoesId();
		}
		
		
		Alloy.Globals.selectedSituationId = 0;
		
	}else if(Alloy.Globals.isSetLook == 0){
		topId = selectTopId();
		bottomId = selectBottomId();
		shoesId = selectShoesId();
		Alloy.Globals.isSetLook = 1;
	}
	
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
	var imagePath = articleShoes[Alloy.Globals.lookShoesId]['articlePhotoLook'];
	$.articleShoesImg.image = imagePath;
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	
}