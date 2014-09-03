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
    this.__controllerPath = "settings";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.settingWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "settingWindow"
    });
    $.__views.settingWindow && $.addTopLevelView($.__views.settingWindow);
    $.__views.settingView = Ti.UI.createView({
        id: "settingView"
    });
    $.__views.settingWindow.add($.__views.settingView);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "settings",
        id: "title"
    });
    $.__views.settingView.add($.__views.title);
    $.__views.menuHome = Ti.UI.createView({
        height: "58dp",
        width: "100%",
        bottom: "8dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.settingWindow.add($.__views.menuHome);
    $.__views.__alloyId54 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId54"
    });
    $.__views.menuHome.add($.__views.__alloyId54);
    showHome ? $.__views.__alloyId54.addEventListener("click", showHome) : __defers["$.__views.__alloyId54!click!showHome"] = true;
    $.__views.__alloyId55 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId55"
    });
    $.__views.menuHome.add($.__views.__alloyId55);
    showTrends ? $.__views.__alloyId55.addEventListener("click", showTrends) : __defers["$.__views.__alloyId55!click!showTrends"] = true;
    $.__views.__alloyId56 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId56"
    });
    $.__views.menuHome.add($.__views.__alloyId56);
    showLooks ? $.__views.__alloyId56.addEventListener("click", showLooks) : __defers["$.__views.__alloyId56!click!showLooks"] = true;
    $.__views.__alloyId57 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId57"
    });
    $.__views.menuHome.add($.__views.__alloyId57);
    showAlarm ? $.__views.__alloyId57.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId57!click!showAlarm"] = true;
    $.__views.__alloyId58 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId58"
    });
    $.__views.menuHome.add($.__views.__alloyId58);
    showSettings ? $.__views.__alloyId58.addEventListener("click", showSettings) : __defers["$.__views.__alloyId58!click!showSettings"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId54!click!showHome"] && $.__views.__alloyId54.addEventListener("click", showHome);
    __defers["$.__views.__alloyId55!click!showTrends"] && $.__views.__alloyId55.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId56!click!showLooks"] && $.__views.__alloyId56.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId57!click!showAlarm"] && $.__views.__alloyId57.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId58!click!showSettings"] && $.__views.__alloyId58.addEventListener("click", showSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;