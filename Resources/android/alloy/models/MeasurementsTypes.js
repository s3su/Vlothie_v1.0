exports.definition = {
    config: {
        columns: {
            measuretypeId: "integer",
            type: "text",
            unit: "text",
            categoryId: "integer",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "MeasurementsTypes",
            idAttribute: "measuretypeId"
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

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("MeasurementsTypes", exports.definition, []);

collection = Alloy.C("MeasurementsTypes", exports.definition, model);

exports.Model = model;

exports.Collection = collection;