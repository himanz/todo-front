'use strict';

/**
 * @ngdoc overview
 * @name fakeLunchHubApp
 * @description
 * # fakeLunchHubApp
 *
 * Main module of the application.
 */

var app = angular.module('todo', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth'
  ]);

app.config(['$routeProvider', function ($routeProvider) {
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
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'AuthCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

// app.factory('Task', function($resource) {
//   var tasks = $resource('/api/tasks/:id', {task:tasks}, {
//     'query': { method: 'GET', isArray: true},
//     'update': { method:'PUT' },
//     'save': { method: 'POST', isArray: false}
//   });
//   return tasks;
// });

app.config(function($authProvider) {
    $authProvider.configure({
        apiUrl: 'http://localhost:3000'
    });
});

app.factory('Task', ['$resource', function($resource) {
  function Task() {
    this.service = $resource('http://localhost:3000/api/tasks/:taskId', {taskId: '@id'});
  }
  Task.prototype.all = function() {
    return this.service.query();
  };
  Task.prototype.create = function(attr) {
    return this.service.save(attr);
  };
  return new Task();
}]);

app.factory('User', ['$resource', function($resource) {
  function User() {
    this.service = $resource('http://localhost:3000/api/users/:userId', {userId: '@id'});
  }
  User.prototype.all = function() {
    return this.service.query();
  };
  User.prototype.create = function(attr) {
    return this.service.save(attr);
  };
  return new User();
}]);
