function Controller() {
    function showWindows(e) {
        0 == e.index ? Alloy.createController("look").getView().open() : 1 == e.index ? Alloy.createController("trend").getView().open() : 2 == e.index ? Alloy.createController("alarm").getView().open() : 3 == e.index ? Alloy.createController("settings").getView().open() : 4 == e.index && Alloy.createController("home").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.footer = Ti.UI.createView({
        id: "footer"
    });
    $.__views.footer && $.addTopLevelView($.__views.footer);
    var __alloyId12 = [];
    var __alloyId18 = {
        title: "Looks",
        ns: "Alloy.Abstract"
    };
    __alloyId12.push(__alloyId18);
    var __alloyId19 = {
        title: "Trends",
        ns: "Alloy.Abstract"
    };
    __alloyId12.push(__alloyId19);
    var __alloyId20 = {
        title: "Alarm",
        ns: "Alloy.Abstract"
    };
    __alloyId12.push(__alloyId20);
    var __alloyId21 = {
        title: "Settings",
        ns: "Alloy.Abstract"
    };
    __alloyId12.push(__alloyId21);
    var __alloyId22 = {
        title: "Home",
        ns: "Alloy.Abstract"
    };
    __alloyId12.push(__alloyId22);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        labels: __alloyId12,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    showWindows ? $.__views.tabbedbar.addEventListener("click", showWindows) : __defers["$.__views.tabbedbar!click!showWindows"] = true;
    $.__views.loading = Alloy.createWidget("com.appcelerator.loading", "widget", {
        id: "loading",
        __parentSymbol: __parentSymbol
    });
    $.__views.loading && $.addTopLevelView($.__views.loading);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.loading.setOpacity(1);
    $.loading.setOpacity(0);
    __defers["$.__views.tabbedbar!click!showWindows"] && $.__views.tabbedbar.addEventListener("click", showWindows);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;