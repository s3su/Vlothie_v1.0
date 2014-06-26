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
    var __alloyId8 = [];
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
    $.__views.__alloyId9 = Ti.UI.createLabel({
        color: "pink",
        font: "arial",
        fontSize: "14",
        text: "Good morning! 16 c / 72 f be beautiful",
        id: "__alloyId9"
    });
    $.__views.hello.add($.__views.__alloyId9);
    $.__views.yourLooks = Ti.UI.createView({
        top: "90dp",
        height: "540dp",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
    $.__views.__alloyId10 = Ti.UI.createView({
        top: "0dp",
        height: "90dp",
        backgroundImage: "/images/home/day-01.jpg",
        id: "__alloyId10"
    });
    $.__views.yourLooks.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
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
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    showLooks ? $.__views.__alloyId11.addEventListener("click", showLooks) : __defers["$.__views.__alloyId11!click!showLooks"] = true;
    $.__views.__alloyId12 = Ti.UI.createView({
        top: "90dp",
        height: "90dp",
        backgroundImage: "/images/home/date-01.jpg",
        id: "__alloyId12"
    });
    $.__views.yourLooks.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
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
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    showLooks ? $.__views.__alloyId13.addEventListener("click", showLooks) : __defers["$.__views.__alloyId13!click!showLooks"] = true;
    $.__views.__alloyId14 = Ti.UI.createView({
        top: "180dp",
        height: "90dp",
        backgroundImage: "/images/home/friends-01.jpg",
        id: "__alloyId14"
    });
    $.__views.yourLooks.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
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
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    showLooks ? $.__views.__alloyId15.addEventListener("click", showLooks) : __defers["$.__views.__alloyId15!click!showLooks"] = true;
    $.__views.__alloyId16 = Ti.UI.createView({
        top: "270dp",
        height: "90dp",
        backgroundImage: "/images/home/day-01.jpg",
        id: "__alloyId16"
    });
    $.__views.yourLooks.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
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
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    showLooks ? $.__views.__alloyId17.addEventListener("click", showLooks) : __defers["$.__views.__alloyId17!click!showLooks"] = true;
    $.__views.__alloyId18 = Ti.UI.createView({
        top: "360dp",
        height: "90dp",
        backgroundImage: "/images/home/date-01.jpg",
        id: "__alloyId18"
    });
    $.__views.yourLooks.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
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
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    showLooks ? $.__views.__alloyId19.addEventListener("click", showLooks) : __defers["$.__views.__alloyId19!click!showLooks"] = true;
    $.__views.__alloyId20 = Ti.UI.createView({
        top: "450dp",
        height: "90dp",
        backgroundImage: "/images/home/friends-01.jpg",
        id: "__alloyId20"
    });
    $.__views.yourLooks.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
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
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    showLooks ? $.__views.__alloyId21.addEventListener("click", showLooks) : __defers["$.__views.__alloyId21!click!showLooks"] = true;
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
    __alloyId8.push($.__views.home);
    $.__views.__alloyId22 = Alloy.createController("trend", {
        id: "__alloyId22",
        __parentSymbol: __parentSymbol
    });
    __alloyId8.push($.__views.__alloyId22.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId23 = Alloy.createController("look", {
        id: "__alloyId23",
        __parentSymbol: __parentSymbol
    });
    __alloyId8.push($.__views.__alloyId23.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId25 = Alloy.createController("alarm", {
        id: "__alloyId25",
        __parentSymbol: __parentSymbol
    });
    __alloyId8.push($.__views.__alloyId25.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId27 = Alloy.createController("settings", {
        id: "__alloyId27",
        __parentSymbol: __parentSymbol
    });
    __alloyId8.push($.__views.__alloyId27.getViewEx({
        recurse: true
    }));
    $.__views.TabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId8,
        id: "TabGroup"
    });
    $.__views.TabGroup && $.addTopLevelView($.__views.TabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId11!click!showLooks"] && $.__views.__alloyId11.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId13!click!showLooks"] && $.__views.__alloyId13.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId15!click!showLooks"] && $.__views.__alloyId15.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId17!click!showLooks"] && $.__views.__alloyId17.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId19!click!showLooks"] && $.__views.__alloyId19.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId21!click!showLooks"] && $.__views.__alloyId21.addEventListener("click", showLooks);
    __defers["$.__views.shake!click!showTrends"] && $.__views.shake.addEventListener("click", showTrends);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;