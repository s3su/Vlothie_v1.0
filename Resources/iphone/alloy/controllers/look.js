function Controller() {
    function showArticle() {
        Alloy.createController("article").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "look";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId27 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "__alloyId27",
        title: ""
    });
    $.__views.lookContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "20dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "lookContent"
    });
    $.__views.__alloyId27.add($.__views.lookContent);
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
    showArticle ? $.__views.articleTopImg.addEventListener("click", showArticle) : __defers["$.__views.articleTopImg!click!showArticle"] = true;
    $.__views.__alloyId28 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Top",
        id: "__alloyId28"
    });
    $.__views.articleTop.add($.__views.__alloyId28);
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
    showArticle ? $.__views.articleBottomImg.addEventListener("click", showArticle) : __defers["$.__views.articleBottomImg!click!showArticle"] = true;
    $.__views.__alloyId29 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Bottom",
        id: "__alloyId29"
    });
    $.__views.articleBottom.add($.__views.__alloyId29);
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
    showArticle ? $.__views.articleShoesImg.addEventListener("click", showArticle) : __defers["$.__views.articleShoesImg!click!showArticle"] = true;
    $.__views.__alloyId30 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Shoes",
        id: "__alloyId30"
    });
    $.__views.articleShoes.add($.__views.__alloyId30);
    $.__views.look = Ti.UI.createTab({
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        window: $.__views.__alloyId27,
        id: "look",
        title: "Looks",
        icon: "KS_nav_views.png"
    });
    $.__views.look && $.addTopLevelView($.__views.look);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.articleTopImg!click!showArticle"] && $.__views.articleTopImg.addEventListener("click", showArticle);
    __defers["$.__views.articleBottomImg!click!showArticle"] && $.__views.articleBottomImg.addEventListener("click", showArticle);
    __defers["$.__views.articleShoesImg!click!showArticle"] && $.__views.articleShoesImg.addEventListener("click", showArticle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;