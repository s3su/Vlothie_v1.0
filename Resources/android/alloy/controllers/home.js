function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = whereFunction(__alloyId6);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = transformFunction(__alloyId3);
            var __alloyId5 = Alloy.createController("row", {
                $model: __alloyId3,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId5.getViewEx({
                recurse: true
            }));
        }
        $.__views.todoTable.setData(rows);
    }
    function __alloyId27() {
        $.__views.todoWin.removeEventListener("open", __alloyId27);
        if ($.__views.todoWin.activity) $.__views.todoWin.activity.onCreateOptionsMenu = function(e) {
            var __alloyId20 = {
                title: "All",
                id: "__alloyId19"
            };
            $.__views.__alloyId19 = e.menu.add(_.pick(__alloyId20, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId19.applyProperties(_.omit(__alloyId20, Alloy.Android.menuItemCreateArgs));
            showTasks ? $.__views.__alloyId19.addEventListener("click", showTasks) : __defers["$.__views.__alloyId19!click!showTasks"] = true;
            var __alloyId22 = {
                title: "Active",
                id: "__alloyId21"
            };
            $.__views.__alloyId21 = e.menu.add(_.pick(__alloyId22, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId21.applyProperties(_.omit(__alloyId22, Alloy.Android.menuItemCreateArgs));
            showTasks ? $.__views.__alloyId21.addEventListener("click", showTasks) : __defers["$.__views.__alloyId21!click!showTasks"] = true;
            var __alloyId24 = {
                title: "Done",
                id: "__alloyId23"
            };
            $.__views.__alloyId23 = e.menu.add(_.pick(__alloyId24, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId23.applyProperties(_.omit(__alloyId24, Alloy.Android.menuItemCreateArgs));
            showTasks ? $.__views.__alloyId23.addEventListener("click", showTasks) : __defers["$.__views.__alloyId23!click!showTasks"] = true;
            var __alloyId26 = {
                title: "Users",
                id: "__alloyId25"
            };
            $.__views.__alloyId25 = e.menu.add(_.pick(__alloyId26, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId25.applyProperties(_.omit(__alloyId26, Alloy.Android.menuItemCreateArgs));
            showUsers ? $.__views.__alloyId25.addEventListener("click", showUsers) : __defers["$.__views.__alloyId25!click!showUsers"] = true;
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
    function addToDoItem() {
        Alloy.createController("add").getView().open();
    }
    function showTasks(e) {
        3 == e.index && showUsers(e);
        whereIndex = "undefined" != typeof e.index && null !== e.index ? e.index : INDEXES[e.source.title];
        todos.fetch();
    }
    function showUsers() {
        Alloy.createController("users").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.todoWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        id: "todoWin",
        title: "Todo"
    });
    $.__views.todoWin && $.addTopLevelView($.__views.todoWin);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.todoWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#fff",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Alloy Todo",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId2 = Ti.UI.createView({
        height: "48dp",
        width: "3dp",
        top: "1dp",
        right: "50dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#666",
                offset: 0
            }, {
                color: "#ccc",
                offset: .5
            }, {
                color: "#666",
                offset: 1
            } ]
        },
        id: "__alloyId2"
    });
    $.__views.header.add($.__views.__alloyId2);
    $.__views.addView = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp",
        id: "addView"
    });
    $.__views.header.add($.__views.addView);
    addToDoItem ? $.__views.addView.addEventListener("click", addToDoItem) : __defers["$.__views.addView!click!addToDoItem"] = true;
    $.__views.addImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/ic_menu_add.png",
        touchEnabled: false,
        id: "addImage"
    });
    $.__views.addView.add($.__views.addImage);
    $.__views.todoTable = Ti.UI.createTableView({
        top: Alloy.Globals.tableTop,
        bottom: "46dp",
        id: "todoTable"
    });
    $.__views.todoWin.add($.__views.todoTable);
    var __alloyId6 = Alloy.Collections["todo"] || todo;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    $.__views.todoWin.addEventListener("open", __alloyId27);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    var INDEXES = {
        All: 0,
        Active: 1,
        Done: 2
    };
    var whereIndex = INDEXES["All"];
    $.todoWin.open();
    todos && todos.fetch();
    __defers["$.__views.addView!click!addToDoItem"] && $.__views.addView.addEventListener("click", addToDoItem);
    __defers["$.__views.tabbedbar!click!showTasks"] && $.__views.tabbedbar.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId19!click!showTasks"] && $.__views.__alloyId19.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId21!click!showTasks"] && $.__views.__alloyId21.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId23!click!showTasks"] && $.__views.__alloyId23.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId25!click!showUsers"] && $.__views.__alloyId25.addEventListener("click", showUsers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;