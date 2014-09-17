var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            artcatId: "integer",
            name: "text",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "ArticleCategories",
            idAttribute: "artcatId"
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

model = Alloy.M("ArticleCategories", exports.definition, []);

collection = Alloy.C("ArticleCategories", exports.definition, model);

exports.Model = model;

exports.Collection = collection;