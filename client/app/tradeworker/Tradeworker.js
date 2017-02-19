 angular.module('myapp.TradeworkerContr',[])

.controller('TradeworkerContr',function ($scope,$http,$location, Tradeworker){
	$scope.tradeworker = {};
	$scope.allTradeWorker = {};

	$scope.getAllTradeworker = function(){
		Tradeworker.getAll()
		.then(function (data) {
				
			console.log(data)
		})
	}

	$scope.addhandworker = function(){
		Tradeworker.insert($scope.tradeworker)
		.then(function (data) {
			console.log(data);
		})
	}

})