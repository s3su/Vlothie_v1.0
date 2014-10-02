function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showTrends() {
        Alloy.createController("trend").getView().open();
    }
    function showStylist() {
        Alloy.Globals.isSetLook = 0;
        Alloy.createController("stylist").getView().open();
    }
    function showDIY() {
        Alloy.Globals.selectedSituationId = 2;
        Alloy.createController("diy").getView().open();
    }
    function showLooksWithSituation2() {
        Alloy.Globals.selectedSituationId = 2;
<<<<<<< HEAD
        Alloy.createController("look").getView().open();
=======
<<<<<<< HEAD
        Alloy.createController("look").getView().open();
=======
        Alloy.createController("diy").getView().open();
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
        height: "560dp",
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
<<<<<<< HEAD
=======
    $.__views.getLook = Ti.UI.createView({
        top: "98dp",
        width: "100%",
        height: "20dp",
        id: "getLook"
    });
    $.__views.homeContent.add($.__views.getLook);
<<<<<<< HEAD
    $.__views.__alloyId21 = Ti.UI.createLabel({
=======
    $.__views.__alloyId17 = Ti.UI.createLabel({
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
        id: "__alloyId21"
    });
    $.__views.getLook.add($.__views.__alloyId21);
=======
        id: "__alloyId17"
    });
    $.__views.getLook.add($.__views.__alloyId17);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    $.__views.yourLooks = Ti.UI.createView({
        top: "110dp",
        height: "auto",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
<<<<<<< HEAD
    $.__views.__alloyId17 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId22 = Ti.UI.createView({
=======
    $.__views.__alloyId18 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        top: "0dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#a1238e",
<<<<<<< HEAD
        id: "__alloyId17"
    });
    $.__views.yourLooks.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId22"
    });
    $.__views.yourLooks.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
=======
        id: "__alloyId18"
    });
    $.__views.yourLooks.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        text: "HOTTEST TRENDS!",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    showTrends ? $.__views.__alloyId18.addEventListener("click", showTrends) : __defers["$.__views.__alloyId18!click!showTrends"] = true;
    $.__views.__alloyId19 = Ti.UI.createView({
        top: "70dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fe94d5",
        id: "__alloyId19"
    });
    $.__views.yourLooks.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        color: "white",
=======
        text: "THAT MEETING",
<<<<<<< HEAD
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    showLooksWithSituation1 ? $.__views.__alloyId23.addEventListener("click", showLooksWithSituation1) : __defers["$.__views.__alloyId23!click!showLooksWithSituation1"] = true;
    $.__views.__alloyId24 = Ti.UI.createView({
=======
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    showLooksWithSituation1 ? $.__views.__alloyId19.addEventListener("click", showLooksWithSituation1) : __defers["$.__views.__alloyId19!click!showLooksWithSituation1"] = true;
    $.__views.__alloyId20 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        top: "66dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fe94d5",
<<<<<<< HEAD
        id: "__alloyId24"
    });
    $.__views.yourLooks.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
=======
        id: "__alloyId20"
    });
    $.__views.yourLooks.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        color: "a1238e",
>>>>>>> FETCH_HEAD
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
<<<<<<< HEAD
        text: "STYLIST",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    showStylist ? $.__views.__alloyId20.addEventListener("click", showStylist) : __defers["$.__views.__alloyId20!click!showStylist"] = true;
    $.__views.__alloyId21 = Ti.UI.createView({
        top: "140dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#ffc3e2",
        id: "__alloyId21"
    });
    $.__views.yourLooks.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
=======
        text: "SPORTY YOU",
<<<<<<< HEAD
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    showLooksWithSituation2 ? $.__views.__alloyId25.addEventListener("click", showLooksWithSituation2) : __defers["$.__views.__alloyId25!click!showLooksWithSituation2"] = true;
    $.__views.__alloyId26 = Ti.UI.createView({
=======
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    showLooksWithSituation2 ? $.__views.__alloyId21.addEventListener("click", showLooksWithSituation2) : __defers["$.__views.__alloyId21!click!showLooksWithSituation2"] = true;
    $.__views.__alloyId22 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        top: "132dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#ffc3e2",
<<<<<<< HEAD
        id: "__alloyId26"
    });
    $.__views.yourLooks.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
