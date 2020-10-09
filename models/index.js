var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://localhost/todo-api", {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");