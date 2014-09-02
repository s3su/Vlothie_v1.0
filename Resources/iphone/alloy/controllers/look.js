function Controller() {
    function showArticle() {
        Alloy.createController("article").getView().open();
    }
    function showHome() {
        var homeTab = $.TabGroup.setActiveTab(0);
        homeTab.open();
    }
    function showTrends() {
        var trendTab = $.TabGroup.setActiveTab(1);
        trendTab.open();
    }
    function showLooks() {
        var lookTab = $.TabGroup.setActiveTab(2);
        lookTab.open();
    }
    function showAlarm() {
        var alarmTab = $.TabGroup.setActiveTab(3);
        alarmTab.open();
    }
    function showSettings() {
        var settingTab = $.TabGroup.setActiveTab(4);
        settingTab.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "look";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    $.__views.lookContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "0dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        navBarHidden: true,
        id: "lookContent"
    });
    $.__views.lookWindow.add($.__views.lookContent);
    $.__views.articleTop = Ti.UI.createView({
        height: "180dp",
        top: "0dp",
        width: "100%",
        id: "articleTop"
    });
    $.__views.lookContent.add($.__views.articleTop);
    $.__views.articleTopImg = Ti.UI.createImageView({
        image: "/images/article/top.png",
        id: "articleTopImg"
    });
    $.__views.articleTop.add($.__views.articleTopImg);
    showArticle ? $.__views.articleTopImg.addEventListener("click", showArticle) : __defers["$.__views.articleTopImg!click!showArticle"] = true;
    $.__views.__alloyId39 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Top",
        id: "__alloyId39"
    });
    $.__views.articleTop.add($.__views.__alloyId39);
    $.__views.articleBottom = Ti.UI.createView({
        layout: "vertical",
        height: "180dp",
        top: "0dp",
        width: "100%",
        id: "articleBottom"
    });
    $.__views.lookContent.add($.__views.articleBottom);
    $.__views.articleBottomImg = Ti.UI.createImageView({
        image: "/images/article/bottom.png",
        id: "articleBottomImg"
    });
    $.__views.articleBottom.add($.__views.articleBottomImg);
    showArticle ? $.__views.articleBottomImg.addEventListener("click", showArticle) : __defers["$.__views.articleBottomImg!click!showArticle"] = true;
    $.__views.__alloyId40 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Bottom",
        id: "__alloyId40"
    });
    $.__views.articleBottom.add($.__views.__alloyId40);
    $.__views.articleShoes = Ti.UI.createView({
        layout: "vertical",
        height: "120dp",
        top: "0dp",
        width: "100%",
        id: "articleShoes"
    });
    $.__views.lookContent.add($.__views.articleShoes);
    $.__views.articleShoesImg = Ti.UI.createImageView({
        image: "/images/article/shoes.png",
        id: "articleShoesImg"
    });
    $.__views.articleShoes.add($.__views.articleShoesImg);
    showArticle ? $.__views.articleShoesImg.addEventListener("click", showArticle) : __defers["$.__views.articleShoesImg!click!showArticle"] = true;
    $.__views.__alloyId41 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Shoes",
        id: "__alloyId41"
    });
    $.__views.articleShoes.add($.__views.__alloyId41);
    $.__views.menuHome = Ti.UI.createButtonBar({
        zIndex: "100",
        bottom: "10dp",
        height: "42dp",
        width: "100%",
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        id: "menuHome"
    });
    $.__views.lookWindow.add($.__views.menuHome);
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
    $.__views.look = Ti.UI.createTab({
        icon: "/images/home/v-look.png",
        backgroundColor: "transparent",
        activeTabBackgroundColor: "transparent",
        activeTabBackgroundDisabledColor: "transparent",
        translucent: true,
        barColor: "transparent",
        extendEdges: [ Ti.UI.EXTEND_EDGE_TOP, Ti.UI.EXTEND_EDGE_BOTTOM ],
        window: $.__views.lookWindow,
        id: "look",
        title: "Explore"
    });
    $.__views.look && $.addTopLevelView($.__views.look);
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
    __defers["$.__views.articleTopImg!click!showArticle"] && $.__views.articleTopImg.addEventListener("click", showArticle);
    __defers["$.__views.articleBottomImg!click!showArticle"] && $.__views.articleBottomImg.addEventListener("click", showArticle);
    __defers["$.__views.articleShoesImg!click!showArticle"] && $.__views.articleShoesImg.addEventListener("click", showArticle);
    __defers["$.__views.__alloyId42!click!showHome"] && $.__views.__alloyId42.addEventListener("click", showHome);
    __defers["$.__views.__alloyId43!click!showTrends"] && $.__views.__alloyId43.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId44!click!showLooks"] && $.__views.__alloyId44.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId45!click!showAlarm"] && $.__views.__alloyId45.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId46!click!showSettings"] && $.__views.__alloyId46.addEventListener("click", showSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;