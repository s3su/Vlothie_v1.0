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
        Alloy.Globals.sectedArticleId = articleTop[topId]["articleId"];
        Alloy.createController("article").getView().open();
    }
    function showArticleBottom() {
        Alloy.Globals.sectedArticleId = articleBottom[topId]["articleId"];
        Alloy.createController("article").getView().open();
    }
    function showArticleShoes() {
        Alloy.Globals.sectedArticleId = articleShoes[topId]["articleId"];
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
    function selectTopId() {
        articleTop.length > topId + 1 ? topId++ : topId = 0;
        return topId;
    }
    function selectBottomId() {
        articleBottom.length > bottomId + 1 ? bottomId++ : bottomId = 0;
        return bottomId;
    }
    function selectShoesId() {
        articleShoes.length > shoesId + 1 ? shoesId++ : shoesId = 0;
        return shoesId;
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
<<<<<<< HEAD
    $.__views.__alloyId39 = Ti.UI.createButton({
=======
    $.__views.__alloyId36 = Ti.UI.createButton({
>>>>>>> FETCH_HEAD
=======
    $.__views.__alloyId36 = Ti.UI.createButton({
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
        image: "/images/v-back.png",
        tintColor: "#fff",
        left: "8dp",
        top: "2dp",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId39"
    });
    $.__views.lookButtons.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createButton({
=======
        id: "__alloyId36"
    });
    $.__views.lookButtons.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createButton({
>>>>>>> FETCH_HEAD
=======
        id: "__alloyId36"
    });
    $.__views.lookButtons.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createButton({
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
        image: "/images/v-search.png",
        tintColor: "#fff",
        right: "8dp",
        top: "2dp",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId40"
    });
    $.__views.lookButtons.add($.__views.__alloyId40);
=======
        id: "__alloyId37"
    });
    $.__views.lookButtons.add($.__views.__alloyId37);
>>>>>>> FETCH_HEAD
=======
        id: "__alloyId37"
    });
    $.__views.lookButtons.add($.__views.__alloyId37);
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    $.__views.getLook = Ti.UI.createView({
        top: "2dp",
        width: "100%",
        height: "20dp",
        id: "getLook"
    });
    $.__views.lookWindow.add($.__views.getLook);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId41 = Ti.UI.createLabel({
=======
    $.__views.__alloyId38 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
=======
    $.__views.__alloyId38 = Ti.UI.createLabel({
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "A cassual day look:",
<<<<<<< HEAD
<<<<<<< HEAD
        id: "__alloyId41"
    });
    $.__views.getLook.add($.__views.__alloyId41);
=======
        id: "__alloyId38"
    });
    $.__views.getLook.add($.__views.__alloyId38);
>>>>>>> FETCH_HEAD
=======
        id: "__alloyId38"
    });
    $.__views.getLook.add($.__views.__alloyId38);
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    $.__views.menuLookView = Ti.UI.createView({
        top: "32dp",
        height: "36dp",
        id: "menuLookView"
    });
    $.__views.lookWindow.add($.__views.menuLookView);
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId42 = Ti.UI.createButton({
        image: "/images/v-schedule.png",
        tintColor: "#b23b91",
        left: "20dp",
        id: "__alloyId42"
    });
    $.__views.menuLookView.add($.__views.__alloyId42);
    showHome ? $.__views.__alloyId42.addEventListener("click", showHome) : __defers["$.__views.__alloyId42!click!showHome"] = true;
    $.__views.__alloyId43 = Ti.UI.createButton({
        image: "/images/v-diamond.png",
        tintColor: "#b23b91",
        left: "50dp",
        id: "__alloyId43"
    });
    $.__views.menuLookView.add($.__views.__alloyId43);
    showTrends ? $.__views.__alloyId43.addEventListener("click", showTrends) : __defers["$.__views.__alloyId43!click!showTrends"] = true;
    $.__views.__alloyId44 = Ti.UI.createButton({
        image: "/images/v-stylist.png",
        tintColor: "#b23b91",
        left: "80dp",
        id: "__alloyId44"
    });
    $.__views.menuLookView.add($.__views.__alloyId44);
    showLooks ? $.__views.__alloyId44.addEventListener("click", showLooks) : __defers["$.__views.__alloyId44!click!showLooks"] = true;
    $.__views.__alloyId45 = Ti.UI.createButton({
        image: "/images/v-article-info.png",
        tintColor: "#b23b91",
        left: "110dp",
        id: "__alloyId45"
    });
    $.__views.menuLookView.add($.__views.__alloyId45);
    showAlarm ? $.__views.__alloyId45.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId45!click!showAlarm"] = true;
