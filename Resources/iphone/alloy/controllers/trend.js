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
    $.__views.trendContent = Ti.UI.createView({
        layout: "vertical",
        top: "20dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "trendContent"
    });
    $.__views.trend.add($.__views.trendContent);
    $.__views.trendImg = Ti.UI.createImageView({
        image: "/trend_01.jpg",
        id: "trendImg"
    });
    $.__views.trendContent.add($.__views.trendImg);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Trends",
        id: "title"
    });
    $.__views.trendContent.add($.__views.title);
    $.__views.__alloyId28 = Alloy.createController("menu", {
        id: "__alloyId28",
        __parentSymbol: $.__views.trend
    });
    $.__views.__alloyId28.setParent($.__views.trend);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;