var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            colorId: "integer",
            title: "text",
            hexa: "text",
            temperature: "text",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Colours",
            idAttribute: "colorId"
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

model = Alloy.M("Colours", exports.definition, []);

collection = Alloy.C("Colours", exports.definition, model);

exports.Model = model;

exports.Collection = collection;