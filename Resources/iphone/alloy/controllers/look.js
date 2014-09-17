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
        Alloy.Globals.sectedArticleId = articleTop[Alloy.Globals.lookTopId]["articleId"];
        Alloy.createController("article").getView().open();
    }
    function showArticleBottom() {
        Alloy.Globals.sectedArticleId = articleBottom[Alloy.Globals.lookBottomId]["articleId"];
        Alloy.createController("article").getView().open();
    }
    function showArticleShoes() {
        Alloy.Globals.sectedArticleId = articleShoes[Alloy.Globals.lookShoesId]["articleId"];
        Alloy.createController("article").getView().open();
    }
    function showHome() {
        Alloy.createController("home").getView().open();
    }
    function showTrends() {
        Alloy.createController("trend").getView().open();
    }
    function showLooks() {
        Alloy.createController("look").getView().open();
    }
    function showAlarm() {
        Alloy.createController("alarm").getView().open();
    }
    function showSettings() {
        Alloy.createController("settings").getView().open();
    }
    function selectTopId(direction) {
        "right" == direction ? Alloy.Globals.lookTopId - 1 >= 0 ? Alloy.Globals.lookTopId-- : Alloy.Globals.lookTopId = articleTop.length - 1 : Alloy.Globals.lookTopId + 1 < articleTop.length ? Alloy.Globals.lookTopId++ : Alloy.Globals.lookTopId = 0;
        return Alloy.Globals.lookTopId;
    }
    function selectBottomId(direction) {
        "right" == direction ? Alloy.Globals.lookBottomId - 1 >= 0 ? Alloy.Globals.lookBottomId-- : Alloy.Globals.lookBottomId = articleBottom.length - 1 : Alloy.Globals.lookBottomId + 1 < articleBottom.length ? Alloy.Globals.lookBottomId++ : Alloy.Globals.lookBottomId = 0;
        return Alloy.Globals.lookBottomId;
    }
    function selectShoesId(direction) {
        "right" == direction ? Alloy.Globals.lookShoesId - 1 >= 0 ? Alloy.Globals.lookShoesId-- : Alloy.Globals.lookShoesId = articleShoes.length - 1 : Alloy.Globals.lookShoesId + 1 < articleShoes.length ? Alloy.Globals.lookShoesId++ : Alloy.Globals.lookShoesId = 0;
        return Alloy.Globals.lookShoesId;
    }
    function setInitialLook() {
        if (Alloy.Globals.selectedSituationId > 0) {
            for (var topId in articleTop) if (articleTop[topId]["situationId"] == Alloy.Globals.selectedSituationId) {
                Alloy.Globals.lookTopId = topId;
                break;
            }
            0 > Alloy.Globals.lookTopId && (Alloy.Globals.lookTopId = selectTopId());
            for (var bottomId in articleBottom) if (articleBottom[bottomId]["situationId"] == Alloy.Globals.selectedSituationId) {
                Alloy.Globals.lookBottomId = bottomId;
                break;
            }
            0 > Alloy.Globals.lookBottomId && (Alloy.Globals.lookBottomId = selectBottomId());
            for (var shoesId in articleShoes) if (articleShoes[shoesId]["situationId"] == Alloy.Globals.selectedSituationId) {
                Alloy.Globals.lookShoesId = shoesId;
                break;
            }
            0 > Alloy.Globals.lookShoesId && (Alloy.Globals.lookShoesId = selectShoesId());
            Alloy.Globals.selectedSituationId = 0;
        } else if (0 == Alloy.Globals.isSetLook) {
            topId = selectTopId();
            bottomId = selectBottomId();
            shoesId = selectShoesId();
            Alloy.Globals.isSetLook = 1;
        }
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
    this.__controllerPath = "look";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.lookWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "lookWindow"
    });
    $.__views.lookWindow && $.addTopLevelView($.__views.lookWindow);
    $.__views.lookButtons = Ti.UI.createView({
        height: "28dp",
        top: "0dp",
        zIndex: "10",
        id: "lookButtons"
    });
    $.__views.lookWindow.add($.__views.lookButtons);
<<<<<<< HEAD
    $.__views.__alloyId33 = Ti.UI.createButton({
=======
    $.__views.__alloyId27 = Ti.UI.createButton({
>>>>>>> FETCH_HEAD
        image: "/images/v-back.png",
        tintColor: "#fff",
        left: "8dp",
        top: "2dp",
<<<<<<< HEAD
        id: "__alloyId33"
    });
    $.__views.lookButtons.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createButton({
=======
        id: "__alloyId27"
    });
    $.__views.lookButtons.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createButton({
>>>>>>> FETCH_HEAD
        image: "/images/v-search.png",
        tintColor: "#fff",
        right: "8dp",
        top: "2dp",
<<<<<<< HEAD
        id: "__alloyId34"
    });
    $.__views.lookButtons.add($.__views.__alloyId34);
=======
        id: "__alloyId28"
    });
    $.__views.lookButtons.add($.__views.__alloyId28);
