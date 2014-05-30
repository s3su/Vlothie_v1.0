function Controller() {
    function __alloyId32(e) {
        if (e && e.fromAdapter) return;
        __alloyId32.opts || {};
        var models = whereFunction(__alloyId31);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId28 = models[i];
            __alloyId28.__transform = transformFunction(__alloyId28);
            var __alloyId30 = Alloy.createController("userRow", {
                $model: __alloyId28,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId30.getViewEx({
                recurse: true
            }));
        }
        $.__views.userTable.setData(rows);
    }
    function whereFunction(collection) {
        return whereIndex ? collection.where({
            done: 1 === whereIndex ? 0 : 1
        }) : collection.models;
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        transform.item = "[" + transform.item + "]";
        return transform;
    }
    function addUserToDB() {
        Alloy.createController("addUser").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "users";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.usersWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "usersWin",
        title: "User"
    });
    $.__views.usersWin && $.addTopLevelView($.__views.usersWin);
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.usersWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#000",
        text: "Alloy User",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId27 = Ti.UI.createView({
        id: "__alloyId27"
    });
    $.__views.header.add($.__views.__alloyId27);
    $.__views.addUser = Ti.UI.createView({
        id: "addUser"
    });
    $.__views.header.add($.__views.addUser);
    addUserToDB ? $.__views.addUser.addEventListener("click", addUserToDB) : __defers["$.__views.addUser!click!addUserToDB"] = true;
    $.__views.addImage = Ti.UI.createImageView({
        id: "addImage"
    });
    $.__views.addUser.add($.__views.addImage);
    $.__views.userTable = Ti.UI.createTableView({
        id: "userTable"
    });
    $.__views.usersWin.add($.__views.userTable);
    var __alloyId31 = Alloy.Collections["user"] || user;
    __alloyId31.on("fetch destroy change add remove reset", __alloyId32);
    $.__views.__alloyId33 = Alloy.createController("menu", {
        id: "__alloyId33",
        __parentSymbol: $.__views.usersWin
    });
    $.__views.__alloyId33.setParent($.__views.usersWin);
    exports.destroy = function() {
        __alloyId31.off("fetch destroy change add remove reset", __alloyId32);
    };
    _.extend($, $.__views);
    var users = Alloy.Collections.user;
    users && users.fetch();
    var INDEXES = {
        All: 0,
        Active: 1,
        Done: 2
    };
    var whereIndex = INDEXES["All"];
    __defers["$.__views.addUser!click!addUserToDB"] && $.__views.addUser.addEventListener("click", addUserToDB);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;