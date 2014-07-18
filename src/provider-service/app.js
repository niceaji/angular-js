var app = angular.module('app', []);

app.config(function ($provide) {
	//주입이 가능한 constructor(생성자)
	$provide.service('appName', function(){
		this.name = "service";
		this.version = "0.1";
	});
});

app.service("info",function(){
	this.value = "info";
});

app.controller('MainCtrl', function ($scope, appName,info){
	$scope.appName = appName;
	$scope.info = info;
});