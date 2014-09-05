exports.definition = {
    config: {
        columns: {
            fixdatavId: "integer",
            table: "text",
            version: "integer",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "LastestFixDataVersions",
            idAttribute: "fixdatavId"
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

model = Alloy.M("LastestFixDataVersions", exports.definition, []);

collection = Alloy.C("LastestFixDataVersions", exports.definition, model);

exports.Model = model;

exports.Collection = collection;