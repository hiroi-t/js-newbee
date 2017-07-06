var express = require("express");
var app = express();
require('date-utils');
var dt = new Date();
var formattedDate = dt.toFormat("YYYY/MM/DD HH24:MI:SS");

var server = app.listen(3000, function(){
	console.log("Node.js is listening to PORT:" + server.address().port);
});

var sampleList = [
	{
		id: "001",
		name: "photo001.jpg",
		type: "jpg",
		dataUrl: "http://localhost:3000/data/photo001.jpg"
	},{
		id: "002",
		name: "photo002.jpg",
		type: "jpg",
		dataurl: "http://lodalhost:3000/data/photo002.jpg"
	}
]

var dateList = [
	{
		'status': "OK", 
		"now": formattedDate
	}
]

var err = [
	{
		'status': 'Error'
	}
]

app.get("/time", function(req, res, next){
	res.json(dateList);
});
app.get("/api/photo/list", function(req, res, next){
	res.json(sampleList);
});
app.use(function(req, res, next){
	res.status(404);
	res.json(err);
});
