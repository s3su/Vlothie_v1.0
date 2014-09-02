exports.definition = {
	config: {
		columns: {
		    "styleId": "integer",
		    "title": "text",
		    "image": "text",
		    "inHome": "text",
		    "order": "integer",
		    "status": "text",
		    "alloy_id": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Styles",
			idAttribute: "styleId"
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