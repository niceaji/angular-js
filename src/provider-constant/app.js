var app = angular.module('app', []);

//constant(상수)는 모든 곳에 inject(주입)할 수 있다. 상수는 그 값을 변경할 수 없다
app.config(function ($provide) {
	$provide.constant('appName', 'constant test');
});

app.controller('MainCtrl', function ($scope, appName){
	$scope.appName = appName;
});