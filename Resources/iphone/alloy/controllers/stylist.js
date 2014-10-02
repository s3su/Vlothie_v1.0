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
        Alloy.createController("index").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "stylist";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.stylistWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: true,
        exitOnClose: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "stylistWindow",
        title: "Stylist"
    });
    $.__views.stylistWindow && $.addTopLevelView($.__views.stylistWindow);
    $.__views.windowButtons = Ti.UI.createView({
        height: "36dp",
        top: "0dp",
        zIndex: "1",
        backgroundColor: "transparent",
        id: "windowButtons"
    });
    $.__views.stylistWindow.add($.__views.windowButtons);
    $.__views.__alloyId34 = Ti.UI.createButton({
        image: "/images/v-back.png",
        height: "32dp",
        tintColor: "#922a80",
        left: "8dp",
        top: "2dp",
        id: "__alloyId34"
    });
    $.__views.windowButtons.add($.__views.__alloyId34);
    showHome ? $.__views.__alloyId34.addEventListener("click", showHome) : __defers["$.__views.__alloyId34!click!showHome"] = true;
    $.__views.windowTitle = Ti.UI.createView({
        top: "6dp",
        width: "100%",
        height: "24dp",
        id: "windowTitle"
    });
    $.__views.stylistWindow.add($.__views.windowTitle);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "20dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Stylist",
        id: "__alloyId35"
    });
    $.__views.windowTitle.add($.__views.__alloyId35);
    $.__views.stylistScrollView = Ti.UI.createScrollView({
        top: "20dp",
        left: "0dp",
        right: "0dp",
        height: "560dp",
        id: "stylistScrollView"
    });
    $.__views.stylistWindow.add($.__views.stylistScrollView);
    $.__views.__alloyId36 = Ti.UI.createView({
        top: "110dp",
        height: "auto",
        id: "__alloyId36"
    });
    $.__views.stylistScrollView.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        top: "110dp",
        height: "120dp",
        width: "90%",
        left: "5%",
        backgroundColor: "#FFF",
        borderRadius: "8dp",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        top: "10dp",
        height: "60dp",
        width: "60dp",
        left: "8dp",
        backgroundImage: "/images/vlothie-background.jpg",
        borderRadius: "30dp",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        top: "10dp",
        height: "60dp",
        left: "80dp",
        backgroundColor: "#ccc",
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        top: "10dp",
        width: "90%",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Followers 11001",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        top: "10dp",
        width: "90%",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Looks 11001",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("---------------- look.js ------------------------");
    require("alloy/animation");
    __defers["$.__views.__alloyId34!click!showHome"] && $.__views.__alloyId34.addEventListener("click", showHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;