=======
        id: "__alloyId22"
    });
    $.__views.yourLooks.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        text: "SPORTY YOU",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    showLooksWithSituation2 ? $.__views.__alloyId22.addEventListener("click", showLooksWithSituation2) : __defers["$.__views.__alloyId22!click!showLooksWithSituation2"] = true;
    $.__views.__alloyId23 = Ti.UI.createView({
        top: "210dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fee8f3",
        id: "__alloyId23"
    });
    $.__views.yourLooks.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
=======
        text: "A CASUAL DAY",
<<<<<<< HEAD
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    showLooksWithSituation3 ? $.__views.__alloyId27.addEventListener("click", showLooksWithSituation3) : __defers["$.__views.__alloyId27!click!showLooksWithSituation3"] = true;
    $.__views.__alloyId28 = Ti.UI.createView({
=======
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    showLooksWithSituation3 ? $.__views.__alloyId23.addEventListener("click", showLooksWithSituation3) : __defers["$.__views.__alloyId23!click!showLooksWithSituation3"] = true;
    $.__views.__alloyId24 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        top: "198dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fee8f3",
<<<<<<< HEAD
        id: "__alloyId28"
    });
    $.__views.yourLooks.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
=======
        id: "__alloyId24"
    });
    $.__views.yourLooks.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        text: "A CASUAL DAY",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    showLooksWithSituation3 ? $.__views.__alloyId24.addEventListener("click", showLooksWithSituation3) : __defers["$.__views.__alloyId24!click!showLooksWithSituation3"] = true;
    $.__views.__alloyId25 = Ti.UI.createView({
        top: "280dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fdf4f9",
        id: "__alloyId25"
    });
    $.__views.yourLooks.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
=======
        text: "YOUR LOOK FOR THE NIGHT",
<<<<<<< HEAD
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    showLooksWithSituation4 ? $.__views.__alloyId29.addEventListener("click", showLooksWithSituation4) : __defers["$.__views.__alloyId29!click!showLooksWithSituation4"] = true;
    $.__views.__alloyId30 = Ti.UI.createView({
=======
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    showLooksWithSituation4 ? $.__views.__alloyId25.addEventListener("click", showLooksWithSituation4) : __defers["$.__views.__alloyId25!click!showLooksWithSituation4"] = true;
    $.__views.__alloyId26 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        top: "264dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fdf4f9",
<<<<<<< HEAD
        id: "__alloyId30"
    });
    $.__views.yourLooks.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
