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
    this.__controllerPath = "alarm";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.alarmWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "alarmWindow"
    });
    $.__views.alarmWindow && $.addTopLevelView($.__views.alarmWindow);
    $.__views.alarmView = Ti.UI.createView({
        id: "alarmView"
    });
    $.__views.alarmWindow.add($.__views.alarmView);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "alarm",
        id: "title"
    });
    $.__views.alarmView.add($.__views.title);
    $.__views.menuHome = Ti.UI.createView({
        height: "58dp",
        width: "100%",
        bottom: "8dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.alarmWindow.add($.__views.menuHome);
    $.__views.__alloyId2 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId2"
    });
    $.__views.menuHome.add($.__views.__alloyId2);
    showHome ? $.__views.__alloyId2.addEventListener("click", showHome) : __defers["$.__views.__alloyId2!click!showHome"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId3"
    });
    $.__views.menuHome.add($.__views.__alloyId3);
    showTrends ? $.__views.__alloyId3.addEventListener("click", showTrends) : __defers["$.__views.__alloyId3!click!showTrends"] = true;
    $.__views.__alloyId4 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId4"
    });
    $.__views.menuHome.add($.__views.__alloyId4);
    showLooks ? $.__views.__alloyId4.addEventListener("click", showLooks) : __defers["$.__views.__alloyId4!click!showLooks"] = true;
    $.__views.__alloyId5 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId5"
    });
    $.__views.menuHome.add($.__views.__alloyId5);
    showAlarm ? $.__views.__alloyId5.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId5!click!showAlarm"] = true;
    $.__views.__alloyId6 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId6"
    });
    $.__views.menuHome.add($.__views.__alloyId6);
    showSettings ? $.__views.__alloyId6.addEventListener("click", showSettings) : __defers["$.__views.__alloyId6!click!showSettings"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2!click!showHome"] && $.__views.__alloyId2.addEventListener("click", showHome);
    __defers["$.__views.__alloyId3!click!showTrends"] && $.__views.__alloyId3.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId4!click!showLooks"] && $.__views.__alloyId4.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId5!click!showAlarm"] && $.__views.__alloyId5.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId6!click!showSettings"] && $.__views.__alloyId6.addEventListener("click", showSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;