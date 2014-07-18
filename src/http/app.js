 angular.module('controllerAsExample', [])
	.controller('MemberListCtrl', MemberListCtrl);



function MemberListCtrl($scope, $http){

	$http.get('members.json').
		success(function(data,status){
			$scope.members = data;
		}).
		error(function(data,status){
			console.error('http error')
		});

}