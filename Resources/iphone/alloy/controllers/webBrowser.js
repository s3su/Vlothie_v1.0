function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function closeBrowser() {
        $.browserWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "webBrowser";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.browserWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        id: "browserWindow",
        modal: "true"
    });
    $.__views.browserWindow && $.addTopLevelView($.__views.browserWindow);
    $.__views.articleButtons = Ti.UI.createView({
        id: "articleButtons"
    });
    $.__views.browserWindow.add($.__views.articleButtons);
    $.__views.__alloyId54 = Ti.UI.createButton({
        id: "__alloyId54"
    });
<<<<<<< HEAD
    $.__views.articleButtons.add($.__views.__alloyId54);
    closeBrowser ? $.__views.__alloyId54.addEventListener("click", closeBrowser) : __defers["$.__views.__alloyId54!click!closeBrowser"] = true;
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "http://www.appcelerator.com"
    });
    $.__views.browserWindow.add($.__views.webview);
=======
    $.__views.webBrowser && $.addTopLevelView($.__views.webBrowser);
    $.__views.__alloyId56 = Ti.UI.createWebView({
        url: "",
        id: "__alloyId56"
    });
    $.__views.webBrowser.add($.__views.__alloyId56);
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.webview.url = Alloy.Globals.webBrowserUrl;
    __defers["$.__views.__alloyId54!click!closeBrowser"] && $.__views.__alloyId54.addEventListener("click", closeBrowser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;