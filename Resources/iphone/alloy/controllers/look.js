function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function buildLooksBySituationId() {
        var count = 0;
        Ti.API.info("!!Building Look By situation ID: " + Alloy.Globals.selectedSituationId);
        for (var index in Alloy.Globals.looksArray) if (Alloy.Globals.looksArray[index]["situationId"] == Alloy.Globals.selectedSituationId) {
            looksCurrentArray[count] = [];
            looksCurrentArray[count]["title"] = Alloy.Globals.looksArray[index]["title"];
            looksCurrentArray[count]["lookId"] = Alloy.Globals.looksArray[index]["lookId"];
            looksCurrentArray[count]["topArticleIndex"] = Alloy.Globals.getArticlesIndexByArticleId(Alloy.Globals.looksArray[index]["topArticleId"]);
            looksCurrentArray[count]["bottomArticleIndex"] = Alloy.Globals.getArticlesIndexByArticleId(Alloy.Globals.looksArray[index]["bottomArticleId"]);
            looksCurrentArray[count]["shoesArticleIndex"] = Alloy.Globals.getArticlesIndexByArticleId(Alloy.Globals.looksArray[index]["shoesArticleId"]);
            count++;
        }
        looksCurrentArray["size"] = count;
    }
    function buildLooksByNextSituation() {
        Alloy.Globals.selectedSituationId + 1 >= Alloy.Globals.situationArraySize ? Alloy.Globals.selectedSituationId = 1 : Alloy.Globals.selectedSituationId++;
        buildLooksBySituationId();
    }
    function buildLooksByPreviousSituation() {
        Alloy.Globals.selectedSituationId - 1 >= 1 ? Alloy.Globals.selectedSituationId-- : Alloy.Globals.selectedSituationId = Alloy.Globals.situationArraySize;
        buildLooksBySituationId();
    }
    function loadRandomLook() {
        Alloy.Globals.lookCurrentIndex = Math.floor(Math.random() * looksCurrentArray["size"]);
    }
    function showLook() {
        Ti.API.info("!!Show Look with index: " + Alloy.Globals.lookCurrentIndex);
        animation.flipHorizontal($.lookContent, $.lookContent, 500);
        $.articleTopImg.image = Alloy.Globals.articlesArray[looksCurrentArray[Alloy.Globals.lookCurrentIndex]["topArticleIndex"]]["articlePhotoLook"];
        $.articleBottomImg.image = Alloy.Globals.articlesArray[looksCurrentArray[Alloy.Globals.lookCurrentIndex]["bottomArticleIndex"]]["articlePhotoLook"];
        $.articleShoesImg.image = Alloy.Globals.articlesArray[looksCurrentArray[Alloy.Globals.lookCurrentIndex]["shoesArticleIndex"]]["articlePhotoLook"];
        animation.flipHorizontal($.lookContent, $.lookContent, 500);
    }
    function loadPreviousLook() {
        Alloy.Globals.lookCurrentIndex - 1 >= 0 ? Alloy.Globals.lookCurrentIndex-- : Alloy.Globals.lookCurrentIndex = looksCurrentArray["size"] - 1;
    }
    function loadNextLook() {
        Alloy.Globals.lookCurrentIndex + 1 == looksCurrentArray["size"] ? Alloy.Globals.lookCurrentIndex = 0 : Alloy.Globals.lookCurrentIndex++;
    }
    function showArticleTop() {}
    function showArticleBottom() {}
    function showArticleShoes() {}
    function closeLook() {
        $.lookWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "look";
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
    $.__views.lookWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        tabBarHidden: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "lookWindow"
    });
    $.__views.lookWindow && $.addTopLevelView($.__views.lookWindow);
    $.__views.lookButtons = Ti.UI.createView({
        height: "28dp",
        top: "0dp",
        zIndex: "10",
        id: "lookButtons"
    });
    $.__views.lookWindow.add($.__views.lookButtons);
    $.__views.__alloyId29 = Ti.UI.createButton({
        image: "/images/v-back.png",
        height: "32dp",
        tintColor: "#fff",
        left: "8dp",
        top: "2dp",
        id: "__alloyId29"
    });
    $.__views.lookButtons.add($.__views.__alloyId29);
    closeLook ? $.__views.__alloyId29.addEventListener("click", closeLook) : __defers["$.__views.__alloyId29!click!closeLook"] = true;
    $.__views.__alloyId30 = Ti.UI.createButton({
        image: "/images/v-search.png",
        tintColor: "#fff",
        height: "32dp",
        right: "8dp",
        top: "2dp",
        id: "__alloyId30"
    });
    $.__views.lookButtons.add($.__views.__alloyId30);
    $.__views.getLook = Ti.UI.createView({
        top: "2dp",
        width: "100%",
        height: "20dp",
        id: "getLook"
    });
    $.__views.lookWindow.add($.__views.getLook);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "A cassual day look:",
        id: "__alloyId31"
    });
    $.__views.getLook.add($.__views.__alloyId31);
    $.__views.lookContent = Ti.UI.createScrollView({
        layout: "vertical",
        top: "70dp",
        backgroundColor: "transparent",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "lookContent"
    });
    $.__views.lookWindow.add($.__views.lookContent);
    $.__views.articleTop = Ti.UI.createView({
        layout: "vertical",
        height: "150dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleTop"
    });
    $.__views.lookContent.add($.__views.articleTop);
    $.__views.articleTopImg = Ti.UI.createImageView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "articleTopImg"
    });
    $.__views.articleTop.add($.__views.articleTopImg);
    showArticleTop ? $.__views.articleTopImg.addEventListener("click", showArticleTop) : __defers["$.__views.articleTopImg!click!showArticleTop"] = true;
    $.__views.__alloyId32 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId32"
    });
    $.__views.lookContent.add($.__views.__alloyId32);
    $.__views.articleBottom = Ti.UI.createView({
        layout: "vertical",
        height: "150dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleBottom"
    });
    $.__views.lookContent.add($.__views.articleBottom);
    $.__views.articleBottomImg = Ti.UI.createImageView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "articleBottomImg"
    });
    $.__views.articleBottom.add($.__views.articleBottomImg);
    showArticleBottom ? $.__views.articleBottomImg.addEventListener("click", showArticleBottom) : __defers["$.__views.articleBottomImg!click!showArticleBottom"] = true;
    $.__views.__alloyId33 = Ti.UI.createView({
        height: "2dp",
        backgroundColor: "#fda8e2",
        bottom: "0dp",
        id: "__alloyId33"
    });
    $.__views.lookContent.add($.__views.__alloyId33);
    $.__views.articleShoes = Ti.UI.createView({
        layout: "vertical",
        height: "120dp",
        top: "0dp",
        bottom: "0dp",
        id: "articleShoes"
    });
    $.__views.lookContent.add($.__views.articleShoes);
    $.__views.articleShoesImg = Ti.UI.createImageView({
        bottom: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "articleShoesImg"
    });
    $.__views.articleShoes.add($.__views.articleShoesImg);
    showArticleShoes ? $.__views.articleShoesImg.addEventListener("click", showArticleShoes) : __defers["$.__views.articleShoesImg!click!showArticleShoes"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("---------------- look.js ------------------------");
    var animation = require("alloy/animation");
    var looksCurrentArray = [];
    if (Alloy.Globals.selectedSituationId > 0) {
        buildLooksBySituationId();
        Ti.API.info("looksCurrentArray: " + Alloy.Globals.dump(looksCurrentArray));
        loadRandomLook();
        showLook();
        $.lookContent.addEventListener("swipe", function(e) {
            if ("right" == e.direction) loadPreviousLook(); else if ("left" == e.direction) loadNextLook(); else if ("top" == e.direction) {
                buildLooksByNextSituation();
                loadRandomLook();
            } else if ("down" == e.direction) {
                buildLooksByPreviousSituation();
                loadRandomLook();
            }
            showLook();
        });
    } else if (Alloy.Globals.selectedTrendId > 0) {
        loadLookByTrendId();
        showLook();
        $.lookContent.addEventListener("swipe", function(e) {
            "right" == e.direction ? Alloy.createController("trend").getView().open() : "left" == e.direction || "top" == e.direction || "down" == e.direction;
            showLook();
        });
    }
    __defers["$.__views.__alloyId29!click!closeLook"] && $.__views.__alloyId29.addEventListener("click", closeLook);
    __defers["$.__views.articleTopImg!click!showArticleTop"] && $.__views.articleTopImg.addEventListener("click", showArticleTop);
    __defers["$.__views.articleBottomImg!click!showArticleBottom"] && $.__views.articleBottomImg.addEventListener("click", showArticleBottom);
    __defers["$.__views.articleShoesImg!click!showArticleShoes"] && $.__views.articleShoesImg.addEventListener("click", showArticleShoes);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;