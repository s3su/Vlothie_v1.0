function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "stylistEach";
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
    $.__views.stylistEach = Ti.UI.createView({
        top: "10dp",
        height: "120dp",
        width: "90%",
        left: "5%",
        backgroundColor: "#FFF",
        borderRadius: "8dp",
        id: "stylistEach"
    });
    $.__views.stylistEach && $.addTopLevelView($.__views.stylistEach);
    $.__views.__alloyId34 = Ti.UI.createView({
        top: "10dp",
        height: "60dp",
        width: "60dp",
        left: "8dp",
        backgroundImage: "/images/vlothie-background.jpg",
        borderRadius: "30dp",
        id: "__alloyId34"
    });
    $.__views.stylistEach.add($.__views.__alloyId34);
    $.__views.stylistPhotoImg = Ti.UI.createImageView({
        id: "stylistPhotoImg"
    });
    $.__views.__alloyId34.add($.__views.stylistPhotoImg);
    $.__views.__alloyId35 = Ti.UI.createView({
        top: "10dp",
        height: "60dp",
        left: "80dp",
        right: "8dp",
        backgroundColor: "#ccc",
        id: "__alloyId35"
    });
    $.__views.stylistEach.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        top: "1dp",
        height: "22dp",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.stylistTitleText = Ti.UI.createLabel({
        color: "violet",
        width: "90%",
        bottom: "2dp",
        font: {
            fontSize: 18,
            fontFamily: "Roboto"
        },
        text: "Followers 11001",
        id: "stylistTitleText"
    });
    $.__views.__alloyId36.add($.__views.stylistTitleText);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Followers 11001",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Looks 11001",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.stylistsArray = {};
    var args = arguments[0] || {};
    $.stylistPhotoImg.image = args.stylistFoto;
    $.stylistTitleText.setText(args.stylistName);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;