function showHome() {
	Alloy.createController("index").getView().open();
}

Ti.API.info('!!!Inside stylist: ');
Ti.API.info(Alloy.Globals.dump(Alloy.Globals.stylistsArray));


for(var index in Alloy.Globals.stylistsArray) {
	Ti.API.info('!!!Stylist NAME: '+Alloy.Globals.stylistsArray[index]['stylistName']);
	
	var args = {};
	args['stylistFoto'] = Alloy.Globals.stylistsArray[index]['stylistFoto'];
	args['stylistName'] = Alloy.Globals.stylistsArray[index]['stylistName'];
		
	//var stylistEach = Alloy.createController("stylistEach", args);
	//var stylistEachView = stylistEach.getView();
	//$.stylistListView.add(stylistEachView);
	
	
}