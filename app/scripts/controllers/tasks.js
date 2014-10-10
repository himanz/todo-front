'use strict';

angular.module('fakeLunchHubApp')
  .controller('TasksCtrl', ['$scope', 'Task', function ($scope, Task) {
    $scope.tasks = Task.query();
  }]);
