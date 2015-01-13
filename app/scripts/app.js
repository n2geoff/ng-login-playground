'use strict';

/**
 * @ngdoc overview
 * @name loginApp
 * @description
 * # loginApp
 *
 * Main module of the application.
 */
angular
	.module('loginApp', [
		'ngAnimate',
		'ui.router',
		'ui.bootstrap'
	])
	.config(function($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/");

		//
		// Now set up the states
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "views/main.html"
			})
			.state('about', {
				url: "/about",
				templateUrl: "views/about.html"
			})
			.state('login', {
				url: "/login",
				templateUrl: "views/login.html",
				controller: "LoginCtrl"
			});
	});
