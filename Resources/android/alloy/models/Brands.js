exports.definition = {
    config: {
        columns: {
            brandId: "integer",
            title: "text",
            website: "text",
            info: "text",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Brands",
            idAttribute: "brandId"
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

model = Alloy.M("Brands", exports.definition, []);

collection = Alloy.C("Brands", exports.definition, model);

exports.Model = model;

exports.Collection = collection;