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
    this.__controllerPath = "userRow";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.userRow = Ti.UI.createTableViewRow({
        id: "userRow"
    });
    $.__views.userRow && $.addTopLevelView($.__views.userRow);
    $.__views.name = Ti.UI.createLabel({
        color: "#FFF",
        id: "name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.userRow.add($.__views.name);
    $.__views.ager = Ti.UI.createLabel({
        color: "#FFF",
        id: "ager",
        text: "undefined" != typeof $model.__transform["age"] ? $model.__transform["age"] : $model.get("age")
    });
    $.__views.userRow.add($.__views.ager);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("alloy/moment");
    Alloy.Collections.user;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;