var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            patternId: "integer",
            title: "text",
            image: "text",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Patterns",
            idAttribute: "patternId"
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

model = Alloy.M("Patterns", exports.definition, []);

collection = Alloy.C("Patterns", exports.definition, model);

exports.Model = model;

exports.Collection = collection;