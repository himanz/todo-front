'use strict';

angular.module('todo')
  .controller('AuthCtrl', ['$scope', '$auth', function ($scope, $auth) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) { 
          // handle success response
          console.log(resp);
        })
        .catch(function(resp) { 
          // handle error response
          console.log(resp);
        });
    };
  }]);