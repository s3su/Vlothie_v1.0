var INDEXES ={  
	'Home': 0,
	'Trends': 1,
	'Looks': 2,
	'Article': 3,
	'Alarm': 4,
	'Settings': 5
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
		Alloy.createController("look").getView().open();
	}else if(e.index == 3){
		Alloy.createController("article").getView().open();
	}else if(e.index == 4){ 
		Alloy.createController("alarm").getView().open();
	}else if(e.index == 5){
		Alloy.createController("settings").getView().open();
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
