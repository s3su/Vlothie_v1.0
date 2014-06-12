function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "look";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.look = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        id: "look",
        title: "Looks"
    });
    $.__views.look && $.addTopLevelView($.__views.look);
    $.__views.lookContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "20dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "lookContent"
    });
    $.__views.look.add($.__views.lookContent);
    $.__views.articleTop = Ti.UI.createView({
        layout: "vertical",
        height: "180dp",
        top: "0dp",
        width: "100%",
        color: "#fff",
        backgroundColor: "blue",
        id: "articleTop"
    });
    $.__views.lookContent.add($.__views.articleTop);
    $.__views.articleTopImg = Ti.UI.createImageView({
        image: "/top.png",
        id: "articleTopImg"
    });
    $.__views.articleTop.add($.__views.articleTopImg);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        color: "#000",
        text: "Top",
        id: "__alloyId15"
    });
    $.__views.articleTop.add($.__views.__alloyId15);
    $.__views.articleBottom = Ti.UI.createView({
        layout: "vertical",
        height: "180dp",
        top: "0dp",
        width: "100%",
        color: "#fff",
        backgroundColor: "red",
        id: "articleBottom"
    });
    $.__views.lookContent.add($.__views.articleBottom);
    $.__views.articleBottomImg = Ti.UI.createImageView({
        image: "/bottom.png",
        id: "articleBottomImg"
    });
    $.__views.articleBottom.add($.__views.articleBottomImg);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "#000",
        text: "Bottom",
        id: "__alloyId16"
    });
    $.__views.articleBottom.add($.__views.__alloyId16);
    $.__views.articleShoes = Ti.UI.createView({
        layout: "vertical",
        height: "120dp",
        top: "180dp",
        width: "100%",
        color: "#fff",
        backgroundColor: "green",
        id: "articleShoes"
    });
    $.__views.lookContent.add($.__views.articleShoes);
    $.__views.articleShoesImg = Ti.UI.createImageView({
        image: "/shoes.png",
        id: "articleShoesImg"
    });
    $.__views.articleShoes.add($.__views.articleShoesImg);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        color: "#000",
        text: "Shoes",
        id: "__alloyId17"
    });
    $.__views.articleShoes.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Alloy.createController("menu", {
        id: "__alloyId18",
        __parentSymbol: $.__views.look
    });
    $.__views.__alloyId18.setParent($.__views.look);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;