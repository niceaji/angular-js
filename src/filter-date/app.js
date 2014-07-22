
var app = angular.module('app', []);
	
//  https://docs.angularjs.org/api/ng/filter/date
app.controller('MainCtrl', ['$scope', 'dateFilter', function($scope,dateFilter) {

	$scope.time = dateFilter(new Date(), "yy-MM-dd");

}]);


app.controller('SubCtrl', ['$scope', '$filter', function($scope,$filter) {

	$scope.time = $filter('date')(new Date(), "yy-MM-dd");

}]);
