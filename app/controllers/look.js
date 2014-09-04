var animation = require('alloy/animation');
var articleTop = [];
var articleBottom = [];
var articleShoes = [];


var articleTopCount = 0;
var articleBottomCount = 0;
var articleShoesCount = 0;

var topId = 0;
var bottomId = 0;
var shoesId = 0;

//alert(Alloy.Globals.dump(Alloy.Globals.articlesArray));

for(var articleId in Alloy.Globals.articlesArray) {
		

	switch(Alloy.Globals.articlesArray[articleId]['categoryId']){
		case "1":
			articleTop[articleTopCount] = [];
			articleTop[articleTopCount]['articleId'] = articleId;
			articleTop[articleTopCount]['photo'] = Alloy.Globals.articlesArray[articleId]['photo'];
			articleTop[articleTopCount]['name'] = Alloy.Globals.articlesArray[articleId]['name'];
			articleTop[articleTopCount]['subcategoryId'] = Alloy.Globals.articlesArray[articleId]['subcategoryId'];
			articleTop[articleTopCount]['subcategoryName'] = Alloy.Globals.articlesArray[articleId]['subcategoryName'];
			articleTopCount++;
		break;
		
		case "2":
			articleBottom[articleBottomCount] = [];
			articleBottom[articleBottomCount]['articleId'] = articleId;
			articleBottom[articleBottomCount]['photo'] = Alloy.Globals.articlesArray[articleId]['photo'];
			articleBottom[articleBottomCount]['name'] = Alloy.Globals.articlesArray[articleId]['name'];
			articleBottom[articleBottomCount]['subcategoryId'] = Alloy.Globals.articlesArray[articleId]['subcategoryId'];
			articleBottom[articleBottomCount]['subcategoryName'] = Alloy.Globals.articlesArray[articleId]['subcategoryName'];
			articleBottomCount++;
		break;
		
		case "3":
			articleShoes[articleShoesCount] = [];
			articleShoes[articleShoesCount]['articleId'] = articleId;
			articleShoes[articleShoesCount]['photo'] = Alloy.Globals.articlesArray[articleId]['photo'];
			articleShoes[articleShoesCount]['name'] = Alloy.Globals.articlesArray[articleId]['name'];
			articleShoes[articleShoesCount]['subcategoryId'] = Alloy.Globals.articlesArray[articleId]['subcategoryId'];
			articleShoes[articleShoesCount]['subcategoryName'] = Alloy.Globals.articlesArray[articleId]['subcategoryName'];
			articleShoesCount++;
		break;
	}
	
}

//alert(Alloy.Globals.dump(articleTop));
		
		
/*
articleTop[0] = 'http://be.vlothie.com/photos/articles/pants1.jpg';
articleTop[1] = 'http://be.vlothie.com/photos/articles/skirt1.jpg';
articleTop[2] = 'http://be.vlothie.com/photos/articles/short1.jpg';

articleTop[0] = '/images/article/top.png';
articleTop[1] = '/images/article/bottom.png';
articleTop[2] = '/images/article/shoes.png';

articleBottom[0] = '/images/article/top.png';
articleBottom[1] = '/images/article/bottom.png';
articleBottom[2] = '/images/article/shoes.png';

articleShoes[0] = '/images/article/top.png';
articleShoes[1] = '/images/article/bottom.png';
articleShoes[2] = '/images/article/shoes.png';
*/


// handle the swipe event -- change the liner notes 
// to a random member of the notes array
$.articleTop.addEventListener('swipe',function(){
	topId = selectTopId();
	//alert('topId: '+topId);
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	var imagePath = articleTop[topId]['photo'];
	$.articleTopImg.image = imagePath;
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
});

$.articleBottom.addEventListener('swipe',function(){
	bottomId = selectBottomId();
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	var imagePath = articleBottom[bottomId]['photo'];
	$.articleBottomImg.image = imagePath;
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
});

$.articleShoes.addEventListener('swipe',function(){
	shoesId = selectShoesId();
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	var imagePath = articleShoes[shoesId]['photo'];
	$.articleShoesImg.image = imagePath;
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
});





// Show task list based on selected status type
function showArticleTop() {
	//console.log(e);
	Alloy.Globals.sectedArticleId = articleTop[topId]['articleId'];
	Alloy.createController("article").getView().open();
}

function showArticleBottom() {
	//console.log(e);
	Alloy.Globals.sectedArticleId = articleBottom[topId]['articleId'];
	Alloy.createController("article").getView().open();
}

function showArticleShoes() {
	//console.log(e);
	Alloy.Globals.sectedArticleId = articleShoes[topId]['articleId'];
	Alloy.createController("article").getView().open();
}
function showHome() {
	//console.log(e);
		Alloy.createController("home").getView().open();
	//var homeTab = $.TabGroup.setActiveTab(0); 
	//homeTab.open();
	}

function showTrends() {
	//console.log(e);
		Alloy.createController("trend").getView().open();
	//var trendTab = $.TabGroup.setActiveTab(1); 
	//trendTab.open();
	}

function showLooks() {

	//console.log(e);
		Alloy.createController("look").getView().open();
	//var lookTab = $.TabGroup.setActiveTab(2); 
	//lookTab.open();
	}
	
function showAlarm() {
	//console.log(e);
		Alloy.createController("alarm").getView().open();
	//var alarmTab = $.TabGroup.setActiveTab(3); 
	//alarmTab.open();
	}
	
function showSettings() {

	//var settingTab = $.TabGroup.setActiveTab(4); 
	//settingTab.open();
	//console.log(e);
		Alloy.createController("settings").getView().open();
	//var settingTab = $.TabGroup.setActiveTab(4); 
	//settingTab.open();
	}
	
function selectTopId(){
	//alert('select top id prev: '+topId+' with length: '+articleTop.length);
	if((topId+1) < articleTop.length){
		topId++;
	}else{
		topId = 0;
	}
	return topId;
}

function selectBottomId(){
	if((bottomId+1) < articleBottom.length){
		bottomId++;
	}else{
		bottomId = 0;
	}
	return bottomId;
}

function selectShoesId(){
	if((shoesId+1) < articleShoes.length){
		shoesId++;
	}else{
		shoesId = 0;
	}
	return shoesId;
}