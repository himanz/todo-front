'use strict';

angular.module('todo')
  .controller('AuthCtrl', ['$scope', function ($scope) {
  	var auth = 'http://localhost:3000/api/users';
    $scope.user = {
    	email: '',
    	password: ''
    };

    $scope.register = function() {
      auth.save();
    };
   
  }]);