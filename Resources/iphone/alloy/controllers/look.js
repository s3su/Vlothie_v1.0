function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showArticle() {
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
    $.__views.__alloyId38 = Ti.UI.createButton({
        image: "/images/v-back.png",
        tintColor: "#fff",
        left: "8dp",
        top: "2dp",
        id: "__alloyId38"
    });
    $.__views.lookButtons.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createButton({
        image: "/images/v-search.png",
        tintColor: "#fff",
        right: "8dp",
        top: "2dp",
        id: "__alloyId39"
    });
    $.__views.lookButtons.add($.__views.__alloyId39);
    $.__views.getLook = Ti.UI.createView({
        top: "2dp",
        width: "100%",
        height: "20dp",
        id: "getLook"
    });
    $.__views.lookWindow.add($.__views.getLook);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "A cassual day look:",
        id: "__alloyId40"
    });
    $.__views.getLook.add($.__views.__alloyId40);
    $.__views.menuLookView = Ti.UI.createView({
        top: "32dp",
        height: "36dp",
        id: "menuLookView"
    });
    $.__views.lookWindow.add($.__views.menuLookView);
    $.__views.__alloyId41 = Ti.UI.createButton({
        image: "/images/v-schedule.png",
        tintColor: "#b23b91",
        left: "20dp",
        id: "__alloyId41"
    });
    $.__views.menuLookView.add($.__views.__alloyId41);
    showHome ? $.__views.__alloyId41.addEventListener("click", showHome) : __defers["$.__views.__alloyId41!click!showHome"] = true;
    $.__views.__alloyId42 = Ti.UI.createButton({
        image: "/images/v-diamond.png",
        tintColor: "#b23b91",
        left: "50dp",
        id: "__alloyId42"
    });
    $.__views.menuLookView.add($.__views.__alloyId42);
    showTrends ? $.__views.__alloyId42.addEventListener("click", showTrends) : __defers["$.__views.__alloyId42!click!showTrends"] = true;
    $.__views.__alloyId43 = Ti.UI.createButton({
        image: "/images/v-stylist.png",
        tintColor: "#b23b91",
        left: "80dp",
        id: "__alloyId43"
    });
    $.__views.menuLookView.add($.__views.__alloyId43);
    showLooks ? $.__views.__alloyId43.addEventListener("click", showLooks) : __defers["$.__views.__alloyId43!click!showLooks"] = true;
    $.__views.__alloyId44 = Ti.UI.createButton({
        image: "/images/v-article-info.png",
        tintColor: "#b23b91",
        left: "110dp",
        id: "__alloyId44"
    });
    $.__views.menuLookView.add($.__views.__alloyId44);
    showAlarm ? $.__views.__alloyId44.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId44!click!showAlarm"] = true;
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
        image: "/images/article/top.png",
        bottom: "0dp",
        id: "articleTopImg"
    });
    $.__views.articleTop.add($.__views.articleTopImg);
    showArticle ? $.__views.articleTopImg.addEventListener("click", showArticle) : __defers["$.__views.articleTopImg!click!showArticle"] = true;
    $.__views.__alloyId45 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId45"
    });
    $.__views.lookContent.add($.__views.__alloyId45);
    $.__views.articleBottom = Ti.UI.createView({
        layout: "vertical",
        height: "150dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleBottom"
    });
    $.__views.lookContent.add($.__views.articleBottom);
    $.__views.articleBottomImg = Ti.UI.createImageView({
        image: "/images/article/bottom.png",
        bottom: "0dp",
        id: "articleBottomImg"
    });
    $.__views.articleBottom.add($.__views.articleBottomImg);
    showArticle ? $.__views.articleBottomImg.addEventListener("click", showArticle) : __defers["$.__views.articleBottomImg!click!showArticle"] = true;
    $.__views.__alloyId46 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId46"
    });
    $.__views.lookContent.add($.__views.__alloyId46);
    $.__views.articleShoes = Ti.UI.createView({
        layout: "vertical",
        height: "110dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleShoes"
    });
    $.__views.lookContent.add($.__views.articleShoes);
    $.__views.articleShoesImg = Ti.UI.createImageView({
        image: "/images/article/shoes.png",
        borderRadius: "0dp 12dp 0dp 12dp",
        id: "articleShoesImg"
    });
    $.__views.articleShoes.add($.__views.articleShoesImg);
    showArticle ? $.__views.articleShoesImg.addEventListener("click", showArticle) : __defers["$.__views.articleShoesImg!click!showArticle"] = true;
    $.__views.menuHome = Ti.UI.createView({
        height: "58dp",
        width: "100%",
        bottom: "8dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.lookWindow.add($.__views.menuHome);
    $.__views.__alloyId47 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId47"
    });
    $.__views.menuHome.add($.__views.__alloyId47);
    showHome ? $.__views.__alloyId47.addEventListener("click", showHome) : __defers["$.__views.__alloyId47!click!showHome"] = true;
    $.__views.__alloyId48 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId48"
    });
    $.__views.menuHome.add($.__views.__alloyId48);
    showTrends ? $.__views.__alloyId48.addEventListener("click", showTrends) : __defers["$.__views.__alloyId48!click!showTrends"] = true;
    $.__views.__alloyId49 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId49"
    });
    $.__views.menuHome.add($.__views.__alloyId49);
    showLooks ? $.__views.__alloyId49.addEventListener("click", showLooks) : __defers["$.__views.__alloyId49!click!showLooks"] = true;
    $.__views.__alloyId50 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId50"
    });
    $.__views.menuHome.add($.__views.__alloyId50);
    showAlarm ? $.__views.__alloyId50.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId50!click!showAlarm"] = true;
    $.__views.__alloyId51 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId51"
    });
    $.__views.menuHome.add($.__views.__alloyId51);
    showSettings ? $.__views.__alloyId51.addEventListener("click", showSettings) : __defers["$.__views.__alloyId51!click!showSettings"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animation = require("alloy/animation");
    var articleTop = [];
    var articleBottom = [];
    var articleShoes = [];
    articleTop[0] = "http://be.vlothie.com/photos/articles/pants1.jpg";
    articleTop[1] = "http://be.vlothie.com/photos/articles/skirt1.jpg";
    articleTop[2] = "http://be.vlothie.com/photos/articles/short1.jpg";
    articleTop[0] = "/images/article/top.png";
    articleTop[1] = "/images/article/bottom.png";
    articleTop[2] = "/images/article/shoes.png";
    articleBottom[0] = "/images/article/top.png";
    articleBottom[1] = "/images/article/bottom.png";
    articleBottom[2] = "/images/article/shoes.png";
    articleShoes[0] = "/images/article/top.png";
    articleShoes[1] = "/images/article/bottom.png";
    articleShoes[2] = "/images/article/shoes.png";
    $.articleTop.addEventListener("swipe", function() {
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
        var imagePath = articleTop[Math.floor(3 * Math.random())];
        $.articleTopImg.image = imagePath;
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
    });
    $.articleBottom.addEventListener("swipe", function() {
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
        var imagePath = articleBottom[Math.floor(3 * Math.random())];
        $.articleBottomImg.image = imagePath;
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
    });
    $.articleShoes.addEventListener("swipe", function() {
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
        var imagePath = articleShoes[Math.floor(3 * Math.random())];
        $.articleShoesImg.image = imagePath;
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
    });
    $.articleBottom.addEventListener("swipe", function() {
        $.articleBottomImg.image.animation = articleTop[Math.floor(3 * Math.random())];
    });
    $.articleShoesImg.addEventListener("swipe", function() {
        $.articleShoesImg.image = articleTop[Math.floor(3 * Math.random())];
    });
    __defers["$.__views.__alloyId41!click!showHome"] && $.__views.__alloyId41.addEventListener("click", showHome);
    __defers["$.__views.__alloyId42!click!showTrends"] && $.__views.__alloyId42.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId43!click!showLooks"] && $.__views.__alloyId43.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId44!click!showAlarm"] && $.__views.__alloyId44.addEventListener("click", showAlarm);
    __defers["$.__views.articleTopImg!click!showArticle"] && $.__views.articleTopImg.addEventListener("click", showArticle);
    __defers["$.__views.articleBottomImg!click!showArticle"] && $.__views.articleBottomImg.addEventListener("click", showArticle);
    __defers["$.__views.articleShoesImg!click!showArticle"] && $.__views.articleShoesImg.addEventListener("click", showArticle);
    __defers["$.__views.__alloyId47!click!showHome"] && $.__views.__alloyId47.addEventListener("click", showHome);
    __defers["$.__views.__alloyId48!click!showTrends"] && $.__views.__alloyId48.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId49!click!showLooks"] && $.__views.__alloyId49.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId50!click!showAlarm"] && $.__views.__alloyId50.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId51!click!showSettings"] && $.__views.__alloyId51.addEventListener("click", showSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;