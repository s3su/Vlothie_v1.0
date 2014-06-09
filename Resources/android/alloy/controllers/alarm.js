function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "alarm";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.alarm = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "alarm",
        title: "alarm"
    });
    $.__views.alarm && $.addTopLevelView($.__views.alarm);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "40dp",
        width: Ti.UI.FILL,
        backgroundColor: "white",
        opacity: "0.75",
        id: "header"
    });
    $.__views.alarm.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "alarm",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId2 = Alloy.createController("menu", {
        id: "__alloyId2",
        __parentSymbol: $.__views.alarm
    });
    $.__views.__alloyId2.setParent($.__views.alarm);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;