exports.definition = {
	config: {
		columns: {
		    "matfabId": "integer",
		    "title": "text",
		    "image": "text",
		    "status": "text",
		    "alloy_id": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "Materialsfabrics",
			idAttribute: "matfabId"
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