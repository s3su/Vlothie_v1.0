function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showHome() {
        Alloy.createController("home").getView().open();
    }
    function showTrends() {
        Alloy.createController("trend").getView().open();
    }
    function showLooks() {
        Alloy.Globals.isSetLook = Alloy.Globals.trendsArray[Alloy.Globals.trendId]["lookId"];
        Alloy.createController("look").getView().open();
    }
    function selectTrendId(direction) {
        "right" == direction ? Alloy.Globals.trendId - 1 >= 0 ? Alloy.Globals.trendId-- : Alloy.Globals.trendId = Alloy.Globals.trendsArray["size"] - 1 : "left" == direction ? Alloy.Globals.trendId + 1 < Alloy.Globals.trendsArray["size"] ? Alloy.Globals.trendId++ : Alloy.Globals.trendId = 0 : "random" == direction && (Alloy.Globals.trendId = Math.floor(Math.random() * Alloy.Globals.trendsArray["size"]));
        return Alloy.Globals.trendId;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "trend";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.trendWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "trendWindow"
    });
    $.__views.trendWindow && $.addTopLevelView($.__views.trendWindow);
    $.__views.trendButtons = Ti.UI.createView({
        height: "28dp",
        top: "0dp",
        zIndex: "10",
        id: "trendButtons"
    });
    $.__views.trendWindow.add($.__views.trendButtons);
    $.__views.__alloyId44 = Ti.UI.createButton({
        image: "/images/v-back.png",
        tintColor: "#fff",
        left: "8dp",
        top: "2dp",
        id: "__alloyId44"
    });
    $.__views.trendButtons.add($.__views.__alloyId44);
    showHome ? $.__views.__alloyId44.addEventListener("click", showHome) : __defers["$.__views.__alloyId44!click!showHome"] = true;
    $.__views.__alloyId45 = Ti.UI.createButton({
        image: "/images/v-search.png",
        tintColor: "#fff",
        right: "8dp",
        top: "2dp",
        id: "__alloyId45"
    });
    $.__views.trendButtons.add($.__views.__alloyId45);
    $.__views.getTrend = Ti.UI.createView({
        top: "2dp",
        width: "100%",
        height: "20dp",
        id: "getTrend"
    });
    $.__views.trendWindow.add($.__views.getTrend);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Trends!",
        id: "__alloyId46"
    });
    $.__views.getTrend.add($.__views.__alloyId46);
    $.__views.trendContentScroll = Ti.UI.createScrollView({
        layout: "vertical",
        top: "28dp",
        backgroundColor: "transparent",
        verticalBounce: "true",
        id: "trendContentScroll"
    });
    $.__views.trendWindow.add($.__views.trendContentScroll);
    $.__views.trendContent = Ti.UI.createView({
        top: "0dp",
        width: "90%",
        backgroundColor: "transparent",
<<<<<<< HEAD
        id: "trendContent"
=======
        borderRadius: "8dp",
        id: "__alloyId48"
>>>>>>> FETCH_HEAD
    });
    $.__views.trendContentScroll.add($.__views.trendContent);
    showLooks ? $.__views.trendContent.addEventListener("click", showLooks) : __defers["$.__views.trendContent!click!showLooks"] = true;
    $.__views.trendImg = Ti.UI.createImageView({
        layout: "vertical",
        image: "/images/trends/trend_01.jpg",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "trendImg"
    });
<<<<<<< HEAD
    $.__views.trendContent.add($.__views.trendImg);
    $.__views.__alloyId47 = Ti.UI.createView({
        backgroundColor: "#e8e6da",
        height: "120dp",
        width: "90%",
        top: "0dp",
        id: "__alloyId47"
    });
    $.__views.trendContentScroll.add($.__views.__alloyId47);
=======
    $.__views.__alloyId48.add($.__views.trendImg);
    $.__views.__alloyId49 = Ti.UI.createImageView({
        backgroundImage: "/images/v-article-wear.png",
        borderRadius: "50%",
        width: "50dp",
        height: "50dp",
        top: "0dp",
        left: "8dp",
        bottom: "8dp",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        backgroundColor: "#e8e6da",
        height: "120dp",
        width: "90%",
        top: "10dp",
        borderRadius: "8dp",
        id: "__alloyId50"
    });
    $.__views.trendContentScroll.add($.__views.__alloyId50);
>>>>>>> FETCH_HEAD
    $.__views.trendInfoText = Ti.UI.createLabel({
        color: "#464541",
        width: "90%",
        left: "10dp",
        top: "10dp",
        font: {
            fontSize: 16,
            fontFamily: "Roboto"
        },
        id: "trendInfoText"
    });
