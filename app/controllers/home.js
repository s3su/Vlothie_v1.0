

//alert(Alloy.Globals.dump(Alloy.Globals.homeDataArray));
$.greetingTimePhrase.setText(Alloy.Globals.homeDataArray['greetingTimePhrase']);
$.greetingDayPhrase.setText(Alloy.Globals.homeDataArray['greetingDayPhrase']);
$.weatherId.setText(Alloy.Globals.homeDataArray['weatherId']);

function showHome() {
	Alloy.createController("home").getView().open();
}

function showTrends() {
	Alloy.createController("trend").getView().open();
}

function showLooks() {
	Alloy.createController("look").getView().open();
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