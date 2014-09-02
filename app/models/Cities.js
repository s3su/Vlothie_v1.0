exports.definition = {
	config: {
		columns: {
		    "cityId": "integer",
		    "name": "text",
		    "photo": "text",
		    "info": "text",
		    "countryId": "integer",
		    "latitude": "text",
		    "longitude": "text",
		    "status": "text",
		    "alloy_id": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Cities",
			idAttribute: "cityId"
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