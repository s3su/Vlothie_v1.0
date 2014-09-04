function Controller() {
    function __alloyId67(e) {
        if (e && e.fromAdapter) return;
        __alloyId67.opts || {};
        var models = whereFunction(__alloyId66);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId63 = models[i];
            __alloyId63.__transform = transformFunction(__alloyId63);
            var __alloyId65 = Alloy.createController("userRow", {
                $model: __alloyId63,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId65.getViewEx({
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
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        id: "usersWin",
        title: "User"
    });
    $.__views.usersWin && $.addTopLevelView($.__views.usersWin);
    $.__views.header = Ti.UI.createView({
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
    $.__views.__alloyId62 = Ti.UI.createView({
        id: "__alloyId62"
    });
    $.__views.header.add($.__views.__alloyId62);
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
    var __alloyId66 = Alloy.Collections["user"] || user;
    __alloyId66.on("fetch destroy change add remove reset", __alloyId67);
    exports.destroy = function() {
        __alloyId66.off("fetch destroy change add remove reset", __alloyId67);
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