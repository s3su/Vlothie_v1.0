function Controller() {
    function __alloyId28() {
        __parentSymbol.removeEventListener("open", __alloyId28);
        if (__parentSymbol.activity) __parentSymbol.activity.onCreateOptionsMenu = function(e) {
            var __alloyId21 = {
                title: "Looks",
                id: "__alloyId20"
            };
            $.__views.__alloyId20 = e.menu.add(_.pick(__alloyId21, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId20.applyProperties(_.omit(__alloyId21, Alloy.Android.menuItemCreateArgs));
            showWindows ? $.__views.__alloyId20.addEventListener("click", showWindows) : __defers["$.__views.__alloyId20!click!showWindows"] = true;
            var __alloyId23 = {
                title: "Trends",
                id: "__alloyId22"
            };
            $.__views.__alloyId22 = e.menu.add(_.pick(__alloyId23, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId22.applyProperties(_.omit(__alloyId23, Alloy.Android.menuItemCreateArgs));
            showWindows ? $.__views.__alloyId22.addEventListener("click", showWindows) : __defers["$.__views.__alloyId22!click!showWindows"] = true;
            var __alloyId25 = {
                title: "Alarm",
                id: "__alloyId24"
            };
            $.__views.__alloyId24 = e.menu.add(_.pick(__alloyId25, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId24.applyProperties(_.omit(__alloyId25, Alloy.Android.menuItemCreateArgs));
            showWindows ? $.__views.__alloyId24.addEventListener("click", showWindows) : __defers["$.__views.__alloyId24!click!showWindows"] = true;
            var __alloyId27 = {
                title: "Settings",
                id: "__alloyId26"
            };
            $.__views.__alloyId26 = e.menu.add(_.pick(__alloyId27, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId26.applyProperties(_.omit(__alloyId27, Alloy.Android.menuItemCreateArgs));
            showWindows ? $.__views.__alloyId26.addEventListener("click", showWindows) : __defers["$.__views.__alloyId26!click!showWindows"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function showWindows(e) {
        0 == e.index ? Alloy.createController("look").getView().open() : 1 == e.index ? Alloy.createController("trend").getView().open() : 2 == e.index ? Alloy.createController("alarm").getView().open() : 3 == e.index && Alloy.createController("settings").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    __parentSymbol.addEventListener("open", __alloyId28);
    $.__views.footer && $.addTopLevelView($.__views.footer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.tabbedbar!click!showWindows"] && $.__views.tabbedbar.addEventListener("click", showWindows);
    __defers["$.__views.__alloyId20!click!showWindows"] && $.__views.__alloyId20.addEventListener("click", showWindows);
    __defers["$.__views.__alloyId22!click!showWindows"] && $.__views.__alloyId22.addEventListener("click", showWindows);
    __defers["$.__views.__alloyId24!click!showWindows"] && $.__views.__alloyId24.addEventListener("click", showWindows);
    __defers["$.__views.__alloyId26!click!showWindows"] && $.__views.__alloyId26.addEventListener("click", showWindows);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;