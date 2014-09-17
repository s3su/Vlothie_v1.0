function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "webBrowser";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: ""
    });
    $.__views.webBrowser.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.webview.url = "http://www.bits0.com/bits0Develop/";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;