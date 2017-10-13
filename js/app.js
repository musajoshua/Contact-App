var contactApp = angular.module("contactApp",['ngRoute']);
contactApp.config(function ($routeProvider) {
	$routeProvider
	.when("/add", {
		templateUrl : "./views/add.html",
		controller: 'addContactCntrl'
	})
	.when("/view", {
		templateUrl : "./views/view.html",
		controller: 'viewContactCntrl'
	})
	.when("/edit", {
		templateUrl : "./edit.html",
		controller: 'editContactCntrl'
	})
	.otherwise({
		redirectTo : '/add'
	})
});