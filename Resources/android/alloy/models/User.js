var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            name: "text",
            age: "integer",
            date_added: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "user"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) {
                        if ("item" === key && 0 >= value.length) return "Error: No item!";
                        if ("done" === key && 0 >= value.length) return "Error: No completed flag!";
                    }
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(todo) {
                return todo.get("done");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("user", exports.definition, []);

collection = Alloy.C("user", exports.definition, model);

exports.Model = model;

exports.Collection = collection;