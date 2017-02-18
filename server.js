var express = require('express');
var app = express();

app.use(express.static(__dirname+"/"))

var PORT= process.env.PORT || 8000;

app.listen(PORT,function(){
	console.log("server running on port 8000")
});
module.exports = app;