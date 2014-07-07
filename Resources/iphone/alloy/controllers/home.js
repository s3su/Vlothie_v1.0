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
    var __alloyId13 = [];
    $.__views.vlothieHome = Ti.UI.createWindow({
        backgroundColor: "#fff",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        backgroundImage: "/images/landingVlothie.jpg",
        id: "vlothieHome",
        title: "Vlothie Home"
    });
    $.__views.homeContent = Ti.UI.createScrollView({
        top: "20dp",
        height: "500dp",
        backgroundColor: "transparent",
        left: 0,
        right: 0,
        id: "homeContent"
    });
    $.__views.vlothieHome.add($.__views.homeContent);
    $.__views.hello = Ti.UI.createView({
        top: "0dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "hello"
    });
    $.__views.homeContent.add($.__views.hello);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "pink",
        font: "arial",
        fontSize: "14",
        text: "Good morning! 16 c / 72 f be beautiful",
        id: "__alloyId14"
    });
    $.__views.hello.add($.__views.__alloyId14);
    $.__views.yourLooks = Ti.UI.createView({
        top: "90dp",
        height: "540dp",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
    $.__views.__alloyId15 = Ti.UI.createView({
        top: "0dp",
        height: "90dp",
        backgroundImage: "/images/home/day-01.jpg",
        id: "__alloyId15"
    });
    $.__views.yourLooks.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "white",
        left: "10dp",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        text: "1 - The day",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    showLooks ? $.__views.__alloyId16.addEventListener("click", showLooks) : __defers["$.__views.__alloyId16!click!showLooks"] = true;
    $.__views.__alloyId17 = Ti.UI.createView({
        top: "90dp",
        height: "90dp",
        backgroundImage: "/images/home/date-01.jpg",
        id: "__alloyId17"
    });
    $.__views.yourLooks.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "white",
        left: "10dp",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        text: "2 - That meeting",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    showLooks ? $.__views.__alloyId18.addEventListener("click", showLooks) : __defers["$.__views.__alloyId18!click!showLooks"] = true;
    $.__views.__alloyId19 = Ti.UI.createView({
        top: "180dp",
        height: "90dp",
        backgroundImage: "/images/home/friends-01.jpg",
        id: "__alloyId19"
    });
    $.__views.yourLooks.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        color: "white",
        left: "10dp",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        text: "3 - Sporty you!",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    showLooks ? $.__views.__alloyId20.addEventListener("click", showLooks) : __defers["$.__views.__alloyId20!click!showLooks"] = true;
    $.__views.__alloyId21 = Ti.UI.createView({
        top: "270dp",
        height: "90dp",
        backgroundImage: "/images/home/day-01.jpg",
        id: "__alloyId21"
    });
    $.__views.yourLooks.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        color: "white",
        left: "10dp",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        text: "4 - whit friends",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    showLooks ? $.__views.__alloyId22.addEventListener("click", showLooks) : __defers["$.__views.__alloyId22!click!showLooks"] = true;
    $.__views.__alloyId23 = Ti.UI.createView({
        top: "360dp",
        height: "90dp",
        backgroundImage: "/images/home/date-01.jpg",
        id: "__alloyId23"
    });
    $.__views.yourLooks.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        color: "white",
        left: "10dp",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        text: "5 - Party",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    showLooks ? $.__views.__alloyId24.addEventListener("click", showLooks) : __defers["$.__views.__alloyId24!click!showLooks"] = true;
    $.__views.__alloyId25 = Ti.UI.createView({
        top: "450dp",
        height: "90dp",
        backgroundImage: "/images/home/friends-01.jpg",
        id: "__alloyId25"
    });
    $.__views.yourLooks.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        color: "white",
        left: "10dp",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        text: "6 - Shine",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    showLooks ? $.__views.__alloyId26.addEventListener("click", showLooks) : __defers["$.__views.__alloyId26!click!showLooks"] = true;
    $.__views.trends = Ti.UI.createView({
        top: "630dp",
        height: "50dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "trends"
    });
    $.__views.homeContent.add($.__views.trends);
    $.__views.shake = Ti.UI.createLabel({
        color: "pink",
        left: "10dp",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        text: "be in!",
        id: "shake"
    });
    $.__views.trends.add($.__views.shake);
    showTrends ? $.__views.shake.addEventListener("click", showTrends) : __defers["$.__views.shake!click!showTrends"] = true;
    $.__views.home = Ti.UI.createTab({
        height: "42dp",
        width: "42dp",
        iconIsmask: "true",
        window: $.__views.vlothieHome,
        id: "home",
        title: "",
        icon: "/images/home/v-home.png"
    });
    __alloyId13.push($.__views.home);
    $.__views.__alloyId27 = Alloy.createController("trend", {
        id: "__alloyId27",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId27.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId28 = Alloy.createController("look", {
        id: "__alloyId28",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId28.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId30 = Alloy.createController("alarm", {
        id: "__alloyId30",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId30.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId32 = Alloy.createController("settings", {
        id: "__alloyId32",
        __parentSymbol: __parentSymbol
    });
    __alloyId13.push($.__views.__alloyId32.getViewEx({
        recurse: true
    }));
    $.__views.TabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId13,
        id: "TabGroup"
    });
    $.__views.TabGroup && $.addTopLevelView($.__views.TabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId16!click!showLooks"] && $.__views.__alloyId16.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId18!click!showLooks"] && $.__views.__alloyId18.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId20!click!showLooks"] && $.__views.__alloyId20.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId22!click!showLooks"] && $.__views.__alloyId22.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId24!click!showLooks"] && $.__views.__alloyId24.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId26!click!showLooks"] && $.__views.__alloyId26.addEventListener("click", showLooks);
    __defers["$.__views.shake!click!showTrends"] && $.__views.shake.addEventListener("click", showTrends);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;