<<<<<<< HEAD
    $.__views.__alloyId47.add($.__views.trendInfoText);
    $.__views.__alloyId48 = Ti.UI.createView({
        backgroundColor: "#e8e6da",
        height: "100dp",
        width: "90%",
        top: "0dp",
        id: "__alloyId48"
    });
    $.__views.trendContentScroll.add($.__views.__alloyId48);
    $.__views.trendAuthorImg = Ti.UI.createImageView({
        backgroundImage: "/images/v-article-wear.png",
        borderRadius: "50%",
        width: "50dp",
        height: "50dp",
        top: "0dp",
        left: "8dp",
        bottom: "8dp",
        id: "trendAuthorImg"
    });
    $.__views.__alloyId48.add($.__views.trendAuthorImg);
=======
    $.__views.__alloyId50.add($.__views.trendInfoText);
>>>>>>> FETCH_HEAD
    $.__views.menuHome = Ti.UI.createView({
        height: "50dp",
        width: "100%",
        bottom: "2dp",
        id: "menuHome"
    });
    $.__views.trendWindow.add($.__views.menuHome);
<<<<<<< HEAD
    $.__views.__alloyId49 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId49"
    });
    $.__views.menuHome.add($.__views.__alloyId49);
    showHome ? $.__views.__alloyId49.addEventListener("click", showHome) : __defers["$.__views.__alloyId49!click!showHome"] = true;
    $.__views.__alloyId50 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId50"
    });
    $.__views.menuHome.add($.__views.__alloyId50);
    showTrends ? $.__views.__alloyId50.addEventListener("click", showTrends) : __defers["$.__views.__alloyId50!click!showTrends"] = true;
    $.__views.__alloyId51 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId51"
    });
    $.__views.menuHome.add($.__views.__alloyId51);
    showLooks ? $.__views.__alloyId51.addEventListener("click", showLooks) : __defers["$.__views.__alloyId51!click!showLooks"] = true;
    $.__views.__alloyId52 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId52"
    });
    $.__views.menuHome.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId53"
    });
    $.__views.menuHome.add($.__views.__alloyId53);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("---------------- trend.js ------------------------");
    var animation = require("alloy/animation");
    0 >= Alloy.Globals.trendId && (Alloy.Globals.trendId = selectTrendId("random"));
    var imagePath = Alloy.Globals.trendsArray[Alloy.Globals.trendId]["photoMain"];
    $.trendImg.image = imagePath;
    $.trendInfoText.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]["title"]);
    $.trendAuthorImg.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]["accountName"]);
    $.trendContent.addEventListener("swipe", function(e) {
        "right" == e.direction ? Alloy.Globals.trendId = selectTrendId("right") : "left" == e.direction && (Alloy.Globals.trendId = selectTrendId("left"));
        animation.flipHorizontal($.trendContent, $.trendContent, 500);
        var imagePath = Alloy.Globals.trendsArray[Alloy.Globals.trendId]["photoMain"];
        $.trendImg.image = imagePath;
        animation.flipHorizontal($.trendContent, $.trendContent, 500);
        $.trendInfoText.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]["title"]);
        $.trendAuthorImg.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]["accountName"]);
        Ti.API.info("Alloy.Globals.trendId: " + Alloy.Globals.trendId + " AND imagePath: " + imagePath);
    });
    __defers["$.__views.__alloyId44!click!showHome"] && $.__views.__alloyId44.addEventListener("click", showHome);
    __defers["$.__views.trendContent!click!showLooks"] && $.__views.trendContent.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId49!click!showHome"] && $.__views.__alloyId49.addEventListener("click", showHome);
    __defers["$.__views.__alloyId50!click!showTrends"] && $.__views.__alloyId50.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId51!click!showLooks"] && $.__views.__alloyId51.addEventListener("click", showLooks);
=======
    $.__views.__alloyId51 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId51"
    });
    $.__views.menuHome.add($.__views.__alloyId51);
    showHome ? $.__views.__alloyId51.addEventListener("click", showHome) : __defers["$.__views.__alloyId51!click!showHome"] = true;
    $.__views.__alloyId52 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId52"
    });
    $.__views.menuHome.add($.__views.__alloyId52);
    showTrends ? $.__views.__alloyId52.addEventListener("click", showTrends) : __defers["$.__views.__alloyId52!click!showTrends"] = true;
    $.__views.__alloyId53 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId53"
    });
    $.__views.menuHome.add($.__views.__alloyId53);
    showLooks ? $.__views.__alloyId53.addEventListener("click", showLooks) : __defers["$.__views.__alloyId53!click!showLooks"] = true;
    $.__views.__alloyId54 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId54"
    });
    $.__views.menuHome.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId55"
    });
    $.__views.menuHome.add($.__views.__alloyId55);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId45!click!showHome"] && $.__views.__alloyId45.addEventListener("click", showHome);
    __defers["$.__views.__alloyId48!click!showLooks"] && $.__views.__alloyId48.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId51!click!showHome"] && $.__views.__alloyId51.addEventListener("click", showHome);
    __defers["$.__views.__alloyId52!click!showTrends"] && $.__views.__alloyId52.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId53!click!showLooks"] && $.__views.__alloyId53.addEventListener("click", showLooks);
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;