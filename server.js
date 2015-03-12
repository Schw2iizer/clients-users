var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
var port = (8080);
var mongoUri = "mongodb://localhost:27017/clients-user";
var User = require("./lib/Models/usersModel");

mongoose.connect(mongoUri);
mongoose.connection.once("open", function(){
	console.log("Connected to db at " + mongoUri);
})

app.use(bodyParser.json());

app.post("/api/user", function(req, res){
	User.create(req.body).then(function(response){
		res.status(200).json(response);
	}, function(err) {
		res.status(418).json(err);
	})
});


app.get("/api/user", function(res, res){
	User.find(function(err, docs){
		if(!err){
			if(docs.length === 0){
				res.status(404).send("No documents found");
			} else {
				res.status(200).json(docs);
			}
		}else {
			res.status(500).json(err);
		}
	})
})


app.listen(port, function(){
	console.log("listening on " + port);
}); 


