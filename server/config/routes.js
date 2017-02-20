var UserController = require('../DataBase/UserController.js');
 var TradeWorkerController = require('../DataBase/TradeWorkerController.js');


module.exports = function (app, express) {
		
	////////////////////////////user/////////////////////////////////////
		app.post('/api/signin', UserController.signin);
		app.post('/api/signup',UserController.signup);
  		app.get('/api/signedin', UserController.checkAuth);


	//////////////////////////TradeWorker///////////////////////////////
		app.post('/api/insert',TradeWorkerController.insert);
		app.get('/api/all',TradeWorkerController.getAllTradeWorker);
};


