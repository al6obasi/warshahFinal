var mongoose= require ("mongoose"); 

var TradeWorkerSchema = new mongoose.Schema({
	
	username:{
		type     : String, 
		required : true,
		unique   : true
	}, 
	password:{
		type     : String, 
		required : true
	},
	email:{
		type     : String, 
		required : true
	},
	place:{
		type     : String, 
		required : true
	},
	service:{
		type     : String, 
		required : true
	},
	phone:{
		type     : Number,
		required : true 
	},
	experiance:{
		type     : String
	},
	rating:{
		type     : Array
	}
}); 

var TradeWorker = mongoose.model('TradeWorker',TradeWorkerSchema)
module.exports = TradeWorker ; 

