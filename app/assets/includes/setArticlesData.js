Ti.API.info('!!setArticleData.js LOADED');

var jsonURL = "http://be.vlothie.com/json/setArticles.php";

//Array to store the data from the articles



Ti.API.info('!!---- setArticleData.js set json data to: '+jsonURL);
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
		
};

xhr.open("POST",jsonURL);
var addClosetExample = ({
						"accountId": "10",
						"articleId": "11",
						});

//alert('addClosetExample: '+Alloy.Globals.dump(addClosetExample));
//alert('addClosetExample2: '+Alloy.Globals.dump(addClosetExample2));
//xhr.send(addClosetExample);