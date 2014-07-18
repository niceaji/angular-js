var app = angular.module('app', []);

app.config(function ($provide) {
	//factory는 일반 함수를 주입해서 AngularJS가 호출하도록 하는 것이고 service 는 constructor를 주입
	$provide.factory('appName', function(){
		return {
			name : "service",
			version : "0.1"
		}

	});
});

app.factory("info",function(){
	return  {value:'info text'};
});

app.controller('MainCtrl', function ($scope, appName,info){
	$scope.appName = appName;
	$scope.info = info;
});