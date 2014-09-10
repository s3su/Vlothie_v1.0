var Alloy = require('alloy'),
    _ = require("alloy/underscore")._,
	model, collection;

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

model = Alloy.M('Articles',
	exports.definition,
	[(function(migration){
 migration.name = 'Articles';
migration.id = '201209301904312';
migration.up = function(migrator) {
	migrator.createTable({
		"columns" : {
            "articleId" : "string",
            "title" : "string",
            "brandId" : "integer",
            "mainPhoto" : "string",
            "articleType" : "string",
            "impressionsCount" : "integer",
            "clicksCount" : "integer",
            "linkClicksCount" : "integer",
            "status" : "string"
        }
	});
};

migration.down = function(migrator) {
	migrator.dropTable("Articles");
};
})]
);

collection = Alloy.C('Articles',
	exports.definition,
	model
);

exports.Model = model;
exports.Collection = collection;
