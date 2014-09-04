exports.definition = {
	config: {
		columns: {
		    "colorId": "integer",
		    "title": "text",
		    "hexa": "text",
		    "temperature": "text",
		    "status": "text",
		    "alloy_id": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Colours",
			idAttribute: "colorId"
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