function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showHome() {
        Alloy.createController("index").getView().open();
    }
    function showLooks() {
        Alloy.Globals.isSetLook = Alloy.Globals.trendsArray[Alloy.Globals.trendId]["lookId"];
        Alloy.createController("look").getView().open();
    }
    function selectTrendId(direction) {
        "right" == direction ? Alloy.Globals.trendId - 1 >= 0 ? Alloy.Globals.trendId-- : Alloy.Globals.trendId = Alloy.Globals.trendsArray["size"] - 1 : "left" == direction ? Alloy.Globals.trendId + 1 < Alloy.Globals.trendsArray["size"] ? Alloy.Globals.trendId++ : Alloy.Globals.trendId = 0 : "random" == direction && (Alloy.Globals.trendId = Math.floor(Math.random() * Alloy.Globals.trendsArray["size"]));
        return Alloy.Globals.trendId;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "trend";
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
    $.__views.trendWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "trendWindow"
    });
    $.__views.trendWindow && $.addTopLevelView($.__views.trendWindow);
    $.__views.windowButtons = Ti.UI.createView({
        height: "36dp",
        top: "0dp",
        zIndex: "1",
        backgroundColor: "transparent",
        id: "windowButtons"
    });
    $.__views.trendWindow.add($.__views.windowButtons);
    $.__views.__alloyId46 = Ti.UI.createButton({
        image: "/images/v-back.png",
        height: "32dp",
        tintColor: "#922a80",
        left: "8dp",
        top: "2dp",
        id: "__alloyId46"
    });
    $.__views.windowButtons.add($.__views.__alloyId46);
    showHome ? $.__views.__alloyId46.addEventListener("click", showHome) : __defers["$.__views.__alloyId46!click!showHome"] = true;
    $.__views.__alloyId47 = Ti.UI.createButton({
        image: "/images/v-search.png",
        tintColor: "#922a80",
        height: "32dp",
        right: "8dp",
        top: "2dp",
        id: "__alloyId47"
    });
    $.__views.windowButtons.add($.__views.__alloyId47);
    $.__views.windowTitle = Ti.UI.createView({
        top: "6dp",
        width: "100%",
        height: "24dp",
        id: "windowTitle"
    });
    $.__views.trendWindow.add($.__views.windowTitle);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "20dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Trend Stylist",
        id: "__alloyId48"
    });
    $.__views.windowTitle.add($.__views.__alloyId48);
    $.__views.trendContentScroll = Ti.UI.createScrollView({
        layout: "vertical",
        top: "28dp",
        backgroundColor: "transparent",
        id: "trendContentScroll"
    });
    $.__views.trendWindow.add($.__views.trendContentScroll);
    $.__views.trendContent = Ti.UI.createView({
        top: "12dp",
        horizontalWrap: "true",
        width: "90%",
        height: "95%",
        backgroundColor: "transparent",
        borderRadius: "8dp",
        viewShadowColor: "#000",
        viewShadowOffset: "-1",
        id: "trendContent"
    });
    $.__views.trendContentScroll.add($.__views.trendContent);
    showLooks ? $.__views.trendContent.addEventListener("click", showLooks) : __defers["$.__views.trendContent!click!showLooks"] = true;
    $.__views.trendImg = Ti.UI.createImageView({
        layout: "vertical",
        image: "/images/trends/trend_01.jpg",
        borderRadius: "8dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "trendImg"
    });
    $.__views.trendContent.add($.__views.trendImg);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("---------------- trend.js ------------------------");
    var animation = require("alloy/animation");
    Alloy.Globals.trendId <= 0 && (Alloy.Globals.trendId = selectTrendId("random"));
    var imagePath = Alloy.Globals.trendsArray[Alloy.Globals.trendId]["photoMain"];
    $.trendImg.image = imagePath;
    $.trendContent.addEventListener("swipe", function(e) {
        "right" == e.direction ? Alloy.Globals.trendId = selectTrendId("right") : "left" == e.direction && (Alloy.Globals.trendId = selectTrendId("left"));
        animation.flipHorizontal($.trendContent, $.trendContent, 500);
        var imagePath = Alloy.Globals.trendsArray[Alloy.Globals.trendId]["photoMain"];
        $.trendImg.image = imagePath;
        animation.flipHorizontal($.trendContent, $.trendContent, 500);
        $.trendInfoText.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]["title"]);
        $.trendAuthorImg.setText(Alloy.Globals.trendsArray[Alloy.Globals.trendId]["accountName"]);
        Ti.API.info("Alloy.Globals.trendId: " + Alloy.Globals.trendId + " AND imagePath: " + imagePath);
    });
    __defers["$.__views.__alloyId46!click!showHome"] && $.__views.__alloyId46.addEventListener("click", showHome);
    __defers["$.__views.trendContent!click!showLooks"] && $.__views.trendContent.addEventListener("click", showLooks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;