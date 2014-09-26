function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "webBrowser";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.webBrowser = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        modal: "true",
        id: "webBrowser"
    });
    $.__views.webBrowser && $.addTopLevelView($.__views.webBrowser);
    $.__views.__alloyId56 = Ti.UI.createWebView({
        url: "",
        id: "__alloyId56"
    });
    $.__views.webBrowser.add($.__views.__alloyId56);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.webview.url = "http://www.bits0.com/bits0Develop/";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;