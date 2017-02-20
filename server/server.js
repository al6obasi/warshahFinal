var express = require('express')
var mongoose = require('mongoose');
var server = require('http').createServer(app);//
var port = process.env.PORT || 4000;//
var app = express();


require('./config/middleware.js') (app,express); //
require('./config/routes.js') (app,express); //

/////////////////////database//////////////////////////
var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/WarshahDB';
mongoose.connect(mongoURI);
db = mongoose.connection;
// mongoose.Promise = global.Promise;
db.once('open',function () {
	console.log('mongoDB is open');
});

// app.get('api/allC/:tradeWorkerId',function(req,res){
// // mongoose.model('Comment').find({comment:req.params.tradeWorkerId}).then(function(err, comms){
// // 	mongoose.model('Comment').populate(comments, {path:'TradeWorker'}, function (err, comms){
// // 		console.log("lolo")
// // 	res.send(comms)
		
// // 	})
// mongoose.model('Comment').find({}).then(function(err, comms){
// 	res.send(comms)
//  })

// });


// app.get('/api/all',function(req,res){
// mongoose.model('TradeWorker').find({}).then(function(err, users){
// 	res.send(users)
// })

// });

// app.get('/api/users',function(req,res){
// mongoose.model('users').find({}).then(function(err, user){
// 	res.send(user)
// })
// })

////////////////////server////////////////////////////
app.listen(port, function () {
  console.log(' app listening on port 4000!');//
})