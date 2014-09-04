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
<<<<<<< HEAD
<<<<<<< HEAD
    $.__views.__alloyId58 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId58"
    });
    $.__views.menuHome.add($.__views.__alloyId58);
    showHome ? $.__views.__alloyId58.addEventListener("click", showHome) : __defers["$.__views.__alloyId58!click!showHome"] = true;
    $.__views.__alloyId59 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId59"
    });
    $.__views.menuHome.add($.__views.__alloyId59);
    showTrends ? $.__views.__alloyId59.addEventListener("click", showTrends) : __defers["$.__views.__alloyId59!click!showTrends"] = true;
    $.__views.__alloyId60 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId60"
    });
    $.__views.menuHome.add($.__views.__alloyId60);
    showLooks ? $.__views.__alloyId60.addEventListener("click", showLooks) : __defers["$.__views.__alloyId60!click!showLooks"] = true;
    $.__views.__alloyId61 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId61"
    });
    $.__views.menuHome.add($.__views.__alloyId61);
    showAlarm ? $.__views.__alloyId61.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId61!click!showAlarm"] = true;
    $.__views.__alloyId62 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId62"
    });
    $.__views.menuHome.add($.__views.__alloyId62);
    showSettings ? $.__views.__alloyId62.addEventListener("click", showSettings) : __defers["$.__views.__alloyId62!click!showSettings"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.trendContent!click!showLooks"] && $.__views.trendContent.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId58!click!showHome"] && $.__views.__alloyId58.addEventListener("click", showHome);
    __defers["$.__views.__alloyId59!click!showTrends"] && $.__views.__alloyId59.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId60!click!showLooks"] && $.__views.__alloyId60.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId61!click!showAlarm"] && $.__views.__alloyId61.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId62!click!showSettings"] && $.__views.__alloyId62.addEventListener("click", showSettings);
=======
    $.__views.__alloyId55 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId55"
    });
    $.__views.menuHome.add($.__views.__alloyId55);
    showHome ? $.__views.__alloyId55.addEventListener("click", showHome) : __defers["$.__views.__alloyId55!click!showHome"] = true;
    $.__views.__alloyId56 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId56"
    });
    $.__views.menuHome.add($.__views.__alloyId56);
    showTrends ? $.__views.__alloyId56.addEventListener("click", showTrends) : __defers["$.__views.__alloyId56!click!showTrends"] = true;
    $.__views.__alloyId57 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId57"
    });
    $.__views.menuHome.add($.__views.__alloyId57);
    showLooks ? $.__views.__alloyId57.addEventListener("click", showLooks) : __defers["$.__views.__alloyId57!click!showLooks"] = true;
    $.__views.__alloyId58 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId58"
    });
    $.__views.menuHome.add($.__views.__alloyId58);
    showAlarm ? $.__views.__alloyId58.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId58!click!showAlarm"] = true;
    $.__views.__alloyId59 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId59"
    });
=======
    $.__views.__alloyId55 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId55"
    });
    $.__views.menuHome.add($.__views.__alloyId55);
    showHome ? $.__views.__alloyId55.addEventListener("click", showHome) : __defers["$.__views.__alloyId55!click!showHome"] = true;
    $.__views.__alloyId56 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId56"
    });
    $.__views.menuHome.add($.__views.__alloyId56);
    showTrends ? $.__views.__alloyId56.addEventListener("click", showTrends) : __defers["$.__views.__alloyId56!click!showTrends"] = true;
    $.__views.__alloyId57 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId57"
    });
    $.__views.menuHome.add($.__views.__alloyId57);
    showLooks ? $.__views.__alloyId57.addEventListener("click", showLooks) : __defers["$.__views.__alloyId57!click!showLooks"] = true;
    $.__views.__alloyId58 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId58"
    });
    $.__views.menuHome.add($.__views.__alloyId58);
    showAlarm ? $.__views.__alloyId58.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId58!click!showAlarm"] = true;
    $.__views.__alloyId59 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId59"
    });
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    $.__views.menuHome.add($.__views.__alloyId59);
    showSettings ? $.__views.__alloyId59.addEventListener("click", showSettings) : __defers["$.__views.__alloyId59!click!showSettings"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.trendContent!click!showLooks"] && $.__views.trendContent.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId55!click!showHome"] && $.__views.__alloyId55.addEventListener("click", showHome);
    __defers["$.__views.__alloyId56!click!showTrends"] && $.__views.__alloyId56.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId57!click!showLooks"] && $.__views.__alloyId57.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId58!click!showAlarm"] && $.__views.__alloyId58.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId59!click!showSettings"] && $.__views.__alloyId59.addEventListener("click", showSettings);
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
=======
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;