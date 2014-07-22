var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope','$interval', function($scope,$interval){

	$scope.count = 0;

	$scope.timeId = null;

	function run(){
		if($scope.timeId){
			return;
		}

		$scope.timeId = $interval(function(){
			$scope.count++;
		},200);
	}

	$scope.stop = function(){
		$interval.cancel($scope.timeId);
		$scope.timeId = null;
	};

	$scope.start = function(){
		run();
	};

	run();

}]);

