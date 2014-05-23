function Controller() {
    function __alloyId25(e) {
        if (e && e.fromAdapter) return;
        __alloyId25.opts || {};
        var models = whereFunction(__alloyId24);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId21 = models[i];
            __alloyId21.__transform = transformFunction(__alloyId21);
            var __alloyId23 = Alloy.createController("userRow", {
                $model: __alloyId21,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId23.getViewEx({
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
    $.__views.__alloyId20 = Ti.UI.createView({
        id: "__alloyId20"
    });
    $.__views.header.add($.__views.__alloyId20);
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
    var __alloyId24 = Alloy.Collections["user"] || user;
    __alloyId24.on("fetch destroy change add remove reset", __alloyId25);
    $.__views.footer = Ti.UI.createView({
        id: "footer"
    });
    $.__views.usersWin.add($.__views.footer);
    var __alloyId27 = [];
    var __alloyId32 = {
        title: "All",
        ns: "Alloy.Abstract"
    };
    __alloyId27.push(__alloyId32);
    var __alloyId33 = {
        title: "Active",
        ns: "Alloy.Abstract"
    };
    __alloyId27.push(__alloyId33);
    var __alloyId34 = {
        title: "Done",
        ns: "Alloy.Abstract"
    };
    __alloyId27.push(__alloyId34);
    var __alloyId35 = {
        title: "Users",
        ns: "Alloy.Abstract"
    };
    __alloyId27.push(__alloyId35);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        labels: __alloyId27,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    showTasks ? $.__views.tabbedbar.addEventListener("click", showTasks) : __defers["$.__views.tabbedbar!click!showTasks"] = true;
    exports.destroy = function() {
        __alloyId24.off("fetch destroy change add remove reset", __alloyId25);
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