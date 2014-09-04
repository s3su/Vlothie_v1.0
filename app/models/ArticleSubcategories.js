exports.definition = {
	config: {
		columns: {
		    "artsubcatId": "integer",
		    "name": "text",
		    "artcatId": "integer",
		    "status": "text",
		    "alloy_id": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "ArticleSubcategories",
			idAttribute: "artsubcatId"
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