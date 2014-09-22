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
    function showAlarm() {
        Alloy.createController("alarm").getView().open();
    }
    function showSettings() {
        Alloy.createController("settings").getView().open();
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
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "trendWindow"
    });
    $.__views.trendWindow && $.addTopLevelView($.__views.trendWindow);
    $.__views.trendContent = Ti.UI.createView({
        layout: "vertical",
        top: "0dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "trendContent"
    });
    $.__views.trendWindow.add($.__views.trendContent);
    showLooks ? $.__views.trendContent.addEventListener("click", showLooks) : __defers["$.__views.trendContent!click!showLooks"] = true;
    $.__views.trendImg = Ti.UI.createImageView({
        image: "/images/trends/trend_01.jpg",
        id: "trendImg"
    });
    $.__views.trendContent.add($.__views.trendImg);
    $.__views.menuHome = Ti.UI.createView({
        height: "58dp",
        width: "100%",
        bottom: "8dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.trendWindow.add($.__views.menuHome);
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.trendContent!click!showLooks"] && $.__views.trendContent.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId48!click!showHome"] && $.__views.__alloyId48.addEventListener("click", showHome);
    __defers["$.__views.__alloyId49!click!showTrends"] && $.__views.__alloyId49.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId50!click!showLooks"] && $.__views.__alloyId50.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId51!click!showAlarm"] && $.__views.__alloyId51.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId52!click!showSettings"] && $.__views.__alloyId52.addEventListener("click", showSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;