>>>>>>> FETCH_HEAD
    $.__views.getLook = Ti.UI.createView({
        top: "2dp",
        width: "100%",
        height: "20dp",
        id: "getLook"
    });
    $.__views.lookWindow.add($.__views.getLook);
<<<<<<< HEAD
    $.__views.__alloyId35 = Ti.UI.createLabel({
=======
    $.__views.__alloyId29 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "A cassual day look:",
<<<<<<< HEAD
        id: "__alloyId35"
    });
    $.__views.getLook.add($.__views.__alloyId35);
=======
        id: "__alloyId29"
    });
    $.__views.getLook.add($.__views.__alloyId29);
>>>>>>> FETCH_HEAD
    $.__views.menuLookView = Ti.UI.createView({
        top: "32dp",
        height: "36dp",
        id: "menuLookView"
    });
    $.__views.lookWindow.add($.__views.menuLookView);
<<<<<<< HEAD
    $.__views.__alloyId36 = Ti.UI.createButton({
        image: "/images/v-schedule.png",
        tintColor: "#b23b91",
        left: "20dp",
        id: "__alloyId36"
    });
    $.__views.menuLookView.add($.__views.__alloyId36);
    showHome ? $.__views.__alloyId36.addEventListener("click", showHome) : __defers["$.__views.__alloyId36!click!showHome"] = true;
    $.__views.__alloyId37 = Ti.UI.createButton({
        image: "/images/v-diamond.png",
        tintColor: "#b23b91",
        left: "50dp",
        id: "__alloyId37"
    });
    $.__views.menuLookView.add($.__views.__alloyId37);
    showTrends ? $.__views.__alloyId37.addEventListener("click", showTrends) : __defers["$.__views.__alloyId37!click!showTrends"] = true;
    $.__views.__alloyId38 = Ti.UI.createButton({
        image: "/images/v-stylist.png",
        tintColor: "#b23b91",
        left: "80dp",
        id: "__alloyId38"
    });
    $.__views.menuLookView.add($.__views.__alloyId38);
    showLooks ? $.__views.__alloyId38.addEventListener("click", showLooks) : __defers["$.__views.__alloyId38!click!showLooks"] = true;
    $.__views.__alloyId39 = Ti.UI.createButton({
        image: "/images/v-article-info.png",
        tintColor: "#b23b91",
        left: "110dp",
        id: "__alloyId39"
    });
    $.__views.menuLookView.add($.__views.__alloyId39);
    showAlarm ? $.__views.__alloyId39.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId39!click!showAlarm"] = true;
=======
    $.__views.__alloyId30 = Ti.UI.createButton({
        image: "/images/v-schedule.png",
        tintColor: "#b23b91",
        left: "20dp",
        id: "__alloyId30"
    });
    $.__views.menuLookView.add($.__views.__alloyId30);
    showHome ? $.__views.__alloyId30.addEventListener("click", showHome) : __defers["$.__views.__alloyId30!click!showHome"] = true;
    $.__views.__alloyId31 = Ti.UI.createButton({
        image: "/images/v-diamond.png",
        tintColor: "#b23b91",
        left: "50dp",
        id: "__alloyId31"
    });
    $.__views.menuLookView.add($.__views.__alloyId31);
    showTrends ? $.__views.__alloyId31.addEventListener("click", showTrends) : __defers["$.__views.__alloyId31!click!showTrends"] = true;
    $.__views.__alloyId32 = Ti.UI.createButton({
        image: "/images/v-stylist.png",
        tintColor: "#b23b91",
        left: "80dp",
        id: "__alloyId32"
    });
    $.__views.menuLookView.add($.__views.__alloyId32);
    showLooks ? $.__views.__alloyId32.addEventListener("click", showLooks) : __defers["$.__views.__alloyId32!click!showLooks"] = true;
    $.__views.__alloyId33 = Ti.UI.createButton({
        image: "/images/v-article-info.png",
        tintColor: "#b23b91",
        left: "110dp",
        id: "__alloyId33"
    });
    $.__views.menuLookView.add($.__views.__alloyId33);
    showAlarm ? $.__views.__alloyId33.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId33!click!showAlarm"] = true;
