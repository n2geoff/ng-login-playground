'use strict';

/**
 * @ngdoc function
 * @name loginApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the loginApp
 */
angular.module('loginApp')
	.controller('LoginCtrl', function($scope, alert) {
		$scope.login = {};

		$scope.submitLogin = function(user) {
			console.log('Calling Login', user);

			alert('warning', 'opps', 'this has not been developed');
		}

	});