=======
        id: "__alloyId26"
    });
    $.__views.yourLooks.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        text: "YOUR LOOK FOR THE NIGHT",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    showLooksWithSituation4 ? $.__views.__alloyId26.addEventListener("click", showLooksWithSituation4) : __defers["$.__views.__alloyId26!click!showLooksWithSituation4"] = true;
    $.__views.__alloyId27 = Ti.UI.createView({
        top: "350dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#fffFf9",
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
        text: "DIY  ; )",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    showDIY ? $.__views.__alloyId28.addEventListener("click", showDIY) : __defers["$.__views.__alloyId28!click!showDIY"] = true;
=======
        text: "MORE  ; )",
<<<<<<< HEAD
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    showLooks ? $.__views.__alloyId31.addEventListener("click", showLooks) : __defers["$.__views.__alloyId31!click!showLooks"] = true;
=======
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    showLooks ? $.__views.__alloyId27.addEventListener("click", showLooks) : __defers["$.__views.__alloyId27!click!showLooks"] = true;
>>>>>>> FETCH_HEAD
    $.__views.menuHome = Ti.UI.createView({
        height: "50dp",
        width: "100%",
        bottom: "2dp",
        backgroundColor: "#transparent",
        id: "menuHome"
    });
    $.__views.vlothieHome.add($.__views.menuHome);
<<<<<<< HEAD
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
=======
    $.__views.__alloyId28 = Ti.UI.createButton({
        image: "/images/home/v-home.png",
        tintColor: "#fff",
        left: "30dp",
        id: "__alloyId28"
    });
    $.__views.menuHome.add($.__views.__alloyId28);
    showHome ? $.__views.__alloyId28.addEventListener("click", showHome) : __defers["$.__views.__alloyId28!click!showHome"] = true;
    $.__views.__alloyId29 = Ti.UI.createButton({
        image: "/images/home/v-trend.png",
        tintColor: "#fff",
        left: "86dp",
        id: "__alloyId29"
    });
    $.__views.menuHome.add($.__views.__alloyId29);
    showTrends ? $.__views.__alloyId29.addEventListener("click", showTrends) : __defers["$.__views.__alloyId29!click!showTrends"] = true;
    $.__views.__alloyId30 = Ti.UI.createButton({
        image: "/images/home/v-look.png",
        tintColor: "#fff",
        left: "140dp",
        id: "__alloyId30"
    });
    $.__views.menuHome.add($.__views.__alloyId30);
    showLooks ? $.__views.__alloyId30.addEventListener("click", showLooks) : __defers["$.__views.__alloyId30!click!showLooks"] = true;
    $.__views.__alloyId31 = Ti.UI.createButton({
        image: "/images/home/v-alarm.png",
        tintColor: "#fff",
        left: "195dp",
        id: "__alloyId31"
    });
    $.__views.menuHome.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createButton({
        image: "/images/home/v-setting.png",
        tintColor: "#fff",
        left: "250dp",
        id: "__alloyId32"
    });
    $.__views.menuHome.add($.__views.__alloyId32);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.vlothieHome.open();
    Ti.API.info(Alloy.Globals.dump(Alloy.Globals.homeDataArray));
    $.greetingTimePhrase.setText(Alloy.Globals.homeDataArray["greetingTimePhrase"]);
    $.greetingDayPhrase.setText(Alloy.Globals.homeDataArray["greetingDayPhrase"]);
    $.weatherText.setText(Alloy.Globals.weatherArray["temp_C"] + " °C");
    $.weatherIcon.image = "/images/weather/" + Alloy.Globals.weatherArray["weatherCode"] + ".png";
<<<<<<< HEAD
    __defers["$.__views.__alloyId18!click!showTrends"] && $.__views.__alloyId18.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId20!click!showStylist"] && $.__views.__alloyId20.addEventListener("click", showStylist);
    __defers["$.__views.__alloyId22!click!showLooksWithSituation2"] && $.__views.__alloyId22.addEventListener("click", showLooksWithSituation2);
    __defers["$.__views.__alloyId24!click!showLooksWithSituation3"] && $.__views.__alloyId24.addEventListener("click", showLooksWithSituation3);
    __defers["$.__views.__alloyId26!click!showLooksWithSituation4"] && $.__views.__alloyId26.addEventListener("click", showLooksWithSituation4);
    __defers["$.__views.__alloyId28!click!showDIY"] && $.__views.__alloyId28.addEventListener("click", showDIY);
=======
<<<<<<< HEAD
    __defers["$.__views.__alloyId23!click!showLooksWithSituation1"] && $.__views.__alloyId23.addEventListener("click", showLooksWithSituation1);
    __defers["$.__views.__alloyId25!click!showLooksWithSituation2"] && $.__views.__alloyId25.addEventListener("click", showLooksWithSituation2);
    __defers["$.__views.__alloyId27!click!showLooksWithSituation3"] && $.__views.__alloyId27.addEventListener("click", showLooksWithSituation3);
    __defers["$.__views.__alloyId29!click!showLooksWithSituation4"] && $.__views.__alloyId29.addEventListener("click", showLooksWithSituation4);
    __defers["$.__views.__alloyId31!click!showLooks"] && $.__views.__alloyId31.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId32!click!showHome"] && $.__views.__alloyId32.addEventListener("click", showHome);
    __defers["$.__views.__alloyId33!click!showTrends"] && $.__views.__alloyId33.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId34!click!showLooks"] && $.__views.__alloyId34.addEventListener("click", showLooks);
=======
    __defers["$.__views.__alloyId19!click!showLooksWithSituation1"] && $.__views.__alloyId19.addEventListener("click", showLooksWithSituation1);
    __defers["$.__views.__alloyId21!click!showLooksWithSituation2"] && $.__views.__alloyId21.addEventListener("click", showLooksWithSituation2);
    __defers["$.__views.__alloyId23!click!showLooksWithSituation3"] && $.__views.__alloyId23.addEventListener("click", showLooksWithSituation3);
    __defers["$.__views.__alloyId25!click!showLooksWithSituation4"] && $.__views.__alloyId25.addEventListener("click", showLooksWithSituation4);
    __defers["$.__views.__alloyId27!click!showLooks"] && $.__views.__alloyId27.addEventListener("click", showLooks);
    __defers["$.__views.__alloyId28!click!showHome"] && $.__views.__alloyId28.addEventListener("click", showHome);
    __defers["$.__views.__alloyId29!click!showTrends"] && $.__views.__alloyId29.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId30!click!showLooks"] && $.__views.__alloyId30.addEventListener("click", showLooks);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;