function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId40 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        id: "__alloyId40",
        title: ""
    });
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "40dp",
        width: Ti.UI.FILL,
        backgroundColor: "white",
        opacity: "0.75",
        id: "header"
    });
    $.__views.__alloyId40.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "settings",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.__alloyId40,
        title: "",
        icon: "/images/home/v-settings.png",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;