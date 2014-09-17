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
<<<<<<< HEAD
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
    __defers["$.__views.__alloyId47!click!showHome"] && $.__views.__alloyId47.addEventListener("click", showHome);
    __defers["$.__views.__alloyId48!click!showTrends"] && $.__views.__alloyId48.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId49!click!showLooks"] && $.__views.__alloyId49.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId50!click!showAlarm"] && $.__views.__alloyId50.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId51!click!showSettings"] && $.__views.__alloyId51.addEventListener("click", showSettings);
=======
    $.__views.__alloyId41 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId41"
    });
    $.__views.menuHome.add($.__views.__alloyId41);
    showHome ? $.__views.__alloyId41.addEventListener("click", showHome) : __defers["$.__views.__alloyId41!click!showHome"] = true;
    $.__views.__alloyId42 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId42"
    });
    $.__views.menuHome.add($.__views.__alloyId42);
    showTrends ? $.__views.__alloyId42.addEventListener("click", showTrends) : __defers["$.__views.__alloyId42!click!showTrends"] = true;
    $.__views.__alloyId43 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId43"
    });
    $.__views.menuHome.add($.__views.__alloyId43);
    showLooks ? $.__views.__alloyId43.addEventListener("click", showLooks) : __defers["$.__views.__alloyId43!click!showLooks"] = true;
    $.__views.__alloyId44 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId44"
    });
    $.__views.menuHome.add($.__views.__alloyId44);
    showAlarm ? $.__views.__alloyId44.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId44!click!showAlarm"] = true;
    $.__views.__alloyId45 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId45"
    });
    $.__views.menuHome.add($.__views.__alloyId45);
    showSettings ? $.__views.__alloyId45.addEventListener("click", showSettings) : __defers["$.__views.__alloyId45!click!showSettings"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId41!click!showHome"] && $.__views.__alloyId41.addEventListener("click", showHome);
    __defers["$.__views.__alloyId42!click!showTrends"] && $.__views.__alloyId42.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId43!click!showLooks"] && $.__views.__alloyId43.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId44!click!showAlarm"] && $.__views.__alloyId44.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId45!click!showSettings"] && $.__views.__alloyId45.addEventListener("click", showSettings);
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;