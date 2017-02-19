var UserController = require('../DataBase/UserController.js');
 var TradeWorkerController = require('../DataBase/TradeWorkerController.js');
 var CommentController = require('../DataBase/CommentController.js')


module.exports = function (app, express) {
		
	////////////////////////////user/////////////////////////////////////
	 	app.post('/api/signin', UserController.signin);
	 	app.post('/api/signup',UserController.signup);

	// //////////////////////////TradeWorker///////////////////////////////
	 	app.post('/api/insert',TradeWorkerController.insert);
	 	app.get('/api/all',TradeWorkerController.getAllTradeWorker);

	 	app.post('/api/insertC',CommentController.insert);
	 app.get('/api/allC',CommentController.getAllCommentsByTWID);
};


