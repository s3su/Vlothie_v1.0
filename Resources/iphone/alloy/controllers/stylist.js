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
    $.__views.__alloyId32 = Ti.UI.createButton({
        image: "/images/v-back.png",
        height: "32dp",
        tintColor: "#922a80",
        left: "8dp",
        top: "2dp",
        id: "__alloyId32"
    });
    $.__views.windowButtons.add($.__views.__alloyId32);
    showHome ? $.__views.__alloyId32.addEventListener("click", showHome) : __defers["$.__views.__alloyId32!click!showHome"] = true;
    $.__views.windowTitle = Ti.UI.createView({
        top: "6dp",
        width: "100%",
        height: "24dp",
        id: "windowTitle"
    });
    $.__views.stylistWindow.add($.__views.windowTitle);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "20dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Stylist",
        id: "__alloyId33"
    });
    $.__views.windowTitle.add($.__views.__alloyId33);
    $.__views.stylistScrollView = Ti.UI.createScrollView({
        top: "20dp",
        left: "0dp",
        right: "0dp",
        height: "1560dp",
        id: "stylistScrollView"
    });
    $.__views.stylistWindow.add($.__views.stylistScrollView);
    $.__views.stylistListView = Ti.UI.createView({
        top: "40dp",
        height: "auto",
        layout: "vertical",
        id: "stylistListView"
    });
    $.__views.stylistScrollView.add($.__views.stylistListView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("!!!Inside stylist: ");
    Ti.API.info(Alloy.Globals.dump(Alloy.Globals.stylistsArray));
    for (var index in Alloy.Globals.stylistsArray) {
        Ti.API.info("!!!Stylist NAME: " + Alloy.Globals.stylistsArray[index]["stylistName"]);
        var args = {};
        args["stylistFoto"] = Alloy.Globals.stylistsArray[index]["stylistFoto"];
        args["stylistName"] = Alloy.Globals.stylistsArray[index]["stylistName"];
    }
    __defers["$.__views.__alloyId32!click!showHome"] && $.__views.__alloyId32.addEventListener("click", showHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;