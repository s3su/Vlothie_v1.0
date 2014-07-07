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
    $.__views.__alloyId33 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        id: "__alloyId33",
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
    $.__views.__alloyId33.add($.__views.lookContent);
    $.__views.articleTop = Ti.UI.createView({
        height: "180dp",
        top: "0dp",
        width: "100%",
        color: "#fff",
        id: "articleTop"
    });
    $.__views.lookContent.add($.__views.articleTop);
    $.__views.articleTopImg = Ti.UI.createImageView({
        image: "/images/article/top.png",
        id: "articleTopImg"
    });
    $.__views.articleTop.add($.__views.articleTopImg);
    showArticle ? $.__views.articleTopImg.addEventListener("click", showArticle) : __defers["$.__views.articleTopImg!click!showArticle"] = true;
    $.__views.__alloyId34 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Top",
        id: "__alloyId34"
    });
    $.__views.articleTop.add($.__views.__alloyId34);
    $.__views.articleBottom = Ti.UI.createView({
        layout: "vertical",
        height: "180dp",
        top: "0dp",
        width: "100%",
        color: "#fff",
        id: "articleBottom"
    });
    $.__views.lookContent.add($.__views.articleBottom);
    $.__views.articleBottomImg = Ti.UI.createImageView({
        image: "/images/article/bottom.png",
        id: "articleBottomImg"
    });
    $.__views.articleBottom.add($.__views.articleBottomImg);
    showArticle ? $.__views.articleBottomImg.addEventListener("click", showArticle) : __defers["$.__views.articleBottomImg!click!showArticle"] = true;
    $.__views.__alloyId35 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Bottom",
        id: "__alloyId35"
    });
    $.__views.articleBottom.add($.__views.__alloyId35);
    $.__views.articleShoes = Ti.UI.createView({
        layout: "vertical",
        height: "120dp",
        top: "0dp",
        width: "100%",
        color: "#fff",
        id: "articleShoes"
    });
    $.__views.lookContent.add($.__views.articleShoes);
    $.__views.articleShoesImg = Ti.UI.createImageView({
        image: "/images/article/shoes.png",
        id: "articleShoesImg"
    });
    $.__views.articleShoes.add($.__views.articleShoesImg);
    showArticle ? $.__views.articleShoesImg.addEventListener("click", showArticle) : __defers["$.__views.articleShoesImg!click!showArticle"] = true;
    $.__views.__alloyId36 = Ti.UI.createLabel({
        color: "#FFF",
        text: "Shoes",
        id: "__alloyId36"
    });
    $.__views.articleShoes.add($.__views.__alloyId36);
    $.__views.look = Ti.UI.createTab({
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        window: $.__views.__alloyId33,
        id: "look",
        title: "",
        icon: "/images/home/v-look.png"
    });
    $.__views.look && $.addTopLevelView($.__views.look);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animation = require("alloy/animation");
    var articleTop = [];
    var articleBottom = [];
    var articleShoes = [];
    articleTop[0] = "/top.png";
    articleTop[1] = "/bottom.png";
    articleTop[2] = "/shoes.png";
    articleBottom[0] = "/top.png";
    articleBottom[1] = "/bottom.png";
    articleBottom[2] = "/shoes.png";
    articleShoes[0] = "/top.png";
    articleShoes[1] = "/bottom.png";
    articleShoes[2] = "/shoes.png";
    $.articleTop.addEventListener("swipe", function() {
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
        $.articleTopImg.image = articleTop[Math.floor(3 * Math.random())];
        animation.flipHorizontal($.articleTop, $.articleTop, 500);
    });
    $.articleBottom.addEventListener("swipe", function() {
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
        $.articleBottomImg.image = articleBottom[Math.floor(3 * Math.random())];
        animation.flipHorizontal($.articleBottom, $.articleBottom, 500);
    });
    $.articleShoes.addEventListener("swipe", function() {
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
        $.articleShoesImg.image = articleShoes[Math.floor(3 * Math.random())];
        animation.flipHorizontal($.articleShoes, $.articleShoes, 500);
    });
    $.articleBottom.addEventListener("swipe", function() {
        $.articleBottomImg.image.animation = articleTop[Math.floor(3 * Math.random())];
    });
    $.articleShoesImg.addEventListener("swipe", function() {
        $.articleShoesImg.image = articleTop[Math.floor(3 * Math.random())];
    });
    __defers["$.__views.articleTopImg!click!showArticle"] && $.__views.articleTopImg.addEventListener("click", showArticle);
    __defers["$.__views.articleBottomImg!click!showArticle"] && $.__views.articleBottomImg.addEventListener("click", showArticle);
    __defers["$.__views.articleShoesImg!click!showArticle"] && $.__views.articleShoesImg.addEventListener("click", showArticle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;