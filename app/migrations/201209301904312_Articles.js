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
