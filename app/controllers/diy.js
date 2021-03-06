Ti.API.info('---------------- diy.js ------------------------');
var animation = require('alloy/animation');

var articleTop = [];
var articleBottom = [];
var articleShoes = [];


var articleTopCount = 0;
var articleBottomCount = 0;
var articleShoesCount = 0;

function closeDiy() {
	//alert('close diy');
	$.DiyWindow.close();
}


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


//setInitialLook();

if(Alloy.Globals.lookCurrentId > 0){
	
	var lookArrayIndex = getLookArrayIndexByLookId(Alloy.Globals.lookCurrentId);
	Ti.API.info('!!Alloy.Globals.lookCurrentId: '+Alloy.Globals.lookCurrentId+ 'With lookArrayIndex: '+lookArrayIndex);
	//Ti.API.info('!!Alloy.Globals.getArticlesIndexByArticleId( Alloy.Globals.looksArray[lookArrayIndex][topArticleId]: '+Alloy.Globals.getArticlesIndexByArticleId( Alloy.Globals.looksArray[lookArrayIndex]['topArticleId']));
	//Ti.API.info('!!Alloy.Globals.lookCurrentId: '+Alloy.Globals.lookCurrentId+ 'With lookArrayIndex: '+lookArrayIndex);
	//Ti.API.info('!!Alloy.Globals.lookCurrentId: '+Alloy.Globals.lookCurrentId+ 'With lookArrayIndex: '+lookArrayIndex);
	
	var topArticleIndex = Alloy.Globals.getArticlesIndexByArticleId( Alloy.Globals.looksArray[lookArrayIndex]['topArticleId']);
	var bottomArticleIndex = Alloy.Globals.getArticlesIndexByArticleId( Alloy.Globals.looksArray[lookArrayIndex]['bottomArticleId']);
	var shoesArticleIndex = Alloy.Globals.getArticlesIndexByArticleId( Alloy.Globals.looksArray[lookArrayIndex]['shoesArticleId']);
	
	for(var index in articleTop) {
		if(articleTop[index]['articleIndex'] == topArticleIndex){
			Alloy.Globals.lookTopId = index;
			break;
		}
	}
	
	for(var index in articleBottom) {
		if(articleBottom[index]['articleIndex'] == bottomArticleIndex){
			Alloy.Globals.lookBottomId = index;
			break;
		}
	}
	
	for(var index in articleShoes) {
		if(articleShoes[index]['articleIndex'] == shoesArticleIndex){
			Alloy.Globals.lookShoesId = index;
			break;
		}
	}
	
	
	//Alloy.Globals.lookTopId = getTopIdByArticleIndex(looksCurrentArray[Alloy.Globals.lookCurrentIndex]['topArticleIndex']);
	//Alloy.Globals.lookTopId = getTopIdByArticleIndex(looksCurrentArray[Alloy.Globals.lookCurrentIndex]['topArticleIndex']);
	//Alloy.Globals.lookTopId = getTopIdByArticleIndex(looksCurrentArray[Alloy.Globals.lookCurrentIndex]['topArticleIndex']);
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	$.articleTopImg.image = articleTop[Alloy.Globals.lookTopId]['articlePhotoLook'];
	$.articleBottomImg.image = articleBottom[Alloy.Globals.lookBottomId]['articlePhotoLook'];
	$.articleShoesImg.image = articleShoes[Alloy.Globals.lookShoesId]['articlePhotoLook'];
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);

}else{
	
	Alloy.Globals.lookTopId = Math.floor(Math.random() * (articleTop.length));
	Alloy.Globals.lookBottomId = Math.floor(Math.random() * (articleBottom.length));
	Alloy.Globals.lookShoesId = Math.floor(Math.random() * (articleShoes.length));
	
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	$.articleTopImg.image = articleTop[Alloy.Globals.lookTopId]['articlePhotoLook'];
	$.articleBottomImg.image = articleBottom[Alloy.Globals.lookBottomId]['articlePhotoLook'];
	$.articleShoesImg.image = articleShoes[Alloy.Globals.lookShoesId]['articlePhotoLook'];
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	
}



$.articleTop.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	selectNextTopId();
   	} else if (e.direction == 'left') {
      	selectPreviousTopId();
   	}
	
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	var imagePath = articleTop[Alloy.Globals.lookTopId]['articlePhotoLook'];
	$.articleTopImg.image = imagePath;
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	
	Ti.API.info('!!top title: '+articleTop[Alloy.Globals.lookTopId]['title']+' - Image: '+imagePath);
});

$.articleBottom.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	selectNextBottomId();
   	} else if (e.direction == 'left') {
      	selectPreviousBottomId();
   	}
	
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	var imagePath = articleBottom[Alloy.Globals.lookBottomId]['articlePhotoLook'];
	$.articleBottomImg.image = imagePath;
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	Ti.API.info('!!bottom title: '+articleBottom[Alloy.Globals.lookBottomId]['title']+' - Image: '+imagePath);
});

$.articleShoes.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	selectNextShoesId();
   	} else if (e.direction == 'left') {
    	selectPreviousShoesId();
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


function selectNextTopId(){
	//alert('select top id prev: '+topId+' with length: '+articleTop.length);
	if((Alloy.Globals.lookTopId-1) >= 0){
		Alloy.Globals.lookTopId--;
	}else{
		Alloy.Globals.lookTopId = articleTop.length-1;
	}
}

function selectPreviousTopId(){

	if((Alloy.Globals.lookTopId+1) < articleTop.length){
		Alloy.Globals.lookTopId++;
	}else{
		Alloy.Globals.lookTopId = 0;
	}
}

function selectNextBottomId(){
	if((Alloy.Globals.lookBottomId-1) >= 0){
		Alloy.Globals.lookBottomId--;
	}else{
		Alloy.Globals.lookBottomId = articleBottom.length-1;
	}
}

function selectPreviousBottomId(){

	if((Alloy.Globals.lookBottomId+1) < articleBottom.length){
		Alloy.Globals.lookBottomId++;
	}else{
		Alloy.Globals.lookBottomId = 0;
	}
}

function selectNextShoesId(){
		if((Alloy.Globals.lookShoesId-1) >= 0){
			Alloy.Globals.lookShoesId--;
		}else{
			Alloy.Globals.lookShoesId = articleShoes.length-1;
		}
}

function selectPreviousShoesId(){
	if((Alloy.Globals.lookShoesId+1) < articleShoes.length){
		Alloy.Globals.lookShoesId++;
	}else{
		Alloy.Globals.lookShoesId = 0;
	}
}



function getTopIdByArticleIndex(topArticleIndex){
	
	for(var index in articleTop) {
		if(articleTop[index]['articleIndex'] == topArticleIndex){
			Alloy.Globals.lookTopId = index;
			break;
		}
	}
	
}

function getLookArrayIndexByLookId(lookId){
	
	for(var index in Alloy.Globals.looksArray) {
		if(Alloy.Globals.looksArray[index]['lookId'] == lookId){
			return index;
			break;
		}
	}
	
}