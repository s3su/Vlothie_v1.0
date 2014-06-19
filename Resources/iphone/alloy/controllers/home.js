function Controller() {
    function showLooks() {
        var looksTab = $.TabGroup.setActiveTab(2);
        looksTab.open();
    }
    function showTrends() {
        var looksTab = $.TabGroup.setActiveTab(1);
        looksTab.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId7 = [];
    $.__views.vlothieHome = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        backgroundImage: "/landingVlothie.jpg",
        id: "vlothieHome",
        title: "Vlothie Home"
    });
    $.__views.homeContent = Ti.UI.createScrollView({
        top: "20dp",
        height: "500dp",
        backgroundColor: "transparent",
        left: 10,
        right: 10,
        id: "homeContent"
    });
    $.__views.vlothieHome.add($.__views.homeContent);
    $.__views.hello = Ti.UI.createView({
        top: "10dp",
        height: "100dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "hello"
    });
    $.__views.homeContent.add($.__views.hello);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Good morning! 16 c / 72 f be beautiful",
        id: "__alloyId8"
    });
    $.__views.hello.add($.__views.__alloyId8);
    $.__views.yourLooks = Ti.UI.createView({
        top: "120dp",
        height: "600dp",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
    $.__views.__alloyId9 = Ti.UI.createView({
        top: "0dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "__alloyId9"
    });
    $.__views.yourLooks.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "1 - The day",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    showLooks ? $.__views.__alloyId10.addEventListener("click", showLooks) : __defers["$.__views.__alloyId10!click!showLooks"] = true;
    $.__views.__alloyId11 = Ti.UI.createView({
        top: "100dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "__alloyId11"
    });
    $.__views.yourLooks.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "2 - That meeting",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    showLooks ? $.__views.__alloyId12.addEventListener("click", showLooks) : __defers["$.__views.__alloyId12!click!showLooks"] = true;
    $.__views.__alloyId13 = Ti.UI.createView({
        top: "200dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "__alloyId13"
    });
    $.__views.yourLooks.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "3 - Sporty you!",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    showLooks ? $.__views.__alloyId14.addEventListener("click", showLooks) : __defers["$.__views.__alloyId14!click!showLooks"] = true;
    $.__views.__alloyId15 = Ti.UI.createView({
        top: "300dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "__alloyId15"
    });
    $.__views.yourLooks.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "4 - whit friends",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    showLooks ? $.__views.__alloyId16.addEventListener("click", showLooks) : __defers["$.__views.__alloyId16!click!showLooks"] = true;
    $.__views.__alloyId17 = Ti.UI.createView({
        top: "400dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "__alloyId17"
    });
    $.__views.yourLooks.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "5 - Party",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    showLooks ? $.__views.__alloyId18.addEventListener("click", showLooks) : __defers["$.__views.__alloyId18!click!showLooks"] = true;
    $.__views.__alloyId19 = Ti.UI.createView({
        top: "500dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "__alloyId19"
    });
    $.__views.yourLooks.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "6 - Shine",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    showLooks ? $.__views.__alloyId20.addEventListener("click", showLooks) : __defers["$.__views.__alloyId20!click!showLooks"] = true;
    $.__views.trends = Ti.UI.createView({
        top: "740dp",
        height: "50dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "trends"
    });
    $.__views.homeContent.add($.__views.trends);
    $.__views.shake = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "be in!",
        id: "shake"
    });
    $.__views.trends.add($.__views.shake);
    showTrends ? $.__views.shake.addEventListener("click", showTrends) : __defers["$.__views.shake!click!showTrends"] = true;
    $.__views.home = Ti.UI.createTab({
        window: $.__views.vlothieHome,
        id: "home",
        title: "Vlothie Home",
        icon: "KS_nav_ui.png"
    });
    __alloyId7.push($.__views.home);
    $.__views.__alloyId21 = Alloy.createController("trend", {
        id: "__alloyId21",
        __parentSymbol: __parentSymbol
    });
    __alloyId7.push($.__views.__alloyId21.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId22 = Alloy.createController("look", {
        id: "__alloyId22",
        __parentSymbol: __parentSymbol
    });
    __alloyId7.push($.__views.__alloyId22.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId24 = Alloy.createController("alarm", {
        id: "__alloyId24",
        __parentSymbol: __parentSymbol
    });
    __alloyId7.push($.__views.__alloyId24.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId26 = Alloy.createController("settings", {
        id: "__alloyId26",
        __parentSymbol: __parentSymbol
    });
    __alloyId7.push($.__views.__alloyId26.getViewEx({
        recurse: true
    }));
    $.__views.TabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId7,
        id: "TabGroup"
    });
    $.__views.TabGroup && $.addTopLevelView($.__views.TabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId10!click!showLooks"] && $.__views.__alloyId10.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId12!click!showLooks"] && $.__views.__alloyId12.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId14!click!showLooks"] && $.__views.__alloyId14.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId16!click!showLooks"] && $.__views.__alloyId16.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId18!click!showLooks"] && $.__views.__alloyId18.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId20!click!showLooks"] && $.__views.__alloyId20.addEventListener("click", showLooks);
    __defers["$.__views.shake!click!showTrends"] && $.__views.shake.addEventListener("click", showTrends);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;