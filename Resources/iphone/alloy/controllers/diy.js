function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showArticleTop() {
        Alloy.Globals.selectedArticleIndex = articleTop[Alloy.Globals.lookTopId]["articleIndex"];
        Alloy.createController("article").getView().open();
    }
    function showArticleBottom() {
        Alloy.Globals.selectedArticleIndex = articleBottom[Alloy.Globals.lookBottomId]["articleIndex"];
        Alloy.createController("article").getView().open();
    }
    function showArticleShoes() {
        Alloy.Globals.selectedArticleIndex = articleShoes[Alloy.Globals.lookShoesId]["articleIndex"];
        Alloy.createController("article").getView().open();
    }
    function showHome() {
        Alloy.createController("index").getView().open();
    }
    function selectTopId(direction) {
        "right" == direction ? Alloy.Globals.lookTopId - 1 >= 0 ? Alloy.Globals.lookTopId-- : Alloy.Globals.lookTopId = articleTop.length - 1 : "left" == direction ? Alloy.Globals.lookTopId + 1 < articleTop.length ? Alloy.Globals.lookTopId++ : Alloy.Globals.lookTopId = 0 : "random" == direction && (Alloy.Globals.lookTopId = Math.floor(Math.random() * articleTop.length));
        return Alloy.Globals.lookTopId;
    }
    function selectBottomId(direction) {
        "right" == direction ? Alloy.Globals.lookBottomId - 1 >= 0 ? Alloy.Globals.lookBottomId-- : Alloy.Globals.lookBottomId = articleBottom.length - 1 : "left" == direction ? Alloy.Globals.lookBottomId + 1 < articleBottom.length ? Alloy.Globals.lookBottomId++ : Alloy.Globals.lookBottomId = 0 : "random" == direction && (Alloy.Globals.lookBottomId = Math.floor(Math.random() * articleBottom.length));
        return Alloy.Globals.lookBottomId;
    }
    function selectShoesId(direction) {
        "right" == direction ? Alloy.Globals.lookShoesId - 1 >= 0 ? Alloy.Globals.lookShoesId-- : Alloy.Globals.lookShoesId = articleShoes.length - 1 : "left" == direction ? Alloy.Globals.lookShoesId + 1 < articleShoes.length ? Alloy.Globals.lookShoesId++ : Alloy.Globals.lookShoesId = 0 : "random" == direction && (Alloy.Globals.lookShoesId = Math.floor(Math.random() * articleShoes.length));
        return Alloy.Globals.lookShoesId;
    }
    function setLook(lookId) {
        lookId > 0 ? Alloy.Globals.lookSetIndex = getLookSetIndexBylookId(lookId) : Alloy.Globals.lookSetIndex + 1 < Alloy.Globals.looksArray["size"] ? Alloy.Globals.lookSetIndex++ : Alloy.Globals.lookSetIndex = 0;
        Ti.API.info("Alloy.Globals.lookSetIndex: " + Alloy.Globals.lookSetIndex);
        for (var index in articleTop) if (articleTop[index]["articleId"] == Alloy.Globals.looksArray[Alloy.Globals.lookSetIndex]["topArticleId"]) {
            Alloy.Globals.lookTopId = index;
            break;
        }
        for (var index in articleBottom) if (articleBottom[index]["articleId"] == Alloy.Globals.looksArray[Alloy.Globals.lookSetIndex]["bottomArticleId"]) {
            Alloy.Globals.lookBottomId = index;
            break;
        }
        for (var index in articleShoes) if (articleShoes[index]["articleId"] == Alloy.Globals.looksArray[Alloy.Globals.lookSetIndex]["shoesArticleId"]) {
            Alloy.Globals.lookShoesId = index;
            break;
        }
    }
    function getLookSetIndexBylookId(lookId) {
        for (var index in Alloy.Globals.looksArray) if (Alloy.Globals.looksArray[index]["lookId"] == lookId) return index;
    }
    function setInitialLook() {
        if (Alloy.Globals.selectedSituationId > 0) {
            Ti.API.info("!!setInitialLook() situationId: " + Alloy.Globals.selectedSituationId);
            for (var topId in articleTop) if (articleTop[topId]["situationId"] == Alloy.Globals.selectedSituationId) {
                Alloy.Globals.lookTopId = topId;
                break;
            }
            Alloy.Globals.lookTopId < 0 && (Alloy.Globals.lookTopId = selectTopId());
            for (var bottomId in articleBottom) if (articleBottom[bottomId]["situationId"] == Alloy.Globals.selectedSituationId) {
                Alloy.Globals.lookBottomId = bottomId;
                break;
            }
            Alloy.Globals.lookBottomId < 0 && (Alloy.Globals.lookBottomId = selectBottomId());
            for (var shoesId in articleShoes) if (articleShoes[shoesId]["situationId"] == Alloy.Globals.selectedSituationId) {
                Alloy.Globals.lookShoesId = shoesId;
                break;
            }
            Alloy.Globals.lookShoesId < 0 && (Alloy.Globals.lookShoesId = selectShoesId());
            Alloy.Globals.selectedSituationId = 0;
        } else if (Alloy.Globals.isSetLook > 0) {
            Ti.API.info("!!setInitialLook() Setted Look ");
            setLook(Alloy.Globals.isSetLook);
            Alloy.Globals.isSetLook = 0;
        } else if (0 == Alloy.Globals.isSetLook) {
            Ti.API.info("!!setInitialLook() Not setted Look ");
            setLook();
            Alloy.Globals.isSetLook = 0;
        }
        Ti.API.info("!!Setted looks ids) TOP: " + Alloy.Globals.lookTopId + " - BOTTOM: " + Alloy.Globals.lookBottomId + " - SHOES: " + Alloy.Globals.lookShoesId);
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
        var imagePath = articleTop[Alloy.Globals.lookTopId]["articlePhotoLook"];
        $.articleTopImg.image = imagePath;
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
        var imagePath = articleBottom[Alloy.Globals.lookBottomId]["articlePhotoLook"];
        $.articleBottomImg.image = imagePath;
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
        var imagePath = articleShoes[Alloy.Globals.lookShoesId]["articlePhotoLook"];
        $.articleShoesImg.image = imagePath;
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diy";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.DIYWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "DIYWindow",
        modal: "true"
    });
    $.__views.DIYWindow && $.addTopLevelView($.__views.DIYWindow);
    $.__views.windowButtons = Ti.UI.createView({
        height: "36dp",
        top: "0dp",
        zIndex: "1",
        backgroundColor: "transparent",
        id: "windowButtons"
    });
    $.__views.DIYWindow.add($.__views.windowButtons);
    $.__views.__alloyId9 = Ti.UI.createButton({
        image: "/images/v-back.png",
        height: "32dp",
        tintColor: "#922a80",
        left: "8dp",
        top: "2dp",
        id: "__alloyId9"
    });
    $.__views.windowButtons.add($.__views.__alloyId9);
    showHome ? $.__views.__alloyId9.addEventListener("click", showHome) : __defers["$.__views.__alloyId9!click!showHome"] = true;
    $.__views.windowTitle = Ti.UI.createView({
        top: "6dp",
        width: "100%",
        height: "24dp",
        id: "windowTitle"
    });
    $.__views.DIYWindow.add($.__views.windowTitle);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "20dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Do It Yourself",
        id: "__alloyId10"
    });
    $.__views.windowTitle.add($.__views.__alloyId10);
    $.__views.DIYContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "70dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "DIYContent"
    });
    $.__views.DIYWindow.add($.__views.DIYContent);
    $.__views.articleTop = Ti.UI.createView({
        layout: "vertical",
        height: "150dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleTop"
    });
    $.__views.DIYContent.add($.__views.articleTop);
    $.__views.articleTopImg = Ti.UI.createImageView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "articleTopImg"
    });
    $.__views.articleTop.add($.__views.articleTopImg);
    showArticleTop ? $.__views.articleTopImg.addEventListener("click", showArticleTop) : __defers["$.__views.articleTopImg!click!showArticleTop"] = true;
    $.__views.__alloyId11 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId11"
    });
    $.__views.DIYContent.add($.__views.__alloyId11);
    $.__views.articleBottom = Ti.UI.createView({
        layout: "vertical",
        height: "150dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleBottom"
    });
    $.__views.DIYContent.add($.__views.articleBottom);
    $.__views.articleBottomImg = Ti.UI.createImageView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "articleBottomImg"
    });
    $.__views.articleBottom.add($.__views.articleBottomImg);
    showArticleBottom ? $.__views.articleBottomImg.addEventListener("click", showArticleBottom) : __defers["$.__views.articleBottomImg!click!showArticleBottom"] = true;
    $.__views.__alloyId12 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId12"
    });
    $.__views.DIYContent.add($.__views.__alloyId12);
    $.__views.articleShoes = Ti.UI.createView({
        layout: "vertical",
        height: "120dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleShoes"
    });
    $.__views.DIYContent.add($.__views.articleShoes);
    $.__views.articleShoesImg = Ti.UI.createImageView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "articleShoesImg"
    });
    $.__views.articleShoes.add($.__views.articleShoesImg);
    showArticleShoes ? $.__views.articleShoesImg.addEventListener("click", showArticleShoes) : __defers["$.__views.articleShoesImg!click!showArticleShoes"] = true;
    $.__views.__alloyId13 = Ti.UI.createView({
        left: "22dp",
        bottom: "2dp",
        zIndex: "200",
        width: "60dp",
        height: "60dp",
        id: "__alloyId13"
    });
    $.__views.DIYWindow.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createButton({
        backgroundImage: "/images/v-article-diamond.png",
        zIndex: "300",
        width: "60dp",
        height: "60dp",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        right: "22dp",
        bottom: "2dp",
        zIndex: "250",
        width: "60dp",
        height: "60dp",
        id: "__alloyId15"
    });
    $.__views.DIYWindow.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createButton({
        backgroundImage: "/images/v-article-wear.png",
        zIndex: "300",
        width: "60dp",
        height: "60dp",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("---------------- look.js ------------------------");
    var animation = require("alloy/animation");
    var articleTop = [];
    var articleBottom = [];
    var articleShoes = [];
    var articleTopCount = 0;
    var articleBottomCount = 0;
    var articleShoesCount = 0;
    for (var index in Alloy.Globals.articlesArray) switch (Alloy.Globals.articlesArray[index]["categoryId"]) {
      case "1":
        articleTop[articleTopCount] = [];
        articleTop[articleTopCount]["articleIndex"] = index;
        articleTop[articleTopCount]["articleId"] = Alloy.Globals.articlesArray[index]["articleId"];
        articleTop[articleTopCount]["articlePhotoLook"] = Alloy.Globals.articlesArray[index]["articlePhotoLook"];
        articleTop[articleTopCount]["title"] = Alloy.Globals.articlesArray[index]["title"];
        articleTop[articleTopCount]["subcategoryId"] = Alloy.Globals.articlesArray[index]["subcategoryId"];
        articleTop[articleTopCount]["subcategoryName"] = Alloy.Globals.articlesArray[index]["subcategoryName"];
        articleTop[articleTopCount]["situationId"] = Alloy.Globals.articlesArray[index]["situationId"];
        articleTop[articleTopCount]["articleLink"] = Alloy.Globals.articlesArray[index]["articleLink"];
        articleTop[articleTopCount]["wearIt"] = Alloy.Globals.articlesArray[index]["wearIt"];
        articleTop[articleTopCount]["clicks"] = Alloy.Globals.articlesArray[index]["clicks"];
        articleTop[articleTopCount]["description"] = Alloy.Globals.articlesArray[index]["description"];
        articleTopCount++;
        break;

      case "2":
        articleBottom[articleBottomCount] = [];
        articleBottom[articleBottomCount]["articleIndex"] = index;
        articleBottom[articleBottomCount]["articleId"] = Alloy.Globals.articlesArray[index]["articleId"];
        articleBottom[articleBottomCount]["articlePhotoLook"] = Alloy.Globals.articlesArray[index]["articlePhotoLook"];
        articleBottom[articleBottomCount]["title"] = Alloy.Globals.articlesArray[index]["title"];
        articleBottom[articleBottomCount]["subcategoryId"] = Alloy.Globals.articlesArray[index]["subcategoryId"];
        articleBottom[articleBottomCount]["subcategoryName"] = Alloy.Globals.articlesArray[index]["subcategoryName"];
        articleBottom[articleBottomCount]["situationId"] = Alloy.Globals.articlesArray[index]["situationId"];
        articleBottom[articleBottomCount]["articleLink"] = Alloy.Globals.articlesArray[index]["articleLink"];
        articleBottom[articleBottomCount]["wearIt"] = Alloy.Globals.articlesArray[index]["wearIt"];
        articleBottom[articleBottomCount]["clicks"] = Alloy.Globals.articlesArray[index]["clicks"];
        articleBottom[articleBottomCount]["description"] = Alloy.Globals.articlesArray[index]["description"];
        articleBottomCount++;
        break;

      case "3":
        articleShoes[articleShoesCount] = [];
        articleShoes[articleShoesCount]["articleIndex"] = index;
        articleShoes[articleShoesCount]["articleId"] = Alloy.Globals.articlesArray[index]["articleId"];
        articleShoes[articleShoesCount]["articlePhotoLook"] = Alloy.Globals.articlesArray[index]["articlePhotoLook"];
        articleShoes[articleShoesCount]["title"] = Alloy.Globals.articlesArray[index]["title"];
        articleShoes[articleShoesCount]["subcategoryId"] = Alloy.Globals.articlesArray[index]["subcategoryId"];
        articleShoes[articleShoesCount]["subcategoryName"] = Alloy.Globals.articlesArray[index]["subcategoryName"];
        articleShoes[articleShoesCount]["situationId"] = Alloy.Globals.articlesArray[index]["situationId"];
        articleShoes[articleShoesCount]["articleLink"] = Alloy.Globals.articlesArray[index]["articleLink"];
        articleShoes[articleShoesCount]["wearIt"] = Alloy.Globals.articlesArray[index]["wearIt"];
        articleShoes[articleShoesCount]["clicks"] = Alloy.Globals.articlesArray[index]["clicks"];
        articleShoes[articleShoesCount]["description"] = Alloy.Globals.articlesArray[index]["description"];
        articleShoesCount++;
    }
    setInitialLook();
    $.articleTop.addEventListener("swipe", function(e) {
        "right" == e.direction ? Alloy.Globals.lookTopId = selectTopId("right") : "left" == e.direction && (Alloy.Globals.lookTopId = selectTopId("left"));
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
        var imagePath = articleTop[Alloy.Globals.lookTopId]["articlePhotoLook"];
        $.articleTopImg.image = imagePath;
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
        Ti.API.info("!!top title: " + articleTop[Alloy.Globals.lookTopId]["title"] + " - Image: " + imagePath);
    });
    $.articleBottom.addEventListener("swipe", function(e) {
        "right" == e.direction ? Alloy.Globals.lookBottomId = selectBottomId("right") : "left" == e.direction && (Alloy.Globals.lookTopId = selectBottomId("left"));
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
        var imagePath = articleBottom[Alloy.Globals.lookBottomId]["articlePhotoLook"];
        $.articleBottomImg.image = imagePath;
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
        Ti.API.info("!!bottom title: " + articleBottom[Alloy.Globals.lookBottomId]["title"] + " - Image: " + imagePath);
    });
    $.articleShoes.addEventListener("swipe", function(e) {
        "right" == e.direction ? Alloy.Globals.lookShoesId = selectShoesId("right") : "left" == e.direction && (Alloy.Globals.lookShoesId = selectShoesId("left"));
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
        var imagePath = articleShoes[Alloy.Globals.lookShoesId]["articlePhotoLook"];
        $.articleShoesImg.image = imagePath;
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
        Ti.API.info("articleShoes[Alloy.Globals.lookShoesId][articlePhotoLook]:  with: Alloy.Globals.lookShoesId: " + Alloy.Globals.lookShoesId);
        Ti.API.info("!!shoes title: " + articleShoes[Alloy.Globals.lookShoesId]["title"] + " - Image: " + imagePath);
    });
    __defers["$.__views.__alloyId9!click!showHome"] && $.__views.__alloyId9.addEventListener("click", showHome);
    __defers["$.__views.articleTopImg!click!showArticleTop"] && $.__views.articleTopImg.addEventListener("click", showArticleTop);
    __defers["$.__views.articleBottomImg!click!showArticleBottom"] && $.__views.articleBottomImg.addEventListener("click", showArticleBottom);
    __defers["$.__views.articleShoesImg!click!showArticleShoes"] && $.__views.articleShoesImg.addEventListener("click", showArticleShoes);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;