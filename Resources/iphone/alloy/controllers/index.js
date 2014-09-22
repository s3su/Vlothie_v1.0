function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToHome() {
        Alloy.createController("home").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.landingWin = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        id: "landingWin",
        title: "Vlothie"
    });
    $.__views.landingWin && $.addTopLevelView($.__views.landingWin);
    $.__views.__alloyId26 = Ti.UI.createView({
        id: "__alloyId26"
    });
    $.__views.landingWin.add($.__views.__alloyId26);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Vlothie",
        id: "title"
    });
    $.__views.__alloyId26.add($.__views.title);
    $.__views.__alloyId27 = Ti.UI.createView({
        id: "__alloyId27"
    });
    $.__views.landingWin.add($.__views.__alloyId27);
    goToHome ? $.__views.__alloyId27.addEventListener("click", goToHome) : __defers["$.__views.__alloyId27!click!goToHome"] = true;
    $.__views.landingImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "transparent",
        image: "/images/landingVlothie.jpg",
        touchEnabled: true,
        id: "landingImage"
    });
    $.__views.__alloyId27.add($.__views.landingImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.landingWin.open();
    __defers["$.__views.__alloyId27!click!goToHome"] && $.__views.__alloyId27.addEventListener("click", goToHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;