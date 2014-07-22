var app = angular.module('app', [])

	 .controller('Controller', ['$scope', function($scope) {
		$scope.customer = {
			name: 'aji',
			address: 'jeju'
		};
	}])
	.directive('myCustomer', function() {
		return {
			template: 'Name: {{customer.name}}, Address: {{customer.address}}'
		};
	})
	.directive('myCustomer2', function() {
		return {
			templateUrl: 'template.html'
		};
	})
	
// E - Element name: <my-directive></my-directive>
// A - Attribute (default): <div my-directive="exp"></div>
// C - Class: <div class="my-directive: exp;"></div>
// M - Comment: <!-- directive: my-directive exp -->

	.directive('myCustomer3', function() {
		return {
			restrict : 'E',
			templateUrl: 'template.html'
		};
	})

