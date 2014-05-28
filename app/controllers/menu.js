var INDEXES = {
	'Looks': 0,
	'Trends': 1,
	'Alarm': 2,
	'Settings': 1
};


// Show task list based on selected status type
function showWindows(e) {
	//console.log(e);
	if(e.index == 0){
		Alloy.createController("look").getView().open();
	}else if(e.index == 1){
		Alloy.createController("trend").getView().open();
	}else if(e.index == 2){
		Alloy.createController("alarm").getView().open();
	}else if(e.index == 3){
		Alloy.createController("settings").getView().open();
	}
	
	
}