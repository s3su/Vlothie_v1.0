function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "article";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.article = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        id: "article",
        title: ""
    });
    $.__views.article && $.addTopLevelView($.__views.article);
    $.__views.articleContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "20dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "articleContent"
    });
    $.__views.article.add($.__views.articleContent);
    $.__views.articleSelected = Ti.UI.createView({
        layout: "vertical",
        height: "360dp",
        top: "0dp",
        width: "100%",
        color: "#fff",
        backgroundColor: "blue",
        id: "articleSelected"
    });
    $.__views.articleContent.add($.__views.articleSelected);
    $.__views.articleSelectedImg = Ti.UI.createImageView({
        image: "/top.png",
        height: Ti.UI.FILL,
        id: "articleSelectedImg"
    });
    $.__views.articleSelected.add($.__views.articleSelectedImg);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Imagen del articulo",
        id: "__alloyId3"
    });
    $.__views.articleSelected.add($.__views.__alloyId3);
    $.__views.socialItems = Ti.UI.createView({
        layout: "vertical",
        height: "40dp",
        top: "0dp",
        width: "100%",
        color: "#fff",
        horizontalWrap: "true",
        id: "socialItems"
    });
    $.__views.articleContent.add($.__views.socialItems);
    $.__views.wear = Ti.UI.createButton({
        left: "10dp",
        center: "true",
        width: "40%",
        title: "I wear it",
        id: "wear"
    });
    $.__views.socialItems.add($.__views.wear);
    $.__views.use = Ti.UI.createButton({
        right: "10dp",
        center: "true",
        width: "40%",
        title: "x friend",
        id: "use"
    });
    $.__views.socialItems.add($.__views.use);
    $.__views.buyButton = Ti.UI.createView({
        layout: "vertical",
        height: "4 0dp",
        top: "0dp",
        width: "100%",
        color: "#fff",
        backgroundColor: "red",
        id: "buyButton"
    });
    $.__views.articleContent.add($.__views.buyButton);
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "Buy it!",
        id: "__alloyId4"
    });
    $.__views.buyButton.add($.__views.__alloyId4);
    $.__views.articleInfo = Ti.UI.createView({
        layout: "vertical",
        height: "120dp",
        top: "90dp",
        width: "100%",
        color: "#fff",
        backgroundColor: "green",
        id: "articleInfo"
    });
    $.__views.articleContent.add($.__views.articleInfo);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Article Info",
        id: "__alloyId5"
    });
    $.__views.articleInfo.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createTextArea({
        id: "__alloyId6"
    });
    $.__views.articleInfo.add($.__views.__alloyId6);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;