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
    $.__views.lookContent = Ti.UI.createView({
        layout: "vertical",
        top: "20dp",
        backgroundColor: "transparent",
        width: "100%",
        height: "640dp",
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
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "#000",
        text: "Top",
        id: "__alloyId11"
    });
    $.__views.articleTop.add($.__views.__alloyId11);
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
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#000",
        text: "Bottom",
        id: "__alloyId12"
    });
    $.__views.articleBottom.add($.__views.__alloyId12);
    $.__views.articleShoes = Ti.UI.createView({
        layout: "vertical",
        height: "120dp",
        top: "0dp",
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
    $.__views.__alloyId13 = Ti.UI.createLabel({
        color: "#000",
        text: "Shoes",
        id: "__alloyId13"
    });
    $.__views.articleShoes.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Alloy.createController("menu", {
        id: "__alloyId14",
        __parentSymbol: $.__views.look
    });
    $.__views.__alloyId14.setParent($.__views.look);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;