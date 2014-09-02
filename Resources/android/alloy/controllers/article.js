function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function closeArticle() {
        $.articleWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "article";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.articleWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "articleWindow",
        title: "Article Name"
    });
    $.__views.articleWindow && $.addTopLevelView($.__views.articleWindow);
    $.__views.articleButtons = Ti.UI.createView({
        height: "30dp",
        top: "2dp",
        zIndex: "10",
        id: "articleButtons"
    });
    $.__views.articleWindow.add($.__views.articleButtons);
    $.__views.__alloyId7 = Ti.UI.createButton({
        image: "/images/v-back.png",
        tintColor: "#fff",
        top: "2dp",
        left: "8dp",
        id: "__alloyId7"
    });
    $.__views.articleButtons.add($.__views.__alloyId7);
    closeArticle ? $.__views.__alloyId7.addEventListener("click", closeArticle) : __defers["$.__views.__alloyId7!click!closeArticle"] = true;
    $.__views.articleContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "32dp",
        backgroundColor: "transparent",
        id: "articleContent"
    });
    $.__views.articleWindow.add($.__views.articleContent);
    $.__views.articleSelected = Ti.UI.createView({
        layout: "vertical",
        height: "420dp",
        top: "0dp",
        width: "100%",
        backgroundColor: "transparent",
        id: "articleSelected"
    });
    $.__views.articleContent.add($.__views.articleSelected);
    $.__views.articleSelectedImg = Ti.UI.createImageView({
        image: "/images/article/v-article-01.png",
        zIndex: "100",
        top: "0dp",
        id: "articleSelectedImg"
    });
    $.__views.articleSelected.add($.__views.articleSelectedImg);
    $.__views.__alloyId8 = Ti.UI.createButton({
        image: "/images/v-article-buy.png",
        tintColor: "#beee00",
        right: "8dp",
        top: "4dp",
        zIndex: "200",
        id: "__alloyId8"
    });
    $.__views.articleSelected.add($.__views.__alloyId8);
    $.__views.articleInfo = Ti.UI.createView({
        layout: "vertical",
        top: "20dp",
        backgroundColor: "transparent",
        id: "articleInfo"
    });
    $.__views.articleContent.add($.__views.articleInfo);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        color: "black",
        left: "4dp",
        font: {
            fontSize: 16,
            fontFamily: "AmericanTypewriter"
        },
        text: "Article title",
        id: "__alloyId9"
    });
    $.__views.articleInfo.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "black",
        width: 300,
        left: 10,
        bottom: 10,
        font: {
            fontSize: 14,
            fontFamily: "AmericanTypewriter"
        },
        text: "Together Through Life is the 33rd studio album by Bob Dylan, released on April 28, 2009, on Columbia Records. The album debuted at number one in several countries, including the U.S. and the UK. It is Dylan's first number one in Britain since New Morning in 1970. Together Through Life is the 33rd studio album by Bob Dylan, released on April 28, 2009, on Columbia Records. The album debuted at number one in several countries, including the U.S. and the UK. It is Dylan's first number one in Britain since New Morning in 1970.",
        id: "__alloyId10"
    });
    $.__views.articleInfo.add($.__views.__alloyId10);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId7!click!closeArticle"] && $.__views.__alloyId7.addEventListener("click", closeArticle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;