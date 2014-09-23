Ti.API.info("!!setArticleData.js LOADED");

var jsonURL = "http://be.vlothie.com/json/setArticles.php";

Ti.API.info("!!---- setArticleData.js set json data to: " + jsonURL);

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {};

xhr.open("POST", jsonURL);

var addClosetExample = {
    accountId: "10",
    articleId: "11"
};