=======
    $.__views.__alloyId39 = Ti.UI.createButton({
        image: "/images/v-schedule.png",
        tintColor: "#b23b91",
        left: "20dp",
        id: "__alloyId39"
    });
    $.__views.menuLookView.add($.__views.__alloyId39);
    showHome ? $.__views.__alloyId39.addEventListener("click", showHome) : __defers["$.__views.__alloyId39!click!showHome"] = true;
    $.__views.__alloyId40 = Ti.UI.createButton({
        image: "/images/v-diamond.png",
        tintColor: "#b23b91",
        left: "50dp",
        id: "__alloyId40"
    });
    $.__views.menuLookView.add($.__views.__alloyId40);
    showTrends ? $.__views.__alloyId40.addEventListener("click", showTrends) : __defers["$.__views.__alloyId40!click!showTrends"] = true;
    $.__views.__alloyId41 = Ti.UI.createButton({
        image: "/images/v-stylist.png",
        tintColor: "#b23b91",
        left: "80dp",
        id: "__alloyId41"
    });
    $.__views.menuLookView.add($.__views.__alloyId41);
    showLooks ? $.__views.__alloyId41.addEventListener("click", showLooks) : __defers["$.__views.__alloyId41!click!showLooks"] = true;
    $.__views.__alloyId42 = Ti.UI.createButton({
        image: "/images/v-article-info.png",
        tintColor: "#b23b91",
        left: "110dp",
        id: "__alloyId42"
    });
    $.__views.menuLookView.add($.__views.__alloyId42);
    showAlarm ? $.__views.__alloyId42.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId42!click!showAlarm"] = true;
>>>>>>> FETCH_HEAD
=======
    $.__views.__alloyId39 = Ti.UI.createButton({
        image: "/images/v-schedule.png",
        tintColor: "#b23b91",
        left: "20dp",
        id: "__alloyId39"
    });
    $.__views.menuLookView.add($.__views.__alloyId39);
    showHome ? $.__views.__alloyId39.addEventListener("click", showHome) : __defers["$.__views.__alloyId39!click!showHome"] = true;
    $.__views.__alloyId40 = Ti.UI.createButton({
        image: "/images/v-diamond.png",
        tintColor: "#b23b91",
        left: "50dp",
        id: "__alloyId40"
    });
    $.__views.menuLookView.add($.__views.__alloyId40);
    showTrends ? $.__views.__alloyId40.addEventListener("click", showTrends) : __defers["$.__views.__alloyId40!click!showTrends"] = true;
    $.__views.__alloyId41 = Ti.UI.createButton({
        image: "/images/v-stylist.png",
        tintColor: "#b23b91",
        left: "80dp",
        id: "__alloyId41"
    });
    $.__views.menuLookView.add($.__views.__alloyId41);
    showLooks ? $.__views.__alloyId41.addEventListener("click", showLooks) : __defers["$.__views.__alloyId41!click!showLooks"] = true;
    $.__views.__alloyId42 = Ti.UI.createButton({
        image: "/images/v-article-info.png",
        tintColor: "#b23b91",
        left: "110dp",
        id: "__alloyId42"
    });
    $.__views.menuLookView.add($.__views.__alloyId42);
    showAlarm ? $.__views.__alloyId42.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId42!click!showAlarm"] = true;
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
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
<<<<<<< HEAD
    $.__views.__alloyId46 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId46"
    });
    $.__views.lookContent.add($.__views.__alloyId46);
=======
    $.__views.__alloyId43 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId43"
    });
    $.__views.lookContent.add($.__views.__alloyId43);
>>>>>>> FETCH_HEAD
=======
    $.__views.__alloyId43 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId43"
    });
    $.__views.lookContent.add($.__views.__alloyId43);
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
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
<<<<<<< HEAD
    $.__views.__alloyId47 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId47"
    });
    $.__views.lookContent.add($.__views.__alloyId47);
=======
    $.__views.__alloyId44 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId44"
    });
    $.__views.lookContent.add($.__views.__alloyId44);
