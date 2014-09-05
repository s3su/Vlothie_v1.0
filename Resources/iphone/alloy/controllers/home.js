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
    function showAlarm() {
        Alloy.createController("alarm").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
<<<<<<< HEAD
    $.__views.weatherId = Ti.UI.createLabel({
=======
    $.__views.__alloyId16 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "weatherId"
    });
    $.__views.helloLeft.add($.__views.weatherId);
=======
        id: "__alloyId16"
    });
    $.__views.helloLeft.add($.__views.__alloyId16);
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
    $.__views.greetingTimePhrase = Ti.UI.createLabel({
=======
    $.__views.__alloyId17 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "greetingTimePhrase"
    });
    $.__views.helloRight.add($.__views.greetingTimePhrase);
    $.__views.greetingDayPhrase = Ti.UI.createLabel({
=======
        id: "__alloyId17"
    });
    $.__views.helloRight.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "greetingDayPhrase"
    });
    $.__views.helloRight.add($.__views.greetingDayPhrase);
=======
        id: "__alloyId18"
    });
    $.__views.helloRight.add($.__views.__alloyId18);
>>>>>>> FETCH_HEAD
    $.__views.getLook = Ti.UI.createView({
        top: "98dp",
        width: "100%",
        height: "20dp",
        id: "getLook"
    });
    $.__views.homeContent.add($.__views.getLook);
<<<<<<< HEAD
    $.__views.__alloyId15 = Ti.UI.createLabel({
=======
    $.__views.__alloyId19 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        color: "#922a80",
        font: {
            fontSize: "16dp",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "Baskerville"
        },
        text: "Get the look for:",
<<<<<<< HEAD
        id: "__alloyId15"
    });
    $.__views.getLook.add($.__views.__alloyId15);
=======
        id: "__alloyId19"
    });
    $.__views.getLook.add($.__views.__alloyId19);
>>>>>>> FETCH_HEAD
    $.__views.yourLooks = Ti.UI.createView({
        top: "120dp",
        height: "540dp",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
<<<<<<< HEAD
    $.__views.__alloyId16 = Ti.UI.createView({
=======
    $.__views.__alloyId20 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        top: "0dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#a1238e",
<<<<<<< HEAD
        id: "__alloyId16"
    });
    $.__views.yourLooks.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
=======
        id: "__alloyId20"
    });
    $.__views.yourLooks.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    showLooksWithSituation1 ? $.__views.__alloyId17.addEventListener("click", showLooksWithSituation1) : __defers["$.__views.__alloyId17!click!showLooksWithSituation1"] = true;
    $.__views.__alloyId18 = Ti.UI.createView({
=======
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    showLooks ? $.__views.__alloyId21.addEventListener("click", showLooks) : __defers["$.__views.__alloyId21!click!showLooks"] = true;
    $.__views.__alloyId22 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        top: "66dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fe94d5",
<<<<<<< HEAD
        id: "__alloyId18"
    });
    $.__views.yourLooks.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
=======
        id: "__alloyId22"
    });
    $.__views.yourLooks.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    showLooksWithSituation2 ? $.__views.__alloyId19.addEventListener("click", showLooksWithSituation2) : __defers["$.__views.__alloyId19!click!showLooksWithSituation2"] = true;
    $.__views.__alloyId20 = Ti.UI.createView({
=======
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    showLooks ? $.__views.__alloyId23.addEventListener("click", showLooks) : __defers["$.__views.__alloyId23!click!showLooks"] = true;
    $.__views.__alloyId24 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        top: "132dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#ffc3e2",
<<<<<<< HEAD
        id: "__alloyId20"
    });
    $.__views.yourLooks.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
=======
        id: "__alloyId24"
    });
    $.__views.yourLooks.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    showLooksWithSituation3 ? $.__views.__alloyId21.addEventListener("click", showLooksWithSituation3) : __defers["$.__views.__alloyId21!click!showLooksWithSituation3"] = true;
    $.__views.__alloyId22 = Ti.UI.createView({
=======
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    showLooks ? $.__views.__alloyId25.addEventListener("click", showLooks) : __defers["$.__views.__alloyId25!click!showLooks"] = true;
    $.__views.__alloyId26 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        top: "198dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fee8f3",
<<<<<<< HEAD
        id: "__alloyId22"
    });
    $.__views.yourLooks.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
=======
        id: "__alloyId26"
    });
    $.__views.yourLooks.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    showLooksWithSituation4 ? $.__views.__alloyId23.addEventListener("click", showLooksWithSituation4) : __defers["$.__views.__alloyId23!click!showLooksWithSituation4"] = true;
    $.__views.__alloyId24 = Ti.UI.createView({
=======
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    showLooks ? $.__views.__alloyId27.addEventListener("click", showLooks) : __defers["$.__views.__alloyId27!click!showLooks"] = true;
    $.__views.__alloyId28 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        top: "264dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fdf4f9",
<<<<<<< HEAD
        id: "__alloyId24"
    });
    $.__views.yourLooks.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
