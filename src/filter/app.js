//https://docs.angularjs.org/api/ng/directive/ngController

 angular.module('app', [])
	.controller('MemberListCtrl', MemberListController);



function MemberListController(){

	this.list = [
		{id:'daum',name:'다음'},
		{id:'kakao',name:'카카오'},
		{id:'twitter',name:'트위터'},
		{id:'facebook',name:'페이스북'}
	];
}

MemberListController.prototype={

	who : function(user){
		alert(user.id +", "+ user.name);
	},
	add :function(){
		this.list.push({id:'dynamic', name:'동적추가'});
	},
	delete : function(user){
		var index = this.list.indexOf(user);
		this.list.splice(index, 1);
	}

};