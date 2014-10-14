'use strict';

angular.module('todo')
  .controller('AuthCtrl', ['$scope', 'User', function ($scope, User) {
  	// var auth = 'http://localhost:3000/api/users';
   //  $scope.user = {
   //  	email: '',
   //  	password: ''
   //  };

    $scope.register = function() {
      var attr = {};
      attr.email = $scope.userEmail;
      attr.password = $scope.userPassword;
      var newUser = User.create(attr);
      console.log(newUser);
      $scope.users.push(newUser);
      $scope.newUser = '';
    };
   
  }]);