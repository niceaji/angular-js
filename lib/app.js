 angular.module('app', [])
	.controller('ExampleCtrl', ExampleCtrl);

var GIT_REPO = "https://github.com/niceaji/angular-js";

function ExampleCtrl($scope, $http){

	$scope.repo = GIT_REPO;

	$http.get('lib/tree.json').
		success(function(data, status){

			$scope.examples = data.children;
			console.log(data.children)
		}).
		error(function(data,status){
			console.error('http error')
		});
}