function Controller() {
    function showWindows(e) {
        console.log(e);
        0 == e.index ? Alloy.createController("home").getView().open() : 1 == e.index ? Alloy.createController("trend").getView().open() : 2 == e.index ? Alloy.createController("look").getView().open() : 3 == e.index ? Alloy.createController("article").getView().open() : 4 == e.index ? Alloy.createController("alarm").getView().open() : 5 == e.index && Alloy.createController("settings").getView().open();
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
        bottom: 0,
        height: "46dp",
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        id: "footer"
    });
    $.__views.footer && $.addTopLevelView($.__views.footer);
    var __alloyId38 = [];
    var __alloyId39 = {
        left: "10dp",
        color: "#000",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        title: "Home",
        ns: "Alloy.Abstract"
    };
    __alloyId38.push(__alloyId39);
    var __alloyId40 = {
        left: "10dp",
        color: "#000",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        title: "Trends",
        ns: "Alloy.Abstract"
    };
    __alloyId38.push(__alloyId40);
    var __alloyId41 = {
        left: "10dp",
        color: "#000",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        title: "Looks",
        ns: "Alloy.Abstract"
    };
    __alloyId38.push(__alloyId41);
    var __alloyId42 = {
        left: "10dp",
        color: "#000",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        title: "Article",
        ns: "Alloy.Abstract"
    };
    __alloyId38.push(__alloyId42);
    var __alloyId43 = {
        left: "10dp",
        color: "#000",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        title: "Alarm",
        ns: "Alloy.Abstract"
    };
    __alloyId38.push(__alloyId43);
    var __alloyId44 = {
        left: "10dp",
        color: "#000",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        title: "Settings",
        ns: "Alloy.Abstract"
    };
    __alloyId38.push(__alloyId44);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        backgroundColor: "#652F8D",
        height: 40,
        left: 20,
        right: 20,
        labels: __alloyId38,
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
    var INDEXES = {
        Home: 0,
        Trends: 1,
        Looks: 2,
        Article: 3,
        Alarm: 4,
        Settings: 5
    };
    INDEXES["All"];
    $.loading.setOpacity(1);
    $.loading.setOpacity(0);
    __defers["$.__views.tabbedbar!click!showWindows"] && $.__views.tabbedbar.addEventListener("click", showWindows);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;