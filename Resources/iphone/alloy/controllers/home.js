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
        Alloy.createController("home").getView().open();
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
    this.__controllerPath = "home";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
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
        id: "weatherIcon"
    });
    $.__views.helloLeft.add($.__views.weatherIcon);
    $.__views.weatherText = Ti.UI.createLabel({
        color: "white",
        font: {
            fontFamily: "arial",
            fontSize: "13",
            fontWeight: "light"
        },
        textAlign: "left",
        top: "43dp",
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
    $.__views.__alloyId9 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Get the look for:",
        id: "__alloyId9"
    });
    $.__views.getLook.add($.__views.__alloyId9);
    $.__views.yourLooks = Ti.UI.createView({
        top: "120dp",
        height: "540dp",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
    $.__views.__alloyId10 = Ti.UI.createView({
        top: "0dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#a1238e",
        id: "__alloyId10"
    });
    $.__views.yourLooks.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
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
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    showLooksWithSituation1 ? $.__views.__alloyId11.addEventListener("click", showLooksWithSituation1) : __defers["$.__views.__alloyId11!click!showLooksWithSituation1"] = true;
    $.__views.__alloyId12 = Ti.UI.createView({
        top: "66dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fe94d5",
        id: "__alloyId12"
    });
    $.__views.yourLooks.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
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
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    showLooksWithSituation2 ? $.__views.__alloyId13.addEventListener("click", showLooksWithSituation2) : __defers["$.__views.__alloyId13!click!showLooksWithSituation2"] = true;
    $.__views.__alloyId14 = Ti.UI.createView({
        top: "132dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#ffc3e2",
        id: "__alloyId14"
    });
    $.__views.yourLooks.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
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
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    showLooksWithSituation3 ? $.__views.__alloyId15.addEventListener("click", showLooksWithSituation3) : __defers["$.__views.__alloyId15!click!showLooksWithSituation3"] = true;
    $.__views.__alloyId16 = Ti.UI.createView({
        top: "198dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fee8f3",
        id: "__alloyId16"
    });
    $.__views.yourLooks.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
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
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    showLooksWithSituation4 ? $.__views.__alloyId17.addEventListener("click", showLooksWithSituation4) : __defers["$.__views.__alloyId17!click!showLooksWithSituation4"] = true;
    $.__views.__alloyId18 = Ti.UI.createView({
        top: "264dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fdf4f9",
        id: "__alloyId18"
    });
    $.__views.yourLooks.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
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
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    showLooks ? $.__views.__alloyId19.addEventListener("click", showLooks) : __defers["$.__views.__alloyId19!click!showLooks"] = true;
    $.__views.menuHome = Ti.UI.createView({
        height: "50dp",
        width: "100%",
        bottom: "2dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.vlothieHome.add($.__views.menuHome);
    $.__views.__alloyId20 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId20"
    });
    $.__views.menuHome.add($.__views.__alloyId20);
    showHome ? $.__views.__alloyId20.addEventListener("click", showHome) : __defers["$.__views.__alloyId20!click!showHome"] = true;
    $.__views.__alloyId21 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId21"
    });
    $.__views.menuHome.add($.__views.__alloyId21);
    showTrends ? $.__views.__alloyId21.addEventListener("click", showTrends) : __defers["$.__views.__alloyId21!click!showTrends"] = true;
    $.__views.__alloyId22 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId22"
    });
    $.__views.menuHome.add($.__views.__alloyId22);
    showLooks ? $.__views.__alloyId22.addEventListener("click", showLooks) : __defers["$.__views.__alloyId22!click!showLooks"] = true;
    $.__views.__alloyId23 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId23"
    });
    $.__views.menuHome.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId24"
    });
    $.__views.menuHome.add($.__views.__alloyId24);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info(Alloy.Globals.dump(Alloy.Globals.homeDataArray));
    $.greetingTimePhrase.setText(Alloy.Globals.homeDataArray["greetingTimePhrase"]);
    $.greetingDayPhrase.setText(Alloy.Globals.homeDataArray["greetingDayPhrase"]);
<<<<<<< HEAD
    $.weatherText.setText(Alloy.Globals.weatherArray["temp_C"] + " °C");
    $.weatherIcon.image = "/images/weather/" + Alloy.Globals.weatherArray["weatherCode"] + ".png";
    __defers["$.__views.__alloyId12!click!showLooksWithSituation1"] && $.__views.__alloyId12.addEventListener("click", showLooksWithSituation1);
    __defers["$.__views.__alloyId14!click!showLooksWithSituation2"] && $.__views.__alloyId14.addEventListener("click", showLooksWithSituation2);
    __defers["$.__views.__alloyId16!click!showLooksWithSituation3"] && $.__views.__alloyId16.addEventListener("click", showLooksWithSituation3);
    __defers["$.__views.__alloyId18!click!showLooksWithSituation4"] && $.__views.__alloyId18.addEventListener("click", showLooksWithSituation4);
    __defers["$.__views.__alloyId20!click!showLooks"] && $.__views.__alloyId20.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId21!click!showHome"] && $.__views.__alloyId21.addEventListener("click", showHome);
    __defers["$.__views.__alloyId22!click!showTrends"] && $.__views.__alloyId22.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId23!click!showLooks"] && $.__views.__alloyId23.addEventListener("click", showLooks);
=======
    $.weatherId.setText(Alloy.Globals.homeDataArray["weatherId"]);
    __defers["$.__views.__alloyId11!click!showLooksWithSituation1"] && $.__views.__alloyId11.addEventListener("click", showLooksWithSituation1);
    __defers["$.__views.__alloyId13!click!showLooksWithSituation2"] && $.__views.__alloyId13.addEventListener("click", showLooksWithSituation2);
    __defers["$.__views.__alloyId15!click!showLooksWithSituation3"] && $.__views.__alloyId15.addEventListener("click", showLooksWithSituation3);
    __defers["$.__views.__alloyId17!click!showLooksWithSituation4"] && $.__views.__alloyId17.addEventListener("click", showLooksWithSituation4);
    __defers["$.__views.__alloyId19!click!showLooks"] && $.__views.__alloyId19.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId20!click!showHome"] && $.__views.__alloyId20.addEventListener("click", showHome);
    __defers["$.__views.__alloyId21!click!showTrends"] && $.__views.__alloyId21.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId22!click!showLooks"] && $.__views.__alloyId22.addEventListener("click", showLooks);
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;