// open the window
$.landingWin.open();


// open the "add item" window
function goToHome() {
	Alloy.createController("home").getView().open();
}