>>>>>>> FETCH_HEAD
=======
    $.__views.__alloyId44 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId44"
    });
    $.__views.lookContent.add($.__views.__alloyId44);
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
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
<<<<<<< HEAD
    $.__views.__alloyId48 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId48"
    });
    $.__views.menuHome.add($.__views.__alloyId48);
    showHome ? $.__views.__alloyId48.addEventListener("click", showHome) : __defers["$.__views.__alloyId48!click!showHome"] = true;
    $.__views.__alloyId49 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId49"
    });
    $.__views.menuHome.add($.__views.__alloyId49);
    showTrends ? $.__views.__alloyId49.addEventListener("click", showTrends) : __defers["$.__views.__alloyId49!click!showTrends"] = true;
    $.__views.__alloyId50 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId50"
    });
    $.__views.menuHome.add($.__views.__alloyId50);
    showLooks ? $.__views.__alloyId50.addEventListener("click", showLooks) : __defers["$.__views.__alloyId50!click!showLooks"] = true;
    $.__views.__alloyId51 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId51"
    });
    $.__views.menuHome.add($.__views.__alloyId51);
    showAlarm ? $.__views.__alloyId51.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId51!click!showAlarm"] = true;
    $.__views.__alloyId52 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId52"
    });
    $.__views.menuHome.add($.__views.__alloyId52);
    showSettings ? $.__views.__alloyId52.addEventListener("click", showSettings) : __defers["$.__views.__alloyId52!click!showSettings"] = true;
=======
    $.__views.__alloyId45 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId45"
    });
    $.__views.menuHome.add($.__views.__alloyId45);
    showHome ? $.__views.__alloyId45.addEventListener("click", showHome) : __defers["$.__views.__alloyId45!click!showHome"] = true;
    $.__views.__alloyId46 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId46"
    });
    $.__views.menuHome.add($.__views.__alloyId46);
    showTrends ? $.__views.__alloyId46.addEventListener("click", showTrends) : __defers["$.__views.__alloyId46!click!showTrends"] = true;
    $.__views.__alloyId47 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId47"
    });
    $.__views.menuHome.add($.__views.__alloyId47);
    showLooks ? $.__views.__alloyId47.addEventListener("click", showLooks) : __defers["$.__views.__alloyId47!click!showLooks"] = true;
    $.__views.__alloyId48 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId48"
    });
    $.__views.menuHome.add($.__views.__alloyId48);
    showAlarm ? $.__views.__alloyId48.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId48!click!showAlarm"] = true;
    $.__views.__alloyId49 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId49"
    });
    $.__views.menuHome.add($.__views.__alloyId49);
    showSettings ? $.__views.__alloyId49.addEventListener("click", showSettings) : __defers["$.__views.__alloyId49!click!showSettings"] = true;
