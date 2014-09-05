exports.definition = {
    config: {
        columns: {
            artseaId: "integer",
            articleId: "integer",
            season: "text",
            status: "text",
            alloy_id: "integer"
        },
        adapter: {
            type: "sql",
            collection_name: "ArticleSeasons",
            idAttribute: "artseaId"
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

model = Alloy.M("ArticleSeasons", exports.definition, []);

collection = Alloy.C("ArticleSeasons", exports.definition, model);

exports.Model = model;

exports.Collection = collection;