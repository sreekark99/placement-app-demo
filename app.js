var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var methodoverride = require("method-override");
var express_sanitizer = require("express-sanitizer");


app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express_sanitizer());
app.use(methodoverride("_method"));


app.get("/", function(req, res){
	//console.log(req);
	res.render("home");
});


app.get("/c-programming", function(req, res){
	//res.send("CP");
	res.render("c-programming");
})

app.get("/dbms", function(req, res){
	//res.send("CP");
	res.render("dbms");
})


var port = process.env.PORT || 3000;
var ip = process.env.IP;
app.listen(port, ip, function () {
  console.log("Connected to SK server");
});