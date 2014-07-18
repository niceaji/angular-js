var app = angular.module('app', []);


app.config(function ($provide) {
	//값변경가능
	$provide.value('appName', 'value test');
});



app.value("myName","aji");


app.controller('MainCtrl', function ($scope, appName, myName){
	$scope.appName = appName;
	$scope.myName = myName;
});