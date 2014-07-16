function Controller() {
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
    this.__controllerPath = "trend";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.trend = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "trend"
    });
    $.__views.trendContent = Ti.UI.createView({
        layout: "vertical",
        top: "0dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "trendContent"
    });
    $.__views.trend.add($.__views.trendContent);
    showLooks ? $.__views.trendContent.addEventListener("click", showLooks) : __defers["$.__views.trendContent!click!showLooks"] = true;
    $.__views.trendImg = Ti.UI.createImageView({
        image: "/images/trends/trend_01.jpg",
        id: "trendImg"
    });
    $.__views.trendContent.add($.__views.trendImg);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Trends",
        id: "title"
    });
    $.__views.trendContent.add($.__views.title);
    $.__views.menuHome = Ti.UI.createButtonBar({
        zIndex: "100",
        bottom: "10dp",
        height: "42dp",
        width: "100%",
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        id: "menuHome"
    });
    $.__views.trend.add($.__views.menuHome);
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
    $.__views.trendTab = Ti.UI.createTab({
        window: $.__views.trend,
        id: "trendTab",
        title: "Trends",
        icon: "/images/home/v-trend.png"
    });
    $.__views.trendTab && $.addTopLevelView($.__views.trendTab);
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