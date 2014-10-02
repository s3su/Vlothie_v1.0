$.vlothieHome.open();


//Ti.API.info(Alloy.Globals.dump(Alloy.Globals.articlesArray));
Ti.API.info(Alloy.Globals.dump(Alloy.Globals.homeDataArray));
$.greetingTimePhrase.setText(Alloy.Globals.homeDataArray['greetingTimePhrase']);
$.greetingDayPhrase.setText(Alloy.Globals.homeDataArray['greetingDayPhrase']);
$.weatherText.setText(Alloy.Globals.weatherArray['temp_C']+" °C");
$.weatherIcon.image = '/images/weather/'+Alloy.Globals.weatherArray['weatherCode']+".png";

function showHome() {
	Alloy.createController("index").getView().open();
}

function showTrends() {
	Alloy.createController("trend").getView().open();
}

function showStylist() {
	Alloy.Globals.isSetLook = 0;
	Alloy.createController("stylist").getView().open();
}

function showLooks() {
	Alloy.Globals.isSetLook = 0;
	Alloy.createController("look").getView().open();
}
	
function showDIY(){
	Alloy.Globals.selectedSituationId = 2;
	Alloy.createController("diy").getView().open();
	//Alloy.createController('diy').getView().open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
}
	
function showLooksWithSituation1(){
	Alloy.Globals.selectedSituationId = 1;
	Alloy.createController("look").getView().open();
}

function showLooksWithSituation2(){
	Alloy.Globals.selectedSituationId = 2;
	Alloy.createController("look").getView().open();
}

function showLooksWithSituation3(){
	Alloy.Globals.selectedSituationId = 3;
	Alloy.createController("look").getView().open();
}

function showLooksWithSituation4(){
	Alloy.Globals.selectedSituationId = 4;
	Alloy.createController("look").getView().open();
}

	





if(OS_ANDROID) {
    // Add the app's name to the Android action bar
    $.tabGroup.addEventListener('open', function(e) {
        var activity = $.tabGroup.getActivity(); 
        if (activity != undefined && activity.actionBar != undefined) {
            // set the title to the app name defined in tiapp.xml
            activity.actionBar.title = Ti.App.name; 
        }
    });
}