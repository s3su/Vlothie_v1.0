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
        Alloy.createController("look").getView().open();
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
    $.__views.__alloyId45 = Ti.UI.createButton({
        image: "/images/v-back.png",
        tintColor: "#fff",
        left: "8dp",
        top: "2dp",
        id: "__alloyId45"
    });
    $.__views.trendButtons.add($.__views.__alloyId45);
    showHome ? $.__views.__alloyId45.addEventListener("click", showHome) : __defers["$.__views.__alloyId45!click!showHome"] = true;
    $.__views.__alloyId46 = Ti.UI.createButton({
        image: "/images/v-search.png",
        tintColor: "#fff",
        right: "8dp",
        top: "2dp",
        id: "__alloyId46"
    });
    $.__views.trendButtons.add($.__views.__alloyId46);
    $.__views.getTrend = Ti.UI.createView({
        top: "2dp",
        width: "100%",
        height: "20dp",
        id: "getTrend"
    });
    $.__views.trendWindow.add($.__views.getTrend);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Trends!",
        id: "__alloyId47"
    });
    $.__views.getTrend.add($.__views.__alloyId47);
    $.__views.trendContentScroll = Ti.UI.createScrollView({
        layout: "vertical",
        top: "28dp",
        backgroundColor: "transparent",
        verticalBounce: "true",
        id: "trendContentScroll"
    });
    $.__views.trendWindow.add($.__views.trendContentScroll);
    $.__views.__alloyId48 = Ti.UI.createView({
        top: "0dp",
        width: "90%",
        backgroundColor: "transparent",
        borderRadius: "8dp",
        id: "__alloyId48"
    });
    $.__views.trendContentScroll.add($.__views.__alloyId48);
    showLooks ? $.__views.__alloyId48.addEventListener("click", showLooks) : __defers["$.__views.__alloyId48!click!showLooks"] = true;
    $.__views.trendImg = Ti.UI.createImageView({
        layout: "vertical",
        image: "/images/trends/trend_01.jpg",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "trendImg"
    });
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
    $.__views.trendInfoText = Ti.UI.createLabel({
        color: "#464541",
        width: "90%",
        left: "10dp",
        top: "10dp",
        font: {
            fontSize: 16,
            fontFamily: "Roboto"
        },
        text: "Trend desct Trend desct Trend desct Trend desct Trend desct Trend desct Trend desct Trend desct Trend desct Trend desct",
        id: "trendInfoText"
    });
    $.__views.__alloyId50.add($.__views.trendInfoText);
    $.__views.menuHome = Ti.UI.createView({
        height: "50dp",
        width: "100%",
        bottom: "2dp",
        id: "menuHome"
    });
    $.__views.trendWindow.add($.__views.menuHome);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;