>>>>>>> FETCH_HEAD
    $.__views.lookContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "70dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "lookContent"
    });
    $.__views.lookWindow.add($.__views.lookContent);
    $.__views.articleTop = Ti.UI.createView({
        layout: "vertical",
        height: "150dp",
        top: "0dp",
        borderRadius: "0dp 10dp 0dp 10dp",
        bottom: "0dp",
        id: "articleTop"
    });
    $.__views.lookContent.add($.__views.articleTop);
    $.__views.articleTopImg = Ti.UI.createImageView({
        bottom: "0dp",
        id: "articleTopImg"
    });
    $.__views.articleTop.add($.__views.articleTopImg);
    showArticleTop ? $.__views.articleTopImg.addEventListener("click", showArticleTop) : __defers["$.__views.articleTopImg!click!showArticleTop"] = true;
<<<<<<< HEAD
    $.__views.__alloyId40 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId40"
    });
    $.__views.lookContent.add($.__views.__alloyId40);
=======
    $.__views.__alloyId34 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId34"
    });
    $.__views.lookContent.add($.__views.__alloyId34);
>>>>>>> FETCH_HEAD
    $.__views.articleBottom = Ti.UI.createView({
        layout: "vertical",
        height: "150dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleBottom"
    });
    $.__views.lookContent.add($.__views.articleBottom);
    $.__views.articleBottomImg = Ti.UI.createImageView({
        bottom: "0dp",
        id: "articleBottomImg"
    });
    $.__views.articleBottom.add($.__views.articleBottomImg);
    showArticleBottom ? $.__views.articleBottomImg.addEventListener("click", showArticleBottom) : __defers["$.__views.articleBottomImg!click!showArticleBottom"] = true;
<<<<<<< HEAD
    $.__views.__alloyId41 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId41"
    });
    $.__views.lookContent.add($.__views.__alloyId41);
=======
    $.__views.__alloyId35 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId35"
    });
    $.__views.lookContent.add($.__views.__alloyId35);
>>>>>>> FETCH_HEAD
    $.__views.articleShoes = Ti.UI.createView({
        layout: "vertical",
        height: "110dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleShoes"
    });
    $.__views.lookContent.add($.__views.articleShoes);
    $.__views.articleShoesImg = Ti.UI.createImageView({
        borderRadius: "0dp 12dp 0dp 12dp",
        id: "articleShoesImg"
    });
    $.__views.articleShoes.add($.__views.articleShoesImg);
    showArticleShoes ? $.__views.articleShoesImg.addEventListener("click", showArticleShoes) : __defers["$.__views.articleShoesImg!click!showArticleShoes"] = true;
    $.__views.menuHome = Ti.UI.createView({
        height: "58dp",
        width: "100%",
        bottom: "8dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.lookWindow.add($.__views.menuHome);
<<<<<<< HEAD
    $.__views.__alloyId42 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId42"
    });
    $.__views.menuHome.add($.__views.__alloyId42);
    showHome ? $.__views.__alloyId42.addEventListener("click", showHome) : __defers["$.__views.__alloyId42!click!showHome"] = true;
    $.__views.__alloyId43 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId43"
    });
    $.__views.menuHome.add($.__views.__alloyId43);
    showTrends ? $.__views.__alloyId43.addEventListener("click", showTrends) : __defers["$.__views.__alloyId43!click!showTrends"] = true;
    $.__views.__alloyId44 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId44"
    });
    $.__views.menuHome.add($.__views.__alloyId44);
    showLooks ? $.__views.__alloyId44.addEventListener("click", showLooks) : __defers["$.__views.__alloyId44!click!showLooks"] = true;
    $.__views.__alloyId45 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId45"
    });
    $.__views.menuHome.add($.__views.__alloyId45);
    showAlarm ? $.__views.__alloyId45.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId45!click!showAlarm"] = true;
    $.__views.__alloyId46 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId46"
    });
    $.__views.menuHome.add($.__views.__alloyId46);
    showSettings ? $.__views.__alloyId46.addEventListener("click", showSettings) : __defers["$.__views.__alloyId46!click!showSettings"] = true;
