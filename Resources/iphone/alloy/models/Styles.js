var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            styleId: "integer",
            title: "text",
            image: "text",
            inHome: "text",
            order: "integer",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Styles",
            idAttribute: "styleId"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("Styles", exports.definition, []);

collection = Alloy.C("Styles", exports.definition, model);

exports.Model = model;

exports.Collection = collection;