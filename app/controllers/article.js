// Show task list based on selected status type
function showArticle() {
	//console.log(e);
		Alloy.createController("article").getView().open();
}

function showHome() {
	//console.log(e);
	Alloy.createController("home", {showTab: 'look'}).getView().open();
}	

function closeArticle() {
	$.articleWindow.close();
}