=======
    $.__views.__alloyId36 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId36"
    });
    $.__views.menuHome.add($.__views.__alloyId36);
    showHome ? $.__views.__alloyId36.addEventListener("click", showHome) : __defers["$.__views.__alloyId36!click!showHome"] = true;
    $.__views.__alloyId37 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId37"
    });
    $.__views.menuHome.add($.__views.__alloyId37);
    showTrends ? $.__views.__alloyId37.addEventListener("click", showTrends) : __defers["$.__views.__alloyId37!click!showTrends"] = true;
    $.__views.__alloyId38 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId38"
    });
    $.__views.menuHome.add($.__views.__alloyId38);
    showLooks ? $.__views.__alloyId38.addEventListener("click", showLooks) : __defers["$.__views.__alloyId38!click!showLooks"] = true;
    $.__views.__alloyId39 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId39"
    });
    $.__views.menuHome.add($.__views.__alloyId39);
    showAlarm ? $.__views.__alloyId39.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId39!click!showAlarm"] = true;
    $.__views.__alloyId40 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId40"
    });
    $.__views.menuHome.add($.__views.__alloyId40);
    showSettings ? $.__views.__alloyId40.addEventListener("click", showSettings) : __defers["$.__views.__alloyId40!click!showSettings"] = true;
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animation = require("alloy/animation");
    var articleTop = [];
    var articleBottom = [];
    var articleShoes = [];
    var articleTopCount = 0;
    var articleBottomCount = 0;
    var articleShoesCount = 0;
    Alloy.Globals.lookTopId = -1;
    Alloy.Globals.lookBottomId = -1;
    Alloy.Globals.lookShoesId = -1;
    for (var articleId in Alloy.Globals.articlesArray) switch (Alloy.Globals.articlesArray[articleId]["categoryId"]) {
      case "1":
        articleTop[articleTopCount] = [];
        articleTop[articleTopCount]["articleId"] = articleId;
        articleTop[articleTopCount]["articlePhotoLook"] = Alloy.Globals.articlesArray[articleId]["articlePhotoLook"];
        articleTop[articleTopCount]["title"] = Alloy.Globals.articlesArray[articleId]["title"];
        articleTop[articleTopCount]["subcategoryId"] = Alloy.Globals.articlesArray[articleId]["subcategoryId"];
        articleTop[articleTopCount]["subcategoryName"] = Alloy.Globals.articlesArray[articleId]["subcategoryName"];
        articleTop[articleTopCount]["situationId"] = Alloy.Globals.articlesArray[articleId]["situationId"];
        articleTop[articleTopCount]["articleLink"] = Alloy.Globals.articlesArray[articleId]["articleLink"];
        articleTop[articleTopCount]["wearIt"] = Alloy.Globals.articlesArray[articleId]["wearIt"];
        articleTop[articleTopCount]["clicks"] = Alloy.Globals.articlesArray[articleId]["clicks"];
        articleTop[articleTopCount]["description"] = Alloy.Globals.articlesArray[articleId]["description"];
        articleTopCount++;
        break;

      case "2":
        articleBottom[articleBottomCount] = [];
        articleBottom[articleBottomCount]["articleId"] = articleId;
        articleBottom[articleBottomCount]["articlePhotoLook"] = Alloy.Globals.articlesArray[articleId]["articlePhotoLook"];
        articleBottom[articleBottomCount]["title"] = Alloy.Globals.articlesArray[articleId]["title"];
        articleBottom[articleBottomCount]["subcategoryId"] = Alloy.Globals.articlesArray[articleId]["subcategoryId"];
        articleBottom[articleBottomCount]["subcategoryName"] = Alloy.Globals.articlesArray[articleId]["subcategoryName"];
        articleBottom[articleBottomCount]["situationId"] = Alloy.Globals.articlesArray[articleId]["situationId"];
        articleBottom[articleBottomCount]["articleLink"] = Alloy.Globals.articlesArray[articleId]["articleLink"];
        articleBottom[articleBottomCount]["wearIt"] = Alloy.Globals.articlesArray[articleId]["wearIt"];
        articleBottom[articleBottomCount]["clicks"] = Alloy.Globals.articlesArray[articleId]["clicks"];
        articleBottom[articleBottomCount]["description"] = Alloy.Globals.articlesArray[articleId]["description"];
        articleBottomCount++;
        break;

      case "3":
        articleShoes[articleShoesCount] = [];
        articleShoes[articleShoesCount]["articleId"] = articleId;
        articleShoes[articleShoesCount]["articlePhotoLook"] = Alloy.Globals.articlesArray[articleId]["articlePhotoLook"];
        articleShoes[articleShoesCount]["title"] = Alloy.Globals.articlesArray[articleId]["title"];
        articleShoes[articleShoesCount]["subcategoryId"] = Alloy.Globals.articlesArray[articleId]["subcategoryId"];
        articleShoes[articleShoesCount]["subcategoryName"] = Alloy.Globals.articlesArray[articleId]["subcategoryName"];
        articleShoes[articleShoesCount]["situationId"] = Alloy.Globals.articlesArray[articleId]["situationId"];
        articleShoes[articleShoesCount]["articleLink"] = Alloy.Globals.articlesArray[articleId]["articleLink"];
        articleShoes[articleShoesCount]["wearIt"] = Alloy.Globals.articlesArray[articleId]["wearIt"];
        articleShoes[articleShoesCount]["clicks"] = Alloy.Globals.articlesArray[articleId]["clicks"];
        articleShoes[articleShoesCount]["description"] = Alloy.Globals.articlesArray[articleId]["description"];
        articleShoesCount++;
    }
    setInitialLook();
    $.articleTop.addEventListener("swipe", function(e) {
        "right" == e.direction ? Alloy.Globals.lookTopId = selectTopId("right") : "left" == e.direction && (Alloy.Globals.lookTopId = selectTopId());
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
        var imagePath = articleTop[Alloy.Globals.lookTopId]["photo"];
        $.articleTopImg.image = imagePath;
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
    });
    $.articleBottom.addEventListener("swipe", function(e) {
        "right" == e.direction ? Alloy.Globals.lookBottomId = selectBottomId("right") : "left" == e.direction && (Alloy.Globals.lookTopId = selectBottomId());
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
        var imagePath = articleBottom[Alloy.Globals.lookBottomId]["articlePhotoLook"];
        $.articleBottomImg.image = imagePath;
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
    });
    $.articleShoes.addEventListener("swipe", function(e) {
        "right" == e.direction ? Alloy.Globals.lookShoesId = selectShoesId("right") : "left" == e.direction && (Alloy.Globals.lookShoesId = selectShoesId());
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
        var imagePath = articleShoes[Alloy.Globals.lookShoesId]["photo"];
        $.articleShoesImg.image = imagePath;
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
    });
