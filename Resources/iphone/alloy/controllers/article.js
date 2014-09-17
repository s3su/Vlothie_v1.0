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
    $.__views.__alloyId0 = Ti.UI.createButton({
        image: "/images/v-back.png",
        tintColor: "#fff",
        top: "2dp",
        left: "8dp",
        id: "__alloyId0"
    });
    $.__views.articleButtons.add($.__views.__alloyId0);
    closeArticle ? $.__views.__alloyId0.addEventListener("click", closeArticle) : __defers["$.__views.__alloyId0!click!closeArticle"] = true;
    $.__views.articleContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "28dp",
        backgroundColor: "transparent",
        id: "articleContent"
    });
    $.__views.articleWindow.add($.__views.articleContent);
    $.__views.articleSelected = Ti.UI.createView({
        height: "420dp",
        top: "0dp",
        width: "100%",
        backgroundColor: "transparent",
        id: "articleSelected"
    });
    $.__views.articleContent.add($.__views.articleSelected);
    $.__views.__alloyId1 = Ti.UI.createView({
        right: "12dp",
        top: "0dp",
        zIndex: "200",
        width: "60dp",
        height: "60dp",
        id: "__alloyId1"
    });
    $.__views.articleSelected.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createButton({
        image: "/images/v-article-buy.png",
        tintColor: "#beee00",
        zIndex: "250",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        left: "12dp",
        top: "30dp",
        zIndex: "200",
        width: "60dp",
        height: "60dp",
        id: "__alloyId3"
    });
    $.__views.articleSelected.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createButton({
        image: "/images/v-article-diamond.png",
        tintColor: "#f9a0e0",
        zIndex: "250",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        id: "__alloyId5"
    });
    $.__views.articleSelected.add($.__views.__alloyId5);
    $.__views.articleSelectedImg = Ti.UI.createImageView({
        zIndex: "100",
        top: "16dp",
        width: "400dp",
        id: "articleSelectedImg"
    });
    $.__views.__alloyId5.add($.__views.articleSelectedImg);
    $.__views.__alloyId6 = Ti.UI.createView({
        right: "12dp",
        bottom: "100dp",
        zIndex: "200",
        width: "60dp",
        height: "60dp",
        id: "__alloyId6"
    });
    $.__views.articleSelected.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createButton({
        image: "/images/v-article-info.png",
        tintColor: "#de6ebb",
        zIndex: "250",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        right: "12dp",
        bottom: "50dp",
        zIndex: "200",
        width: "60dp",
        height: "60dp",
        id: "__alloyId8"
    });
    $.__views.articleSelected.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createButton({
        image: "/images/v-article-wear.png",
        tintColor: "#f9a0e0",
        zIndex: "250",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.articleInfo = Ti.UI.createView({
        layout: "vertical",
        top: "20dp",
        backgroundColor: "transparent",
        id: "articleInfo"
    });
    $.__views.articleContent.add($.__views.articleInfo);
    $.__views.articleTitle = Ti.UI.createLabel({
        color: "black",
        left: "4dp",
        font: {
            fontSize: 16,
            fontFamily: "AmericanTypewriter"
        },
        text: "Article title",
        id: "articleTitle"
    });
    $.__views.articleInfo.add($.__views.articleTitle);
    $.__views.articleInfoText = Ti.UI.createLabel({
        color: "black",
        width: 300,
        left: 10,
        bottom: 10,
        font: {
            fontSize: 14,
            fontFamily: "AmericanTypewriter"
        },
        text: "Article desct",
        id: "articleInfoText"
    });
    $.__views.articleInfo.add($.__views.articleInfoText);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.articleSelectedImg.image = Alloy.Globals.articlesArray[Alloy.Globals.sectedArticleId]["articlePhotoArt"];
    $.articleTitle.text = Alloy.Globals.articlesArray[Alloy.Globals.sectedArticleId]["title"];
    $.articleInfoText.text = Alloy.Globals.articlesArray[Alloy.Globals.sectedArticleId]["description"];
    __defers["$.__views.__alloyId0!click!closeArticle"] && $.__views.__alloyId0.addEventListener("click", closeArticle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;