=======
        id: "__alloyId28"
    });
    $.__views.yourLooks.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    showLooks ? $.__views.__alloyId25.addEventListener("click", showLooks) : __defers["$.__views.__alloyId25!click!showLooks"] = true;
=======
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    showLooks ? $.__views.__alloyId29.addEventListener("click", showLooks) : __defers["$.__views.__alloyId29!click!showLooks"] = true;
>>>>>>> FETCH_HEAD
    $.__views.menuHome = Ti.UI.createView({
        height: "58dp",
        width: "100%",
        bottom: "8dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.vlothieHome.add($.__views.menuHome);
<<<<<<< HEAD
    $.__views.__alloyId26 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "50dp",
        id: "__alloyId26"
    });
    $.__views.menuHome.add($.__views.__alloyId26);
    showHome ? $.__views.__alloyId26.addEventListener("click", showHome) : __defers["$.__views.__alloyId26!click!showHome"] = true;
    $.__views.__alloyId27 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "106dp",
        id: "__alloyId27"
    });
    $.__views.menuHome.add($.__views.__alloyId27);
    showTrends ? $.__views.__alloyId27.addEventListener("click", showTrends) : __defers["$.__views.__alloyId27!click!showTrends"] = true;
    $.__views.__alloyId28 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "165dp",
        id: "__alloyId28"
    });
    $.__views.menuHome.add($.__views.__alloyId28);
    showLooks ? $.__views.__alloyId28.addEventListener("click", showLooks) : __defers["$.__views.__alloyId28!click!showLooks"] = true;
    $.__views.__alloyId29 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "230dp",
        id: "__alloyId29"
    });
    $.__views.menuHome.add($.__views.__alloyId29);
    showAlarm ? $.__views.__alloyId29.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId29!click!showAlarm"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.greetingTimePhrase.setText(Alloy.Globals.homeDataArray["greetingTimePhrase"]);
    $.greetingDayPhrase.setText(Alloy.Globals.homeDataArray["greetingDayPhrase"]);
    $.weatherId.setText(Alloy.Globals.homeDataArray["weatherId"]);
    __defers["$.__views.__alloyId17!click!showLooksWithSituation1"] && $.__views.__alloyId17.addEventListener("click", showLooksWithSituation1);
    __defers["$.__views.__alloyId19!click!showLooksWithSituation2"] && $.__views.__alloyId19.addEventListener("click", showLooksWithSituation2);
    __defers["$.__views.__alloyId21!click!showLooksWithSituation3"] && $.__views.__alloyId21.addEventListener("click", showLooksWithSituation3);
    __defers["$.__views.__alloyId23!click!showLooksWithSituation4"] && $.__views.__alloyId23.addEventListener("click", showLooksWithSituation4);
    __defers["$.__views.__alloyId25!click!showLooks"] && $.__views.__alloyId25.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId26!click!showHome"] && $.__views.__alloyId26.addEventListener("click", showHome);
    __defers["$.__views.__alloyId27!click!showTrends"] && $.__views.__alloyId27.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId28!click!showLooks"] && $.__views.__alloyId28.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId29!click!showAlarm"] && $.__views.__alloyId29.addEventListener("click", showAlarm);
=======
    $.__views.__alloyId30 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "50dp",
        id: "__alloyId30"
    });
    $.__views.menuHome.add($.__views.__alloyId30);
    showHome ? $.__views.__alloyId30.addEventListener("click", showHome) : __defers["$.__views.__alloyId30!click!showHome"] = true;
    $.__views.__alloyId31 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "106dp",
        id: "__alloyId31"
    });
    $.__views.menuHome.add($.__views.__alloyId31);
    showTrends ? $.__views.__alloyId31.addEventListener("click", showTrends) : __defers["$.__views.__alloyId31!click!showTrends"] = true;
    $.__views.__alloyId32 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "165dp",
        id: "__alloyId32"
    });
    $.__views.menuHome.add($.__views.__alloyId32);
    showLooks ? $.__views.__alloyId32.addEventListener("click", showLooks) : __defers["$.__views.__alloyId32!click!showLooks"] = true;
    $.__views.__alloyId33 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "230dp",
        id: "__alloyId33"
    });
    $.__views.menuHome.add($.__views.__alloyId33);
    showAlarm ? $.__views.__alloyId33.addEventListener("click", showAlarm) : __defers["$.__views.__alloyId33!click!showAlarm"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("seeded: " + Ti.App.Properties.hasProperty("seeded"));
    __defers["$.__views.__alloyId21!click!showLooks"] && $.__views.__alloyId21.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId23!click!showLooks"] && $.__views.__alloyId23.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId25!click!showLooks"] && $.__views.__alloyId25.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId27!click!showLooks"] && $.__views.__alloyId27.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId29!click!showLooks"] && $.__views.__alloyId29.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId30!click!showHome"] && $.__views.__alloyId30.addEventListener("click", showHome);
    __defers["$.__views.__alloyId31!click!showTrends"] && $.__views.__alloyId31.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId32!click!showLooks"] && $.__views.__alloyId32.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId33!click!showAlarm"] && $.__views.__alloyId33.addEventListener("click", showAlarm);
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;