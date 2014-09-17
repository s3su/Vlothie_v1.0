var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            artsubcatId: "integer",
            name: "text",
            artcatId: "integer",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "ArticleSubcategories",
            idAttribute: "artsubcatId"
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

model = Alloy.M("ArticleSubcategories", exports.definition, []);

collection = Alloy.C("ArticleSubcategories", exports.definition, model);

exports.Model = model;

exports.Collection = collection;