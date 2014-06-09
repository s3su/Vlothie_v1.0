// open the "add item" window
function addToDoItem() {
	Alloy.createController("add").getView().open();
}

// Show task list based on selected status type
function showLooks() {
	//console.log(e);
		Alloy.createController("look").getView().open();

}

