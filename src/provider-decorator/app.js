var app = angular.module('app', []);



app.value("myName","aji");

app.config(function ($provide) {
	//constant는 decorate 못함 
	$provide.decorator('myName', function ($delegate) {
		return 'nice ' + $delegate ;
	});
});



app.controller('MainCtrl', function ($scope, myName){
	$scope.myName = myName;
});