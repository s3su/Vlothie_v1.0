exports.definition = {
	config: {
		columns: {
		    "artseaId": "integer",
		    "articleId": "integer",
		    "season": "text",
		    "status": "text",
		    "alloy_id": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "ArticleSeasons",
			idAttribute: "artseaId"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};