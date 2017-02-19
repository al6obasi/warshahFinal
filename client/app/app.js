 angular.module('myapp',[
 	'myapp.userController',
	'myapp.TradeworkerController',

	'ngRoute']);

.config(function($routeProvider){
	$routeProvider.when('/adduser',{
		templateUrl:'../user/signup.html',                   
		controller:'userController'                  
	})
	.when('/signin',{
		templateUrl:'../user/signin.html',
		controller:'userController'                  
	})
	.when('/signup',{
		templateUrl:'../user/signup.html',
		controller:'userController'                  
	})
	.when('/addTradeworker',{
		templateUrl:'./tradworker/tradworker.html',
		controller:'TradeworkerController'                 
	})
	.when('/getTradeworker',{
		templateUrl:'./tradworker/tradworker.html',
		controller:'TradeworkerController'                 
	})
	.otherwise({
		redirectTo:'/signin'
	})
	
})