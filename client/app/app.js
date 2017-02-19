 angular.module('myapp',['myapp.usercContr',
	'myapp.TradeworkerContr',
	'ngRoute']);

.config(function($routeProvider){
	$routeProvider.when('/adduser',{
		templateUrl:'./user/signup.html',                   
		controller:'usercContr'                  
	})
	.when('/addTradeworker',{
		templateUrl:'./tradworker/tradworker.html',
		controller:'TradeworkerContr'                 
	})
	.when('/getTradeworker',{
		templateUrl:'./tradworker/tradworker.html',
		controller:'TradeworkerContr'                 
	})
	.otherwise({
		redirectTo:'/'
	})
	
})