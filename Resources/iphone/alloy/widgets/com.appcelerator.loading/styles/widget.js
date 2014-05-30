function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.loading/" + s : s.substring(0, index) + "/com.appcelerator.loading/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "#fff"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        color: "#000"
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "sectionTitle",
    style: {
        left: "10dp",
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "loading",
    style: {
        height: 20,
        width: 20,
        images: [ "/images/com.appcelerator.loading/00.png", "/images/com.appcelerator.loading/01.png", "/images/com.appcelerator.loading/02.png", "/images/com.appcelerator.loading/03.png", "/images/com.appcelerator.loading/04.png", "/images/com.appcelerator.loading/05.png", "/images/com.appcelerator.loading/06.png", "/images/com.appcelerator.loading/07.png", "/images/com.appcelerator.loading/08.png", "/images/com.appcelerator.loading/09.png", "/images/com.appcelerator.loading/10.png", "/images/com.appcelerator.loading/11.png" ]
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "header",
    style: {
        top: Alloy.Globals.top,
        height: "40dp",
        width: Ti.UI.FILL,
        backgroundColor: "white",
        opacity: "0.75"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "title",
    style: {
        color: "#652F8D",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        }
    }
} ];