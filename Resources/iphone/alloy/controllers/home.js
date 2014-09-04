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
        Alloy.createController("look").getView().open();
    }
    function showAlarm() {
        Alloy.createController("alarm").getView().open();
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
    $.__views.__alloyId17 = Ti.UI.createLabel({
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
        id: "__alloyId17"
    });
    $.__views.helloLeft.add($.__views.__alloyId17);
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
    $.__views.__alloyId18 = Ti.UI.createLabel({
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
        id: "__alloyId18"
    });
    $.__views.helloRight.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
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
        id: "__alloyId19"
    });
    $.__views.helloRight.add($.__views.__alloyId19);
    $.__views.getLook = Ti.UI.createView({
        top: "98dp",
        width: "100%",
        height: "20dp",
        id: "getLook"
    });
    $.__views.homeContent.add($.__views.getLook);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Get the look for:",
        id: "__alloyId20"
    });
    $.__views.getLook.add($.__views.__alloyId20);
    $.__views.yourLooks = Ti.UI.createView({
        top: "120dp",
        height: "540dp",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
    $.__views.__alloyId21 = Ti.UI.createView({
        top: "0dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#a1238e",
        id: "__alloyId21"
    });
    $.__views.yourLooks.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
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
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    showLooks ? $.__views.__alloyId22.addEventListener("click", showLooks) : __defers["$.__views.__alloyId22!click!showLooks"] = true;
    $.__views.__alloyId23 = Ti.UI.createView({
        top: "66dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fe94d5",
        id: "__alloyId23"
    });
    $.__views.yourLooks.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
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
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    showLooks ? $.__views.__alloyId24.addEventListener("click", showLooks) : __defers["$.__views.__alloyId24!click!showLooks"] = true;
    $.__views.__alloyId25 = Ti.UI.createView({
        top: "132dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#ffc3e2",
        id: "__alloyId25"
    });
    $.__views.yourLooks.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
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
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    showLooks ? $.__views.__alloyId26.addEventListener("click", showLooks) : __defers["$.__views.__alloyId26!click!showLooks"] = true;
    $.__views.__alloyId27 = Ti.UI.createView({
        top: "198dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fee8f3",
        id: "__alloyId27"
    });
    $.__views.yourLooks.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
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
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    showLooks ? $.__views.__alloyId28.addEventListener("click", showLooks) : __defers["$.__views.__alloyId28!click!showLooks"] = true;
    $.__views.__alloyId29 = Ti.UI.createView({
        top: "264dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fdf4f9",
        id: "__alloyId29"
    });
    $.__views.yourLooks.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
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
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    showLooks ? $.__views.__alloyId30.addEventListener("click", showLooks) : __defers["$.__views.__alloyId30!click!showLooks"] = true;
    $.__views.menuHome = Ti.UI.createView({
        height: "58dp",
        width: "100%",
        bottom: "8dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.vlothieHome.add($.__views.menuHome);
    $.__views.__alloyId31 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
<<<<<<< HEAD
<<<<<<< HEAD
        left: "60dp",
        id: "__alloyId33"
=======
        left: "30dp",
        id: "__alloyId31"
>>>>>>> FETCH_HEAD
=======
        left: "30dp",
        id: "__alloyId31"
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    });
    $.__views.menuHome.add($.__views.__alloyId31);
    showHome ? $.__views.__alloyId31.addEventListener("click", showHome) : __defers["$.__views.__alloyId31!click!showHome"] = true;
    $.__views.__alloyId32 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
<<<<<<< HEAD
<<<<<<< HEAD
        left: "106dp",
        id: "__alloyId34"
=======
        left: "86dp",
        id: "__alloyId32"
>>>>>>> FETCH_HEAD
=======
        left: "86dp",
        id: "__alloyId32"
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    });
    $.__views.menuHome.add($.__views.__alloyId32);
    showTrends ? $.__views.__alloyId32.addEventListener("click", showTrends) : __defers["$.__views.__alloyId32!click!showTrends"] = true;
    $.__views.__alloyId33 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
<<<<<<< HEAD
<<<<<<< HEAD
        left: "170dp",
        id: "__alloyId35"
=======
        left: "140dp",
        id: "__alloyId33"
>>>>>>> FETCH_HEAD
=======
        left: "140dp",
        id: "__alloyId33"
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    });
    $.__views.menuHome.add($.__views.__alloyId33);
    showLooks ? $.__views.__alloyId33.addEventListener("click", showLooks) : __defers["$.__views.__alloyId33!click!showLooks"] = true;
    $.__views.__alloyId34 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
<<<<<<< HEAD
<<<<<<< HEAD
        left: "225dp",
        id: "__alloyId36"
    });
    $.__views.menuHome.add($.__views.__alloyId36);
    showAlarm ? $.__views.__alloyId36.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId36!click!showAlarm"] = true;
=======
        left: "195dp",
        id: "__alloyId34"
    });
=======
        left: "195dp",
        id: "__alloyId34"
    });
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    $.__views.menuHome.add($.__views.__alloyId34);
    showAlarm ? $.__views.__alloyId34.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId34!click!showAlarm"] = true;
    $.__views.__alloyId35 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId35"
    });
    $.__views.menuHome.add($.__views.__alloyId35);
    showSettings ? $.__views.__alloyId35.addEventListener("click", showSettings) : __defers["$.__views.__alloyId35!click!showSettings"] = true;
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
=======
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("seeded: " + Ti.App.Properties.hasProperty("seeded"));
    __defers["$.__views.__alloyId22!click!showLooks"] && $.__views.__alloyId22.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId24!click!showLooks"] && $.__views.__alloyId24.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId26!click!showLooks"] && $.__views.__alloyId26.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId28!click!showLooks"] && $.__views.__alloyId28.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId30!click!showLooks"] && $.__views.__alloyId30.addEventListener("click", showLooks);
<<<<<<< HEAD
<<<<<<< HEAD
    __defers["$.__views.__alloyId32!click!showLooks"] && $.__views.__alloyId32.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId33!click!showHome"] && $.__views.__alloyId33.addEventListener("click", showHome);
    __defers["$.__views.__alloyId34!click!showTrends"] && $.__views.__alloyId34.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId35!click!showLooks"] && $.__views.__alloyId35.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId36!click!showAlarm"] && $.__views.__alloyId36.addEventListener("click", showAlarm);
=======
=======
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    __defers["$.__views.__alloyId31!click!showHome"] && $.__views.__alloyId31.addEventListener("click", showHome);
    __defers["$.__views.__alloyId32!click!showTrends"] && $.__views.__alloyId32.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId33!click!showLooks"] && $.__views.__alloyId33.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId34!click!showAlarm"] && $.__views.__alloyId34.addEventListener("click", showAlarm);
    __defers["$.__views.__alloyId35!click!showSettings"] && $.__views.__alloyId35.addEventListener("click", showSettings);
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
=======
>>>>>>> cb2ba03eccb03cd6d12538e9536ee06c7021dad2
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;