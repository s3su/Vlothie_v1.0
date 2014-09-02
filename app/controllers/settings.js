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