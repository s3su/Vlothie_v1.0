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
    $.__views.yourLooks = Ti.UI.createView({
        top: "110dp",
        height: "auto",
        id: "yourLooks"
    });
    $.__views.homeContent.add($.__views.yourLooks);
    $.__views.__alloyId17 = Ti.UI.createView({
        top: "0dp",
        height: "60dp",
        opacity: "0.8",
        backgroundColor: "#a1238e",
        id: "__alloyId17"
    });
    $.__views.yourLooks.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "white",
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
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
        textAlign: "center",
        shadowRadius: "5dp",
        shadowColor: "black",
        shadowOffset: "4dp",
        font: {
            fontSize: "18dp",
            fontWeight: "light"
        },
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.vlothieHome.open();
    Ti.API.info(Alloy.Globals.dump(Alloy.Globals.homeDataArray));
    $.greetingTimePhrase.setText(Alloy.Globals.homeDataArray["greetingTimePhrase"]);
    $.greetingDayPhrase.setText(Alloy.Globals.homeDataArray["greetingDayPhrase"]);
    $.weatherText.setText(Alloy.Globals.weatherArray["temp_C"] + " °C");
    $.weatherIcon.image = "/images/weather/" + Alloy.Globals.weatherArray["weatherCode"] + ".png";
    __defers["$.__views.__alloyId18!click!showTrends"] && $.__views.__alloyId18.addEventListener("click", showTrends);
    __defers["$.__views.__alloyId20!click!showStylist"] && $.__views.__alloyId20.addEventListener("click", showStylist);
    __defers["$.__views.__alloyId22!click!showLooksWithSituation2"] && $.__views.__alloyId22.addEventListener("click", showLooksWithSituation2);
    __defers["$.__views.__alloyId24!click!showLooksWithSituation3"] && $.__views.__alloyId24.addEventListener("click", showLooksWithSituation3);
    __defers["$.__views.__alloyId26!click!showLooksWithSituation4"] && $.__views.__alloyId26.addEventListener("click", showLooksWithSituation4);
    __defers["$.__views.__alloyId28!click!showDIY"] && $.__views.__alloyId28.addEventListener("click", showDIY);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;