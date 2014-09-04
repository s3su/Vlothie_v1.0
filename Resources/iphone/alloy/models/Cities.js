var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            cityId: "integer",
            name: "text",
            photo: "text",
            info: "text",
            countryId: "integer",
            latitude: "text",
            longitude: "text",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Cities",
            idAttribute: "cityId"
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

model = Alloy.M("Cities", exports.definition, []);

collection = Alloy.C("Cities", exports.definition, model);

exports.Model = model;

exports.Collection = collection;