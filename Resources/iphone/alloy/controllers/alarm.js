function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "alarm";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        id: "__alloyId2",
        title: ""
    });
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.__alloyId2.add($.__views.header);
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
    $.__views.alarm = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Alarm",
        icon: "/images/home/v-alarm.png",
        id: "alarm"
    });
    $.__views.alarm && $.addTopLevelView($.__views.alarm);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;