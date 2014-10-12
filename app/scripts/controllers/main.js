'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('todo')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
