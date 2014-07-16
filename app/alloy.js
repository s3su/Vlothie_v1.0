var getDefaultData = true;

if(getDefaultData){
	require('includes/getDefaultData');
}

// .. INCLUDES
require('includes/functions');



if (OS_IOS || OS_ANDROID) {
	
	Alloy.Globals.top = 0;
	Alloy.Globals.tableTop = '50dp';

	try {
		// check for iOS7
		if (OS_IOS && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
			Alloy.Globals.top = '20dp';
			Alloy.Globals.tableTop = '70dp';
		}
	} catch(e) {
		// catch and ignore
	}
}