>>>>>>> FETCH_HEAD
=======
    $.__views.__alloyId45 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId45"
    });
    $.__views.menuHome.add($.__views.__alloyId45);
    showHome ? $.__views.__alloyId45.addEventListener("click", showHome) : __defers["$.__views.__alloyId45!click!showHome"] = true;
    $.__views.__alloyId46 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId46"
    });
    $.__views.menuHome.add($.__views.__alloyId46);
    showTrends ? $.__views.__alloyId46.addEventListener("click", showTrends) : __defers["$.__views.__alloyId46!click!showTrends"] = true;
    $.__views.__alloyId47 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId47"
    });
    $.__views.menuHome.add($.__views.__alloyId47);
    showLooks ? $.__views.__alloyId47.addEventListener("click", showLooks) : __defers["$.__views.__alloyId47!click!showLooks"] = true;
    $.__views.__alloyId48 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId48"
    });
    $.__views.menuHome.add($.__views.__alloyId48);
    showAlarm ? $.__views.__alloyId48.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId48!click!showAlarm"] = true;
    $.__views.__alloyId49 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId49"
    });
    $.__views.menuHome.add($.__views.__alloyId49);
    showSettings ? $.__views.__alloyId49.addEventListener("click", showSettings) : __defers["$.__views.__alloyId49!click!showSettings"] = true;
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animation = require("alloy/animation");
    var articleTop = [];
    var articleBottom = [];
    var articleShoes = [];
    var articleTopCount = 0;
    var articleBottomCount = 0;
    var articleShoesCount = 0;
    var topId = 0;
    var bottomId = 0;
    var shoesId = 0;
    for (var articleId in Alloy.Globals.articlesArray) switch (Alloy.Globals.articlesArray[articleId]["categoryId"]) {
      case "1":
        articleTop[articleTopCount] = [];
        articleTop[articleTopCount]["articleId"] = articleId;
        articleTop[articleTopCount]["photo"] = Alloy.Globals.articlesArray[articleId]["photo"];
        articleTop[articleTopCount]["name"] = Alloy.Globals.articlesArray[articleId]["name"];
        articleTop[articleTopCount]["subcategoryId"] = Alloy.Globals.articlesArray[articleId]["subcategoryId"];
        articleTop[articleTopCount]["subcategoryName"] = Alloy.Globals.articlesArray[articleId]["subcategoryName"];
        articleTopCount++;
        break;

      case "2":
        articleBottom[articleBottomCount] = [];
        articleBottom[articleBottomCount]["articleId"] = articleId;
        articleBottom[articleBottomCount]["photo"] = Alloy.Globals.articlesArray[articleId]["photo"];
        articleBottom[articleBottomCount]["name"] = Alloy.Globals.articlesArray[articleId]["name"];
        articleBottom[articleBottomCount]["subcategoryId"] = Alloy.Globals.articlesArray[articleId]["subcategoryId"];
        articleBottom[articleBottomCount]["subcategoryName"] = Alloy.Globals.articlesArray[articleId]["subcategoryName"];
        articleBottomCount++;
        break;

      case "3":
        articleShoes[articleShoesCount] = [];
        articleShoes[articleShoesCount]["articleId"] = articleId;
        articleShoes[articleShoesCount]["photo"] = Alloy.Globals.articlesArray[articleId]["photo"];
        articleShoes[articleShoesCount]["name"] = Alloy.Globals.articlesArray[articleId]["name"];
        articleShoes[articleShoesCount]["subcategoryId"] = Alloy.Globals.articlesArray[articleId]["subcategoryId"];
        articleShoes[articleShoesCount]["subcategoryName"] = Alloy.Globals.articlesArray[articleId]["subcategoryName"];
        articleShoesCount++;
    }
    $.articleTop.addEventListener("swipe", function() {
        topId = selectTopId();
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
        var imagePath = articleTop[topId]["photo"];
        $.articleTopImg.image = imagePath;
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
    });
    $.articleBottom.addEventListener("swipe", function() {
        bottomId = selectBottomId();
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
        var imagePath = articleBottom[bottomId]["photo"];
        $.articleBottomImg.image = imagePath;
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
    });
    $.articleShoes.addEventListener("swipe", function() {
        shoesId = selectShoesId();
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
        var imagePath = articleShoes[shoesId]["photo"];
        $.articleShoesImg.image = imagePath;
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
    });
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId42!click!showHome"] && $.__views.__alloyId42.addEventListener("click", showHome);
    __defers["$.__views.__alloyId43!click!showTrends"] && $.__views.__alloyId43.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId44!click!showLooks"] && $.__views.__alloyId44.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId45!click!showAlarm"] && $.__views.__alloyId45.addEventListener("click", showAlarm);
    __defers["$.__views.articleTopImg!click!showArticleTop"] && $.__views.articleTopImg.addEventListener("click", showArticleTop);
    __defers["$.__views.articleBottomImg!click!showArticleBottom"] && $.__views.articleBottomImg.addEventListener("click", showArticleBottom);
    __defers["$.__views.articleShoesImg!click!showArticleShoes"] && $.__views.articleShoesImg.addEventListener("click", showArticleShoes);
    __defers["$.__views.__alloyId48!click!showHome"] && $.__views.__alloyId48.addEventListener("click", showHome);
    __defers["$.__views.__alloyId49!click!showTrends"] && $.__views.__alloyId49.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId50!click!showLooks"] && $.__views.__alloyId50.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId51!click!showAlarm"] && $.__views.__alloyId51.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId52!click!showSettings"] && $.__views.__alloyId52.addEventListener("click", showSettings);
=======
=======
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    __defers["$.__views.__alloyId39!click!showHome"] && $.__views.__alloyId39.addEventListener("click", showHome);
    __defers["$.__views.__alloyId40!click!showTrends"] && $.__views.__alloyId40.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId41!click!showLooks"] && $.__views.__alloyId41.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId42!click!showAlarm"] && $.__views.__alloyId42.addEventListener("click", showAlarm);
    __defers["$.__views.articleTopImg!click!showArticleTop"] && $.__views.articleTopImg.addEventListener("click", showArticleTop);
    __defers["$.__views.articleBottomImg!click!showArticleBottom"] && $.__views.articleBottomImg.addEventListener("click", showArticleBottom);
    __defers["$.__views.articleShoesImg!click!showArticleShoes"] && $.__views.articleShoesImg.addEventListener("click", showArticleShoes);
    __defers["$.__views.__alloyId45!click!showHome"] && $.__views.__alloyId45.addEventListener("click", showHome);
    __defers["$.__views.__alloyId46!click!showTrends"] && $.__views.__alloyId46.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId47!click!showLooks"] && $.__views.__alloyId47.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId48!click!showAlarm"] && $.__views.__alloyId48.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId49!click!showSettings"] && $.__views.__alloyId49.addEventListener("click", showSettings);
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
=======
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;