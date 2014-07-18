angular.module('RepeatApp', [])
	.controller('ExampleController', ['$scope', function($scope) {
		$scope.list = ['a','b','c'];
	}]);