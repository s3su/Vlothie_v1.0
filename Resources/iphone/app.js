var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

require("includes/functions");

require("includes/getArticlesData");

require("includes/getHomeData");

Alloy.Globals.sectedArticleId = 0;

Alloy.Globals.isSetLook = 0;

Alloy.Globals.selectedSituationId = 0;

Alloy.Globals.lookTopId = 0;

Alloy.Globals.lookBottomId = 0;

Alloy.Globals.lookShoesId = 0;

var getFIXData = true;

var getArticlesData = true;

getFIXData;

getArticlesData;

Alloy.Globals.top = 0;

Alloy.Globals.tableTop = "50dp";

try {
    if (true && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
        Alloy.Globals.top = "20dp";
        Alloy.Globals.tableTop = "70dp";
    }
} catch (e) {}

Alloy.createController("index");