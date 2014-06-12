function Controller() {
    function showLooks() {
        Alloy.createController("look").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.vlothieHome = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        backgroundImage: "/landingVlothie.jpg",
        id: "vlothieHome",
        title: "Todo"
    });
    $.__views.vlothieHome && $.addTopLevelView($.__views.vlothieHome);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "40dp",
        width: Ti.UI.FILL,
        backgroundColor: "white",
        opacity: "0.75",
        id: "header"
    });
    $.__views.vlothieHome.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Vlothie",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.homeContent = Ti.UI.createView({
        top: "70dp",
        height: "470dp",
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
    $.__views.__alloyId7 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Good morning! 16 c / 72 f be beautiful",
        id: "__alloyId7"
    });
    $.__views.hello.add($.__views.__alloyId7);
    $.__views.yourLooks = Ti.UI.createView({
        top: "120dp",
        height: "270dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
    $.__views.__alloyId8 = Ti.UI.createView({
        top: "0dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "__alloyId8"
    });
    $.__views.yourLooks.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "1 - The day",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    showLooks ? $.__views.__alloyId9.addEventListener("click", showLooks) : __defers["$.__views.__alloyId9!click!showLooks"] = true;
    $.__views.__alloyId10 = Ti.UI.createView({
        top: "95dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "__alloyId10"
    });
    $.__views.yourLooks.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "2 - That meeting",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    showLooks ? $.__views.__alloyId11.addEventListener("click", showLooks) : __defers["$.__views.__alloyId11!click!showLooks"] = true;
    $.__views.__alloyId12 = Ti.UI.createView({
        top: "190dp",
        height: "90dp",
        backgroundColor: "white",
        opacity: "0.75",
        id: "__alloyId12"
    });
    $.__views.yourLooks.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        color: "#652F8D",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "3 - Sporty you!",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    showLooks ? $.__views.__alloyId13.addEventListener("click", showLooks) : __defers["$.__views.__alloyId13!click!showLooks"] = true;
    $.__views.trends = Ti.UI.createView({
        top: "400dp",
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
    $.__views.__alloyId14 = Alloy.createController("menu", {
        id: "__alloyId14",
        __parentSymbol: $.__views.vlothieHome
    });
    $.__views.__alloyId14.setParent($.__views.vlothieHome);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId9!click!showLooks"] && $.__views.__alloyId9.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId11!click!showLooks"] && $.__views.__alloyId11.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId13!click!showLooks"] && $.__views.__alloyId13.addEventListener("click", showLooks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;