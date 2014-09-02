Ti.API.info('!!getArticleData.js LOADED');

var jsonURL = "http://be.vlothie.com/json/getArticles.php";

//Array to store the data from the articles
var articlesArray = [];
articlesArray[3] = [];

Ti.API.info('!!---- getArticleData.js get json data from: '+jsonURL);
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
		Ti.API.info('got data from the network: ' + this.responseText);
		var jsonData = JSON.parse(this.responseText);
		//Ti.API.info(dump(jsonData));
		
		//alert(jsonData[0]['name']);
		
		for(var index in jsonData) {
			articlesArray[index] = [];
			//articlesArray[3]['name'] = 'test';
			//alert(jsonData[index]['name']);
			for(var field in jsonData[index]) {
				//alert(jsonData[index][field]);
				
				articlesArray[index][field] = jsonData[index][field];
			}
		}
		
};

xhr.open("GET",jsonURL);
xhr.send();

alert(dump(articlesArray));


function dump(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Stings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
}
