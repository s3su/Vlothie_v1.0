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
    this.__controllerPath = "home";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId13 = [];
    $.__views.vlothieHome = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        apiName: "Ti.UI.Window",
        id: "vlothieHome",
        title: "Vlothie Home",
        classes: []
    });
    $.__views.homeContent = Ti.UI.createScrollView({
        top: "20dp",
        left: "0dp",
        right: "0dp",
        height: "500dp",
        backgroundColor: "transparent",
        apiName: "Ti.UI.ScrollView",
        id: "homeContent",
        classes: []
    });
    $.__views.vlothieHome.add($.__views.homeContent);
    $.__views.hello = Ti.UI.createView({
        top: "16dp",
        left: "16dp",
        right: "16dp",
        height: "80dp",
        borderRadius: "8dp",
        backgroundColor: "#4f4f42",
        opacity: "0.25",
        zIndex: "1",
        translucent: true,
        apiName: "Ti.UI.View",
        id: "hello",
        classes: []
    });
    $.__views.homeContent.add($.__views.hello);
    $.__views.helloLeft = Ti.UI.createView({
        height: "70dp",
        width: "90dp",
        left: "6dp",
        backgroundColor: "transparent",
        apiName: "Ti.UI.View",
        id: "helloLeft",
        classes: []
    });
    $.__views.hello.add($.__views.helloLeft);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontFamily: "arial",
            fontSize: "13",
            fontWeight: "light"
        },
        textAlign: "left",
        top: "40dp",
        zIndex: "500",
        text: "Nube 16",
        apiName: "Ti.UI.Label",
        classes: [ "weatherTextTemp" ],
        id: "__alloyId14"
    });
    $.__views.helloLeft.add($.__views.__alloyId14);
    $.__views.helloMid = Ti.UI.createView({
        height: "70dp",
        width: "2dp",
        left: "103dp",
        backgroundColor: "transparent",
        apiName: "Ti.UI.View",
        id: "helloMid",
        classes: []
    });
    $.__views.hello.add($.__views.helloMid);
    $.__views.helloRight = Ti.UI.createView({
        height: "70dp",
        width: "170dp",
        left: "112dp",
        backgroundColor: "transparent",
        zIndex: "1",
        apiName: "Ti.UI.View",
        id: "helloRight",
        classes: []
    });
    $.__views.hello.add($.__views.helloRight);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontFamily: "arial",
            fontSize: "16dp",
            fontWeight: "bold"
        },
        textAlign: "left",
        top: "8dp",
        zIndex: "100",
        text: "Good morning! Be beautiful",
        apiName: "Ti.UI.Label",
        classes: [ "weatherTextBold" ],
        id: "__alloyId15"
    });
    $.__views.helloRight.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontFamily: "arial",
            fontSize: "13",
            fontWeight: "light"
        },
        textAlign: "left",
        top: "40dp",
        zIndex: 500,
        text: "Today wear neutral colors",
        apiName: "Ti.UI.Label",
        classes: [ "weatherText" ],
        id: "__alloyId16"
    });
    $.__views.helloRight.add($.__views.__alloyId16);
    $.__views.getLook = Ti.UI.createView({
        top: "0dp",
        apiName: "Ti.UI.View",
        id: "getLook",
        classes: []
    });
    $.__views.homeContent.add($.__views.getLook);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Get the look for:",
        apiName: "Ti.UI.Label",
        id: "__alloyId17",
        classes: []
    });
    $.__views.getLook.add($.__views.__alloyId17);
    $.__views.yourLooks = Ti.UI.createView({
        top: "120dp",
        height: "540dp",
        apiName: "Ti.UI.View",
        id: "yourLooks",
        classes: []
    });
    $.__views.homeContent.add($.__views.yourLooks);
    $.__views.__alloyId18 = Ti.UI.createView({
        top: "0dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#a1238e",
        apiName: "Ti.UI.View",
        classes: [ "yourLooksEachA" ],
        id: "__alloyId18"
    });
    $.__views.yourLooks.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        color: "white",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "THAT MEETING",
        apiName: "Ti.UI.Label",
        classes: [ "sectionTitleWhite" ],
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    showLooks ? $.__views.__alloyId19.addEventListener("click", showLooks) : __defers["$.__views.__alloyId19!click!showLooks"] = true;
    $.__views.__alloyId20 = Ti.UI.createView({
        top: "66dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fe94d5",
        apiName: "Ti.UI.View",
        classes: [ "yourLooksEachB" ],
        id: "__alloyId20"
    });
    $.__views.yourLooks.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        color: "a1238e",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "SPORTY YOU",
        apiName: "Ti.UI.Label",
        classes: [ "sectionTitleViolet" ],
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    showLooks ? $.__views.__alloyId21.addEventListener("click", showLooks) : __defers["$.__views.__alloyId21!click!showLooks"] = true;
    $.__views.__alloyId22 = Ti.UI.createView({
        top: "132dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#ffc3e2",
        apiName: "Ti.UI.View",
        classes: [ "yourLooksEachC" ],
        id: "__alloyId22"
    });
    $.__views.yourLooks.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        color: "a1238e",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "A CASUAL DAY",
        apiName: "Ti.UI.Label",
        classes: [ "sectionTitleViolet" ],
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    showLooks ? $.__views.__alloyId23.addEventListener("click", showLooks) : __defers["$.__views.__alloyId23!click!showLooks"] = true;
    $.__views.__alloyId24 = Ti.UI.createView({
        top: "198dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fee8f3",
        apiName: "Ti.UI.View",
        classes: [ "yourLooksEachD" ],
        id: "__alloyId24"
    });
    $.__views.yourLooks.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        color: "a1238e",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "YOUR LOOK FOR THE NIGHT",
        apiName: "Ti.UI.Label",
        classes: [ "sectionTitleViolet" ],
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    showLooks ? $.__views.__alloyId25.addEventListener("click", showLooks) : __defers["$.__views.__alloyId25!click!showLooks"] = true;
    $.__views.__alloyId26 = Ti.UI.createView({
        top: "264dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fdf4f9",
        apiName: "Ti.UI.View",
        classes: [ "yourLooksEachE" ],
        id: "__alloyId26"
    });
    $.__views.yourLooks.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        color: "a1238e",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "MORE  ; )",
        apiName: "Ti.UI.Label",
        classes: [ "sectionTitleViolet" ],
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    showLooks ? $.__views.__alloyId27.addEventListener("click", showLooks) : __defers["$.__views.__alloyId27!click!showLooks"] = true;
    $.__views.menuHome = Ti.UI.createButtonBar({
        zIndex: "100",
        bottom: "10dp",
        height: "58dp",
        width: "100%",
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        apiName: "Ti.UI.ButtonBar",
        id: "menuHome",
        classes: []
    });
    $.__views.vlothieHome.add($.__views.menuHome);
    $.__views.__alloyId28 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        apiName: "Ti.UI.Button",
        classes: [ "homeButtonMenuHome" ],
        id: "__alloyId28"
    });
    $.__views.menuHome.add($.__views.__alloyId28);
    showHome ? $.__views.__alloyId28.addEventListener("click", showHome) : __defers["$.__views.__alloyId28!click!showHome"] = true;
    $.__views.__alloyId29 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        apiName: "Ti.UI.Button",
        classes: [ "trendButtonMenuHome" ],
        id: "__alloyId29"
    });
    $.__views.menuHome.add($.__views.__alloyId29);
    showTrends ? $.__views.__alloyId29.addEventListener("click", showTrends) : __defers["$.__views.__alloyId29!click!showTrends"] = true;
    $.__views.__alloyId30 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        apiName: "Ti.UI.Button",
        classes: [ "lookButtonMenuHome" ],
        id: "__alloyId30"
    });
    $.__views.menuHome.add($.__views.__alloyId30);
    showLooks ? $.__views.__alloyId30.addEventListener("click", showLooks) : __defers["$.__views.__alloyId30!click!showLooks"] = true;
    $.__views.__alloyId31 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        apiName: "Ti.UI.Button",
        classes: [ "alarmButtonMenuHome" ],
        id: "__alloyId31"
    });
    $.__views.menuHome.add($.__views.__alloyId31);
    showAlarm ? $.__views.__alloyId31.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId31!click!showAlarm"] = true;
    $.__views.__alloyId32 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        apiName: "Ti.UI.Button",
        classes: [ "settingsButtonMenuHome" ],
        id: "__alloyId32"
    });
    $.__views.menuHome.add($.__views.__alloyId32);
    showSettings ? $.__views.__alloyId32.addEventListener("click", showSettings) : __defers["$.__views.__alloyId32!click!showSettings"] = true;
    $.__views.home = Ti.UI.createTab({
        icon: "images/home/v-home.png",
        window: $.__views.vlothieHome,
        apiName: "Ti.UI.Tab",
        id: "home",
        title: "Home",
        classes: []
    });
    __alloyId13.push($.__views.home);
    $.__views.__alloyId33 = Alloy.createController("trend", {
        apiName: "Alloy.Require",
        id: "__alloyId33",
        classes: [],
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId33.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId34 = Alloy.createController("look", {
        apiName: "Alloy.Require",
        id: "__alloyId34",
        classes: [],
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId34.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId36 = Alloy.createController("alarm", {
        apiName: "Alloy.Require",
        id: "__alloyId36",
        classes: [],
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId36.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId38 = Alloy.createController("settings", {
        apiName: "Alloy.Require",
        id: "__alloyId38",
        classes: [],
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId38.getViewEx({
        recurse: true
    }));
    $.__views.TabGroup = Ti.UI.createTabGroup({
        tintColor: "white",
        translucent: true,
        tabs: __alloyId13,
        apiName: "Ti.UI.TabGroup",
        id: "TabGroup",
        classes: []
    });
    $.__views.TabGroup && $.addTopLevelView($.__views.TabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId19!click!showLooks"] && $.__views.__alloyId19.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId21!click!showLooks"] && $.__views.__alloyId21.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId23!click!showLooks"] && $.__views.__alloyId23.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId25!click!showLooks"] && $.__views.__alloyId25.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId27!click!showLooks"] && $.__views.__alloyId27.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId28!click!showHome"] && $.__views.__alloyId28.addEventListener("click", showHome);
    __defers["$.__views.__alloyId29!click!showTrends"] && $.__views.__alloyId29.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId30!click!showLooks"] && $.__views.__alloyId30.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId31!click!showAlarm"] && $.__views.__alloyId31.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId32!click!showSettings"] && $.__views.__alloyId32.addEventListener("click", showSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;