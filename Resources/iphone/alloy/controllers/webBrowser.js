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
        fullscreen: true,
        navBarHidden: false,
        exitOnClose: true,
        tabBarHidden: false,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "browserWindow",
        modal: "true"
    });
    $.__views.browserWindow && $.addTopLevelView($.__views.browserWindow);
    $.__views.windowButtons = Ti.UI.createView({
        height: "36dp",
        top: "0dp",
        zIndex: "1",
        backgroundColor: "transparent",
        id: "windowButtons"
    });
    $.__views.browserWindow.add($.__views.windowButtons);
<<<<<<< Updated upstream
    $.__views.__alloyId55 = Ti.UI.createButton({
=======
    $.__views.__alloyId41 = Ti.UI.createButton({
>>>>>>> Stashed changes
        image: "/images/v-back.png",
        height: "32dp",
        tintColor: "#922a80",
        left: "8dp",
        top: "2dp",
<<<<<<< Updated upstream
        id: "__alloyId55"
    });
    $.__views.windowButtons.add($.__views.__alloyId55);
    closeBrowser ? $.__views.__alloyId55.addEventListener("click", closeBrowser) : __defers["$.__views.__alloyId55!click!closeBrowser"] = true;
=======
        id: "__alloyId41"
    });
    $.__views.windowButtons.add($.__views.__alloyId41);
    closeBrowser ? $.__views.__alloyId41.addEventListener("click", closeBrowser) : __defers["$.__views.__alloyId41!click!closeBrowser"] = true;
>>>>>>> Stashed changes
    $.__views.windowTitle = Ti.UI.createView({
        top: "6dp",
        width: "100%",
        height: "24dp",
        id: "windowTitle"
    });
    $.__views.browserWindow.add($.__views.windowTitle);
<<<<<<< Updated upstream
    $.__views.__alloyId56 = Ti.UI.createLabel({
=======
    $.__views.__alloyId42 = Ti.UI.createLabel({
>>>>>>> Stashed changes
        color: "#922a80",
        font: {
            fontSize: "20dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Article link to buy it",
<<<<<<< Updated upstream
        id: "__alloyId56"
    });
<<<<<<< HEAD
    $.__views.windowTitle.add($.__views.__alloyId56);
=======
    $.__views.windowTitle.add($.__views.__alloyId50);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
=======
        id: "__alloyId42"
    });
    $.__views.windowTitle.add($.__views.__alloyId42);
>>>>>>> Stashed changes
    $.__views.webview = Ti.UI.createWebView({
        top: "36dp",
        id: "webview",
        url: "http://www.appcelerator.com"
    });
    $.__views.browserWindow.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.webview.url = Alloy.Globals.webBrowserUrl;
<<<<<<< Updated upstream
<<<<<<< HEAD
    __defers["$.__views.__alloyId55!click!closeBrowser"] && $.__views.__alloyId55.addEventListener("click", closeBrowser);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId53!click!closeBrowser"] && $.__views.__alloyId53.addEventListener("click", closeBrowser);
=======
    __defers["$.__views.__alloyId49!click!closeBrowser"] && $.__views.__alloyId49.addEventListener("click", closeBrowser);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
=======
    __defers["$.__views.__alloyId41!click!closeBrowser"] && $.__views.__alloyId41.addEventListener("click", closeBrowser);
>>>>>>> Stashed changes
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;