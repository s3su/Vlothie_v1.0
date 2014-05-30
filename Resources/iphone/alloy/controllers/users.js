function Controller() {
    function __alloyId27(e) {
        if (e && e.fromAdapter) return;
        __alloyId27.opts || {};
        var models = whereFunction(__alloyId26);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId23 = models[i];
            __alloyId23.__transform = transformFunction(__alloyId23);
            var __alloyId25 = Alloy.createController("userRow", {
                $model: __alloyId23,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId25.getViewEx({
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
        top: Alloy.Globals.top,
        height: "40dp",
        width: Ti.UI.FILL,
        backgroundColor: "white",
        opacity: "0.75",
        id: "header"
    });
    $.__views.usersWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Alloy User",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId22 = Ti.UI.createView({
        id: "__alloyId22"
    });
    $.__views.header.add($.__views.__alloyId22);
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
    var __alloyId26 = Alloy.Collections["user"] || user;
    __alloyId26.on("fetch destroy change add remove reset", __alloyId27);
    $.__views.__alloyId28 = Alloy.createController("menu", {
        id: "__alloyId28",
        __parentSymbol: $.__views.usersWin
    });
    $.__views.__alloyId28.setParent($.__views.usersWin);
    exports.destroy = function() {
        __alloyId26.off("fetch destroy change add remove reset", __alloyId27);
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