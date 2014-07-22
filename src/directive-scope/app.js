var app = angular.module('app', [])

	.controller('Controller1', ['$scope', function($scope) {
		$scope.customer = {
			name: 'aji',
			address: 'jeju'
		};
	}])
	.controller('Controller2', ['$scope', function($scope) {
		$scope.customer = {
			name: 'aaa',
			address: 'seoul'
		};
	}])
	.directive('myCustomer', function() {
		return {
			restrict : 'E',
			template: 'Name: {{customer.name}}, Address: {{customer.address}}'
		};
	})
	.directive('myCustomer2', function() {
		return {
			restrict : 'E',
			scope : {
				customer:'=info'
			},
			template: 'Name: {{customer.name}}, Address: {{customer.address}}'
		};
	})

	


