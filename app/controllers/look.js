var animation = require('alloy/animation');
var articleTop = [];
var articleBottom = [];
var articleShoes = [];

articleTop[0] = '/images/article/top.png';
articleTop[1] = '/images/article/bottom.png';
articleTop[2] = '/images/article/shoes.png';

articleBottom[0] = '/images/article/top.png';
articleBottom[1] = '/images/article/bottom.png';
articleBottom[2] = '/images/article/shoes.png';

articleShoes[0] = '/images/article/top.png';
articleShoes[1] = '/images/article/bottom.png';
articleShoes[2] = '/images/article/shoes.png';


// handle the swipe event -- change the liner notes 
// to a random member of the notes array
$.articleTop.addEventListener('swipe',function(){
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
	$.articleTopImg.image = articleTop[Math.floor(Math.random()*3)];
	animation.flipHorizontal($.articleTop,$.articleTop, 500);
});

$.articleBottom.addEventListener('swipe',function(){
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
	$.articleBottomImg.image = articleBottom[Math.floor(Math.random()*3)];
	animation.flipHorizontal($.articleBottom,$.articleBottom, 500);
});



$.articleShoes.addEventListener('swipe',function(){
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
	$.articleShoesImg.image = articleShoes[Math.floor(Math.random()*3)];
	animation.flipHorizontal($.articleShoes,$.articleShoes, 500);
});


// handle the swipe event -- change the liner notes 
// to a random member of the notes array
$.articleBottom.addEventListener('swipe',function(){
	$.articleBottomImg.image.animation = articleTop[Math.floor(Math.random()*3)];
});

// handle the swipe event -- change the liner notes 
// to a random member of the notes array
$.articleShoesImg.addEventListener('swipe',function(){
	$.articleShoesImg.image = articleTop[Math.floor(Math.random()*3)];
});


// Show task list based on selected status type
function showArticle() {
	//console.log(e);
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
	//console.log(e);
		Alloy.createController("settings").getView().open();
	//var settingTab = $.TabGroup.setActiveTab(4); 
	//settingTab.open();
	}