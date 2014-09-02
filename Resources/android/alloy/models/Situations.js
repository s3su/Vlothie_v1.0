exports.definition = {
    config: {
        columns: {
            situationId: "integer",
            title: "text",
            image: "text",
            inHome: "text",
            order: "integer",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "Situations",
            idAttribute: "situationId"
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

model = Alloy.M("Situations", exports.definition, []);

collection = Alloy.C("Situations", exports.definition, model);

exports.Model = model;

exports.Collection = collection;