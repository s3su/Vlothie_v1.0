

//alert(Alloy.Globals.dump(Alloy.Globals.homeDataArray));
$.greetingTimePhrase.setText(Alloy.Globals.homeDataArray['greetingTimePhrase']);
$.greetingDayPhrase.setText(Alloy.Globals.homeDataArray['greetingDayPhrase']);
$.weatherId.setText(Alloy.Globals.homeDataArray['weatherId']);

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
	//alert('situationId: '+situationId);
		Alloy.createController("look").getView().open();
	//var lookTab = $.TabGroup.setActiveTab(2); 
	//lookTab.open();
	}
	
function showLooksWithSituation1(){
	Alloy.Globals.selectedSituationId = 1;
	Alloy.createController("look").getView().open();
}

function showLooksWithSituation2(){
	Alloy.Globals.selectedSituationId = 1;
	Alloy.createController("look").getView().open();
}

function showLooksWithSituation3(){
	Alloy.Globals.selectedSituationId = 1;
	Alloy.createController("look").getView().open();
}

function showLooksWithSituation4(){
	Alloy.Globals.selectedSituationId = 1;
	Alloy.createController("look").getView().open();
}

function showLooksWithSituationRdm(){
	Alloy.Globals.selectedSituationId = 1;
	Alloy.createController("look").getView().open();
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
	Alloy.createController("settings").getView().open();
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