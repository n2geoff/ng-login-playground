'use strict';

/**
 * @ngdoc service
 * @name loginApp.alert
 * @description
 * # alert
 * Service in the loginApp.
 */
angular.module('loginApp')
	.service('alert', function alert($rootScope, $timeout) {
		var alertTimeout;

		return function(type, title, message, timeout) {

			$rootScope.alert = {
				hasBeenShown: false,
				show: true,
				type: type,
				message: message,
				title: title
			};

			$timeout.cancel(alertTimeout);

			alertTimeout = $timeout(function() {
				$rootScope.alert.show = false;
			}, timeout || 2000);

		}
	});
