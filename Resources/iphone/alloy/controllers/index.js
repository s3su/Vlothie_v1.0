function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showHome() {
        Alloy.createController("index").getView().open();
    }
    function showTrends() {
        Alloy.createController("trend").getView().open();
    }
    function showLooks() {
        Alloy.Globals.isSetLook = 0;
        Alloy.createController("look").getView().open();
    }
    function showLooksWithSituation1() {
        Alloy.Globals.selectedSituationId = 1;
        Alloy.createController("look").getView().open();
    }
    function showLooksWithSituation2() {
        Alloy.Globals.selectedSituationId = 2;
        Alloy.createController("look").getView().open();
    }
    function showLooksWithSituation3() {
        Alloy.Globals.selectedSituationId = 3;
        Alloy.createController("look").getView().open();
    }
    function showLooksWithSituation4() {
        Alloy.Globals.selectedSituationId = 4;
        Alloy.createController("look").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.vlothieHome = Ti.UI.createWindow({
        backgroundColor: "transparent",
        font: {
            fontFamily: "AmericanTypewriter"
        },
        fullscreen: false,
        exitOnClose: true,
        backgroundImage: "/images/vlothie-background.jpg",
        id: "vlothieHome",
        title: "Vlothie Home"
    });
    $.__views.vlothieHome && $.addTopLevelView($.__views.vlothieHome);
    $.__views.homeContent = Ti.UI.createScrollView({
        top: "20dp",
        left: "0dp",
        right: "0dp",
        height: "460dp",
        id: "homeContent"
    });
    $.__views.vlothieHome.add($.__views.homeContent);
    $.__views.hello = Ti.UI.createView({
        top: "16dp",
        left: "16dp",
        right: "16dp",
        borderRadius: "10dp",
        height: "80dp",
        backgroundImage: "images/home/helloBackground.png",
        id: "hello"
    });
    $.__views.homeContent.add($.__views.hello);
    $.__views.helloLeft = Ti.UI.createView({
        height: "70dp",
        width: "70dp",
        left: "6dp",
        backgroundColor: "transparent",
        zIndex: 2,
        id: "helloLeft"
    });
    $.__views.hello.add($.__views.helloLeft);
    $.__views.weatherIcon = Ti.UI.createImageView({
        top: "8dp",
        id: "weatherIcon"
    });
    $.__views.helloLeft.add($.__views.weatherIcon);
    $.__views.weatherText = Ti.UI.createLabel({
        color: "white",
        font: {
            fontFamily: "arial",
            fontSize: "15",
            fontWeight: "light"
        },
        textAlign: "left",
        top: "48dp",
        zIndex: 3,
        text: "16c / 4c",
        id: "weatherText"
    });
    $.__views.helloLeft.add($.__views.weatherText);
    $.__views.helloMid = Ti.UI.createView({
        height: "70dp",
        width: "2dp",
        left: "83dp",
        backgroundColor: "transparent",
        zIndex: 2,
        id: "helloMid"
    });
    $.__views.hello.add($.__views.helloMid);
    $.__views.helloRight = Ti.UI.createView({
        height: "70dp",
        width: "190dp",
        left: "92dp",
        backgroundColor: "transparent",
        zIndex: 2,
        id: "helloRight"
    });
    $.__views.hello.add($.__views.helloRight);
    $.__views.greetingTimePhrase = Ti.UI.createLabel({
        color: "white",
        left: "0dp",
        font: {
            fontFamily: "arial",
            fontSize: "15dp",
            fontWeight: "bold"
        },
        textAlign: "left",
        top: "8dp",
        zIndex: 3,
        text: "Good morning! Be beautiful",
        id: "greetingTimePhrase"
    });
    $.__views.helloRight.add($.__views.greetingTimePhrase);
    $.__views.greetingDayPhrase = Ti.UI.createLabel({
        color: "white",
        left: "0dp",
        font: {
            fontFamily: "arial",
            fontSize: "13",
            fontWeight: "light"
        },
        textAlign: "left",
        top: "40dp",
        zIndex: 3,
        text: "Today wear neutral colors",
        id: "greetingDayPhrase"
    });
    $.__views.helloRight.add($.__views.greetingDayPhrase);
    $.__views.getLook = Ti.UI.createView({
        top: "98dp",
        width: "100%",
        height: "20dp",
        id: "getLook"
    });
    $.__views.homeContent.add($.__views.getLook);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Get the look for:",
        id: "__alloyId21"
    });
    $.__views.getLook.add($.__views.__alloyId21);
    $.__views.yourLooks = Ti.UI.createView({
        top: "120dp",
        height: "540dp",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
    $.__views.__alloyId22 = Ti.UI.createView({
        top: "0dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#a1238e",
        id: "__alloyId22"
    });
    $.__views.yourLooks.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        color: "white",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "THAT MEETING",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    showLooksWithSituation1 ? $.__views.__alloyId23.addEventListener("click", showLooksWithSituation1) : __defers["$.__views.__alloyId23!click!showLooksWithSituation1"] = true;
    $.__views.__alloyId24 = Ti.UI.createView({
        top: "66dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fe94d5",
        id: "__alloyId24"
    });
    $.__views.yourLooks.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        color: "a1238e",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "SPORTY YOU",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    showLooksWithSituation2 ? $.__views.__alloyId25.addEventListener("click", showLooksWithSituation2) : __defers["$.__views.__alloyId25!click!showLooksWithSituation2"] = true;
    $.__views.__alloyId26 = Ti.UI.createView({
        top: "132dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#ffc3e2",
        id: "__alloyId26"
    });
    $.__views.yourLooks.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        color: "a1238e",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "A CASUAL DAY",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    showLooksWithSituation3 ? $.__views.__alloyId27.addEventListener("click", showLooksWithSituation3) : __defers["$.__views.__alloyId27!click!showLooksWithSituation3"] = true;
    $.__views.__alloyId28 = Ti.UI.createView({
        top: "198dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fee8f3",
        id: "__alloyId28"
    });
    $.__views.yourLooks.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        color: "a1238e",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "YOUR LOOK FOR THE NIGHT",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    showLooksWithSituation4 ? $.__views.__alloyId29.addEventListener("click", showLooksWithSituation4) : __defers["$.__views.__alloyId29!click!showLooksWithSituation4"] = true;
    $.__views.__alloyId30 = Ti.UI.createView({
        top: "264dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fdf4f9",
        id: "__alloyId30"
    });
    $.__views.yourLooks.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        color: "a1238e",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
        text: "MORE  ; )",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    showLooks ? $.__views.__alloyId31.addEventListener("click", showLooks) : __defers["$.__views.__alloyId31!click!showLooks"] = true;
    $.__views.menuHome = Ti.UI.createView({
        height: "50dp",
        width: "100%",
        bottom: "2dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.vlothieHome.add($.__views.menuHome);
    $.__views.__alloyId32 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId32"
    });
    $.__views.menuHome.add($.__views.__alloyId32);
    showHome ? $.__views.__alloyId32.addEventListener("click", showHome) : __defers["$.__views.__alloyId32!click!showHome"] = true;
    $.__views.__alloyId33 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId33"
    });
    $.__views.menuHome.add($.__views.__alloyId33);
    showTrends ? $.__views.__alloyId33.addEventListener("click", showTrends) : __defers["$.__views.__alloyId33!click!showTrends"] = true;
    $.__views.__alloyId34 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId34"
    });
    $.__views.menuHome.add($.__views.__alloyId34);
    showLooks ? $.__views.__alloyId34.addEventListener("click", showLooks) : __defers["$.__views.__alloyId34!click!showLooks"] = true;
    $.__views.__alloyId35 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId35"
    });
    $.__views.menuHome.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId36"
    });
    $.__views.menuHome.add($.__views.__alloyId36);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.vlothieHome.open();
    Ti.API.info(Alloy.Globals.dump(Alloy.Globals.homeDataArray));
    $.greetingTimePhrase.setText(Alloy.Globals.homeDataArray["greetingTimePhrase"]);
    $.greetingDayPhrase.setText(Alloy.Globals.homeDataArray["greetingDayPhrase"]);
    $.weatherText.setText(Alloy.Globals.weatherArray["temp_C"] + " °C");
    $.weatherIcon.image = "/images/weather/" + Alloy.Globals.weatherArray["weatherCode"] + ".png";
    __defers["$.__views.__alloyId23!click!showLooksWithSituation1"] && $.__views.__alloyId23.addEventListener("click", showLooksWithSituation1);
    __defers["$.__views.__alloyId25!click!showLooksWithSituation2"] && $.__views.__alloyId25.addEventListener("click", showLooksWithSituation2);
    __defers["$.__views.__alloyId27!click!showLooksWithSituation3"] && $.__views.__alloyId27.addEventListener("click", showLooksWithSituation3);
    __defers["$.__views.__alloyId29!click!showLooksWithSituation4"] && $.__views.__alloyId29.addEventListener("click", showLooksWithSituation4);
    __defers["$.__views.__alloyId31!click!showLooks"] && $.__views.__alloyId31.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId32!click!showHome"] && $.__views.__alloyId32.addEventListener("click", showHome);
    __defers["$.__views.__alloyId33!click!showTrends"] && $.__views.__alloyId33.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId34!click!showLooks"] && $.__views.__alloyId34.addEventListener("click", showLooks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;