var INDEXES ={  
	'Home': 0,
	'Looks': 1,
	'Trends': 2,
	'Alarm': 3,
	'Settings': 4,
	'Article': 5
};

// Show task list based on selected status type
function showWindows(e) {
	console.log(e);
	if(e.index == 0){
		//alert('home');
		Alloy.createController("home").getView().open();
	}else if(e.index == 1){
		Alloy.createController("trend").getView().open();
	}else if(e.index == 2){
		Alloy.createController("alarm").getView().open();
	}else if(e.index == 3){
		Alloy.createController("settings").getView().open();
	}else if(e.index == 4){ 
		Alloy.createController("look").getView().open();
	}else if(e.index == 5){
		Alloy.createController("article").getView().open();
	}
}

var whereIndex = INDEXES['All'];


// Filter the fetched collection before rendering. Don't return the
// collection itself, but instead return an array of models
// that you would like to render.
function whereFunction(collection) {
	return !whereIndex ?
		collection.models :
		collection.where({ done: whereIndex === 1 ? 0 : 1 });
}

// Show the loading icon.
$.loading.setOpacity(1.0);

// Load some content...

// Hide the loading icon.
$.loading.setOpacity(0.0);
