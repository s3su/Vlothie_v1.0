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
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
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
    $.__views.__alloyId45 = Ti.UI.createButton({
        id: "__alloyId45"
    });
    $.__views.articleButtons.add($.__views.__alloyId45);
    closeBrowser ? $.__views.__alloyId45.addEventListener("click", closeBrowser) : __defers["$.__views.__alloyId45!click!closeBrowser"] = true;
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "http://www.appcelerator.com"
    });
    $.__views.browserWindow.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.webview.url = Alloy.Globals.webBrowserUrl;
    __defers["$.__views.__alloyId45!click!closeBrowser"] && $.__views.__alloyId45.addEventListener("click", closeBrowser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;