'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('todo')
  .controller('MainCtrl', '$auth', function ($scope, $auth) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    window.validateUser = function() {
      return $auth.validateUser();
    };
  });
