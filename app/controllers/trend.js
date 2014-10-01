Ti.API.info('---------------- trend.js ------------------------');
var animation = require('alloy/animation');

function showHome() {
	//console.log(e);
		Alloy.createController("index").getView().open();
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

	Alloy.Globals.isSetLook = Alloy.Globals.trendsArray[Alloy.Globals.trendId]['lookId'];
	//Alloy.Globals.selectedSituationId = Alloy.Globals.trendsArray[Alloy.Globals.trendId]['lookId'];
	Alloy.createController("look").getView().open();
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

if(Alloy.Globals.trendId <= 0){	
	Alloy.Globals.trendId = selectTrendId('random');
}

var imagePath = Alloy.Globals.trendsArray[Alloy.Globals.trendId]['photoMain'];
$.trendImg.image = imagePath;
//$.trendInfoText.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]['title']);
//$.trendAuthorImg.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]['accountName']);

$.trendContent.addEventListener('swipe',function(e){
	if (e.direction == 'right') {
      	Alloy.Globals.trendId = selectTrendId('right');
   	} else if (e.direction == 'left') {
    	Alloy.Globals.trendId = selectTrendId('left');
   	}
	
	animation.flipHorizontal($.trendContent,$.trendContent, 500);
	var imagePath = Alloy.Globals.trendsArray[Alloy.Globals.trendId]['photoMain'];
	$.trendImg.image = imagePath;
	animation.flipHorizontal($.trendContent,$.trendContent, 500);
	$.trendInfoText.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]['title']);
	$.trendAuthorImg.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]['accountName']);
	Ti.API.info('Alloy.Globals.trendId: '+Alloy.Globals.trendId+' AND imagePath: '+imagePath);
	//Ti.API.info('!!shoes title: '+articleShoes[Alloy.Globals.lookShoesId]['title']+' - Image: '+imagePath);
});


function selectTrendId(direction){
	//Ti.API.info('Alloy.Globals.trendsArray[size]: '+Alloy.Globals.trendsArray['size']);
	if(direction == 'right'){
		if((Alloy.Globals.trendId-1) >= 0){
			Alloy.Globals.trendId--;
		}else{
			Alloy.Globals.trendId = Alloy.Globals.trendsArray['size']-1;
		}
	}else if(direction == 'left'){
		if((Alloy.Globals.trendId+1) < Alloy.Globals.trendsArray['size']){
			Alloy.Globals.trendId++;
		}else{
			Alloy.Globals.trendId = 0;
		}
	}else if(direction == 'random'){
		Alloy.Globals.trendId = Math.floor(Math.random() * (Alloy.Globals.trendsArray['size']));
	}
	return Alloy.Globals.trendId;
}
