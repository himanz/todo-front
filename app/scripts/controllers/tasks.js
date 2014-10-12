'use strict';

angular.module('todo')
  .controller('TasksCtrl', ['$scope', 'Task', function ($scope, Task) {
    $scope.tasks = Task.query();
  }]);
