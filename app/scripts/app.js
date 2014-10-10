'use strict';

/**
 * @ngdoc overview
 * @name fakeLunchHubApp
 * @description
 * # fakeLunchHubApp
 *
 * Main module of the application.
 */

var app = angular.module('fakeLunchHubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/tasks', {
      templateUrl: 'views/tasks.html',
      controller: 'TasksCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.factory('Task', ['$resource', function($resource) {
  return $resource('/api/tasks/:id.json', null, {
    'update': { method:'PUT' }
  });
}]);