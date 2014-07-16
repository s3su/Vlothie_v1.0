function Controller() {
    function closeArticle() {
        $.articleWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "article";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    $.__views.articleButtons = Ti.UI.createButtonBar({
        height: "28dp",
        top: "4dp",
        zIndex: "10",
        id: "articleButtons"
    });
    $.__views.articleWindow.add($.__views.articleButtons);
    $.__views.__alloyId3 = Ti.UI.createButton({
        image: "/images/home/v-home2.png",
        tintColor: "#ddd",
        id: "__alloyId3"
    });
    $.__views.articleButtons.add($.__views.__alloyId3);
    closeArticle ? $.__views.__alloyId3.addEventListener("click", closeArticle) : __defers["$.__views.__alloyId3!click!closeArticle"] = true;
    $.__views.articleContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "32dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "articleContent"
    });
    $.__views.articleWindow.add($.__views.articleContent);
    $.__views.articleSelected = Ti.UI.createView({
        layout: "vertical",
        height: "360dp",
        top: 0,
        width: "100%",
        backgroundColor: "transparent",
        id: "articleSelected"
    });
    $.__views.articleContent.add($.__views.articleSelected);
    $.__views.articleSelectedImg = Ti.UI.createImageView({
        image: "/images/article/top.png",
        height: Ti.UI.FILL,
        id: "articleSelectedImg"
    });
    $.__views.articleSelected.add($.__views.articleSelectedImg);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Imagen del articulo",
        id: "__alloyId4"
    });
    $.__views.articleSelected.add($.__views.__alloyId4);
    var __alloyId6 = [];
    var __alloyId7 = {
        layout: "horizontal",
        left: 0,
        title: "I wear it",
        ns: "Alloy.Abstract"
    };
    __alloyId6.push(__alloyId7);
    var __alloyId8 = {
        layout: "horizontal",
        right: 0,
        title: "Share it ",
        ns: "Alloy.Abstract"
    };
    __alloyId6.push(__alloyId8);
    $.__views.socialItems = Ti.UI.createButtonBar({
        layout: "vertical",
        height: "40dp",
        top: "0dp",
        width: "100%",
        horizontalWrap: "true",
        backgroundColor: "#369",
        labels: __alloyId6,
        id: "socialItems"
    });
    $.__views.articleContent.add($.__views.socialItems);
    $.__views.buyButton = Ti.UI.createView({
        layout: "vertical",
        height: "40dp",
        left: "2dp",
        top: "0dp",
        color: "#fff",
        id: "buyButton"
    });
    $.__views.articleContent.add($.__views.buyButton);
    $.__views.__alloyId9 = Ti.UI.createButton({
        title: "Buy it!",
        id: "__alloyId9"
    });
    $.__views.buyButton.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createButton({
        title: "Add to my closet",
        id: "__alloyId10"
    });
    $.__views.buyButton.add($.__views.__alloyId10);
    $.__views.articleInfo = Ti.UI.createView({
        layout: "vertical",
        top: "90dp",
        backgroundColor: "transparent",
        id: "articleInfo"
    });
    $.__views.articleContent.add($.__views.articleInfo);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "black",
        left: "4dp",
        font: {
            fontSize: 16,
            fontFamily: "AmericanTypewriter"
        },
        text: "Article title",
        id: "__alloyId11"
    });
    $.__views.articleInfo.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "black",
        width: 300,
        left: 10,
        height: 240,
        bottom: 10,
        font: {
            fontSize: 14,
            fontFamily: "AmericanTypewriter"
        },
        text: "Together Through Life is the 33rd studio album by Bob Dylan, released on April 28, 2009, on Columbia Records. The album debuted at number one in several countries, including the U.S. and the UK. It is Dylan's first number one in Britain since New Morning in 1970. Together Through Life is the 33rd studio album by Bob Dylan, released on April 28, 2009, on Columbia Records. The album debuted at number one in several countries, including the U.S. and the UK. It is Dylan's first number one in Britain since New Morning in 1970.",
        id: "__alloyId12"
    });
    $.__views.articleInfo.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId3!click!closeArticle"] && $.__views.__alloyId3.addEventListener("click", closeArticle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;