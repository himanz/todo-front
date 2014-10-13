'use strict';

angular.module('todo')
  .controller('TasksCtrl', ['$scope', 'Task', function ($scope, Task) {
    $scope.tasks = Task.all();

    $scope.createTask = function() {
      var attr = {};
      attr.message = $scope.newMessage;
      var newTask = Task.create(attr);
      $scope.tasks.push(newTask);
      $scope.newTask = '';
    };
  }]);
