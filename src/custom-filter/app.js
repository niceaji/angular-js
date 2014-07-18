//https://docs.angularjs.org/api/ng/directive/ngController

var app = angular.module('app', [])
			.controller('MemberListCtrl', MemberListController);


app.filter('reverse', function () {
	return function (text) {
		return text.split("").reverse().join("");
	}
});


function MemberListController(){

	this.list = [
		{id:'daum',name:'다음'},
		{id:'kakao',name:'카카오'},
		{id:'twitter',name:'트위터'},
		{id:'facebook',name:'페이스북'}
	];
}

MemberListController.prototype={



};