function Controller() {
    function __alloyId38(e) {
        if (e && e.fromAdapter) return;
        __alloyId38.opts || {};
        var models = whereFunction(__alloyId37);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId34 = models[i];
            __alloyId34.__transform = transformFunction(__alloyId34);
            var __alloyId36 = Alloy.createController("userRow", {
                $model: __alloyId34,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId36.getViewEx({
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
    function showTasks(e) {
        console.log(e);
        if (3 == e.index) showUsers(e); else {
            whereIndex = "undefined" != typeof e.index && null !== e.index ? e.index : INDEXES[e.source.title];
            Alloy.createController("home").getView().open();
        }
    }
    function showUsers() {
        Alloy.createController("users").getView().open();
        users.fetch();
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
    $.__views.__alloyId33 = Ti.UI.createView({
        id: "__alloyId33"
    });
    $.__views.header.add($.__views.__alloyId33);
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
    var __alloyId37 = Alloy.Collections["user"] || user;
    __alloyId37.on("fetch destroy change add remove reset", __alloyId38);
    $.__views.footer = Ti.UI.createView({
        id: "footer"
    });
    $.__views.usersWin.add($.__views.footer);
    var __alloyId40 = [];
    var __alloyId45 = {
        title: "All",
        ns: "Alloy.Abstract"
    };
    __alloyId40.push(__alloyId45);
    var __alloyId46 = {
        title: "Active",
        ns: "Alloy.Abstract"
    };
    __alloyId40.push(__alloyId46);
    var __alloyId47 = {
        title: "Done",
        ns: "Alloy.Abstract"
    };
    __alloyId40.push(__alloyId47);
    var __alloyId48 = {
        title: "Users",
        ns: "Alloy.Abstract"
    };
    __alloyId40.push(__alloyId48);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        labels: __alloyId40,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    showTasks ? $.__views.tabbedbar.addEventListener("click", showTasks) : __defers["$.__views.tabbedbar!click!showTasks"] = true;
    exports.destroy = function() {
        __alloyId37.off("fetch destroy change add remove reset", __alloyId38);
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
    __defers["$.__views.tabbedbar!click!showTasks"] && $.__views.tabbedbar.addEventListener("click", showTasks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;