//make an angulare module called(myapp)
 angular.module('myapp.user',[])
//make a controller called (usercontr) inside myapp module
// the controller has a dependencies ['$scope','$http','$location','$roteparams',
//                                     function ($scope,$http,$location,$roteparams){}]	
.controller('userController',function ($scope,$http,$location,User ,$window){
	$scope.user = {};
	$scope.loginData = false
	console.log("beging", $scope.loginData)
	  $scope.signin = function () {
	  	console.log(User)
	    User.signin($scope.user)
	      .then(function (token) {
	      	console.log(token)
	        $window.localStorage.setItem('com.shortly', token);
	        $scope.loginData = true
	        console.log($scope.loginData)
	        $location.path('/home');
	        console.log($scope.loginData)
	      })
	      .catch(function (error) {
	        console.error(error);
	      });
	  };

	  $scope.signup = function () {
	    User.signup($scope.user)
	      .then(function (token) {
	        $window.localStorage.setItem('com.shortly', token);
	        $scope.loginData = true
	        console.log($scope.loginData)
	        $location.path('/home');
	        console.log($scope.loginData)
	      })
	      .catch(function (error) {
	        console.error(error);
	      });
	  };
})

