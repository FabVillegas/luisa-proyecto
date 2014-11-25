angular.module('luisa-proyecto', ['ui.router', 'firebase', 'angular-carousel', 'ngDialog']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('first');
	$stateProvider.
	state('first', {
		url: '/first',
		templateUrl: 'views/firstTemplate.html',
		controller: 'firstCtrl'
	});
}]);
