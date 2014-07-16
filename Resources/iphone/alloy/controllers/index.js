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
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.landingWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Vlothie",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.landingPhoto = Ti.UI.createView({
        id: "landingPhoto"
    });
    $.__views.landingWin.add($.__views.landingPhoto);
    goToHome ? $.__views.landingPhoto.addEventListener("click", goToHome) : __defers["$.__views.landingPhoto!click!goToHome"] = true;
    $.__views.landingImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "transparent",
        image: "/images/landingVlothie.jpg",
        touchEnabled: true,
        id: "landingImage"
    });
    $.__views.landingPhoto.add($.__views.landingImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.landingWin.open();
    __defers["$.__views.landingPhoto!click!goToHome"] && $.__views.landingPhoto.addEventListener("click", goToHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;