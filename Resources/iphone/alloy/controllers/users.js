function Controller() {
    function __alloyId51(e) {
        if (e && e.fromAdapter) return;
        __alloyId51.opts || {};
        var models = whereFunction(__alloyId50);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId47 = models[i];
            __alloyId47.__transform = transformFunction(__alloyId47);
            var __alloyId49 = Alloy.createController("userRow", {
                $model: __alloyId47,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId49.getViewEx({
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
        font: {
            fontFamily: "AmericanTypewriter"
        },
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
    $.__views.__alloyId46 = Ti.UI.createView({
        id: "__alloyId46"
    });
    $.__views.header.add($.__views.__alloyId46);
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
    var __alloyId50 = Alloy.Collections["user"] || user;
    __alloyId50.on("fetch destroy change add remove reset", __alloyId51);
    $.__views.__alloyId52 = Alloy.createController("menu", {
        id: "__alloyId52",
        __parentSymbol: $.__views.usersWin
    });
    $.__views.__alloyId52.setParent($.__views.usersWin);
    exports.destroy = function() {
        __alloyId50.off("fetch destroy change add remove reset", __alloyId51);
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