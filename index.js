var express     = require("express"),
    app         = express(),
    port        = 3000,
    bodyParser  = require("body-parser");
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
app.get("/", function(req, res) {
    res.send("HI!!");
});

app.use("/api/todos", todoRoutes);

app.listen(port, function() {
    console.log("App is running on " + port);
});