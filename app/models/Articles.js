exports.definition = {
	config: {
		columns: {
		    "articleId": "integer",
		    "title": "text",
		    "brandId": "integer",
		    "mainPhoto": "text",
		    "articleType": "text",
		    "impressionsCount": "integer",
		    "clicksCount": "integer",
		    "linkClicksCount": "integer",
		    "status": "text",
		    "alloy_id": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Articles",
			idAttribute: "articleId"
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