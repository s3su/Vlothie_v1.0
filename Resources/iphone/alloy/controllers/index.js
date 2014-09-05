function Controller() {
    function goToHome() {
        Alloy.createController("home").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.landingWin = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        id: "landingWin",
        title: "Vlothie"
    });
    $.__views.landingWin && $.addTopLevelView($.__views.landingWin);
<<<<<<< HEAD
    $.__views.__alloyId30 = Ti.UI.createView({
        id: "__alloyId30"
    });
    $.__views.landingWin.add($.__views.__alloyId30);
=======
    $.__views.__alloyId34 = Ti.UI.createView({
        id: "__alloyId34"
    });
    $.__views.landingWin.add($.__views.__alloyId34);
>>>>>>> FETCH_HEAD
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Vlothie",
        id: "title"
    });
<<<<<<< HEAD
    $.__views.__alloyId30.add($.__views.title);
    $.__views.__alloyId31 = Ti.UI.createView({
        id: "__alloyId31"
    });
    $.__views.landingWin.add($.__views.__alloyId31);
    goToHome ? $.__views.__alloyId31.addEventListener("click", goToHome) : __defers["$.__views.__alloyId31!click!goToHome"] = true;
=======
    $.__views.__alloyId34.add($.__views.title);
    $.__views.__alloyId35 = Ti.UI.createView({
        id: "__alloyId35"
    });
    $.__views.landingWin.add($.__views.__alloyId35);
    goToHome ? $.__views.__alloyId35.addEventListener("click", goToHome) : __defers["$.__views.__alloyId35!click!goToHome"] = true;
>>>>>>> FETCH_HEAD
    $.__views.landingImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "transparent",
        image: "/images/landingVlothie.jpg",
        touchEnabled: true,
        id: "landingImage"
    });
<<<<<<< HEAD
    $.__views.__alloyId31.add($.__views.landingImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.landingWin.open();
    __defers["$.__views.__alloyId31!click!goToHome"] && $.__views.__alloyId31.addEventListener("click", goToHome);
=======
    $.__views.__alloyId35.add($.__views.landingImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.landingWin.open();
    __defers["$.__views.__alloyId35!click!goToHome"] && $.__views.__alloyId35.addEventListener("click", goToHome);
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;