<<<<<<< HEAD
    __defers["$.__views.__alloyId36!click!showHome"] && $.__views.__alloyId36.addEventListener("click", showHome);
    __defers["$.__views.__alloyId37!click!showTrends"] && $.__views.__alloyId37.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId38!click!showLooks"] && $.__views.__alloyId38.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId39!click!showAlarm"] && $.__views.__alloyId39.addEventListener("click", showAlarm);
    __defers["$.__views.articleTopImg!click!showArticleTop"] && $.__views.articleTopImg.addEventListener("click", showArticleTop);
    __defers["$.__views.articleBottomImg!click!showArticleBottom"] && $.__views.articleBottomImg.addEventListener("click", showArticleBottom);
    __defers["$.__views.articleShoesImg!click!showArticleShoes"] && $.__views.articleShoesImg.addEventListener("click", showArticleShoes);
    __defers["$.__views.__alloyId42!click!showHome"] && $.__views.__alloyId42.addEventListener("click", showHome);
    __defers["$.__views.__alloyId43!click!showTrends"] && $.__views.__alloyId43.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId44!click!showLooks"] && $.__views.__alloyId44.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId45!click!showAlarm"] && $.__views.__alloyId45.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId46!click!showSettings"] && $.__views.__alloyId46.addEventListener("click", showSettings);
=======
    __defers["$.__views.__alloyId30!click!showHome"] && $.__views.__alloyId30.addEventListener("click", showHome);
    __defers["$.__views.__alloyId31!click!showTrends"] && $.__views.__alloyId31.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId32!click!showLooks"] && $.__views.__alloyId32.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId33!click!showAlarm"] && $.__views.__alloyId33.addEventListener("click", showAlarm);
    __defers["$.__views.articleTopImg!click!showArticleTop"] && $.__views.articleTopImg.addEventListener("click", showArticleTop);
    __defers["$.__views.articleBottomImg!click!showArticleBottom"] && $.__views.articleBottomImg.addEventListener("click", showArticleBottom);
    __defers["$.__views.articleShoesImg!click!showArticleShoes"] && $.__views.articleShoesImg.addEventListener("click", showArticleShoes);
    __defers["$.__views.__alloyId36!click!showHome"] && $.__views.__alloyId36.addEventListener("click", showHome);
    __defers["$.__views.__alloyId37!click!showTrends"] && $.__views.__alloyId37.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId38!click!showLooks"] && $.__views.__alloyId38.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId39!click!showAlarm"] && $.__views.__alloyId39.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId40!click!showSettings"] && $.__views.__alloyId40.addEventListener("click", showSettings);
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;