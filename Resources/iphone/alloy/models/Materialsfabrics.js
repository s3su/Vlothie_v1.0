var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            matfabId: "integer",
            title: "text",
            image: "text",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Materialsfabrics",
            idAttribute: "matfabId"
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

model = Alloy.M("Materialsfabrics", exports.definition, []);

collection = Alloy.C("Materialsfabrics", exports.definition, model);

exports.Model = model;

exports.Collection = collection;