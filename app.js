var express = require("express");
var app = express();
app.set("view engine","jade");

app.get("/",function(req,res){
	res.render("signup");
});

app.listen(8080);
