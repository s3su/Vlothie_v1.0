exports.definition = {
	config: {
		columns: {
		    "measuretypeId": "integer",
		    "type": "text",
		    "unit": "text",
		    "categoryId": "integer",
		    "status": "text",
		    "alloy_id": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "MeasurementsTypes",
			idAttribute: "measuretypeId"
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