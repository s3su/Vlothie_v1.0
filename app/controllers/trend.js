Ti.API.info('---------------- trend.js ------------------------');
var animation = require('alloy/animation');



function showLooks() {

	Alloy.Globals.selectedSituationId = 0;
	Alloy.Globals.selectedLookId = Alloy.Globals.trendsArray[Alloy.Globals.trendId]['lookId'];
	//Alloy.Globals.selectedSituationId = Alloy.Globals.trendsArray[Alloy.Globals.trendId]['lookId'];
	Alloy.createController("look").getView().open();
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
	
	//$.trendInfoText.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]['title']);
	//$.trendAuthorImg.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]['accountName']);
	//Ti.API.info('Alloy.Globals.trendId: '+Alloy.Globals.trendId+' AND imagePath: '+imagePath);
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

function closeTrend() {
	//alert('close look');
	$.trendWindow.close();
}