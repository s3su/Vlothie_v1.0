function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "trend";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.trend = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "trend",
        title: "Trends"
    });
    $.__views.trend && $.addTopLevelView($.__views.trend);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "40dp",
        width: Ti.UI.FILL,
        backgroundColor: "white",
        opacity: "0.75",
        id: "header"
    });
    $.__views.trend.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Trends",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId21 = Alloy.createController("menu", {
        id: "__alloyId21",
        __parentSymbol: $.__views.trend
    });
    $.__views.__alloyId21.setParent($.__views.trend);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;