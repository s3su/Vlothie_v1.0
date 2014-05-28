function Controller() {
    function __alloyId34(e) {
        if (e && e.fromAdapter) return;
        __alloyId34.opts || {};
        var models = whereFunction(__alloyId33);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId30 = models[i];
            __alloyId30.__transform = transformFunction(__alloyId30);
            var __alloyId32 = Alloy.createController("userRow", {
                $model: __alloyId30,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId32.getViewEx({
                recurse: true
            }));
        }
        $.__views.userTable.setData(rows);
    }
    function __alloyId54() {
        $.__views.usersWin.removeEventListener("open", __alloyId54);
        if ($.__views.usersWin.activity) $.__views.usersWin.activity.onCreateOptionsMenu = function(e) {
            var __alloyId47 = {
                title: "All",
                id: "__alloyId46"
            };
            $.__views.__alloyId46 = e.menu.add(_.pick(__alloyId47, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId46.applyProperties(_.omit(__alloyId47, Alloy.Android.menuItemCreateArgs));
            showTasks ? $.__views.__alloyId46.addEventListener("click", showTasks) : __defers["$.__views.__alloyId46!click!showTasks"] = true;
            var __alloyId49 = {
                title: "Active",
                id: "__alloyId48"
            };
            $.__views.__alloyId48 = e.menu.add(_.pick(__alloyId49, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId48.applyProperties(_.omit(__alloyId49, Alloy.Android.menuItemCreateArgs));
            showTasks ? $.__views.__alloyId48.addEventListener("click", showTasks) : __defers["$.__views.__alloyId48!click!showTasks"] = true;
            var __alloyId51 = {
                title: "Done",
                id: "__alloyId50"
            };
            $.__views.__alloyId50 = e.menu.add(_.pick(__alloyId51, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId50.applyProperties(_.omit(__alloyId51, Alloy.Android.menuItemCreateArgs));
            showTasks ? $.__views.__alloyId50.addEventListener("click", showTasks) : __defers["$.__views.__alloyId50!click!showTasks"] = true;
            var __alloyId53 = {
                title: "Users",
                id: "__alloyId52"
            };
            $.__views.__alloyId52 = e.menu.add(_.pick(__alloyId53, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId52.applyProperties(_.omit(__alloyId53, Alloy.Android.menuItemCreateArgs));
            showUsers ? $.__views.__alloyId52.addEventListener("click", showUsers) : __defers["$.__views.__alloyId52!click!showUsers"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
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
    $.__views.__alloyId29 = Ti.UI.createView({
        id: "__alloyId29"
    });
    $.__views.header.add($.__views.__alloyId29);
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
    var __alloyId33 = Alloy.Collections["user"] || user;
    __alloyId33.on("fetch destroy change add remove reset", __alloyId34);
    $.__views.usersWin.addEventListener("open", __alloyId54);
    exports.destroy = function() {
        __alloyId33.off("fetch destroy change add remove reset", __alloyId34);
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
    __defers["$.__views.__alloyId46!click!showTasks"] && $.__views.__alloyId46.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId48!click!showTasks"] && $.__views.__alloyId48.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId50!click!showTasks"] && $.__views.__alloyId50.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId52!click!showUsers"] && $.__views.__alloyId52.addEventListener("click", showUsers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;